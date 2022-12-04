import { useEffect, useState } from 'react'
import { Controls, Desk } from './components'
import './App.css'

const App = () => {
  // Fill the desk with random items
  const [remaining, setRemaining] = useState<Array<string>>(['🍎', '🍊', '🍇', '🍌', '🍉', '🍓', '🍒', '🍑', '🥝', '🍍', '🥥', '🥑', '🍆', '🥔', '🥕', '🌽', '🥦', '🥒', '🥬', '🥜'].sort(() => Math.random() - 0.5))
  return (
    <div className="App">
      <h1>Last One Out</h1>
      <Desk remaining={remaining} />
      <Controls remaining={remaining} setRemaining={setRemaining} />
    </div>
  )
}

export default App
