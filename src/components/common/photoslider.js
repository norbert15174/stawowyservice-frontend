import { useEffect, useState, useRef, React } from "react";
import * as te from 'tw-elements';

const PhotoSlider = ({ show, showFunction, selectedPhoto, items }) => {

    const item = useRef(null);

    useEffect(() => {
        const element = item.current;
        element.click();
    }, []);

    return (
        <div className="top-0 right-0 bg-opacity-90 fixed w-full h-full bg-black z-10">
            <div
                onClick={() => showFunction(!show)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white cursor-pointer absolute top-5 right-10 z-50">
                <svg
                    className="block h-5 w-5 md:h-9 md:w-9"
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
            </div>
            <button
                type="hidden"
                ref={item}
                className="text-white lg-text"
                data-te-target="#photoSlider"
                data-te-slide-to={selectedPhoto}
                data-te-carousel-active></button>
            <div
                className="fixed top-1/2 -translate-y-1/2 w-full ">
                <div
                    id="photoSlider"
                    className="relative"
                    data-te-carousel-init
                    data-te-carousel-slide>
                    <div className="relative h-screen w-full overflow-hidden after:clear-both after:block after:content-['']">

                        {items.map((item, index) => index === 0 ?
                            <div
                                className="relative float-left -mr-[100%] hidden w-full h-screen transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                                data-te-carousel-active
                                data-te-carousel-item
                                style={{ backfaceVisibility: `hidden` }}>
                                <div
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-cover bg-no-repeat"
                                    style={{ backgroundPosition: `50%` }}>
                                    <img
                                        src={item.photo}
                                        className="mx-auto block max-h-[calc(100vh-74px)] max-w-[calc(100vw-20px)] my-auto" />
                                </div>
                            </div>
                            :
                            <div
                                className="relative float-left -mr-[100%] hidden w-full h-screen transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                                data-te-carousel-item
                                style={{ backfaceVisibility: `hidden` }}>
                                <div
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-cover bg-no-repeat"
                                    style={{ backgroundPosition: `50%` }}>
                                    <img
                                        src={item.photo}
                                        className="mx-auto block max-h-[calc(100vh-74px)] max-w-[calc(100vw-20px)] my-auto" />
                                </div>
                            </div>
                        )}
                    </div>
                    <button
                        className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                        type="button"
                        data-te-target="#photoSlider"
                        data-te-slide="prev">
                        <span className="inline-block h-8 w-8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="h-6 w-6">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </span>
                    </button>
                    <button
                        className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                        type="button"
                        data-te-target="#photoSlider"
                        data-te-slide="next">
                        <span className="inline-block h-8 w-8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="h-6 w-6">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>)

}

export default PhotoSlider;