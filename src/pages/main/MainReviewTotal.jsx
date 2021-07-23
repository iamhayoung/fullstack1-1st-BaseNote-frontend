import React, { Component } from 'react';
import './MainReviewTotal.scss';
import MainReview from './MainReview';

class MainReviewTotal extends Component {
  render() {
    return (
      <div className="totalReviewWrapper">
        <MainReview
          reviewTitle="wind 01. 작은 소년"
          reviewText="달달~한 향이나는게 이거 뭐 솜사탕 향기 못참죠. 이거하나만 있으면
              데이트할떄 완전히 만구땡입니다."
          reviewDate="2021.07.14 신수호"
          src="https://images.unsplash.com/photo-1526505262320-81542978f63b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          volume="40ml"
          id="1"
        />
        <MainReview
          reviewTitle="melt 01. 생각의 창의성"
          reviewText="깔끔하면서 상쾌한 향입니다. 출근길 아침에 뿌리고 나가면
					하루종일 기분이 좋아요. 코드리뷰할때 문제가 더 잘보이는것
					같아요."
          reviewDate="2021.01.21 이장현"
          src="https://images.unsplash.com/photo-1489419714522-eb568919d2ed?ixid=MnwxMjA3fDB8MHxwaG90[…]GVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          volume="40ml"
          id="4"
        />
        <MainReview
          reviewTitle="path 01. 바닷가 데이트"
          reviewText="여름이 떠오르는 싱그러운 향이에요, 재구매의사 100%입니다.
					머리가 맑아지고 코딩이 잘됩니다"
          reviewDate="2021.02.11 이소헌"
          src="https://images.unsplash.com/photo-1522098605161-cc0c1434c31a?ixid=MnwxMjA3fDB8MHxwaG90[…]GVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80"
          volume="40ml"
          id="7"
        />
      </div>
    );
  }
}

export default MainReviewTotal;
