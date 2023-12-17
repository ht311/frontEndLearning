import Footer from "@components/common/footer/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <Footer />
        </>
    );
};

export default Layout;
