import React,{ Component } from 'react';
import './index.scss?l';//引入css文件


class Head extends Component {
  constructor(props) {
    super(props)
  }
  download =()=> {
    window.location.href='https://www.lingtouniao.com/newmobile/#/wakeupapp/detail/1'
  }
  render() {
    return(
      <div className="head-content">
        <div className="head-wrap">
          <div className="left-part">
            <div className="logo-wrap">
              <img src="../image/icon/new_h5/logo_xiao.png" className="icon-logo"/>
            </div>
            <img src="../image/icon/new_h5/logo_text.png" className="theam-text"/>
          </div>
          <div className="right-part" onClick={this.download}>
            <button className="download">APP下载</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Head;
