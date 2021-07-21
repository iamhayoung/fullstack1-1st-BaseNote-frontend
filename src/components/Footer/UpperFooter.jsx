import React, { Component } from 'react';
import UpperFooterMenu from './UpperFooterMenu';
import './UpperFooter.scss';

class UpperFooter extends Component {
  render() {
    return (
      <div className="upperFooter">
        {footerMenuContents.map(menu => (
          <UpperFooterMenu key={menu.id} {...menu} />
        ))}
      </div>
    );
  }
}

const footerMenuContents = [
  {
    id: 1,
    category: '고객센터',
    links: [{ id: 1, link_name: '이메일 | basenote@here.com' }],
  },
  {
    id: 2,
    category: '문의',
    links: [
      { id: 1, link_name: '공지사항' },
      { id: 2, link_name: 'FAQ' },
      { id: 3, link_name: '1:1 문의' },
    ],
  },
  {
    id: 3,
    category: '혜택',
    links: [
      { id: 1, link_name: '친구 추천 포인트' },
      { id: 2, link_name: '리뷰 등록 포인트' },
      { id: 3, link_name: '2.5ml 교환 서비스' },
    ],
  },
  {
    id: 4,
    category: 'basenote의 가치관',
    links: [
      { id: 1, link_name: 'Better but different' },
      { id: 2, link_name: 'Find Your Scent' },
      { id: 3, link_name: 'Eco friendly' },
    ],
  },
];

export default UpperFooter;
