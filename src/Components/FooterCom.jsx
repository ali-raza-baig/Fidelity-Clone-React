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
                                <Footer.Title title="Services" />
                                <Footer.LinkGroup col className="text-red-400">
                                    <Footer.Link href="https://www.fidelity-group.co.uk/mobile-services/">Mobile</Footer.Link>
                                    <Footer.Link href="https://www.fidelity-group.co.uk/billing-anvil/">Billing</Footer.Link>
                                    <Footer.Link href="https://www.fidelity-group.co.uk/payments/">Payment</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Quick Links" />
                                <Footer.LinkGroup col className="text-red-400">
                                    <Footer.Link href="/about-us">About</Footer.Link>
                                    <Footer.Link href="/contact-us">Contact Us</Footer.Link>
                                    <Footer.Link href="https://www.fidelity-group.co.uk/terms-of-use/">Terms of Use</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Support" />
                                <Footer.LinkGroup col className="text-red-400">
                                    <Footer.Link href="https://fidelity.custservice.co/Login">Anvil Login</Footer.Link>
                                    <Footer.Link href="https://www.fidelity-group.co.uk/cloud-fault/">Cloud Fault</Footer.Link>
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