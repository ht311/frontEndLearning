"use client";
import { Button, FormErrorMessage, Linkcomponent } from '@/components/atoms';
import DushboardCard from '@/components/molecules/dashboard-card';
import NaviItem from '@/components/molecules/navi-item';
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
      <DushboardCard
        count={1}
        label={"label1111"}
      >
        <div>divタグです</div>
      </DushboardCard>
      <DushboardCard count={2} label={"githubに飛ぶカードだ"}>
        <Linkcomponent href='https://github.com/'>
          ここを押してくれ！
        </Linkcomponent>
      </DushboardCard>
    </>
  )
}
