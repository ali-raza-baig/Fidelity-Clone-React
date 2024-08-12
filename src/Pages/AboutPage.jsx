import ContactForm from '../Components/ContactForm'
import Layout from '../Components/Layout'
const AboutPage = () => {
    return (
        <Layout>
            <section className='About-Hero'>

                <h1 className='text-7xl pt-14 text-white font-bold'>About Us</h1>
                <button className="mx-2 mt-16 text-white bg-red-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-900 rounded text-lg">Get a Quate</button>

            </section>
            <section>
                <p className='mx-10 my-5'>At Fidelity Group, we are dedicated to transforming the way people connect. Founded over 30 years ago, with a vision to bring unparalleled communication services to our clients, we pride ourselves on being at the forefront of technological innovation and customer satisfaction.
                    <br />
                    <br />
                    Our team comprises seasoned industry professionals with extensive expertise in designing, deploying, and managing advanced telecom infrastructure.
                    <br />
                    <br />
                    We are committed to offering reliable, high-quality services that meet the diverse needs of businesses and individuals alike.</p>
            </section>

            <section className='mt-2 mb-16'>
                <h1 className='text-center text-4xl font-bold text-gray-600 m-10'>Our Mission</h1>
                <p className='mx-10 text-gray-600'>Our mission is to empower our clients with seamless, efficient, and secure communication solutions. We strive to:</p>
                <div className='flex flex-wrap text-gray-600 mx-10'>
                    <div className='flex font-bold m-2 lg:w-[47%]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-check-lg text-red-600" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                        </svg>
                        <p className='mx-2'>Deliver state-of-the-art telecom services that enhance connectivity and productivity.</p>
                    </div>
                    <div className='flex font-bold m-2 lg:w-[47%]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-check-lg text-red-600" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                        </svg>
                        <p className='mx-2'>Continuously innovate to stay ahead in the ever-evolving telecom landscape.</p>
                    </div>
                    <div className='flex font-bold m-2 lg:w-[47%]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-check-lg text-red-600" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                        </svg>
                        <p className='mx-2'>Maintain the highest standards of customer service and support.</p>
                    </div>
                    <div className='flex font-bold m-2 lg:w-[47%]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-check-lg text-red-600" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                        </svg>
                        <p className='mx-2'>Deliver state-of-the-art telecom services that enhance connectivity and productivity.</p>
                    </div>


                    {/* <div className='w-1/2 '>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-check-lg text-red-600" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                        </svg> Deliver state-of-the-art telecom services that enhance connectivity and productivity.</p>
                    </div>
                    <div className='w-1/2 '></div>*/}
                </div>
            </section>

            <section className='bg-gray-50 pb-8 pt-8'>
                <div className='text-center text-4xl font-bold text-gray-600 m-10'>Our Values</div>
                <div className='flex flex-wrap'>
                    <div className='lg:w-[47%] mx-4 my-4'>
                        <div className='flex font-bold text-xl'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-check-lg text-red-600" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                            </svg>
                            <h1>Innovation</h1>
                        </div>
                        <p>We embrace innovation and are always exploring new technologies to improve our services and deliver the best solutions to our clients.</p>
                    </div>
                    <div className='lg:w-[47%] mx-4 my-4'>
                        <div className='flex  font-bold text-xl'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-check-lg text-red-600" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                            </svg>
                            <h1>Integrity</h1>
                        </div>
                        <p>Integrity is at the core of our business. We believe in transparency, honesty, and ethical practices in all our business operations.</p>
                    </div>
                    <div className='lg:w-[47%] mx-4 my-4'>
                        <div className='flex font-bold text-xl'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-check-lg text-red-600" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                            </svg>
                            <h1>Customer Focus</h1>
                        </div>
                        <p>Our customers are our top priority. We listen to their needs and work tirelessly to exceed their expectations with our services and support</p>
                    </div>
                    <div className='lg:w-[47%] mx-4 my-4'>
                        <div className='flex  font-bold text-xl'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-check-lg text-red-600" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                            </svg>
                            <h1>Reliability</h1>
                        </div>
                        <p>We understand the importance of dependable communication services. Our commitment to reliability ensures that our clients can count on us for consistent performance.</p>
                    </div>


                </div>
            </section>
            <ContactForm />

        </Layout>
    )
}

export default AboutPage