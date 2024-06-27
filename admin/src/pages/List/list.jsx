import React, { useEffect, useState } from 'react'
import './list.css'
import axios from 'axios';
import { toast } from 'react-toastify';
const list = ({url}) => {
    const [listing, setlisting] = useState([]);
    const fetchList = async () => {
        const response = await axios.get(`${url}/api/food/list`);
        console.log(response.data.data)
        if (response.data.success) {
            setlisting(response.data.data)
        }
        else {
            toast.error("Error")
        }
    }

    const removefood = async (foodId) => {
        const response = await axios.post(`${url}/api/food/remove`, { id: foodId })
         await fetchList();
        if (response.data.success) {
             toast.success("removed item successfully")
        }
        else {
            toast.error("Error")
        } 
    }
    useEffect(() => {
        fetchList();
    },[])
  return (
    <div className='list add flex-col'>
          <p>all food list</p>
          <div className="list-table">
              <div className="list-table-format tittle">
                  <b>image</b>
                  <b>name</b>
                  <b>category</b>
                  <b>price</b>
                  <b>action</b>
              </div>
              {listing.map((item, index) => {
                  return (
                      <div key={index} className='list-table-format'>
                          <img src={`${url}/images/` + item.image} alt="" />
                          <p>{item.name}</p>
                          <p>{item.category}</p>
                          <p>{item.price}</p>
                     
                          <p className='cursor' onClick={()=>removefood(item._id)}>X</p>


                    </div>
                )
            })}
          </div>
    </div>
  )
}

export default list
