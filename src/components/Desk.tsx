import Styles from "./Desk.module.css";

type DeskProps = {
  desk: string[];
};

export const Desk = ({ desk }: DeskProps) => (
  <div className={Styles.desk}>
    {desk.map((item, index) => (
      <div key={index} className={Styles.item}>
        {item}
      </div>
    ))}
  </div>
);
