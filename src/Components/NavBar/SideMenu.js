import React from "react";
import {IoMdTrendingUp} from "react-icons/io";
import {HiChip} from "react-icons/hi"
import {BiWorld} from "react-icons/bi"
import {MdContactSupport, MdSportsSoccer} from "react-icons/md"
import {RiVirusFill} from 'react-icons/ri'
import {FaMicrophoneAlt} from 'react-icons/fa'


export const SidebarData = [

    {
        title: 'Top Headlines',
        path: '/top-headlines',
        icon: <IoMdTrendingUp />,
        class: 'nav-text'
    },
    {
        title: 'Covid-19',
        path: '/covid19',
        icon: <RiVirusFill />,
        class: 'nav-text',
        id: 'covid'
    },
    {
        title: 'Tech News',
        path: '/tech-news',
        icon: <HiChip />,
        class: 'nav-text'
    },
    {
        title: 'Sports',
        path: '/sports',
        icon: <MdSportsSoccer />,
        class: 'nav-text'
    },
    // {
    //     title: 'Talk News',
    //     path: '/talknews',
    //     icon: <FaMicrophoneAlt />,
    //     class: 'nav-text'
    // },
    // {
    //     title: 'Support',
    //     path: '/support',
    //     icon: <MdContactSupport />,
    //     class: 'nav-text'
    // }
]
