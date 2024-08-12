import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import axios from 'axios'

const ImplementCategory = () => {
  const location2 = useLocation()
  const [showSidebar, setShowSidebar] = useState(true);

  const [sellerName, setSeller] = useState('')
  const [priceRange, setPricerange] = useState('')
  const [locationArea, setLocationArea] = useState('')
  const [products, setProducts] = useState([])


  useEffect(()=>{
    window.scrollTo(0,0)
  },[location2.pathname])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShowSidebar(false);
      }
      else {
        setShowSidebar(true);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize)
  }, [])


  const { subcategory } = useParams();


  // All Sellers who sell the same category product: API
  const seller = [
    { "id": 1, "name": "Seller 1" },
    { "id": 2, "name": "Seller 2" },
    { "id": 3, "name": "Seller 3" }
  ]

  // Prices Ranges from : API
  const price = [
    { "id": 1, "value": "0-99" },
    { "id": 2, "value": "100-499" },
    { "id": 3, "value": "500-999" },
    { "id": 4, "value": "1000-4999" },
  ]

  // Location based Products:  API 
  const location = [
    { "id": 1, "city": "Location 1" },
    { "id": 2, "city": "Location 2" },
    { "id": 3, "city": "Location 3" }
  ]

  const products2 = [
    {
      vendor_id: '668a5978d0fd83884d887255',
      product_name: "Grow Bag A",
      price: 10,
      cuttedPrice: 15,
      description: "Durable and eco-friendly grow bag",
      product_super_type: "Implements and Others",
      product_category: "Grow Bag",
      product_subcategory: "",
      stock: 200,
      warranty: 6,
      specifications: [
        { title: "Material", desc: "Polyethylene" },
        { title: "Size", desc: "10L" }
      ],
      images: [
        { public_id: "img7", url: "https://example.com/img7.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 7",
      productSlug: "grow-bag-a",
      slug: "grow-bag"
    },
    {
      vendor_id: '668a5978d0fd83884d887255',
      product_name: "Grow Bag B",
      price: 12,
      cuttedPrice: 18,
      description: "High-quality grow bag",
      product_super_type: "Implements and Others",
      product_category: "Grow Bag",
      product_subcategory: "",
      stock: 250,
      warranty: 6,
      specifications: [
        { title: "Material", desc: "Non-woven fabric" },
        { title: "Size", desc: "15L" }
      ],
      images: [
        { public_id: "img8", url: "https://example.com/img8.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 8",
      productSlug: "grow-bag-b",
      slug: "grow-bag"
    },
    {
      vendor_id: '668a5978d0fd83884d887255',
      product_name: "Grow Bag C",
      price: 14,
      cuttedPrice: 20,
      description: "Reusable and breathable grow bag",
      product_super_type: "Implements and Others",
      product_category: "Grow Bag",
      product_subcategory: "",
      stock: 300,
      warranty: 6,
      specifications: [
        { title: "Material", desc: "Jute" },
        { title: "Size", desc: "20L" }
      ],
      images: [
        { public_id: "img9", url: "https://example.com/img9.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 9",
      productSlug: "grow-bag-c",
      slug: "grow-bag"
    },
    {
      vendor_id: '668a5978d0fd83884d887255',
      product_name: "Shade Net A",
      price: 30,
      cuttedPrice: 40,
      description: "High-density shade net",
      product_super_type: "Implements and Others",
      product_category: "Shade Net",
      product_subcategory: "",
      stock: 150,
      warranty: 12,
      specifications: [
        { title: "Material", desc: "Polypropylene" },
        { title: "Shade Factor", desc: "50%" }
      ],
      images: [
        { public_id: "img10", url: "https://example.com/img10.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 10",
      productSlug: "shade-net-a",
      slug: "shade-net"
    },
    {
      vendor_id: '668a5978d0fd83884d887255',
      product_name: "Shade Net B",
      price: 35,
      cuttedPrice: 45,
      description: "Durable and lightweight shade net",
      product_super_type: "Implements and Others",
      product_category: "Shade Net",
      product_subcategory: "",
      stock: 180,
      warranty: 12,
      specifications: [
        { title: "Material", desc: "HDPE" },
        { title: "Shade Factor", desc: "70%" }
      ],
      images: [
        { public_id: "img11", url: "https://example.com/img11.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 11",
      productSlug: "shade-net-b",
      slug: "shade-net"
    },
    {
      vendor_id: '668a5978d0fd83884d887255',
      product_name: "Shade Net C",
      price: 40,
      cuttedPrice: 50,
      description: "UV-stabilized shade net",
      product_super_type: "Implements and Others",
      product_category: "Shade Net",
      product_subcategory: "",
      stock: 200,
      warranty: 12,
      specifications: [
        { title: "Material", desc: "Nylon" },
        { title: "Shade Factor", desc: "90%" }
      ],
      images: [
        { public_id: "img12", url: "https://example.com/img12.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 12",
      productSlug: "shade-net-c",
      slug: "shade-net"
    },
    {
      vendor_id: '668a5978d0fd83884d887255',
      product_name: "Sprayer Manual A",
      price: 25,
      cuttedPrice: 35,
      description: "Manual hand sprayer",
      product_super_type: "Implements and Others",
      product_category: "Sprayer Manual",
      product_subcategory: "",
      stock: 100,
      warranty: 12,
      specifications: [
        { title: "Capacity", desc: "5L" },
        { title: "Material", desc: "Plastic" }
      ],
      images: [
        { public_id: "img13", url: "https://example.com/img13.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 13",
      productSlug: "sprayer-manual-a",
      slug: "sprayer-manual"
    },
    {
      vendor_id: '668a5978d0fd83884d887255',
      product_name: "Sprayer Manual B",
      price: 30,
      cuttedPrice: 40,
      description: "Efficient manual sprayer",
      product_super_type: "Implements and Others",
      product_category: "Sprayer Manual",
      product_subcategory: "",
      stock: 120,
      warranty: 12,
      specifications: [
        { title: "Capacity", desc: "8L" },
        { title: "Material", desc: "Stainless Steel" }
      ],
      images: [
        { public_id: "img14", url: "https://example.com/img14.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 14",
      productSlug: "sprayer-manual-b",
      slug: "sprayer-manual"
    },
    {
      vendor_id: '668a5978d0fd83884d887255',
      product_name: "Sprayer Manual C",
      price: 35,
      cuttedPrice: 45,
      description: "High-capacity manual sprayer",
      product_super_type: "Implements and Others",
      product_category: "Sprayer Manual",
      product_subcategory: "",
      stock: 140,
      warranty: 12,
      specifications: [
        { title: "Capacity", desc: "10L" },
        { title: "Material", desc: "Aluminum" }
      ],
      images: [
        { public_id: "img15", url: "https://example.com/img15.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 15",
      productSlug: "sprayer-manual-c",
      slug: "sprayer-manual"
    },
    {
      vendor_id: '668a5978d0fd83884d887255',
      product_name: "Hose Pipe A",
      price: 20,
      cuttedPrice: 30,
      description: "Flexible garden hose pipe",
      product_super_type: "Implements and Others",
      product_category: "Hose Pipe",
      product_subcategory: "",
      stock: 200,
      warranty: 6,
      specifications: [
        { title: "Length", desc: "10m" },
        { title: "Material", desc: "PVC" }
      ],
      images: [
        { public_id: "img16", url: "https://example.com/img16.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 16",
      productSlug: "hose-pipe-a",
      slug: "hose-pipe"
    },
    {
      vendor_id: '668a5978d0fd83884d887255',
      product_name: "Hose Pipe B",
      price: 25,
      cuttedPrice: 35,
      description: "Heavy-duty hose pipe",
      product_super_type: "Implements and Others",
      product_category: "Hose Pipe",
      product_subcategory: "",
      stock: 180,
      warranty: 6,
      specifications: [
        { title: "Length", desc: "15m" },
        { title: "Material", desc: "Rubber" }
      ],
      images: [
        { public_id: "img17", url: "https://example.com/img17.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 17",
      productSlug: "hose-pipe-b",
      slug: "hose-pipe"
    },
    {
      vendor_id: '668a5978d0fd83884d887255',
      product_name: "Hose Pipe C",
      price: 30,
      cuttedPrice: 40,
      description: "Expandable garden hose pipe",
      product_super_type: "Implements and Others",
      product_category: "Hose Pipe",
      product_subcategory: "",
      stock: 160,
      warranty: 6,
      specifications: [
        { title: "Length", desc: "20m" },
        { title: "Material", desc: "Latex" }
      ],
      images: [
        { public_id: "img18", url: "https://example.com/img18.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 18",
      productSlug: "hose-pipe-c",
      slug: "hose-pipe"
    },
    {
      vendor_id: '668a5978d0fd83884d887255',
      product_name: "Coconut Climber A",
      price: 50,
      cuttedPrice: 70,
      description: "Safe and efficient coconut climber",
      product_super_type: "Implements and Others",
      product_category: "Coconut Climber",
      product_subcategory: "",
      stock: 50,
      warranty: 12,
      specifications: [
        { title: "Material", desc: "Aluminum" },
        { title: "Weight Capacity", desc: "120kg" }
      ],
      images: [
        { public_id: "img19", url: "https://example.com/img19.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 19",
      productSlug: "coconut-climber-a",
      slug: "coconut-climber"
    },
    {
      vendor_id: '668a5978d0fd83884d887255',
      product_name: "Coconut Climber B",
      price: 55,
      cuttedPrice: 75,
      description: "Lightweight coconut climber",
      product_super_type: "Implements and Others",
      product_category: "Coconut Climber",
      product_subcategory: "",
      stock: 60,
      warranty: 12,
      specifications: [
        { title: "Material", desc: "Stainless Steel" },
        { title: "Weight Capacity", desc: "150kg" }
      ],
      images: [
        { public_id: "img20", url: "https://example.com/img20.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 20",
      productSlug: "coconut-climber-b",
      slug: "coconut-climber"
    },
    {
      vendor_id: '668a5978d0fd83884d887255',
      product_name: "Coconut Climber C",
      price: 60,
      cuttedPrice: 80,
      description: "Durable coconut climber with safety features",
      product_super_type: "Implements and Others",
      product_category: "Coconut Climber",
      product_subcategory: "",
      stock: 70,
      warranty: 12,
      specifications: [
        { title: "Material", desc: "Carbon Steel" },
        { title: "Weight Capacity", desc: "180kg" }
      ],
      images: [
        { public_id: "img21", url: "https://example.com/img21.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 21",
      productSlug: "coconut-climber-c",
      slug: "coconut-climber"
    },
    {
      vendor_id: '668a5978d0fd83884d887255',
      product_name: "Coconut Dehusker A",
      price: 35,
      cuttedPrice: 45,
      description: "Efficient coconut dehusker",
      product_super_type: "Implements and Others",
      product_category: "Coconut Dehusker",
      product_subcategory: "",
      stock: 80,
      warranty: 12,
      specifications: [
        { title: "Material", desc: "Iron" },
        { title: "Weight", desc: "5kg" }
      ],
      images: [
        { public_id: "img22", url: "https://example.com/img22.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 22",
      productSlug: "coconut-dehusker-a",
      slug: "coconut-dehusker"
    },
    {
      vendor_id: '668a5978d0fd83884d887255',
      product_name: "Coconut Dehusker B",
      price: 40,
      cuttedPrice: 50,
      description: "Sturdy and durable coconut dehusker",
      product_super_type: "Implements and Others",
      product_category: "Coconut Dehusker",
      product_subcategory: "",
      stock: 90,
      warranty: 12,
      specifications: [
        { title: "Material", desc: "Steel" },
        { title: "Weight", desc: "6kg" }
      ],
      images: [
        { public_id: "img23", url: "https://example.com/img23.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 23",
      productSlug: "coconut-dehusker-b",
      slug: "coconut-dehusker"
    },
    {
      vendor_id: '668a5978d0fd83884d887255',
      product_name: "Coconut Dehusker C",
      price: 45,
      cuttedPrice: 55,
      description: "Heavy-duty coconut dehusker",
      product_super_type: "Implements and Others",
      product_category: "Coconut Dehusker",
      product_subcategory: "",
      stock: 100,
      warranty: 12,
      specifications: [
        { title: "Material", desc: "Carbon Steel" },
        { title: "Weight", desc: "7kg" }
      ],
      images: [
        { public_id: "img24", url: "https://example.com/img24.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 24",
      productSlug: "coconut-dehusker-c",
      slug: "coconut-dehusker"
    },
    {
      vendor_id: 1,
      product_name: "Milking Machine Manual A",
      price: 100,
      cuttedPrice: 120,
      description: "Manual milking machine for efficient milking",
      product_super_type: "Implements and Others",
      product_category: "Milking Machine Manual",
      product_subcategory: "",
      stock: 30,
      warranty: 12,
      specifications: [
        { title: "Material", desc: "Stainless Steel" },
        { title: "Capacity", desc: "10L" }
      ],
      images: [
        { public_id: "img25", url: "https://example.com/img25.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 25",
      productSlug: "milking-machine-manual-a",
      slug: "milking-machine-manual"
    },
    {
      vendor_id: 1,
      product_name: "Milking Machine Manual B",
      price: 110,
      cuttedPrice: 130,
      description: "High-quality manual milking machine",
      product_super_type: "Implements and Others",
      product_category: "Milking Machine Manual",
      product_subcategory: "",
      stock: 40,
      warranty: 12,
      specifications: [
        { title: "Material", desc: "Aluminum" },
        { title: "Capacity", desc: "12L" }
      ],
      images: [
        { public_id: "img26", url: "https://example.com/img26.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 26",
      productSlug: "milking-machine-manual-b",
      slug: "milking-machine-manual"
    },
    {
      vendor_id: 1,
      product_name: "Milking Machine Manual C",
      price: 120,
      cuttedPrice: 140,
      description: "Durable manual milking machine with enhanced features",
      product_super_type: "Implements and Others",
      product_category: "Milking Machine Manual",
      product_subcategory: "",
      stock: 50,
      warranty: 12,
      specifications: [
        { title: "Material", desc: "Plastic" },
        { title: "Capacity", desc: "15L" }
      ],
      images: [
        { public_id: "img27", url: "https://example.com/img27.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 27",
      productSlug: "milking-machine-manual-c",
      slug: "milking-machine-manual"
    }
  ];

  const fetchProduct = async() =>{
    try{
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/getproduct/category/${subcategory}`)
      setProducts(response.data.products)
    }
    catch(err)
    {
      console.log("Getting error while fetching the product", err)
    }
  }
  useEffect(()=>{
    fetchProduct()
  },[])

  if (sellerName && locationArea && priceRange) {
    console.log("Seller name is coming", sellerName)
    console.log("Price Range is : ", priceRange)
    console.log("Location is : ", locationArea)
  }

  const filteredProducts = useMemo(() => {
    return products.filter((prod) => {
      const isSellerMatch = sellerName ? prod.vendor_id === parseInt(sellerName) : true;
      const isLocationMatch = locationArea ? prod.location === locationArea : true;

      let isPriceMatch = true;
      if (priceRange) {
        const [minPrice, maxPrice] = priceRange.split('-').map(Number);
        isPriceMatch = prod.price >= minPrice && prod.price <= maxPrice;
      }

      const subcategoryCheck = prod.slug === subcategory

      return isSellerMatch && isLocationMatch && isPriceMatch && subcategoryCheck;
    });
  }, [sellerName, priceRange, locationArea, subcategory]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{subcategory}</h2>
      <div className="flex flex-col lg:flex-row">
        {!showSidebar ? (
          <span className='text-gray-700 font-medium'>Filter</span>
        ) : (
          <p>{''}</p>
        )}
        {products && (
          console.log("All product with the category", products)
        )}

        {/* Left Sidebar - Filters */}
        {showSidebar ? (
          <div className="w-full lg:w-1/4 p-4 border-r border-gray-300">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            <div className="mb-4">
              <h3 className="text-lg font-medium">Seller</h3>
              <select
                className="bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-green-500"
                onChange={(e) => setSeller(e.target.value)}
                value={sellerName}
              >
                <option value="" >None</option>
                {seller.map((seller) => (
                  <option key={seller.id} value={seller.name}>{seller.name}</option>
                ))}
              </select>

            </div>
            <div className="mb-4">
              <h3 className="text-lg font-medium">Price</h3>
              <select
                className="bg-white border border-gray-300 rounded-md px-1 py-1 focus:outline-none focus:border-green-500"
                onChange={(e) => setPricerange(e.target.value)}
                value={priceRange}
              >
                <option value="" >None</option>
                {price.map((price) => (
                  <option key={price.id}>{price.value}</option>
                ))}
              </select>

            </div>
            <div className="mb-4">
              <h3 className="text-lg font-medium">Location</h3>

              <select
                className="bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-green-500"
                onChange={(e) => setLocationArea(e.target.value)}
                value={locationArea}
              >
                <option value="" >None</option>
                {location.map((location) => (
                  <option key={location.id}>{location.city}</option>
                ))}
              </select>
            </div>
          </div>

        ) : (
          <div className="bg-gray-100 text-center rounded-md shadow-md">
            <div className="flex justify-around">
              {/* Seller */}
              <select
                className="bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-green-500"
                onChange={(e) => setSeller(e.target.value)}
                value={sellerName}
              >
                <option value="" >select</option>
                {seller.map((seller) => (
                  <option key={seller.id}>{seller.name}</option>
                ))}
              </select>

              {/* Price */}
              <select
                className="bg-white border border-gray-300 rounded-md px-1 py-1 focus:outline-none focus:border-green-500"
                onChange={(e) => setPricerange(e.target.value)}
                value={priceRange}
              >
                <option value="" >select</option>
                {price.map((price) => (
                  <option key={price.id}>{price.value}</option>
                ))}
              </select>

              {/* Location */}
              <select
                className="bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-green-500"
                onChange={(e) => setLocationArea(e.target.value)}
                value={locationArea}
              >
                <option value="" >select</option>
                {location.map((location) => (
                  <option key={location.id}>{location.city}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Right Side - Products */}
        <div className="w-full lg:w-3/4 p-4">
          <h2 className="text-xl font-semibold mb-4">Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product, index) => (
              <div key={index} className="border p-4 rounded-lg shadow-md">
                <Link to={`/input-product/farm-machinery/${product.slug}/${product.productSlug}/${Math.floor(Math.random() * 1000)}`}>
                  <img src={product.images[0].url} alt={product.product_name} className="w-full h-40 object-cover mb-4" />
                  <h3 className="text-lg font-medium">{product.product_name}</h3>
                  <p className="text-gray-600 font-bold">${product.price}</p>
                  <p className="text-gray-600 line-through">${product.cuttedPrice}</p>
                  <p className="text-gray-600">{product.description}</p>
                  <p className="text-gray-600">Location: {product.location}</p>
                  <p className="text-gray-600">Stock: {product.stock}</p>
                  <p className="text-gray-600">Warranty: {product.warranty} months</p>
                  <div className="text-gray-600">
                    <h4 className="font-semibold">Specifications:</h4>
                    <ul>
                      {product.specifications.map((spec, specIndex) => (
                        <li key={specIndex}>
                          <strong>{spec.title}:</strong> {spec.desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImplementCategory;
