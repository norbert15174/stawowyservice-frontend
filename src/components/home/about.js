import React from "react";
import './css/products.css';
import { IoMdQuote } from "react-icons/io";

const About = () => (
    <div className="h-screen v-screen" style={{
        backgroundImage: `url(https://storage.googleapis.com/stawowy-bucket/stawowy/home/salon.png)`, backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`, backgroundSize: `cover`
    }}>

        <div className="grid grid-cols-1 gap-3 place-items-center h-screen">
            <div className="w-11/12 sm:w-11/12 md:w-11/12 lg:w-10/12 xl:w-8/12 sm:h-5/6 h-3/4 lg:h-4/6 flex justify-center bg-black bg-opacity-80 py-5 px-2 xl:p-10 font-normal text-white mb-3 stick-font text-base sm:text-xl md:text-xl 2xl:text-2xl 3xl:text-3xl">
                <div className="inline-block text-center">
                    <IoMdQuote className=" mx-auto p-1 lg:p-2 w-10 h-10 lg:w-12 lg:h-12 mb-2 mt-2 md:mb-8 md:mt-8 lg:mb-12 lg:mt-12 xl:mb-15 xl:mt-15" />
                    ,,Szukasz unikatowych mebli? Dobrze trafiłeś! Wykonujemy indywidualne zamówienia na stoły, krzesła oraz ławy.
Stół to element wyposażenia każdego domu. Nie musi się on jednak kojarzyć tylko z kawałkiem drewna i czterema nogami. Nasza firma wykonuje szereg nowoczesnych projektów dostosowanych do potrzeb klienta. Solidne wykonanie i wysokiej jakości materiały dają możliwość długiego użytkowania. 
Wygodne siedzenie to tylko jedna z funkcji jaką może spełniać krzesło. Wyszukane kolory oraz wzory tkanin mogą służyć jako wyjątkowa ozdoba naszego wnętrza ukazująca nasz charakter.
Ławy i stoliki kawowe znakomicie nadadzą się do miłego spędzenia czasu wolnego w salonie lub czytelni.”
                </div>

            </div>
        </div>

    </div>
)

export default About;