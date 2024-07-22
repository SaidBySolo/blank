import React, { useState } from 'react';
import { AnswerBox, Column, Columns, Content, AnimeWrapper, QuestionBox, Button } from './styles';
import { emojiBlast } from "emoji-blast";

// 문제 데이터 타입 정의
interface QuestionData {
    question: string;
    answers: string[];
    correctAnswer: number; // 정답의 인덱스
    explanation: string;
}

// 문제 데이터 예시
const questions: QuestionData[] = [
    {
        question: "출처가 불분명한 메일과 파일이 오면 어떻게 해야할까요?",
        answers: ["다운로드후에 확인해본다.", "즉시 CERT에 신고한다.", "다른 사람에게 전달한다."],
        correctAnswer: 0,
        explanation: "문제 1에 대한 해설입니다.",
    },
    {
        question: "문제 1",
        answers: ["정답 1", "오답 1", "오답 2"],
        correctAnswer: 0,
        explanation: "문제 1에 대한 해설입니다.",
    },
    {
        question: "문제 1",
        answers: ["정답 1", "오답 1", "오답 2"],
        correctAnswer: 0,
        explanation: "문제 1에 대한 해설입니다.",
    },
    {
        question: "문제 1",
        answers: ["정답 1", "오답 1", "오답 2"],
        correctAnswer: 0,
        explanation: "문제 1에 대한 해설입니다.",
    },
    {
        question: "문제 1",
        answers: ["정답 1", "오답 1", "오답 2"],
        correctAnswer: 0,
        explanation: "문제 1에 대한 해설입니다.",
    }
    // 추가 문제 데이터...
];

interface ExamProps {
    onWrongAnswer: () => void; // 오답 처리 함수 타입 추가
}

const Exam: React.FC<ExamProps> = ({ onWrongAnswer }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showExplanation, setShowExplanation] = useState(false);
    const [isWrongAnswer, setIsWrongAnswer] = useState(false); // 오답 여부 상태


    const handleAnswer = (answerIndex: number) => {
        // 이미 정답을 맞추고 설명을 보고 있는 경우, 추가 동작 방지
        if (showExplanation) return;

        if (questions[currentQuestionIndex].correctAnswer === answerIndex) {
            setShowExplanation(true);
            setIsWrongAnswer(false);
            emojiBlast(
                {
                    position: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
                }
            );
        } else {
            setIsWrongAnswer(true);
            onWrongAnswer(); // 오답일 경우 화면 흔들기 함수 호출
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setShowExplanation(false); // 다음 문제로 넘어갈 때 해설 숨김
        } else {
            // 마지막 문제일 경우 처리
        }
    };

    return (
        <Columns style={{ gap: 155 }}>
            <Column className='is-half'>
                <QuestionBox>
                    <Content>
                        <h1>Q {currentQuestionIndex + 1}.</h1>
                        <p>{questions[currentQuestionIndex].question}</p>
                        {showExplanation && (
                            <div>
                                <h1>✅ 정답입니다!!</h1>
                                <p>{questions[currentQuestionIndex].explanation}</p>
                                <Button onClick={handleNextQuestion}>다음 문제로</Button>
                            </div>
                        )}
                        {isWrongAnswer && (
                            <h1>❌ 오답입니다</h1>
                        )}
                    </Content>
                </QuestionBox>
            </Column>
            <Columns className='is-flex-direction-column'>
                {questions[currentQuestionIndex].answers.map((answer, index) => (
                    <Column key={answer} onClick={() => handleAnswer(index)} role="button" aria-label={`Answer ${index}`}>
                        <AnimeWrapper key={`answer-${currentQuestionIndex}-${index}`}>
                            <AnswerBox>
                                <Content>
                                    <h5>{answer}</h5>
                                </Content>

                            </AnswerBox>
                        </AnimeWrapper>
                    </Column>
                ))}
            </Columns>
        </Columns>
    );
}

export default Exam;
