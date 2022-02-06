import React, {useEffect} from 'react';
import {useState} from "react";
import fifty from '../../images/50-Cent-1024x683.jpg'
import { Link } from 'react-router-dom';
import {MdMenu} from 'react-icons/md'
import {SidebarData} from "./SideMenu";
import {RiMenu3Line} from 'react-icons/ri'
import {FaDotCircle} from "react-icons/fa"
import './Navbar.css'
import {VscTriangleDown} from 'react-icons/vsc'
import {ImSearch} from 'react-icons/im'
import axios from "axios";

export const Navbar = () => {
    const [sidebar, setSidebar] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')
    const [windowWidth, setWindoWidth] = useState({width: undefined})

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {


    }, [data], )

    const showSidebar = () => {
            return setSidebar(!sidebar)

    }

    const searchInput = () => {
        if(searchTerm !== '') {
            if(data === null) {
                const fetch = async () =>
                    await axios('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=98d7f472269a4474ab5638c51bda73f1')
                        .then(response => setData(response.data.articles))
                        .then(() => setLoading(false))
                fetch()
            } else {
                return
            }
        }
    }

    useEffect(() => {
        console.log(
           searchTerm
        )
    })
    return (
        <>
            {/*Logo/ShowSide Menu */}
            <div className={'navbar'}>
                <Link to='#' className={'menu-bars'} onClick={showSidebar}>
                    {sidebar ? <RiMenu3Line /> : <MdMenu />}
                    <h3 id={'site-name'}>RENDER</h3>
                    <h3 id={'pipe'}>|</h3>
                    <h3 >Your Quick News Digest Source</h3>
                </Link>
                {/*<form>*/}
                {/*    <button type={"button"} onClick={searchInput}><ImSearch /></button>*/}
                {/*    <input onChange={(e) => setSearchTerm(e.target.value)} placeholder={'Search By Keyword'}/>*/}

                {/*</form>*/}
                <div className={'navbar-right'}>
                    <Link exact to={'/login'}>Login</Link>
                    <Link exact to={'/register'}>Register</Link>
                    {/*<Link className={'navbar-userInfo'} to={'/user-info'}><img src={fifty} alt={'user'} width={25} height={25}/><span id={'onlineStatusCircle'}> <FaDotCircle /> </span> <span><VscTriangleDown /></span></Link>*/}
                </div>
            </div>



            {/* Side menu */}
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className={'nav-menu-items'} /* onClick={showSidebar} */>
                    <li>
                    <Link to={'#'} className={'menu-bars-close'}>
                    </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.class}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span id={item.id}>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>

        </>
    );
};
