import Styles from './Controls.module.css'

type ControlsProps = {
  remaining: Array<string>
  setRemaining: (remaining: Array<string>) => void
}

export const Controls = ({ remaining, setRemaining }: ControlsProps) => {
  return (
    <div className={Styles.root}>
      <button onClick={() => setRemaining(remaining.slice(0, -1))}>1</button>
      <button onClick={() => setRemaining(remaining.slice(0, -2))}>2</button>
      <button onClick={() => setRemaining(remaining.slice(0, -2))}>3</button>
    </div>
  )
}
