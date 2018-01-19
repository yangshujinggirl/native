import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import { avigatorUtil,config,urlUtil } from 'publicJs';
var dept=urlUtil.getSearch('dept');//渠道标识
//组合组件
export default class Container extends Component{
	constructor(props){
		super(props);
		this.state={
			share: false //是否显示分享
		}
	}
	//组件完成加载
	componentDidMount(){

	}

	/**
	 * 定制告白点击事件
	 * @return {[type]} [description]
	 */
	btnRegister=()=>{
		let url=`../activity_lover_register/activity_lover_register.html?dept=${dept}`;
		window.location.href=url;
	}

	/**
	 * 分享按钮点击事件
	 */
	btnShare=()=>{
		this.setState({share: true});
	}

	/**
	 * 关闭分享层
	 * @return {[type]} [description]
	 */
	closeShare= () =>{
		this.setState({share: false});
	}

	render(){
		let share;
		let isShow=()=>{
			if(this.state.share){
				share=<div><div className="share-img show"></div>
					<div className="share-wrap show" onClick={this.closeShare}></div>
					<div className="share-text show"></div></div>;
			}else{
				share=<div><div className="share-img"></div>
					<div className="share-wrap" onClick={this.closeShare}></div>
					<div className="share-text"></div></div>;
			}
		}
		isShow();
		return(
			<div className='activity-love-container'>
				<div className="content-wrap">
					<div className="inner-content">
						<div className="activity-love-title">
							<span className="title-bg"></span>
						</div>
						<div className="activity-code"></div>
						<div className="btn-list">
							<div className="btn-register" onClick={this.btnRegister}></div>
							<div className="btn-share" onClick={this.btnShare} ></div>
						</div>
						<div className="rule-list">
							<div className="rule-one">
								<h2 className="tt">
									活动时间
								</h2>
								<p className="rule-text">
									2月11日 00:00 － 2月15日  18:00
								</p>
							</div>
							<div className="rule-one">
								<h2 className="tt">活动规则</h2>
								<p className="rule-text">
									1、所有领投鸟注册用户可以参与一次专属玫瑰二维码定制活动；
								</p>
								<p className="rule-text">
									2、新注册且单笔投资满2千元（非新手标）， 可额外获得日本进口白色恋人礼盒一份；
								</p>
								<p className="rule-text">
									3、在朋友圈晒出告白，并截图发至领投鸟微信公众后台，即有机会参与投票评选，高档烤面包机、YSL唇膏、京东购物卡、
									话费流量丰厚大礼等你来拿，详情请见领投鸟官方公众号。
								</p>
							</div>
						</div>
						<p className="footerInfo">*本次活动最终解释权归领投鸟运营团队所有。</p>
						{ share }
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
