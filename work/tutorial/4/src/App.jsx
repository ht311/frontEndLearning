import { ColerdMessage } from "./components/ColoredMessage"
import { useState,useEffect } from "react"

export const App = () => {
  const [num, setNum] = useState(0)
  
  useEffect(()=>{
    alert(num)
  },[num])


  const onClickButton = () => {
    setNum((num) => num + 1)
  }

  return (
    <>
      <h1 style={{ color: "red" }}>hello,react</h1>
      <ColerdMessage color="blue" >やあ</ColerdMessage>
      <ColerdMessage color="pink" >やあ！</ColerdMessage>
      <ColerdMessage color="blue">
        <>
          <span>ここは青だね</span>
          <p>本当？</p>
        </>
      </ColerdMessage>
      <button>なにもしないボタン</button>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  )
}



//import logo from './logo.svg';
//import './App.css';
//
//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}
//
//export default App;
//