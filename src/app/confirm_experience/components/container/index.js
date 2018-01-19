import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import Alert from 'alert';//引入alert组件
import Loading from 'loading';//引入loading组件
import Button from 'button';//引入button组件
import LoginOver from 'loginOver';//引入登录超时组件
import Checkbox from 'checkbox';//引入checkbox组件
/**
 * 引入fetch
 */
import 'fetchJs';
import 'whatwg-fetch';
import { config,strUtil,bussinessUtil,sessionUtil,dataUtil } from 'publicJs';
let pageInfo=bussinessUtil.getPageInfo();//获取页面传递过来的数据
let sessionKey=bussinessUtil.getSessionKey();

//组合组件
export default class Container extends Component{
  constructor(props){
    super(props);
    this.state={
      alertText: '',//提示框文本
      alertShow: false,//提示框默认不显示
      isLoading: false,//loading状态
      loginShow: false,//登录超时
      checked: true,
      disabled: false,
    };
  }
  //组件完成加载
  componentDidMount(){
    /**
     * 适配屏幕
     */
    bussinessUtil.configScreen();
  }
  //修改提示框内容
  updateText=(text,show)=>{
    this.setState({alertText: text,alertShow: show});
    //如果show为true
    if(show){
      setTimeout(()=>{this.setState({alertShow: false});},config.alertTime);
    }
  }
  //协议点击事件
  changeCheck=()=>{
    if(!this.state.checked){
      this.setState({disabled: false,checked: !this.state.checked});
    }else{
      this.setState({disabled: true,checked: !this.state.checked});
    }
  }
  /**
   * 提交确定按钮
   * @return {[type]} [description]
   */
  btnClick=()=>{
    this.setState({isLoading: true});
    let url=`/product/buy/confirm`;
      let param=`sessionKey=${sessionKey}&orderAmount=60000&productId=${pageInfo.productId}&birdCoin=0&userCouponId=${strUtil.isEmpty(pageInfo.coupons[0].userCouponId)?'':pageInfo.coupons[0].userCouponId}`;
      let successCall=(data)=>{
        this.setState({isLoading: false});
        this.updateText('下单成功!',true);//更新弹窗
        window.location.href='../account_viewall/account_viewall.html'
      }
      let errorCall=(data)=>{
        this.setState({isLoading: false});
        /**
         * 如果resultCode等于10000006,则弹出去登录的弹窗,否则就是正常的提示弹窗
         */
          if(data.resultCode==config.loginTimeOver){
            this.setState({loginShow: true});
          }else{
            let error=dataUtil.getMessage(data.resultCode);
            this.updateText(error,true);//更新弹窗
          }
      }
      let errorCall2=(e)=>{
        this.setState({isLoading: false});
        this.updateText(e,true);//更新弹窗
      }
      dataUtil.getData(url,'POST',param,successCall,errorCall,errorCall2);
  }
  render(){
    let dealBtn=()=>{
      if(this.state.disabled){
        return <Button btnCss='sure disabled' btnText='确认购买' disabled parentCss='parent'/>
      }else{
        return <Button btnCss='sure' btnText='确认购买' parentCss='parent' btnClick={this.btnClick}/>
      }
    }
    let btn=dealBtn();
    return(
      <div className="Container">
        <div className="pay">
          <div className="t1">应付金额</div>
          <div className="t2">60000元</div>
        </div>
        <div className="time">
          到期日期：{strUtil.formatData(pageInfo.productExpireDate)}
        </div>
        <div className="security">
          <div className="change">
            <div className="t1">
              <span className="securityIcon"></span>
              选择理财金券
            </div>
          </div>
          <div className="contant">
            <div className="detail">
              <p className="t1">体验金券</p>
              <p className="t2">有效期：{strUtil.formatData(pageInfo.coupons[0].couponDate)}</p>
            </div>
            <p className="desc">{strUtil.formatData(pageInfo.coupons[0].desc)}</p>
            <span className="yesIcon active"></span>
          </div>
        </div>
        <div className="pay wait">
          <div className="t1">待收收益：<span className="high">{pageInfo.revenue}鸟币</span></div>
        </div>
        <div className="pay real">
          <div className="t1">实际支付</div>
          <div className="t2">0元</div>
        </div>
        <Checkbox parentCss='check' changeCheck={this.changeCheck} checked={this.state.checked}>
          <span className='agree'>我已阅读并同意</span>
          <a href='https://www.lingtouniao.com/h5/profit.html'>《投资协议》</a>
        </Checkbox>
        {btn}
        <Alert text={this.state.alertText} show={this.state.alertShow} />
        <LoginOver type='2' show={this.state.loginShow} />
        <Loading loading={this.state.isLoading} />
      </div>

    )

  }
}
