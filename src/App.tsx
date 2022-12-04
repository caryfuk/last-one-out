import { useEffect, useState } from 'react'
import { Controls, Desk, InfoModal } from './components'
import { useHandleGame } from './hooks'
import './App.css'

const App = () => {
  const game = useHandleGame()
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  useEffect(() => {
    if (game.desk.length <= 0) {
      setModalVisible(true)
    }
  }, [game.desk])

  const onModalClose = () => {
    setModalVisible(false)
    game.resetGame()
  }

  return (
    <div className="App">
      <h1>Last One Out</h1>
      <Desk desk={game.desk} />  
      <Controls removeFromDesk={game.updateDesk} humanTurn={game.humanTurn} />
      <InfoModal onClose={onModalClose} visible={modalVisible} humanTurn={game.humanTurn} />
    </div>
  )
}

export default App
