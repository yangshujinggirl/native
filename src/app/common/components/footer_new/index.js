import React,{Component} from 'react';//引入react
import { sessionUtil } from 'publicJs';
import './index.scss?l'//引入样式

var sessionKey=sessionUtil.get('sessionKey');//获取sessionkey

export default class FooterNew extends Component{
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
		if(sessionKey==''||sessionKey==null) {
			window.location.href='../user_login/user_login.html';
		} else {
			window.location.href='../account_viewall/account_viewall.html';
		}
	}

	/**
	 * 跳转首页
	 */
	goHome=(e)=>{
		e.stopPropagation();
		window.location.href='../home/home.html';
	}
	/**
	 * 跳转投资列表
	 */
	goProduct=(e)=>{
		e.stopPropagation();
		window.location.href='../product_list/product_list.html';
	}

	render(){
		let footClass;
		let homeClass;
		let myselfClass;
		if(this.props.type=='1'){
			footClass = `footer-new home-active`;
		}else if(this.props.type=='2'){
			footClass = `footer-new product-active`;
		} else {
			footClass = `footer-new account-active`;
		}

		return(
			<div className={footClass}>
        <div className="index" onClick={this.goHome} >
          <span className='footer-icon icon-home'></span>
          <div>首页</div>
        </div>
				<div className="prod" onClick={this.goProduct} >
          <span className='footer-icon icon-product'></span>
          <div>投资</div>
        </div>
        <div className="myself" onClick={this.goAccount} >
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
FooterNew.propTypes={
  /**
   * type: 数字1,2 1为首页选中 2为账户中心选中
   */
  	type: React.PropTypes.string.isRequired
}
