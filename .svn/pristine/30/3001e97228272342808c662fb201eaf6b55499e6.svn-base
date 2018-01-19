import React,{Component} from 'react';//引入react
import './index.scss?l'//引入样式
import { config,strUtil } from 'publicJs';

//创建图形验证码组件
export default class ImgCode extends Component{
	//构建函数
	constructor(props){
		super(props);
	}

	//组件渲染完成
	componentDidMount(){

	}

	/**
	 * 图形验证码点击刷新
	 * @return {[type]} [description]
	 */
	imgClick= () =>{
		this.props.updateGuid();
	}

	/**
	 * 获取图形验证码
	 * @return {[type]} [description]
	 */
	getUrl= () =>{
		let url=`${config.baseUrl}/user/register/pictureCode/${this.props.guid}`;
		return url;
	}

	render(){	
		let url=this.getUrl();	
		return(
			<img src={url} className={this.props.className} alt={this.props.alt} title={this.props.title} onClick={this.imgClick} />
		)
	}
}

/**
 * 组件属性校正
 * @type {Object}
 */
ImgCode.propTypes={
  /**
   * guid: 唯一编码
   * updateGuid: 更新唯一编码
   * @type {[type]}
   */
  guid: React.PropTypes.string,
  updateGuid: React.PropTypes.func
}