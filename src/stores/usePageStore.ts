import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'

import type { Page } from 'data/type'

const usePageStore = create<Page>()(
  devtools(
    immer((set) => ({
      isList: true,
      setIsList: (value) => {
        set((state) => {
          state.isList = value
        })
      },
    }))
  )
)

export default usePageStore
