import { React, useEffect } from "react";
import Item from "./item";
import { useSelector } from "react-redux";
import {
    selectRealizationItems
  } from "../../static/redux/realizationSlice";

const Items = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const info = useSelector(selectRealizationItems);

    return (
        <>
            <div className="grid grid-cols-1 xl:grid-cols-2 place-items-center py-5 lg:py-20 px-4">
                {info.map((inf) => <Item key={inf.id} id={inf.id} header={inf.header} text={inf.body} photo={inf.photo} />)}
            </div>
        </>
    )
}

export default Items;