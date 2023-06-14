import React, { useEffect, useState } from 'react'
import { product_title } from '../configs/Local'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import { allProduct, productSave } from '../services/DummyService'
import { Product } from '../models/Product'
import { AllProduct, Products } from '../models/Products'
import ProductItem from '../components/ProductItem'

function Dashboard() {

  const validationSchema = Yup.object({
    title: Yup.string().required("Title Empty!").min(3, 'Title Min 3').max(75, 'Title Max 75'),
    price: Yup.number().required('Price Empty!').min(1, 'Price Min 1').max(100000, 'Price Max 100000'),
    detail: Yup.string().required('Detail Empty!')
  })  

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
        title: '',
        price: 0,
        detail: ''
    },
    validationSchema: validationSchema,
    onSubmit: values => {
        const sendObj:Product = {
            title: values.title,
            price: values.price,
            detail: values.detail
        } 
        productSave(sendObj).then(res => {
            console.log('res', res)
            serviceProduct()
        })
    }
  })

  const [statusSbumit, setStatusSbumit] = useState(false)
  //const [msg, setMsg] = useState('')
  const errorToast = (message: string) : string => {
    //if ( msg !== message ) {
        toast.error(message, {toastId: message })
        // toast.error(message)
        //setMsg(message)
    //}

    return ''
  } 


  const [products, setProducts] = useState<Products>()
  useEffect(() => {
    serviceProduct()
  }, [])


  const serviceProduct = () => {
    allProduct().then(res => {
      setProducts(res.data)
    })
  }
  

  return (
    <>
    <div className='row'>
        <div className='col-sm-6'>
            <h2>Product Add</h2>
            <form onSubmit={handleSubmit}>
                
                <div className='mb-3'>
                    <input name="title" onChange={handleChange} className='form-control' placeholder={product_title} />
                </div>
                { errors.title  && errorToast(errors.title) }
                
                <div className='mb-3'>
                    <input name="price" onChange={handleChange} type='number' className='form-control' placeholder='Price' />
                </div>
                { errors.price ? errors.price : '' }
                <div className='mb-3'>
                    <input name="detail" onChange={handleChange} className='form-control' placeholder='Detail' />
                </div>
                <div>{ errors.detail ? errors.detail : '' }</div>
                <button onClick={()=> setStatusSbumit(true)} type='submit' className='btn btn-success'>Send</button>
            </form>
        </div>
    </div>

    <div className='row'>
      <div>Total: {products?.total}</div>
      <div>Items: {products?.limit}</div>
      <hr/>
      { products?.products.map( (item, index) => 
        <div key={index} className='col-sm-4'><ProductItem pro={item}  /></div>
      )}
    </div>
    </>
  )
}

export default Dashboard