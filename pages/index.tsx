import Head from 'next/head';
import ServersTab from '../components/ServersTab/ServersTab';
import DMs from '../components/DmsPage/DMs';


export default function App() {
  return (
    <div className="">
      <Head>
        <title>Discorda</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex h-screen w-screen'>
        <div className='sticky'><ServersTab/></div> 

        <DMs/>
      </div>
      
    </div>
  )
}