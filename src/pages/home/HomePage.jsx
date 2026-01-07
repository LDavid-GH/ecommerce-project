import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { ProductsGrid } from './ProductsGrid';
import './HomePage.css';


export function HomePage({ cart }) {

    //Requesting products information from backend server and uses it to show the product detail.
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getHomeData = async () => {
            const response = await axios.get('/api/products')
            setProducts(response.data)
        }
        getHomeData();
    }, [])

    return (
        <>
            <title>ECommerce Project</title>

            <Header cart={cart} />

            <div className="home-page">
                <ProductsGrid products={products} />
            </div>
        </>
    )
}