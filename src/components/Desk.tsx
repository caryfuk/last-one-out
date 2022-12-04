import Styles from './Desk.module.css'

type DeskProps = {
  remaining: Array<string>
}

export const Desk = ({ remaining }: DeskProps) => {
  
  return (
    <div className={Styles.deskWrapper}>
    <div className={Styles.desk}>
      {remaining.map((item, index) => (
        <div key={index} className={Styles.item}>
          {item}
        </div>
      ))}
    </div>
    </div>
  )
}
