import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import Alert from 'alert';//引入alert组件
import Input from 'input';//引入input组件
import ImgCode from 'imgCode';//引入图形验证码组件
import PhoneCode from 'phoneCode';//引入手机验证码组件
import Loading from 'loading';//引入loading组件
/**
 * 引入fetch
 */
import 'fetchJs';
import 'whatwg-fetch';
import { config,strUtil,dataUtil,urlUtil } from 'publicJs';
var dept=urlUtil.getSearch('dept');//渠道标识
//组合组件
export default class Container extends Component{
	constructor(props){
		super(props);
		this.state={
			text: '',//提示框文本
			show: false,//提示框默认不显示
			telephone: '',
			imgCode: '',
			phoneCode: '',
			password: '',
			disabled: true,//获取验证码按钮是否禁用
			registerBtn:true,
			phoneIsTrue: false,//手机号码是否正确
			imgIsTrue: false, //图形验证码是否正确
			phoneCodeIsTrue: false, //手机验证码是否正确
			psdIsTrue: false, //密码是否正确
			phoneErrorText:'',//手机号码错误提示
      imgCodeErrorText:'',//图形验证码错误提示
      phoneCodeErrorText:'',//短信验证码错误提示
      psdErrorText:'',//密码错误提示
			isLoading: false,//是否加载中
			guid: strUtil.getGuid(), //机器码

		}
	}

	//修改提示框内容
	updateText=(text,show)=>{
		this.setState({text: text,show: show});
		//如果show为true
		if(show){
			setTimeout(()=>{this.setState({show: false});},config.alertTime);
		}
	}
	//提交提示框内容
	submitText=(text,show)=>{
		this.setState({text: text,show: show});
		//如果show为true
		if(show){
			setTimeout(()=>{this.setState({show: false});},config.alertTime);
		}
	}

	//同步用户更新的内容
	updateValue=(text,type,isTrue,errorText)=>{
		switch(type){
			case '1':
				//判断手机号码和图片验证码是否正确
				if(isTrue&&this.state.imgIsTrue){
					this.setState({telephone: text,phoneIsTrue: isTrue,phoneErrorText:errorText,disabled: false,registerBtn: true});

					//验证手机短信密码是否正确
          if(this.state.phoneCodeIsTrue&&this.state.psdIsTrue){
            this.setState({telephone: text,phoneIsTrue: isTrue,phoneErrorText:errorText,registerBtn: false});
          }else{
            this.setState({telephone: text,phoneIsTrue: isTrue,phoneErrorText:errorText,registerBtn: true});
          }
				}else{
					this.setState({telephone: text,phoneIsTrue: isTrue,phoneErrorText:errorText,disabled: true,registerBtn: true});
				}

			break;
			case '2':
				//判断手机号码和图片验证码是否正确
				if(isTrue&&this.state.phoneIsTrue){
					this.setState({imgCode: text,imgIsTrue: isTrue,imgCodeErrorText: errorText,disabled: false,registerBtn: true});
					//验证手机短信密码是否正确
          if(this.state.phoneCodeIsTrue&&this.state.psdIsTrue){
            this.setState({imgCode: text,imgCodeIsTrue: isTrue,imgCodeErrorText: errorText,registerBtn: false});
          }else{
            this.setState({imgCode: text,imgCodeIsTrue: isTrue,imgCodeErrorText: errorText,registerBtn: true});
          }
				}else{
					this.setState({imgCode: text,imgIsTrue: isTrue,imgCodeErrorText: errorText,disabled: true,registerBtn: true});
				}
			break;
			case '3':
				// this.setState({phoneCode: text,phoneCodeErrorText: errorText});
				//判断需要验证的规则是否正确
        if(isTrue&&this.state.phoneIsTrue&&this.state.psdIsTrue&&this.state.imgIsTrue){
          this.setState({phoneCode: text,phoneCodeIsTrue: isTrue,phoneCodeErrorText: errorText,registerBtn: false});
        }else{
          this.setState({phoneCode: text,phoneCodeIsTrue: isTrue,phoneCodeErrorText: errorText,registerBtn: true});
        }
			break;
			case '4':
				// this.setState({password: text,psdErrorText: errorText});
				//判断需要验证的规则是否正确
        if(isTrue&&this.state.phoneIsTrue&&this.state.phoneCodeIsTrue&&this.state.imgIsTrue){
          this.setState({password: text,psdIsTrue: isTrue,psdErrorText: errorText,registerBtn: false});
        }else{
          this.setState({password: text,psdIsTrue: isTrue,psdErrorText: errorText,registerBtn: true});
        }
			break;
		}
	}

	//更新获取验证码的disabled状态
	updatePhoneState=(state)=>{
		this.setState({disabled: state});
	}

	//更新图形验证码 guid
	updateGuid=()=>{
		this.setState({guid: strUtil.getGuid()});
	}

