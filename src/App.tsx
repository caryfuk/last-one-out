import { useEffect, useState } from 'react'
import { Controls, Desk, InfoModal } from './components'
import { handleDesk } from './hooks'
import './App.css'

const App = () => {
  const [desk, removeFromDesk] = handleDesk()
  const [humanTurn, setHumanTurn] = useState<boolean>(Math.random() > 0.5)
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  const updateDesk = (count: number) => {
    removeFromDesk(count)
    setHumanTurn(!humanTurn)
  }

  const onModalClose = () => {
    setModalVisible(false)
    handleDesk()
  }

  useEffect(() => {
    if (desk.length <= 0) {
      setModalVisible(true)
    }
  }, [desk])
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!humanTurn && desk.length > 0) {
        updateDesk(Math.floor(Math.random() * 3) + 1)
      }
    }, 1000)
    return () => clearTimeout(timeout)
  }, [humanTurn])

  return (
    <div className="App">
      <h1>Last One Out</h1>
      <Desk desk={desk} />  
      <Controls removeFromDesk={updateDesk} humanTurn={humanTurn} />
      <InfoModal onClose={onModalClose} visible={modalVisible} humanTurn={humanTurn} />
    </div>
  )
}

export default App
