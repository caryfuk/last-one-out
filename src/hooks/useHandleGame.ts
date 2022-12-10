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

  const turn = (items: number, step: number) => {
    updateDesk(items === step ? Math.floor(3 * Math.random()) + 1 : items - step)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      const items = desk.length
      if (!humanTurn) {
        if (items >= 17) {
          turn(items, 17)
        }
        else if (items >= 13) {
          turn(items, 13)
        }
        else if (items >= 9) {
          turn(items, 9)
        }
        else if (items >= 5) {
          turn(items, 5)
        } else {
          turn(items, 1)
        }
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