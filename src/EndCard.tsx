import { useEffect } from 'react';
import { Content } from "./styles";
import { emojiBlast } from "emoji-blast";

const EndCard = () => {
    useEffect(() => {
        const intervalId = setInterval(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;


            emojiBlast({
                emojis: ['🎉', '🎊', '🎈', "💯"],
                position: { x, y },
            });
        }, 1000);


        return () => clearInterval(intervalId);
    }, []);

    return (
        <Content className='is-large is-justify-content-center is-align-items-center'>
            <h1>🎉축하합니다. 모든 문제를 푸셨습니다!!</h1>
            <p>이번 문제 풀이로 보안의식이 한층 높아졌길 바랍니다.</p>
            <div className='blank' />
            <div className='blank' />
            <div className='blank' />
            <p>육군훈련소 정보통신대 상병 류주헌<strong>보안 창작물 공모전 출품작</strong></p>
        </Content>
    );
}

export default EndCard;