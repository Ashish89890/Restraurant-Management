import React, { useState } from 'react'
import './home.css'
import Header from '../../components/header/header'
import ExploreMenu from '../../components/ExploreMenu/explore'
import FoodDisplay from '../../components/foodDisplay/foodDisplay'
import Appdownload from '../../components/appdownload/appdownload'
const home = () => {
    const [category, setCategory] = useState("All");
    return (
      
    <div>
          <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
         <Appdownload/>
    </div>
  )
}

export default home
