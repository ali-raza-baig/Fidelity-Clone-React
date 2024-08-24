import Layout from '../Components/Layout'
import ContactForm from '../Components/ContactForm'
const CloudAndHosting = () => {
    return (
        <Layout>
            <section className='cloud-hero px-5 text-white flex flex-col justify-center'>
                <h1 className='text-xl font-bold leading-10 pb-5'>Empowering everything as a service.</h1>
                <h1 className='text-6xl font-bold'>Get your business in<br /> the cloud</h1>
                <div>
                    <button className="flex mx-2 mt-16 text-white bg-red-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-900 rounded text-lg">Spek with an Expert</button>
                </div>
            </section>

            <section className='mt-10'>
                <h1 className='text-center font-semibold text-2xl m-4'>Cloud services, cloud hosting and strategy in the UK.</h1>
                <h1 className='text-center font-bold text-4xl'>Connect to <span className='text-red-500'>limitless possibilities.</span> Limitless opportunities.</h1>

                <div className='flex justify-center items-center p-5'>
                    <div className='font px-4 w-2/4 text-3xl text-gray-500'>Our relationships with the major <span className='text-red-500'>cloud technology providers</span> enable us to continually innovate.</div>
                    <div className='p-10'>
                        <h1 className='text-2xl'>Bespoke design and implementation of IT and cloud strategies for flexible working, data storage and data security; including desktop support, hosted email services and data back-up.</h1>

                        <button className="flex mx-2 mt-16 text-white bg-red-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-900 rounded text-lg">Get an Quote</button>
                    </div>

                </div>
            </section>

            <section className='bg-gray-100 mt-4'>
                <h1 className='text-center text-4xl font-bold p-16'> Why Fidelity for your <span className='text-red-500'>Cloud services?</span></h1>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/4">
                        <div className="h-full border-2 bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <div className="p-6">
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                                <p className="leading-relaxed mb-3">Cloud hosting is a flexible service providing tangible cost-savings from cloud computing, including virtual servers, a virtual shared platform, and Software as a Service (SaaS) provision of services such as Office 365. Cloud hosting is a flexible service providing tangible cost-savings from cloud computing, including virtual servers, a virtual shared platform, and Software as a Service (SaaS) provision of services such as Office 365.</p>

                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4">
                        <div className="h-full border-2 bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <div className="p-6">
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                                <p className="leading-relaxed mb-3">Cloud hosting is a flexible service providing tangible cost-savings from cloud computing, including virtual servers, a virtual shared platform, and Software as a Service (SaaS) provision of services such as Office 365. Cloud hosting is a flexible service providing tangible cost-savings from cloud computing, including virtual servers, a virtual shared platform, and Software as a Service (SaaS) provision of services such as Office 365.</p>

                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4">
                        <div className="h-full border-2 bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <div className="p-6">
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                                <p className="leading-relaxed mb-3">Cloud hosting is a flexible service providing tangible cost-savings from cloud computing, including virtual servers, a virtual shared platform, and Software as a Service (SaaS) provision of services such as Office 365. Cloud hosting is a flexible service providing tangible cost-savings from cloud computing, including virtual servers, a virtual shared platform, and Software as a Service (SaaS) provision of services such as Office 365.</p>

                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4">
                        <div className="h-full border-2 bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <div className="p-6">
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                                <p className="leading-relaxed mb-3">Cloud hosting is a flexible service providing tangible cost-savings from cloud computing, including virtual servers, a virtual shared platform, and Software as a Service (SaaS) provision of services such as Office 365. Cloud hosting is a flexible service providing tangible cost-savings from cloud computing, including virtual servers, a virtual shared platform, and Software as a Service (SaaS) provision of services such as Office 365.</p>

                            </div>
                        </div>
                    </div>
                </div>


            </section>
            <div className='mt-10'>
                <ContactForm />
            </div>
        </Layout>
    )
}

export default CloudAndHosting