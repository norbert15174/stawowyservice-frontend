import React from "react";
import './css/products.css';
import { Link } from "react-router-dom";

const Products = () => {

    return (
        <div className="relative products-move py-20 2xl:py-28">
            <div className="grid xl:grid-cols-3 md:grid-cols-1 gap-10 place-items-center md:pb-5 lg:pb-10 xl:pb-20">
                <div className="w-12/12 p-5">
                    <div className="product-bg-color shadow-md rounded-lg max-w-[500px] xl:h-[600px] 2xl:h-[700px] 3xl:h-[800px]">
                        <div className="p-5 py-10 xl:h-[300px] 2xl:h-[300px] 3xl:h-[300px]">
                            <Link to="/products">
                                <p className="text-white text-4xl tracking-tight mb-2 stick-font"><span className="bottom-bordered-green">KRZESŁA</span></p>
                            </Link>
                            <p className="font-normal text-white mb-3 stick-font">Wygodne siedzenie to tylko jedna z funkcji jaką może spełniać krzesło. Wyszukane kolory oraz wzory tkanin mogą służyć jako wyjątkowa ozdoba naszego wnętrza ukazująca nasz charakter.</p>
                            <Link to="/products" className="text-white bg-color-product-green focus:ring-4 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                                Zobacz ofertę
                                <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                        </div>
                        <Link to="/products" className="xl:h-[300px] 2xl:h-[400px] 3xl:h-[500px]">
                            <img className="rounded-b-lg" src="https://storage.googleapis.com/telephoners/website/home/green-chair.png" alt="" />
                        </Link>
                    </div>
                </div>
                <div className="w-12/12 p-5">
                    <div className="product-bg-color shadow-md rounded-lg max-w-[500px] xl:h-[600px] 2xl:h-[700px] 3xl:h-[800px]">
                    <div className="p-5 py-10 xl:h-[300px] 2xl:h-[300px] 3xl:h-[300px]">
                        <Link to="/products">
                                <p className="text-white text-4xl tracking-tight mb-2 stick-font"><span className="bottom-bordered-red">STOŁY</span></p>
                            </Link>
                            <p className="font-normal text-white mb-3 stick-font">Stół to element wyposażenia każdego domu. Nie musi się on jednak kojarzyć tylko z kawałkiem drewna i czterema nogami. Nasza firma wykonuje szereg nowoczesnych projektów dostosowanych do potrzeb klienta. Solidne wykonanie i wysokiej jakości materiały dają możliwość długiego użytkowania.</p>
                            <Link to="/products" className="text-white bg-color-product-red focus:ring-4 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                                Zobacz ofertę
                                <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                        </div>
                        <Link to="/products" className="xl:h-[300px] 2xl:h-[400px] 3xl:h-[500px]">
                            <img className="rounded-b-lg w-12/12" src="https://storage.cloud.google.com/stawowy-bucket/stawowy/home/table.png" alt="" />
                        </Link>
                    </div>
                </div>
                <div className="w-12/12 p-5">
                    <div className="product-bg-color shadow-md rounded-lg max-w-[500px] xl:h-[600px] 2xl:h-[700px] 3xl:h-[800px]">
                    <div className="p-5 py-10 xl:h-[300px] 2xl:h-[300px] 3xl:h-[300px]">
                        <Link to="/products">
                                <p className="text-white text-4xl tracking-tight mb-2 stick-font"><span className="bottom-bordered-gold">ŁAWY</span></p>
                            </Link>
                            <p className="font-normal text-white mb-3 stick-font">Ławy i stoliki kawowe znakomicie nadadzą się do miłego spędzenia czasu wolnego w salonie , oraz wlanej czytelni.</p>
                            <Link to="/products" className="text-white bg-color-product-gold font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                                Zobacz ofertę
                                <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                        </div>
                        <Link to="/products" className="xl:h-[300px] 2xl:h-[400px] 3xl:h-[500px]">
                            <img className="rounded-b-lg"  src="https://storage.googleapis.com/stawowy-bucket/stawowy/home/bench.png" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Products;