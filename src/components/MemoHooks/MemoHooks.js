import React, { useMemo, useState } from 'react'

function MemoHooks() {
    const[counter,setCounter] = useState(0)
    const[data,setData] = useState([
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
        { id: 3, name: "Michael Johnson" },
        { id: 4, name: "Emily Davis" },
        { id: 5, name: "William Brown" },
        { id: 6, name: "Sophia Wilson" },
        { id: 7, name: "James Taylor" },
        { id: 8, name: "Isabella Anderson" },
        { id: 9, name: "Benjamin Moore" },
        { id: 10, name: "Mia Clark" }
      ])
    const[filteredData,setFilteredData] =useState(data)
    const increment=()=>{
        setCounter(counter+1)
    }
    const decrement=()=>{
        setCounter(counter-1)
    }

    const doubleData=()=>{
        console.log("rendering.....")
        return counter * counter
    }

    const memoDoubleData = useMemo(doubleData,[counter])
    const handleFilter=(e)=>{
        const value = e.target.value.toLowerCase()
        const filtered = data.filter((item)=>item.name.toLowerCase().includes(value))
        setFilteredData(filtered)
    }

  return (
    <div>
        <h1>USE MEMO</h1>
        <input onChange={handleFilter}/>
        <div>
            {
                filteredData.map((item,index)=>(
                    <p key={index}>{item?.name}</p>
                ))
            }
        </div>
        <div>
            <button onClick={increment}>+</button>
                <h2>{counter}</h2>
            <button onClick={decrement}>-</button>
        </div>
        <div>
            <h3>{memoDoubleData}</h3>
        </div>
    </div>
  )
}

export default MemoHooks