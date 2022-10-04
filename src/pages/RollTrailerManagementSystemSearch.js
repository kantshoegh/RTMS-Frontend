import React, { useState } from 'react';
// import "./App.css";
export const RollTrailerManagementSystemSearch = () => {


    
    const itemList = [
        "Apple",
        "Apple",
        "Orange",
        "Banana",
        "Cherry",
        "Milk",
        "Peanuts",
        "Butter",
        "Tomato"
    ];

    const [filteredList, setFilteredList] = new useState(itemList);

    const filterBySearch = (event) => {
        // Access input value
        const query = event.target.value;
        // Create copy of item list
        var updatedList = [...itemList];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) => {
            return item.toLowerCase().indexOf(query.toLowerCase()) !== -1
        })

        console.log('updatedList',updatedList);
        setFilteredList(updatedList);
    };
    // Trigger render with updated values
  
    
    return (
        <>
            <div className="search-header">
                <div className="search-text">Trailer Code:</div>
                <input id="search-box" onChange={filterBySearch} />
            </div>

            <div className="search-header">
                <div className="search-text">Port:</div>
                <input id="search-box" onChange={filterBySearch} />
            </div>


            <div className="search-header">
                <div className="search-text">Status:</div>
                <input id="search-box" onChange={filterBySearch} />
            </div>


            <div className="search-header">
                <div className="search-text">Status:</div>
                <input id="search-box" onChange={filterBySearch} />
            </div>

            <div className="search-header">
                <div className="search-text">Vessel:</div>
                <input id="search-box" onChange={filterBySearch} />
            </div>
            

            <div id="item-list">
                <ul>
                    {filteredList.map((item, index) => (
                        <li key={index}>{item} <button>View Details</button><button></button></li>
                    ))}
                </ul>
            </div>
        </>
    )

}
