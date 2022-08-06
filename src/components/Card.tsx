import React from "react"
import Icons from "./Icons"

interface CardProps {
    image?: string
    title?: string | JSX.Element
    content?: string | JSX.Element
    status?: "warning" | "danger" | "success"
}

const Card = ({ image, title, content, status }: CardProps) => {
    return (
        <div className="card">
            <button className="card-tool-bar">
                <Icons.Toolbar />
            </button>
            {image && (
                <div className="card-image">
                    <div style={{ backgroundImage: status==="warning" ? "linear-gradient(180deg, #C82C1B 0%, rgba(200, 44, 27, 0.1) 100%)":"" }} />
                    <img src={ image } alt="" />
                </div>
            )}
            <div className="card-body">
                {title && (
                    <span className="card-title">{title}</span>
                )}
                {/* {content && ( */}
                    <div className="card-content">
                        {status === "warning" && (
                            <small className="text-danger">Warning</small>
                        )}
                        {status === "danger" && (
                            <small className="text-danger">Danger</small>
                        )}
                        {status === "success" && (
                            <small className="text-danger">Success</small>
                        )}
                    </div>
                {/* )} */}
            </div>
        </div>
    )
}

export default Card