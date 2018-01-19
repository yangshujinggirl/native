import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import 'fetchJs';
import 'whatwg-fetch';
import { config,strUtil,dataUtil,urlUtil } from 'publicJs';

var status= parseInt(urlUtil.getSearch('tag'));//tab页标识



//组合组件
export default class Tab extends Component{
	constructor(){
      super();
      this.state={ 
          currentIndex :status||0
      };
  }

    check_tittle_index(index){
        return index===this.state.currentIndex ? "item selected" : "item";
    }

    check_item_index(index){
        return index===this.state.currentIndex ? "recommend selected" : "recommend";
    }

    render(){
        let _this=this;
        return(
            <div>
                {/*动态生成Tab导航*/}
                <ul className="tabOnelist">
                    { React.Children.map( this.props.children , (element,index) => {
                        return(
                            /*箭头函数没有自己的this，这里的this继承自外围作用域，即组件本身*/
                            <li onClick={ () => { this.setState({currentIndex : index}) } } className={ this.check_tittle_index(index) }>{ element.props.name }</li>
                            );
                    }) }
                </ul>
                {/*Tab内容区域*/}
                <ul className="content">
                    {React.Children.map(this.props.children,(element,index)=>{
                        return(
                            <li className={ this.check_item_index(index) }>{ element }</li>
                            );
                    })}
                </ul>
            </div>
            );
    }
}