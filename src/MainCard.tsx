import { Button, Content } from "./styles";


interface MainCardProps {
    handleButtonClick: () => void;
}

const MainCard = ({ handleButtonClick }: MainCardProps) => {
    return (
        <>
            <Content className="is-large is-justify-content-center is-align-items-center">

                <h1>🔒나는 보안에 대해 얼마나 알고있을까?</h1>
                <p>
                    문제는 총 10문제로 구성되어있습니다.
                </p>
                

                <Button onClick={handleButtonClick}>시작하기</Button>
            </Content>

        </>
    )
}

export default MainCard;