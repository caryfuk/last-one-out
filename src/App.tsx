import { useState } from 'react'
import { Controls, Desk } from './components'
import './App.css'

const App = () => {
  const [remaining, setRemaining] = useState<number>(20)
  return (
    <div className="App">
      <h1>Last One Out</h1>

      <Desk remaining={remaining} />
      <Controls remaining={remaining} setRemaining={setRemaining} />
    </div>
  )
}

export default App
