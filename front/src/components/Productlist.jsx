import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'


function Productlist() {
  const [products, setProducts] = useState([])

  const getProducts = async () => {

    const rest = await axios.get("http://localhost:5080/products")
    console.log(rest)
    setProducts(rest.data)
  }

  const deleteproduct = async (id) => {

    const del = await axios.delete(`http://localhost:5080/products/${id}`)

    toast(rest.data.msg, {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "light",
    });
    console.log(del)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <Navbar />

      <div className='container mt-5'>
        <div className="columns is-multiline">
          {
            products.map(product => {
              return (
                <div className="column is-one-quarter" key={product.id}>
                  <div className="card">
                    <div className="card-image">
                      <figure className="image">
                        <img src={product.url} alt='' />
                      </figure>

                    </div>
                    <div className="card-contant">
                      <div className="media">
                        <div className="media-contant">
                          <p className='title is-size-5'>{product.name}</p>
                        </div>
                      </div>
                    </div>

                    <footer className="card-footer">
                      <button className="card-footer-item">ویرایش </button>
                      <button onClick={() => deleteproduct(product.id)} className="card-footer-item">حذف</button>
                    </footer>

                  </div>
                </div>
              )
            })
          }
        </div>

      </div>
    </>
  )
}

export default Productlist