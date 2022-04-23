import {useState} from "react";
import {useAppSelector} from "../redux/hooks";
import {selectUser} from "../redux/userSlice";

import Calculate from '../components/Calculate';
import Contact from '../components/Contact';

import Assets from "../assets/assets";
import Card from "../components/Card";

const Home = () => {
  const user = useAppSelector(selectUser)

  let [showModal, setShowModal] = useState(false)
  let [calcTitle, setCalcTitle] = useState("")
  let [showContact, setShowContact] = useState(false)

  return (
    <>
      <div className="mx-4 lg:container lg:mx-auto">
        <div className="grid grid-cols-12 gap-1 items-center mt-16 md:mt-36">
          <div className="md:hidden order-1 col-span-12">
            <h1 className="font-mont-semibold leading-normal text-4xl">
              Learn on your scheldule from any device
            </h1>
          </div>
          <div className="order-3 md:order-1 col-span-12 md:col-span-6 xl:col-span-5 lg:-mt-20">
            <h1 className="hidden md:block font-mont-semibold leading-normal text-6xl">
              Learn on your scheldule from any device
            </h1>
            <div className="mt-4 lg:mt-8">
              Due to changing requirements of our global economy and society, schools are forced to become innovative and to face new challenges.
            </div>
              <a href="#LearnMore">
                <button className="mt-4 lg:mt-8 px-6 py-3 rounded-xl bg-indigo-900 active:bg-indigo-800 text-white focus:outline-none">
                  Learn More
                </button>
              </a>
          </div>
          <div className="order-2 md:order-2 col-span-12 md:col-span-6 xl:col-span-6 xl:col-start-7">
            <img className="transition delay-150 duration-300 ease-in-out transform hover:scale-105" src={user.logined ? Assets.images.homeIntro2 : Assets.images.homeIntro1} alt="Home Intro" />
          </div>
        </div>
            
        <h1 id="LearnMore" className="font-mont-semibold leading-normal text-4xl md:text-6xl text-center mt-24 md:mt-36">
          What is <span className="gradient-text-1 mr-4">nu.</span>?
        </h1>

        <div className="flex justify-center mt-24 flex-col items-center md:items-start md:flex-row">
          <div className="transition delay-150 duration-300 ease-in-out transform hover:scale-105 flex flex-1 flex-col items-center md:max-w-xs md:mt-20 md:mr-16">
            <img src={Assets.images.iconBook} className="w-24 h-24" alt="Icon Book"/>
            <h5 className="font-mont-semibold text-2xl md:text-3xl text-center mt-10">Adaptive Learning AI</h5>
            <p className="text-center mt-5">
              Nu. works with nu's Adaptive Learning AI developed jointly with a University
            </p>
          </div>
          <div className="transition delay-150 duration-300 ease-in-out transform hover:scale-105 flex flex-1 flex-col items-center md:max-w-xs mt-24 md:mt-36">
            <img src={Assets.images.iconSkill} className="w-24 h-24" alt="Icon Skill"/>
            <h5 className="font-mont-semibold text-2xl md:text-3xl text-center mt-10">Skill-Based Learning</h5>
            <p className="text-center mt-5">
              We have implemented a Skill-Based Learning Experience, perfectly matched to the classroom of tomorrow
            </p>
          </div>
          <div className="transition delay-150 duration-300 ease-in-out transform hover:scale-105 flex flex-1 flex-col items-center md:max-w-xs mt-24 md:mt-0 md:ml-16">
            <img src={Assets.images.iconExpert} className="w-24 h-24" alt="Icon Expert"/>
            <h5 className="font-mont-semibold text-2xl md:text-3xl text-center mt-10">Developed by experts</h5>
            <p className="text-center mt-5">
              The first E-Learning HUB developed jointly with a University for the education sector with courses provided by the best Universities
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-24 md:mt-36">
          <div className="order-2 md:order-1 flex mt-20 -ml-32 md:mt-0 md:ml-0">
            <div className="flex-1 rounded-tl-full rounded-tr-full border-grey-400 border-2 border-b-0 border-dashed max-w-sm px-8 pt-8">
              <div className="rounded-tl-full rounded-tr-full gradient-bg-1 relative h-144 md:h-180">
                <img src={Assets.images.homeWhatisNu} alt="What is Nu" className="drop-shadow-lg absolute top-48 left-1/3 w-screen-80 max-w-max md:w-144"/>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 max-w-md">
            <h5 className="font-mont-semibold text-3xl">
              Learn on your scheldule from any device
            </h5>
            <p className="mt-5">
              Personalized and individual learning - only on nu.
            </p>
            <p className="mt-5">
              With our platform, we enable schools to take the first step towards competence orinated teaching. 
            </p>
          </div>
        </div>
      </div>

      <div className="gradient-bg-2 h-32 w-full"></div>

      <div className="flex flex-col items-center">
        <h1 className="font-mont-semibold leading-normal text-4xl md:text-5xl text-center mt-24 md:mt-36">
          How it looks
        </h1>
        <p className="mt-10 text-center">
          Contrary to popular belief, Lorem Ipsum is not simply random text.
        </p>
        <div className="flex justify-center relative">
          <img src={Assets.images.homeHowitlook} alt="How it look" className="mt-10 w-3/4 max-w-max filter drop-shadow-lg"/>
          <img src={Assets.images.line1} className="absolute top-1/2 left-0 w-full" style={{zIndex:-1}} alt="Back line"/>
          <img src={Assets.images.line2} className="absolute top-1/2 left-0 transform -translate-y-20 w-full" style={{zIndex:-1}} alt="Back line"/>
        </div>
      </div>
      
      <div className="mx-4 lg:container lg:mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 mt-24 md:mt-36">
          <div className="order-2 md:col-span-8 lg:col-span-6 md:order-1 flex flex-col md:block mt-16 md:mt-0">
            <div className="flex flex-col md:relative w-full md:h-116">
              <div className="order-1 relative md:absolute md:top-10 md:left-1/3 md:transform md:-translate-x-1/2 h-80 md:h-auto">
                <div className="absolute right-1/4 h-auto md:static w-48">
                  <svg className="w-20 h-20 absolute top-1/2 left-0 transform -translate-x-1/2"
                    style={{'zIndex':-1}}
                    viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="68.5" cy="68.5" r="53" stroke="#CA77C4" strokeWidth="31"/>
                  </svg>
                  <Card
                    avatar={Assets.images.userAvatar1}
                    content="It helped me a lot during my time at university. Thanks to Nu, I was able to file notes in a much more structured way and improve the result accordingly. Thanks"
                    rating={Assets.images.rating5}
                    name="John Smith"
                    content2="student" />
                </div>
              </div>
              
              <div className="order-2 relative md:absolute md:top-0 md:right-1/3 md:transform md:translate-x-1/2 h-52 md:h-auto">
                <div className="absolute left-1/4 h-auto md:static w-40">
                  <svg className="w-20 h-20 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"
                    style={{'zIndex':-1}}
                    viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="68.5" cy="68.5" r="68.5" fill="#FDD650"/>
                  </svg>
                  <Card
                    mark="4,9/5"
                    rating={Assets.images.rating5}
                    content2="Since my school nu used I could improve my grades by 20%, thanks for the degree" />
                </div>
              </div>

              <div className="order-4 relative md:absolute md:bottom-0 md:left-1/3 md:transform md:-translate-x-1/3 h-36 md:h-auto">
                <div className="absolute left-1/4 h-auto md:static w-52">
                  <Card
                    content2="With Nu's class overview, I know exactly where my students need support. It helps me in my teaching." />
                  <svg className="w-16 h-16 absolute left-0 top-1/1 transform -translate-x-2/3 -translate-y-1/3" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="44.5" cy="44.5" r="41.5" stroke="#FDD650" strokeWidth="6"/>
                  </svg>
                </div>
              </div>

              <div className="order-3 relative md:absolute md:bottom-1/3 md:right-1/3 md:transform md:translate-x-2/3 md:translate-y-2/3 h-96 md:h-auto">
                <div className="absolute right-1/4 h-auto md:static w-48">
                  <svg className="w-32 h-28 absolute top-0 left-0 transform -translate-x-1/3 -translate-y-1/3" viewBox="0 0 191 162" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 160L32.4682 126.846C36.8281 122.102 43.7308 120.672 49.6165 123.294L81.9473 137.697C90.0303 141.298 99.4576 137.155 102.272 128.766L121.264 72.158C123.985 64.0463 132.93 59.8505 140.907 62.9436L145.765 64.8269C153.252 67.7297 161.697 64.2218 164.923 56.8687L189 2" stroke="#6359CC" strokeWidth="4" strokeLinecap="round"/>
                  </svg>

                  <Card
                    avatar={Assets.images.userAvatar2}
                    content="Competency-based teaching is the future of learning. Thanks to Nu, I was able to implement this perfectly. Nu has paved the way for us to live this concept."
                    rating={Assets.images.rating5}
                    name="Sandra Robbins"
                    content2="Manager" />

                  <svg className="w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/3 translate-y-1/3"
                    style={{'zIndex':-1}}
                    viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="44.5" cy="44.5" r="44.5" fill="#5E4ECD"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:col-span-4 lg:col-span-6 md:order-2 max-w-md">
            <h5 className="font-mont-semibold text-3xl">
              Our highlighted students revealing
            </h5>
            <p className="mt-5">
              Nu supports students, teachers as well as educational institutions.
            </p>
            <p className="mt-5">
              See for yourself from our reviews. Students benefit from an individualized learning approach that supports career development. Teachers can support students through individualized learning where it is needed.
            </p>
            <p className="mt-5">
              Educational institutions could be supported by Nu. We would be happy to accompany them in this process and tell you more.
            </p>
            <button className="mt-4 lg:mt-8 px-6 py-3 rounded-xl bg-black active:bg-indigo-800 text-white hover:bg-indigo-600 focus:outline-none"
              onClick={()=>setShowContact(true)}>
              Try Now
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 md:mt-36">
          <div className="md:col-span-7 md:px-4">
            <h1 className="font-mont-semibold leading-normal text-4xl md:text-5xl mt-24 md:mt-36">
              How do you use it?
            </h1>
            <div className="transition delay-150 duration-300 ease-in-out transform hover:scale-105 rounded-3xl gradient-bg-3 w-full p-8 pb-10 md:pb-12 text-white md:max-w-md mt-7 md:mt-40">
              <h1 className="font-mont-semibold leading-normal text-3xl md:text-4xl">
                LXP?
              </h1>
              <p className="mt-10 text-sm">
                A Learning Experience Platform (LXP) is a learner-centric software designed to create a more personalised learning experiences and helps users to discover new learning and digital education opportunities. It leverages the combination of learning content from multiple sources, as well as by using artificial intelligence.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-5 md:px-4">
            <div className="transition delay-150 duration-300 ease-in-out transform hover:scale-105 rounded-3xl gradient-bg-4 w-full p-8 pb-10 md:pb-12 text-white md:max-w-sm">
              <h1 className="font-mont-semibold leading-normal text-3xl md:text-4xl">
                Why we are different
              </h1>
              <p className="mt-10 text-sm">
                Compared to other LXP platforms, nu offers significantly more functions that are adapted to the latest educational standards. We worked closely with renowned experts in this field in order to thoroughly implement our idea into a sophisticated software which is going to remarkably influence the level of education all around the world.
              </p>
            </div>
          </div>
          <div className="mt-24 md:col-span-12 flex justify-end">
            <img src={Assets.images.homeHowtouse} alt="How do you use it"
              className="md:w-3/4 transform -translate-y-32 md:-translate-y-64"/>
          </div>
        </div>
        
        <h1 className="font-mont-semibold leading-normal text-4xl md:text-5xl text-center">
          Affordable Prices
        </h1>
        <p className="text-center mt-10">
          Contrary to popular belief, Lorem Ipsum is not simply random text.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-20 mb-20">
            <div className="md:p-2 lg:px-10 flex justify-center">
                <div className="transition delay-150 duration-300 ease-in-out transform hover:scale-105 relative rounded-xl shadow-2xl bg-gray-100 lg:max-w-sm p-10">
                    <img src={Assets.images.markFree} className="w-24 absolute top-0 right-0 transform -translate-y-5" alt="nu free"/>
                    <div className="flex justify-between items-baseline md:max-w-md">
                        <h2 className="font-mont-bold text-2xl md:text3xl">nu.edu</h2>
                    </div>
                    <ul className="list-none mt-10 mb-5 lg:max-w-sm">
                        <li>
                            <img src={Assets.images.iconEdu1} className="icon lg mr-10" alt="Edu"/>
                            <span>Unlimited missions</span>
                        </li>
                        <li>
                            <img src={Assets.images.iconEdu2} className="icon lg mr-10" alt="Edu"/>
                            <span>Mission Store</span>
                        </li>
                        <li>
                            <img src={Assets.images.iconEdu3} className="icon lg mr-10" alt="Edu"/>
                            <span>Basic Analytics</span>
                        </li>
                        <li>
                            <img src={Assets.images.iconEdu4} className="icon lg mr-10" alt="Edu"/>
                            <span>LMS</span>
                        </li>
                        <li>
                            <img src={Assets.images.iconEdu5} className="icon lg mr-10" alt="Edu"/>
                            <span>Skill learning</span>
                        </li>
                        <li>
                            <img src={Assets.images.iconEdu6} className="icon lg mr-10" alt="Edu"/>
                            <span>Event and online learning</span>
                        </li>
                        <li>
                            <img src={Assets.images.iconEdu7} className="icon lg mr-10" alt="Edu"/>
                            <span>Social</span>
                        </li>
                        <li>
                            <img src={Assets.images.iconEdu8} className="icon lg mr-10" alt="Edu"/>
                            <span>Mission editor</span>
                        </li>
                        <li>
                            <img src={Assets.images.iconEdu9} className="icon lg mr-10" alt="Edu"/>
                            <span>Content - CDN</span>
                        </li>
                        <li>
                            <img src={Assets.images.iconEdu10} className="icon lg mr-10" alt="Edu"/>
                            <span>Feature requests</span>
                        </li>
                        <li>
                            <button className="w-full py-3 bg-black active:bg-indigo-800 text-white rounded-xl focus:outline-none"
                              onClick={()=>{
                                setCalcTitle("nu.edu")
                                setShowModal(true)
                              }}>Calculate</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="md:p-2 lg:px-10 mt-16 md:mt-0 flex justify-center">
                <div className="transition delay-150 duration-300 ease-in-out transform hover:scale-105 relative rounded-xl shadow-2xl bg-gray-100 lg:max-w-sm p-10">
                  <img src={Assets.images.markLxp} className="w-24 absolute top-0 right-0 transform -translate-y-5" alt="nu lxp"/>
                    <div className="flex justify-between items-baseline md:max-w-md">
                        <h2 className="font-mont-bold text-2xl md:text3xl">nu.lxp</h2>
                    </div>

                    <ul className="list-none mt-10 mb-5 lg:max-w-sm">
                        <li>
                            <img src={Assets.images.iconLxp1} className="icon lg mr-10" alt="Edu"/>
                            <span>Event Manager</span>
                        </li>
                        <li>
                            <img src={Assets.images.iconLxp2} className="icon lg mr-10" alt="Lxp"/>
                            <span>Recommendation AI</span>
                        </li>
                        <li>
                            <img src={Assets.images.iconLxp3} className="icon lg mr-10" alt="Lxp"/>
                            <span>Synchronous Learning</span>
                        </li>
                        <li>
                            <img src={Assets.images.iconLxp4} className="icon lg mr-10" alt="Lxp"/>
                            <span>24/7 Support</span>
                        </li>
                        <li>
                            <img src={Assets.images.iconLxp5} className="icon lg mr-10" alt="Lxp"/>
                            <span>FSL for Students</span>
                        </li>
                        <li>
                            <img src={Assets.images.iconLxp6} className="icon lg mr-10" alt="Lxp"/>
                            <span>SSO integration</span>
                        </li>
                        <li>
                            <img src={Assets.images.iconLxp7} className="icon lg mr-10" alt="Lxp"/>
                            <span>MS Office integration</span>
                        </li>
                        <li>
                            <img src={Assets.images.iconLxp8} className="icon lg mr-10" alt="Lxp"/>
                            <span>AI analytics</span>
                        </li>
                        <li>
                            <img src={Assets.images.iconLxp9} className="icon lg mr-10" alt="Lxp"/>
                            <span>Calendar</span>
                        </li>
                        <li>
                            <img src={Assets.images.iconLxp10} className="icon lg mr-10" alt="Lxp"/>
                            <span>Shop Manager</span>
                        </li>
                        <li>
                            <button className="w-full py-3 bg-black active:bg-indigo-800 text-white rounded-xl focus:outline-none"
                              onClick={()=>{
                                setCalcTitle("nu.lxp")
                                setShowModal(true)
                              }}>Calculate</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <Calculate show={showModal} title={calcTitle} setShow={setShowModal}></Calculate>
        <Contact show={showContact} setShow={setShowContact}></Contact>

      </div>
    </>
  );
};

export default Home;

