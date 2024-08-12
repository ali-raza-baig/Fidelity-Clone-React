import Header from './Header'
import FooterCom from './FooterCom'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <FooterCom />
        </>
    )
}

export default Layout