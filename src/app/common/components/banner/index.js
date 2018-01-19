import React,{Component} from 'react';//引入react
import './index.scss?l'//引入样式
import { swiper } from 'swiper';
import LazyLoad from 'lazyLoad';//引入lazyLoad组件
//创建banner组件
export default class Banner extends Component{
	//构建函数
	constructor(props){
		super(props);
	}

	//接收新的prop
	componentWillReceiveProps(props){
	}
	//组件渲染完成
	componentDidMount(){
		setTimeout(this.initSwiper,300)
	}
	/**
	 * 初始化滚动
	 * @return {[type]} [description]
	 */
	initSwiper(){
		var swiper = new Swiper('.swiper-container', {
			paginationClickable: true,
			autoplay: 1500,//可选选项，自动滑动
			spaceBetween: 10,
			slidesPerView: 'auto'
		});
	}
	render(){

		//根据状态渲染页面
		let dealBanner=()=>{
			return <div className='swiper-container'>
							<div className='swiper-wrapper'>
								{
									this.props.list.map((elem,index) => (
										<div className='swiper-slide' key={elem.bannerId}>
											<a href={elem.bannerUrl==""?"javascript:void(0)":elem.bannerUrl}>
												<img src={elem.bannerPicture}></img>
											</a>
										</div>
									))
								}
							</div>
							<div className='swiper-pagination'></div>
						</div>
		}
		return(
			<div>
				{ dealBanner() }
			</div>
		)
	}
}
