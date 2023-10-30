import { React, useState } from 'react';
import ProductSelect from './productselect';
import SamplerSelect from './samplerselect';

const QuotationProduct = ({showMessage, errorMessage}) => {

    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        additionalInfo: '',
        image: '',
        productName: '',
        sampler: '',
    });

    const handleSelect = (dataToUpdate) => {
        setFormData((prevData) => ({
            ...prevData,
            ...dataToUpdate,
        }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const [quatationProduct, setQuatationProduct] = useState(null);
    const [materials, setMaterials] = useState([]);
    const [sampler, setSampler] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmitSelectedProduct = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await fetch('http://stawowysk.pl:8080/api/v1/quotation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {

                setFormData({
                    name: '',
                    lastname: '',
                    email: '',
                    additionalInfo: '',
                    image: '',
                    productName: '',
                    sampler: '',
                });
                setSampler(null);
                setQuatationProduct(null);
                showMessage(true)
                errorMessage(false);
            } else {
                errorMessage(true);
            }
        } catch (error) {
            errorMessage(true);
        }

        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        setLoading(false);
    };

    return (
        <>
            <div className='grid grid-cols-1 place-items-center p-5'>
                <form className="w-full md:w-8/12" onSubmit={handleSubmitSelectedProduct}>
                    <div className='grid lg:grid-cols-3 grid-cols-1'>
                        <div className={`${quatationProduct ? 'bg-neutral-900 p-5 lg:p-2 mx-2 my-2' : null}  rounded-lg`}>
                            <ProductSelect sqp={setQuatationProduct} qp={quatationProduct} sqps={setSampler} select={handleSelect} gm={setMaterials}></ProductSelect>
                        </div>
                        {quatationProduct && sampler !== 'NON-MATERIAL' && <div className={`${sampler ? 'bg-neutral-900 p-5 lg:p-2 mx-2 my-2' : null} rounded-lg`}>
                            <SamplerSelect sqp={setSampler} qp={sampler} select={handleSelect} materials={materials}></SamplerSelect>
                        </div>}

                    </div>
                    {(sampler || sampler === 'NON-MATERIAL') && quatationProduct ? <>
                        <div className="flex flex-wrap -mx-3 mb-6 mt-5">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-yellow-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                    Imię
                                </label>
                                <input name="name"
                                    pattern="^[A-Za-zĄąĆćĘęŁłŃńÓóŚśŹźŻż \-]+"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    title="Wprowadź poprawne imię"
                                    required
                                    maxLength="100"
                                    placeholder="Imię"
                                    className="appearance-none block w-full bg-neutral-900 text-neutral-100 border border-neutral-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-neutral-700" id="grid-first-name" type="text"></input>
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-yellow-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                    Nazwisko
                                </label>
                                <input name="lastname"
                                    pattern="^[A-Za-zĄąĆćĘęŁłŃńÓóŚśŹźŻż \-]+"
                                    title="Wprowadź poprawne nazwisko"
                                    required
                                    value={formData.lastname}
                                    onChange={handleInputChange}
                                    maxLength="100"
                                    placeholder="Nazwisko"
                                    className="appearance-none block w-full bg-neutral-900 text-neutral-100 border border-neutral-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-neutral-700 focus:border-neutral-700" id="grid-last-name" type="text"></input>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-yellow-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                    Email
                                </label>
                                <input name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    maxLength="100"
                                    placeholder="example@gmail.com"
                                    className="appearance-none block w-full bg-neutral-900 text-neutral-100 border border-neutral-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-neutral-700 focus:border-neutral-700" id="grid-last-name" type="email"></input>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-yellow-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                    Dodatkowe informacje
                                </label>
                                <textarea name="additionalInfo"
                                    value={formData.additionalInfo}
                                    onChange={handleInputChange}
                                    maxLength="2000"
                                    placeholder="Tutaj wpisz treść wiadomości"
                                    rows="15" className="appearance-none block w-full bg-neutral-900 text-neutral-100 border border-neutral-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-neutral-700 focus:border-neutral-700" id="grid-last-name"></textarea>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="px-3 mx-auto">
                                <button
                                    type="submit"
                                    className="inline-block rounded bg-yellow-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-100">
                                    POPROŚ O WYCENĘ
                                </button>
                            </div>
                        </div>
                    </> : null}
                </form>
            </div>
            {loading && <div className='fixed top-0 left-0 right-0 w-screen h-screen z-50 bg-black opacity-80'>
                <div style={{ position: 'relative', top: 'calc(50vh - 100px)', left: 'calc(50vw - 50px)' }}>
                    <div role="status">
                        <svg aria-hidden="true" className="inline w-24 h-24 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-700" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                    </div>
                    <p className='text-gray-200 mx-auto relative text-2xl my-5' style={{ left: '-70px' }}>Wysyłanie wiadomości</p>
                </div>

            </div>
            }

        </>
    )
}

export default QuotationProduct;