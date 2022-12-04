import { useEffect, useState } from 'react'
import { Controls, Desk, InfoModal } from './components'
import './App.css'

const App = () => {
  // Fill the desk with random items
  const prepareDesk = () => ['🍎', '🍊', '🍇', '🍌', '🍉', '🍓', '🍒', '🍑', '🥝', '🍍', '🥥', '🥑', '🍆', '🥔', '🥕', '🌽', '🥦', '🥒', '🥬', '🥜'].sort(() => Math.random() - 0.5)
  const [remaining, setRemaining] = useState<Array<string>>(prepareDesk())
  const [humanTurn, setHumanTurn] = useState<boolean>(Math.random() > 0.5)
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  const updateRemaining = (remaining: Array<string>) => {
    setRemaining(remaining)
    setHumanTurn(!humanTurn)
  }

  const onModalClose = () => {
    setModalVisible(false)
    setRemaining(prepareDesk())
  }

  useEffect(() => {
    if (remaining.length <= 0) {
      setModalVisible(true)
    }
  }, [remaining])
  
  useEffect(() => {
    if (!humanTurn && remaining.length > 0) {
      setTimeout(() => {
        const toRemove = Math.floor(Math.floor(Math.random() * 3) + 1)
        updateRemaining(remaining.slice(0, -toRemove))
      }, 1000)
    }
  }, [remaining, humanTurn])

  return (
    <div className="App">
      <h1>Last One Out</h1>
      <Desk remaining={remaining} />  
      <Controls remaining={remaining} updateRemaining={updateRemaining} humanTurn={humanTurn} />
      <InfoModal onClose={onModalClose} visible={modalVisible} humanTurn={humanTurn} />
    </div>
  )
}

export default App
