import { PageContent } from '@pages/components/page-content/page-content';
import React from 'react';
import * as MapC   from 'react-bmapgl/dist'

import Marker from 'react-bmapgl/dist/Overlay/Marker'
import Map from 'react-bmapgl/dist/Map/Map';
import {NavigationControl, InfoWindow, ZoomControl } from 'react-bmapgl/dist';
import './index.less';

const Contact = () => {

  return <div className='contact-content'>
            <div className='contact-content--header'>
              <div className='contact-content--header__content'>联系我们</div>
            </div>
            <div className='contact-content--border'>
            <div className='contact-content--text'>上海赫富投资有限公司</div>
            <div className='contact-content--text'>联系电话：021 58482368</div>
            <div >
              <div className='contact-content--text'>公司地址：上海市黄浦区福州路318号华设大厦1709-10</div>
              <div id="container"></div>
              <div>
              <Map center={{lng: 116.402544, lat: 39.928216}} 
              enableDoubleClickZoom 
              enableScrollWheelZoom
              maxZoom={20} zoom={11}/>
              </div>
            </div>
            </div>
  </div>;

};

export default Contact;