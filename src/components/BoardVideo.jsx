import React from 'react'

function BoardVideo({movies}) {
  return (
    <div>
         <table className='container'>
            <thead>
            <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Type</th>
            </tr>
            </thead>
            <tbody>
            {
              movies && movies.map((movie) => (
                <tr key={movie.imdbID}>
                    <td>{movie.Title}</td>
                    <td>{movie.Year}</td>
                    <td>{movie.Type}</td>
                </tr>
              ))
            }
            </tbody>
      </table>
    </div>
  )
}

export default BoardVideo