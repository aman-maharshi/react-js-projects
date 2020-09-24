import React from "react"
import * as AiIcons from "react-icons/ai"
import * as SiIcons from "react-icons/si"

const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        class: "nav-text"
    },
    {
        title: "About",
        path: "/about",
        icon: <SiIcons.SiAboutDotMe />,
        class: "nav-text"
    },
    {
        title: "Projects",
        path: "/projects",
        icon: <AiIcons.AiOutlineProject />,
        class: "nav-text"
    }
]

export default SidebarData
