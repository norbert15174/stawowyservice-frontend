import React, { useEffect } from "react";
import Realization from "../common/navbar";
import ItemContentPhotos from "../common/itemcontentphotos";


const ItemContent = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Realization />
            <ItemContentPhotos />
        </>
    )

}

export default ItemContent;