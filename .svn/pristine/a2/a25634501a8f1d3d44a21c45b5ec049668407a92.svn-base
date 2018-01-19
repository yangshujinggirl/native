import React,{Component} from 'react';//引入react
import './index.scss?l'//引入样式
import { strUtil } from 'publicJs';
export default class Icon extends Component{
	//设置默认props
	static defaultProps={
		
	}
	//构建函数
	constructor(props){
		super(props);
	}


	render(){
		let iconCss=`icon ${this.props.iconType} ${this.props.iconCss}`

		return(
			<span className={iconCss} {...this.props}></span>
		)
		
	}
}
/**
 * 组件属性校正
 * @type {Object}
 */
Icon.propTypes={
  /**
   * iconCss: icon样式
   * iconType: icon的类型 目前包括account,telephone,password,imgCode,phoneCode
   */
  	iconCss: React.PropTypes.string,
	iconType: React.PropTypes.string.isRequired
}