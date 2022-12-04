import Styles from './Controls.module.css'

type ControlsProps = {
  remaining: number
  setRemaining: (remaining: number) => void
}

export const Controls = ({ remaining, setRemaining }: ControlsProps) => {
  return (
    <div className={Styles.root}>
      <button onClick={() => setRemaining(remaining - 1)}>1</button>
      <button onClick={() => setRemaining(remaining - 2)}>2</button>
      <button onClick={() => setRemaining(remaining - 3)}>3</button>
    </div>
  )
}
