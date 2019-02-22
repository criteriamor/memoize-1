const myData = [
  {"question": "value",
   id: 1, 
   "correctAnswer": "answer",
   "incorrectAnswers": [
      "wrong1",
      "wrong2",
      "wrong3",
    ],
   },
   {
    "id": "1",
    "category": "Prototype methods",
    "question": "Which array proptotype methods return a representation of an array, but do not modify it?",
    "answers": ["Accessor methods", "Mutator methods", "Iteration methods"],
    "correct_answer": "Accessor methods",
    "resources": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Accessor_methods"
   },
   {
    "question": "What is a package?",
    "correctAnswer": "One or more modules grouped together that solve a problem.",
    "incorrectAnswers": [
      "An app used in React to create components.",
      "A feature specific to Node.js.",
      "Code that can't be re-used once it has executed."
    ],
    "category": "Concepts",
    "difficulty": "Easy",
    "pointsValue": 100
  },
  
]

module.exports = {
  myData
};