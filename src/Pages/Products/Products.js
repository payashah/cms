import React from 'react'
import "./Products.css"
import ProductsBox from '../../Components/ProductsBox/ProductsBox'
import AddNewProduct from '../../Components/AddNewProduct/AddNewProduct'

export default function Products() {
    return (
        <>
            <AddNewProduct></AddNewProduct>
            <div className='products'>
                <table className='products-table'>
                    <thead>
                        <tr className='products-table-tr'>
                            <th className='products-table-tr-th'>عکس </th>
                            <th className='products-table-tr-th'>عکس </th>
                            <th className='products-table-tr-th'>عکس </th>
                            <th className='products-table-tr-th'></th>
                        </tr>
                    </thead>
                    <ProductsBox></ProductsBox>
                    <ProductsBox></ProductsBox>
                    <ProductsBox></ProductsBox>

                </table>
            </div>


        </>
    )
}
