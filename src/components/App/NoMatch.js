import * as React from 'react';
import { H1, H2 } from 'glamorous';

const NoMatch = () => {
    return (
        <div>
            <H1 fontWeight={100}> Error 404 </H1>
            <H2 fontWeight={100}> Resource not found </H2>
        </div>
    );
};

export default NoMatch;