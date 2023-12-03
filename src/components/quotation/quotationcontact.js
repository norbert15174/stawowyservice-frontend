import { React, useState } from 'react';

function QuotationContact({ showMessage, errorMessage }) {

    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        additionalInfo: '',
        phone: '',
        uuid: ''
    });

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [loading, setLoading] = useState(false);

    const [invalidFiles, setInvalidFiles] = useState(false);
    const [nonSelectedFiles, setNonSelectedFiles] = useState(false);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const files = e.target.files;
        const allowedExtensions = [".jpg", ".jpeg", ".png", ".gif", ".bmp"];
        const maxFileSize = 30 * 1024 * 1024;
        let fileSize = 0;
        Array.from(files).filter((file) => {
            const fileExtension = file.name.split('.').pop().toLowerCase();
            fileSize += file.size;
            if (
                allowedExtensions.includes(`.${fileExtension}`) &&
                fileSize <= maxFileSize
            ) {
                setSelectedFiles(files);
                setInvalidFiles(false);
            } else {
                setInvalidFiles(true)
                return false;
            }
        });

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        if (selectedFiles.length > 0) {
            const formData = new FormData();
            for (let i = 0; i < selectedFiles.length; i++) {
                formData.append('files', selectedFiles[i]);
            }
            fetch('https://stawood.pl:8443/api/v1/quotation/files', {
                method: 'POST',
                body: formData,
            })
                .then((response) => {
                    if (response.status === 200) {
                        return response.json();
                    } else {
                        throw new Error('Błąd podczas przesyłania pliku');
                    }
                })
                .then((data) => {
                    setTimeout(function() {
                        handleAfterUploadSubmit(data.uuid)
                      }, 500);
                })
                .catch((error) => {
                    errorMessage(true);
                });
        } else {
            handleAfterUploadSubmit(null)
        }
    };

    const handleAfterUploadSubmit = async(uuid) => {
        try {
            formData.uuid = uuid;
            const response = await fetch('https://stawood.pl:8443/api/v1/quotation/custom', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setSelectedFiles([]);
                setFormData({
                    name: '',
                    lastname: '',
                    email: '',
                    additionalInfo: '',
                    phone: '',
                    uuid: null
                });
                showMessage(true);
                errorMessage(false);
                setLoading(false);
            } else {
                errorMessage(true);
                setLoading(false);
                setLoading(false);
            }
        } catch (error) {
            errorMessage(true);
            setLoading(false);
            setLoading(false);
        }
    };

    return (
        <>
            <div className='grid grid-cols-1 place-items-center p-5'>
                {invalidFiles &&
                    <div className="min-w-[60vw] max-w-[800px] my-5 mx-auto bg-orange-600 rounded text-white border border-orange-700 px-4 py-3 relative" role="alert">
                        <strong className="font-bold">Niepoprawne rozszerzenie plików (obsługiwane rozszerzenia: .jpg, .jpeg, .png, .gif, .bmp) lub rozmiar przekracza 30MB!</strong>
                    </div>}
                <div className="flex w-full mb-5 items-center justify-center bg-grey-lighter">
                    <label className="w-64 flex flex-col items-center px-4 py-6 bg-neutral-900 text-blue rounded-lg shadow-lg tracking-wide cursor-pointer hover:bg-blue hover:text-neutral-100 text-yellow-800">
                        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                        <input multiple type='file' className="hidden" onChange={handleFileChange} accept=".jpg, .jpeg, .png, .gif, .bmp" />
                        {selectedFiles && selectedFiles.length !== 0 && Array.from(selectedFiles).map((file, index) => (<p className="text-neutral-400 text-xs" key={index}>{file.name}</p>))}
                    </label>

                </div>
                <form className="w-full md:w-8/12" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-yellow-700 text-md mb-2" htmlFor="grid-first-name">
                                Imię
                            </label>
                            <input
                                required
                                pattern="^[A-Za-zĄąĆćĘęŁłŃńÓóŚśŹźŻż \-]+"
                                value={formData.name}
                                onChange={handleInputChange}
                                title="Wprowadź poprawne imię"
                                name="name"
                                className="appearance-none block w-full bg-neutral-900 text-neutral-100 border border-neutral-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-neutral-700" id="grid-first-name" type="text" placeholder="Imię" />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-yellow-700 text-md mb-2 " htmlFor="grid-last-name">
                                Nazwisko
                            </label>
                            <input
                                required
                                pattern="^[A-Za-zĄąĆćĘęŁłŃńÓóŚśŹźŻż \-]+"
                                value={formData.lastname}
                                title="Wprowadź poprawne nazwisko"
                                onChange={handleInputChange}
                                name="lastname"
                                className="appearance-none block w-full bg-neutral-900 text-neutral-100 border border-neutral-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-neutral-700 focus:border-gray-500" id="grid-last-name" type="text" placeholder="Nazwisko" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-yellow-700 text-md  mb-2 " htmlFor="grid-password">
                                Email
                            </label>
                            <input
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                name="email"
                                className="appearance-none block w-full bg-neutral-900 text-neutral-100 border border-neutral-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-neutral-700 focus:border-gray-500" id="grid-password" type="text" placeholder="example@gmail.com" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-yellow-700 text-md  mb-2 " htmlFor="grid-password">
                                Telefon
                            </label>
                            <input
                                required
                                title="Wprowadź poprawny telefon"
                                pattern="[0-9]{9}"
                                value={formData.phone}
                                onChange={handleInputChange}
                                name="phone"
                                className="appearance-none block w-full bg-neutral-900 text-neutral-100 border border-neutral-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-neutral-700 focus:border-gray-500" id="grid-password" type="text" placeholder="Telefon" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-yellow-700 text-md mb-2 " htmlFor="grid-password2">
                                Treść wiadomości
                            </label>
                            <textarea value={formData.additionalInfo}
                                required
                                maxLength="2000"
                                onChange={handleInputChange}
                                name="additionalInfo" rows={12} className="appearance-none block w-full bg-neutral-900 text-neutral-100 border border-neutral-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-neutral-700 focus:border-gray-500" id="grid-password2" placeholder="Tutaj wpisz treść wiadomości" />
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
    );
}
export default QuotationContact;