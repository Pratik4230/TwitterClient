import Image from "next/image";
import React from "react";
import {FaTwitter , FaHashtag, FaHome, FaBell, FaEnvelope, FaBookmark, FaUser} from "react-icons/fa";


interface TwitterSidebarButton{
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems : TwitterSidebarButton[] = [
     {
      title: "Home",
      icon: <FaHome />
     },
     {
      title: "Explore",
      icon: <FaHashtag />
     },
     {
      title: "Notifications",
      icon: <FaBell />
     },
     {
      title: "Messages",
      icon: <FaEnvelope />
     },
     {
      title: "Bookmarks",
      icon: <FaBookmark/>
     },
     {
      title: "Profile",
      icon: <FaUser/>
     },
    
]


export default function Home() {
  return (
   <div className="grid grid-cols-12 h-screen w-screen px-52">

      {/* first coloumn */}
      <div className="col-span-3 border border-red-500  py-7 " >
        {/* Twitter icon */}
        <div className="hover:bg-slate-700 rounded-full w-fit transition-all " >
         <FaTwitter className="text-3xl  cursor-pointer hover:text-cyan-400 h-fit transition-all " />
        </div>
           
           <div className="mt-5 text-2xl font-semibold " >
            <ul>
              {sidebarMenuItems.map((item) => (
                <li className="flex justify-start items-center gap-5   text-blue-200 hover:bg-slate-800 w-fit px-3 py-2 rounded-full cursor-pointer mt-3" >
                   <span>{item.icon}</span>
                   <span> {item.title}</span>
               </li>
              ))}
            </ul>
           </div>
        {/* tweet buttton   */}
         <div className="mt-7 flex justify-evenly" >
          <button className="font-semibold text-2xl bg-orange-500 p-3 rounded-full hover:bg-sky-400 " >Tweet</button>
         </div>

      </div>


      <div className="col-span-6 border-x-2 border-x-slate-500  " ></div>
      <div className="col-span-3 border border-red-500 " ></div>
    </div>
  );
}
