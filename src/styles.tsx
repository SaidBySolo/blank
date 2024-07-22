import styled, { keyframes } from "styled-components"

interface AppContainerProps {
  animate: boolean;
}

const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  10% { transform: translateX(-10px); }
  20% { transform: translateX(10px); }
  30% { transform: translateX(-10px); }
  40% { transform: translateX(10px); }
  50% { transform: translateX(0); }
`;

const Hero = styled.section.attrs({ className: 'hero' }) <AppContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${(props) => props.animate ? shakeAnimation : ''} 0.5s ease-out;
`

const Body = styled.div.attrs({ className: 'hero-body' })`
`

const Footer = styled.footer.attrs({ className: 'hero-foot' })`
  align-self: flex-start;
`

const Columns = styled.div.attrs({ className: 'columns' })`
  display: flex;
  justify-content: center;
  align-items: center;

`

const Column = styled.div.attrs({ className: 'column' })`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Box = styled.div.attrs({ className: 'box' })`

`

const Content = styled.div.attrs({ className: 'content' })`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const QuestionBox = styled(Box)`
  width: 400px;
  height: 500px;
`

const Notification = styled.div.attrs({ className: 'notification' })`

`

const anime = keyframes`
    from {
        transform: translateX(100%); // 오른쪽에서 시작
        opacity: 0;
    }
    to {
        transform: translateX(0); // 왼쪽으로 이동하여 원래 위치
        opacity: 1;
    }
`


const AnswerBox = styled(Box).attrs({ className: 'is-clickable' })`
  align-items: center;
  align-content:  center;
  width: 500px;
  height: 200px;
  transition-duration: var(--bulma-duration);


  &:hover {
    transform: translateY(-1em);
  }

`

const AnimeWrapper = styled.div`
  animation: ${anime} 0.5s ease-out forwards;

`

const Button = styled.button.attrs({ className: 'button' })`
`



export {
  Hero,
  Body,
  Footer,
  Columns,
  Column,
  Box,
  Content,
  QuestionBox,
  AnswerBox,
  Button,
  Notification,
  AnimeWrapper
}