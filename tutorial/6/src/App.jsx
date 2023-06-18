import { useState, memo,useCallback } from 'react';
import { Child1 } from './components/Child1';
import { Child4 } from './components/Child4';

export const App = memo(() => {
  console.log("App レンダリング")

  const [num, setNum] = useState(0)

  const onClickButton = () => {
    setNum(num + 1)
  }

  // 値はchild2まで渡せるけどnumに依存しているので、userCallbackの意味はあまりないはず
  const onClickReset = useCallback(() => {
    setNum(0)
  }, [num])

  return (
    <>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      <Child1 onClickReset={onClickReset} num={num} />
      <Child4 />
    </>
  )
})


