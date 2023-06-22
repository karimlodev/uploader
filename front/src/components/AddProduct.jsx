import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function AddProduct() {
    const [title, setTitle] = useState("")
    const [file, setFile] = useState("")
    const [preview, setPreview] = useState("")

    const navigat = useNavigate()

    const loadImage = (e) => {
        const image = e.target.files[0]
        setFile(image)
        setPreview(URL.createObjectURL(image))
    }

    const saveProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file)
        formData.append("title", title)
        console.log(formData)
        try {
            const rest = await axios.post("http://localhost:5080/products", formData, {
                headers: {
                    "content-type": "multipart/form-data"
                }
            })
            navigat("/")
            toast(rest.data.msg, {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
                pauseOnHover: true,
                theme: "light",
            });
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Navbar />

            <div className="container">
                <div className="columns  mt-5">
                    <div className="column is-half">
                        <form onSubmit={saveProduct}>
                            <div className="field">
                                <label className="label">
                                    اسم محصول
                                </label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className="input"
                                        name="title"
                                        onChange={e => setTitle(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">
                                    عکس
                                </label>

                                <div className="control">
                                    <input
                                        type="file"
                                        className="input"
                                        onChange={loadImage} />

                                    <span className="file-cta">
                                        <span className="file-label">لطفا عکسی انتخاب کنید </span>
                                    </span>

                                </div>
                            </div>

                            {
                                preview ? (
                                    <figure className="image is-128*128">
                                        <img src={preview} alt='' />
                                    </figure>
                                ) : ("")
                            }

                            <div className="field">
                                <div className="control">
                                    <button type='submit' className="button is-success">ذخیره</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct