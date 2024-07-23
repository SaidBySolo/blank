import React, { useState } from 'react';
import { AnswerBox, Column, Columns, Content, AnimeWrapper, QuestionBox, Button } from './styles';
import { emojiBlast } from "emoji-blast";
import EndCard from './EndCard';


interface QuestionData {
    question: string;
    answers: string[];
    correctAnswer: number;
    explanation: string;
    wrongExplanations: string[];
}

const questions: QuestionData[] = [
    {
        question: "출처가 불분명한 메일과 파일이 오면 어떻게 해야할까요?",
        answers: ["다운로드후에 확인해본다.", "즉시 CERT에 신고한다.", "다른 사람에게 전달한다."],
        correctAnswer: 1,
        explanation: "출처가 불분명한 메일과 파일은 악성코드에 감염될 위험이 있으므로 CERT에 신고해야합니다.",
        wrongExplanations: [
            "다운로드하면 악성코드에 감염될 위험이 있습니다.",
            "",
            "다른 사람에게 전달하면 문제가 확산될 수 있습니다."
        ],
    },
    {
        question: "사이버 보안진단의 날 행사를 진행하려고 합니다. 어떤 것이 가장 적합하지 않은 방법일까요?",
        answers: ["필수 보안SW 설치 확인", "이전에 사용하던 비밀번호 재사용", "바탕화면 변경"],
        correctAnswer: 1,
        explanation: "이전에 사용하던 비밀번호 재사용은 보안을 약화시키는 방법입니다.",
        wrongExplanations: [
            "사이버 보안진단의 날 행사에서 전산보안진단체계를 이용해 필수 보안SW 설치 확인을 하는 것은 좋은 방법입니다.",
            "",
            "사이버 보안진단의 날 행사에서 전산보안진단체계를 이용해 바탕화면을 변경해야합니다."
        ],
    },
    {
        question: "국방망PC를 이용해 비밀작업을 할려고 합니다. 어떤 조치가 가장 적절한 방법일까요?",
        answers: ["국방망을 연결한후 작업을 시작한다.", "인터넷망 PC를 이용한다.", "국방망을 차단한 후 문서 프로그램의 자동저장 설정 해제 후 USB를 연결한다."],
        correctAnswer: 2,
        explanation: "국방망PC를 이용해 비밀작업을 할 경우 국방망을 차단한 후 자동저장 설정을 해제하고 USB를 연결해야합니다.",
        wrongExplanations: [
            "국방망을 연결한 후 작업을 시작하면 보안이 취약해집니다.",
            "인터넷망 PC를 이용하면 보안이 취약해집니다.",
            ""
        ],


    },
    {
        question: "국방망 PC에 회선을 연결할려고 합니다. 다음중 연결해야하는 회선색상은 무엇일까요?",
        answers: ["회색", "노란색", "초록색"],
        correctAnswer: 0,
        explanation: "국방망 PC에 연결할 때는 회색 회선을 사용해야합니다.",
        wrongExplanations: [
            "",
            "노란색 회선은 인터넷망 회선입니다.",
            "초록색 회선은 단독망 회선입니다.",
        ],
    },
    {
        question: "다음 중 부대 반입시 보안 담당관에게 승인이 필요한 품목은 무엇일까요?",
        answers: ["유선 마우스", "전자 온도계", "태블릿"],
        correctAnswer: 2,
        explanation: "부대 반입시 보안 담당관에게 승인이 필요한 품목은 태블릿입니다.",
        wrongExplanations: [
            "유선 마우스는 승인이 필요없는 품목입니다.",
            "전자 온도계는 승인이 필요없는 품목입니다.",
            "",
        ]
    },
    {
        question: "비밀번호를 설정할려고 합니다. 다음 중 가장 적절한 비밀번호는 무엇일까요?",
        answers: ["숫자로만 이루어진 비밀번호", "숫자, 문자, 특수문자를 조합한 비밀번호", "자신의 생일을 포함한 비밀번호"],
        correctAnswer: 1,
        explanation: "비밀번호는 숫자, 문자, 특수문자를 9자리 이상 조합한 비밀번호가 가장 안전합니다.",
        wrongExplanations: [
            "숫자로만 이루어진 비밀번호는 취약합니다.",
            "",
            "자신의 생일을 포함한 비밀번호는 취약합니다."
        ]
    },
    {
        question: "무선 키보드를 사용할려고 합니다. 다음 중 가장 적절한 보안 조치는 무엇일까요?",
        answers: ["무선구간 암호화 기능이 있는 무선 키보드 사용", "일반 무선 키보드 사용", "보안담당관의 승인 없이 사용"],
        correctAnswer: 0,
        explanation: "무선구간 암호화 기능이 있는 무선 키보드를 사용해야하며, 보안담당관의 승인을 받아 일반 평문을 취급하는 PC에 한하여 사용해야합니다.",
        wrongExplanations: [
            "",
            "일반 무선 키보드는 취약합니다.",
            "보안담당관의 승인 없이 사용해서는 안됩니다."
        ]
    },
    {
        question: "부대내의 PC 및 노트북에 연결해서는 안되는것은 무엇일까요?",
        answers: ["스마트폰", "모니터", "스피커"],
        correctAnswer: 0,
        explanation: "스마트폰을 연결할 경우 부대내의 PC 및 노트북에 악성코드가 전파될 위험이 있으며, 군사기밀 유출의 위험이 있습니다.",
        wrongExplanations: [
            "",
            "모니터는 연결해도 문제가 없습니다.",
            "스피커는 연결해도 문제가 없습니다."
        ],
    },
    {
        question: "SNS 및 단체 대화방에 게시 또는 공유하면 안되는것은?",
        answers: ["애완동물 사진", "유튜브 링크", "군사 관련 자료"],
        correctAnswer: 2,
        explanation: "비밀, 일반 군사자료를 SNS 및 단체 대화방에 게시 또는 공유하면 안됩니다. 비밀 군사자료일경우 중징계, 일반 군사자료일 경우 경징계 처분을 받을 수 있습니다.",
        wrongExplanations: [
            "애완동물 사진은 게시해도 문제가 없습니다.",
            "유튜브 링크는 게시해도 문제가 없습니다.",
            "",
        ],


    },
    {
        question: "영내에 군사제한구역을 진입할때 해야하는 조치는 무엇일까요?",
        answers: ["보안앱 1차 차단", "보안앱 2차 차단", "보안앱 미차단",],
        correctAnswer: 1,
        explanation: "영내에 군사제한구역을 진입할때는 보안앱 2차 차단을 해야하며, 차단이 제한될경우 휴대폰 보관함에 보관해야합니다.",
        wrongExplanations: [
            "보안앱 1차 차단은 영내에 진입할때 해야하는 조치입니다.",
            "",
            "영내에서는 보안앱 1차 차단, 군사제한구역에서는 보안앱 2차 차단을 해야합니다."
        ],
    }
];

