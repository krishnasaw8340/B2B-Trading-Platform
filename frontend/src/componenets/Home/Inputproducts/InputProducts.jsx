import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const farmMachineriesArray2 = [
  { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718267719/hfyytu1r4qf0gdq06r83.jpg', category: 'Brush Cutter', slug: 'brush-cutter' },
  { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718267719/hfyytu1r4qf0gdq06r83.jpg', category: 'Power Weeder', slug: 'power-weeder' },
  { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718267719/hfyytu1r4qf0gdq06r83.jpg', category: 'Power Tiller', slug: 'power-tiller' },
  { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718267719/hfyytu1r4qf0gdq06r83.jpg', category: 'Water Pumps', slug: 'water-pumps' },
  { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718267719/hfyytu1r4qf0gdq06r83.jpg', category: 'Sprayers', slug: 'sprayers' },
  { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718267719/hfyytu1r4qf0gdq06r83.jpg', category: 'HTP Sprayers', slug: 'htp-sprayers' },
  { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718267719/hfyytu1r4qf0gdq06r83.jpg', category: 'Earth Auger', slug: 'earth-auger' },
  { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718267719/hfyytu1r4qf0gdq06r83.jpg', category: 'Chain Saw', slug: 'chain-saw' },
  { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718267719/hfyytu1r4qf0gdq06r83.jpg', category: 'Hedge Trimmer', slug: 'hedge-trimmer' },
  { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718267719/hfyytu1r4qf0gdq06r83.jpg', category: 'Pole Pruner', slug: 'pole-pruner' },
  { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718267719/hfyytu1r4qf0gdq06r83.jpg', category: 'Chaff Cutter', slug: 'chaff-cutter' },
  { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718267719/hfyytu1r4qf0gdq06r83.jpg', category: 'Milking Machine', slug: 'milking-machine' },
  { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718267719/hfyytu1r4qf0gdq06r83.jpg', category: 'Lawn Mover', slug: 'lawn-mover' },
  { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718267719/hfyytu1r4qf0gdq06r83.jpg', category: 'Generator', slug: 'generator' },
  { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718267719/hfyytu1r4qf0gdq06r83.jpg', category: 'Concrete Vibrator', slug: 'concrete-vibrator' },
  { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718267719/hfyytu1r4qf0gdq06r83.jpg', category: 'Engines', slug: 'engines' },
]

const implementsAndOthersArray = [
  {
    category: "grow-bag",
    img: "https://res.cloudinary.com/dq7vggsop/image/upload/v1718267774/p6ltpyfsaa3dpn7mugfh.jpg",
    slug: "grow-bag"
  },
  {
    category: "shade-net",
    img: "https://res.cloudinary.com/dq7vggsop/image/upload/v1718267774/p6ltpyfsaa3dpn7mugfh.jpg",
    slug: "shade-net"
  },
  {
    category: "Sprayer-Manual",
    img: "https://res.cloudinary.com/dq7vggsop/image/upload/v1718267774/p6ltpyfsaa3dpn7mugfh.jpg",
    slug: "sprayer-manual"
  },
  {
    category: "Hose-Pipe",
    img: "https://res.cloudinary.com/dq7vggsop/image/upload/v1718267774/p6ltpyfsaa3dpn7mugfh.jpg",
    slug: "hose-pipe"
  },
  {
    category: "Coconut-Climber",
    img: "https://res.cloudinary.com/dq7vggsop/image/upload/v1718267774/p6ltpyfsaa3dpn7mugfh.jpg",
    slug: 'coconut-climber'
  },
  {
    category: "Coconut-Dehusker",
    img: "https://res.cloudinary.com/dq7vggsop/image/upload/v1718267774/p6ltpyfsaa3dpn7mugfh.jpg",
    slug: 'coconut-dehusker'
  },
  {
    category: "Milking-Machine-Manual",
    img: "https://res.cloudinary.com/dq7vggsop/image/upload/v1718267774/p6ltpyfsaa3dpn7mugfh.jpg",
    slug: 'milking-machine-manual'
  },
]

const fertilizerArray = [
  {
    category: "organic",
    img: "https://res.cloudinary.com/dq7vggsop/image/upload/v1718266657/u8cjh6mpxwyk4nwkqcav.jpg",
    slug: 'organic'
  },
  {
    category: "inorganic",
    img: "https://res.cloudinary.com/dq7vggsop/image/upload/v1718266657/u8cjh6mpxwyk4nwkqcav.jpg",
    slug: 'inorganic'
  }
]

const pesticidesArray = [
  {
    category: "organic",
    img: "https://res.cloudinary.com/dq7vggsop/image/upload/v1718266657/u8cjh6mpxwyk4nwkqcav.jpg",
    slug: 'organic'
  },
  {
    category: "inorganic",
    img: "https://res.cloudinary.com/dq7vggsop/image/upload/v1718266657/u8cjh6mpxwyk4nwkqcav.jpg",
    slug: 'inorganic'
  }
]

const irrigationSystemArray = [
  {
    category: "Drip-Irrigation",
    img: "https://res.cloudinary.com/dq7vggsop/image/upload/v1718266657/u8cjh6mpxwyk4nwkqcav.jpg",
    slug: "drip-irrigation"
  },
  {
    category: "Sprinkler-Irrigation",
    img: "https://res.cloudinary.com/dq7vggsop/image/upload/v1718266657/u8cjh6mpxwyk4nwkqcav.jpg",
    slug: "sprinkler-irrigation"
  },
  {
    category: "Irrigation technologies",
    img: "https://res.cloudinary.com/dq7vggsop/image/upload/v1718266657/u8cjh6mpxwyk4nwkqcav.jpg",
    slug: "irrigation-technologies"
  },
  {
    category: "Economical Irrigation",
    img: "https://res.cloudinary.com/dq7vggsop/image/upload/v1718266657/u8cjh6mpxwyk4nwkqcav.jpg",
    slug: "economical-irrigation"
  }
]

const agritechSolutionArray = [
  {
    catgegory: "first",
    img: "https://res.cloudinary.com/dq7vggsop/image/upload/v1718266657/u8cjh6mpxwyk4nwkqcav.jpg",
    slug: "first"
  },
  {
    catgegory: "second",
    img: "https://res.cloudinary.com/dq7vggsop/image/upload/v1718266657/u8cjh6mpxwyk4nwkqcav.jpg",
    slug: "second"
  },
  {
    catgegory: "third",
    img: "https://res.cloudinary.com/dq7vggsop/image/upload/v1718266657/u8cjh6mpxwyk4nwkqcav.jpg",
    slug: "third"
  },
]

const seedsAndPlantsArray = [
  {
    category: "category1",
    img: "https://res.cloudinary.com/dq7vggsop/image/upload/v1718266657/u8cjh6mpxwyk4nwkqcav.jpg",
    slug: "category1"
  },
  {
    category: "category2",
    img: "https://res.cloudinary.com/dq7vggsop/image/upload/v1718266657/u8cjh6mpxwyk4nwkqcav.jpg",
    slug: "category2"
  },
  {
    category: "category3",
    img: "https://res.cloudinary.com/dq7vggsop/image/upload/v1718266657/u8cjh6mpxwyk4nwkqcav.jpg",
    slug: "category3"
  },
  {
    category: "category4",
    img: "https://res.cloudinary.com/dq7vggsop/image/upload/v1718266657/u8cjh6mpxwyk4nwkqcav.jpg",
    slug: "category4"
  },
]

const InputProducts = () => {
  
  const [farmMachineryStartIndex, setfarmMachineryStartIndex] = useState(0);

  const [implementAndOtherStartIndex, setImplementAndOtherStartIndex] = useState(0);

  const [itemsToShow, setItemsToShow] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      const windowsWidth = window.innerWidth;
      if (windowsWidth <= 768) {
        setItemsToShow(2);
      }
      else if (windowsWidth <= 1024) {
        setItemsToShow(4);
      }
      else {
        setItemsToShow(5);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize)

  }, [])

  useEffect(() => {
    AOS.init()
  }, [])
  

  const handleNextClick = (category) => {
    if (category === 'farmMachineryArray') {
      setfarmMachineryStartIndex((prevIndex) => (prevIndex === 0 ? farmMachineriesArray2.length - 1 : prevIndex - 1));
    }
    if (category === 'implementsAndOthers') {
      setImplementAndOtherStartIndex((prevIndex) => (prevIndex === 0 ? implementsAndOthersArray - 1 : prevIndex - 1))
    }
  }

  const handlePrevClick = (category) => {

    if (category === 'farmMachineryArray') {
      setfarmMachineryStartIndex((prevIndex) => (prevIndex + 1) % farmMachineriesArray2.length)
    }
    if (category === 'implementsAndOthers') {
      setImplementAndOtherStartIndex((prevIndex) => (prevIndex + 1) % implementsAndOthersArray.length)
    }
  }

  const farmMachineryProduct = [];
  for (let i = 0; i < itemsToShow; i++) {
    farmMachineryProduct.push(farmMachineriesArray2[(farmMachineryStartIndex + i) % farmMachineriesArray2.length]);
  }
  farmMachineryProduct.reverse()


  const implementAndOtherProduct = [];
  for (let i = 0; i < itemsToShow; i++) {
    implementAndOtherProduct.push(implementsAndOthersArray[(implementAndOtherStartIndex + i) % implementsAndOthersArray.length])
  }
  implementAndOtherProduct.reverse();



  return (
    <div className='h-100 w-100%'>

      <section data-aos="fade-up" className='mb-8' style={{
        height: "30vh",
        width: "100%",
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://res.cloudinary.com/dq7vggsop/image/upload/v1719722799/opxxzctihisvfz4femsd.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <div className="text-center max-w-screen-lg px-4 md:px-8 lg:px-20">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-600 py-2 lg:px-8  mb-2 border rounded-md bg-white shadow-md">
            Agri Input Products
          </h2>

        </div>
      </section>

      <h3 className='text-2xl text-gray-700 text-center font-medium pb-10'>Get All Input Products for your Agricultural needs </h3>
      
      {/* Farm Machinery */}
      <div >
        <div className='flex flex-row justify-between lg:mr-12 lg:ml-12 ml-3 mr-3 mt-5' >
          <h2>Farm Machinery</h2>
          <Link to="/input-product/farm-machinery">
            <p>See more..</p>
          </Link>
        </div>
        <div className='flex flex-row items-center mb-8 justify-center'>
          <button onClick={() => handlePrevClick('farmMachineryArray')} className='p-2'>
            <ArrowBackIosIcon />
          </button>
          <div className='flex flex-row overflow-hidden gap-x-4'> 
            {farmMachineryProduct.map((product, index) => (
              <div
                key={index}
                className='flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-lg justify-center gap-4'
                style={{ animationDuration: '0.5s', animationFillMode: 'forwards' }}
              >
                <Link key={index} to={`/input-product/farm-machinery/${product.slug}`}>
                  <div className='flex flex-col items-center mx-2' style={{ animationDuration: '0.5s', animationFillMode: 'forwards' }}>
                    <img src={product.img} alt='product-img' className='w-32 h-32 object-cover' />
                    <p className='mt-2'>{product.category}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <button onClick={() => handleNextClick('farmMachineryArray')} className='p-2'>
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>

      {/* Implements and Others */}
      <div >
        <div className='flex flex-row justify-between lg:mr-12 lg:ml-12 ml-3 mr-3 mt-5' >
          <h2>Implements and Others</h2>
          <p>See more..</p>
        </div>
        <div className='flex flex-col items-center mb-8'>
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
            {implementsAndOthersArray.map((product, index) => (
              <div
                key={index}
                className='flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-lg justify-center'
                style={{ animationDuration: '0.5s', animationFillMode: 'forwards' }}
              >
                <Link key={index} to={`/input-product/implements/${product.slug}`}>
                  <img src={product.img} alt='product-img' className='w-32 h-32 object-cover rounded-full' />
                  <div className='flex-grow'></div>
                  <p className='mt-2'>{product.category}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Irrigation Systems */}
      <div className='flex flex-row justify-between lg:mr-12 lg:ml-12 ml-3 mr-3 mt-5' >
        <h2>Irrigation Systems</h2>
        <p>See more..</p>
      </div>
      <div className='flex flex-col items-center mb-8'>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {irrigationSystemArray.map((product, index) => (
            <div
              key={index}
              className='flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-lg justify-center'
              style={{ animationDuration: '0.5s', animationFillMode: 'forwards' }}
            >
              <Link key={index} to={`/input-product/irrigation/${product.slug}`}>
                <img src={product.img} alt='product-img' className='w-32 h-32 object-cover rounded-full' />
                <div className='flex-grow'></div> 
                <p className='mt-2'>{product.category}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Pesticides */}
      <div className='flex flex-row justify-between lg:mr-12 lg:ml-12 ml-3 mr-3 mt-5' >
        <h2>Pesticides</h2>
        <p>See more..</p>
      </div>
      <div className='flex flex-row items-center justify-center mb-8'>
        <div className='flex flex-row overflow-hidden'>
          {pesticidesArray.map((product, index) => (
            <div
              key={index}
              className='flex flex-col items-center mx-2 p-4 border border-gray-300 rounded-lg shadow-lg justify-center'
              style={{ animationDuration: '0.5s', animationFillMode: 'forwards' }}
            >
              <Link key={index} to={`/input-product/pesticides/${product.slug}`}>
                <img src={product.img} alt='product-img' className='w-32 h-32 object-cover rounded-full' />
                <div className='flex-grow'></div> 
                <p className='mt-2'>{product.category}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Fertilizer */}
      <div className='flex flex-row justify-between lg:mr-12 lg:ml-12 ml-3 mr-3 mt-5' >
        <h2>Fertilizer</h2>
        <p>See more..</p>
      </div>
      <div className='flex flex-row items-center justify-center mb-8'>
        <div className='flex flex-row overflow-hidden'>
          {fertilizerArray.map((product, index) => (
            <div
              key={index}
              className='flex flex-col items-center mx-2 p-4 border border-gray-300 rounded-lg shadow-lg justify-center'
              style={{ animationDuration: '0.5s', animationFillMode: 'forwards' }}
            >
              <Link to={`/input-product/fertilizer/${product.slug}`}>
                <img src={product.img} alt='product-img' className='w-32 h-32 object-cover rounded-full' />
                <div className='flex-grow'></div> 
                <p className='mt-2'>{product.category}</p>
              </Link>

            </div>
          ))}
        </div>
      </div>

      {/* Agritech Solution */}
      <div className='flex flex-row justify-between lg:mr-12 lg:ml-12 ml-3 mr-3 mt-5' >
        <h2>Agritech Solution</h2>
        <p>See more..</p>
      </div>
      <div className='flex flex-col items-center justify-center mb-8'>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {agritechSolutionArray.map((product, index) => (
            <div
              key={index}
              className='flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-lg justify-center'
              style={{ animationDuration: '0.5s', animationFillMode: 'forwards' }}
            >
              <Link key={index} to={`/input-product/agritech-solutions/${product.slug}`}>
                <img src={product.img} alt='product-img' className='w-32 h-32 object-cover rounded-full' />
                <div className='flex-grow'></div> 
                <p className='mt-2'>{product.category}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Seeds and Plants */}
      <div className='flex flex-row justify-between lg:mr-12 lg:ml-12 ml-3 mr-3 mt-5' >
        <h2>Seeds and Plants</h2>
        <p>See more..</p>
      </div>
      <div className='flex flex-col items-center mb-8'>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {seedsAndPlantsArray.map((product, index) => (
            <div
              key={index}
              className='flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-lg justify-center'
              style={{ animationDuration: '0.5s', animationFillMode: 'forwards' }}
            >
              <Link key={index} to={`/input-product/seeds-and-plants/${product.slug}`}>
                <img src={product.img} alt='product-img' className='w-32 h-32 object-cover rounded-full' />
                <div className='flex-grow'></div> 
                <p className='mt-2'>{product.category}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default InputProducts