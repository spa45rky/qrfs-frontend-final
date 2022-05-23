import React from "react";
import { Link } from "react-router-dom";
import superadminSidebar from "./superadminSidebar";
import complaineeSidebar from "./complaineeSidebar";
import adminSidebar from "./adminSidebar";
import { useLocation } from "react-router-dom";


const Sidebar = (props) => {

    const url = useLocation()
    console.log({url})

    const role = props.role

    console.log(role)

    const superadmin = superadminSidebar;
    const complainee = complaineeSidebar;
    const admin = adminSidebar;

    let content = []

    switch(role) {
        case "SUPERADMIN":
            content = superadmin
            break;
        case "COMPLAINEE":
            content = complainee
            break;
        case "ADMIN":
            content = admin
            break;
    }
    return(
        <div className="sidebar">
            {content.map((item) =>
                <div className={`sidebar-item ${url.pathname.includes(item.link) ? "nav-active" : null}`}>
                    <img src={item.icon} className="item-icon"/>
                    <Link to={item.link} className="item-title">{item.title}</Link>
                </div>
            )}
        </div>
    )
}

export default Sidebar