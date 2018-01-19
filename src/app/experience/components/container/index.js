import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import Alert from 'alert';//引入alert组件
import Loading from 'loading';//引入loading组件
import Button from 'button';//引入button组件
import LoginOver from 'loginOver';//引入登录超时组件
/**
 * 引入fetch
 */
import 'fetchJs';
import 'whatwg-fetch';
import { config,strUtil,bussinessUtil,sessionUtil,dataUtil,urlUtil,dateUtil } from 'publicJs';
var id=urlUtil.getSearch('id');//产品id
var sessionKey=sessionUtil.get('sessionKey');//获取sessionkey
var detailData;//详情数据
var orderInfo;//下单的信息
//组合组件
export default class Container extends Component{
  constructor(props){
    super(props);
    this.state={
      alertText: '',//提示框文本
      alertShow: false,//提示框默认不显示
      isLoading: true,//loading状态
      isLoading2: false,//提交loading
      loginShow: false, //是否显示登录超时
    };
  }
  //组件完成加载
  componentDidMount(){
      /**
       * 适配屏幕
       */
      bussinessUtil.configScreen();
      this.getData();
  }
  /**
   * 获取详情数据
   * @return {[type]} [description]
   */
  getData=()=>{
    let url=`/productDetail`;
    let param=`sessionKey=${sessionKey}&id=${id}`;
    let successCall=(data)=>{
        detailData=data.data;
        this.setState({isLoading: false});
    }
    let errorCall=(data)=>{
      let error=dataUtil.getMessage(data.resultCode);
      this.updateText(error,true);//更新弹窗
    }
    let errorCall2=(e)=>{
      this.updateText(e,true);//更新弹窗
    }
    dataUtil.getData(url,'POST',param,successCall,errorCall,errorCall2);
  }
  //修改提示框内容
  updateText=(text,show)=>{
    this.setState({alertText: text,alertShow: show});
    //如果show为true
    if(show){
      setTimeout(()=>{this.setState({alertShow: false});},config.alertTime);
    }
  }

  /**
   * 确定购买
   */
  btnClick=()=>{
    if(bussinessUtil.isLogin()){
      this.setState({isLoading2: true});
      let url=`/user/order/orderPrepare`;
      let param=`sessionKey=${sessionKey}&productId=${id}&orderAmount=60000`;
      let successCall=(data)=>{
          orderInfo=data.data;
          orderInfo.userOrderMoney=this.state.money;
          orderInfo.productId=id;
          bussinessUtil.setPageInfo(orderInfo);//传递数据到下单页
          this.setState({isLoading2: false});
          window.location.href='../confirm_experience/confirm_experience.html';
      }
      let errorCall=(data)=>{
        /**
         * 如果resultCode等于10000006,则弹出去登录的弹窗,否则就是正常的提示弹窗
         */
        if(data.resultCode==config.loginTimeOver){
            this.setState({loginShow: true,isLoading2:false});
        }else{
          let error=dataUtil.getMessage(data.resultCode);
          this.updateText(error,true);//更新弹窗
        }
      }
      let errorCall2=(e)=>{
        this.updateText(e,true);//更新弹窗
      }
      dataUtil.getData(url,'POST',param,successCall,errorCall,errorCall2);
    }else{
      bussinessUtil.goLogin('/native/home/home.html');
    }

  }

  render(){
    /**
     * 处理内容部分
     * @return {[type]} [description]
     */
    let dealCon=()=>{
      if(this.state.isLoading){
        return(
          <div>
         <Loading loading={this.state.isLoading} />
         </div>
        )
      }else{
        return(
          <div className="Container">
            <div className="top">
              <div className="productHead">
                  <p className="head">体验标</p>
                  <div className="prop">
                    <div className="fr">
                      <div className="bigfield">
                        <span className="tNum">
                          {strUtil.formatPercent(strUtil.formatData(detailData.annualIncomeText))}
                        </span>
                        <i className="unit">%</i>
                      </div>
                      <span className="caption">历史年化收益率</span>
                    </div>
                    <div className="fr two">
                      <div className="bigfield">
                        <span className="tNum">
                          {strUtil.formatData(detailData.productDeadline)}
                        </span>
                        <i className="unit">天</i>
                      </div>
                      <span className="caption">投资期限</span>
                    </div>
                  </div>
              </div>
              <div className="money">
                <div className="fr">
                  <span className="caption">起投金额:{strUtil.formatData(detailData.staInvestAmount)}元</span>
                </div>
                <div className="fr">
                  <span className="caption">起息日：{strUtil.formatData(detailData.rateCalculateType)}</span>
                </div>
              </div>
            </div>
            <div className="goBack">
                <p>收益方式：{strUtil.formatData(detailData.repaymentType)}</p>
            </div>
            <div className="project">
              <div className="describe">项目描述</div>
              <p className="text">
                {strUtil.formatData(detailData.productTitle)}
              </p>
            </div>

            <Button btnCss='sure' btnText='立即体验' btnClick={this.btnClick} parentCss='parent'/>
            <Alert text={this.state.alertText} show={this.state.alertShow} />
            <LoginOver type='2' show={this.state.loginShow} url='../home/home.html' />
            <Loading loading={this.state.isLoading} />
          </div>
        )
      }
    }
    let con=dealCon();
    return(
      <div>{con}</div>
    )

  }
}
