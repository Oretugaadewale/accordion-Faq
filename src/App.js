import React, {useState} from 'react'
import SingleQuestions from './Questions';
import {questions} from "./data";
// import './index.css'

function App() {
  const [allQuestions, setAllQuestions] = useState(questions);
  return (
   <main>
    <div className='container'>
      <h4>questions about login</h4>
      <section className='info'>
     {allQuestions.map((question) => {
  //the spread operator is to bring out everything in data because we are mapping everything out and we are returning question component
      return(
   <SingleQuestions key={question.id} {...question}></ SingleQuestions>
      );
     })}
    </section>
    </div>
    </main>
   );
}

export default App;
