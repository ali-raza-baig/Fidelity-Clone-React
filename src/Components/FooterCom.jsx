import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
const FooterCom = () => {
    return (

        <>
            <Footer container className="bg-gray-100">
                <div className="w-full ">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div>
                            <Footer.Brand
                                className="h-16"
                                src="https://www.fidelity-group.co.uk/wp-content/uploads/2022/06/Fidelity-Group-United-Kingdom-Logo-160x51@2x.png"
                                alt="Logo"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:mt-6 sm:grid-cols-3 sm:gap-6 ">
                            <div>
                                <Footer.Title title="about" />
                                <Footer.LinkGroup col className="text-red-400">
                                    <Footer.Link href="#">Flowbite</Footer.Link>
                                    <Footer.Link href="#">Tailwind CSS</Footer.Link>
                                    <Footer.Link href="#">Tailwind CSS</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Follow us" />
                                <Footer.LinkGroup col className="text-red-400">
                                    <Footer.Link href="#">Github</Footer.Link>
                                    <Footer.Link href="#">Discord</Footer.Link>
                                    <Footer.Link href="#">Discord</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Legal" />
                                <Footer.LinkGroup col className="text-red-400">
                                    <Footer.Link href="#">Privacy Policy</Footer.Link>
                                    <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                                    <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                        </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright href="#" by="fidelity™" year={2022} />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon href="#" icon={BsFacebook} />
                            <Footer.Icon href="#" icon={BsInstagram} />
                            <Footer.Icon href="#" icon={BsTwitter} />
                            <Footer.Icon href="#" icon={BsGithub} />
                            <Footer.Icon href="#" icon={BsDribbble} />
                        </div>
                    </div>
                </div>
            </Footer>
        </>
    )
}

export default FooterCom