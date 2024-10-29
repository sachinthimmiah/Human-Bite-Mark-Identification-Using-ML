import React, { useState } from "react";
import teeth from "../../Assets/teeth.jpg";
import menu from "../../Assets/menu.png";
import cross from "../../Assets/cross.png"
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

function Navbar({uploadedImagesHistory}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = ()=>{
    setSidebarOpen(!sidebarOpen);
  }

// Display only the last 10 uploaded images
  const lastTenImages = uploadedImagesHistory.slice(-15);


  return (
    //   <div className="navbar flex justify-center p-[20px] ">
    //      <div className='backdrop-filter blur-[110px]'></div>
    //     <div className="nav-list max-w-3xl " >
    //         <ul className='flex  items-start  relative'>
    //             <li>LOGO</li>
    //             <li><Link activeClass='active' to='Navbar' spy="true" smooth="true"  >Home</Link> </li>
    //             <li><Link  to='Navbar' spy="true" smooth="true"  >About Us</Link> </li>
    //         </ul>

    //     </div>
    //   </div>
    <>
       <img className={`menu w-6 h-6 mx-3 my-2 rounded-xl ${sidebarOpen ? 'hidden' : ''}`} src={menu} onClick={toggleSidebar}  alt="" />
      
      <aside className={`h-screen ${sidebarOpen ? 'block' : 'hidden'}`}>
        
        <div className=" h-full w-full flex flex-col bg-white  shadow-sm " style={{background:"#f3f6f8"}}>
       
          <ul className=" h-full w-full flex flex-col justify-between items-center">

                <div className="w-full flex  justify-between items-center icons ">
                      <div className="flex ">
                        <img src={teeth} alt="teeth" className="w-12 h-10 rounded-2xl" />
                        <h2 className="text-lg font-bold text-indigo-500 m-1">BiteScan AI</h2>
                      </div>
                      <img className={`cross w-6 h-6 mx-2 rounded-xl ${!sidebarOpen ? 'hidden' : ''}`} src={cross} onClick={toggleSidebar}   alt="" />   
                </div>
                <div className="history border-t-2 w-[100%] h-[85vh] border-b-2" >
                {lastTenImages.map((imageName, index) => (
                    <li key={index} className="border-b mx-2 my-2  text-sm cursor-pointer">{index+1}. {imageName}</li>
                  ))}
                </div>
                <div>
                  <h1 className=" p-2 text-center font-medium"> 
                  <NavLink to="/articles" className="text-blue-400 underline" activeClassName="active"> Articles </NavLink>
                   </h1>
                </div>
                <div className="border-t-2 p-4 text-center font-medium"> Made with 💓 by 
                <NavLink to="/about" className="text-green-400 underline" activeClassName="active"> SDK_</NavLink>
                 </div>
          </ul>
          
        </div>
      </aside>
    </>
  );
}

export default Navbar;
