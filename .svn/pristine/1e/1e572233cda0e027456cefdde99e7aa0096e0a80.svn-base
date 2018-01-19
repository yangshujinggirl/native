import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import Info from '../info/index.js';//
import Banner from '../banner/index.js';//
import Form from '../form/index.js';//

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
				<Form registeredUrl='../extension_pagefail_one/extension_pagefail_one.html?success=false' 
        successedUrl='../extension_pageSucess_one/extension_pageSucess_one.html?success=false'/>
				<Info whyStyles='why1' headStyles='head1' copyRightStyles='copyRight1'/>
			</div>
		)
	}
}