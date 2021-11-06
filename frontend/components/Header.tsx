import React, { useEffect, useRef } from 'react'
import { NextPage } from 'next'
import { IHeader } from 'types'
import styles from 'styles/Header.module.scss'

const { Header_description, hide, show } = styles

const Header: NextPage<IHeader> = ({ description }) => {

    const headerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let timer: NodeJS.Timeout
        if (headerRef.current && typeof window === 'object') {
            const wrappedLetters = document.createDocumentFragment()
            const letters = headerRef.current?.textContent
            headerRef.current.innerHTML = ''

            for (const letter of letters!) {
                const span = document.createElement('span')
                span.className = hide
                span.textContent = letter
                wrappedLetters.appendChild(span)
            }

            headerRef.current.appendChild(wrappedLetters)
            const lettersElements = Array.from(headerRef.current.children)

            const showLetter = (index: number) => {
                if (index === lettersElements.length) return
                lettersElements[index].className = show
                timer = setTimeout(() => {
                    showLetter(++index)
                }, 50)
            }
            showLetter(0)
        }
        return (() => {
            timer && clearTimeout(timer)
        })
    }, [])

    return (
        <div className={styles.Header}>
            <div className="Header-title">
                <h1>MyForm</h1>
            </div>
            <div className={Header_description} ref={headerRef}>
                {description}
            </div>
        </div>
    )
}

export default Header