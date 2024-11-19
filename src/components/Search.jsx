import React, { useEffect, useState } from 'react'

export default function Search(props) {
    const [ searchText, setSearchText ] = useState('');
    const handleChange = (e) => {
        setSearchText(e.target.value);      
    }

    useEffect(() => {
        props.onsearchHandler(searchText);
    }, [searchText]);

    return (
        <div style={{ textAlign: 'center',marginTop:'20px' }}>
            <input onChange={handleChange} type="text" value={searchText} placeholder='Search Text' />
        </div>
    )
}
