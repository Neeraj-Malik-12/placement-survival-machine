let questionText = document.querySelector('#question-text');
let answerText = document.querySelector('#answer-text');
const category = document.querySelector('#category');
const number = document.querySelector('#number');
let countNum = document.querySelector('#practiced-count');

let numberValue = 0;
let i = 0;
let j = 0;
let count = 0;
let categoryValue = "";
let questionArray = [];

//buttons
let showQuestion = document.querySelector('#show-question');
let showAnswer = document.querySelector('#show-answer');
let nextQuestion = document.querySelector('#next-question');
let markedButton = document.querySelector('#mark-practiced');
let showButtons = document.querySelectorAll('.afterButtons')

//category of question
category.addEventListener('change', () =>{
    categoryValue = category.value;
    questionArray = questions[categoryValue];

    if(categoryValue != ""){
        questionText.innerText = "Your interview question will appear here.";
        answerText.style.display = 'none';
        showQuestion.style.display = 'inline-block'

        showButtons.forEach((val) => {
            val.style.display = 'none';
        })

        markedButton.disabled = false;
        markedButton.style.background = 'linear-gradient(135deg, #10b981, #22c55e)';
        markedButton.style.color = 'white';
        j = 0;
    }
})

//number of question
number.addEventListener('change', () =>{
    if(categoryValue == ""){
        alert("Choose a valid category first.")
        number.value = "";
        return;
    }

    numberValue = number.value;
    j = 0;

    questionText.innerText = "Your interview question will appear here.";
    answerText.style.display = 'none';
    showQuestion.style.display = 'inline-block'

    showButtons.forEach((val) => {
            val.style.display = 'none';
    })

    markedButton.disabled = false;
    markedButton.style.background = 'linear-gradient(135deg, #10b981, #22c55e)';
    markedButton.style.color = 'white';
})


//BUTTONS FUNCTIONALITY

//Show Question
showQuestion.addEventListener('click', () => {
    if(!(categoryValue && numberValue)){
        alert("Please select the options.")
    }

    else{
        showQuestion.style.display = 'none';
        showButtons.forEach((btn) => {
            btn.style.display = 'inline-block';
        })
        j = 0;
        questionText.innerText = questionArray[j].question;
        }
    }
)

//Next Question
nextQuestion.addEventListener("click", () => {
    if(j<numberValue-1){
        j++;
        questionText.innerText = questionArray[j+1].question;
        answerText.innerText = "";
        answerText.style.display = 'none';
        markedButton.disabled = false;
        markedButton.style.background = 'linear-gradient(135deg, #10b981, #22c55e)';
        markedButton.style.color = 'white';
    }
    else{
        alert("No more questions left !")
    }
});


//Show Answer
showAnswer.addEventListener('click' , () => {
    answerText.style.display = 'inline-block';
    answerText.innerText = questionArray[j].answer;
});

//Marked Button
markedButton.addEventListener('click', () => {
    count++;
    countNum.innerText = count;
    markedButton.disabled = true;
    markedButton.style.color = 'grey';
    markedButton.style.background = 'linear-gradient(135deg, #1f4236, #223128)';
});


