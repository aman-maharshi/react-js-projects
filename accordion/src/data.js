const questions = [
    {
        id: 1,
        title: "What is Hoisting?",
        info: "Moving the variables and function declarations to the top of the script."
    },
    {
        id: 2,
        title: "What does a Promise mean?",
        info: "A promise represents an unknown value now that may become available in the future. They are really useful in handling async calls."
    },
    {
        id: 3,
        title: "Define Closures?",
        info: "When we have nested functions, closures are functions that have access to outer functions variables even after the outer functions has returned."
    },
    {
        id: 4,
        title: "What's function Currying?",
        info: "Taking a function and creating more functions out of it is known as function currying. It can be done using bind method or closures."
    },
    {
        id: 5,
        title: "Give an example where debouncing is required.",
        info: "When we have to slow down the occurrence of an event, for example - we want to make the scroll event listener trigger not on every little scroll but say after 500ms, then we can use a debounce function."
    },
    {
        id: 6,
        title: "Differentiate between var and let variable declarations.",
        info: "One of the differences is that 'var' has functional scope where as 'let' has block level scope"
    }
]
export default questions
