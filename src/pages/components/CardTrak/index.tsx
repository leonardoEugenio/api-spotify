import style from './CardTrack.module.scss'

export function CardTrack() {
    return (
        <div className={style.card}>
            <a>
                <img src="./images/genericMusica.png" alt="Violão marom em cima de uma partitura" />
            </a>
            <div className={style.content}>
                <a>
                    <h3>Titulo</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A modi est sunt rem earum obcaecati?
                    </p>
                </a>
            </div>
        </div>
    )
}