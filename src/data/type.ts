export interface Item {
  issueNumber: number
  issueTitle: string
  author: string
  date: string
  comments: number
  body: string
  avatar: string
}

export interface Data {
  data: Item
  setData: (value: Item) => void
}
