import React, { createContext, useState } from "react";

export const QuizContext = createContext();

function QuizContextProvider({ children }) {
  const [QuizResult, setQuizResult] = useState(0);
  return (
    <QuizContext.Provider value={{ QuizResult, setQuizResult }}>
      {children}
    </QuizContext.Provider>
  );
}

export default QuizContextProvider;
