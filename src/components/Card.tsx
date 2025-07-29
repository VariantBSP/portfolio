import React from "react";

interface CardProps {
    iconLink: string;
    iconAlt: string;
    title: string;
    content: string;
}

function Card (props:CardProps) {
    const { title, content, iconLink, iconAlt } = props;

    return (
        <>
            <div className="card">
                <div className="box">
                    <img src={iconLink} alt={iconAlt} />
                    <h3> {title} <span> &#x1F517;</span> </h3>
                </div>

                <p> {content} </p>
            </div>
            <div className="lightBox">
                <div className="lightBoxContent">Hi</div>
            </div>
        </>
    );
}

export default Card;

