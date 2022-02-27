import styles from './DonateList.module.css';
import { Link } from 'react-router-dom';

export default function DonateList(props) {
  return (
    <div className={styles.donate_list}>
      <Link to='/donate/newFund'><button>Add more Funds</button></Link>
      {
        props.donates.map(donate => (
          <div className={styles.donate}>
            <Link className={styles.donate_link} to={`${donate.link}`}  key={donate.id}>
              <img src={donate.logo_url} alt={donate.name} style={{width: "100px"}}/>
              <div className={styles.donate_details}>
                <h4>{donate.name}</h4>
                <h5>{donate.desciption}</h5>
              </div>
            </Link>
            <div className={styles.donate_buttons}>
              <Link to={`/donate/${donate.id}/edit`}><button>Edit</button></Link>
              <button onClick={()=>props.handleDelete(donate.id)}>Delete</button>
            </div>
          </div>
        ))
      }
      
    </div>
  )
}
