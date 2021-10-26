import React from 'react'
import { NextPage } from 'next'
import { IDescription } from 'types'
import styles from 'styles/Header.module.scss'

const { Header_description } = styles

const Header: NextPage<IDescription> = ({ description }) => {
    return (
        <div className={styles.Header}>
            <div className="Header-title">
                <h1>Header</h1>
            </div>
            <div className={Header_description}>
                {description}
            </div>
        </div>
    )
}

export default Header