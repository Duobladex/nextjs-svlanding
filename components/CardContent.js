import styles from '../styles/cardContent.module.scss'
import Button from './Button';

// logo, desc, lists, title, primary, setPrimary 
// var primary = 0;


const CardContent = ({ storedData, primary, setPrimary }) => {
  let newId = 0;
  const handleClick = (event) => {
    newId = parseInt(event.target.id);
    if (newId > -1 && newId < storedData.length) {
      setPrimary(newId);
    }

  }


  return (
    <>
      {primary === 0 ?
        <>
          <div className={styles.cardHidden} onClick={handleClick} id={storedData[primary].title}  >
            <div className={styles.heading}>
              {storedData[primary].logo}
              this one 0
            </div>
            <div className={styles.content}>
              <div className={styles.desc}>
                {storedData[primary].content}
              </div>
              <div className={styles.list}>
                <ul>
                  {storedData[primary].lists.map((list, id) => (
                    <li key={id}>{list}</li>
                  ))}
                </ul>
              </div>
            </div>
            <Button />
          </div>
          <div className={styles.card} id={storedData[primary].title}>
            <div className={styles.heading}>
              {storedData[primary].logo}
            </div>
            <div className={styles.contentPrimary}>
              <div className={styles.desc}>
                {storedData[primary].content}
              </div>
              <div className={styles.list}>
                <ul>
                  {storedData[primary].lists.map((list, id) => (
                    <li key={id}>{list}</li>
                  ))}
                </ul>
              </div>
            </div>
            <Button />
          </div>
        </>
        :
        <>
          <div className={styles.card} onClick={handleClick} id={storedData[primary - 1].title}  >
            <div className={styles.heading}>
              {storedData[primary - 1].logo}
            </div>
            <div className={styles.content}>
              <div className={styles.desc}>
                {storedData[primary - 1].content}
              </div>
              <div className={styles.list}>
                <ul>
                  {storedData[primary - 1].lists.map((list, id) => (
                    <li key={id}>{list}</li>
                  ))}
                </ul>
              </div>
            </div>
            <Button />
          </div>
          <div className={styles.card} id={storedData[primary].title}>
            <div className={styles.heading}>
              {storedData[primary].logo}
            </div>
            <div className={styles.contentPrimary}>
              <div className={styles.desc}>
                {storedData[primary].content}
              </div>
              <div className={styles.list}>
                <ul>
                  {storedData[primary].lists.map((list, id) => (
                    <li key={id}>{list}</li>
                  ))}
                </ul>
              </div>
            </div>
            <Button />
          </div>
        </>
      }


      {primary === storedData.length - 1 ?
        <>
          <div className={styles.cardHidden} id={storedData[primary].title}>
            <div className={styles.heading}>
              {storedData[primary].logo}
            </div>
            <div className={styles.content}>
              <div className={styles.desc}>
                {storedData[primary].content}
              </div>
              <div className={styles.list}>
                <ul>
                  {storedData[primary].lists.map((list, id) => (
                    <li key={id}>{list}</li>
                  ))}
                </ul>
              </div>
            </div>
            <Button />
          </div>
        </>
        :
        <>
          <div className={styles.card} id={storedData[primary + 1].title} onClick={handleClick}>
            <div className={styles.heading}>
              {storedData[primary + 1].logo}
            </div>
            <div className={styles.content}>
              <div className={styles.desc}>
                {storedData[primary + 1].content}
              </div>
              <div className={styles.list}>
                <ul>
                  {storedData[primary + 1].lists.map((list, id) => (
                    <li key={id}>{list}</li>
                  ))}
                </ul>
              </div>
            </div>
            <Button />
          </div>
        </>

      }
    </>


    // <>
    //   {
    //     title === primary ?
    //       <div className={styles.card}>
    //         <div className={styles.heading}>
    //           {logo}
    //         </div>
    //         <div className={styles.contentPrimary}>
    //           <div className={styles.desc}>
    //             {desc}
    //           </div>
    //           <div className={styles.list}>
    //             <ul>
    //               {lists.map((list, id) => (
    //                 <li key={id}>{list}</li>
    //               ))}
    //             </ul>
    //           </div>
    //         </div>
    //         <Button />
    //       </div>
    //       :
    //       <div className={styles.card} onClick={handleClick}>
    //         <div className={styles.heading}>
    //           {logo}
    //         </div>
    //         <div className={styles.content}>
    //           <div className={styles.desc}>
    //             {desc}
    //           </div>
    //           <div className={styles.list}>
    //             <ul>
    //               {lists.map((list, id) => (
    //                 <li key={id}>{list}</li>
    //               ))}
    //             </ul>
    //           </div>
    //         </div>
    //         <Button />
    //       </div>
    //   }
    // </>
  );
}
export default CardContent;