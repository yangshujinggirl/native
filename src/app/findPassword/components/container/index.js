import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import Alert from 'alert';//引入alert组件
import Input from 'input';//引入input组件
import InputGroup from 'inputGroup';//引入input组件
import ImgCode from 'imgCode';//引入图形验证码组件
import Icon from 'icon';//引入图标组件
import Loading from 'loading';//引入loading组件
import Button from 'button';//引入button组件
import PhoneCode from 'phoneCode';//引入手机验证码组件
/**
 * 引入fetch
 */
import 'fetchJs';
import 'whatwg-fetch';
import { config,strUtil,dataUtil,bussinessUtil,urlUtil,sessionUtil } from 'publicJs';
//组合组件
export default class Container extends Component{
  constructor(props){
    super(props);
    this.state={
      alertText: '',//提示框文本
      alertShow: false,//提示框默认不显示
      telephone: '',
      imgCode: '',
      phoneCode: '',
      identity: '',//身份证号码
      disabled: true,//按钮是否禁用
      phoneBtnDisabled: true,//发送验证码按钮是否禁用
      phoneIsTrue: false,//手机号码是否正确
      imgCodeIsTrue: false,//图片验证码是否正确
      phoneCodeIsTrue: false, //手机验证码是否正确
      identityIsTrue: false,//身份证号码是否正确
      phoneErrorText:'',//手机号码错误提示
      imgCodeErrorText:'',//图形验证码错误提示
      phoneCodeErrorText:'',//短信验证码错误提示
      identityErrorText: '',//身份证号码错误提示
      isLoading: false,//是否加载中
      guid: strUtil.getGuid(), //机器码

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
  //同步用户更新的内容
  updateValue=(text,type,isTrue,errorText)=>{
    switch(type){
      case '1':
        //判断需要验证的规则是否正确
        if(isTrue&&this.state.imgCodeIsTrue){
          if(this.state.phoneCodeIsTrue){
            this.setState({telephone: text,phoneIsTrue: isTrue,phoneErrorText:errorText,disabled: false,phoneBtnDisabled: false});
          }else{
            this.setState({telephone: text,phoneIsTrue: isTrue,phoneErrorText:errorText,disabled: true,phoneBtnDisabled: false});
          }
          
        }else{
          this.setState({telephone: text,phoneIsTrue: isTrue,phoneErrorText:errorText,disabled: true,phoneBtnDisabled: true});
        }
      break;
      case '2':
        //判断需要验证的规则是否正确
        if(isTrue&&this.state.phoneIsTrue){
          if(this.state.phoneCodeIsTrue){
            this.setState({imgCode: text,imgCodeIsTrue: isTrue,imgCodeErrorText: errorText,phoneBtnDisabled: false,disabled: false});
          }else{
            this.setState({imgCode: text,imgCodeIsTrue: isTrue,imgCodeErrorText: errorText,phoneBtnDisabled: false,disabled: true});
          }
          
        }else{
          this.setState({imgCode: text,imgCodeIsTrue: isTrue,disabled: true,imgCodeErrorText: errorText,phoneBtnDisabled: true});
        } 
      break;
      case '3':
        //判断需要验证的规则是否正确
        if(isTrue&&this.state.phoneIsTrue&&this.state.imgCodeIsTrue){
          this.setState({phoneCode: text,phoneCodeIsTrue: isTrue,phoneCodeErrorText: errorText,disabled: false});
        }else{
          this.setState({phoneCode: text,phoneCodeIsTrue: isTrue,disabled: true,phoneCodeErrorText: errorText});
        } 
      break;
      case '4':
          if(isTrue){
            this.setState({identity: text,identityIsTrue:true,identityErrorText: errorText});
          }else{
            this.setState({identity: text,identityIsTrue:false,identityErrorText: errorText});
          }      
      break;
    }
  }


  //更新图形验证码 guid
  updateGuid=()=>{
    this.setState({guid: strUtil.getGuid(),cleanCode: true});
  }

  //提交
  submit = () =>{
    //判断错误提示是否都为空
    /**
     * 验证手机号码错误提示是否存在
     * @param  {[type]} strUtil.isEmpty(this.state.phoneErrorText) [description]
     * @return {[type]}                                            [description]
     */
    if(strUtil.isEmpty(this.state.phoneErrorText)){
      /**
       * 验证图形验证码错误提示是否存在
       * @param  {[type]} strUtil.isEmpty(this.state.phoneErrorText) [description]
       * @return {[type]}                                            [description]
       */
      if(strUtil.isEmpty(this.state.imgCodeErrorText)){
        /**
         * 验证手机验证码错误提示是否存在
         * @param  {[type]} strUtil.isEmpty(this.state.phoneErrorText) [description]
         * @return {[type]}                                            [description]
         */
        if(strUtil.isEmpty(this.state.phoneCodeErrorText)){
          //验证身份证是否正确
          if(strUtil.isEmpty(this.state.identityErrorText)){
            this.getPhoneCodeIsTrue();
          }else{
            this.updateText(this.state.identityErrorText,true);
          }      
        }else{
          this.updateText(this.state.phoneCodeErrorText,true);
        }
      }else{
        this.updateText(this.state.imgCodeErrorText,true); 
      }  
    }else{
      this.updateText(this.state.phoneErrorText,true);
    }
  }
  /**
   * 验证手机验证码是否正确
   */
  getPhoneCodeIsTrue=()=>{
    this.setState({isLoading: true});
    let url=`/mobile/mobilecode/verifyMobileCode`;
    let param=`mobileCode=${this.state.phoneCode}&mobileNo=${this.state.telephone}&idCard=${this.state.identity}&sendType=2`;
    let successCall=(data)=>{
      this.setState({isLoading: false});
      let obj={
        phone: this.state.telephone,
        phoneCode:this.state.phoneCode,
        identity: this.state.identity
      }
      bussinessUtil.setPageInfo(obj);
      window.location.href='../findPassword2/findPassword2.html';
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
   * 清空值
   * @return {[type]} [description]
   */
  cleanValue=(e)=>{
    switch(e.target.title){
      case '1':
      this.setState({telephone: '',phoneIsTrue: false,disabled:true,phoneBtnDisabled:true});
      break;
      case '2':
      this.setState({imgCode: '',imgCodeIsTrue: false,disabled:true,phoneBtnDisabled:true});
      break;
      case '3':
      this.setState({phoneCode: '',phoneCodeIsTrue: false,disabled:true});
      break;
      case '4':
      this.setState({identity: '',identityErrorText: ''});
      break;
    }
  }
  //更新获取验证码的disabled状态
  updatePhoneState=(state)=>{
    this.setState({phoneBtnDisabled: state});
  }
  render(){
    //判断按钮是否可用
    var dealBtn=()=>{
      if(this.state.disabled){
        return < Button type="disabled" btnCss='button-register' btnText='下一步' btnClick={this.submit} />
      }else{
        return < Button type="solid" btnCss='button-register' btnText='下一步' btnClick={this.submit} />
      }
    }
    var btn=dealBtn();
    //根据状态显示发送验证码按钮
    var phone;
    let dealPhone=()=>{
      if(this.state.phoneBtnDisabled){
         phone=<PhoneCode className='verificationcode disabled' disabled
         guid={this.state.guid} telephone={this.state.telephone} sendType='2'
         updateGuid={this.updateGuid} updateText={this.updateText}  updateValue={this.updateValue}
         imgCode={this.state.imgCode} updatePhoneState={this.updatePhoneState}  />
      }else{
        phone=<PhoneCode className='verificationcode' 
         guid={this.state.guid} telephone={this.state.telephone} sendType='2'
         updateGuid={this.updateGuid}  updateText={this.updateText} updateValue={this.updateValue}
         imgCode={this.state.imgCode} updatePhoneState={this.updatePhoneState}  />
      }
    }
    dealPhone();
    return(
      <div className="register">
        <div className="user-register">
          <div className="wrap-register">
            <InputGroup className='wrap-input'>
                <Icon iconType='telephone' iconCss='icon-type' />
                <Input type="tel" className='input' 
                  dataType='telephone' index='1' value={this.state.telephone}
                  updateValue={this.updateValue} />
                <Icon iconType='del' iconCss={`icon-type ${this.state.phoneIsTrue?'show-inline':'hide-hidden'}`} 
                title='1' onClick={this.cleanValue} />
            </InputGroup>
            <InputGroup className='wrap-input'>
                <Icon iconType='imgCode' iconCss='icon-type' />
                <Input type="tel" className='input code-input' 
                  dataType='imgCode' value={this.state.imgCode}
                  index='2' updateValue={this.updateValue} />
                <Icon iconType='del' iconCss={`icon-type ${this.state.imgCodeIsTrue?'show-inline':'hide-hidden'}`} 
                title='2' onClick={this.cleanValue} />
                <ImgCode className='img-code' 
                guid={this.state.guid} updateGuid={this.updateGuid} />
            </InputGroup>
            <InputGroup className='wrap-input'>
                <Icon iconType='phoneCode' iconCss='icon-type' />
                <Input type="tel" className='input code-input' 
                  dataType='phoneCode' value={this.state.phoneCode}
                  index='3' updateValue={this.updateValue} />
                  <Icon iconType='del' iconCss={`icon-type ${this.state.phoneCodeIsTrue?'show-inline':'hide-hidden'}`} 
                title='3' onClick={this.cleanValue} />
                { phone }   
            </InputGroup>
            <InputGroup className='wrap-input'>
                <Icon iconType='phoneCode' iconCss='icon-type' />
                <Input type="tel" className='input' 
                  dataType='identity' value={this.state.identity}
                  index='4' updateValue={this.updateValue} placeholder='如果实名则输入身份证号码' />
                <Icon iconType='del' iconCss={`icon-type ${this.state.identityIsTrue?'show-inline':'hide-hidden'}`} 
                title='4' onClick={this.cleanValue} />  
            </InputGroup>
          </div>
          { btn }
          <Alert text={this.state.alertText} show={this.state.alertShow} />
          <Loading loading={this.state.isLoading} />
        </div>
      </div>
    )
  }
}