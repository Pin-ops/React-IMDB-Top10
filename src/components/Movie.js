import React from 'react'
import { Table } from 'react-bootstrap'

function Movie( {movieList, tableToggle} ) {

   let movieListTable= movieList.map( item =>
            <tr key ={item[0]}>
                <td> {item[0]} </td>
                <td> {item[1]} </td>
                <td> {item[2]} </td>
                <td> {item[3]} </td>
                <td> {item[4]} </td>
            </tr>
    )

    const tableToggleClass = tableToggle ? "my-5 text-center" : "d-none"

    return (

        <Table className={tableToggleClass} striped bordered hover size="sm" >
            <thead>
                <tr>
                    <th> Order </th>
                    <th> Movie Name </th>
                    <th> IMDB Rating </th>
                    <th> Year </th>
                    <th> Comments </th>
                </tr>
            </thead>
            <tbody className="text-center">
                {movieListTable}
            </tbody>
        </Table>

    )
}

export default Movie
