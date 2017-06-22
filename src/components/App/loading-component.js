import React from 'react';
import glamorous from 'glamorous';

const LoadingGIF = glamorous.img({
    height: 60,
    width: 60,
    marginTop: 100
});

export const LoadingComponent = () => {
    return (<LoadingGIF src='https://res.cloudinary.com/ishanvadwala/image/upload/v1498107123/default_1_spnevs.gif'/>);
};