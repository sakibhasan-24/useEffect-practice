// import { useState } from "react";
// import "./App.css";
// import { useEffect } from "react";

import { useEffect } from "react";
import { useState } from "react";

// function App() {
//   const [bill, setBill] = useState("");

//   const [yourTips, setYourTips] = useState(0);
//   const [yourFriendTips, setYourFriendTips] = useState(0);
//   const tips = (bill * (yourTips + yourFriendTips / 2)) / 100;
//   // const style = {
//   //   padding: "2rem",
//   //   borderRadius: "20px",
//   //   border: "0",
//   //   backgroundColor: "orange",
//   //   cursor: "pointer",
//   // };

//   return (
//     <>
//       <PayBill bill={bill} setBill={setBill} />
//       <br />
//       <Service serviceCharge={yourTips} setServiceCharge={setYourTips}>
//         Your Opinion
//       </Service>
//       <br />

//       <Service
//         serviceCharge={yourFriendTips}
//         setServiceCharge={setYourFriendTips}
//       >
//         your friend's Opinion
//       </Service>
//       <Result bill={bill} tips={tips} />
//       {/* <Button text="add" style={style}></Button>
//       <Button text="remove" style={style}></Button> */}
//       {/* we will do it a better way */}
//       {/* <NewButton style={style}>First Button</NewButton>
//       <NewButton style={style}>second Button</NewButton> c*/}
//     </>
//   );
// }

// export default App;

// function PayBill({ bill, setBill }) {
//   return (
//     <input
//       type="text"
//       name=""
//       value={bill}
//       placeholder="pay the bill...."
//       onChange={(e) => setBill(Number(e.target.value))}
//     />
//   );
// }
// function Service({ children, serviceCharge, setServiceCharge }) {
//   return (
//     <>
//       <label>{children}</label>
//       <select
//         value={serviceCharge}
//         onChange={(e) => setServiceCharge(Number(e.target.value))}
//       >
//         <option value="0">dissatisfied (0%)</option>
//         <option value="5">ok (5%)</option>
//         <option value="10">good (10%)</option>
//         <option value="20">excellent (20%)</option>
//       </select>
//     </>
//   );
// }

// function Result({ bill, tips }) {
//   return (
//     <>
//       <p>
//         you pay total {bill + tips} (${bill} +${tips} Tip)
//       </p>
//     </>
//   );
// }
// function Text() {
//   const [word, setWord] = useState("");
//   const handleSearch = (e) => {
//     e.preventDefault();
//     console.log(word);
//   };
//   return (
//     <form onSubmit={handleSearch} className="form">
//       <input
//         type="text"
//         name=""
//         placeholder="write your word...."
//         id=""
//         value={word}
//         onChange={(e) => setWord(e.target.value)}
//       />
//       <NewButton>Search</NewButton>
//     </form>
//   );
// }
// function Button({ style, text }) {
//   return <button style={style}>{text}</button>;
// }
// function NewButton({ style, children }) {
//   // console.log(children);
//   return <button style={style}>{children}</button>;
// }

export default function App() {
  const [word, setWord] = useState("");
  const [text, setText] = useState("");

  const handleText = (e) => {
    e.preventDefault();
    console.log(text);
    // setText("");
  };
  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0].meanings[0].definitions[0].definition);
        setWord(data[0].meanings[0].definitions[0].definition);
      });
  }, []);
  return (
    <>
      <form onSubmit={handleText}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
        />
      </form>
      <h1>{word}</h1>
    </>
  );
}
