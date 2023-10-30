import React from 'react';
import NavBar from '../common/navbar';
import Items from './items';
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import {
    useNavigate,
} from 'react-router-dom';


const RealizationMain = () => {
    const navigate = useNavigate();

    return (
        <>
            <NavBar />
            <Items />
        </>
    )
}

export default RealizationMain;