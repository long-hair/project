import { lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Router } from './business/constants/router';
import { LayoutHeader } from '@pages/layout/header-layout';
import React from 'react';
import { Modal } from 'antd';
import './app.less';

const Home = lazy(()=>import(/* webpackChunkName:'home' */ '@pages/home'))
const Contact = lazy(()=>import(/* webpackChunkName:'Contact' */ '@pages/contact'))
const Recruitment = lazy(()=>import(/* webpackChunkName:'Recruitment' */ '@pages/recruitment'))
const About = lazy(()=>import(/* webpackChunkName:'About' */ '@pages/about'))

function App() {
  const [modalVisible, setModalVisible] = React.useState(false);

  const onOk = React.useCallback(()=>{
    setModalVisible(false);
  },[]) 

  const onCancel = React.useCallback(()=>{
  	window.location.replace("https://www.baidu.com/")
  },[]) 

  /**
   * 忽略异常
   */
 React.useEffect(() => {
  window.addEventListener('error', e => {
    if (e.message === 'ResizeObserver loop limit exceeded' || e.message === 'Script error.') {
      const resizeObserverErrDiv = document.getElementById(
        'webpack-dev-server-client-overlay-div'
      )
      const resizeObserverErr = document.getElementById(
        'webpack-dev-server-client-overlay'
      )
      if (resizeObserverErr) {
        resizeObserverErr.setAttribute('style', 'display: none');
      }
      if (resizeObserverErrDiv) {
        resizeObserverErrDiv.setAttribute('style', 'display: none');
      }
    }
  })
}, [])

  return (
    <div className='project--content--wrap'>
      <div className='project--content'>
        <LayoutHeader/>
        <Switch>
          <Route exact path={Router.Home} ><Home/></Route>
          <Route exact path={Router.About} ><About/></Route>
          <Route exact path={Router.Contact} ><Contact/></Route>
          <Route exact path={Router.Recruitment} ><Recruitment/></Route>
          <Route exact path={'/'} ><Home/></Route>
          <Redirect to="*" />
        </Switch>
        <Modal open={modalVisible} okText={'确认'}  cancelText={"取消"} onOk={onOk} onCancel={onCancel}>
          答案可打开打开窗口哈韩的卡的
        </Modal>
      </div >
      <div className='project--footer'>
        Copyright © 上海赫富投资有限公司版权所有　沪ICP备17008281号-1　技术支持：恒生 i 私募
        </div>
    </div>
    
    
  );
}

export default App;
