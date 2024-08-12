import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const SellerApprovalRequest = () => {
  const [vendorData, setVendorData] = useState([]);

  const vendorFetch = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/allVendors`);
      setVendorData(res.data);
    } catch (error) {
      console.error("Error fetching the vendors details: ", error);
    }
  };

  useEffect(() => {
    vendorFetch();
  }, []);

  
  
  const handleActive = async (id, currentStatus) => {
    try {
      const result = await Swal.fire({
        title: "Do you want to change the status?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Yes",
        denyButtonText: "No",
      });

      if (result.isConfirmed) {
        const response = await axios.patch(`${process.env.REACT_APP_API_URL}/admin/vendor/status/${id}`, {
          active: !currentStatus,
        });

        Swal.fire("Success!", response.data.message, "success");
        const updatedVendorData = vendorData.map((item) => {
          if (item._id === id) {
            return { ...item, active: !item.active };
          }
          return item;        
        });
        setVendorData(updatedVendorData);
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    } catch (error) {
      console.error("Error while updating status:", error);
      const errorMessage = error.response?.data?.message || 'Failed to update status.';
      Swal.fire("Error!", errorMessage, "error");
    }
  };

  return (
    <div>
      <h1>Seller Approval Request</h1>
      {vendorData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>VendorName</th>
              <th>Vendor Type</th>
              <th>KAB-Id</th>
              <th>Change Status</th>
              <th>Product Available</th>
              <th>Vendor Card</th>
              <th>Action</th>        
            </tr>
          </thead>
          <tbody>
            { vendorData && vendorData.map((data) => (
              <tr key={data._id}>
                <td className="py-2 px-4 text-sm">{data.vendor_name}</td>
                <td className="py-2 px-4 text-sm">{data.vendor_type}</td>
                <td className="py-2 px-4 text-sm">{data.Kab_id}</td>
                <td className="py-2 px-4 text-sm">
                  {data.active ? <span className="text-green-700">Approved</span> : <span className="text-red-500">Not Approved</span>}
                </td>
                <td className='py-2 px-4 text-sm'>
                  {data.productExist ? <span className="text-green-700">Available</span> : <span className="text-red-500">Not Available</span>}
                </td>
                <td className="px-4 py-4">
                  {data.vendor_card_image && data.vendor_card_image.url ? (
                    <img
                      className="w-10 h-10 rounded-full object-cover"
                      src={data.vendor_card_image.url}
                      alt="Vendor Image"
                    />
                  ) : (
                    <p>No Image</p>
                  )}
                </td>
                <td className='py-2 px-4 text-orange-600 cursor-pointer text-sm' onClick={() => handleActive(data._id, data.active)}>Change Status</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No vendors found.</p>
      )}
    </div>
  );
};

export default SellerApprovalRequest;
