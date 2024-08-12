import ContactForm from '../Components/ContactForm'
import Layout from '../Components/Layout'
import { team } from '../Data/teamData'
const TeamPage = () => {
    return (
        <Layout>
            <section>
                <h1 className='text-center text-4xl mt-12 font-medium text-gray-600'>“We live an ethos of trust,<span className='text-red-600'> loyalty</span> and delivery.”</h1>
                <div className='flex flex-wrap items-center justify-center'>
                    {team.map((i) => (
                        <div key={i.name} className=' w-[22%] mx-3 my-10'>

                            <div  >
                                <img src={i.img} alt="" className='w-40 text-center' />
                                <h1 className=' font-bold text-lg'>{i.name}</h1>
                                <p>{i.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <ContactForm />
        </Layout>
    )
}

export default TeamPage