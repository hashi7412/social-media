import React from "react"
import Icons from "./components/Icons"

import "./Layout.scss"

interface LayoutStatus {
    children: JSX.Element | null
}

const Layout = ({ children }: LayoutStatus) => {
    return (
        <>
            <div className="sidebar">
                <div className="menu-field">
                    <div className="sidebar-section">
                        <div className="flex middle gap">
                            <img className="avatar" src={require("./assets/images/avatars/face24.jpg")} alt="Avatar" />
                            <div className="info">
                                <div className="flex mb1">
                                    <small className="text-secondary">Good Day</small>
                                    <small className="text-secondary">G</small>
                                </div>
                                <span className="bolder">Adam Macy</span>
                            </div>
                        </div>
                    </div>
                    <ul className="menu">
                        <li className="menu-item active">
                            <a href="#home">
                                <div className="menu-icon">
                                    <Icons.CameraFill />
                                </div>
                                <span>Social Media</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="#home">
                                <div className="menu-icon">
                                    <Icons.Library />
                                </div>
                                <span>Library</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="#home">
                                <div className="menu-icon">
                                    <Icons.Team />
                                </div>
                                <span>Team</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="#home">
                                <div className="menu-icon">
                                    <Icons.Support />
                                </div>
                                <span>Support</span>
                            </a>
                        </li>
                    </ul>
                    <div className="sidebar-section">
                        <button className="btn btn-primary w100">Add media</button>
                    </div>
                </div>
                <div className="sidebar-footer">
                    <div className="sidebar-section">
                        <div className="py3">
                            <small className="text-danger mb2 block">10 days left on trial</small>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: `${70}%` }}></div>
                            </div>
                        </div>
                        <button className="btn btn-info w100">Upgrade</button>
                    </div>
                </div>
            </div>
            <main className="container">
                <div className="breadcrumb">
                    <span className="text-secondary">Social Media</span>
                    <span className="text-secondary"> / </span>
                    <span>Project #1</span>
                </div>
                {children}
            </main>
        </>
    )
}

export default Layout