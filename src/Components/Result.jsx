import React from "react";
import { Button, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../Context/QuizContextProvider";
import { useContext } from "react";


function Result() {

  const navigate = useNavigate();
  const { QuizResult } = useContext(QuizContext)

  const startNewQuiz = () => {
    navigate("/");
  };

  return (
    <VStack pt={'20px'} fontFamily={'Lora'} spacing={6} alignItems="center">
      {QuizResult !== 0 ? <>    <img src="https://img.freepik.com/premium-vector/successful-businessman-smiling-pointing-award-goblet-cup-hand-isolated-white-background_341509-5098.jpg?w=740" alt="Trophy" width={120} height={120} />
        <Heading as="h1" size="xl" fontFamily={'Lora'}>
          Congratulations!
        </Heading> </> : <Heading textAlign={'center'} as="h1" size="xl" fontFamily={'Lora'}>
        Sorry to to say please try again
      </Heading>}
      <Text fontSize="lg">
        You scored <strong>{QuizResult}</strong>/5.
      </Text>
      {QuizResult >= 3 && (
        <Image
          src="https://lordicon.com/icons/wired/flat/1103-confetti.gif"
          alt="Confetti"
          width={100}
          height={100}
          css={{ animation: "confetti 1s ease-in-out infinite" }}
        />
      )}
      <Button colorScheme="yellow" onClick={startNewQuiz}>
        Restart
      </Button>
    </VStack>
  );
}

export default Result;
