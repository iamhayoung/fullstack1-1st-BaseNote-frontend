import React, { Component } from 'react';
import './MainReviewTotal.scss';
import MainReview from './MainReview';

class MainReviewTotal extends Component {
  render() {
    return (
      <div className="totalReviewWrapper">
        <MainReview
          reviewTitle="melt 01. 어른의 솜사탕"
          reviewText="달달~한 향이나는게 이거 뭐 솜사탕 향기 못참죠. 이거하나만 있으면
              데이트할떄 완전히 만구땡입니다."
          reviewDate="2021.07.14 신수호"
          src="https://images.unsplash.com/photo-1526505262320-81542978f63b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        />
        <MainReview
          reviewTitle="wind 02. 백색 향"
          reviewText="깔끔하면서 상쾌한 향입니다. 출근길 아침에 뿌리고 나가면
					하루종일 기분이 좋아요. 코드리뷰할때 문제가 더 잘보이는것
					같아요."
          reviewDate="2021.01.21 이장현"
          src="https://images.unsplash.com/photo-1602473395999-7e8b95d173e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80"
        />
        <MainReview
          reviewTitle="path 01. 물기 머금은 장미"
          reviewText="여름이 떠오르는 싱그러운 향이에요, 재구매의사 100%입니다.
					머리가 맑아지고 코딩이 잘됩니다"
          reviewDate="2021.02.11 이소헌"
          src="https://images.unsplash.com/photo-1602078794418-dba87dccba4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=788&q=80"
        />
      </div>
    );
  }
}

export default MainReviewTotal;
