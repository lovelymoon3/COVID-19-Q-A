import React, { useState } from 'react';
import data from './data';
import Question from './Question';

function App() {
  const[questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h2>COVID-19 health Q&A</h2>
          <section className="info">
          {
            questions.map((q) => {
              return <Question key={q.id} {...q} />
            })
          }
          </section>
      </div>
    </main>
  );
}

export default App;
