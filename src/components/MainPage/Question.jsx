import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from '@mui/icons-material/Close';

const Question = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);  

  return (
    <section className="question__container">
      <button className="question" onClick={() => setIsActive(!isActive)}>
        {question}
        { !isActive ? <AddIcon style={{ fontSize: "2.2rem" }}/> : <CloseIcon style={{ fontSize: "2.2rem" }} /> }
      </button>
      <div className={ isActive ? "answer active" : "answer" }>
        {answer}
      </div>
    </section>
  );
};

export default Question;
