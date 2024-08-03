import axios from 'axios'
import { useEffect } from 'react';

export default function Api() {

    let [product,setproduct] = ([])

    let baseUrl = 'https://ecommerce.routemisr.com/api/v1'
    async function getProduct() {
        
        let data = await axios.get(` ${baseUrl}/products `)
        setproduct(data.data);
    }

useEffect(()=>{
    getProduct()
},[])

  return (
    <>
        <h1>producr</h1>
        <div className="containr">
            <div className="row-tw">
                
            </div>
        </div>
    </>
  )
}
