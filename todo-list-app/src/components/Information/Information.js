import React from 'react'
import './Information.css'
import Name from '../Name'
import Role from '../Role'

const Information = () => {
    return (
        <div className="Information">
            <div className="Information-container">
                <div className="Information-content">
                    <Name/>
                    <Role/>
                </div>
            </div>
        </div>        
    )
}

export default Information
