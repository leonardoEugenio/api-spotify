import styles from '../../styles/Home.module.scss'
import {  FaSpotify } from 'react-icons/fa'
export default function Home() {
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <FaSpotify className={styles.logo}/>
                <h1>Api Spotify</h1>
            </div>
        </div>
    )
}