import styles from './Header.module.scss'
import UserImg from './UserImg'
import { signIn, useSession, signOut } from 'next-auth/react'
import { FaUser, FaSearch } from 'react-icons/fa'
import { IoMdExit } from 'react-icons/io'
import { InputShearch } from './inputShearch'

export default function Header() {

    const { data: session } = useSession();

    return (
        <div className={styles.container}>
            {!session?.user ? (
                
                <div className={styles.center}>
                    <button
                        onClick={() => { signIn() }}>
                        <i><FaUser /></i>
                        Login Spotify
                    </button>
                </div>

            ) : (
                <div className={styles.around}>
                    
                    <div className={styles.div_1}>
                        <UserImg imgUrl={session.user.image == null ? "images/user.png" : `${session.user.image}`} />
                        <button>
                            {session.user?.name}
                        </button>
                    </div>
                    
                    <div className={styles.div_2}>
                        <InputShearch />
                    </div>

                    <div className={styles.div_3}>
                        <button onClick={() => { signOut() }}>
                            <span>Exit</span>
                            <i><IoMdExit /></i>
                        </button>
                    </div>

                </div>
            )}
        </div>
    )
}