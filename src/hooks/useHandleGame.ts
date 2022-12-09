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

  const turns1 = [0, 1, 1, 2, 3, 3]
  const turns2 = [1, 1, 2, 3, 3]

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!humanTurn && desk.length > 0) {
        updateDesk(desk.length > 4 ? turns2[desk.length % 5] : turns1[desk.length])
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