//question Object
const questions = {
    hr: [
        {
            question: "Tell me about yourself.",
            answer: "Give a short introduction covering your education, skills, projects, and career goal."
        },
        {
            question: "Why should we hire you?",
            answer: "Talk about your relevant skills, willingness to learn, and how you can contribute to the company."
        },
        {
            question: "What are your strengths?",
            answer: "Mention 2–3 strengths like problem-solving, consistency, adaptability, or teamwork with brief examples."
        },
        {
            question: "What is your biggest weakness?",
            answer: "Choose a real but manageable weakness and explain how you are improving it."
        },
        {
            question: "Where do you see yourself in 5 years?",
            answer: "Say you want to grow technically, take responsibility, and contribute meaningfully to the organization."
        },
        {
            question: "Why do you want to join our company?",
            answer: "Mention the company’s reputation, learning opportunities, work culture, and alignment with your career goals."
        }
    ],

    javascript: [
        {
            question: "What is the difference between var, let, and const?",
            answer: "var is function-scoped, while let and const are block-scoped. const cannot be reassigned."
        },
        {
            question: "What is hoisting in JavaScript?",
            answer: "Hoisting is JavaScript's behavior of moving declarations to the top of their scope before execution."
        },
        {
            question: "What is the difference between == and === ?",
            answer: "== checks value only after type conversion, while === checks both value and type strictly."
        },
        {
            question: "What is a closure?",
            answer: "A closure is a function that remembers variables from its outer scope even after that outer function has finished."
        },
        {
            question: "What is the DOM?",
            answer: "The DOM (Document Object Model) is a tree-like representation of an HTML document that JavaScript can manipulate."
        },
        {
            question: "What is the difference between null and undefined?",
            answer: "undefined means a variable has been declared but not assigned, while null is an intentional empty value."
        }
    ],

    dsa: [
        {
            question: "What is the difference between stack and queue?",
            answer: "Stack follows LIFO (Last In First Out), while queue follows FIFO (First In First Out)."
        },
        {
            question: "What is binary search?",
            answer: "Binary search is a searching algorithm for sorted arrays with O(log n) time complexity."
        },
        {
            question: "What is the time complexity of linear search?",
            answer: "The time complexity of linear search is O(n)."
        },
        {
            question: "What is recursion?",
            answer: "Recursion is a technique where a function calls itself to solve smaller subproblems."
        },
        {
            question: "What is the difference between array and linked list?",
            answer: "Arrays use contiguous memory and allow fast indexing, while linked lists use nodes connected by pointers and allow easier insertion/deletion."
        },
        {
            question: "What is a hash table?",
            answer: "A hash table stores key-value pairs and provides fast average-time lookup, insertion, and deletion."
        }
    ],

    oop: [
        {
            question: "What is OOP?",
            answer: "OOP (Object-Oriented Programming) is a programming paradigm based on objects, classes, and concepts like inheritance and polymorphism."
        },
        {
            question: "What is inheritance?",
            answer: "Inheritance allows one class to acquire the properties and methods of another class."
        },
        {
            question: "What is polymorphism?",
            answer: "Polymorphism allows the same method or function to behave differently based on the object or context."
        },
        {
            question: "What is encapsulation?",
            answer: "Encapsulation means wrapping data and methods together in a class and controlling access to them."
        },
        {
            question: "What is abstraction?",
            answer: "Abstraction means hiding unnecessary implementation details and showing only essential features."
        },
        {
            question: "What is the difference between class and object?",
            answer: "A class is a blueprint, while an object is an instance of that class."
        }
    ],

    dbms: [
        {
            question: "What is DBMS?",
            answer: "DBMS stands for Database Management System. It is software used to store, manage, and retrieve data."
        },
        {
            question: "What is the difference between DBMS and RDBMS?",
            answer: "DBMS stores data generally, while RDBMS stores data in related tables and supports relationships."
        },
        {
            question: "What is a primary key?",
            answer: "A primary key is a column that uniquely identifies each row in a table."
        },
        {
            question: "What is a foreign key?",
            answer: "A foreign key is a column that creates a relationship between two tables."
        },
        {
            question: "What is normalization?",
            answer: "Normalization is the process of organizing data to reduce redundancy and improve consistency."
        },
        {
            question: "What is SQL?",
            answer: "SQL (Structured Query Language) is used to interact with relational databases."
        }
    ],

    os: [
        {
            question: "What is an operating system?",
            answer: "An operating system is system software that manages hardware, software, memory, and processes."
        },
        {
            question: "What is a process?",
            answer: "A process is a program that is currently being executed."
        },
        {
            question: "What is a thread?",
            answer: "A thread is the smallest unit of execution within a process."
        },
        {
            question: "What is deadlock?",
            answer: "Deadlock is a situation where two or more processes are waiting indefinitely for resources held by each other."
        },
        {
            question: "What is CPU scheduling?",
            answer: "CPU scheduling is the process of selecting which process gets CPU time next."
        },
        {
            question: "What is paging?",
            answer: "Paging is a memory management technique that divides memory into fixed-size blocks."
        }
    ]
};