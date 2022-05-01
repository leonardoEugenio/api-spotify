import styles from '../../styles/Home.module.scss'
import { FaSpotify } from 'react-icons/fa'
import { CardTrack } from './components/CardTrak'
import { useTracks } from './components/hooks/useTracks'


export default function Home() {
    const { tracks } = useTracks()
    console.log(tracks.length)

    return (
        <div className={styles.container}>
            {
                tracks.length != 0 ? <h1>Tracks found</h1> : <></>
            }
            <main className={styles.content}>
                {
                    tracks.length == 0 ? (
                        <>
                            <FaSpotify className={styles.logo} />
                            <h1 className={styles.titleContent}>Api Spotify</h1>
                        </>
                    ) :
                        tracks.map((track) => {
                            return <CardTrack track={track} />
                        })
                }
            </main>
        </div>
    )
}