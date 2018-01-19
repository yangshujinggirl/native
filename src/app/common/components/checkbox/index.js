import React,{Component} from 'react';//引入react
import './index.scss?l'//引入样式
import { strUtil } from 'publicJs';

export default class Checkbox extends Component{
	//设置默认props
	static defaultProps={
		checked: true //默认选中
	}
	//构建函数
	constructor(props){
		super(props);
	}

	/**
	 * checkbox 改变事件
	 */
	inputChange=(e)=>{
		//调用父组件的回调函数
		this.props.changeCheck();
	}

	render(){
		/**
		 * 处理checkbox
		 * @return {[type]} [description]
		 */
		let dealCheck=()=>{

			if(this.props.checked){
				let checkClass=`checkbox checked ${this.props.checkCss||''}`;
				return <span onClick={this.inputChange} className={checkClass}></span>
			}else{
				let checkClass=`checkbox ${this.props.checkCss||''}`;
				return <span onClick={this.inputChange} className={checkClass}></span>
			}
		}
		let check= dealCheck();
		return(
			<div className={this.props.parentCss}>
			{ check }
			{ this.props.children }
			</div>
		)
		
	}
}
/**
 * 组件属性校正
 * @type {Object}
 */
Checkbox.propTypes={
  /**
   * parentCss: 父级div的样式
   * checkCss: 选择框的样式
   * checked: 是否选中 默认选中
   * changeCheck: checkbox改变调用的方法
   * @type {[type]}
   */
  	parentCss: React.PropTypes.string,
	checkCss: React.PropTypes.string,
	checked: React.PropTypes.bool,
	changeCheck: React.PropTypes.func
}