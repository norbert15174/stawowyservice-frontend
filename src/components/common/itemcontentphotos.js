import React, { useState } from "react";
import PhotoSlider from "./photoslider";

const ItemContentPhotos = ({ photos, header, content, additionalInformations }) => {
    const [show, setShow] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(0);

    const setData = (value) => {
        setSelectedPhoto(value);
        setShow(true);
    }

    return (
        <>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4 w-11/12 lg:w-10/12 mx-auto pt-5`}>
                <div className="w-full">
                    <img
                        key="mainPhoto"
                        alt="gallery"
                        className={`block h-full max-h-[600px] rounded-lg object-cover object-center cursor-pointer mx-auto`}
                        src={photos[0].photo}
                        onClick={() => setData(0)}
                    />
                </div>
                <div className="mb-8">
                    <div className="text-white font-bold text-xl mb-2">{header}</div>
                    <p className="text-neutral-400 text-base">{content}</p>

                    {additionalInformations.map(item => <>
                        <p className="my-2 space-y-1 md:space-x-1 md:space-y-0">
                            <button
                                className="inline-block rounded bg-neutral-900 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-yellow-900 focus:bg-yellow-900 "
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
                        <div>
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
                    </>)}

                </div>
            </div>
            <section className="overflow-hidden w-12/12 text-neutral-700">
                <div className="w-screen mx-auto px-2 lg:px-20 py-5 lg:pt-12">
                    <div className="-m-1 flex flex-wrap md:-m-2">
                        <div className="flex w-full flex-wrap">
                            {photos.map((item, index) => index === 0 ? null : item.type === 'horizontal' ?
                                <div className="w-3/12 h-3/12 lg:w-2/12 p-1 md:p-2">
                                    <img
                                        key={`photo` + item.id}
                                        alt="gallery"
                                        className="block w-full h-full max-h-[500px] rounded-lg object-cover object-center cursor-pointer"
                                        src={item.photo}
                                        onClick={() => setData(index)}
                                    />
                                </div>
                                :
                                <div className="w-4/12 h-3/12 lg:w-3/12 p-1 md:p-2">
                                    <img
                                        key={`photo` + item.id}
                                        alt="gallery"
                                        className="block w-full h-full max-h-[500px] rounded-lg object-cover object-center cursor-pointer"
                                        src={item.photo}
                                        onClick={() => setData(index)}
                                    />
                                </div>)}
                        </div>
                    </div>
                </div>
            </section>
            {show === true ? <PhotoSlider items={photos} show={show} showFunction={setShow} selectedPhoto={selectedPhoto} /> : false}
        </>
    )

}

export default ItemContentPhotos;