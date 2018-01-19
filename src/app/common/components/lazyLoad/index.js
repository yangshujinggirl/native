import React,{Component} from 'react';//引入react
import './index.scss?l'//引入样式
export default class LazyLoad extends Component{
	//设置默认props
	static defaultProps={
		
	}
	//构建函数
	constructor(props){
		super(props);
		this.state={
			reallySrc: '',//真实的src
			isLoad: false //是否加载完成
		}
	}
	//组件渲染完成
	componentDidMount(){
		this.loadImg();
		window.onscroll=()=>{
			this.loadImg();
		}
	}
	/**
	 * 加载真实的图片路径
	 * @return {[type]} [description]
	 */
	loadImg=()=>{
		let offset=0;
		var coord=this.refs[this.props['data-refValue']].getBoundingClientRect();	
		/**
		 * 判断是否加载过,如果未加载就判断是否在可视范围中 在可视范围中就替换真实图片地址
		 * @param  {[type]} !this.state.isLoad [description]
		 * @return {[type]}                    [description]
		 */
		if(!this.state.isLoad){

			if(coord.top<=((window.innerHeight||document.documentElement.clientHeight)+parseInt(offset)))
			{
				this.setState({reallySrc: this.props['data-reallySrc'],isLoad: true});
			}
		}		
	}

	render(){	
		return(
			<img src={this.state.reallySrc} ref={this.props['data-refValue']}  {...this.props} />
		)
		
	}
}
/**
 * 组件属性校正
 * @type {Object}
 */
LazyLoad.propTypes={
  /**
   * data-refValue: 图片ref 唯一性
   */
	'data-refValue': React.PropTypes.string.isRequired
}