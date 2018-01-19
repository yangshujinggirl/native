import React,{Component} from 'react';//引入react
import './index.scss?l'//引入样式
import { strUtil } from 'publicJs';
export default class Button extends Component{
	//设置默认props
	static defaultProps={
		type: 'solid' //按钮类型,默认实心
	}
	//构建函数
	constructor(props){
		super(props);
		this.state={
			btnClass: ''
		}
	}

	/**
	 * 按钮点击事件
	 * @return {[type]} [description]
	 */
	btnClick=()=>{
		this.setState({btnClass: 'btn-clicked'});
		setTimeout(()=>{this.setState({btnClass: ''});},500);
		if(!strUtil.isEmpty(this.props.btnClick)){
			this.props.btnClick();
		}
	}

	render(){
		//根据状态,展示对应的btn效果
		let dealBtn=()=>{
			let btnCss=`btn ${this.props.type} ${this.state.btnClass} ${this.props.btnCss}`;
			let btnDisableCss = `btn disabled ${this.state.btnClass} ${this.props.btnCss}`;
			if(this.props.type=='disabled'){
				return <button className={btnDisableCss} disabled >{this.props.btnText}</button>
			}else{
				return <button {...this.props} className={btnCss} onClick={this.btnClick} >{this.props.btnText}</button>
			}
		}
		let btn=dealBtn();
		return(
			<div className={this.props.parentCss}>
			{ btn }
			</div>
		)

	}
}
/**
 * 组件属性校正
 * @type {Object}
 */
Button.propTypes={
  /**
   * btnCss: 按钮样式
   * type: btn的类型 目前包括solid实心,disabled 禁用 hollow 空心的
   * btnText: 按钮的文本
   * parentCss 父元素div样式
   */
  	btnCss: React.PropTypes.string,
	type: React.PropTypes.string,
	btnText: React.PropTypes.string,
	parentCss: React.PropTypes.string
}
