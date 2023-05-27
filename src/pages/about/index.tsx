import React from 'react';
import { LayoutMenuName } from '@pages/layout/header-layout';
import { PageContent } from '@pages/components/page-content/page-content';
import './index.less';

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


const About:React.FC = () => {


  return <PageContent title='关于我们' options={options}/>;
};

export default About;