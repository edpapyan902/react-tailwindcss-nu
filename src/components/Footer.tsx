import { NavLink } from "react-router-dom";

import Assets from "../assets/assets";

const navigation = [
    { name: "Home", to: "/", current: true, exact: true },
    { name: "What is Nu", to: "/what-is-nu", current: false },
    { name: "How it looks", to: "/how-it-looks", current: false },
    { name: "Life long learning", to: "/life-long-learning", current: false },
    { name: "Pricing", to: "/pricing", current: false },
];

const Footer = () => {
    return (
        <div className="bg-black text-white">
            <div className="px-4 lg:container lg:mx-auto pt-10">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="flex items-center justify-between">
                            <div className="flex-shrink-0">
                                <div className="flex items-center">
                                    <img
                                        className="inline-block mr-4 w-11"
                                        src={Assets.images.svgLogo}
                                        alt="Nu Logo"
                                    />
                                    <span className="font-mont-semibold text-2xl">nu.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-3">
                        <h6 className="font-mont-semibold text-sm mt-10">Address</h6>
                        <p className="mt-3 text-xs">
                            nu. AG <br/>
                            Stampfenbachstrasse 57 <br/>
                            8006 Zürich <br/>
                            Switzerland
                        </p>

                        <h6 className="font-mont-semibold text-sm mt-10">Email</h6>

                        <p className="mt-3 text-xs">
                            info@nu-lxp.ch
                        </p>
                    </div>
                    <div className="col-span-12 md:col-span-3">
                        <div className="mt-10">
                            {navigation.map((item, index) => (
                                <NavLink
                                    key={index}
                                    exact={item.exact}
                                    to={item.to}
                                    activeClassName="font-mont-semibold"
                                    className="block py-2 text-xs">
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 mt-10 md:mt-0">
                        <h6 className="font-mont-semibold text-sm">Get In Touch</h6>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
                            <div>
                                <input type="text" className="w-full rounded-lg py-3 text-sm bg-gray-900" placeholder="Name"/>
                            </div>
                            <div>
                                <input type="text" className="w-full rounded-lg py-3 text-sm bg-gray-900" placeholder="Email"/>
                            </div>
                            <div className="md:col-span-2">
                                <textarea className="w-full rounded-lg py-3 text-sm bg-gray-900 h-20"></textarea>
                            </div>
                            <div className="md:col-span-2 flex flex-col md:flex-row md:justify-center">
                                <div className="flex items-center">
                                    <input type="radio" className="mr-2" id="student" name="type" value="1"/>
                                    <label htmlFor="student">Student</label>
                                </div>
                                <div className="flex items-center md:mx-3">
                                    <input type="radio" className="mr-2" id="user" name="type" value="2" />
                                    <label htmlFor="user">User</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="radio" className="mr-2" id="publisher" name="type" value="3" />
                                    <label htmlFor="publisher">Publisher</label>
                                </div>
                            </div>
                            <div className="md:col-span-2">
                                <button className="transition delay-150 duration-300 ease-in-out transform hover:scale-105 w-full rounded-lg py-3 text-sm gradient-bg-3 focus:outline-none">Send a Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-20 text-center text-sm">
                © 2021 nu. AG, All Rights Reserved
            </div>
        </div>
    );
};

export default Footer;