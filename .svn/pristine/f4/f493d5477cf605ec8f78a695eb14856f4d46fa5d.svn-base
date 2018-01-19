import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import Button from 'button';//引入button组件
import Alert from 'alert';//引入alert组件
import Loading from 'loading';//引入loading组件
/**
 * 引入fetch
 */
import 'fetchJs';
import 'whatwg-fetch';
import { config,strUtil,dataUtil,bussinessUtil,sessionUtil,urlUtil,localStorageUtil } from 'publicJs';
let sessionKey=bussinessUtil.getSessionKey();
console.log(sessionKey);
export default class Container extends Component{
  constructor(props){
    super(props);
    this.state={
      alertText: '',//提示框文本
      alertShow: false,//提示框默认不显示
      isLoading: false,//是否加载中
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
   * 点击事件
   * @return {[type]} [description]
   */
  btnClick=()=>{
    this.getUserInfo();
  }
  /**
   * 获取用户信息
   */
  getUserInfo=()=>{
    bussinessUtil.setCZ('0');//设置充值免除解除
    window.location.href='/native/account_viewall/account_viewall.html';
  }
  render(){
    return(
      <div className="user_success">
        <div className="success"></div>
        <div className="success_font">免密充值解除成功</div>
        < Button  btnCss='button but' btnText='确定' btnClick={this.btnClick}/>
        <Alert text={this.state.alertText} show={this.state.alertShow} />
        <Loading loading={this.state.isLoading} />
      </div>
    )
  }
}