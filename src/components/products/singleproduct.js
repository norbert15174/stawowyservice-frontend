import React, { useEffect } from "react";
import ItemProductContainer from "../common/itemproductcontainer";
import NavBar from "../common/navbar";
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import {
    selectProductItemsContent
  } from "../../static/redux/productsSlice";

const SingleProduct = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { id } = useParams();
    const item = useSelector(selectProductItemsContent).find(element => element.id === parseInt(id));

    return (
        <>
            <NavBar />
            {item === undefined ? null : <ItemProductContainer key={item.id + `item`} materials={item.material} type={item.type} id={item.id} header={item.header} additionalInformations={item.additionalInfromations} content={item.content} photos={item.items}/>}
        </>
    )

}

export default SingleProduct;