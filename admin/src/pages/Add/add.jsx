import React, { useEffect, useState } from 'react'
import './add.css'
import axios from "axios"
import { assets } from '../../assets/assets'
import { toast } from 'react-toastify'
const add = ({url}) => {
   
    const [image, setimage] = useState(false);
    const [data, setdata] = useState({
        name: "",
        description: "",
        price: "",
        category: "Salad",

        


    })
    const onchangeHandler = (ev) => {
        const { name, value } = ev.target;
        setdata(prevData => ({ ...prevData, [name]: value }));
    };
    useEffect(() => {
        console.log(data)
    }, [data])
    
    const onsubmitHandler = async (ev) => {
        ev.preventDefault();
        const formdata = new FormData();
        formdata.append("name",data.name)
        formdata.append("description",data.description)
        formdata.append("price",Number(data.price))
        formdata.append("category",data.category)
        formdata.append("image", image)
        const response = await axios.post(`${url}/api/food/add`, formdata)
        if (response.data.success){
            setdata({
                name: "",
                description: "",
                price: "",
                category: "Salad",
            })
            setimage(false);
            toast.success(response.data.message)
        } else {
            toast.error(response.data.message)
        }
    }
    
  return (
    <div>
          <div className="add">
              <form action="
              " className="flex-col">
                  <div className="add-img-upload flex-col">
                      <p>Upload Image</p>
                      <label htmlFor="image">
                         <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                      </label>
                      <input onChange={(e)=>setimage(e.target.files[0])} type="file" id='image' hidden required />
                      <div className="add-prod-name flex-col">
                          <p>Product Name</p>
                          <input onChange={onchangeHandler} type="text" name='name' value={data.name} placeholder='Type here' />
                      </div>
                      <div className="add-prod-descr flex-col">
                          <p>Product Description</p>
                          <textarea onChange={onchangeHandler} name="description" value={data.description} rows="6" placeholder='Write content here'
                              ></textarea>
                      </div>
                      <div className="add-category-price">
                          <div className="add-category flex-col">
                              <p>Product Category</p>
                              <select onChange={onchangeHandler} value={data.category} name="category" id="">
                                  <option value="Salad">Salad</option>
                                  <option value="Rolls">Rolls</option>
                                  <option value="Cake">Cake</option>
                                  <option value="Pure Veg">Pure Veg</option>
                                  <option value="Noodles">Noodles</option>
                                  <option value="Deserts">Deserts</option>
                              </select>
                          </div>
                          <div className="add-price flex-col">
                              <p>product price</p>
                              <input onChange={onchangeHandler} value={data.price} type="Number"  name='price' placeholder='INR'/>
                          </div>
                      </div>

                  </div>
                   <button type='submit' onClick={onsubmitHandler} className='add-btn'>ADD</button>
              </form>
         </div>
    </div>
  )
}

export default add

