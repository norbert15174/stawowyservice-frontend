import React, { useEffect, useState } from "react";
import PhotoSlider from "./photoslider";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import {
    useNavigate,
} from 'react-router-dom';
import Sampler from '../common/sampler';

const ItemProductContainer = ({ id, materials, type, photos, header, additionalInformations }) => {
    const [show, setShow] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(0);

    const setData = (value) => {
        setSelectedPhoto(value);
        setShow(true);
    }

    const navigate = useNavigate();

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
        <>
            <div className="w-11/12 lg:w-10/12 mx-auto pt-5">
                <div className=" w-full">
                    <button onClick={() => navigate(-1)}
                        className={`float-left mt-5 ml-1 bg-neutral-900 inline-block rounded px-3 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-yellow-900`}
                        type="button">
                        <BiArrowBack className="float-left h-4 w-4 font-bold mr-1" />
                        <p className="float-left">POWRÓT</p>
                    </button>

                    <div className="float-left text-neutral-500 pt-2.5 mt-4 text-md ml-3 lg:block hidden">
                        <Link to="/" className="hover:text-yellow-700">Start </Link>
                        &gt;
                        <Link to="/products" className="hover:text-yellow-700"> Produkty </Link>
                        &gt;
                        <Link className="text-yellow-700"> {header}</Link>
                    </div>

                    <button
                        onClick={() => selectedProducts.includes(id) ? removeProduct(id) : addProduct(id)}
                        className={`mt-5 ${selectedProducts.includes(id) ? 'bg-yellow-900' : 'bg-neutral-900'} inline-block rounded p-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out float-right`}
                        type="button">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                </div>

                <div className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-4 pt-5`}>
                    <div className="float-left text-neutral-500 text-xs ml-3 lg:hidden block">
                        <Link to="/" className="hover:text-yellow-700">Start </Link>
                        &gt;
                        <Link to="/products" className="hover:text-yellow-700"> Produkty </Link>
                        &gt;
                        <Link className="text-yellow-700"> {header}</Link>
                    </div>
                    <div className="w-full lg:grid hidden lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                        {photos.map((item, index) =>
                            <div
                                className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                <img
                                    key={`photo${index}`}
                                    alt="gallery"
                                    className={`hover:scale-125 transition-all block h-full max-h-[500px] rounded-lg object-cover object-center cursor-pointer p-1 ${item.type === 'horizontal' ? null : 'col-span-2'}`}
                                    src={item.photo}
                                    onClick={() => setData(index)}
                                />
                                <a>
                                    <div
                                        onClick={() => setData(index)}
                                        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                                        style={{ backgroundColor: `rgba(251, 251, 251, 0.2)` }}></div>
                                </a>
                            </div>
                        )
                        }

                    </div>
                    <div className="w-full lg:hidden block">
                        <img
                            key="mainPhoto"
                            alt="gallery"
                            className={`block h-full max-h-[600px] rounded-lg object-cover object-center cursor-pointer mx-auto`}
                            src={photos[0].photo}
                            onClick={() => setData(0)}
                        />
                    </div>
                    <div className="mb-8">
                        <div className="text-yellow-700 font-bold text-xl mb-2">{header}</div>

                        {additionalInformations.map(item => item.key !== null ? <>
                            <p className="my-2 space-y-1 md:space-x-1 md:space-y-0">
                                <button
                                    className="inline-block rounded bg-neutral-900 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-yellow-900 "
                                    type="button"
                                    data-te-collapse-init
                                    data-te-target={`#${item.key}`}
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    aria-expanded="false"
                                    aria-controls={`${item.key}`}>
                                    {item.name}
                                </button>
                            </p>
                            <div className="my-2">
                                <div
                                    className="multi-collapse !visible hidden rounded-lg shadow-lg"
                                    data-te-collapse-item
                                    id={`${item.key}`}>
                                    <div
                                        className="block rounded-lg p-6 bg-neutral-900 text-neutral-50">
                                        {item.plaintext ? item.plaintext : null}
                                        {item.values.map(value => <p><span className="text-yellow-700">{value.label}: </span>{value.value}</p>)}
                                    </div>
                                </div>
                            </div>
                        </> : null)}
                        {materials.length > 0 ? <div className="mb-2 space-y-1 md:space-x-1 md:space-y-0"><Sampler materials={materials} /></div> : null}
                        {type === 'chair' ? <a href="http://magab.pl/pl/oferta/178-tkaniny" target="_blank"
                            className="mb-2 space-y-1 md:space-x-1 md:space-y-0 inline-block rounded bg-neutral-900 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-yellow-900 ">
                            Tkaniny
                        </a> : null}
                    </div>
                </div>
                <section className="overflow-hidden w-12/12 text-neutral-700 lg:hidden block">
                    <div className="w-screen mx-auto px-2 lg:px-20 py-5 lg:pt-12">
                        <div className="-m-1 flex flex-wrap md:-m-2">
                            <div className="flex w-full flex-wrap">
                                {photos.map((item, index) => index === 0 ? null : item.type === 'horizontal' ?
                                    <div className="w-3/12 h-3/12 lg:w-2/12 p-1 md:p-2">
                                        <div
                                            className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
                                            data-te-ripple-init
                                            data-te-ripple-color="light">
                                            <img
                                                key={`photo` + item.id}
                                                alt="gallery"
                                                className="block w-full h-full max-h-[500px] rounded-lg object-cover object-center cursor-pointer"
                                                src={item.photo}
                                                onClick={() => setData(index)}
                                            />
                                            <a>
                                                <div
                                                    onClick={() => setData(index)}
                                                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                                                    style={{ backgroundColor: `rgba(251, 251, 251, 0.2)` }}></div>
                                            </a>
                                        </div>
                                    </div>
                                    :
                                    <div className="w-4/12 h-3/12 lg:w-3/12 p-1 md:p-2">
                                        <div
                                            className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
                                            data-te-ripple-init
                                            data-te-ripple-color="light">
                                            <img
                                                key={`photo` + item.id}
                                                alt="gallery"
                                                className="block w-full h-full max-h-[500px] rounded-lg object-cover object-center cursor-pointer"
                                                src={item.photo}
                                                onClick={() => setData(index)}
                                            />
                                            <a>
                                                <div
                                                    onClick={() => setData(index)}
                                                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                                                    style={{ backgroundColor: `rgba(251, 251, 251, 0.2)` }}></div>
                                            </a>
                                        </div>
                                    </div>)}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {show === true ? <PhotoSlider items={photos} show={show} showFunction={setShow} selectedPhoto={selectedPhoto} /> : false}
        </>
    )

}

export default ItemProductContainer;