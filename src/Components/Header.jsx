// import Link from "next/link";
import { Navbar } from "flowbite-react";
const Header = () => {
    return (
        <>

            <Navbar fluid rounded className="font-light sm:font-medium">
                <Navbar.Brand href="/">
                    <img src="/logo.svg" className="mr-3 h-12 sm:h-12 " alt="Flowbite React Logo" />
                    {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span> */}
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="font-light">
                    <Navbar.Link href="/" active>
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/about-us">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="/cloud-hosting">Hosting</Navbar.Link>
                    <Navbar.Link href="/team">Team</Navbar.Link>
                    <Navbar.Link href="/contact-us">Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>


        </>
    )
}

export default Header