import React,{Component} from 'react';//引入react
import './index.scss?l';//引入样式
import Alert from 'alert';//引入alert组件
import { strUtil,bussinessUtil } from 'publicJs';
export default class LoginOver extends Component{
	//设置默认props
	static defaultProps={
	}
	//构建函数
	constructor(props){
		super(props);
	}

	//组件完成更新
	componentDidUpdate(){
	}
	/**
	 * 按钮点击事件
	 */
	btnClick=()=>{
		let url=this.props.url?this.props.url:window.location.href;
		bussinessUtil.goLogin(url);
	}

	render(){
		return(
			<Alert type='2' show={this.props.show}
	          title='登录超时'  btn1Text='确定' 
	           btn1Click={this.btnClick}  btn1Css='loginOver-btn'>
	           <p className='loginOver-alert-content'>您已长时间没有操作，为确保安全，请重新登录。</p>
	        </Alert>
		)
	}
}
/**
 * 组件属性校正
 * @type {Object}
 */
LoginOver.propTypes={
  show: React.PropTypes.bool,
}