// import { useState,createContext,useContext } from "react";
// import ReactDOM from "react-dom/client";

// const userContext = createContext();

// function Component1(){
//   const [user,setUser] = useState("Shahid Thaha");

//   return(
//     <userContext.Provider value={user}>
//     <h1>{`Hello ${user}!`}</h1>
//     <Component2/>
//     </userContext.Provider>
//   );
// }

// function Component2(){
//   return (
//     <>
//     <h1>Component 2</h1>
//     <Component3 />
//     </>
//   );
// }


// function Component3(){
//   return (
//     <>
//     <h1>Component 3</h1>
//     <Component4 />
//     </>
//   );
// }


// function Component4(){
//   return (
//     <>
//     <h1>Component 4</h1>
//     <Component5 />
//     </>
//   );
// }

// function Component5() {
//   const user = useContext(userContext);

//   return(
//     <>
//     <h1>Component 5</h1>
//     <h2>{`Hello ${user}again!`}</h2>
//     </>
//   );
// }


// export default Component1;



import { useState,useEffect,useRef } from "react";
import ReactDOM from "react-dom/client";


function App(){
  const [inputValue,setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  },[inputValue]);

  return (
    <>
      <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>current value:{inputValue}</h2>
      <h2>previous value:{previousInputValue.current} </h2>
      </>
  );
}

export default App;

