import React,{Component} from 'react';//引入react
import './index.scss?l'//引入样式
import { strUtil } from 'publicJs';
import Icon from 'icon';//引入图标组件
export default class InputGroup extends Component{
	//设置默认props
	static defaultProps={
		
	}
	//构建函数
	constructor(props){
		super(props);
	}


	render(){
		return(
			<div {...this.props}>
				{ this.props.children }
            </div>
		)
		
	}
}