import styles from './Header.module.scss'
import UserImg from './userImg'
import { signIn, useSession, signOut } from 'next-auth/react'
import { FaUser } from 'react-icons/fa'
export default function Header() {


    const { data: session } = useSession();
    return (
        <div className={styles.container}>
            { !session?.user ? (
            <div className={styles.center}>
                <button
                    onClick={() => { signIn() }}>
                    <i><FaUser /></i>
                    Login Spotify
                </button>
            </div>
            ) : (
            <div className={styles.around}>
                {/* <UserImg img = {session.user.image == null ? "./vercel.svg" : `${session.user.image}`}/> */}
                <button
                    onClick={() => { signOut() }}>
                    {session.user?.name}
                </button>
            </div>
            )}
        </div>
    )
}