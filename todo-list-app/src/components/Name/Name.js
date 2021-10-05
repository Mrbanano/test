import React from 'react'
import './Name.css'

const Name = () => {
  let name = "AlvaroCastillo"
    return (
        <div className="Name">
          <div className="Name-container">
            <div className="Name-content">
              <p>{name}</p>
            </div>
          </div>
        </div>
    )
}

export default Name
