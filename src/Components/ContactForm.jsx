
const ContactForm = () => {
    return (

        <>
            <div className="relative isolate bg-white w-screen">
                <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-4xl font-extrabold mt-5">Connect with us</h1>
                        <p className="test-xl m-4">If you’d like to find out more, why not call us now on 0800 840 6800 or simply fill in our contact form below and we’ll be in touch.</p>

                        <form className="px-6 pb-24 sm:pb-32 lg:px-8 w-full lg:py-10">
                            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                                        <div className="mt-2.5 shadow-gray-400">
                                            <input type="text" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="firstName" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
                                        <div className="mt-2.5 shadow-gray-400">
                                            <input type="text" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="lastName" />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                                        <div className="mt-2.5 shadow-gray-400">
                                            <input type="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="email" />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                                        <div className="mt-2.5 shadow-gray-400">
                                            <textarea id="message" rows={4} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="message" defaultValue={""} />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 flex justify-end">
                                    <button type="submit" className="w-max  rounded-2xl border-2 border-[#d82c2c] bg-[#cc3838]  px-5 py-1.5 text-sm font-semibold text-white transition-colors duration-150 ease-in-out hover:border-blue-400 hover:bg-blue-400">Send message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-32">
                        <img src="https://www.fidelity-group.co.uk/wp-content/uploads/2024/06/Artboard-29.webp" alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default ContactForm