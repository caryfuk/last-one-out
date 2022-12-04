import Styles from './Controls.module.css'

type ControlsProps = {
  remaining: Array<string>
  updateRemaining: (remaining: Array<string>) => void
  humanTurn: boolean
}

export const Controls = ({ remaining, updateRemaining, humanTurn }: ControlsProps) => {
  return (
    <div className={Styles.root}>
      <button onClick={() => updateRemaining(remaining.slice(0, -1))} disabled={!humanTurn}>1</button>
      <button onClick={() => updateRemaining(remaining.slice(0, -2))} disabled={!humanTurn}>2</button>
      <button onClick={() => updateRemaining(remaining.slice(0, -3))} disabled={!humanTurn}>3</button>
    </div>
  )
}
