import {  memo, useCallback, useContext } from 'react';
import { Child1 } from './components/Child1';
import { Child4 } from './components/Child4';
import { ClickNumContext } from './components/providers/ClickNumProvider';

export const App = memo(() => {
  
  console.log("App レンダリング")

  const {num, setNum} = useContext(ClickNumContext)

  const onClickButton = () => {
    setNum(num + 1)
  }

  // callBackで依存するjsxが動くときだけ再レンダリング
  const onClickReset = useCallback(() => {
    setNum(0)
  },[])

  return (
    <>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      <Child1 onClickReset={onClickReset} />
      <Child4 />
    </>
  )
})


