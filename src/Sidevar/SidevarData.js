import react from "react";
import { MdHome } from "react-icons/md";
import { IoIosMailOpen } from "react-icons/io";
import { LuLayout } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";






const SidevarData =[
    {
        title: "Home",
        icon: <MdHome />,
        link: "/home"
    },
    {
        title: "MailBox",
        icon: <IoIosMailOpen />,
        link: "/mailbox"
    },
    {
        title: "Layout",
        icon: <LuLayout />,
        link: "/layout"
    },
    {
        title: "Dashboard",
        icon: <MdDashboard />,
        link: "/dashboard"
    },
    {
        title: "Friends",
        icon: <FaUserFriends />,
        link: "/friend"
    },

]
export default SidevarData;