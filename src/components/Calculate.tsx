import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export interface CalculateProps {
    show: boolean
    title: string
    setShow: any
}

const items = [
    "Event Manager",
    "Recommendation AI",
    "Synchronous Learning",
    "24/7 Support",
    "FSL for Students",
    "SSO integration",
    "MS Office integration",
    "AI analytics",
    "Calendar",
    "Shop Manager"
]

const Calculate = ({
        show,
        title,
        setShow
    } : CalculateProps) => {
    
    return (
        <Transition appear show={show} as={Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={()=>{setShow(false)}}
            >
                <div className="min-h-screen px-4 text-center">
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <Dialog.Overlay className="fixed inset-0" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                    >
                    &#8203;
                    </span>
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                    >
                    <div className="inline-block w-full md:max-w-xl mt-20 md:mt-0 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                        <Dialog.Title
                            as="h3"
                            className="text-2xl font-mont-semibold text-gray-900 color-bg-5 px-10 py-4"
                        >
                            {title}
                        </Dialog.Title>
                        <div className="px-10 py-5 my-8">
                            <div className="mt-2">
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    <div>
                                        <ul className="list-none">
                                        {
                                            items.slice(0, 6).map((item, index) => (
                                                <li key={index} className="mb-4">
                                                    <input type="checkbox" className="mr-4" id={"items_" + index} />
                                                    <label htmlFor={"items_" + index}>{item}</label>
                                                </li>
                                            ))
                                        }
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className="list-none">
                                        {
                                            items.slice(6).map((item, index) => (
                                                <li key={index} className="mb-4">
                                                    <input type="checkbox" className="mr-4" id={"items_" + (index + 6)} />
                                                    <label htmlFor={"items_" + (index + 6)}>{item}</label>
                                                </li>
                                            ))
                                        }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 gap-2">
                                <div className="col-span-12 md:col-span-5">
                                    <div className="mb-4">
                                        <input type="text" className="w-full rounded-lg py-2 text-sm bg-blue-50 green-placeholder border-0" placeholder="Name"/>
                                    </div>
                                    <div className="mb-4">
                                        <input type="text" className="w-full rounded-lg py-2 text-sm bg-blue-50 green-placeholder border-0" placeholder="Phone"/>
                                    </div>
                                    <div>
                                        <input type="text" className="w-full rounded-lg py-2 text-sm bg-blue-50 green-placeholder border-0" placeholder="Email"/>
                                    </div>
                                </div>
                                <div className="col-span-12 md:col-span-7">
                                    <textarea className="w-full h-full rounded-lg py-3 text-sm bg-blue-50 border-0 green-placeholder" placeholder="Message"></textarea>
                                </div>
                            </div>
                            <div className="mt-4">
                                <button
                                    type="button"
                                    className="inline-flex justify-center mr-4 px-4 py-2 text-sm font-medium text-white bg-green-500 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                    onClick={()=>{setShow(false)}}
                                >
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                    onClick={()=>{setShow(false)}}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}

export default Calculate;