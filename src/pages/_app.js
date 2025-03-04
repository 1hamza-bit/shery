import "@/styles/globals.css";
import "@/styles/components.scss";

import { ReactLenis } from '@studio-freight/react-lenis';
import WhatsAppButton from "@/Components/WhatsAppButton";

export default function App({ Component, pageProps }) {
  return (
    <ReactLenis   options={{    duration : 2,  }} root >

      <WhatsAppButton />
    <Component {...pageProps} />
    </ReactLenis>

  )
}
