import Head from 'next/head';
import Navbar from '../components/navbars/Navbar';

export default function Home() {
  return (
    <div className="home">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="home__main">
        <Navbar home={true} />
      </section>
    </div>
  )
}
