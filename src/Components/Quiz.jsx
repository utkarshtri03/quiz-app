import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, VStack, Text, Flex, Box } from "@chakra-ui/react";
import { QuizContext } from "../Context/QuizContextProvider";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [score, setScore] = useState(0);
  const [quizData, setQuizData] = useState([
    {
      question: "Who created React.js?",
      options: ["Jordan Mike", "Jordan Walke", "Tim Lee", "Jordan Lee"],
      answer: "Jordan Walke",
    },
    {
      question: "In which language is React.js written?",
      options: ["Python", "Javascript", "Java", "PHP"],
      answer: "Javascript",
    },
    {
      question: "In MVC, what does React.js act as",
      options: ["Model", "Controller", "View", "Middleware"],
      answer: "View",
    },
    {
      question: "Identify the smallest building block of React.Js",
      options: ["Props", "Element", "Component", "None of the Above"],
      answer: "Component",
    },
    {
      question: "What is ReactJS mainly used for building?",
      options: ["Database", "Connectivity", "User Inferface", "Design Platform"],
      answer: "User Interface",
    },
  ]);
  const navigate = useNavigate();
  const { QuizResult, setQuizResult } = useContext(QuizContext)
  useEffect(() => {
    const timer =
      timeRemaining > 0 &&
      setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
    return () => clearInterval(timer);
  }, [timeRemaining]);

  useEffect(() => {
    const timer =
      timeRemaining === 0 &&
      setTimeout(() => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizData.length) {
          setCurrentQuestion(nextQuestion);
          setTimeRemaining(60);
        } else {
          setQuizResult(score)
          setTimeout(() => {
            navigate("/result", { score: score });
          }, 100);

        }
      }, 1000);
    return () => clearTimeout(timer);
  }, [timeRemaining, currentQuestion]);
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
      setTimeRemaining(60);
    } else {
      setQuizResult(score)
      setTimeout(() => {
        navigate("/result", { score: score });
      }, 100);

    }
  };
  setQuizResult(score)
  
  return (
    <VStack fontFamily={'Lora'} pt={'20px'} bg={'#eff1f7'} h={'100vh'}>
      <Flex width={'90%'} color={'white'} justifyContent={'space-between'} fontSize={'12px'} fontWeight={500}>
        <Box borderRadius={'10px'} p={'2px 15px'} bg={'teal'}>0{currentQuestion + 1}/05</Box>
        <Box borderRadius={'10px'} p={'2px 15px'} bg={'#EEC50D'}> {timeRemaining} </Box>
      </Flex>
      <Text p={'5px'} pt={'50px'} fontSize="17px" textAlign="center">
        {quizData[currentQuestion].question}
      </Text>

      <VStack pt={'50px'}>
        {quizData[currentQuestion].options.map((option) => (
          <Box
            key={option}
            onClick={() =>
              handleAnswerOptionClick(option === quizData[currentQuestion].answer)
            }
            p={'15px 90px'}
            boxShadow={'xl'}
            width={'100%'}
          
            borderRadius={'10px'}
            mt={'80px'}
            bg={'#EEC50D'}
            color={'white'}
            textAlign={'center'}
            cursor={'pointer'}
          >
            {option}
          </Box>
        ))}
      </VStack>
    </VStack>
  );
}

export default Quiz;
