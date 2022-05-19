import styles from '../styles/cardContent.module.scss'
import Button from './Button';

const CardContent = ({ logo, desc, lists }) => {
  return (

    <div className={styles.card}>
      <div className={styles.heading}>
        {logo}
      </div>
      <div className={styles.content}>
        <div className={styles.desc}>
          {desc}
        </div>
        <div className={styles.list}>
          <ul>
            {lists.map((list, id) => (
              <li key={id}>{list}</li>
            ))}
          </ul>
        </div>
      </div>
      <Button />
    </div>
  );
}
export default CardContent;