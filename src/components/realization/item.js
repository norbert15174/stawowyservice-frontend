import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, header, text, photo }) => (
    <div className="w-12/12 lg:h-98 xl:flex p-0 mt-10 xl:mt-0 xl:p-5">
        <div className="h-64 sm:h-64 md:h-80 xl:h-full w-12/12 xl:w-6/12 flex-none bg-cover rounded-t xl:rounded-t-none xl:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${photo})` }}>
        </div>
        <div className="xl:h-full w-12/12 xl:w-6/12 border-r border-b border-l border-neutral-900 xl:border-l-0 xl:border-t lg:border-neutral-900 bg-neutral-800 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
                <div className="text-white font-bold text-xl mb-2">{header}</div>
                <p className="text-neutral-400 text-base">{text}</p>
            </div>
            <Link to={`/realization/` + id}
                className="inline-block rounded text-center bg-neutral-900 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-yellow-900">
                Przejdz do realizacji
            </Link>
        </div>
    </div>
)

export default Item;