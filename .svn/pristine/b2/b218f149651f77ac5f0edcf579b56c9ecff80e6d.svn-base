import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import Alert from 'alert';//引入alert组件
import LoginOver from 'loginOver';//引入登录超时组件
import Input from 'input';//引入input组件
import InputGroup from 'inputGroup';//引入input组件
import Icon from 'icon';//引入图标组件
import Loading from 'loading';//引入loading组件
import Button from 'button';//引入button组件
import Checkbox from 'checkbox';//引入checkbox组件
/**
 * 引入fetch
 */
import 'fetchJs';
import 'whatwg-fetch';
import { config,strUtil,dataUtil,bussinessUtil,bigDataUtil } from 'publicJs';
//组合组件
export default class Container extends Component{
  constructor(props){
    super(props);
    this.state={
      alertText: '',//提示框文本
      alertShow: false,//提示框默认不显示
      username: '',
      identity: '',
      disabled: true,//按钮是否禁用
      usernameIsTrue: false,//手机号码是否正确
      identityIsTrue: false,//身份证是否正确
      usernameErrorText: '',//姓名错误提示
      indentityErrorText: '',//身份证错误提示
      isLoading: false,//是否加载中
      checked: true,//协议按钮是否选中
      loginShow: false, //是否显示登录超时
    }
  }
  //组件渲染之前
  componentWillMount(){
    let pageName='user_realname';
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
  //同步用户更新的内容
  updateValue=(text,type,isTrue,errorText)=>{
    switch(type){
      case '1':
        //判断需要验证的规则是否正确
        if(isTrue&&this.state.identityIsTrue){
            this.setState({username: text,usernameIsTrue: isTrue,disabled: false,usernameErrorText:errorText});

        }else{
            this.setState({username: text,usernameIsTrue: isTrue,disabled: true,usernameErrorText:errorText});
        }
      break;
      case '2':
        //判断需要验证的规则是否正确
        if(isTrue&&this.state.usernameIsTrue){
            this.setState({identity: text,identityIsTrue: isTrue,disabled: false,identityErrorText:errorText});

        }else{
            this.setState({identity: text,identityIsTrue: isTrue,disabled: true,identityErrorText:errorText});
        }
      break;
    }
  }
  //实名按钮点击事件
  btnClick=()=>{
    //判断错误提示是否都为空
    /**
     * 验证姓名错误提示是否存在
     * @param  {[type]} strUtil.isEmpty(this.state.phoneErrorText) [description]
     * @return {[type]}                                            [description]
     */
    if(strUtil.isEmpty(this.state.usernameErrorText)){
      /**
       * 验证身份证错误提示是否存在
       * @param  {[type]} strUtil.isEmpty(this.state.phoneErrorText) [description]
       * @return {[type]}                                            [description]
       */
      if(strUtil.isEmpty(this.state.identityErrorText)){
          let sessionKey=bussinessUtil.getSessionKey();
          this.setState({isLoading: true});//设置为加载中...
            let url=`/user/register/userAuthPwd`;
            let param=`identityCode=${this.state.identity}&sessionKey=${sessionKey}&userName=${this.state.username}`;
            let successCall=(data)=>{
              this.setState({isLoading: false});
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
              bigDataUtil.setBigDataEvent(config.bigDataEvent.realname);
              //跳转联动页面进行实名
              window.location.href=data.data.url;
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
      }else{
        this.updateText(this.state.identityErrorText,true);
      }
    }else{
      this.updateText(this.state.usernameErrorText,true);
    }
  }
  /**
   * 清空值
   * @return {[type]} [description]
   */
  cleanValue=(e)=>{
    switch(e.target.title){
      case '1':
      this.setState({username: '',usernameIsTrue: false,disabled:true});
      break;
      case '2':
      this.setState({identity: '',identityIsTrue: false,disabled:true});
      break;
    }
  }
  //协议点击事件
  changeCheck=()=>{
    if(!this.state.checked){
      if(this.state.usernameIsTrue&&this.state.identityIsTrue){
        this.setState({disabled: false,checked: !this.state.checked});
      }else{
        this.setState({checked: !this.state.checked});
      }

    }else{
      this.setState({disabled: true,checked: !this.state.checked});
    }
  }
  render(){
    //判断按钮是否可用
    var dealBtn=()=>{
      if(this.state.disabled){
        return < Button type="disabled" btnCss='button' btnText='下一步' btnClick={this.btnClick} />
      }else{
        return < Button type="hollow" btnCss='button' btnText='下一步'  btnClick={this.btnClick} />
      }
    }
    var btn=dealBtn();
    return(
      <div className="user_realname">
          <div className="safe">为确保资金安全,请开通第三方资金托管账户
          </div>
          <InputGroup className='wrap-input'>
              <Input type="text" className='input'
                dataType='username' index='1' value={this.state.username}
                updateValue={this.updateValue} placeholder="请输入真实姓名" />
              <Icon iconType='del' iconCss={`icon-type ${this.state.usernameIsTrue?'show-inline':'hide-hidden'}`}
              title='1' onClick={this.cleanValue} />
          </InputGroup>
          <InputGroup className='wrap-input'>
              <Input type="text" className='input'
                dataType='identity' index='2' value={this.state.identity}
                updateValue={this.updateValue} />
              <Icon iconType='del' iconCss={`icon-type ${this.state.identityIsTrue?'show-inline':'hide-hidden'}`}
              title='2' onClick={this.cleanValue} />
          </InputGroup>
          <Checkbox checked={this.state.checked} parentCss='accept' changeCheck={this.changeCheck} >
            <span className='agree'>我已阅读并同意</span>
            <a className='protocol' href='https://www.lingtouniao.com/h5/accept-id.html'>《资金托管协议》</a>
          </Checkbox>
          {btn}
          <Alert text={this.state.alertText} show={this.state.alertShow} />
          <Loading loading={this.state.isLoading} />
          <LoginOver type='2' show={this.state.loginShow} >
          </LoginOver>
      </div>
    )
  }
}
