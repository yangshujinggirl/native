import React,{Component} from 'react';//引入react
import './index.scss?l'//引入样式
import { config,strUtil,dataUtil } from 'publicJs';
var time;//计时器
//创建图形验证码组件
export default class PhoneCode extends Component{
	//构建函数
	constructor(props){
		super(props);
		this.state={
			phoneText: '获取验证码'
		}
	}
	//组件渲染完成
	componentDidMount(){

	}

	//计时器
	timming=()=>{
		clearInterval(time);
		let num=60;
		time=setInterval(()=>{
			if(num>0){
				num--;
				this.setState({phoneText: `${num}s`});
			}else{
				this.setState({phoneText: '重新获取'});
				//更新按钮状态为可以点击
				this.props.updatePhoneState(false);
				clearInterval(time);
			}		
		},1000);
	}	

	//获取数据
	fetchData= ()=>{
		//如果包含disabled,则返回false
		if(strUtil.hasStr(this.props.className,'disabled')){
			return false;
		}
		//更新按钮状态为不可以点击
		this.props.updatePhoneState(true);
		let sendType;
		if(strUtil.isEmpty(this.props.sendType)){
			sendType=1;
		}else{
			sendType=2;
		}
		let url=`/mobile/mobilecode/h5/getMobileCode/byMachineNo`
    	let param=`sendType=${sendType}&mobileNo=${this.props.telephone}&machineNo=${this.props.guid}&pictureCode=${this.props.imgCode}`;
    	let successCall=(data)=>{  	
    		this.props.updateText('短信已发送,请注意查收!',true);//更新弹窗
			this.timming();//开始计时器
    	}
    	let errorCall=(data)=>{
    		this.props.updateGuid();//更新guid
    		if(!strUtil.isEmpty(this.props.updateValue)){
    			this.props.updateValue('','2',false,'图形验证码不能为空');
    		}
    		console.log(!strUtil.isEmpty(this.props.updateValue));
    		let error=dataUtil.getMessage(data.resultCode);
		    this.props.updateText(error,true);//更新弹窗
		    //用户已注册,并且successUrl具备值,则跳转
		    if(data.resultCode=='10000011'&&!strUtil.isEmpty(this.props.successUrl)){
		    	window.location.href=this.props.successUrl;
		    }
    	}
    	let errorCall2=(e)=>{
    		this.props.updateGuid();//更新guid
		    this.props.updateText(e.message,true);//更新弹窗
    	}
    	dataUtil.getData(url,'POST',param,successCall,errorCall,errorCall2);
    }

	render(){
		return(
			<button  className={this.props.className} value={this.state.phoneText}  onClick={this.fetchData}>{this.state.phoneText}</button>
		)
	}
}
/**
 * 组件属性校正
 * @type {Object}
 */
PhoneCode.propTypes={
  /**
   * guid: 唯一编码
   * updateGuid: 更新唯一编码
   * updateText: 更新弹窗文字
   * imgCode: 图形验证码
   * telephone: 手机号码
   * updatePhoneState: 更新获取验证码的状态
   * successUrl: 注册过跳转地址
   * @type {[type]}
   */
  guid: React.PropTypes.string,
  updateGuid: React.PropTypes.func,
  updateText: React.PropTypes.func,
  imgCode: React.PropTypes.string,
  telephone: React.PropTypes.string,
  updatePhoneState: React.PropTypes.func,
  successUrl: React.PropTypes.string
}