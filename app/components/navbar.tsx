const navbar=()=>{
    return(
        <section className="flex flex justify-between bg-white text-black w-full h-16 items-center">
            <div className="w-1/2">
                <video src="/videos/apexa1.mp4" autoPlay loop className="h-56"/>
            </div>
            
            <div className="w-1/3 ">
               <ul className="flex  justify-between">
                    <li className="font-bold text-lg">
                        Home
                    </li> 
                    <li className="font-bold text-lg"> 
                        About Us
                    </li>
                    <button className="bg-orange-500 text-white px-2 py-1 mr-4 rounded">
                        Contact Us
                    </button>
               </ul>
                
            </div>
            
        </section>
        
    )
}
export default navbar;