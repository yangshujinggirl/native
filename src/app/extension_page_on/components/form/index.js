import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import Loading from 'loading';//引入loading组件
import Alert from 'alert';//引入alert组件
import Input from 'input';//引入input组件
import InputGroup from 'inputGroup';//引入input组件
import Icon from 'icon';//引入图标组件
import ImgCode from 'imgCode';//引入图形验证码组件
import PhoneCode from 'phoneCode';//引入手机验证码组件
import Button from 'button';//引入button组件
import Checkbox from 'checkbox';//引入checkbox组件
/**
 * 引入fetch
 */
import 'fetchJs';
import 'whatwg-fetch';
import { config,strUtil,dataUtil,urlUtil,bussinessUtil } from 'publicJs';
var dept=urlUtil.getSearch('dept');//渠道标识
//组合组件
export default class Form extends Component{
	constructor(props){
		super(props);
		this.state={
			text: '',//提示框文本
			show: false,//提示框默认不显示
			alert2Show: false,//用户选择弹窗是否显示
			telephone: '',
			phoneCode: '',
			password: '',
			imgCode: '',
			disabled: true,//登录按钮是否禁用
			phoneBtnDisabled: true,//发送验证码按钮是否禁用
			phoneIsTrue: false,//手机号码是否正确
			imgCodeIsTrue: false, //图形验证码是否正确
			phoneCodeIsTrue: false, //手机验证码是否正确
			psdIsTrue: false, //密码是否正确
			isLoading: false,//是否加载中
      phoneErrorText:'',//手机号码错误提示
      imgCodeErrorText:'',//手机号码错误提示
      phoneCodeErrorText:'',//手机号码错误提示
      psdErrorText:'',//手机号码错误提示
			guid: strUtil.getGuid(), //机器码
			checked:true,
			btnDisabled:false,
      psdIsShow: false //密码是否显示
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
		this.setState({text: text,show: show});
		//如果show为true
		if(show){
			setTimeout(()=>{this.setState({show: false});},config.alertTime);
		}
	}
	//已注册用户提交提示框内容
	submitText2=(text,show)=>{
		this.setState({text: text,alert2Show: show});
	}



	//同步用户更新的内容
  updateValue=(text,type,isTrue,errorText)=>{
    switch(type){
      case '1':
        //判断需要验证的规则是否正确
        if(isTrue&&this.state.imgCodeIsTrue){
          this.setState({telephone: text,phoneIsTrue: isTrue,phoneErrorText:errorText,phoneBtnDisabled: false});
          //验证手机短信密码是否正确
          if(this.state.phoneCodeIsTrue&&this.state.psdIsTrue){
            this.setState({telephone: text,phoneIsTrue: isTrue,phoneErrorText:errorText,disabled: false}); 
          }else{
            this.setState({telephone: text,phoneIsTrue: isTrue,phoneErrorText:errorText,disabled: true}); 
          }

        }else{
          this.setState({telephone: text,phoneIsTrue: isTrue,phoneErrorText:errorText,disabled: true,phoneBtnDisabled: true});  
        }
      break;
      case '2':
        //判断需要验证的规则是否正确
        if(isTrue&&this.state.phoneIsTrue){
          this.setState({imgCode: text,imgCodeIsTrue: isTrue,imgCodeErrorText: errorText,phoneBtnDisabled: false}); 
          //验证手机短信密码是否正确
          if(this.state.phoneCodeIsTrue&&this.state.psdIsTrue){
            this.setState({imgCode: text,imgCodeIsTrue: isTrue,imgCodeErrorText: errorText,disabled: false}); 
          }else{
            this.setState({imgCode: text,imgCodeIsTrue: isTrue,imgCodeErrorText: errorText,disabled: true}); 
          } 
        }else{
          this.setState({imgCode: text,imgCodeIsTrue: isTrue,disabled: true,imgCodeErrorText: errorText,phoneBtnDisabled: true});
        }  
      break;
      case '3':
        //判断需要验证的规则是否正确
        if(isTrue&&this.state.phoneIsTrue&&this.state.psdIsTrue&&this.state.imgCodeIsTrue){
          this.setState({phoneCode: text,phoneCodeIsTrue: isTrue,phoneCodeErrorText: errorText,disabled: false}); 
        }else{
          this.setState({phoneCode: text,phoneCodeIsTrue: isTrue,phoneCodeErrorText: errorText,disabled: true});
        }
      break;
      case '4':
        //判断需要验证的规则是否正确
        if(isTrue&&this.state.phoneIsTrue&&this.state.phoneCodeIsTrue&&this.state.imgCodeIsTrue){
          this.setState({password: text,psdIsTrue: isTrue,psdErrorText: errorText,disabled: false}); 
        }else{
          this.setState({password: text,psdIsTrue: isTrue,psdErrorText: errorText,disabled: true});
        }  
      break;
    }
  }

	//更新获取验证码的disabled状态
	updatePhoneState=(state)=>{
		this.setState({phoneBtnDisabled: state});
	}

	//更新图形验证码 guid
	updateGuid=(isClean=true)=>{
    if(isClean){
      this.setState({guid: strUtil.getGuid(),cleanCode: true,imgCode: '',imgCodeIsTrue: false,disabled:true});
    }else{
      this.setState({guid: strUtil.getGuid()});
    }
	}
	//协议点击事件
	changeCheck=()=> {
    if(!this.state.checked){
      if(this.state.psdIsTrue&&this.state.phoneIsTrue&&this.state.phoneCodeIsTrue&&this.state.imgCodeIsTrue){
        this.setState({disabled: false,checked: !this.state.checked}); 
      }else{
        this.setState({checked: !this.state.checked}); 
      }
    }else{
      this.setState({disabled: true,checked: !this.state.checked}); 
    }
	}

	//弹窗按钮1点击事件 暂不认证
  btn1Click=()=>{
    window.location.href=this.props.registeredUrl;
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
      this.setState({password: '',psdIsTrue: false,disabled:true});
      break;
    }
  }

