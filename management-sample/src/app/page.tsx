"use client";
import { Button,FormErrorMessage,Linkcomponent } from '@/components/atoms';
import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)
  const countUp = () => {
    setCount(count + 1)
  }


  return (
    <>
      <Button
        color={"denger"}
        fullWidth={false}
        onclick={countUp}
      >
        カウントアップ！ 今のカウント：{count}
      </Button>
      <FormErrorMessage >
        エラーだぜ
      </FormErrorMessage>
      <Linkcomponent >
        azsssssssaeffda
      </Linkcomponent>
    </>
  )
}
