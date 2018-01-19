import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import { avigatorUtil,config,urlUtil } from '../../../.././utils/js/public.js';
var success=urlUtil.getSearch('success');//是否是已经注册的用户
//组合组件
export default class Container extends Component{
	constructor(props){
		super(props);
	}
	//组件完成加载
	componentDidMount(){
		
	}

	/**
	 * 下载点击 
	 */
	 iosdownloadClick=()=>{
	 	if(avigatorUtil.isWeixin()){
	 		window.location.href=config.weixinDownUrl;
	 	}else{
	 		let iosDownUrl='https://itunes.apple.com/cn/app/ling-tou-niao-li-cai/id1073508943?mt=8';
	 		window.location.href=iosDownUrl;
	 	}
	 }

	 androdownloadClick=()=>{
	 	if(avigatorUtil.isWeixin()){
	 		window.location.href=config.weixinDownUrl;
	 	}else{
	 		let androidDownUrl='https://www.lingtouniao.com/app/lingtouniao.apk';
	 		window.location.href=androidDownUrl;
	 	}
	 }

	render(){

		return(	
			<div className='button'>
					<button className="btn" onClick={this.iosdownloadClick}>IOS下载</button>
					<button className="btn androBtn" onClick={this.androdownloadClick}>安卓下载</button>
			</div>
		)
	}
}