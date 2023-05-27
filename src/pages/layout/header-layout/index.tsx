import React from 'react';
import { Dropdown } from 'antd';
import logo from '@assets/img/logo.png';
import classNames from 'classnames';
import { Router, UrlParams } from '@business/constants/router';
import './index.less';
import { AboutMenuType } from '@pages/about/types/about.dto';
import { useHistoryAndLocation } from 'src/hooks/use-history-and-loaction';

export enum LayoutMenuName  {
  Home = 'home',
  About = 'about',
  Detail = 'detail',
  Team = 'team',
  Strategy = 'strategy',
  Contact = 'contact',
  Recruit = 'recruit',

}

type LayoutHeaderProps = {
  children?:JSX.Element;
}

type OptionItem = { label: string, key: LayoutMenuName | Router,url?: string } 

const options: ( OptionItem & {  children?: OptionItem[] })[] = [
  {
    label: '首页',
    key: Router.Home,
    url: Router.Home,
  },
  {
    label: '关于我们',
    key: Router.About,
    url: Router.About,
    children: [
      {
        key: LayoutMenuName.Detail,
        label: '公司简介',
        url:`${Router.About}?${UrlParams.AboutMenu}=${AboutMenuType.Detail}`

      },
      {
        label: '核心团队',
        key: LayoutMenuName.Team,
        url:`${Router.About}?${UrlParams.AboutMenu}=${AboutMenuType.Team}`

      },
      {
        label: '投资策略',
        key: LayoutMenuName.Strategy,
        url:`${Router.About}?${UrlParams.AboutMenu}=${AboutMenuType.Strategy}`

      },
    ],
  },
  {
    label: '联系我们',
    key: Router.Contact,
    url:`${Router.Contact}`

   
  },
  {
    label: '招聘',
    key: Router.Recruitment,
    url:`${Router.Recruitment}`

  },
];


export const LayoutHeader: React.FC<LayoutHeaderProps> = () => {

  const [current, setCurrent] = React.useState<string>(LayoutMenuName.Home);
  const {history,location} = useHistoryAndLocation()
  const curPathName = location.pathname;

  const menuItemOnClick=React.useCallback((data:( OptionItem & {  children?: OptionItem[] }))=> () => {
    setCurrent(data?.key)
    data.url && history.push(data.url)
  },[]); 

  const dropDownItemOnClick=React.useCallback((data:( OptionItem & {  children?: OptionItem[] }))=>({ key }: { key: string }) => {
    const { url } =  data.children?.find(x=>x.key === key)?? {}
    setCurrent(key as LayoutMenuName);
    url && history.push(url)
  },[]) 

  React.useEffect(()=>{
    setCurrent(curPathName)
  },[curPathName])


  const menu = React.useMemo(()=>{
   return options.map(x=>{
      if(x.children) {
        return <Dropdown 
        getPopupContainer={triggerNode => triggerNode.parentNode as HTMLElement}
        overlayClassName="layout-header--content__menu--dropdown"
        trigger={['hover']} key={x.key} menu={ {items: x.children ,onClick: dropDownItemOnClick(x)} } >
          <div className={classNames('menu--item',{'menu--select': x.key === current})} onClick={menuItemOnClick(x)}>
            {x.label}
          </div>
        </Dropdown>
      }
      return <div key={x.key} onClick={menuItemOnClick(x)} className={classNames('menu--item',{'menu--select': x.key === current})}>{x.label}</div>
    })
    
  },[menuItemOnClick, current])
  
  return (
    <div className='layout-header'>
      <div className='layout-header--content'>
        <img className='header-logo' src={logo} alt="log" />
        <div  className='layout-header--content__menu'>
          {menu}
        </div>
      </div>
    </div>
  );
};

 