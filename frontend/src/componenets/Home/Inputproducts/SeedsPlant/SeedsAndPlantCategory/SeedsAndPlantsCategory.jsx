import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';

const SeedsAndPlantsCategory = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const [sellerName, setSeller] = useState('')
  const [priceRange, setPricerange] = useState('')
  const [locationArea, setLocationArea] = useState('')

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
      slug: "inorganic"
    },
    {
      vendor_id: 3,
      product_name: "Brush Cutter",
      price: 1000,
      cuttedPrice: 1200,
      description: "High-performance brush cutter",
      product_super_type: "Farm machineries",
      product_category: "Farm machinaries",
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
      slug: "brush-cutter"
    },
    {
      vendor_id: 1,
      product_name: "Power Weeder",
      price: 1500,
      cuttedPrice: 1800,
      description: "Efficient power weeder",
      product_super_type: "Farm machineries",
      product_category: "Farm machinaries",
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
      product_subcategory: "Shade net",
      stock: 60,
      warranty: 24,
      specifications: [
        { title: "Dimensions", desc: "10x10 meters" },
        { title: "Material", desc: "HDPE" }
      ],
      images: [
        { public_id: "img8", url: "https://example.com/img8.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 2",
      slug: "shade-net"
    },
    {
      vendor_id: 3,
      product_name: "Concrete Vibrator",
      price: 800,
      cuttedPrice: 900,
      description: "High-efficiency concrete vibrator",
      product_super_type: "Farm machineries",
      product_category: "Farm machinaries",
      product_subcategory: "Concrete Vibrator",
      stock: 25,
      warranty: 36,
      specifications: [
        { title: "Power", desc: "1.5 HP" },
        { title: "Weight", desc: "20 kg" }
      ],
      images: [
        { public_id: "img9", url: "https://example.com/img9.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 3",
      slug: "concrete-vibrator"
    },
    {
      vendor_id: 1,
      product_name: "Economical Irrigation System",
      price: 300,
      cuttedPrice: 350,
      description: "Cost-effective irrigation system",
      product_super_type: "Irrigation Systems",
      product_category: "Irrigation Systems",
      product_subcategory: "Economical Irrigation",
      stock: 45,
      warranty: 18,
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
      slug: "economical-irrigation"
    },
    {
      vendor_id: 2,
      product_name: "Chain Saw - Product 1",
      price: 50,
      cuttedPrice: 90,
      description: "Compact chain saw for light to medium-duty cutting",
      product_super_type: "Farm machineries",
      product_category: "Farm machinaries",
      product_subcategory: "Chain Saw",
      stock: 15,
      warranty: 24,
      specifications: [
        { title: "Engine Capacity", desc: "45 cc" },
        { title: "Bar Length", desc: "16 inches" }
      ],
      images: [
        { public_id: "img42", url: "https://example.com/img42.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 2",
      slug: "chain-saw"
    },
    {
      vendor_id: 3,
      product_name: "Chain Saw - Product 2",
      price: 600,
      cuttedPrice: 880,
      description: "Heavy-duty chain saw with high cutting efficiency",
      product_super_type: "Farm machineries",
      product_category: "Farm machinaries",
      product_subcategory: "Chain Saw",
      stock: 12,
      warranty: 36,
      specifications: [
        { title: "Engine Capacity", desc: "55 cc" },
        { title: "Bar Length", desc: "20 inches" }
      ],
      images: [
        { public_id: "img43", url: "https://example.com/img43.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 3",
      slug: "chain-saw"
    },
    {
      vendor_id: 1,
      product_name: "Chain Saw - Product 3",
      price: 400,
      cuttedPrice: 450,
      description: "Versatile chain saw for forestry and landscaping",
      product_super_type: "Farm machineries",
      product_category: "Farm machinaries",
      product_subcategory: "Chain Saw",
      stock: 18,
      warranty: 24,
      specifications: [
        { title: "Engine Capacity", desc: "50 cc" },
        { title: "Bar Length", desc: "18 inches" }
      ],
      images: [
        { public_id: "img44", url: "https://example.com/img44.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 1",
      slug: "chain-saw"
    },
    {
      vendor_id: 2,
      product_name: "Chain Saw - Product 4",
      price: 1500,
      cuttedPrice: 1800,
      description: "Compact and lightweight chain saw for pruning",
      product_super_type: "Farm machineries",
      product_category: "Farm machinaries",
      product_subcategory: "Chain Saw",
      stock: 20,
      warranty: 18,
      specifications: [
        { title: "Engine Capacity", desc: "40 cc" },
        { title: "Bar Length", desc: "14 inches" }
      ],
      images: [
        { public_id: "img45", url: "https://example.com/img45.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 2",
      slug: "chain-saw"
    },
    {
      vendor_id: 3,
      product_name: "Chain Saw - Product 5",
      price: 900,
      cuttedPrice: 1000,
      description: "Professional-grade chain saw for heavy-duty cutting tasks",
      product_super_type: "Farm machineries",
      product_category: "Farm machinaries",
      product_subcategory: "Chain Saw",
      stock: 15,
      warranty: 24,
      specifications: [
        { title: "Engine Capacity", desc: "60 cc" },
        { title: "Bar Length", desc: "22 inches" }
      ],
      images: [
        { public_id: "img46", url: "https://example.com/img46.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 3",
      slug: "chain-saw"
    },
    {
      vendor_id: 1,
      product_name: "Organic Fertilizer - Product 1",
      price: 60,
      cuttedPrice: 80,
      description: "Premium organic fertilizer for all plant types",
      product_super_type: "Input",
      product_category: "Fertilizer",
      product_subcategory: "Organic",
      stock: 50,
      warranty: 12,
      specifications: [
        { title: "NPK Ratio", desc: "5-5-5" },
        { title: "Weight", desc: "2 kg" }
      ],
      images: [
        { public_id: "img21", url: "https://example.com/img21.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 1",
      slug: "organic"
    },
    {
      vendor_id: 2,
      product_name: "Organic Fertilizer - Product 2",
      price: 55,
      cuttedPrice: 70,
      description: "Natural organic fertilizer enriched with microorganisms",
      product_super_type: "Input",
      product_category: "Fertilizer",
      product_subcategory: "Organic",
      stock: 40,
      warranty: 18,
      specifications: [
        { title: "NPK Ratio", desc: "7-3-3" },
        { title: "Weight", desc: "1.5 kg" }
      ],
      images: [
        { public_id: "img22", url: "https://example.com/img22.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 2",
      slug: "organic"
    },
    {
      vendor_id: 3,
      product_name: "Organic Fertilizer - Product 3",
      price: 70,
      cuttedPrice: 90,
      description: "Specialized organic fertilizer for flowering plants",
      product_super_type: "Input",
      product_category: "Fertilizer",
      product_subcategory: "Organic",
      stock: 30,
      warranty: 24,
      specifications: [
        { title: "NPK Ratio", desc: "3-7-10" },
        { title: "Weight", desc: "3 kg" }
      ],
      images: [
        { public_id: "img23", url: "https://example.com/img23.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 3",
      slug: "organic"
    },
    {
      vendor_id: 1,
      product_name: "Organic Fertilizer - Product 4",
      price: 65,
      cuttedPrice: 85,
      description: "All-purpose organic fertilizer for home gardens",
      product_super_type: "Input",
      product_category: "Fertilizer",
      product_subcategory: "Organic",
      stock: 35,
      warranty: 12,
      specifications: [
        { title: "NPK Ratio", desc: "4-6-8" },
        { title: "Weight", desc: "2.5 kg" }
      ],
      images: [
        { public_id: "img24", url: "https://example.com/img24.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 1",
      slug: "organic"
    },
    {
      vendor_id: 2,
      product_name: "Organic Fertilizer - Product 5",
      price: 75,
      cuttedPrice: 95,
      description: "Organic fertilizer with slow-release nutrients",
      product_super_type: "Input",
      product_category: "Fertilizer",
      product_subcategory: "Organic",
      stock: 25,
      warranty: 18,
      specifications: [
        { title: "NPK Ratio", desc: "6-4-4" },
        { title: "Weight", desc: "2.2 kg" }
      ],
      images: [
        { public_id: "img25", url: "https://example.com/img25.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 2",
      slug: "organic"
    },
    {
      vendor_id: 1,
      product_name: "Inorganic Pesticide - Product 1",
      price: 180,
      cuttedPrice: 200,
      description: "Effective chemical pesticide for pest control",
      product_super_type: "Input",
      product_category: "Pesticides",
      product_subcategory: "Inorganic",
      stock: 60,
      warranty: 6,
      specifications: [
        { title: "Chemical Composition", desc: "ABC" },
        { title: "Volume", desc: "1 liter" }
      ],
      images: [
        { public_id: "img26", url: "https://example.com/img26.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 1",
      slug: "inorganic"
    },
    {
      vendor_id: 2,
      product_name: "Inorganic Pesticide - Product 2",
      price: 200,
      cuttedPrice: 220,
      description: "Broad-spectrum inorganic pesticide for crops",
      product_super_type: "Input",
      product_category: "Pesticides",
      product_subcategory: "Inorganic",
      stock: 50,
      warranty: 12,
      specifications: [
        { title: "Chemical Composition", desc: "XYZ" },
        { title: "Volume", desc: "750 ml" }
      ],
      images: [
        { public_id: "img27", url: "https://example.com/img27.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 2",
      slug: "inorganic"
    },
    {
      vendor_id: 3,
      product_name: "Inorganic Pesticide - Product 3",
      price: 190,
      cuttedPrice: 210,
      description: "Fast-acting inorganic pesticide for immediate effect",
      product_super_type: "Input",
      product_category: "Pesticides",
      product_subcategory: "Inorganic",
      stock: 55,
      warranty: 6,
      specifications: [
        { title: "Chemical Composition", desc: "LMN" },
        { title: "Volume", desc: "500 ml" }
      ],
      images: [
        { public_id: "img28", url: "https://example.com/img28.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 3",
      slug: "inorganic"
    },
    {
      vendor_id: 1,
      product_name: "Inorganic Pesticide - Product 4",
      price: 175,
      cuttedPrice: 190,
      description: "Highly effective inorganic pesticide for fruit trees",
      product_super_type: "Input",
      product_category: "Pesticides",
      product_subcategory: "Inorganic",
      stock: 45,
      warranty: 12,
      specifications: [
        { title: "Chemical Composition", desc: "PQR" },
        { title: "Volume", desc: "1.5 liters" }
      ],
      images: [
        { public_id: "img29", url: "https://example.com/img29.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 1",
      slug: "inorganic"
    },
    {
      vendor_id: 2,
      product_name: "Inorganic Pesticide - Product 5",
      price: 185,
      cuttedPrice: 210,
      description: "Advanced inorganic pesticide for greenhouse use",
      product_super_type: "Input",
      product_category: "Pesticides",
      product_subcategory: "Inorganic",
      stock: 65,
      warranty: 18,
      specifications: [
        { title: "Chemical Composition", desc: "UVW" },
        { title: "Volume", desc: "2 liters" }
      ],
      images: [
        { public_id: "img30", url: "https://example.com/img30.jpg" }
      ],
      visible: true,
      IsApproved: true,
      created_at: new Date(),
      location: "Location 2",
      slug: "inorganic"
    }
  ];
  
  // if (sellerName && locationArea && priceRange) {
  //   console.log("Seller name is coming", sellerName)
  //   console.log("Price Range is : ", priceRange)
  //   console.log("Location is : ", locationArea)
  // }
  
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeedsAndPlantsCategory;
