import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import Alert from 'alert';//引入alert组件
import LoginOver from 'loginOver';//引入登录超时组件
import Button from 'button';//引入按钮组件
import Loading from 'loading';//引入loading组件
/**
 * 引入fetch
 */
import 'fetchJs';
import 'whatwg-fetch';
import { config,strUtil,dataUtil,bussinessUtil,bigDataUtil } from 'publicJs';
let pageInfo=bussinessUtil.getPageInfo();
let sessionKey=bussinessUtil.getSessionKey();
//组合组件
export default class Container extends Component{
	constructor(props){
		super(props);
    this.state={
      alertText: '',//提示框文本
      alertShow: false,//提示框默认不显示
      isLoading: false,//是否加载中
      loginShow: false, //是否显示登录超时
    }
	}
	//组件完成加载
	componentDidMount(){
		/**
       * 适配屏幕
       */
      bussinessUtil.configScreen();
	}

  /**
   * 提现事件
   */
  btnClick=()=>{
     this.setState({isLoading: true});
    let url=`/user/withdrawals`;
    let param=`orderAmount=${pageInfo.currentMoney}&sessionKey=${sessionKey}&birdCoin=${pageInfo.birdCoin}`;
    let successCall=(data)=>{
      let phone=bussinessUtil.getMobile();//获取手机号码
      let bigData={
        "index": '1',
        "name": 'mobile',
        "value": phone
      }
      //传入大数据需要的参数
      bigDataUtil.setBigDataNeedParam(bigData);
      //传入大数据标识
      bigDataUtil.setBigDataUserId(phone);
      //传入大数据事件
      bigDataUtil.setBigDataEvent(config.bigDataEvent.withdraw);
      this.setState({isLoading: false});
      window.location.href=strUtil.formatData(data.data.url);
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
      this.updateText(e,true);//更新弹窗
    }
    dataUtil.getData(url,'POST',param,successCall,errorCall,errorCall2);
  }
	render(){
        return(
            <div className="Container">
              <div className="bank">
                <div className="t1">
                  <img src={strUtil.formatData(pageInfo.logoUrl)} alt="" className="bankIcon"/>
                  <span className="bankName">{strUtil.formatData(pageInfo.bankName)}</span>
                </div>
                <div className="t2">
                  <p className="tailNum">尾号{strUtil.formatData(pageInfo.cardNo).substring(strUtil.formatData(pageInfo.cardNo).length-4,strUtil.formatData(pageInfo.cardNo).length)}</p>
                </div>
              </div>
              <ul className="list">
                <li className="item">
                  <p className="t1">提现余额</p>
                  <p className="t2">{strUtil.formatData(pageInfo.money)}元</p>
                </li>
                <li className="item">
                  <p className="t1">手续费</p>
                  <p className="t2">{strUtil.formatData(pageInfo.serviceCharge)}元</p>
                </li>
                <li className="item">
                  <p className="t1">当月还有免费提现次数</p>
                  <p className="t2">{strUtil.formatData(pageInfo.freeCounter)}次</p>
                </li>
                <li className="item">
                  <p className="t1">到账时间</p>
                  <p className="t2">预计下个工作日11点前</p>
                </li>
                <li className="item">
                  <p className="t1">实际到账</p>
                  <p className="t2 red">{strUtil.formatData(pageInfo.currentMoney)}元</p>
                </li>
              </ul>
              <Button btnCss='sure' btnText='确认提现' parentCss='parent' btnClick={this.btnClick}/>
              <Alert text={this.state.alertText} show={this.state.alertShow} />
              <LoginOver type='2' show={this.state.loginShow} />
              <Loading loading={this.state.isLoading} />
            </div>
            );
  }
}
