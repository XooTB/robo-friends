const SearchBar = ({ Change }) => {
    return (
        <div>
            <input type='search' onChange={Change} placeholder='Search'/>
        </div>
    )
}

export default SearchBar;