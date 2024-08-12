import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';

const PesticidesCategory = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const locationPage = useLocation()

  const [sellerName, setSeller] = useState('')
  const [priceRange, setPricerange] = useState('')
  const [locationArea, setLocationArea] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [locationPage.pathname])

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
      product_name: "Organic Pesticide A",
      price: 60,
      cuttedPrice: 80,
      description: "Natural pesticide for eco-friendly farming",
      product_super_type: "Input",
      product_category: "Pesticides",
      product_subcategory: "Organic",
      stock: 100,
      warranty: 6,
      specifications: [
        { title: "Ingredients", desc: "Neem oil, garlic extract" },
        { title: "Weight", desc: "500 ml" }
      ],
      images: [
        { public_id: "img28", url: "https://example.com/img28.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 28",
      productSlug: "organic-pesticide-a",
      slug: "organic"
    },
    {
      vendor_id: 1,
      product_name: "Organic Pesticide B",
      price: 75,
      cuttedPrice: 95,
      description: "Effective organic pesticide for pest control",
      product_super_type: "Input",
      product_category: "Pesticides",
      product_subcategory: "Organic",
      stock: 150,
      warranty: 6,
      specifications: [
        { title: "Ingredients", desc: "Pyrethrin, neem oil" },
        { title: "Weight", desc: "1 L" }
      ],
      images: [
        { public_id: "img29", url: "https://example.com/img29.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 29",
      productSlug: "organic-pesticide-b",
      slug: "organic"
    },
    {
      vendor_id: 1,
      product_name: "Organic Pesticide C",
      price: 85,
      cuttedPrice: 105,
      description: "Broad-spectrum organic pesticide",
      product_super_type: "Input",
      product_category: "Pesticides",
      product_subcategory: "Organic",
      stock: 80,
      warranty: 6,
      specifications: [
        { title: "Ingredients", desc: "Chrysanthemum extract" },
        { title: "Weight", desc: "750 ml" }
      ],
      images: [
        { public_id: "img30", url: "https://example.com/img30.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 30",
      productSlug: "organic-pesticide-c",
      slug: "organic"
    },
    {
      vendor_id: 1,
      product_name: "Inorganic Pesticide A",
      price: 50,
      cuttedPrice: 70,
      description: "Highly effective inorganic pesticide",
      product_super_type: "Input",
      product_category: "Pesticides",
      product_subcategory: "Inorganic",
      stock: 200,
      warranty: 12,
      specifications: [
        { title: "Ingredients", desc: "Malathion, carbaryl" },
        { title: "Weight", desc: "1 L" }
      ],
      images: [
        { public_id: "img31", url: "https://example.com/img31.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 31",
      productSlug: "inorganic-pesticide-a",
      slug: "inorganic"
    },
    {
      vendor_id: 1,
      product_name: "Inorganic Pesticide B",
      price: 65,
      cuttedPrice: 85,
      description: "Powerful inorganic pesticide for all crops",
      product_super_type: "Input",
      product_category: "Pesticides",
      product_subcategory: "Inorganic",
      stock: 180,
      warranty: 12,
      specifications: [
        { title: "Ingredients", desc: "Chlorpyrifos, cypermethrin" },
        { title: "Weight", desc: "500 ml" }
      ],
      images: [
        { public_id: "img32", url: "https://example.com/img32.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 32",
      productSlug: "inorganic-pesticide-b",
      slug: "inorganic"
    },
    {
      vendor_id: 1,
      product_name: "Inorganic Pesticide C",
      price: 55,
      cuttedPrice: 75,
      description: "Wide-spectrum inorganic pesticide",
      product_super_type: "Input",
      product_category: "Pesticides",
      product_subcategory: "Inorganic",
      stock: 160,
      warranty: 12,
      specifications: [
        { title: "Ingredients", desc: "Diazinon, permethrin" },
        { title: "Weight", desc: "750 ml" }
      ],
      images: [
        { public_id: "img33", url: "https://example.com/img33.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 33",
      productSlug: "inorganic-pesticide-c",
      slug: "inorganic"
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

export default PesticidesCategory;
