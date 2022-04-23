import {useState} from "react";
import Assets from "../assets/assets";
import Contact from "../components/Contact";

const HowItLooks = () => {
    
  const [showContact, setShowContact] = useState(false)

    return (
        <>
        <div className="px-4 lg:container lg:mx-auto">
          <h1 className="font-mont-semibold leading-normal text-4xl md:text-6xl text-center mt-24 md:mt-36">
            How it looks
          </h1>
          <div className="px-4 mt-24 flex justify-center">
            <img src={Assets.images.homeHowitlook} className="md:w-3/4" alt="What is nu"/>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-24 md:mt-36 gap-10">
            <div className="px-4 order-2 md:order-1">
              <img src={Assets.images.homeWhatisNu} alt="Has been the industry since is" />
            </div>
            <div className="order-1 md:order-1 mt-20 md:mt-0">
              <h5 className="font-mont-semibold text-3xl">
                Has been the industry since is
              </h5>
              <p className="mt-5">
                Typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. 
              </p>
              <button className="mt-4 lg:mt-8 px-6 py-3 rounded-xl bg-black active:bg-indigo-800 text-white hover:bg-indigo-600 focus:outline-none"
                onClick={()=>setShowContact(true)}>
                Try Now
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-24 md:mt-36 mb-20">
            <div>
              <h5 className="md:mt-32 font-mont-semibold text-3xl">
                Has been the indu since is
              </h5>
              <p className="mt-5">
                Typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. 
              </p>
              <button className="mt-4 lg:mt-8 px-6 py-3 rounded-xl bg-black active:bg-indigo-800 text-white hover:bg-indigo-600 focus:outline-none"
                onClick={()=>setShowContact(true)}>
                Try Now
              </button>
            </div>
            <div>
              <img src={Assets.images.homeNotes} alt="Has been the industry since is" />
            </div>
          </div>
        </div>
        <Contact show={showContact} setShow={setShowContact}></Contact>
      </>
    );
};

export default HowItLooks;