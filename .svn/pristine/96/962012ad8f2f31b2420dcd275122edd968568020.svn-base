import React,{Component} from 'react';//引入react
import './index.scss?l'//引入样式
import Footer from 'footer';//引入公共底部组件

/**
 * 引入fetch
 */
import 'fetchJs';
import 'whatwg-fetch';
import { config,strUtil,bussinessUtil,sessionUtil,dataUtil } from 'publicJs';

//创建banner组件
class Container extends Component{
	//构建函数
	constructor(props){
		super(props);
		this.state={
			alertText: '',//提示框文本
      alertShow: false,//提示框默认不显示
      activityList: []
		};
	}
	componentWillMount() {
		this.getBannerData();
	}
	//修改提示框内容
  updateText=(text,show)=>{
    this.setState({alertText: text,alertShow: show});
    if(show){
      setTimeout(()=>{this.setState({alertShow: false});},config.alertTime);
    }
  }
	getBannerData=()=>{
    let url=`/page/banner`;
		let param="clientType=I&location=1";
    let successCall=(data)=>{
			this.setState({
				activityList:data.data.bannerList
			});
    }
    let errorCall=(data)=>{
      this.setState({isLoading: false});
        if(data.resultCode==config.loginTimeOver){
            this.setState({loginShow: true});
        }else{
          let error=dataUtil.getMessage(data.resultCode);
        }
    }
    let errorCall2=(e)=>{
      this.setState({isLoading: false});
      this.updateText(e,true);//更新弹窗
    }
    dataUtil.getData(url,'POST',param,successCall,errorCall,errorCall2);
  }

	render(){
		return(
        <div className="activity-list-content">
					<div className="activity-title">热门活动</div>
	        {
						this.state.activityList.map((ele,index) => (
							<a href={ele.bannerUrl==""?"javascript:void(0)":ele.bannerUrl} key={index} className="link-url"><img src={ele.bannerPicture}></img></a>
						))
					}
        </div>
		)
	}
}

export default Container;
