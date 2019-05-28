import React from 'react';

/*
 * You can delete this file, this is just a test on one react component
 */

const Test = (props) => {
    const {title} = props;
    return (
        <div>
            <h1>This is a static title </h1>
            <h2>This is a dynamic title: {title}</h2>
            <p> paragraph:
                {title}
            </p>
        </div>
    )
}

export default Test;
