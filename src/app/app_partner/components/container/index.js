import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import 'fetchJs';
import 'whatwg-fetch';
import Tab from'../tab/index.js';
import {bussinessUtil} from 'publicJs';

//组合组件
export default class Container extends Component{
	constructor(props){
		super(props);
	}
	//组件完成加载
	componentDidMount(){
		/**
       * 适配屏幕
       */
    bussinessUtil.configScreen();
	}


	render(){
        return(
            <div className="Container">
                <Tab>
                    <div name="推荐有奖">
                      <div className="banner">
												<img src="../image/app_partner/banner_1.jpg" alt=""/>
											</div>
											<div className="info">
												<h1 className="head">推荐有奖</h1>
													<ol className="tabTwolist">
														<li className="em">
															<h2 className="title">推荐人 - 获得10鸟币</h2>
															<p className="text">推荐者完成过1次投资后（不包含体验标），每次推荐一个好友完成投资（不包含体验标），推荐者即可获得10鸟币。</p>
														</li>
														<li className="em">
															<h2 className="title">被推荐人 - 获得10%加息券</h2>
															<p className="text">被推荐人获得一张10%的加息券，可用于购买固收类产品（不包含体验标、新手标），投资时使用该加息券，投资收益可增加10%！</p>
														</li>
													</ol>
											</div>
                    </div>
                    <div name="收益提成">
                      <div className="banner">
												<img src="../image/app_partner/banner_2.jpg" alt=""/>
											</div>
											<div className="info">
												<h1 className="head">合伙人奖励规则</h1>
													<ol className="tabTwolist">
														<li className="em">
															<h2 className="title">普通合伙人</h2>
															<p className="text">推荐者本人进行过一次投资（不包含体验标），并推荐一个好友完成绑卡后，即成为平台的普通合伙人。</p>
															<p className="text">
																可以获得：<br/>
																一级好友每次投资固收类产品收益7%的平台奖励，按日计提。<br/>
																二级好友每次投资固收类产品收益3%的平台奖励，按日计提。
															</p>
														</li>
														<li className="em">
															<h2 className="title">金牌合伙人</h2>
															<p className="text">推荐者本人进行过一次投资（不包含体验标），并推荐三个好友完成绑卡后，即升级为平台的金牌合伙人。</p>
															<p className="text">
                                可以获得：<br/>
                                一级好友每次投资固收类产品收益10%平台奖励，按日计提。<br/>
                                二级好友每次投资固收类产品收益3%的平台奖励，按日计提。<br/>
																<span className="tint">说明：二级好友即一级好友推荐的好友。</span>
															</p>
														</li>
													</ol>
											</div>
                    </div>
                    <div name="徽章特权">
                        <div className="banner">
													<img src="../image/app_partner/banner_3.jpg" alt=""/>
												</div>
												<div className="info">
													<h1 className="head">徽章特权</h1>
														<ol className="tabTwolist">
															<li className="em">
																<p className="title text">金牌合伙人尊享徽章，让您的身份与众不同</p>
															</li>
														</ol>
												</div>
                    </div>
                </Tab>
            </div>
            );
  }
}