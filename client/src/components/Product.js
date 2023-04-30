import React from 'react'
import {Card} from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'
const Product = ({product}) => {
  return (
    <Card className='my-3 p-2 rounded' style={{ maxWidth: '230px' }}>
        <Link to={`/products/${product._id}`}>
            <Card.Img src={product.image} variant="top"/>
        </Link>
        <Card.Body style={{ padding: '0.4rem' }}>
        <Link to={`/products/${product._id}`}>
            <Card.Title as='div' style={{ fontSize: '1rem' }}><strong>{product.name}</strong></Card.Title>
        </Link> 
        </Card.Body>
        <Card.Text as ='div' style={{ padding: '0.25rem 0', fontSize: '0.875rem' }}>
            <Rating value={product.rating} text={`${product.numReviews}reviews`} color=''></Rating>
        </Card.Text>
        <Card.Text as='h3' style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>₹{product.price}</Card.Text>
    </Card>
  )
}

export default Product;
