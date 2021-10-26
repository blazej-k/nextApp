import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { IDescription } from 'types'

const Header: NextPage<IDescription> = ({description}) => {
    return(
        <div className="Header">
            <div className="Header-title">
                <h1>Header</h1>
            </div>
            <div className="Header-description">
                {description}
            </div>
        </div>
    )
}

export default Header