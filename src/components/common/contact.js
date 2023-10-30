import { React, useState } from 'react';

function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        additionalInfo: '',
        phone: '',
    });

    const [errorMessage, setErrorMessage] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await fetch('http://localhost:9000/api/v1/contact', {
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
                    phone: '',
                });
                setShowMessage(true);
                setErrorMessage(false);
            } else {
                setErrorMessage(true);
            }
        } catch (error) {
            setErrorMessage(true);
        }

        setLoading(false);
    };

    return (
        <>
            {errorMessage === true ?
                <div className="max-w-[calc(1200px)] my-5 mx-auto bg-red-500 text-white border border-red-600 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Przepraszamy, nie udało się wysłać wiadomości, spróbuj ponownie później.
                        <br />
                    </strong>
                    Możliwe problemy: niepoprawny email, niedostępność serwisu
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                        <svg onClick={() => setErrorMessage(false)} className="fill-current h-6 w-6 text-white" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                    </span>
                </div> : null}
            {showMessage === true ?
                <div className="max-w-[calc(1200px)] my-5 mx-auto bg-blue-500 text-white border border-blue-600 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Wiadomość została wysłana!</strong>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                        <svg onClick={() => setShowMessage(false)} className="fill-current h-6 w-6 text-white" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                    </span>
                </div> : null}

            <div className="grid grid-cols-1 md:grid-cols-2 h-4/6 w-10/12 mx-auto py-10 md:h-screen xl:pb-24">
                <div className="w-12/12 bg-zinc-900 h-full left-0 top-0 md:rounded-l-lg grid place-items-center py-5 h-6/6">
                    <form className="w-full md:w-10/12 p-5" onSubmit={handleSubmit}>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <fieldset className="border-t border-yellow-700">
                                    <legend className="mx-auto px-4 text-yellow-700 text-3xl italic stick-font">KONTAKT</legend>
                                </fieldset>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-yellow-700 text-md mb-2 stick-font" htmlFor="grid-first-name">
                                    Imię
                                </label>
                                <input
                                    required
                                    pattern="^[A-Za-zĄąĆćĘęŁłŃńÓóŚśŹźŻż \-]+"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    title="Wprowadź poprawne imię"
                                    name="name"
                                    className="appearance-none block w-full bg-gray-200 text-yellow-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Imię" />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-yellow-700 text-md mb-2 stick-font" htmlFor="grid-last-name">
                                    Nazwisko
                                </label>
                                <input
                                    required
                                    pattern="^[A-Za-zĄąĆćĘęŁłŃńÓóŚśŹźŻż \-]+"
                                    value={formData.lastname}
                                    title="Wprowadź poprawne nazwisko"
                                    onChange={handleInputChange}
                                    name="lastname"
                                    className="appearance-none block w-full bg-gray-200 text-yellow-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Nazwisko" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-yellow-700 text-md  mb-2 stick-font" htmlFor="grid-password">
                                    Email
                                </label>
                                <input
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    name="email"
                                    className="appearance-none block w-full bg-gray-200 text-yellow-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="example@gmail.com" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-yellow-700 text-md  mb-2 stick-font" htmlFor="grid-password">
                                    Telefon
                                </label>
                                <input
                                    required
                                    title="Wprowadź poprawny telefon"
                                    pattern="[0-9]{9}"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    name="phone"
                                    className="appearance-none block w-full bg-gray-200 text-yellow-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Telefon" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-yellow-700 text-md mb-2 stick-font" htmlFor="grid-password2">
                                    Treść wiadomości
                                </label>
                                <textarea value={formData.additionalInfo}
                                    required
                                    maxLength="2000"
                                    onChange={handleInputChange}
                                    name="additionalInfo" rows={12} className="appearance-none block w-full bg-gray-200 text-yellow-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password2" placeholder="Tutaj wpisz treść wiadomości" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <button
                                type="submit"
                                className="cursor-pointer mx-auto inline-block rounded text-center bg-yellow-700 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-yellow-900 focus:bg-yellow-900">
                                Wyślij wiadomość
                            </button>
                        </div>

                    </form>
                </div>
                <div className="map-container relative shadow-lg rounded-lg w-12/12 md:h-full h-96">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41152.431774671815!2d19.589728836796677!3d49.860737725851976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471662ea61d7ba33%3A0xd1c35e4cddfe8564!2zQmFyd2HFgmQgR8Ozcm55!5e0!3m2!1sen!2spl!4v1679151429826!5m2!1sen!2spl"
                        className="left-0 top-0 h-full w-full absolute md:rounded-r-lg test-dupa" frameBorder="0" allowFullScreen></iframe>
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
            </div>
        </>
    );
}
export default Contact;