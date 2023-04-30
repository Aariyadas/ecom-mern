import React ,{useEffect, useState} from "react";
import axios from 'axios'
import Product from  '../components/Product'
import { Row, Col } from "react-bootstrap";

const Home = () => {
    const [products,setProducts] =useState([])

    useEffect(() =>{
        console.log('ai');
        const fetchProducts =async () =>{
            console.log("hii")
            const {data} = await axios.get('/api/products')
             console.log(data)
            setProducts(data)
        }
        fetchProducts()
    },[])
  return (
    <>
      <h1>LatestProducts</h1>
      <Row>
        {products.map((product) => (
          <Col key ={product._id} sm={12} md={6} lg={4} xl={3}>
           <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
