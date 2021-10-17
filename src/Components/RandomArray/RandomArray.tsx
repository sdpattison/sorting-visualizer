// import third party dependencies
import React from 'react';

// import local dependencies
import { renderArray } from '../../Utils/array.utils';
import './randomarray.styles.sass';


const RandomArray = (length: number = 10): JSX.Element =>{
    const content: Array<JSX.Element> = renderArray(15);

    return(
        <div>
            { content }
        </div>
    );

}
export default RandomArray;