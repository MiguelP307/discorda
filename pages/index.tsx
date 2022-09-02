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
    userID: "#0004",
},
{
    userImage: "/Teste/userPFP_Test.jpg",
    userStatus: "Offline",
    userNickname: "Yoimiya da Wish",
    userID: "#0005",
},
{
    userImage: "/Teste/userPFP_Test.jpg",
    userStatus: "Do Not Disturb",
    userNickname: "Collei on Fire",
    userID: "#0006",
},{
  userImage: "/Teste/userPFP_Test.jpg",
  userStatus: "Online",
  userNickname: "Amber",
  userID: "#0007",
},
{
  userImage: "/Teste/userPFP_Test.jpg",
  userStatus: "Offline",
  userNickname: "Yoimiya da Wish",
  userID: "#0008",
},
{
  userImage: "/Teste/userPFP_Test.jpg",
  userStatus: "Do Not Disturb",
  userNickname: "Collei on Fire",
  userID: "#0009",
},{
  userImage: "/Teste/userPFP_Test.jpg",
  userStatus: "Online",
  userNickname: "Amber",
  userID: "#0010",
},
{
  userImage: "/Teste/userPFP_Test.jpg",
  userStatus: "Offline",
  userNickname: "Yoimiya da Wish",
  userID: "#0011",
},
{
  userImage: "/Teste/userPFP_Test.jpg",
  userStatus: "Do Not Disturb",
  userNickname: "Collei on Fire",
  userID: "#0012",
},{
  userImage: "/Teste/userPFP_Test.jpg",
  userStatus: "Online",
  userNickname: "Amber",
  userID: "#0013",
},
{
  userImage: "/Teste/userPFP_Test.jpg",
  userStatus: "Offline",
  userNickname: "Yoimiya da Wish",
  userID: "#0014",
},
{
  userImage: "/Teste/userPFP_Test.jpg",
  userStatus: "Do Not Disturb",
  userNickname: "Collei on Fire",
  userID: "#0015",
},{
  userImage: "/Teste/userPFP_Test.jpg",
  userStatus: "Online",
  userNickname: "Amber",
  userID: "#0016",
},
{
  userImage: "/Teste/userPFP_Test.jpg",
  userStatus: "Offline",
  userNickname: "Yoimiya da Wish",
  userID: "#00017",
},
{
  userImage: "/Teste/userPFP_Test.jpg",
  userStatus: "Do Not Disturb",
  userNickname: "Collei on Fire",
  userID: "#00018",
},{
  userImage: "/Teste/userPFP_Test.jpg",
  userStatus: "Online",
  userNickname: "Amber",
  userID: "#0019",
},
{
  userImage: "/Teste/userPFP_Test.jpg",
  userStatus: "Offline",
  userNickname: "Yoimiya da Wish",
  userID: "#0020",
},
{
  userImage: "/Teste/userPFP_Test.jpg",
  userStatus: "Do Not Disturb",
  userNickname: "Collei on Fire",
  userID: "#0021",
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