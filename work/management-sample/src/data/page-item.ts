export type PageItem = {
    page: number
    totalPage?: number
    totalCount: number
    perPage: number
}

export const isFirstActive = (pageItem: PageItem): boolean => pageItem.page !== 1
export const isLastActive = (pageItem: PageItem): boolean => pageItem.page !== pageItem.totalCount
