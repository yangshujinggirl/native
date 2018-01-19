import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import Banner from '../../../extension_page_one/components/banner/index.js';//
import Info from '../../../extension_pageSucess_one/components/info/index.js';//
import Button from '../../../extension_pageSucess_one/components/button/index.js';//
/**
 * 引入fetch
 */
import 'fetchJs';
import 'whatwg-fetch';
import { config,strUtil,dataUtil,urlUtil } from 'publicJs';
var dept=urlUtil.getSearch('dept');//渠道标识
//组合组件
export default class Container extends Component{
	constructor(props){
		super(props);

	}

	render(){	

		return(
			<div className="container">
				<Banner />
				<Info statuStyle='failsInfo' showText='您已是领投鸟用户' tipsText="下载领投鸟APP查看最新活动！"/ >
				<Button />
			</div>
		)
	}
}