import { type } from "os"

// 商品カテゴリ
export type Category = 'shoes' | 'clothes' | 'book'
// 商品状態
export type Condition = 'new' | 'used'

// ユーザー
export type User = {
  id: number
  userName: string
  displayName: string
  email: string
  profileImageUrl: string
  description: string
}

// 商品
export type Product = {
    id: number
    category: Category
    titile: string
    description: string
    imageUrl: string
    blurDataUrl: string
    condition: Condition
    owner: User

}

// API Context
export type ApiContext = {
    apiRootUrl: string
}

