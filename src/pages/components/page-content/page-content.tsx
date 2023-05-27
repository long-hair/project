import React from 'react';
import { SnippetsOutlined } from '@ant-design/icons';
import './index.less';
import { LayoutMenuName } from '@pages/layout/header-layout';
import { useHistoryAndLocation } from 'src/hooks/use-history-and-loaction';
import { UrlParams } from '@business/constants/router';

const options =[
  {
  key: LayoutMenuName.Detail,
  label: '公司简介',
  children:<div className='about--content--text'>
上海赫富投资有限公司是一家专注于量化投资的对冲基金。我们融合前沿的技术、科学严谨的研究体系与长期的量化投资经验，在全球股票、金融衍生品等市场中寻找长期稳定的量化策略。公司管理规模健康，策略线丰富，近年来取得了优秀的业绩。我们拥有极具创造力与竞争力的投研团队，致力于打造具有长期竞争力的量化交易公司。
我们始终渴求对数学、科技充满热忱的创造者，为每一位赫富人提供平等互助的学术氛围与追求卓越的上升空间，欢迎每一位对科技世界有远大抱负的成员加入，与赫富一起探索量化世界，共同成长
  </div>
  },
  {
    label: '核心团队',
    key: LayoutMenuName.Team,
    children:<div className='about--content--text'>
    上海赫富投资有限公司是一家专注于量化投资的对冲基金。我们融合前沿的技术、科学严谨的研究体系与长期的量化投资经验，在全球股票、金融衍生品等市场中寻找长期稳定的量化策略。公司管理规模健康，策略线丰富，近年来取得了优秀的业绩。我们拥有极具创造力与竞争力的投研团队，致力于打造具有长期竞争力的量化交易公司。
    我们始终渴求对数学、科技充满热忱的创造者，为每一位赫富人提供平等互助的学术氛围与追求卓越的上升空间，欢迎每一位对科技世界有远大抱负的成员加入，与赫富一起探索量化世界，共同成长
      </div>
  },
  {
    label: '投资策略',
    key: LayoutMenuName.Strategy,
    children:<div className='about--content--text'>
    上海赫富投资有限公司是一家专注于量化投资的对冲基金。我们融合前沿的技术、科学严谨的研究体系与长期的量化投资经验，在全球股票、金融衍生品等市场中寻找长期稳定的量化策略。公司管理规模健康，策略线丰富，近年来取得了优秀的业绩。我们拥有极具创造力与竞争力的投研团队，致力于打造具有长期竞争力的量化交易公司。
    我们始终渴求对数学、科技充满热忱的创造者，为每一位赫富人提供平等互助的学术氛围与追求卓越的上升空间，欢迎每一位对科技世界有远大抱负的成员加入，与赫富一起探索量化世界，共同成长
      </div>
  }
];

type PageContent = {
  options: {label: string, key: string, children: JSX.Element}[];
  title: string;
}

export const PageContent: React.FC<PageContent> = ({ options, title }) => {
  const [selectItem,setSelectItem] = React.useState<string>('');
  const {search} = useHistoryAndLocation()
  const selectKey:string = search.get(UrlParams.AboutMenu)?? '' ;

  React.useEffect(()=>{
    setSelectItem(selectKey? selectKey : options[0].key)
  },[selectKey, options])

  const clickItem = React.useCallback((key: string) => () => {
    setSelectItem(key);
  },[])

  const curItem = React.useMemo(() => options.find(x=>x.key === selectItem),[selectItem, options])

  return (
    <div className='page-content--content'>
      <div className='page-content--content--left'>
        <div className='page-content--content--left__header'>
          <SnippetsOutlined  className='page-content--content--left__header--icon'/>
          <span>
            {title}
          </span>
        </div>
        <div className='page-content--content--left__list'>
          {options.map(x=><div key={x.key} onClick={clickItem(x.key)} className={`page-content--content--left__list--item ${x.key === selectItem ? 'page-content--content--left__list--item--select':''}`}>
            {x.label}
          </div>)}
        </div>
      </div>
      <div className='page-content--content--right'>
        <div className='page-content--content--right--header'>
            <div className='page-content--content--right--header__content'>{curItem?.label}</div>
        </div>
        <div>
            {curItem?.children}
        </div>
      </div>

    </div>
  );
};
