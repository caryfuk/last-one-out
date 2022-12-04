import Styles from './Desk.module.css'

type DeskProps = {
  remaining: number
}

export const Desk = ({ remaining }: DeskProps) => {
  return (
    <div className={Styles.root}>
      {remaining}
    </div>
  )
}
