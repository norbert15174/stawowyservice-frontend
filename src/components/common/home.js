import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import zIndex from "@material-ui/core/styles/zIndex";


function Home() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className="h-screen v-screen mb-20" style={{
                backgroundImage: `url(https://storage.googleapis.com/stawowy-bucket/stawowy/home/home.png)`, backgroundPosition: `center`,
                backgroundRepeat: `no-repeat`, backgroundSize: `cover`,
                zIndex: `-100`
            }}>
                <div className="h-60 hidden md:block">

                </div>
                <nav className="bg-black md:hidden" style={{position: `relative`, zIndex: `1000`}}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-20">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img
                                        className="h-36 w-36"
                                        src="https://storage.googleapis.com/stawowy-bucket/stawowy/common/stawood-logo-2.svg"
                                        alt="Workflow"
                                    />
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden" style={{zIndex: `100`}}>
                                <a
                                    onClick={() => setIsOpen(!isOpen)}
                                    type="button"
                                    className="bg-black inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-zinc-900"
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
                        {(ref) => (
                            <div className="md:hidden" id="mobile-menu">
                                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
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
                        <div class="flex justify-center">
                            <a href="https://www.facebook.com/profile.php?id=61553199275300" target="_blank" class="mr-6 text-neutral-600 dark:text-neutral-200">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-4 w-4"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/_stawood_/" target="_blank" class="mr-6 text-neutral-600 dark:text-neutral-200">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-4 w-4"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Transition>
                </nav>
                <div className="bg-black hidden md:block md:p-4 lg:p-6 xl:p-8 bg-opacity-80" style={{zIndex: 10000}}>
                    <div className="max-w-7xl mx-auto px-2 md:px-4 lg:px-7" style={{zIndex: 1000}}>
                        <div className="flex items-center justify-between h-16" style={{zIndex: `100`}}>
                            <div className="flex items-center" style={{zIndex: 10000}}>
                                <div className="flex-shrink-0">
                                    <img
                                        className="md:h-28 md:w-28 xl:h-40 xl:w-40 2xl:h-52 2xl:w-52"
                                        src="https://storage.googleapis.com/stawowy-bucket/stawowy/common/stawood-logo-2.svg"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="hidden md:block md:mx-10 xl:mx-32" style={{zIndex: 1000}}>
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
                </div>
            </div>
        </div>
    );
}

export default Home;