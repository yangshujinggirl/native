import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import Button from 'button';//引入图形验证码组件
import Loading from 'loading';//引入loading组件
import LoginOver from 'loginOver';//引入登录超时组件
import Alert from 'alert';//引入alert组件
/**
 * 引入fetch
 */
import 'fetchJs';
import 'whatwg-fetch';
import { config,strUtil,dataUtil,bussinessUtil,bigDataUtil } from 'publicJs';
let pageInfo=bussinessUtil.getPageInfo();//获取页面传递过来的数据
var sessionKey=bussinessUtil.getSessionKey();//获取sessionkey
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
  //修改提示框内容
  updateText=(text,show)=>{
    this.setState({alertText: text,alertShow: show});
    //如果show为true
    if(show){
      setTimeout(()=>{this.setState({alertShow: false});},config.alertTime);
    }
  }
  /**
   * 提交充值
   */
  btnClick=()=>{
    this.setState({isLoading: true});
    let url=`/user/recharge`;
    let param=`sessionKey=${sessionKey}&orderAmount=${pageInfo.userRechargeMoney}`;
    let successCall=(data)=>{
      this.setState({isLoading: false});
      bussinessUtil.setUsableBalance(parseFloat(pageInfo.usableBalance)+parseFloat(pageInfo.userRechargeMoney));//更新用户金额
      this.updateText('充值成功',true);//更新弹窗
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
      bigDataUtil.setBigDataEvent(config.bigDataEvent.recharge);
      let url=bussinessUtil.getOtherPage();//获取跳转充值的页面
      window.location.href=url;
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
        return(
            <div className="Container">
              <div className="bank">
                <div className="t1">
                  <img src={pageInfo.logoUrl} alt="" className="bankIcon"/>
                  <span className="bankName">{strUtil.formatData(pageInfo.bankName)}</span>
                </div>
                <div className="t2">
                  <p>尾号{pageInfo.cardNo.substring(strUtil.formatData(pageInfo.cardNo).length-4,strUtil.formatData(pageInfo.cardNo).length)}</p>
                  <p className="limit">单笔限额{strUtil.formatData(pageInfo.chargeTimeLimit)}万元，单日限额{strUtil.formatData(pageInfo.chargeDateLimit)}万元</p>
                </div>
              </div>
              <ul className="list">
                <li className="item">
                  <p className="t1">账户余额</p>
                  <p className="t2">{strUtil.formatData(pageInfo.usableBalance)}元</p>
                </li>
                <li className="item">
                  <p className="t1">充值金额</p>
                  <p className="t2">{strUtil.formatData(pageInfo.userRechargeMoney)}元</p>
                </li>
              </ul>
              <Button btnCss='sure' btnText='确认充值' parentCss='parent' btnClick={this.btnClick}/>
              <Alert text={this.state.alertText} show={this.state.alertShow} />
              <LoginOver type='2' show={this.state.loginShow} />
              <Loading loading={this.state.isLoading} />
            </div>
            );
  }
}
