import React from 'react';

export default function SearchBar({ onSearch }) {
    function handleSearchChange(e) {
        const newSearchTerm = e.target.value;
        onSearch(newSearchTerm); // Call the onSearch function passed from App
    }

    return (
        <div className="search-bar" style={{display:"flex",justifyContent:"center",marginTop:"10px"}}>
            <input
                style={{padding:"10px"}}
                type="text"
                placeholder="Search notes..."
                onChange={handleSearchChange}
            />
        </div>
    );
}
