import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { NextPage } from 'next'
import { IDescription } from 'types'
import styles from 'styles/Header.module.scss'

const { Header_description } = styles

const Header: NextPage<IDescription> = ({ description }) => {

    const headerRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        const letters = headerRef.current?.textContent
    }, [])

    useEffect(() => {
        const letters = headerRef.current?.textContent
        console.log(letters)
    }, [])

    return (
        <div className={styles.Header}>
            <div className="Header-title">
                <h1>Header</h1>
            </div>
            <div className={Header_description} ref={headerRef}>
                {description}
            </div>
        </div>
    )
}

export default Header