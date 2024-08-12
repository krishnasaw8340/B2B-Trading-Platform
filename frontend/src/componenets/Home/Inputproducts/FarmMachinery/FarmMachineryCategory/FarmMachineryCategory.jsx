import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';

const FarmMachineryCategory = () => {
  const location2 = useLocation()
  const [showSidebar, setShowSidebar] = useState(true);

  const [sellerName, setSeller] = useState('')
  const [priceRange, setPricerange] = useState('')
  const [locationArea, setLocationArea] = useState('')


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location2.pathname])

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
  const products = [
    {
      vendor_id: 1,
      product_name: "Organic Fertilizer",
      price: 50,
      cuttedPrice: 70,
      description: "High-quality organic fertilizer",
      product_super_type: "Input",
      product_category: "Fertilizer",
      product_subcategory: "Organic",
      stock: 100,
      warranty: 12,
      specifications: [
        { title: "NPK Ratio", desc: "10-10-10" },
        { title: "Weight", desc: "1 kg" }
      ],
      images: [
        { public_id: "img1", url: "https://example.com/img1.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 1",
      productSlug: "organic-fertilizer",
      slug: "organic"
    },
    {
      vendor_id: 2,
      product_name: "Earth Auger",
      price: 300,
      cuttedPrice: 350,
      description: "Heavy-duty earth auger",
      product_super_type: "Farm machineries",
      product_category: "Farm machineries",
      product_subcategory: "Earth Auger",
      stock: 25,
      warranty: 18,
      specifications: [
        { title: "Power", desc: "2.5 HP" },
        { title: "Weight", desc: "10 kg" }
      ],
      images: [
        { public_id: "img15", url: "https://example.com/img15.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 2",
      productSlug: "earth-auger",
      slug: "earth-auger"
    },
    {
      vendor_id: 3,
      product_name: "Chain Saw",
      price: 400,
      cuttedPrice: 450,
      description: "Professional chain saw",
      product_super_type: "Farm machineries",
      product_category: "Farm machineries",
      product_subcategory: "Chain Saw",
      stock: 20,
      warranty: 24,
      specifications: [
        { title: "Engine Capacity", desc: "50 cc" },
        { title: "Bar Length", desc: "18 inches" }
      ],
      images: [
        { public_id: "img16", url: "https://example.com/img16.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 3",
      productSlug: "chain-saw",
      slug: "chain-saw"
    },
    {
      vendor_id: 1,
      product_name: "Hedge Trimmer",
      price: 250,
      cuttedPrice: 280,
      description: "Versatile hedge trimmer",
      product_super_type: "Farm machineries",
      product_category: "Farm machineries",
      product_subcategory: "Hedge Trimmer",
      stock: 15,
      warranty: 12,
      specifications: [
        { title: "Blade Length", desc: "24 inches" },
        { title: "Weight", desc: "5 kg" }
      ],
      images: [
        { public_id: "img17", url: "https://example.com/img17.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 1",
      productSlug: "hedge-trimmer",
      slug: "hedge-trimmer"
    },
    {
      vendor_id: 2,
      product_name: "Pole Pruner",
      price: 180,
      cuttedPrice: 200,
      description: "Efficient pole pruner",
      product_super_type: "Farm machineries",
      product_category: "Farm machineries",
      product_subcategory: "Pole Pruner",
      stock: 30,
      warranty: 18,
      specifications: [
        { title: "Reach", desc: "10 feet" },
        { title: "Weight", desc: "6 kg" }
      ],
      images: [
        { public_id: "img18", url: "https://example.com/img18.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 2",
      productSlug: "pole-pruner",
      slug: "pole-pruner"
    },
    {
      vendor_id: 2,
      product_name: "Inorganic Pesticide",
      price: 200,
      cuttedPrice: 250,
      description: "Effective inorganic pesticide",
      product_super_type: "Input",
      product_category: "Pesticides",
      product_subcategory: "Inorganic",
      stock: 50,
      warranty: 6,
      specifications: [
        { title: "Chemical Composition", desc: "XYZ" },
        { title: "Volume", desc: "500 ml" }
      ],
      images: [
        { public_id: "img2", url: "https://example.com/img2.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 2",
      productSlug: "inorganic-pesticide",
      slug: "inorganic"
    },
    {
      vendor_id: 3,
      product_name: "Brush Cutter",
      price: 1000,
      cuttedPrice: 1200,
      description: "High-performance brush cutter",
      product_super_type: "Farm machineries",
      product_category: "Farm machineries",
      product_subcategory: "Brush Cutter",
      stock: 30,
      warranty: 24,
      specifications: [
        { title: "Power", desc: "2 HP" },
        { title: "Weight", desc: "8 kg" }
      ],
      images: [
        { public_id: "img3", url: "https://example.com/img3.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 3",
      productSlug: "brush-cutter",
      slug: "brush-cutter"
    },
    {
      vendor_id: 1,
      product_name: "Power Weeder",
      price: 1500,
      cuttedPrice: 1800,
      description: "Efficient power weeder",
      product_super_type: "Farm machineries",
      product_category: "Farm machineries",
      product_subcategory: "Power Weeder",
      stock: 20,
      warranty: 36,
      specifications: [
        { title: "Power", desc: "3 HP" },
        { title: "Weight", desc: "15 kg" }
      ],
      images: [
        { public_id: "img4", url: "https://example.com/img4.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 1",
      productSlug: "power-weeder",
      slug: "power-weeder"
    },
    {
      vendor_id: 2,
      product_name: "Drip Irrigation System",
      price: 400,
      cuttedPrice: 500,
      description: "Complete drip irrigation system",
      product_super_type: "Irrigation Systems",
      product_category: "Irrigation Systems",
      product_subcategory: "Drip Irrigation",
      stock: 40,
      warranty: 12,
      specifications: [
        { title: "Coverage Area", desc: "1 acre" },
        { title: "Water Saving", desc: "30%" }
      ],
      images: [
        { public_id: "img5", url: "https://example.com/img5.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 2",
      productSlug: "drip-irrigation-system",
      slug: "drip-irrigation"
    },
    {
      vendor_id: 3,
      product_name: "Organic Seeds",
      price: 80,
      cuttedPrice: 100,
      description: "High-quality organic seeds",
      product_super_type: "Seeds and Plants",
      product_category: "Seeds and Plants",
      product_subcategory: "Organic",
      stock: 200,
      warranty: 0,
      specifications: [
        { title: "Germination Rate", desc: "95%" },
        { title: "Weight", desc: "500 g" }
      ],
      images: [
        { public_id: "img6", url: "https://example.com/img6.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 3",
      productSlug: "organic-seeds",
      slug: "organic"
    },
    {
      vendor_id: 1,
      product_name: "Manual Sprayer",
      price: 30,
      cuttedPrice: 50,
      description: "Easy-to-use manual sprayer",
      product_super_type: "Implements and Others",
      product_category: "Implements and Others",
      product_subcategory: "Sprayer Manual",
      stock: 150,
      warranty: 6,
      specifications: [
        { title: "Capacity", desc: "5 liters" },
        { title: "Material", desc: "Plastic" }
      ],
      images: [
        { public_id: "img7", url: "https://example.com/img7.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 1",
      productSlug: "manual-sprayer",
      slug: "sprayer-manual"
    },
    {
      vendor_id: 2,
      product_name: "Shade Net",
      price: 100,
      cuttedPrice: 120,
      description: "Durable shade net",
      product_super_type: "Implements and Others",
      product_category: "Implements and Others",
      product_subcategory: "Shade Net",
      stock: 80,
      warranty: 12,
      specifications: [
        { title: "Material", desc: "Polyethylene" },
        { title: "Dimensions", desc: "10x10 ft" }
      ],
      images: [
        { public_id: "img8", url: "https://example.com/img8.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 2",
      productSlug: "shade-net",
      slug: "shade-net"
    },
    {
      vendor_id: 3,
      product_name: "Concrete Vibrator",
      price: 600,
      cuttedPrice: 700,
      description: "Powerful concrete vibrator",
      product_super_type: "Farm machineries",
      product_category: "Farm machineries",
      product_subcategory: "Concrete Vibrator",
      stock: 10,
      warranty: 24,
      specifications: [
        { title: "Power", desc: "1.5 HP" },
        { title: "Weight", desc: "12 kg" }
      ],
      images: [
        { public_id: "img9", url: "https://example.com/img9.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 3",
      productSlug: "concrete-vibrator",
      slug: "concrete-vibrator"
    },
    {
      vendor_id: 1,
      product_name: "Economical Irrigation System",
      price: 350,
      cuttedPrice: 400,
      description: "Cost-effective irrigation system",
      product_super_type: "Irrigation Systems",
      product_category: "Irrigation Systems",
      product_subcategory: "Economical",
      stock: 60,
      warranty: 12,
      specifications: [
        { title: "Coverage Area", desc: "0.5 acre" },
        { title: "Water Saving", desc: "25%" }
      ],
      images: [
        { public_id: "img10", url: "https://example.com/img10.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 1",
      productSlug: "economical-irrigation-system",
      slug: "economical-irrigation-system"
    },
    {
      vendor_id: 2,
      product_name: "Grow Bag",
      price: 20,
      cuttedPrice: 25,
      description: "Durable grow bag",
      product_super_type: "Implements and Others",
      product_category: "Implements and Others",
      product_subcategory: "Grow Bag",
      stock: 200,
      warranty: 0,
      specifications: [
        { title: "Material", desc: "Polypropylene" },
        { title: "Dimensions", desc: "12x12 inches" }
      ],
      images: [
        { public_id: "img11", url: "https://example.com/img11.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 2",
      productSlug: "grow-bag",
      slug: "grow-bag"
    },
    {
      vendor_id: 3,
      product_name: "Sprayer Manual",
      price: 40,
      cuttedPrice: 60,
      description: "High-quality manual sprayer",
      product_super_type: "Implements and Others",
      product_category: "Implements and Others",
      product_subcategory: "Sprayer Manual",
      stock: 120,
      warranty: 6,
      specifications: [
        { title: "Capacity", desc: "7 liters" },
        { title: "Material", desc: "Metal" }
      ],
      images: [
        { public_id: "img12", url: "https://example.com/img12.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 3",
      productSlug: "sprayer-manual",
      slug: "sprayer-manual"
    },
    {
      vendor_id: 1,
      product_name: "Hose Pipe",
      price: 15,
      cuttedPrice: 20,
      description: "Flexible hose pipe",
      product_super_type: "Implements and Others",
      product_category: "Implements and Others",
      product_subcategory: "Hose Pipe",
      stock: 300,
      warranty: 6,
      specifications: [
        { title: "Length", desc: "50 ft" },
        { title: "Material", desc: "PVC" }
      ],
      images: [
        { public_id: "img13", url: "https://example.com/img13.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 1",
      productSlug: "hose-pipe",
      slug: "hose-pipe"
    },
    {
      vendor_id: 2,
      product_name: "Coconut Climber",
      price: 120,
      cuttedPrice: 150,
      description: "Safe and efficient coconut climber",
      product_super_type: "Farm machineries",
      product_category: "Farm machineries",
      product_subcategory: "Coconut Climber",
      stock: 40,
      warranty: 12,
      specifications: [
        { title: "Material", desc: "Stainless Steel" },
        { title: "Weight", desc: "4 kg" }
      ],
      images: [
        { public_id: "img14", url: "https://example.com/img14.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 2",
      productSlug: "coconut-climber",
      slug: "coconut-climber"
    },
    {
      vendor_id: 3,
      product_name: "Coconut Dehusker",
      price: 150,
      cuttedPrice: 180,
      description: "Efficient coconut dehusker",
      product_super_type: "Farm machineries",
      product_category: "Farm machineries",
      product_subcategory: "Coconut Dehusker",
      stock: 35,
      warranty: 12,
      specifications: [
        { title: "Material", desc: "Iron" },
        { title: "Weight", desc: "5 kg" }
      ],
      images: [
        { public_id: "img19", url: "https://example.com/img19.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 3",
      productSlug: "coconut-dehusker",
      slug: "coconut-dehusker"
    },
    {
      vendor_id: 1,
      product_name: "Milking Machine Manual",
      price: 400,
      cuttedPrice: 500,
      description: "Manual milking machine",
      product_super_type: "Farm machineries",
      product_category: "Farm machineries",
      product_subcategory: "Milking Machine Manual",
      stock: 10,
      warranty: 24,
      specifications: [
        { title: "Capacity", desc: "10 liters" },
        { title: "Material", desc: "Stainless Steel" }
      ],
      images: [
        { public_id: "img20", url: "https://example.com/img20.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 1",
      productSlug: "milking-machine-manual",
      slug: "milking-machine-manual"
    }
  ];
  
  
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

export default FarmMachineryCategory;
