import { FaSearch } from 'react-icons/fa'
import styles from './Header.module.scss'
import { useState } from 'react';
import { search } from '../../api/spotify/search';
import { HandleTraks } from '../..';

export function InputShearch() {
    async function handleValue(input: string) {
        await HandleTraks(search(input))
    }

    return (
        <>
            <div className={styles.search}>
                <i>
                    <FaSearch />
                </i>
            </div>
            <input id='inputValue' placeholder='Search for track' type="text" onChange={(e) => {
                handleValue(e.target.value)
            }} />
        </>
    )
}