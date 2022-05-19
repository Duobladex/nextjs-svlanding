import styles from './../styles/cardsbox.module.scss'
import CardContent from './CardContent';


const CardsBox = ({ storedData }) => {
    return (
        <div className={styles.cardsbox}>
            {storedData.map(({ logo, content, lists, title }) => (
                <CardContent key={title} logo={logo} desc={content} lists={lists} />
            ))}
        </div>
    );
}
export default CardsBox;