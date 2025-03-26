import React, {useState, useEffect } from 'react'


function DataFetcher() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
       .then(response=>response.json())
       .then(data=>{
         setData(data)
         setLoading(false)
       })
    },[])
   return (
    <div>
      {loading? (
        <h2>Loading...</h2>
    ):(
        <ul>
            {data.map(item=>(
                <li key={item.id}>
                    {item.title} 
                    </li>
            ))}
        </ul>
    )
      }
    </div>
  )

  //useEffect will run everytime data or loading state changes
}

export default DataFetcher