import { useEffect, useState } from 'react';

import { Transition } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {logout, login, selectUser} from "../redux/userSlice";

import classNames from "classnames";
import Assets from "../assets/assets";

const navigation = [
  { name: "Home", to: "/", current: true, exact: true },
  { name: "What is Nu", to: "/what-is-nu", current: false },
  { name: "How it looks", to: "/how-it-looks", current: false },
  { name: "Life long learning", to: "/life-learning", current: false },
  { name: "Pricing", to: "/pricing", current: false },
];

const Navbar = () => {
  const user = useAppSelector(selectUser)
  const dispatch = useAppDispatch()
  const [isSticky, setSticky] = useState(false)
  const [isDrop, setDrop] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      if (window.innerWidth >= 768) {
        return
      }
      let navBar = document.querySelector(".main-layout>nav>div")
      if (navBar && navBar.getBoundingClientRect().height < window.pageYOffset) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    })
    window.document.body.addEventListener('click', (event) => {
      let navBar = document.querySelector(".main-layout>nav")
      let barRect = navBar?.getBoundingClientRect()
      if (!(barRect && barRect.left + barRect.width > event.x && barRect.top + barRect.height > event.y)) {
        setDrop(false)
      }
    })
  }, [])

  return (
    <nav className={classNames({"py-4 md:pt-8 fixed w-full h-auto md:static z-50 bg-transparent":true, "bg-white":isSticky})}>
      <div className="relative px-4 lg:container lg:mx-auto h-10 md:h-16">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <NavLink className="flex items-center" to="/" onClick={() => setDrop(false)}>
              <img
                className="inline-block mr-4 w-11 md:w-20"
                src={Assets.images.svgLogo}
                alt="Nu Logo"
              />
              <span className="font-mont-semibold text-2xl md:text-4xl">nu.</span>
            </NavLink>
          </div>
          <div className="hidden md:flex items-center mx-4 space-x-3 lg:space-x-8">
            {navigation.map((item, index) => (
              <NavLink
                key={index}
                exact={item.exact}
                to={item.to}
                activeClassName="font-mont-semibold"
                className={classNames({
                  "text-center text-gray-900 text-base lg:text-lg hover:font-bold":
                    true,
                })}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {!user.logined ? 
          <div className="hidden md:flex items-center">
            <button className="border border-grey-100 active:bg-indigo-800 rounded-xl px-4 py-2 w-24 text-base lg:text-lg lg:w-32 mr-4 focus:outline-none focus:ring-2 focus:ring-indigo-900">
              Sign Up
            </button>
            <button className="border border-grey-100 bg-black text-white active:bg-indigo-800 rounded-xl px-4 py-2 w-24 text-base lg:text-lg lg:w-32 hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-900"
              /*onClick={()=>dispatch(login({name:'Sandra K.', job:'student'}))}*/>
              Sign In
            </button>
          </div>
          :
          <div className="hidden md:flex items-center">
            <div className="flex-shrink-0 flex flex-col items-center justify-center mr-6">
              <div className="font-mont-semibold">{user.name}</div>
              <div className="text-sm">{user.job}</div>
            </div>
            <img src={Assets.images.userAvatar} alt="User Avatar" className="flex-shrink-0 w-14 h-14"
              onClick={()=>dispatch(logout())}/>
          </div>
          }

          <div className="flex items-center md:hidden">
            <div onClick={() => setDrop(!isDrop)} className="disclosure-btn inline-flex items-center justify-center p-2 rounded-md text-indigo-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <MenuIcon className={classNames({"block h-6 w-6":true, "transform rotate-90":isDrop})} aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
      
      <Transition
        show={isDrop}
        enter="transform transition duration-[400ms]"
        enterFrom="opacity-0 rotate-[-120deg] scale-50"
        enterTo="opacity-100 rotate-0 scale-100"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="opacity-100 rotate-0 scale-100 "
        leaveTo="opacity-0 scale-95 "
      >
        <div className=".disclosure-panel md:hidden static bg-white px-4 pt-4 w-full">
        {!user.logined ? 
          <div className="flex items-center">
            <button className="flex-1 border border-grey-100 active:bg-indigo-800 rounded-xl px-4 py-2 text-base mr-2 focus:outline-none focus:outline-none focus:ring-2 focus:ring-indigo-900">
              Sign Up
            </button>
            <button className="flex-1 border border-grey-100 active:bg-indigo-800 rounded-xl px-4 py-2 text-base ml-4 bg-black text-white focus:outline-none focus:outline-none focus:ring-2 focus:ring-indigo-900"
              onClick={()=>dispatch(login({name:'Sandra K.', job:'student'}))}>
              Sign In
            </button>
          </div>
          :
          <div className="flex items-center">
              <img src={Assets.images.userAvatar} alt="User Avatar" className="flex-shrink-0 w-14 h-14 mr-6"
                onClick={()=>dispatch(logout())}/>
              <div className="flex-shrink-0 flex flex-col justify-center">
                <div className="font-mont-semibold">{user.name}</div>
                <div className="text-sm">{user.job}</div>
              </div>
            </div>
          }
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item, index) => (
              <NavLink
                key={index}
                exact={item.exact}
                to={item.to}
                activeClassName="font-mont-semibold"
                onClick={() => setDrop(false)}
                className={classNames({
                  "text-grey-900 hover:bg-gray-300 block px-1 py-2 rounded-md text-lg": true,
                })}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
