// import List from "./components/List"


// function App() {
//   return(
//     <List/>
//   )
// }

// export default App



// import React, { useState, useCallback } from "react";

// // Parent Component
// function Parent() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   // Memoized function
//   const incrementCount = useCallback(() => {
//     setCount((prevCount) => prevCount + 1);
//   }, []); 

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Type something..."
//       />
//       <Child onIncrement={incrementCount} />
//     </div>
//   );
// }

// // Child Component
// const Child = React.memo(({ onIncrement }) => {
//   console.log("Child rendered");
//   return <button onClick={onIncrement}>Increment</button>;
// });

// export default Parent;

import React, { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Expensive calculation, memoized using useMemo
  const expensiveCalculation = useMemo(() => {
    console.log("Expensive calculation running...");
    return count * 3;
  }, [count]); 

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Expensive Result: {expensiveCalculation}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
}

export default App;
