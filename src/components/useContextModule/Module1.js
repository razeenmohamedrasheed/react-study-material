import { createContext, useContext } from "react"
import Module2 from "./Module2"


export const sendData = createContext()

function Module1() {
  const uniqueKey = "Vbsbjsg8834bf82bd98en289yckui98ruh289h"
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">Module1 (Parent)</h2>
          <p className="card-description"></p>
        </div>
        <div className="card-content">
          <sendData.Provider value={uniqueKey}>
            <Module2 key={uniqueKey}/>
          </sendData.Provider>
        </div>
      </div>
    </div>
  )
}

export default Module1