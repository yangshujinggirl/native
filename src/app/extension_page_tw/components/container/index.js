import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import Info from '../../../extension_page_on/components/info/index.js';
import Banner from '../banner/index.js';//
import Form from '../../../extension_page_on/components/form/index.js';
//组合组件
export default class Container extends Component{
	constructor(props){
		super(props);
	}
  //组件完成加载
  componentDidMount(){

  }


	render(){
		return(
			<div className="container">
				<Banner />
				<Form registeredUrl='../extension_pagefail_two/extension_pagefail_two.html?success=false'
        successedUrl='../extension_pageSucess_two/extension_pageSucess_two.html?success=false'/>
				<Info whyStyles='why2' headStyles='head2' copyRightStyles='copyRight2' />
			</div>
		)
	}
}