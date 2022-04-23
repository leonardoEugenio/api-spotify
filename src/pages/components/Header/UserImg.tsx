import styles from './Header.module.scss'

interface Props {
    imgUrl : string
}
export default function UserImg(props: Props) {
    return (
        <div className={styles.bgImgUser}>
            <img src={props.imgUrl} alt="ImageUser" />
        </div>
    )
}