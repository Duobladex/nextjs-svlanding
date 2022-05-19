import { useState } from 'react';
import styles from './../styles/cardsbox.module.scss'
import CardContent from './CardContent';


const CardsBox = ({ storedData }) => {
    const [primary, setPrimary] = useState(1);
    return (
        <div className={styles.cardsbox}>
            <CardContent storedData={storedData} primary={primary} setPrimary={setPrimary} />
            {/* {storedData.map(({ logo, content, lists, title }) => ( */}
            {/* <CardContent key={title} title={title} logo={logo} desc={content} lists={lists} primary={primary} setPrimary={setPrimary} /> */}
            {/* ))} */}
        </div>
    );
}
export default CardsBox;