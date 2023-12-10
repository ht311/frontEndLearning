"use client";
import { Button, FormErrorMessage, Linkcomponent } from '@/components/atoms';
import DushboardCard from '@/components/molecules/dashboard-card';
import NaviItem from '@/components/molecules/navi-item';
import Pager from '@/components/molecules/pager';
import { ProductListRequest, ProductRepository } from '@/repository/product-repository';
import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)
  const countUp = () => {
    setCount(count + 1)
  }

  // const req:ProductListRequest ={
  //   page: 0,
  //   rows: 0
  // }
  // ProductRepository.findAll(req)
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
      <Pager pageItem={{
        page: 1,
        totalPage: 10,
        totalCount: 1,
        perPage: 1
      }} search={function (page: number): Promise<void> {
        throw new Error('Function not implemented.');
      } } />
    </>
  )
}
