import React from 'react';
import { Dropdown, Menu, MenuProps } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import logo from '@assets/img/logo.png';
import './index.less';
import classNames from 'classnames';

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

type OptionItem = { label: string, key: LayoutMenuName }

const options: ( OptionItem & {  children?: OptionItem[] })[] = [
  {
    label: '首页',
    key: LayoutMenuName.Home,
  },
  {
    label: '关于我们',
    key: LayoutMenuName.About,
    children: [
      {
        key: LayoutMenuName.Detail,
        label: '公司简介',

      },
      {
        label: '核心团队',
        key: LayoutMenuName.Team,
      },
      {
        label: '投资策略',
        key: LayoutMenuName.Strategy,
      },
    ],
  },
  {
    label: '联系我们',
    key: LayoutMenuName.Contact,
   
  },
  {
    label: '招聘',
    key: LayoutMenuName.Recruit,
  },
];


export const LayoutHeader: React.FC<LayoutHeaderProps> = () => {

  const [current, setCurrent] = React.useState(LayoutMenuName.Home);

  const menuItemOnClick=React.useCallback((data:( OptionItem & {  children?: OptionItem[] }))=> () => {
    console.log(data,'*******')
    setCurrent(data?.key)
  },[]) 

  const menu = React.useMemo(()=>{
   return options.map(x=>{
      if(x.children) {
        return <Dropdown trigger={['hover']} key={x.key} menu={ {items: x.children} } >
          <div className={classNames('menu--item',{'menu--select': x.key === current})} onClick={menuItemOnClick(x)}>
            {x.label}
          </div>
        </Dropdown>
      }
      return <div onClick={menuItemOnClick(x)} className={classNames('menu--item',{'menu--select': x.key === current})}>{x.label}</div>
    })
    
  },[menuItemOnClick,current])
  
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

 