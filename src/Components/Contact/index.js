
import { Mail } from "lucide-react";
import Footer from "../Layout/footer";
import Header from "../Layout/header";
import SignInSide from "./form";
import styles from "./index.module.scss"


const Contacta = () => {


    return (
        <>
            <div className={`${styles.contact} bg-neutral-900`}>
            <Header />

                <div className={styles.overlay}>
                {/* <h1 className="mt5p">hamzaaa</h1> */}

                {/* <SignInSide /> */}

                <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
                <div className=" mx-auto px-4 relative">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
                                Contact Us
                            </h2>
                            <p className="text-xl text-blue-200">
                                Have questions about our hydraulic solutions? Our team of
                                experts is here to help.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-colors">
                                        <h3 className="text-xl font-semibold mb-2 text-white">
                                            Global Headquarters
                                        </h3>
                                        <p className="text-gray-300">Brandeth Road Lahore</p>
                                        <p className="text-gray-300">Opposite Rehman Gali no 1</p>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-colors">
                                        <h3 className="text-xl font-semibold mb-2 text-white">
                                            Contact Info
                                        </h3>
                                        <p className="text-gray-300">Phone: +92 320 2112565</p>
                                        {/* <p className="text-gray-300">Email: 1-800-HYDRAULIC-FAX</p> */}
                                    </div>
                                </div>
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-colors">
                                        <h3 className="text-xl font-semibold mb-2 text-white">
                                            Business Hours
                                        </h3>
                                        <p className="text-gray-300">
                                            Monday - Saturday: 10:00 AM - 10:00 PM
                                        </p>
                                        <p className="text-gray-300">
                                            24/7 Emergency Support Available
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative p-8 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-colors text-center">
                                    <h3 className="text-2xl font-semibold mb-4 text-white">
                                        Ready to Get Started?
                                    </h3>
                                    <p className="text-gray-300 mb-6">
                                        Send us an email and our team will get back to you within 24
                                        hours.
                                    </p>
                                    <button
                                        className="inline-flex cursor-pointer items-center px-8 py-4 bg-gradient-to-r from-amber-800 to-amber-400 rounded-lg group overflow-hidden relative"
                                        onClick={() =>
                                        (window.location.href =
                                            "mailto:contact@hydraulicsolutions.com")
                                        }
                                    >
                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                        <Mail className="mr-2 relative" size={20} />
                                        <span className="relative">Email Us Now</span>
                                    </button>
                                    <p className="mt-4 text-sm text-gray-400">
                                        Or email us directly at:
                                        <br />
                                        <span className="text-blue-400">
                                            shahzadtradingco26@gmail.com
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                </div>
            </div>
            <Footer />

        </>


    )
}

export default Contacta;