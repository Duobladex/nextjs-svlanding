import styles from '../styles/button.module.scss'

const Button = () => {
  const handleClick = () => {
    window.location.pathname = '/test';
  }
  return (
    <div className={styles.button} onClick={handleClick}>
      Check it out
    </div>
  );
}
export default Button;