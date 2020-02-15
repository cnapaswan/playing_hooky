import React, { useState, useEffect } from 'react';

function Title(props) {
    const [title, setTitle] = useState('miao');

    function handleTitleChange (e) {
        setTitle(e.target.value);
    }

    useEffect(() => {
        document.title = title;
    })
    return (
        <div>
            <div>Change title here:</div>
            <input value={title} onChange={handleTitleChange}></input>
        </div>
    );
}

export default Title;
