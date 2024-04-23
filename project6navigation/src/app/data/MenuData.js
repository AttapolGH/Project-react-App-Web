import {  FaArchive , FaChild, FaPlane , FaIdCard, } from "react-icons/fa";

const MenuData = [
    {
        title: "หน้าแรก",
        path: "/",
        icon: <FaArchive />
    },
    {
        title: "สมาชิก",
        path: "/member",
        icon: <FaChild />
    },
    {
        title: "ชื่อประเทศ",
        path: "/product",
        icon: <FaPlane  />
    },
    {
        title: "แอดมิน",
        path: "/admin",
        icon: <FaIdCard />
    }
]

export default MenuData