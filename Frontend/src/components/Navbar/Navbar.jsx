import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
import { NavLink ,Link, useNavigate} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {
  const [menu, setmenu] = useState("home");
  const { CartTotal, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }
  return (
    
      
      <div className='navbar'>
         
         <Link to='/' >
         <img src={assets.logo} alt="" className='logo' />
                   
                     </Link>
        
            <ul className="nav-menu">
           
              <Link to='/'   onClick={()=>setmenu("home")} className={menu==="home"?"active":""}>Home</Link>
              <li href='#ExploreMenu' onClick={()=>setmenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
              <li onClick={()=>setmenu("mobile-app")}className={menu==="mobile-app"?"active":""}>Mobile-app</li>
              <li onClick={()=>setmenu("contact-us")}className={menu==="contact-us"?"active":""}>Contact us </li>
          </ul>
          <div className="nav-right">
              <img src={assets.search_icon} alt="" />
              <div className="navbar-search-icon">
                     <Link to='/cart' >
                      <img src={assets.basket_icon} alt="" />
                   
                     </Link>
                    
                  <div className={CartTotal()>0?"dot":""}></div>
        </div>
        {!token ? <button onClick={() => setShowLogin(true)}>Sign in</button> :
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
            </div> }
             
          </div>
    </div>
  )
}

export default Navbar
