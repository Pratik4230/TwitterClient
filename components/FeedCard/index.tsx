import React from "react";
import Image from "next/image";
import { FaRegMessage , FaRetweet , FaHeart, FaUpload  } from "react-icons/fa6";

const FeedCard: React.FC = () => {
    return(
     <div  className=" border border-x-0 border-b-0   border-t-slate-600 p-5 hover:bg-slate-900 transition-all cursor-pointer" >
         <div className="grid grid-cols-12  gap-2" >
            <div className="col-span-1">
                <Image 
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="user-imge" height={50} width={50}
               />
            </div>


            <div className="col-span-11 pl-2">
              <h5>My  Name</h5>
              <p>kfeniufpegb     goibgep         igufhbgn          huofwjb</p>

                {/* icons */}
                 <div className="flex  justify-around mt-6 " >
                    <div>
                    <FaRegMessage />
                    </div>

                    <div>
                    <FaRetweet />
                    </div>

                    <div>
                    <FaHeart />
                    </div>

                    <div>
                    <FaUpload />
                    </div>

                 </div>


            </div>
         </div>
    </div>
    )
}

export default FeedCard;