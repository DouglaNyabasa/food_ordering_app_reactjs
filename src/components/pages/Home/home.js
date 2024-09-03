import React, { useState } from 'react'
import './home.css'
import Header from '../../header/Header'
import ExploreMenu from '../../exploreMenu/ExploreMenu'
import FoodDisplay from '../../food-display/FoodDisplay';

function Home() {

  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
    </div>
  )
}
 
export default Home
