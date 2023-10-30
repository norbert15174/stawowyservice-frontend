import { React, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Realization = () => {

    const item = useRef(null);

    useEffect(() => {
        const element = item.current;
        element.click();
    }, []);

    return (

        <div>
            <div className="w-full px-10 py-10 bg-neutral-800 text-center text-white">
                <div className="w-full md:w-8/12 md:mx-auto lg:w-4/12 px-3 pb-5">
                    <fieldset className="border-t border-neutral-300">
                        <legend className="mx-auto px-4 text-neutral-300 text-3xl lg:text-4xl italic stick-font">O nas</legend>
                    </fieldset>
                </div>
                <p className="w-12/12 md:w-8/12 lg:w-6/12 lg:text-xl  md:mx-auto">
                Kalwaria Zebrzydowska to polskie zagłębie meblowe - właśnie z tego miejsca wywodzi się nasza firma „Stawowy”, nazwa ta nie jest przypadkowa, ponieważ już trzecie pokolenie naszej rodziny zajmuje się produkcją mebli. To co nas wyróżnia to przede wszystkim spore doświadczenie oraz meble tworzone według potrzeb klienta. Nasze produkty odgrywają ważną role w kształtowaniu wyglądu wnetrz, ponieważ stanowią istotny element dekoracyjny i praktyczny każdego pomieszczenia. Posiadasz wysłużone meble? Nie musisz ich wyrzucać!  Dzięki wykonanej przez nas renowacji nadaj im drugie życie. Odnowimy dla Państwa wszystko z drewna litego.

                </p>

            </div>
            <div
                id="carouselExampleCaptions"
                className="relative"
                data-te-carousel-init
                data-te-carousel-slide>
                <div
                    className="absolute right-0 bottom-0 left-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
                    data-te-carousel-indicators>
                    <button
                        ref={item}
                        type="button"
                        data-te-target="#carouselExampleCaptions"
                        data-te-slide-to="0"
                        data-te-carousel-active
                        className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        aria-current="true"
                        aria-label="Slide 1"></button>
                    <button
                        type="button"
                        data-te-target="#carouselExampleCaptions"
                        data-te-slide-to="1"
                        className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        aria-label="Slide 2"></button>
                    <button
                        type="button"
                        data-te-target="#carouselExampleCaptions"
                        data-te-slide-to="2"
                        className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        aria-label="Slide 3"></button>
                </div>
                <div
                    className="relative w-full h-[600px] md:h-[600px] lg:h-screen overflow-hidden after:clear-both after:block after:content-['']">
                    <div
                        className="relative float-left -mr-[100%] hidden w-full h-[600px] md:h-[600px] lg:h-screen transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-te-carousel-active
                        data-te-carousel-item
                        style={{ backfaceVisibility: 'hidden' }}>
                        <img
                            src="https://storage.googleapis.com/stawowy-bucket/stawowy/realization/lukasz/lukasz1.jpg"
                            className="object-cover w-full h-[600px] md:h-[600px] lg:h-screen"
                            alt="..." />
                        <div className="absolute bottom-0 pb-14 pt-6 md:py-20 text-center text-white md:block w-screen bg-black bg-opacity-80">
                            <p className="text-xs md:text-md lg:text-lg xl:text-lg mb-4">
                            Blat stołu wykonany z okleiny naturalnej – palisander, wykończony lakierem poliuretanowym – półpołyskowym. Podstawa stołu to metal lakierowany proszkowo w kolorze czarny mat. 
                            </p>
                            <Link to="/realization/5"
                                className={`bg-yellow-700 inline-block rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-yellow-900`}
                                type="button">
                                Przejdz do realizacji
                            </Link>
                        </div>
                    </div>
                    <div
                        className="relative float-left -mr-[100%] hidden w-full h-[600px] md:h-[600px] lg:h-screen transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-te-carousel-item
                        style={{ backfaceVisibility: 'hidden' }}>
                        <img
                            src="https://storage.googleapis.com/stawowy-bucket/stawowy/realization/zator/zator1.jpg"
                            className="object-cover w-full h-[600px] md:h-[600px] lg:h-screen"
                            alt="..." />
                        <div className="absolute bottom-0 pb-14 pt-6 md:py-20 text-center text-white md:block w-screen bg-black bg-opacity-80">
                            <p className="text-xs md:text-md lg:text-lg xl:text-lg mb-4">
                            Blat stołu wykonany z litego drewna dębowego, wykończony lakierem - poliuretanowym półpołyskowym , spód stołu metal lakierowany proszkowo w kolorze czarny mat.
                            </p>
                            <Link to="/realization/3"
                                className={`bg-yellow-700 inline-block rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-yellow-900`}
                                type="button">
                                Przejdz do realizacji
                            </Link>
                        </div>
                    </div>
                    <div
                        className="relative float-left -mr-[100%] hidden w-full h-[600px] md:h-[600px] lg:h-screen transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-te-carousel-item
                        style={{ backfaceVisibility: 'hidden' }}>
                        <img
                            src="https://storage.googleapis.com/stawowy-bucket/stawowy/realization/ksenia/ksenia1.jpg"
                            className="object-cover w-full h-[600px] md:h-[600px] lg:h-screen"
                            alt="..." />
                        <div className="absolute bottom-0 pb-14 pt-6 md:py-20 text-center text-white md:block w-screen bg-black bg-opacity-80">
                            <p className="text-xs md:text-md lg:text-lg xl:text-lg mb-4">
                            Stół i krzesła wykonane z drewna bukowego , wykończone lakierem poliuretanowym białym – półmatowym.
                            </p>
                            <Link to="/realization/2"
                                className={`bg-yellow-700 inline-block rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-yellow-900`}
                                type="button">
                                Przejdz do realizacji
                            </Link>
                        </div>
                    </div>
                </div>
                <button
                    className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                    type="button"
                    data-te-target="#carouselExampleCaptions"
                    data-te-slide="prev">
                    <span className="inline-block h-8 w-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </span>
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
                </button>
                <button
                    className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                    type="button"
                    data-te-target="#carouselExampleCaptions"
                    data-te-slide="next">
                    <span className="inline-block h-8 w-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </span>
                    <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Realization;