
import Footer from "../Layout/footer";
import Header from "../Layout/header";
import SignInSide from "./form";
import "./index.scss"


const Contact = () => {


    return (
        <>
            <div className="contact">
                <div className="overlay">
                <Header />
                <h1>hamzaaa</h1>

                <SignInSide />
                </div>
            </div>
            <Footer />

        </>


    )
}

export default Contact;