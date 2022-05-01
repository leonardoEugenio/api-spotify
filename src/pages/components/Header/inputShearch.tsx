import { FaSearch } from 'react-icons/fa'
import styles from './Header.module.scss'
import { getSession } from 'next-auth/react';
import { SessionType } from '../../../services/types';
import { useTracks } from '../hooks/useTracks';
import { useState } from 'react';

export function InputShearch() {

    const [inputValue, SetInputValue] = useState("")

    function updateInput(input : string){
        SetInputValue(input)
    }

    const {sheareTracks} = useTracks()
    async function handleValue() {
        const Session : SessionType =  await getSession()
        const {accessToken} = Session.token
        await sheareTracks(inputValue, accessToken)
    }
    

    
    return (
        <>
            <div className={styles.search}>
                <button onClick={() => {handleValue()}}>
                    <i>
                        <FaSearch />
                    </i>
                </button>
            </div>
            <input value={inputValue} placeholder='Search for track' type="text" onChange={ (e) => {
                updateInput(e.target.value)}} />
        </>
    )
}