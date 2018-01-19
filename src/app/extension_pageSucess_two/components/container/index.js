import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import Banner from '../../../extension_page_two/components/banner/index.js';//
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
				<Info statuStyle='successInfo' showText='恭喜您注册成功' tipsText="快下载领投鸟APP领取您的新手礼包吧！"/ >
				<Button />
			</div>
		)
	}
}