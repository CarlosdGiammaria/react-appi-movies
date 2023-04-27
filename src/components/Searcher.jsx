import React from 'react'

function Searcher({handleOnchange}) {
  return (
    <div className='container-search'>
        <input
        className='text-input'
        type="text"
        placeholder="Search Movies"
        onChange={handleOnchange}
        />
    </div>
  )
}

export default Searcher