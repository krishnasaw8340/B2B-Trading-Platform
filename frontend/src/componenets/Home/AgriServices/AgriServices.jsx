import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
const AgriServices = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div>

      <div className='h-100 w-100%'>
        <section data-aos="fade-up" className='mb-8' style={{
          height: "50vh",
          width: "100%",
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://res.cloudinary.com/dq7vggsop/image/upload/v1719740990/t4ygwybbtw5y2tujbyum.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <div className="text-center max-w-screen-lg px-4 md:px-8 lg:px-20">
            <h2 className="text-xl lg:text-2xl font-bold text-green-900 py-2 lg:px-8  mb-2 border rounded-md bg-white shadow-md">
              Agri Services
            </h2>
            {/* <Link to="/requirement-post">
          <button className="py-3 px-6 md:px-8 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md shadow-md">
            Tell us what you want?
          </button>
        </Link> */}
          </div>
        </section>
      </div>

      <div className="h-80 bg-gray-300 flex flex-col lg:flex-row items-center justify-center py-6 px-8 lg:px-20 mb-8">
        <div className="lg:flex-1 text-center lg:text-left">
          <h3 className="text-xl font-bold mb-2">On Farm Services</h3>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aperiam nam beatae ullam
            distinctio qui deleniti quidem eveniet dolor expedita.
          </p>
          <div>
            <Link to="/agri-service/on-farm" className='text-sm'>
              <button className="bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded">
                Explore more
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:flex-1 mt-4 lg:mt-0 lg:ml-4">
          <img
            src="https://res.cloudinary.com/dq7vggsop/image/upload/v1719726322/jnbapsrojqbzgrx0oc4l.jpg"
            alt="Image Alt Text"
            // style={{height:"400", width:"400"}}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="h-80 bg-gray-300 flex flex-col lg:flex-row items-center justify-center py-6 px-8 lg:px-20 mb-8" >
        <div className="lg:flex-1 mt-4 lg:mt-0 lg:ml-4">
          <img
            src="https://res.cloudinary.com/dq7vggsop/image/upload/v1719726322/jnbapsrojqbzgrx0oc4l.jpg"
            alt="Image Alt Text"
            // style={{height:"400", width:"400"}}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:flex-1 text-center lg:text-left">
          <h3 className="text-xl font-bold mb-2">Off Farm Services</h3>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aperiam nam beatae ullam
            distinctio qui deleniti quidem eveniet dolor expedita.
          </p>
          <div>
            <Link to="/agri-service/off-farm" className='text-sm'>
              <button className="bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded">
                Explore more
              </button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AgriServices