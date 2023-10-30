import React from 'react';
import NavBar from '../common/navbar';
import ProductContainer from './productcontainer';
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import {
    useNavigate,
} from 'react-router-dom';

const ProductMain = () => {
    const navigate = useNavigate();

    return (<>
        <NavBar />
        <div className="w-12/12 mx-auto pt-5 px-5 pb-10">
            <div className=" w-full">
                <button onClick={() => navigate(-1)}
                    className={`float-left mt-5 ml-1 bg-neutral-900 inline-block rounded px-3 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-yellow-900`}
                    type="button">
                    <BiArrowBack className="float-left h-4 w-4 font-bold mr-1" />
                    <p className="float-left">POWRÓT</p>
                </button>

                <p className="float-left text-neutral-500 pt-2.5 mt-4 text-md ml-3 lg:block hidden">
                    <Link to="/" className="hover:text-yellow-700">Start </Link>
                    &gt;
                    <Link to="/products" className="text-yellow-700"> Produkty </Link>
                </p>
            </div>
        </div>
        <ProductContainer />
    </>)
}

export default ProductMain;