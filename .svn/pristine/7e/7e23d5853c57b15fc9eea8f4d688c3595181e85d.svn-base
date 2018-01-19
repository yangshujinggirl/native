import React,{Component} from 'react';//引入react
import './index.scss?l'//引入样式
import { config,strUtil,dataUtil } from 'publicJs';

//创建loading组件
export default class Loading extends Component{
	//构建函数
	constructor(props){
		super(props);
	}
	//组件渲染完成
	componentDidMount(){

	}
	//是否更新
	shouldComponentUpdate(nextProps){
		return this.props.loading!==nextProps.loading;
	}
	render(){
		let loading;
		let isLoading=()=>{
			if(this.props.loading){
				loading=<div className="wrap-loading">
					<div className="loadings">
		                <div className="loading-list"></div>
		                <div className="loading-list"></div>
		                <div className="loading-list"></div>
		                <div className="loading-list"></div>
		                <div className="loading-list"></div>
		                <div className="loading-list"></div>
		                <div className="loading-list"></div>
		                <div className="loading-list"></div>
	                </div>
	            </div>
			}else{
				loading=<div></div>
			}
		}
		isLoading();
		return(
			<div>
			{loading}
			</div>	
		)
	}
}
/**
 * 组件属性校正
 * @type {Object}
 */
Loading.propTypes={
  /**
   * loading: 是否显示loading
   */
  	loading: React.PropTypes.bool.isRequired
}