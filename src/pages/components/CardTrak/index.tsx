import { tracksType } from '../../../services/types'
import style from './CardTrack.module.scss'

interface props {
    track : tracksType
}

export function CardTrack(props : props){
        const {track} = props
        
        return (

            <div key={track.external_ids.isrc} className={style.card}>
                <a target={'_blank'} href={track.external_urls.spotify}>
                    <img src={track.album.images[0].url} alt={track.name} />
                </a>
                <div className={style.content}>
                    <a target={'_blank'} href={track.external_urls.spotify}>
                        <h3>{track.name}</h3>
                    </a>
                </div>
            </div>

        )
}