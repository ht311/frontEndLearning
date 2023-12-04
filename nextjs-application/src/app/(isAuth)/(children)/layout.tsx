import Footer from "@components/common/footer/footer";

const App = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <Footer />
        </>
    );
};

export default App;
