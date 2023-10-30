import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <nav className="bg-neutral-900 md:hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link to="/">
                                    <img
                                        className="h-36 w-36"
                                        src="https://storage.googleapis.com/stawowy-bucket/stawowy/common/Logo2.svg"
                                        alt="Workflow"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <a
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-neutral-900 inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-zinc-900"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-9 w-9"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-9 w-9"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </a>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-200 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-200 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {() => (
                        <div className="md:hidden" id="mobile-menu">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <div
                                    href="#"
                                    className="text-gray-300 hover:bg-zinc-900 hover:text-white block px-3 md:px-2 py-2 rounded-md text-2xl font-medium stick-font text-center"
                                >
                                    <Link to="/">HOME</Link>
                                </div>
                                <div
                                    href="#"
                                    className="text-gray-300 hover:bg-zinc-900 hover:text-white block px-3 md:px-2 py-2 rounded-md text-2xl font-medium stick-font text-center"
                                >
                                    <Link to="/quotation">WYCENA</Link>
                                </div>
                                <div
                                    href="#"
                                    className="text-gray-300 hover:bg-zinc-900 hover:text-white block px-3 md:px-2 py-2 rounded-md text-2xl font-medium stick-font text-center"
                                >
                                    <Link to="/products">PRODUKTY</Link>
                                </div>

                                <div
                                    className="text-gray-300 hover:bg-zinc-900 hover:text-white block px-3 md:px-2 py-2 rounded-md text-2xl font-medium stick-font text-center"
                                >
                                    <Link to="/realization">REALIZACJE</Link>
                                </div>

                                <div
                                    href="#"
                                    className="text-gray-300 hover:bg-zinc-900 hover:text-white block px-3 md:px-2 py-2 rounded-md text-2xl font-medium stick-font text-center"
                                >
                                    <Link to="/contact">KONTAKT</Link>
                                </div>
                                <div
                                    className="text-gray-300 hover:text-white px-3 py-5 rounded-md text-lg font-medium stick-font place-content-center flex items-center"
                                >
                                    <a className="p-2 hover:bg-zinc-900 rounded">
                                        <FaInstagram className="inline-block h-10 w-10" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
            <nav className="bg-neutral-900 hidden md:block md:p-4 lg:p-6 xl:p-8 bg-opacity-80">
                <div className="max-w-7xl mx-auto px-2 md:px-4 lg:px-7">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link to="/">
                                    <img
                                        className="md:h-28 md:w-28 xl:h-40 xl:w-40 2xl:h-52 2xl:w-52"
                                        src="https://storage.googleapis.com/stawowy-bucket/stawowy/common/Logo2.svg"
                                        alt="Workflow"
                                    />
                                </Link>
                            </div>
                            <div className="hidden md:block md:mx-10 xl:mx-32">
                                <div className="md:ml-0 xl:ml-10 flex items-baseline space-x-4">
                                    <div
                                        href="#"
                                        className="text-gray-300 hover:bg-zinc-900 hover:text-white px-10 py-2 rounded-md lg:text-2xl xl:text-4xl md:text-xl stick-font font-medium"
                                    >
                                        <Link to="/">HOME</Link>
                                    </div>

                                    <div href="#"
                                        className="text-gray-300 hover:bg-zinc-900 hover:text-white md:px-3 xl:px-4 py-2 rounded-md lg:text-2xl xl:text-4xl md:text-xl stick-font font-medium">
                                        <Link to="/quotation">WYCENA</Link>
                                    </div>
                                    <div href="#"
                                        className="text-gray-300 hover:bg-zinc-900 hover:text-white md:px-3 xl:px-4 py-2 rounded-md lg:text-2xl xl:text-4xl md:text-xl stick-font font-medium">
                                        <Link to="/products">PRODUKTY</Link>
                                    </div>

                                    <div href="#"
                                        className="text-gray-300 hover:bg-zinc-900 hover:text-white md:px-3 xl:px-4 py-2 rounded-md lg:text-2xl xl:text-4xl md:text-xl stick-font font-medium">
                                        <Link to="/realization">REALIZACJE</Link>
                                    </div>

                                    <div href="#"
                                        className="text-gray-300 hover:bg-zinc-900 hover:text-white md:px-3 xl:px-4 py-2 rounded-md lg:text-2xl xl:text-4xl md:text-xl  stick-font font-medium">
                                        <Link to="/contact">KONTAKT</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;