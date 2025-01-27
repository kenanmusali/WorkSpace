import iconSearch from '../../../../assets/icons/Search.svg';

const SearchCalendar = () => {
  return (
    <div>
                    <div className="sbSearch">
                        <input className='SearchInput' type="text" id="" placeholder='Search' />
                        <img className='IconHover' src={iconSearch} draggable="false" />
                    </div>
    </div>
  )
}

export default SearchCalendar