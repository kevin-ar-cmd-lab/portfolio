import Head from 'next/head';
import '../styles/globals.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Loader from '../components/Loader';
import Layout from '../components/Layout';
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import { SpeedInsights } from '@vercel/speed-insights/next';

function AppWrapper({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);
  const { darkMode } = useTheme();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <SpeedInsights />
      {loading && <Loader />}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default function MyApp(props) {
  return (
    <ThemeProvider>
      <AppWrapper {...props} />
    </ThemeProvider>
  );
}
