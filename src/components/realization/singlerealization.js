import React, { useEffect } from "react";
import ItemContentPhotos from "../common/itemcontentphotos";
import NavBar from "../common/navbar";
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import {
    selectRealizationItemContent
} from "../../static/redux/realizationSlice";

import {
    useNavigate,
} from 'react-router-dom';

const SingleRealization = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const navigate = useNavigate();
    const { id } = useParams();
    const item = useSelector(selectRealizationItemContent).find(element => element.id === parseInt(id));

    return (
        <>
            <NavBar />
            <div className="w-11/12 mx-auto pt-5">
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
                        <Link to="/realization" className="hover:text-yellow-700"> Realizacje </Link>
                        &gt;
                        <Link className="text-yellow-700"> {item.header}</Link>
                    </p>
                </div>
            </div>
            {item === undefined ? null : <ItemContentPhotos key={item.id + `item`} header={item.header} additionalInformations={item.additionalInfromations} content={item.content} photos={item.items} />}
        </>
    )

}

export default SingleRealization;