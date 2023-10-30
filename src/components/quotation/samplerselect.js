import { React, useEffect, useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { useSelector } from "react-redux";
import {
    selectSamplerItems
} from "../../static/redux/samplerSlice";


const SamplerSelect = ({ sqp, qp, select, materials }) => {

    const samplers = useSelector(selectSamplerItems);
    const selectSampler = (samplerId, name) => {
        sqp(samplerId);
        select({
            sampler: name,
        });
        setOpen(false);
    }
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="flex flex-wrap -mx-3 mb-2">
                <div className="px-3 mx-auto">
                    <button
                        type="button"
                        className="inline-block rounded bg-yellow-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-100"
                        onClick={() => setOpen(true)}>
                        Wybierz materiał
                    </button>
                </div>
            </div>
            {qp !== null ? samplers.map((sampler) => sampler.id === qp ?
                <div key={`sampler-${sampler.id}`} className="bg-neutral-900 rounded-xl max-w-[200px] mx-auto">
                    <div>
                        <div className="relative">
                            <img src={sampler.image} className="rounded-2xl" />
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
                        <div className="fixed inset-0" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto scroll-item">
                        <div className="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg px-2 py-2 lg:px-5 lg:py-5 bg-neutral-900 text-left shadow-xl transition-all min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px] min-[1200px]:max-w-[1140px] pb-4 scroll-item" style={{ overflowY: 'auto' }}>
                                    <div
                                        class="my-2 bg-neutral-900 flex flex-shrink-0 items-center justify-between rounded-t-md border-opacity-100 p-4 dark:border-opacity-50 min-[0px]:rounded-none">
                                        <h5
                                            class="text-xl font-medium leading-normal text-neutral-200">
                                            Wybierz materiał
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
                                    <div className="text-center">
                                        <div className="grid 2xl:grid-cols-8 grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4">
                                            {samplers.map((sampler) => materials.includes(sampler.type) ?
                                                <div key={`sampler-cursor-${sampler.id}`}>
                                                    <img className='cursor-pointer' onClick={() => selectSampler(sampler.id, sampler.name)} src={sampler.image}></img>
                                                    <p className="text-neutral-200 text-xs">{sampler.name}</p>
                                                </div> : null
                                            )}
                                        </div>
                                    </div>
                                </Dialog.Panel >
                            </Transition.Child >
                        </div >
                    </div >
                </Dialog >
            </Transition.Root >
            <div
                data-te-modal-init
                className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                id="exampleModalXl2"
                tabIndex="-1"
                aria-labelledby="exampleModalXl2Label"
                aria-modal="true"
                role="dialog">
                <div
                    data-te-modal-dialog-ref
                    className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px] min-[1200px]:max-w-[1140px] mb-7">
                    <div
                        className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-neutral-800 bg-clip-padding text-current shadow-lg outline-non">
                        <div
                            className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-800 border-opacity-100 p-4 dark:border-opacity-50">
                            <h5
                                className="text-xl font-medium leading-normal text-neutral-100"
                                id="exampleModalXl2Label">Wybierz wzór drewna
                            </h5>
                            <button
                                id="close2"
                                type="button"
                                className="text-neutral-100 box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                data-te-modal-dismiss
                                aria-label="Close">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="relative p-4 min-[0px]:overflow-y-auto scroll-item">
                            <div className="text-center">
                                <div className="grid 2xl:grid-cols-8 grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4">
                                    {samplers.map((sampler) =>
                                        <div key={`sampler-cursor-${sampler.id}`}>
                                            <img className='cursor-pointer' onClick={() => selectSampler(sampler.id, sampler.name)} src={sampler.image}></img>
                                            <p className="text-neutral-200 text-xs">{sampler.name}</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SamplerSelect;