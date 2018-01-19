import React,{Component} from 'react';//引入react
import './index.scss?l'//引入样式

export default class TextArea extends Component{
	//构建函数
	constructor(props){
		super(props);
	}
	//inputChange
	inputChange=(e)=>{
		let type=this.props.index;
		let text=e.target.value;
		//把用户输入文本换行符号解析出来
		text=text.replace(/[\r\n]/g,"br");
		this.props.updateValue(text,type);
	}
	render(){
		return(
			<div className='wrap-textarea'>
				<textarea className='textarea' {...this.props} onChange={this.inputChange}></textarea>
			</div>
		)
		
	}
}