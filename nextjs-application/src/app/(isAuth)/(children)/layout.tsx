import Footer from "@components/common/footer/footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <Footer />
        </>
    );
};

export default Layout;
