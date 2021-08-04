import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
    return (
        <div>
            <br />
            <br />
            <br />
            <ul>
                <li><Link to="/products/pid">Pen</Link></li>
                <li>Book</li>
                <li>Mobile</li>
                <li>Laptop</li>
            </ul>
        </div>
    )
}

export default Products
