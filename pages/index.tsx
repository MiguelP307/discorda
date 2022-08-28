import Head from 'next/head';
import ServersTab from '../components/ServersTab/ServersTab';
import DMs from '../components/ChannelsDmTab/DMs';

export default function App() {
  return (
    <div className="flex">
      <Head>
        <title>Discorda</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <ServersTab/>

      <DMs/>
      
    </div>
  )
}