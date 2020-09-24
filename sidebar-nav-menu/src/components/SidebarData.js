import React from "react"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as SiIcons from "react-icons/si"
import * as GrIcons from "react-icons/gr"

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
        icon: <GrIcons.GrProjects />,
        class: "nav-text"
    }
]

export default SidebarData
