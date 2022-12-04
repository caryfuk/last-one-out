import Styles from './Controls.module.css'

type ControlsProps = {
  removeFromDesk: (toBeRemoved: number) => void
  humanTurn: boolean
}

export const Controls = ({ removeFromDesk, humanTurn }: ControlsProps) => {
  return (
    <div className={Styles.root}>
      {Array(3).fill(null).map((_, index) => (
        <button key={index} onClick={() => removeFromDesk(index + 1)} disabled={!humanTurn}>{index + 1}</button>
      ))}
    </div>
  )
}
