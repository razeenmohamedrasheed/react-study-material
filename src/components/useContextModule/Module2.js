import React from 'react'
import Module3 from './Module3'
import { useContext } from 'react'
import { sendData } from './Module1'

function Module2() {
  const recievedData = useContext(sendData)
  return (
    <div>
       <div className="card">
        <div className="card-content">
          <h2 className="card-title">Module2 (Child1)</h2>
          <p className="card-description"></p>
        </div>
        <div className="card-content">
          <Module3/>
          {recievedData}
        </div>
      </div>
    </div>
  )
}

export default Module2