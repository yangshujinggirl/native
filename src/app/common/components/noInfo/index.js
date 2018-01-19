import React,{Component} from 'react';//引入react
import './index.scss?l'//引入样式
import { strUtil } from 'publicJs';
export default class NoInfo extends Component{
	//设置默认props
	static defaultProps={
		show:false,
		emptyTip: '暂无数据'
	}
	//构建函数
	constructor(props){
		super(props);
	}


	render(){
		return(
			<div className={`componet-nolist ${this.props.show?'show':'hide'}`}>
				<div className='no-list-img'></div>
				<p className='no-list-tip'>{this.props.emptyTip}</p>
			</div>
		)	
	}
}
/**
 * 组件属性校正
 * @type {Object}
 */
NoInfo.propTypes={
}