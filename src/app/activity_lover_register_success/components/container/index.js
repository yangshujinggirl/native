import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import { avigatorUtil,config,urlUtil } from 'publicJs';
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
	 downloadClick=()=>{
	 	if(avigatorUtil.isWeixin()){
	 		window.location.href=config.weixinDownUrl;
	 	}else{
	 		let iosDownUrl='https://lnk0.com/4w5Qd4';
	 		let androidDownUrl='https://www.lingtouniao.com/app/sina_mama/lingtouniao.apk';
	 		//判断是否为ios
	 		if(avigatorUtil.isIOS()){
	 			window.location.href=iosDownUrl;
	 		}else{
	 			window.location.href=androidDownUrl;
	 		}
	 	}
	 }

	render(){
		let title;
		let isSuccess=()=>{
			//已经注册过的用户
			if(success=='true'){
				title=<p className="title-row">您已经是<span className="big-size">领投鸟用户</span></p>
			}else{
				title=<p className="title-row bigest-size">注册成功!</p>
			}
		}
		isSuccess();
		return(
			<div className='activity-love-container'>
				<div className="content-wrap">
					<div className="inner-content">
						<div className="activity-love-title">
							<span className="title-bg"></span>
							<div className="title-text">
								{ title }
								<p className="title-row">扫下方二维码并关注公众号</p>
								<p className="title-row">回复<span className="biger-size">手机号码+告白内容</span></p>
								<p className="title-row">即可获取你的<span className="bigest-size">专属玫瑰二维码！</span></p>
							</div>
						</div>
						<div className="img-content"></div>
						<div className="weixin-code">
							<img src="../image/activity_lover/weixin-code.png" className="icon-weixin"></img>
							<p>领投鸟微信公众二维码</p>
						</div>
					</div>
				</div>
				<div className="slogin-footer">
					<span className="icon-slogin"></span>
					<span className="slogin-text">实现我的梦想家</span>
				</div>
				<div className="top-bg"></div>
				<div className="left-bg"></div>
			</div>
		)
	}
}
