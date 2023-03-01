import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.scss'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import MainLayout from '../src/components/layout/main-layout'

export default function App({ Component, pageProps }) {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, [])

  return (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
  )
}
