import React,{Component} from 'react';//引入react
import './index.scss?l'//引入样式
import Loading from 'loading';//引入loading组件
import { strUtil } from 'publicJs';
export default class ScrollLoad extends Component{
	//设置默认props
	static defaultProps={
		
	}
	//构建函数
	constructor(props){
		super(props);
		this.state={
			currentPage: 0
		}
	}
	//组件渲染完成
	componentDidMount(){
		window.onscroll=()=>{
			/**
			 * 是否需要上拉加载
			 * @param  {[type]} this.props.isNeedLoading [description]
			 * @return {[type]}                          [description]
			 */
			if(this.props.isNeedLoading){
				this.scrollFn();
			}	
		}
	}

	scrollFn=()=>{
		var offset=10;
		//真实内容的高度
		var pageHeight = Math.max(document.body.scrollHeight,document.body.offsetHeight);
		//视窗的高度
		var viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
		//隐藏的高度
		var scrollHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
		//如果满足触发条件，执行
		if(pageHeight - viewportHeight - scrollHeight < offset){
			this.setState({currentPage: this.state.currentPage+1});
			if(!strUtil.isEmpty(this.props.getData)){
				this.props.getData(this.state.currentPage);
			}	
		}
	}

	render(){	
		return(
			<div {...this.props}></div>
		)
		
	}
}
/**
 * 组件属性校正
 * @type {Object}
 */
ScrollLoad.propTypes={
  
}