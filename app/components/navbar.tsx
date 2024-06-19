const navbar=()=>{
    return(
        <section className="flex flex justify-between bg-white text-black w-full h-16 items-center">
            <img src="" alt="mylogo" className="ml-4"/>
            <div>
               <ul className="flex w-64 justify-between">
                    <li>
                        Home
                    </li> 
                    <li>
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