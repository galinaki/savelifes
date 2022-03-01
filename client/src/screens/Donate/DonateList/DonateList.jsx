import styles from './DonateList.module.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function DonateList(props) {
  
  return (
    <div className={styles.donate_list}>
      {
        props.currentUser ?
          <>
            <Link to='/donate/newFund'><button className={styles.donate_button}>Add more Funds</button></Link>
          </>
          :
          <>
          <h4>Please login</h4>
          </>
      }
      {
        props.donates.map(donate => (
          <div className={styles.donate} key={donate.id}>
            <Link className={styles.donate_link} to={`${donate.link}`}  >
              <img className={styles.donate_img} src={donate.logo_url} alt={donate.name}/>
              <div className={styles.donate_details}>
                <h4 className={styles.donate_name}>{donate.name}</h4>
                <h5 className={styles.donate_description}>{donate.desciption}</h5>
              </div>
            </Link>
            {
              props.currentUser?.id === donate.user_id ?
              <div className={styles.donate_buttons}>
                <Link to={`/donate/${donate.id}/edit`}><button className={styles.donate_button}>Edit</button></Link>
                <button className={styles.donate_button} onClick={()=>props.handleDelete(donate.id)}>Delete</button>
                </div>
                    
                :
                null
            }
          </div>
        ))
      }
      
    </div>
  )
}
