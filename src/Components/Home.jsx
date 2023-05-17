import React from "react";
import { Button, Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate("/quiz");
  };

  return (
    <Flex direction="column" align="center" m={'10px'} justify="center" height="100vh">
      <Box textAlign="center">
        <Heading mb="4" fontSize="3xl">
          Welcome to the Merchify Quiz!
        </Heading>
        {/* <Text fontSize="xl" fontWeight="medium">
          Test your knowledge with our fun quizzes!
        </Text> */}
      </Box>
      <Image w={'250px'} src="https://img.freepik.com/premium-vector/quiz-geometric-badge-with-question-exclamation-mark-message-bubbles-with-microphone-emblem-logo-design-vector-illustration_172533-1899.jpg?w=826" alt="Quiz Illustration" mt="8" />
      <Button
        onClick={startQuiz}
        size="lg"
        mt="8"
        colorScheme="yellow"
        borderRadius="full"
      >
        Start Quiz
      </Button>
    </Flex>
  );
}

export default Home;
