export default [
  {
    id: "q1",
    text: "Which of the following definitions best describes React.js?",
    answers: [
      "A library to build user interfaces with help of declarative code.",
      "A library for managing state in web applications.",
      "A framework to build user interfaces with help of imperative code.",
      "A library used for building mobile applications only.",
    ],
    correctAnswer:
      "A library to build user interfaces with help of declarative code.",
  },
  {
    id: "q2",
    text: "What purpose do React hooks serve?",
    answers: [
      "Enabling the use of state and other React features in functional components.",
      "Creating responsive layouts in React applications.",
      "Handling errors within the application.",
      "Part of the Redux library for managing global state.",
    ],
    correctAnswer:
      "Enabling the use of state and other React features in functional components.",
  },
  {
    id: "q3",
    text: "Can you identify what JSX is?",
    answers: [
      "A JavaScript extension that adds HTML-like syntax to JavaScript.",
      "A JavaScript library for building dynamic user interfaces.",
      "A specific HTML version that was explicitly created for React.",
      "A tool for making HTTP requests in a React application.",
    ],
    correctAnswer:
      "A JavaScript extension that adds HTML-like syntax to JavaScript.",
  },
  {
    id: "q4",
    text: "What is the most common way to create a component in React?",
    answers: [
      "By defining a JavaScript function that returns a renderable value.",
      "By defining a custom HTML tag in JavaScript.",
      "By creating a file with a .jsx extension.",
      'By using the "new" keyword followed by the component name.',
    ],
    correctAnswer:
      "By defining a JavaScript function that returns a renderable value.",
  },
  {
    id: "q5",
    text: 'What does the term "React state" imply?',
    answers: [
      "An object in a component that holds values and may cause the component to render on change.",
      "The lifecycle phase a React component is in.",
      "The overall status of a React application, including all props and components.",
      "A library for managing global state in React applications.",
    ],
    correctAnswer:
      "An object in a component that holds values and may cause the component to render on change.",
  },
  {
    id: "q6",
    text: "How do you typically render list content in React apps?",
    answers: [
      "By using the map() method to iterate over an array of data and returning JSX.",
      "By using the for() loop to iterate over an array of data and returning JSX.",
      "By using the forEach() method to iterate over an array of data and returning JSX.",
      "By using the loop() method to iterate over an array of data and returning JSX.",
    ],
    correctAnswer:
      "By using the map() method to iterate over an array of data and returning JSX.",
  },
  {
    id: "q7",
    text: "Which approach can NOT be used to render content conditionally?",
    answers: [
      "Using a the #if template syntax.",
      "Using a ternary operator.",
      "Using the && operator.",
      "Using an if-else statement.",
    ],
    correctAnswer: "Using a the #if template syntax.",
  },
  {
    id: "q8",
    text: "Which hook is used to trigger a side effect in functional components?",
    answers: ["useEffect", "useState", "useContext", "useReducer"],
    correctAnswer: "useEffect",
  },
  {
    id: "q9",
    text: "What happens when you update the state using setState() in React?",
    answers: [
      "The component is re-rendered with the new state.",
      "The entire page is reloaded.",
      "Only the updated DOM elements are rerendered.",
      "Nothing happens until the user triggers an event.",
    ],
    correctAnswer: "The component is re-rendered with the new state.",
  },
  {
    id: "q10",
    text: "Which hook would you use to cache a function reference to prevent unnecessary re-renders?",
    answers: ["useCallback", "useMemo", "useState", "useEffect"],
    correctAnswer: "useCallback",
  },
  {
    id: "q11",
    text: "How do you pass data from a parent component to a child component?",
    answers: [
      "By passing props to the child component.",
      "By using the state of the parent component.",
      "By defining a method inside the child component.",
      "By using the context API directly.",
    ],
    correctAnswer: "By passing props to the child component.",
  },
  {
    id: "q12",
    text: "What is the purpose of React’s useMemo hook?",
    answers: [
      "It memoizes a computed value to avoid recalculating it on every render.",
      "It caches a function reference to avoid creating new instances.",
      "It provides a way to manage state in class components.",
      "It ensures side effects are run only once.",
    ],
    correctAnswer:
      "It memoizes a computed value to avoid recalculating it on every render.",
  },
  {
    id: "q13",
    text: "Which statement is correct about React keys in lists?",
    answers: [
      "Keys help React identify which items have changed, are added, or are removed.",
      "Keys are required to uniquely identify the component type.",
      "Keys must be globally unique across the entire application.",
      "Keys are used to manage the local state of list items.",
    ],
    correctAnswer:
      "Keys help React identify which items have changed, are added, or are removed.",
  },
  {
    id: "q14",
    text: "Which lifecycle method is triggered right before a component is removed from the DOM?",
    answers: [
      "componentWillUnmount",
      "componentDidUpdate",
      "componentDidMount",
      "shouldComponentUpdate",
    ],
    correctAnswer: "componentWillUnmount",
  },
  {
    id: "q15",
    text: "How do you optimize a React app for performance?",
    answers: [
      "Use memoization, like React.memo or useMemo, to avoid unnecessary re-renders.",
      "Use only class components instead of functional components.",
      "Avoid breaking the app into smaller components.",
      "Use CSS-in-JS libraries like styled-components.",
    ],
    correctAnswer:
      "Use memoization, like React.memo or useMemo, to avoid unnecessary re-renders.",
  },
  {
    id: "q16",
    text: "What is the purpose of the useReducer hook?",
    answers: [
      "It provides an alternative to useState when dealing with complex state logic.",
      "It allows components to re-render without updating the state.",
      "It triggers side effects based on action dispatches.",
      "It helps components manage asynchronous data fetching.",
    ],
    correctAnswer:
      "It provides an alternative to useState when dealing with complex state logic.",
  },
];
