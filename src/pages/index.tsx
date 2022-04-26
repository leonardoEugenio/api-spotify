import styles from '../../styles/Home.module.scss'
import {  FaSpotify } from 'react-icons/fa'
import { CardTrack } from './components/CardTrak'
import { useState } from 'react'

interface Tracks{
    items: [
        duration_ms : number,
        name: string, 
        external_urls : {
            spotify : string
        }
    ]
}

export function HandleTraks(params : any) {
    setTraks(params)
    console.log(traks);
}
const [traks, setTraks] = useState({})
export default function Home() {


    return(
        <div className={styles.container}>
            <h1>Tracks found</h1> 
            <div className={styles.content}>
                {/* <FaSpotify className={styles.logo}/>
                <h1>Api Spotify</h1> */}
                <CardTrack />
                <CardTrack />
                <CardTrack />
                <CardTrack />
                <CardTrack />
                <CardTrack />
                <CardTrack />
                <CardTrack />
            </div>
        </div>
    )
}