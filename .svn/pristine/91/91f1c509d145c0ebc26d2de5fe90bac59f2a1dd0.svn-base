import React,{Component} from 'react';//引入react
import { sessionUtil } from 'publicJs';
import './index.scss?l'//引入样式

var sessionKey=sessionUtil.get('sessionKey');//获取sessionkey

export default class Footer extends Component{
	//设置默认props
	static defaultProps={
		type: 1
	}
	//构建函数
	constructor(props){
		super(props);
	}


	/**
	 * 跳转账号中心页
	 */
	goAccount=(e)=>{
		e.stopPropagation();
		if(this.props.type=='1'){
			if(sessionKey==''||sessionKey==null) {
				window.location.href='../user_login/user_login.html';
			} else {
				window.location.href='../account_viewall/account_viewall.html';
			}
		}else{
			return false;
		}
	}

	/**
	 * 跳转首页
	 */
	goHome=(e)=>{
		e.stopPropagation();
		if(!(this.props.type=='1')){
			window.location.href='../home/home.html';
		}else{
			return false;
		}
	}


	render(){
		let footClass=`footer ${this.props.className||''}`;
		let homeClass;
		let myselfClass;
		if(this.props.type=='1'){
			homeClass=`index active`;
			myselfClass=`myself`;
		}else{
			homeClass=`index`;
			myselfClass=`myself active`;
		}

		return(
			<div className={footClass}>
              <div className={homeClass} onClick={this.goHome} >
                <span className='footer-icon icon-home'></span>
                <div>首页</div>
              </div>
              <div className={myselfClass} onClick={this.goAccount} >
                <span className='footer-icon icon-myself'></span>
                <div>我的</div>
              </div>
          	</div>
		)
	}
}
/**
 * 组件属性校正
 * @type {Object}
 */
Footer.propTypes={
  /**
   * type: 数字1,2 1为首页选中 2为账户中心选中
   */
  	type: React.PropTypes.string.isRequired
}
