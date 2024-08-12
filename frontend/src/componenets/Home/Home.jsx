import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css';
import OutputProduct from './OutputProduct';
import Inputproducts from './Inputproducts';
import AllAgriService from './AllAgriService';
import RequirementPost from './RequirementPost';
import OurPartners from './OurPartners';
import AgriServiceOff from './AgriServiceOff';
import axios from 'axios';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button } from '@mui/material';
import { useAuth } from '../../User/AuthProvider';
import RequirementWithoutLogin from './RequirementWithoutLogin';

import Fileupload from './fileUpload/Fileupload';


const Home = () => {
  const auth = useAuth();
  const location2 = useLocation()
  const CurrentUserData = auth?.auth.isAuthenticated;

  const [authUser, setAuthUser] = useState(false);
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [res, setRes] = useState({})
  const [images, setImages] = useState([])
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (CurrentUserData !== undefined) {
      setAuthUser(CurrentUserData);
    }
  }, [CurrentUserData]);

  useEffect(() => {
    AOS.init()
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location2.pathname])

  const handleSelectFile = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      setLoading(true);
      const data = new FormData();
      data.append('my_file', file);
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/uploadCl`, data);
      setRes(response.data);
      console.log("Response is", response.data)
    } catch (error) {
      console.log("Error is", error)
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className='w-100% h-100% '>

        <section data-aos="fade-up" className='mb-8' style={{
          height: "60vh",
          width: "100%",
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://res.cloudinary.com/dq7vggsop/image/upload/v1719577785/zgrsxlskgjetcyjyz10t.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <div className="text-center max-w-screen-lg px-4 md:px-8 lg:px-20">
            <h2 className="text-2xl lg:text-3xl font-bold text-green-700 py-3 lg:px-10  mb-3 border rounded-md bg-white shadow-md">
              Welcome to Karnataka Agribusiness
            </h2>
            <Link to="/requirement-post">
              <button className="py-3 px-6 md:px-8 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md shadow-md">
                Tell us what you want?
              </button>
            </Link>
          </div>
        </section>

        <div className='mr-3 ml-3 lg:mr-8 lg:ml-8'>

          <section className='mb-5'>
            <Inputproducts />
          </section>

          {/* <div>
            <label htmlFor="file" className="btn-grey">Select file</label>
            {file && <center>{file.name}</center>}
            <input id="file" type="file" onChange={handleSelectFile} multiple={false} />
            <code>
              {Object.keys(res).length > 0 &&
                Object.keys(res).map((key) => (
                  <p className="output-item" key={key}>
                    <span>{key}:</span>
                    <span>{typeof res[key] === 'object' ? 'object' : res[key]}</span>
                  </p>
                ))}
            </code>
            {file && (
              <button onClick={handleUpload} className="btn-green">
                {loading ? 'Uploading...' : 'Upload to Cloudinary'}
              </button>
            )}
          </div> */}

          <section className='mb-5'>
            <OutputProduct />
          </section>
          
          {/* On farm  */}
          <section className='mb-5'>
            <AllAgriService />
          </section>

          <section>
            {authUser && <RequirementPost />}
            {!authUser && <RequirementWithoutLogin />}
          </section>

          <section >
            {/* <h2>Our Partners</h2> */}
            <OurPartners />
          </section>

        </div>

      </div>
    </div>
  )
}

export default Home