import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import Alert from 'alert';//引入alert组件
import Input from 'input';//引入input组件
import TextArea from 'textarea';//引入textarea组件
import Button from '../button/index.js';//引入按钮组件
import { urlUtil,config } from 'publicJs';
//用户引导页组合组件
export default class Container extends Component{
	/**
	 * 构造函数
	 * @param  {[type]} props [description]
	 * @return {[type]}       [description]
	 */
	constructor(props){
		super(props);
		this.state={
			text: '',//alert显示的内容
			show: false,//弹框是否显示默认不显示
			telephone: '',
			loveName: '',//告白对象
			loveUser: '',//告白人
			loveInfo: '', //告白内容
			dept: '' //渠道来源
		}
	}
	//修改提示框内容
	updateText=(text,show)=>{
		this.setState({text: text,show: show});
		//如果show为true
		if(show){
			setTimeout(()=>{this.setState({show: false});},config.alertTime);
		}
	}
	//同步用户更新的内容
	updateValue=(text,type)=>{
		switch(type){
			case '1':
			this.setState({telephone: text});
			break;
			case '2':
			this.setState({loveName: text});
			break;
			case '3':
			this.setState({loveUser: text});
			break;
			case '4':
			this.setState({loveInfo: text});
			break;
			case '5':
			this.setState({dept: text});
			break;
		}
	}

	/**
	 * 按钮点击触发方法
	 * @return {[type]} [description]
	 */
	btnClick=()=>{
		let search=`telephone=${this.state.telephone}&loveName=${this.state.loveName}
		&loveUser=${this.state.loveUser}&loveInfo=${this.state.loveInfo}&dept=${this.state.dept}`;
		let href=`../activity_lover_info/activity_lover_info.html?${search}`;
		window.location.href=href;
	}

	render(){	
		return(
			<div className="wrap">
				<div className='wrap-input'>
					<Input type="tel" className='input'
					dataType='telephone' updateText={this.updateText} 
					index='1' updateValue={this.updateValue} />
				</div>
				<div className='wrap-input'>
					<Input type="text"  className='input'  
					 placeholder="请输入告白对象名称" require="false"
					 index='2' updateValue={this.updateValue}  />
				</div>
				<div className='wrap-input'>
					<Input type="text" placeholder="请输入告白人名称" require="false" 
					 className='input' index='3'  updateValue={this.updateValue}  />
				</div>
				<TextArea placeholder="请输入告白内容"  updateValue={this.updateValue} index='4'  />
				<div className='wrap-input'>
					<Input type="text" placeholder="请输入渠道来源" require="false" 
					 className='input' index='5'  updateValue={this.updateValue}  />
				</div>
				<Button onClick={this.btnClick} />
				
				<Alert text={this.state.text} show={this.state.show} />
			</div>
		)
	}
}