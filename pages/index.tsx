import Head from 'next/head';
import ServersTab from '../components/ServersTab/ServersTab';
import DMs from '../components/DmsPage/DMs';



//For test proposes
const usersTest : User[] = [
  {
      userImage: "/Teste/userPFP_Test.jpg",
      userStatus: "Online",
      userNickname: "Amber",
      userID: "#0001",
  },
  {
      userImage: "/Teste/userPFP_Test.jpg",
      userStatus: "Offline",
      userNickname: "Yoimiya da Wish",
      userID: "#0002",
  },
  {
      userImage: "/Teste/userPFP_Test.jpg",
      userStatus: "Do Not Disturb",
      userNickname: "Collei on Fire",
      userID: "#0003",
  },{
    userImage: "/Teste/userPFP_Test.jpg",
    userStatus: "Online",
    userNickname: "Amber",
    userID: "#0001",
},
{
    userImage: "/Teste/userPFP_Test.jpg",
    userStatus: "Offline",
    userNickname: "Yoimiya da Wish",
    userID: "#0002",
},
{
    userImage: "/Teste/userPFP_Test.jpg",
    userStatus: "Do Not Disturb",
    userNickname: "Collei on Fire",
    userID: "#0003",
},{
  userImage: "/Teste/userPFP_Test.jpg",
  userStatus: "Online",
  userNickname: "Amber",
  userID: "#0001",
},
{
  userImage: "/Teste/userPFP_Test.jpg",
  userStatus: "Offline",
  userNickname: "Yoimiya da Wish",
  userID: "#0002",
},
{
  userImage: "/Teste/userPFP_Test.jpg",
  userStatus: "Do Not Disturb",
  userNickname: "Collei on Fire",
  userID: "#0003",
},{
  userImage: "/Teste/userPFP_Test.jpg",
  userStatus: "Online",
  userNickname: "Amber",
  userID: "#0001",
},
{
  userImage: "/Teste/userPFP_Test.jpg",
  userStatus: "Offline",
  userNickname: "Yoimiya da Wish",
  userID: "#0002",
},
{
  userImage: "/Teste/userPFP_Test.jpg",
  userStatus: "Do Not Disturb",
  userNickname: "Collei on Fire",
  userID: "#0003",
},{
  userImage: "/Teste/userPFP_Test.jpg",
  userStatus: "Online",
  userNickname: "Amber",
  userID: "#0001",
},
{
  userImage: "/Teste/userPFP_Test.jpg",
  userStatus: "Offline",
  userNickname: "Yoimiya da Wish",
  userID: "#0002",
},
{
  userImage: "/Teste/userPFP_Test.jpg",
  userStatus: "Do Not Disturb",
  userNickname: "Collei on Fire",
  userID: "#0003",
},{
  userImage: "/Teste/userPFP_Test.jpg",
  userStatus: "Online",
  userNickname: "Amber",
  userID: "#0001",
},
{
  userImage: "/Teste/userPFP_Test.jpg",
  userStatus: "Offline",
  userNickname: "Yoimiya da Wish",
  userID: "#0002",
},
{
  userImage: "/Teste/userPFP_Test.jpg",
  userStatus: "Do Not Disturb",
  userNickname: "Collei on Fire",
  userID: "#0003",
},{
  userImage: "/Teste/userPFP_Test.jpg",
  userStatus: "Online",
  userNickname: "Amber",
  userID: "#0001",
},
{
  userImage: "/Teste/userPFP_Test.jpg",
  userStatus: "Offline",
  userNickname: "Yoimiya da Wish",
  userID: "#0002",
},
{
  userImage: "/Teste/userPFP_Test.jpg",
  userStatus: "Do Not Disturb",
  userNickname: "Collei on Fire",
  userID: "#0003",
},
]

export default function App() {
  return (
    <div className="">
      <Head>
        <title>Discorda</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex h-screen w-screen'>
        <div className='sticky'><ServersTab/></div>
        

        <DMs users={usersTest}/>
      </div>
      
    </div>
  )
}