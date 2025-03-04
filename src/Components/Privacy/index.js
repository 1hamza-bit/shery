
import { Grid } from "@mui/material";
import Footer from "../Layout/footer";
import Header from "../Layout/header";
import styles from "./index.module.scss"

import { useEffect, useState } from "react";
import shop from "../../Assets/shophose.jpg"


const Privacys = () => {


    const labelSize = (label) => {
        // Adjust the formula as needed to calculate dynamic sizes based on label content

        if (label.region) {
            return 1
        }
        else {
            return 3
        }
    };

    return (
        <>
            <div className={`${styles.about}`}>
                <div className={`${styles.overlay}`} >
                    <Header />
                    <Grid container spacing={1} className="map flex justify-center">
                        <Grid item lg={9} md={9} sm={12} xs={12} className={styles.privacy}>
                            <div class="max-w-4xl mx-auto px-4 py-8">

                                <h2 class="text-3xl font-bold mb-4 text-white">Privacy Policy</h2>

                                <p class="mb-4 text-white text-base">At Shaharyar Traders, the privacy of our visitors is of utmost importance to us. This Privacy Policy document outlines the types of personal information that is received and collected by Shaharyar Traders and how it is used.</p>

                                <h3 class="text-lg font-bold mb-2">Information Collection and Use</h3>
                                <p class="mb-4 text-white">Shaharyar Traders may collect personal information when you visit our website, register for an account, place an order, subscribe to our newsletter, respond to a survey, or fill out a form. The information collected may include your name, email address, mailing address, phone number, and payment details.</p>
                                <p class="mb-4 text-white">We use this information for the purpose of processing orders, communicating with you, improving our products and services, and sending promotional materials and updates if you have opted to receive them.</p>

                                <h3 class="text-lg font-bold mb-2">Cookies and Log Files</h3>
                                <p class="mb-4 text-white">Shaharyar Traders uses cookies to store information about visitors' preferences, record user-specific information on which pages the user accesses or visits, and customize web page content based on visitors' browser type or other information that the visitor sends via their browser.</p>
                                <p class="mb-4 text-white">Log files are also utilized to track actions occurring on the website and gather demographic information. This information is not linked to any personally identifiable information.</p>

                                <h3 class="text-lg font-bold mb-2">Data Security</h3>
                                <p class="mb-4 text-white">Shaharyar Traders takes appropriate measures to safeguard the security of your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

                                <h3 class="text-lg font-bold mb-2">Third-Party Disclosure</h3>
                                <p class="mb-4 text-white">Shaharyar Traders does not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.</p>

                                <h3 class="text-lg font-bold mb-2">Changes to This Privacy Policy</h3>
                                <p class="mb-4 text-white">Shaharyar Traders reserves the right to update or change this Privacy Policy at any time. Any changes will be effective immediately upon posting on this page. We encourage you to periodically review this Privacy Policy for any updates.</p>

                                <h3 class="text-lg font-bold mb-2">Contact Us</h3>
                                <p class="mb-4 text-white">If you have any questions or concerns about this Privacy Policy or the practices of Shaharyar Traders, please contact us at <span class="underline">hamtah112@gmail.com</span> or <span class="underline">+92 3224594593</span>.</p>

                                <p class="mt-4">By using our website, you consent to the terms of this Privacy Policy.</p>

                            </div>
                        </Grid>


                    </Grid>


                </div>
            </div>
            <Footer />

        </>


    )
}

export default Privacys;