import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import Button from 'button';//引入button组件
import Alert from 'alert';//引入alert组件
import LoginOver from 'loginOver';//引入登录超时组件
import Loading from 'loading';//引入loading组件
import {config,strUtil,dataUtil,bussinessUtil,sessionUtil} from 'publicJs';
/**
 * 引入fetch
 */
import 'fetchJs';
import 'whatwg-fetch';
var sessionKey=sessionUtil.get('sessionKey');//获取sessionkey
let isRealname=bussinessUtil.isRealname();//是否实名
let isCard=bussinessUtil.isCard();//是否绑卡
let isCZ=bussinessUtil.isCZ();//是否充值免密
//组合组件
export default class Container extends Component{
  constructor(props){
    super(props);
    this.state={
      alertText: '',//提示框文本
      alertShow: false,//提示框默认不显示
      alert2Show: false,//提示框默认不显示
      isLoading: false,//loading状态
      loginShow: false, //是否显示登录超时
    }
  }
  //组件渲染之前
  componentWillMount(){
    let pageName='user_install';
    let pageUrl=window.location.href;
    bussinessUtil.dealPage(pageName,pageUrl);
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
   * 退出方法
   * @return {[type]} [description]
   */
  btnClick=()=>{
    this.setState({isLoading: true});
    let url=`/user/login/logout`;
    let param=`sessionKey=${sessionKey}`;
    let successCall=(data)=>{
      this.setState({isLoading: false});
      sessionUtil.del('sessionKey');
      this.updateText('退出成功',true);
      window.location.href='../home/home.html';//返回首页
    }
    let errorCall=(data)=>{
      this.setState({isLoading: false});
      let error=dataUtil.getMessage(data.resultCode);
      this.updateText(error,true);//更新弹窗
    }
    let errorCall2=(e)=>{
      this.setState({isLoading: false});
      this.updateText(e,true);//更新弹窗
    }
    dataUtil.getData(url,'POST',param,successCall,errorCall,errorCall2);
  }
  /**
   * 取消方法
   */
  btn1Click=()=>{
    this.setState({alert2Show:false});
  }
  /**
   * 解除免密的方法
   */
  btn2Click=()=>{
    this.getAgreement(1);
  }
  /**
   * 签约免密的方法
   *
   */
  btn3Click=()=>{
    this.getAgreement(0);
  }
  /**
   * 跳转实名页面
   */
  goRealname=()=>{
    if(isRealname){
      return false;
    }else{
      let pageName='user_realname';
      let pageUrl='../user_realname/user_realname.html';
      bussinessUtil.dealPage(pageName,pageUrl);
    }

  }

  /**
   * 跳转绑卡页面
   */
  goCard=()=>{
    if(isCard){
      return false;
    }else{
      let pageName='user_card';
      let pageUrl='../user_card/user_card.html';
      bussinessUtil.dealPage(pageName,pageUrl);
    }

  }

  /**
   * 调用免密接口
   * bind 1为解约 否则为签约
   */
  getAgreement=(bind)=>{
    this.setState({isLoading:true});
    let url=`/user/agreement`;
    let param=`agreement_type=ZCZP0800&unbind=${bind}&sessionKey=${sessionKey}`;
    let successCall=(data)=>{
      bussinessUtil.setCurrentPage();//当前页面传入session
      this.setState({isLoading:false});
      window.location.href=data.data.url;
    }
    let errorCall=(data)=>{
      /**
       * 如果resultCode等于10000006,则弹出去登录的弹窗,否则就是正常的提示弹窗
       */
        if(data.resultCode==config.loginTimeOver){
            this.setState({isLoading: false,loginShow: true});
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
  /**
   * 点击充值免密
   * @return {[type]} [description]
   */
  onCZ=()=>{
    /**
     * 实名绑卡过才可以免密充值
     * @param  {Boolean} isRealname&&isCard [description]
     * @return {[type]}                     [description]
     */
    if(isRealname&&isCard){
      this.setState({alert2Show:true});
    }

  }
  render(){
    var dealBtn=()=>{
      return < Button  btnClick={this.btnClick} type="solid" btnCss='button' btnText='退出登录'/>
    }
    var btn=dealBtn();
    var dealAlert=()=>{
      if(isCZ){
        return <Alert  type='2'  show={this.state.alert2Show}
          title='提示'  btn1Text='还是算了' btn2Text='解除'
           btn1Click={this.btn1Click}  btn2Click={this.btn2Click}>
           <p className='alert-content'>解除免密充值后,每次充值都将需要输入支付密码。您也可以以后再次开通。</p>
           <p className='alert-content'>是否解除？</p>
        </Alert>
      }else{
        return <Alert  type='2'  show={this.state.alert2Show}
          title='提示'  btn1Text='取消' btn2Text='立即开通'btn1Click={this.btn1Click}
          btn2Click={this.btn3Click}>
           <p className='alert-content'>开通免密充值后,下次充值将不再需要输入支付密码。您也可以随时解除。</p>
           <p className='alert-content'>是否立即开通？</p>
        </Alert>
      }
    }
    var alert=dealAlert();
    return(
      <div className="install-list">
        <ul className="list">
          <li className="first" onClick={this.goRealname}>
            <a href='javascript:void(0)'>
              <span className="list-left">实名认证</span>
              <span className="list-right">{isRealname?'已实名':'未实名'}</span>
              <span className={`list-icon ${isRealname?'hide':''}`}></span>
            </a>
          </li>
          <li onClick={this.goCard}>
            <a href='javascript:void(0)'>
              <span className="list-left">绑定银行卡</span>
              <span className="list-right">{isCard?'已绑定':'未绑定'}</span>
              <span className={`list-icon ${isCard?'hide':''}`}></span>
              </a>
            </li>
          <li onClick={this.onCZ}>
          <a href="javascript:void(0)">
            <span className="list-left">免密充值</span>
            <span className="list-right">{isCZ?'已开通':'未开通'}</span>
            <span className={`list-icon ${isCZ?'hide':''}`}></span>
            </a>
          </li>
          <li className="install-login">
            <a href="../findPassword/findPassword.html">
            <span className="list-left">重设登录密码</span>
            <span className="list-icon"></span>
            </a>
          </li>
          <li>
            <a href="../download_app/download_app.html">
            <span className="list-left">重设支付密码</span>
            <span className="list-icon"></span>
            </a>
          </li>
          <li>
            <a href="../download_app/download_app.html">
            <span className="list-left">修改支付密码</span>
            <span className="list-icon"></span>
            </a>
          </li>
        </ul>
        { btn }
        <Alert text={this.state.alertText} show={this.state.alertShow} />
        <LoginOver type='2' show={this.state.loginShow} />
        { alert }
        <Loading loading={this.state.isLoading} />
      </div>

    )
  }
}
