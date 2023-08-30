import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'

import type { Data } from 'data/type'

const useContentStore = create<Data>()(
  devtools(
    immer((set) => ({
      data: {
        issueNumber: 0,
        issueTitle: '',
        author: '',
        date: '',
        comments: 0,
        body: '',
        avatar: '',
      },
      setData: (value) => {
        set((state) => {
          state.data = value
        })
      },
    }))
  )
)

export default useContentStore
