import Navbar from "./components/navbar"
import Footer from "./components/footer"

export default function Home(){

  return(
    <div className="w-full bg-white">
      <Navbar/>
      <section className="flex flex-col items-center justify-center h-[800px] ">
          <h1 className="text-4xl font-bold">
              Welcome to the fixel ecommerce website
          </h1>
          <h2 className="text-2xl font-">
              Relax and Eplore
          </h2>
          <button className="bg-black text-white rounded-md px-2 py-1">Eplore
          </button>

          <img src="/images/Drag.svg" className="h-[500px]  mt-10" alt="explore"/>
      </section>
      <div className="h-20">
            <h3 className="text-2xl font-bold">
                Heading
            </h3>
            <p>
                Subheading to introduce testimonials
            </p>
        </div>
       <section className="flex w-full justify-around">

              <div className=" flex flex-col  border-2 rounded-lg shadow-2xl h-36 w-1/4  ">
                  <div className=" flex items-center h-1/2 m">
                    <h1 className=" text-lg font-bold ml-4">&quot; A terrific piece of praise &quot;</h1>
                  </div>
                  
                  <div className="flex flex-row block ml-4">
                      <div className="w-12">
                        <img src="/icons/my icon.png" alt="my icon" className="w-[40px] h-[40px] rounded-full" />
                      </div>
                      <div>
                        <p className="font-bold">
                          Name
                        </p>
                        <p>
                          Description
                        </p>
                      </div>
                  </div>
              </div>
              <div className=" flex flex-col  border-2 shadow-2xl h-36 w-1/4 rounded-lg ">
                  <div className="h-1/2 ">
                      <h1 className="flex items-center mt-2 text-lg font-bold ml-4">&quot; A terrific piece of praise &quot;</h1>
                  </div>
                  
                  <div className="flex flex-row block ml-4">
                      <div className="w-12">
                        <img src="/icons/my icon2.svg" alt="my icon" className="w-[40px] h-[40px] rounded-full" />
                      </div>
                      <div>
                        <p className="font-bold">
                          Name
                        </p>
                        <p>
                          Description
                        </p>
                      </div>
                  </div>
              </div>
              <div className=" flex flex-col   shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)] h-36 w-1/4 rounded-lg">
                  <div className="h-1/2 ">
                      <h1 className="flex items-center mt-2 text-lg font-bold ml-4">&quot; A terrific piece of praise &quot;</h1>
                  </div>
                  
                  <div className="flex flex-row block ml-4">
                      <div className="w-12">
                        <img src="/icons/my icon3.svg" alt="my icon" className="w-[40px] h-[40px] rounded-full" />
                      </div>
                      <div>
                        <p className="font-bold">
                          Name
                        </p>
                        <p>
                          Description
                        </p>
                      </div>
                  </div>
              </div>
        </section>
        <Footer/>
    </div>
  )
}
    