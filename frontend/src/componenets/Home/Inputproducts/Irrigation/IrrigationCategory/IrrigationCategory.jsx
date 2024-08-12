import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';

const IrrigationCategory = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const [sellerName, setSeller] = useState('')
  const [priceRange, setPricerange] = useState('')
  const [locationArea, setLocationArea] = useState('')

  const locationPage = useLocation()

  useEffect(()=>{
    window.scrollTo(0,0);
  },[locationPage.pathname])

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
      "vendor_id": 1,
      "product_name": "Irrigation Technology A",
      "price": 200,
      "cuttedPrice": 250,
      "description": "Advanced irrigation technology for efficient water usage",
      "product_super_type": "Irrigation Systems",
      "product_category": "Irrigation Technologies",
      "product_subcategory": "",
      "stock": 50,
      "warranty": 24,
      "specifications": [
        { "title": "Type", "desc": "Smart irrigation system" },
        { "title": "Coverage", "desc": "Up to 1 acre" }
      ],
      "images": [
        { "public_id": "img34", "url": "https://example.com/img34.jpg" }
      ],
      "visible": true,
      "IsApproved": true,
      "created_at": "2024-07-03T00:00:00.000Z",
      "location": "Location 34",
      "productSlug": "irrigation-technology-a",
      "slug": "irrigation-technologies"
    },
    {
      "vendor_id": 1,
      "product_name": "Irrigation Technology B",
      "price": 180,
      "cuttedPrice": 220,
      "description": "Efficient irrigation technology for small to medium farms",
      "product_super_type": "Irrigation Systems",
      "product_category": "Irrigation Technologies",
      "product_subcategory": "",
      "stock": 70,
      "warranty": 18,
      "specifications": [
        { "title": "Type", "desc": "Micro-irrigation system" },
        { "title": "Coverage", "desc": "Up to 0.5 acre" }
      ],
      "images": [
        { "public_id": "img35", "url": "https://example.com/img35.jpg" }
      ],
      "visible": true,
      "IsApproved": true,
      "created_at": "2024-07-03T00:00:00.000Z",
      "location": "Location 35",
      "productSlug": "irrigation-technology-b",
      "slug": "irrigation-technologies"
    },
    {
      "vendor_id": 1,
      "product_name": "Drip Irrigation System A",
      "price": 150,
      "cuttedPrice": 180,
      "description": "Efficient drip irrigation system for precise water delivery",
      "product_super_type": "Irrigation Systems",
      "product_category": "Drip Irrigation",
      "product_subcategory": "",
      "stock": 80,
      "warranty": 12,
      "specifications": [
        { "title": "Type", "desc": "Drip line system" },
        { "title": "Coverage", "desc": "Up to 0.3 acre" }
      ],
      "images": [
        { "public_id": "img36", "url": "https://example.com/img36.jpg" }
      ],
      "visible": true,
      "IsApproved": true,
      "created_at": "2024-07-03T00:00:00.000Z",
      "location": "Location 36",
      "productSlug": "drip-irrigation-system-a",
      "slug": "drip-irrigation"
    },
    {
      "vendor_id": 1,
      "product_name": "Drip Irrigation System B",
      "price": 120,
      "cuttedPrice": 150,
      "description": "Compact drip irrigation system for home gardens",
      "product_super_type": "Irrigation Systems",
      "product_category": "Drip Irrigation",
      "product_subcategory": "",
      "stock": 100,
      "warranty": 12,
      "specifications": [
        { "title": "Type", "desc": "Micro-irrigation kit" },
        { "title": "Coverage", "desc": "Up to 0.2 acre" }
      ],
      "images": [
        { "public_id": "img37", "url": "https://example.com/img37.jpg" }
      ],
      "visible": true,
      "IsApproved": true,
      "created_at": "2024-07-03T00:00:00.000Z",
      "location": "Location 37",
      "productSlug": "drip-irrigation-system-b",
      "slug": "drip-irrigation"
    },
    {
      "vendor_id": 1,
      "product_name": "Sprinkler Irrigation System A",
      "price": 250,
      "cuttedPrice": 300,
      "description": "Effective sprinkler system for large agricultural fields",
      "product_super_type": "Irrigation Systems",
      "product_category": "Sprinkler Irrigation",
      "product_subcategory": "",
      "stock": 60,
      "warranty": 24,
      "specifications": [
        { "title": "Type", "desc": "Rotary sprinkler system" },
        { "title": "Coverage", "desc": "Up to 1 acre" }
      ],
      "images": [
        { "public_id": "img38", "url": "https://example.com/img38.jpg" }
      ],
      "visible": true,
      "IsApproved": true,
      "created_at": "2024-07-03T00:00:00.000Z",
      "location": "Location 38",
      "productSlug": "sprinkler-irrigation-system-a",
      "slug": "sprinkler-irrigation"
    },
    {
      "vendor_id": 1,
      "product_name": "Sprinkler Irrigation System B",
      "price": 220,
      "cuttedPrice": 260,
      "description": "Robust sprinkler system for commercial farms",
      "product_super_type": "Irrigation Systems",
      "product_category": "Sprinkler Irrigation",
      "product_subcategory": "",
      "stock": 90,
      "warranty": 18,
      "specifications": [
        { "title": "Type", "desc": "Pop-up sprinkler kit" },
        { "title": "Coverage", "desc": "Up to 0.5 acre" }
      ],
      "images": [
        { "public_id": "img39", "url": "https://example.com/img39.jpg" }
      ],
      "visible": true,
      "IsApproved": true,
      "created_at": "2024-07-03T00:00:00.000Z",
      "location": "Location 39",
      "productSlug": "sprinkler-irrigation-system-b",
      "slug": "sprinkler-irrigation"
    },
    {
      "vendor_id": 1,
      "product_name": "Economical Irrigation System A",
      "price": 120,
      "cuttedPrice": 150,
      "description": "Affordable irrigation system for small-scale farmers",
      "product_super_type": "Irrigation Systems",
      "product_category": "Economical Irrigation",
      "product_subcategory": "",
      "stock": 120,
      "warranty": 12,
      "specifications": [
        { "title": "Type", "desc": "Manual drip system" },
        { "title": "Coverage", "desc": "Up to 0.1 acre" }
      ],
      "images": [
        { "public_id": "img40", "url": "https://example.com/img40.jpg" }
      ],
      "visible": true,
      "IsApproved": true,
      "created_at": "2024-07-03T00:00:00.000Z",
      "location": "Location 40",
      "productSlug": "economical-irrigation-system-a",
      "slug": "economical-irrigation"
    }
  ];

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
                <Link to={`/input-product/pesticides/${product.slug}/${product.productSlug}/${Math.floor(Math.random() * 1000)}`}>
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

export default IrrigationCategory;
