import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Container from './components/ContainerSample'
import ContextSample from './components/ContextSample'
import Counter from './components/Counter'
import {Parent} from './components/ParentUseCallBack';
import { UseMemoSample } from './components/UseMemoSample';
import Clock from './components/Clock';

ReactDOM.render(
  <React.StrictMode>
    <Hello />
    <Message />
    <Container />
    <ContextSample />
    <Counter initialValue={3} />
    <Parent />
    <UseMemoSample />
    <Clock />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
