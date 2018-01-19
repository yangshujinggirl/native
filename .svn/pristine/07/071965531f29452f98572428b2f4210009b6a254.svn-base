import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import Alert from 'alert';//引入alert组件
import Input from 'input';//引入input组件
import InputGroup from 'inputGroup';//引入input组件
import Icon from 'icon';//引入图标组件
import Loading from 'loading';//引入loading组件
import Button from 'button';//引入button组件
/**
 * 引入fetch
 */
import 'fetchJs';
import 'whatwg-fetch';
import { config,strUtil,dataUtil,bussinessUtil,urlUtil,sessionUtil } from 'publicJs';
let pageInfo=bussinessUtil.getPageInfo();
//组合组件
export default class Container extends Component{
  constructor(props){
    super(props);
    this.state={
      alertText: '',//提示框文本
      alertShow: false,//提示框默认不显示
      password1: '',
      password2: '',
      disabled: true,//按钮是否禁用
      psdIsTrue1: false, //密码是否正确
      psdIsTrue2: false, //密码是否正确
      psdErrorText1:'',//密码错误提示
      psdErrorText2:'',//密码错误提示
      isLoading: false,//是否加载中
      psdIsShow1: false, //密码是否显示
      psdIsShow2: false, //密码是否显示
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
        if(isTrue&&this.state.psdIsTrue2){
          this.setState({password1: text,psdIsTrue1: isTrue,psdErrorText1: errorText,disabled: false});
        }else{
          this.setState({password1: text,psdIsTrue1: isTrue,disabled: true,psdErrorText1: errorText});
        } 
      break;
      case '2':
        //判断需要验证的规则是否正确
        if(isTrue&&this.state.psdIsTrue1){
          this.setState({password2: text,psdIsTrue2: isTrue,psdErrorText2: errorText,disabled: false});
        }else{
          this.setState({password2: text,psdIsTrue2: isTrue,disabled: true,psdErrorText2: errorText});
        } 
      break;
    }
  }
  /**
   * 清空值
   * @return {[type]} [description]
   */
  cleanValue=(e)=>{
    switch(e.target.title){
      case '1':
      this.setState({password1: '',psdIsTrue1: false,disabled:true});
      break;
      case '2':
      this.setState({password2: '',psdIsTrue2: false,disabled:true});
      break;
    }
  }
  /**
   * 显示密码的切换
   * @return {[type]} [description]
   */
  togglePsd1=()=>{
    this.setState({psdIsShow1: !this.state.psdIsShow1});
  }
  /**
   * 显示密码的切换
   * @return {[type]} [description]
   */
  togglePsd2=()=>{
    this.setState({psdIsShow2: !this.state.psdIsShow2});
  }
  //提交注册
  submit = () =>{
    //判断错误提示是否都为空
    /**
     * 验证密码错误提示是否存在
     * @param  {[type]} strUtil.isEmpty(this.state.phoneErrorText) [description]
     * @return {[type]}                                            [description]
     */
    if(strUtil.isEmpty(this.state.psdErrorText1)){
      /**
       * 验证密码错误提示是否存在
       * @param  {[type]} strUtil.isEmpty(this.state.phoneErrorText) [description]
       * @return {[type]}                                            [description]
       */
      if(strUtil.isEmpty(this.state.psdErrorText2)){
        /**
         * 验证2次密码输入是否相同
         */
        if(this.state.password1==this.state.password2){
          this.setPsd();
        }else{
          this.updateText('2次密码输入不相同',true);
          this.setState({password1:'',password2: '',disabled:true});
        }
        
      }else{
        this.updateText(this.state.psdErrorText2,true); 
      }  
    }else{
      this.updateText(this.state.psdErrorText1,true);
    }
  }
  /**
   * 重置密码
   */
  setPsd=()=>{
    this.setState({isLoading: true});
    let url=`/user/login/retrievePwd`;
    let param=`mobileCode=${strUtil.formatData(pageInfo.phoneCode)}&mobileNo=${strUtil.formatData(pageInfo.phone)}&newPwd=${this.state.password2}&idCard=${strUtil.formatData(pageInfo.identity)}`;
    let successCall=(data)=>{
      this.setState({isLoading: false});
      this.updateText('重置成功!',true);//更新弹窗 
      sessionUtil.del('sessionKey');
      window.location.href='../user_login/user_login.html';
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
  render(){
    //判断按钮是否可用
    var dealBtn=()=>{
      if(this.state.disabled){
        return < Button type="disabled" btnCss='button-register' btnText='确定' btnClick={this.submit} />
      }else{
        return < Button type="solid" btnCss='button-register' btnText='确定' btnClick={this.submit} />
      }
    }
    var btn=dealBtn();
    return(
      <div className="register">
        <div className="user-register">
          <div className="wrap-register">
            <InputGroup className='wrap-input'>
                <Icon iconType='password' iconCss='icon-type' />
                <Input type={`${this.state.psdIsShow1?'text':'password'}`} className='input-psd input' 
                  dataType='password' value={this.state.password1}
                  index='1' updateValue={this.updateValue} />
                <Icon iconType='eye' iconCss={`icon-type icon-type-eye ${this.state.psdIsShow?'active':''}`} 
                onClick={this.togglePsd1} />
                <Icon iconType='del' iconCss={`icon-type ${this.state.psdIsTrue1?'show-inline':'hide-hidden'}`} 
                title='1' onClick={this.cleanValue} />
            </InputGroup>
            <InputGroup className='wrap-input'>
                <Icon iconType='password' iconCss='icon-type' />
                <Input type={`${this.state.psdIsShow2?'text':'password'}`} className='input-psd input' 
                  dataType='password' value={this.state.password2} placeholder='请再次输入密码'
                  index='2' updateValue={this.updateValue} />
                <Icon iconType='eye' iconCss={`icon-type icon-type-eye ${this.state.psdIsShow?'active':''}`} 
                onClick={this.togglePsd2} />
                <Icon iconType='del' iconCss={`icon-type ${this.state.psdIsTrue2?'show-inline':'hide-hidden'}`} 
                title='2' onClick={this.cleanValue} />
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