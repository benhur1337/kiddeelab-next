'use client'

import YouTube from "react-youtube";

export default function Player() {
    const opts = {
        height: "350px",
        width: "100%",
    };
    return (
        <div className="drop-shadow-md" style={{ minWidth: "50%" }}>
            <YouTube videoId="1-DClzkHc6Y" opts={opts}></YouTube>
        </div>
    )
}