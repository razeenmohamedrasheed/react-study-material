import React, { useEffect, useState } from 'react'

function Debounce() {
    const[userData,setUserData] = useState([])
    const[filterUsers,SetFiltered] = useState(userData)
    const fetchUsers = async () => {
        try {
            let res = await fetch('https://jsonplaceholder.typicode.com/users/')
            if (!res.ok) {
                throw new Error('API Failed')
            }
            let data = await res.json()
            setUserData(data)
            SetFiltered(data)
        }
        catch (error) {
            console.log(error)
        }
    }

    function handelChange(e) {
        let name = e.target.value
        const filtered = userData.filter((item)=> item.name.toLowerCase().includes(name))
        SetFiltered(filtered)
        console.log("calling..")
    }

    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <div>
            <h2>DEBOUNCE</h2>

            <input onKeyUp={handelChange} />
            {
                filterUsers.map((item,index)=>(
                    <div key={index} style={{borderStyle:'solid',margin:'10px',backgroundColor:'red' }}>
                        {item?.name}
                    </div>
                ))
            }
        </div>
    )
}

export default Debounce