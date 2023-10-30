import { React, useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    selectProductItems
} from "../../static/redux/productsSlice";


const ProductContainer = () => {

    const products = useSelector(selectProductItems);


    const [chairs, setChairs] = useState(false);
    const [tables, setTables] = useState(false);
    const [benches, setBenches] = useState(false);
    const [filter, setFilter] = useState(false);

    const [selectedProducts, setSelectedProducts] = useState([]);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];
        setSelectedProducts(storedProducts);
    }, []);

    const addProduct = (productId) => {
        const updatedSelectedProducts = [...selectedProducts, productId];
        setSelectedProducts(updatedSelectedProducts);
        localStorage.setItem('selectedProducts', JSON.stringify(updatedSelectedProducts));
    };

    const removeProduct = (productId) => {
        const updatedSelectedProducts = selectedProducts.filter(id => id !== productId);
        setSelectedProducts(updatedSelectedProducts);
        localStorage.setItem('selectedProducts', JSON.stringify(updatedSelectedProducts));
    };

    return (
        <div className="w-12/12 my-10">
            {/* <p className="my-5 w-11/12 px-5 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-1">
                <button
                    className={`${chairs ? `bg-yellow-900` : `bg-neutral-900`} inline-block rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-yellow-900`}
                    type="button"
                    onClick={() => setChairs(!chairs)}>
                    Stoły
                </button>
                <button
                    className={`${tables ? `bg-yellow-900` : `bg-neutral-900`} inline-block rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-yellow-900`}
                    type="button"
                    onClick={() => setTables(!tables)}>
                    Krzesła
                </button>
                <button
                    className={`${benches ? `bg-yellow-900` : `bg-neutral-900`} inline-block rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-yellow-900`}
                    type="button"
                    onClick={() => setBenches(!benches)}>
                    Ławy
                </button>

                <button
                    className={`${filter ? `bg-yellow-900` : `bg-neutral-900`} inline-block rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-yellow-900`}
                    data-te-collapse-init
                    href="#multiCollapseExample1"
                    type="button"
                    aria-expanded="false"
                    onClick={() => setFilter(!filter)}
                    aria-controls="multiCollapseExample1">Filtr</button>

            </p>
            <div
                className="multi-collapse !visible hidden rounded-lg shadow-lg w-12/12 mx-4 mb-5"
                data-te-collapse-item
                id="multiCollapseExample1">
                <div
                    className="block rounded-lg p-6 bg-neutral-900 text-neutral-50">

                </div>
            </div> */}

            <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-1 md:mx-4">

                {products.map((product) =>
                    <div key={product.id} className={`relative flex flex-col items-center justify-center w-12/12 mx-1 md:mx-3 my-2 ${product.position === 'vertical' ? 'col-span-2' : ''}`}>
                        <div className="w-full">
                            <div className="w-full xs:h-[500px] h-[550px] md:h-[550px] lg:h-[550px] bg-neutral-900 shadow-lg rounded-xl p-2 md:p-4">
                                <div className="flex flex-col ">
                                    <div className="">
                                        <div className="relative h-62 w-full mb-3">
                                            <div className="absolute flex flex-col top-0 right-0 p-3">
                                                <button onClick={() => selectedProducts.includes(product.id) ? removeProduct(product.id) : addProduct(product.id)} className={`transition ease-in duration-200 bg-neutral-800  hover:text-yellow-700 shadow hover:shadow-md ${selectedProducts.includes(product.id) ? 'text-yellow-700' : 'text-gray-500'}  rounded-full w-8 h-8 text-center p-1`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <Link to={`/products/` + product.id}>
                                                <img src={product.image} alt="Just a flower" className="cursor-pointer w-full h-[350px] md:h-[350px] lg:h-[350px] object-fill rounded-2xl" />
                                            </Link>
                                        </div>
                                        <div className="flex-auto justify-evenly">
                                            <div className="flex flex-wrap ">
                                                <div className="w-full flex-none text-sm flex items-center text-gray-600">
                                                    <span className="text-yellow-700  whitespace-nowrap text-xs font-bold">Czas oczekiwania:</span><span className="ml-1 text-gray-400 text-xs">{product.time}</span>
                                                </div>
                                                <div className="flex items-center w-full justify-between min-w-0 ">
                                                    <h2 className="text-sm md:text-lg mr-auto cursor-pointer text-gray-200 hover:text-yellow-700 truncate ">{product.name}</h2>
                                                </div>
                                            </div>
                                            <Link to={`/products/` + product.id}
                                                className={`mt-5 bg-yellow-700 inline-block rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-yellow-900`}
                                                type="button">
                                                Zobacz produkt
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </div>

    )
}

export default ProductContainer;