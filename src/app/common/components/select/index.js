import React,{Component} from 'react';//引入react
import './index.scss?l'//引入样式

export default class Select extends Component{
	//设置默认props
	static defaultProps={
		
	}
	//构建函数
	constructor(props){
		super(props);
	}


	render(){
		return(
			<select className={this.props.className} {...this.props}>
			{this.props.children}
			</select>
		)
		
	}
}