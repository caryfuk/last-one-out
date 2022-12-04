
import { useState } from 'react'

export const useHandleDesk = (): [ string[], (toBeRemoved?: number) => void ] => {
  const randomDesk = ['🍎', '🍊', '🍇', '🍌', '🍉', '🍓', '🍒', '🍑', '🥝', '🍍', '🥥', '🥑', '🍆', '🥔', '🥕', '🌽', '🥦', '🥒', '🥬', '🥜'].sort(() => Math.random() - 0.5)
  const [desk, updateDesk] = useState(randomDesk)
  return [
    desk,
    (toBeRemoved?: number) => {
      if (toBeRemoved) {
        updateDesk(desk.slice(0, -toBeRemoved))
      } else {
        updateDesk(randomDesk)
      }
    }
  ]
}
