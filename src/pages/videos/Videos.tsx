import React from 'react';

type VideosPageProperties = {
    style: React.CSSProperties
}

function Videos({style}: VideosPageProperties) {
    return (
        <div style={style}></div>
    );
}

export default Videos;