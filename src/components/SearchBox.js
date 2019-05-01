import React from 'react';

const SearchBox = ({ onSearchChange }) => (

    <div className="pa2">
        <input 
            className="pa3 ba b--green bg-lightest-blue"
            type="text" 
            placeholder="search robots"
            onChange={onSearchChange}
        />
    </div>
    
);

export default SearchBox;