interface ExamProps {
    onWrongAnswer: () => void;
}

const Exam: React.FC<ExamProps> = ({ onWrongAnswer }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // 현재 문제 인덱스 상태
    const [showExplanation, setShowExplanation] = useState(false); // 해설 보기 여부 상태
    const [isWrongAnswer, setIsWrongAnswer] = useState(false); // 오답 여부 상태
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null); // 선택된 답변 인덱스
    const [isCompleted, setIsCompleted] = useState(false); // 모든 문제를 풀었는지 여부


    const handleAnswer = (answerIndex: number) => {
        setSelectedAnswerIndex(answerIndex);
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
            setIsCompleted(true);
        }
    };

    return (
        <Columns style={{ gap: 155 }}>
            {!isCompleted ? (
                <>
                    <Column className='is-half'>
                        <QuestionBox>
                            <Content>
                                <h1>Q {currentQuestionIndex + 1}.</h1>
                                <p>{questions[currentQuestionIndex].question}</p>
                                {showExplanation && (
                                    <>
                                        <h1>✅ 정답입니다!!</h1>
                                        <p>{questions[currentQuestionIndex].explanation}</p>
                                        <Button onClick={handleNextQuestion}>다음 문제로</Button>
                                    </>

                                )}
                                {isWrongAnswer && selectedAnswerIndex !== null && (
                                    <>
                                        <h1>❌ 오답입니다</h1>
                                        <p>{questions[currentQuestionIndex].wrongExplanations[selectedAnswerIndex]}</p>
                                    </>
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
                </>
            ) : (
                <EndCard />
            )}
        </Columns>
    );
}

export default Exam;