	//提交注册
	submit = () =>{
		//判断错误提示是否都为空
    /**
     * 验证手机号码错误提示是否存在
     * @param  {[type]} strUtil.isEmpty(this.state.phoneErrorText) [description]
     * @return {[type]}                                            [description]
     */
		 if(strUtil.isEmpty(this.state.phoneErrorText)) {
			 /**
        * 验证图形验证码错误提示是否存在
        * @param  {[type]} strUtil.isEmpty(this.state.phoneErrorText) [description]
        * @return {[type]}                                            [description]
        */
				if(strUtil.isEmpty(this.state.imgCodeErrorText)) {
					/**
	         * 验证短信验证码错误提示是否存在
	         * @param  {[type]} strUtil.isEmpty(this.state.phoneErrorText) [description]
	         * @return {[type]}                                            [description]
	         */
					 if(strUtil.isEmpty(this.state.phoneCodeErrorText)) {
						 /**
	            * 验证密码错误提示是否存在
	            * @param  {[type]} strUtil.isEmpty(this.state.phoneErrorText) [description]
	            * @return {[type]}                                            [description]
	            */
							if(strUtil.isEmpty(this.state.psdErrorText)) {
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
						    		window.location.href='../activity_lover_register_success/activity_lover_register_success.html?success=false';
						    	}
						    	let errorCall=(data)=>{
						    		this.setState({isLoading: false});
						    		this.updateGuid();//更新guid
						    		let error=dataUtil.getMessage(data.resultCode);
								    this.submitText(error,true);//更新弹窗
						    	}
						    	let errorCall2=(e)=>{
						    		this.setState({isLoading: false});
						    		this.updateGuid();//更新guid
						    		let error=dataUtil.getMessage(data.resultCode);
								    this.submitText(error,true);//更新弹窗
						    	}
						    	dataUtil.getData(url,'POST',param,successCall,errorCall,errorCall2);
							} else {
								this.updateText(this.state.psdErrorText,true);
							}
					 } else {
						 this.updateText(this.state.phoneCodeErrorText,true);
					 }
				} else {
					this.updateText(this.state.imgCodeErrorText,true);
				}
		 } else {
			 this.updateText(this.state.phoneErrorText,true);
		 }

	}

	render(){
		var phone;
		let getPhone=()=>{
			if(this.state.disabled){
				phone=<PhoneCode className='phone-code disabled'
				 guid={this.state.guid} telephone={this.state.telephone}
				 updateGuid={this.updateGuid} updateText={this.updateText}
				  imgCode={this.state.imgCode} updatePhoneState={this.updatePhoneState}
				  successUrl='../activity_lover_register_success/activity_lover_register_success.html?success=true' />
			}else{
				phone=<PhoneCode className='phone-code'
				 guid={this.state.guid} telephone={this.state.telephone}
				 updateGuid={this.updateGuid}  updateText={this.updateText}
				 imgCode={this.state.imgCode} updatePhoneState={this.updatePhoneState}
				 successUrl='../activity_lover_register_success/activity_lover_register_success.html?success=true' />
			}
		}
		getPhone();

		var register;
		let goRegister=()=> {
			if(this.state.registerBtn) {
				register=<div className="love-btn disabled"></div>
			} else {
				register=<div className="love-btn" onClick={this.submit}></div>
			}
		}
		goRegister();

		return(
			<div className="activity-love-container">
					<div className="content-wrap">
						<div className="inner-content">
							<div className="activity-love-title">
								<span className="title-bg"></span>
								<p className="black">注册定制专属二维码</p>
								<p>让TA 听到你爱的发声</p>
							</div>
							<div className="wrap-register">
								<div className="wrap-input">
									<Input type="tel" className='input'
									dataType='telephone' updateText={this.updateText}
									index='1' updateValue={this.updateValue} />
								</div>
								<div className="wrap-input box-moudel">
									<Input type="tel" className='code-input'
									dataType='imgCode' updateText={this.updateText}
									index='2' updateValue={this.updateValue} />
									<ImgCode className='img-code' guid={this.state.guid} updateGuid={this.updateGuid} />
								</div>
								<div className="wrap-input box-moudel">
									<Input type="tel" className='code-input'
									dataType='phoneCode' updateText={this.updateText}
									index='3' updateValue={this.updateValue}
									required={this.state.phoneCodeIsRequire} />
									{ phone}
								</div>
								<div className="wrap-input">
									<Input type="password" className='input'
									dataType='password' updateText={this.updateText}
									index='4' updateValue={this.updateValue} />
								</div>
								{register}
							</div>
							<Alert text={this.state.text} show={this.state.show} />
							<Loading loading={this.state.isLoading} />
						</div>
					</div>
					<div className="slogin-footer">
						<span className="icon-slogin"></span>
						<span className="slogin-text">实现我的梦想家</span>
					</div>
					<div className="top-bg"></div>
					<div className="left-bg"></div>
			</div>
		)
	}
}
