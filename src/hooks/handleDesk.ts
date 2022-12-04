
import { useState } from 'react'

export const handleDesk = (): [ string[], (toBeRemoved: number) => void ] => {
  const [desk, updateDesk] = useState(['🍎', '🍊', '🍇', '🍌', '🍉', '🍓', '🍒', '🍑', '🥝', '🍍', '🥥', '🥑', '🍆', '🥔', '🥕', '🌽', '🥦', '🥒', '🥬', '🥜'].sort(() => Math.random() - 0.5))
  return [
    desk,
    (toBeRemoved: number) => {
      updateDesk(desk.slice(0, -toBeRemoved))
    }
  ]
}
