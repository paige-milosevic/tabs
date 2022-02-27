import { tab } from '@testing-library/user-event/dist/tab';
import React from 'react';

const Display = (props) => {

    const {tabText} = props;

    return(
        <div>
            <p>{tabText}</p>
        </div>
    )
}

export default Display;