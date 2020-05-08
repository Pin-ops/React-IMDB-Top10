import React from 'react'
import {Navbar,Nav,Form,Button,FormControl } from 'react-bootstrap'

export default function Header() {
    return (
        <div>
        <Navbar bg="dark" className="mb-3">
            <Navbar.Brand href="/" className="text-white">IMDB</Navbar.Brand>

                <Nav className="mr-auto text-white"  >
                    <Nav.Link className="text-white" href="/">Home</Nav.Link>
                    <Nav.Link className="text-white" href="/movies">Movies</Nav.Link>
                    <Nav.Link className="text-white" href="/categories">Categories</Nav.Link>
                    <Nav.Link className="text-white" href="/top10">Top 10</Nav.Link>
                </Nav>

                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                 </Form>
        </Navbar>
        </div>
    )
}
