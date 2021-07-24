
const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2' id="demo">
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search products'
        onChange={searchChange}
        
      />
    </div>
  );
}
