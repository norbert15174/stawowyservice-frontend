import { React, useEffect, useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { useSelector } from "react-redux";
import {
    selectProductItems
} from "../../static/redux/productsSlice";

const ProductSelect = ({ sqp, qp, sqps, select, gm }) => {

    const products = useSelector(selectProductItems);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [open, setOpen] = useState(false);
    const [nonSelected, setNonSelected] = useState(false);
    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];
        setSelectedProducts(storedProducts);
        setNonSelected(true);
    }, []);

    const removeProduct = (productId) => {
        const updatedSelectedProducts = selectedProducts.filter(id => id !== productId);
        setSelectedProducts(updatedSelectedProducts);
        localStorage.setItem('selectedProducts', JSON.stringify(updatedSelectedProducts));
    };

    const selectProduct = (productId, image, name, productMaterial) => {
        sqp(productId);
        select({
            image,
            productName: name,
        });
        if (productMaterial.length !== 0) {
            gm(productMaterial);
            sqps(null);
        } else {
            sqps("NON-MATERIAL");
            gm([]);
        }

        setOpen(false);
    }


    return (
        <>
            <div className='w-full'>
                {nonSelected && selectedProducts.length === 0 ?
                    <div className="min-w-[60vw] max-w-[800px] my-5 mx-auto bg-orange-600 rounded text-white border border-orange-700 px-4 py-3 relative" role="alert">
                        <strong className="font-bold">Nie wybrano ulubionych produktów!</strong> Przejdź do zakładki produkty i polub wybrany produkt, aby móc kontynuować.
                    </div>
                    : <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="px-3 mx-auto">
                            <button
                                type="button"
                                className="inline-block rounded bg-yellow-700 px-6 lg:px-4 pb-2 pt-2.5 lg:pt-2 text-xs font-medium uppercase leading-normal text-neutral-100"
                                onClick={() => setOpen(true)}>
                                Wybierz produkt z ulubionych
                            </button>
                        </div>
                    </div>}
            </div>
            {qp !== null ? products.map((product) => product.id === qp ?
                <div key={`product-${product.id}`} className="bg-neutral-900 rounded-xl max-w-[200px] mx-auto">
                    <div>
                        <div className="relative">
                            <img src={product.image} className="cursor-pointer rounded-2xl" />
                        </div>
                    </div>
                </div> : null
            ) : null
            }

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto scroll-item">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-neutral-900 text-left shadow-xl transition-all min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px] min-[1200px]:max-w-[1140px] min-h-[80vh] mb-7 scroll-item" style={{ overflowY: 'auto' }}>
                                    <div
                                        class="bg-neutral-900 flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-black border-opacity-100 p-4 dark:border-opacity-50 min-[0px]:rounded-none">
                                        <h5
                                            class="text-xl font-medium leading-normal text-neutral-200">
                                            Wybierz produkt
                                        </h5>
                                        <button
                                            onClick={() => setOpen(false)}
                                            type="button"
                                            class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none text-neutral-200">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                class="h-6 w-6">
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="grid xs:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-1 md:mx-4">
                                        {selectedProducts && products.map((product) => selectedProducts.includes(product.id) ?
                                            <div key={product.id} className={`relative flex flex-col items-center justify-center w-12/12 mx-1 md:mx-3 py-5 my-2 ${product.position === 'vertical' ? 'col-span-2' : ''}`}>
                                                <div className="w-full">
                                                    <div className="w-full bg-neutral-700 shadow-lg rounded-xl p-3 md:p-4">
                                                        <div className="flex flex-col ">
                                                            <div className="">
                                                                <div className="relative h-62 w-full mb-3">
                                                                    <div className="absolute flex flex-col top-0 right-0 p-3">
                                                                        <button onClick={() => removeProduct(product.id)} className={`transition ease-in duration-200 bg-neutral-800  shadow hover:shadow-md ${selectedProducts.includes(product.id) ? 'text-yellow-700' : 'text-gray-500'}  rounded-full w-8 h-8 text-center p-1`}>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                                            </svg>
                                                                        </button>
                                                                    </div>
                                                                    <img onClick={() => selectProduct(product.id, product.image, product.name, product.material)} src={product.image} alt="Just a flower" className="cursor-pointer w-full h-[250px] sm:h-[300px] md:h-[320px] lg:h-[300px] object-fill rounded-2xl" />
                                                                </div>
                                                                <div className="flex-auto justify-evenly">
                                                                    <div className="flex flex-wrap ">
                                                                        <div className="flex items-center w-full justify-between min-w-0 ">
                                                                            <h2 onClick={() => selectProduct(product.id, product.image, product.name, product.material)} className="text-sm md:text-lg mr-auto cursor-pointer text-gray-200 truncate ">{product.name}</h2>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div> : null
                                        )}
                                    </div>
                                </Dialog.Panel >
                            </Transition.Child >
                        </div >
                    </div >
                </Dialog >
            </Transition.Root >
        </>
    )
}

export default ProductSelect;