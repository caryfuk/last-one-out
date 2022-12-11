import { useEffect, useState } from 'react'
import { useHandleDesk } from './useHandleDesk'

export const useHandleGame = () => {
  const [desk, removeFromDesk] = useHandleDesk()
  const [humanTurn, setHumanTurn] = useState<boolean>(Math.random() > 0.5)

  const updateDesk = (count: number) => {
    removeFromDesk(count)
    setHumanTurn(!humanTurn)
  }

  const resetGame = () => {
    removeFromDesk()
    setHumanTurn(Math.random() > 0.5)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!humanTurn) {
        const toBeRemoved = (desk.length - 1) % 4
        updateDesk(toBeRemoved === 0 ? Math.floor(3 * Math.random()) + 1 : toBeRemoved)
      }
    }, 1000)
    return () => clearTimeout(timeout)
  }, [humanTurn, desk])

  return {
    humanTurn,
    desk,
    updateDesk,
    resetGame,
  }
}