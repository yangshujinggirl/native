import React,{Component} from 'react';//引入react
import './index.scss?l'//引入样式
export default class Switch extends Component{
	//设置默认props
	static defaultProps={
		switchState: 'default-off' //按钮默认为关
	}
	//构建函数
	constructor(props){
		super(props);
	}

	/**
	 * 切换开关
	 * @return {[type]} [description]
	 */
	toggleSwitch=()=>{
		if(this.props.switchState=='default-off'||this.props.switchState=='off'){
			this.props.updateSwitch('on');
		}else{
			this.props.updateSwitch('off');
		}
	}

	render(){
		return(
			<span className={`swiper ${this.props.switchState}`} onClick={this.toggleSwitch} >
				<span className="ball"></span>
				<span className="slide slideColor"></span>
			</span>
		)
		
	}
}
/**
 * 组件属性校正
 * @type {Object}
 */
Switch.propTypes={
  /**
   * state: 开发状态 default-off default-on 默认为关
   */
  	switchState: React.PropTypes.string.isRequired,
}