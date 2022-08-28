import Head from 'next/head';
import ServersTab from '../components/ServersTab/ServersTab';
import DMs from '../components/ChannelsDmTab/DMs';


//For test proposes
const usersTest : User[] = [
  {
      userImage: "/Teste/userPFP_Test.jpg",
      userStatus: "Online",
      userNickname: "Amber",
  },
  {
      userImage: "/Teste/userPFP_Test.jpg",
      userStatus: "Offline",
      userNickname: "Yoimiya da Wish",
  },
  {
      userImage: "/Teste/userPFP_Test.jpg",
      userStatus: "Do Not Disturb",
      userNickname: "Collei on Fire",
  },
]

export default function App() {
  return (
    <div className="flex">
      <Head>
        <title>Discorda</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <ServersTab/>

      <DMs users={usersTest}/>
      
    </div>
  )
}