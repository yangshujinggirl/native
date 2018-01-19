import React,{Component} from 'react';//引入react
import './index.scss?l';//引入样式
import { strUtil } from 'publicJs';
export default class Alert extends Component{
	//设置默认props
	static defaultProps={
		type: '1' //默认选中
	}
	//构建函数
	constructor(props){
		super(props);
	}

	//组件完成更新
	componentDidUpdate(){
	}

	render(){
		let alert;
		//处理弹窗
		let dealAlert=()=>{
			if(this.props.type=='1'){
				let alertClass="alert-type1 "+(this.props.show?'show':'hide');
				alert =
					<div className={alertClass} key={this.props.text}>
						{this.props.text}
					</div>
			}else if(this.props.type=='2'){
				let coverClass="cover "+(this.props.show?'show':'hide');
				let alertClass="alert-type2 "+(this.props.show?'show':'hide');
				let btn1Class=`alert-button ${this.props.btn1Css||'button1'}`;
				let btn2Class=`alert-button ${this.props.btn2Css||'button2'}`;
				let btn;
				let dealBtn=()=>{
					if(strUtil.isEmpty(this.props.btn2Text)){
						btn=
							<div className={`wrap-btn ${strUtil.isEmpty(this.props.title)?'':'no-title'}`}>
								<button className={btn1Class} onClick={this.props.btn1Click}>{this.props.btn1Text}</button>
							</div>
					}else{
						btn=
							<div className={`wrap-btn ${strUtil.isEmpty(this.props.title)?'':'no-title'}`}>
								<button className={btn1Class} onClick={this.props.btn1Click}>{this.props.btn1Text}</button>
								<button className={btn2Class} onClick={this.props.btn2Click}>{this.props.btn2Text}</button>
							</div>
					}
				}
				dealBtn();
				let title;
				let dealTitle=()=>{
					if(strUtil.isEmpty(this.props.title)){
						title = <div></div>
					}else{
						title = <div className="title">{this.props.title}</div>
					}
				}
				dealTitle();
				alert=
					<div>
						<div className={coverClass}></div>
						<div className={alertClass}>
							{title}
							{ this.props.children }
							{ btn }
						</div>
					</div>
			}else if(this.props.type=='3'){
				let coverClass="cover "+(this.props.show?'show':'hide');
				let alertClass="alert-type3 "+(this.props.show?'show':'hide');
				let btn1Class=`alert-button ${this.props.btn1Css||'button1'}`;
				let btn2Class=`alert-button ${this.props.btn2Css||'button2'}`;
				let btn;
				let dealBtn=()=>{
					if(strUtil.isEmpty(this.props.btn2Text)){
						btn=
							<div className={`wrap-btn ${strUtil.isEmpty(this.props.title)?'':'no-title'}`}>
								<button className={btn1Class} onClick={this.props.btn1Click}>{this.props.btn1Text}</button>
							</div>
					}else{
						btn=
							<div className={`wrap-btn ${strUtil.isEmpty(this.props.title)?'':'no-title'}`}>
								<button className={btn1Class} onClick={this.props.btn1Click}>{this.props.btn1Text}</button>
								<button className={btn2Class} onClick={this.props.btn2Click}>{this.props.btn2Text}</button>
							</div>
					}
				}
				dealBtn();
				let title;
				let dealTitle=()=>{
					if(strUtil.isEmpty(this.props.title)){
						title=<div></div>
					}else{
						title =<div className="title">{this.props.title}</div>
					}
				}
				dealTitle();
				alert=
					<div>
						<div className={coverClass}></div>
						<div className={alertClass}>
							{title}
							{ this.props.children }
							{ btn }
						</div>
					</div>
			}
		}
		dealAlert();
		return(
			<div>
				{ alert }
			</div>
		)
	}
}
/**
 * 组件属性校正
 * @type {Object}
 */
Alert.propTypes={
  /**
   * show: 是否显示弹窗
   * text: 提示框的文字内容
   * type: 弹窗的类型 目前为2类 1为即时消失的弹窗 2为用户选择的弹窗 默认为1
   * title: 用户选择弹窗的标题
   * btn1Text: 按钮1的文字
   * btn2Text: 按钮2的文字
   * btn1Css: 按钮1的样式
   * btn2Css: 按钮2的样式
   * btn1Click: 按钮1的事件
   * btn2Click: 按钮2的事件
   */
  	type: React.PropTypes.string,
  	show: React.PropTypes.bool.isRequired,
	text: React.PropTypes.string,
	title: React.PropTypes.string,
	content1: React.PropTypes.string,
	content2: React.PropTypes.string,
	btn1Text: React.PropTypes.string,
	btn2Text: React.PropTypes.string,
	btn1Css: React.PropTypes.string,
	btn2Css: React.PropTypes.string,
	btn1Click: React.PropTypes.func,
	btn2Click: React.PropTypes.func
}
