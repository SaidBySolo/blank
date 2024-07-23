import { useState } from 'react';

import { Body, Content, Footer, Hero } from './styles';
import MainCard from './MainCard';
import Exam from './Exam';



const App = () => {
  const [showMainCard, setShowMainCard] = useState(true);
  const [animate, setAnimate] = useState(false); // 애니메이션 상태 추가

  // 버튼 클릭 이벤트 핸들러
  const handleButtonClick = () => {
    setShowMainCard(!showMainCard); // 상태를 반전시켜 페이지 전환
  };

  // 오답 상태를 처리하는 함수
  const handleWrongAnswer = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 500); // 애니메이션 후 상태 초기화
  };
  return (

    <Hero animate={animate} className='is-fullheight'>
      <Body>
        {showMainCard ? (
          <MainCard handleButtonClick={handleButtonClick} />
        ) : (
          <Exam onWrongAnswer={handleWrongAnswer} />
        )}
      </Body>
      <Footer>
        <Content>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;이 페이지는 Chrome, Micorosft Edge에 최적화 되어있습니다.</p>
        </Content>
        <div className='blank' />
      </Footer>

    </Hero>
  )
}

export default App
