export interface Item {
  issueNumber: number
  issueTitle: string
  author: string
  date: string
  comments: number
  body: string
  avatar: string
}

export interface Content {
  data: Item
  setData: (value: Item) => void
}

export interface Page {
  isList: boolean
  setIsList: (value: boolean) => void
}
