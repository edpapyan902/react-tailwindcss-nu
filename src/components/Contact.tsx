import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export interface ContactProps {
    show: boolean
    setShow: any
}

const Contact = ({
        show,
        setShow
    } : ContactProps) => {
    
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
                            className="text-xl md:text-2xl font-mont-semibold text-gray-900 color-bg-5 px-10 py-4"
                        >
                            discover nu. request your access now
                        </Dialog.Title>
                        <div className="px-10 py-5 my-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <div className="mb-4">
                                    <input type="text" className="w-full rounded-lg py-2 text-sm bg-blue-50 green-placeholder border-0" placeholder="Name"/>
                                </div>
                                <div className="mb-4">
                                    <input type="text" className="w-full rounded-lg py-2 text-sm bg-blue-50 green-placeholder border-0" placeholder="Email"/>
                                </div>
                                <div className="mb-4 md:col-span-2">
                                    <textarea className="w-full h-full rounded-lg py-3 text-sm bg-blue-50 border-0 green-placeholder" placeholder="Message"></textarea>
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
                            </div>
                            <div className="mt-10">
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

export default Contact;