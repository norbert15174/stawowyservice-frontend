import { React, useState } from 'react';
import QuotationProduct from './quotationproduct';
import QuotationContact from './quotationcontact';

const Quotation = () => {

    const [productType, setProductType] = useState(null);
    const [showMessage, setShowMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    return (
        <>
            <div className='min-h-[calc(100vh-500px)]'>
                <div className="text-center">
                </div>
                {showMessage === true ?
                    <div className="max-w-[calc(1200px)] my-5 mx-auto bg-blue-500 text-white border border-blue-600 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Wiadomość została wysłana!</strong>
                        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                            <svg onClick={() => setShowMessage(false)} className="fill-current h-6 w-6 text-white" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                        </span>
                    </div> : null}
                {showErrorMessage === true ?
                    <div className="max-w-[calc(1200px)] my-5 mx-auto bg-red-500 text-white border border-red-600 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Przepraszamy, nie udało się wysłać wiadomości, spróbuj ponownie później.</strong>
                        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                            <svg onClick={() => setShowErrorMessage(false)} className="fill-current h-6 w-6 text-white" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                        </span>
                    </div> : null}
                <ul className='grid grid-cols-1 place-items-center p-5'>
                    <div className='grid grid-cols-2 gap-2 items-center place-items-center'>
                        <li>
                            <input onClick={() => setProductType('PRODUCT')} type="radio" id="selected" name="product-type" value="selected" className="hidden peer" required></input>
                            <label htmlFor="selected" className="inline-flex items-center w-42 md:w-72 lg:w-96 justify-between p-3 lg:p-5 h-32 text-gray-100 bg-gray border border-gray-200 rounded-lg cursor-pointer peer-checked:border-yellow-900 peer-checked:bg-yellow-900 peer-checked:text-gray-100 hover:text-gray-100 hover:bg-yellow-900">
                                <div className="block">
                                    <div className="w-full xl:text-2xl md:text-lg text-lg font-semibold">Produkt ze strony</div>
                                    <div className="w-full xl:text-md md:text-sm text-xs">Spośród produktów polubionych na stronie</div>
                                </div>
                            </label>
                        </li>
                        <li>
                            <input onClick={() => setProductType('CUSTOM')} type="radio" id="custom" name="product-type" value="custom" className="hidden peer"></input>
                            <label htmlFor="custom" className="inline-flex items-center w-42 md:w-72 lg:w-96 justify-between p-3 lg:p-5 h-32 text-gray-100 bg-gray border border-gray-200 rounded-lg cursor-pointer peer-checked:border-yellow-900 peer-checked:bg-yellow-900 peer-checked:text-gray-100 hover:text-gray-100 hover:bg-yellow-900">
                                <div className="block">
                                    <div className="w-full xl:text-2xl md:text-lg text-lg font-semibold">Własny produkt</div>
                                    <div className="w-full xl:text-md md:text-sm text-xs">Jeżeli nie znalazłeś produktu na stronie</div>
                                </div>
                            </label>
                        </li>
                    </div>
                </ul>
                {productType && productType === 'PRODUCT' && <QuotationProduct showMessage={setShowMessage} errorMessage={setShowErrorMessage} />}
                {productType && productType === 'CUSTOM' && <QuotationContact showMessage={setShowMessage} errorMessage={setShowErrorMessage} />}
            </div>
        </>
    )
}

export default Quotation;