import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useSelector } from "react-redux";
import {
    selectSamplerItems
} from "../../static/redux/samplerSlice";

const Sampler = ({ materials }) => {

    const samplers = useSelector(selectSamplerItems);
    const [showSampler, setShowSampler] = useState(false);

    return (
        <div>
            <button
                type="button"
                className="inline-block rounded bg-neutral-900 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-yellow-900 focus:bg-yellow-900 "
                onClick={() => setShowSampler(true)}>
                Próbnik kolorów drewna
            </button>
            <Transition.Root show={showSampler} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setShowSampler}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
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
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-neutral-900 text-left shadow-xl transition-all w-full h-screen scroll-item" style={{ overflowY: 'auto' }}>
                                    <div
                                        class="bg-neutral-900 flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-black border-opacity-100 p-4 dark:border-opacity-50 min-[0px]:rounded-none">
                                        <h5
                                            class="text-xl font-medium leading-normal text-neutral-200">
                                            Próbnik kolorów drewna
                                        </h5>
                                        <button
                                            onClick={() => setShowSampler(false)}
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
                                    <div class="flex items-center bg-yellow-800 text-white text-sm font-bold px-4 py-3" role="alert">
                                        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
                                        <p>Wybór koloru będzie możliwy podczas wyceny produktu</p>
                                    </div>
                                    <div class="relative p-4 min-[0px]:overflow-y-auto scroll-item">
                                        <p class="text-center">
                                            <div className="grid 2xl:grid-cols-12 grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4">
                                                {samplers.map((sampler) => materials.includes(sampler.type) ?
                                                    <div>
                                                        <img src={sampler.image}></img>
                                                        <p className="text-neutral-200 text-xs">{sampler.name}</p>
                                                    </div> : null
                                                )}
                                            </div>
                                        </p>
                                    </div>
                                    <div
                                        class="bg-neutral-900 mt-auto flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-black border-opacity-100 p-4 dark:border-opacity-50 min-[0px]:rounded-none">
                                        <button
                                            onClick={() => setShowSampler(false)}
                                            type="button"
                                            className="inline-block rounded bg-yellow-900 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-neutral-600">
                                            Zamknij
                                        </button>
                                    </div>
                                </Dialog.Panel >
                            </Transition.Child >
                        </div >
                    </div >
                </Dialog >
            </Transition.Root >
        </div >
    )
}

export default Sampler;