import styles from '../styles/selectors.module.scss'

const Selectors = ({ setPrimary, storedData, primary }) => {
    console.log('prim', primary)

    const handleClick = (event) => {
        setPrimary(parseInt(event.target.id))
    }
    return (
        <div className={styles.box}>
            {storedData.map(({ title }) => (
                < div key={title} >
                    {primary === parseInt(title) ?
                        <div id={title} className={styles.pointSelected} onClick={handleClick} />
                        :
                        <div id={title} className={styles.point} onClick={handleClick} />
                    }
                </div>
            ))}
        </div >
    );
}
export default Selectors;