  /**
   * 显示密码的切换
   * @return {[type]} [description]
   */
  togglePsd=()=>{
    this.setState({psdIsShow: !this.state.psdIsShow});
  }

	//提交注册
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
         * 验证短信验证码错误提示是否存在
         * @param  {[type]} strUtil.isEmpty(this.state.phoneErrorText) [description]
         * @return {[type]}                                            [description]
         */
        if(strUtil.isEmpty(this.state.phoneCodeErrorText)){
          /**
           * 验证密码错误提示是否存在
           * @param  {[type]} strUtil.isEmpty(this.state.phoneErrorText) [description]
           * @return {[type]}                                            [description]
           */
          if(strUtil.isEmpty(this.state.psdErrorText)){
              this.setState({isLoading: true});//设置为加载中...
              var url;
              var param;
              if(dept == '') {
                 url=`/user/register/registerUser.json`;
                 param=`clientType=HTML5&readAndAgree=1&mobileNo=${this.state.telephone}&password=${this.state.password}&mobileCode=${this.state.phoneCode}`; 
              }else{
                 url=`/user/register/registerH5User.json`;
                 param=`clientType=HTML5&readAndAgree=1&dept=${dept}&mobileNo=${this.state.telephone}&password=${this.state.password}&mobileCode=${this.state.phoneCode}`;
              }
              let successCall=(data)=>{
                this.setState({isLoading: false});
                window.location.href=this.props.successedUrl;
              }
              let errorCall=(data)=>{
                this.setState({isLoading: false});
                this.updateGuid();//更新guid
                let error=dataUtil.getMessage(data.resultCode);
                if(data.resultCode=='10000011') {
                  this.submitText2(error,true);
                } else {
                  this.updateText(error,true);//更新弹窗
                }
              }
              let errorCall2=(e)=>{
                this.setState({isLoading: false});
                this.updateGuid();//更新guid
                let error=dataUtil.getMessage(data.resultCode);
                this.updateText(error,true);//更新弹窗
              }
              dataUtil.getData(url,'POST',param,successCall,errorCall,errorCall2);
          }else{
            this.updateText(this.state.psdErrorText,true); 
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

	render(){	
		//判断按钮是否可用
    var dealBtn=()=>{
      if(this.state.disabled){
        return < Button type="disabled" btnCss='button-register' btnText='注册领万元体验金' btnClick={this.submit} />
      }else{
        return < Button type="solid" btnCss='button-register' btnText='注册领万元体验金' btnClick={this.submit} />
      }
    }
    var button=dealBtn();
		var phone;
		let getPhone=()=>{
			if(this.state.phoneBtnDisabled){
				phone=<PhoneCode className='phone-code disabled'
				 guid={this.state.guid} telephone={this.state.telephone} 
				 updateGuid={this.updateGuid} updateText={this.updateText}
				  imgCode={this.state.imgCode} updatePhoneState={this.updatePhoneState} 
          successUrl={this.props.registeredUrl}/>
			}else{
				phone=<PhoneCode className='phone-code' 
				 guid={this.state.guid} telephone={this.state.telephone}  
				 updateGuid={this.updateGuid}  updateText={this.updateText}
				 imgCode={this.state.imgCode} updatePhoneState={this.updatePhoneState} 
				 successUrl={this.props.registeredUrl}/>
			}
		}

		getPhone();
		return(	
			<div className="form">
				<div className="wrap-register">
          <InputGroup className='wrap-input'>
              <Input type="tel" className='input' 
                dataType='telephone' index='1' value={this.state.telephone}
                updateValue={this.updateValue} />
              <Icon iconType='del' iconCss={`icon-type ${this.state.phoneIsTrue?'show-inline':'hide-hidden'}`} 
              title='1' onClick={this.cleanValue} />
          </InputGroup>
          <InputGroup className='wrap-input'>
              <div className="short">
                <Input type="tel" className='input code-input' 
                  dataType='imgCode' value={this.state.imgCode}
                  index='2' updateValue={this.updateValue} />
                <Icon iconType='del' iconCss={`icon-type ${this.state.imgCodeIsTrue?'show-inline':'hide-hidden'}`}
                title='2' onClick={this.cleanValue} />
              </div>
              <ImgCode className='img-code' 
              guid={this.state.guid} updateGuid={this.updateGuid} />
          </InputGroup>
          <InputGroup className='wrap-input'>
              <div className="short">
                <Input type="tel" className='input code-input' 
                  dataType='phoneCode' value={this.state.phoneCode}
                  index='3' updateValue={this.updateValue} />
                  <Icon iconType='del' iconCss={`icon-type ${this.state.phoneCodeIsTrue?'show-inline':'hide-hidden'}`} 
                title='3' onClick={this.cleanValue} />
              </div>
              { phone }
          </InputGroup>
          <InputGroup className='wrap-input'>
              <Input type={`${this.state.psdIsShow?'text':'password'}`} className='input' 
                dataType='password' value={this.state.password}
                index='4' updateValue={this.updateValue} />
              <Icon iconType='eye' iconCss={`icon-type icon-type-eye ${this.state.psdIsShow?'active':''}`} 
              onClick={this.togglePsd} />
              <Icon iconType='del' iconCss={`icon-type ${this.state.psdIsTrue?'show-inline':'hide-hidden'}`}
              title='4' onClick={this.cleanValue} />
          </InputGroup>
					<Checkbox parentCss='wrap-input' checked={this.state.checked}  changeCheck={this.changeCheck} >
							<div className="label">
								<span>我已阅读并同意</span>
								<a href="../serveProtocol/serveProtocol.html" className="serve">《在线服务协议》</a>
							</div>
					</Checkbox>
					<div className="wrap-input">
						{ button}
					</div>
				</div>
        <Loading loading={this.state.isLoading} />
				<Alert text={this.state.text} show={this.state.show} />
				<Alert  type='2' show={this.state.show} show={this.state.alert2Show}
          title='您已经是注册用户了'  btn1Text='好' btn1Click={this.btn1Click} btn1Css='button1'>
           <p className='alert-content'>下载领投鸟APP了解最新活动</p>
          </Alert>
			</div>
		)
	}
}