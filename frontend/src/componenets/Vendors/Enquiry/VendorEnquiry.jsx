import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../User/AuthProvider'
import axios from 'axios'
import toast from 'react-hot-toast'
import Tooltip from '@mui/material/Tooltip';
import AllMessages from './PrivateVendorEnquiry/AllMessages'
// import VendorSendEnquiry from './VendorSendEnquiry/VendorSendEnquiry';
import Enquiry from '../../Buyer/Enquiries/PostReqData/Enquiry';


const VendorEnquiry = () => {
    const [vendorInfo, setVendorInfo] = useState([])
    const [messageStack, setMessageStack] = useState([]);
    const [vendorNotFoundFlag, setVendorNotFoundFlag] = useState(false)
    const [vendorNotfound, setVendorFound] = useState('')

    const auth = useAuth();
    const vendorType = auth?.auth.userData?.user_vendor_type;
    const currentUserId = auth?.auth.userData?._id;

    const currentUserData = auth?.auth.userData;

    const vendorExist = currentUserData.vendor_profile_exist;

    let vendorCategory = '';

    if (vendorType === 'Farmer') {
        vendorCategory = "Output";
    } else if (vendorType === 'Input Manufacturer') {
        vendorCategory = "Input";
    } else if (vendorType === 'Service Provider') {
        vendorCategory = "Agri Service"
    }
    else {
        vendorCategory = " ";
    }

    const fetchVendorInfo = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/getvendor/${vendorCategory}/${currentUserId}`);


            const { userDetails, vendorTypeOnly } = res.data;

            const filterVendorInfo = vendorTypeOnly.filter(vendor => vendor._id !== currentUserId)


            if (filterVendorInfo.length > 0) {
                const sortedVendorInfo = filterVendorInfo.sort((a, b) => new Date(b.postDate) - new Date(a.postDate))
                setVendorInfo(sortedVendorInfo)
            }
            else {

                toast.error("No vendor information available")
            }


        } catch (error) {
            if (error.response && error.response.status === 500) {

            } else {
                console.log("Error while fetching the data", error);
            }
        }
    };
    const handleOpenMessageBox = (vendor) => {
        setMessageStack((prevStack) => [...prevStack, vendor]);
    };

    useEffect(() => {
        if (vendorExist) {
            fetchVendorInfo();
        } else {
            setVendorNotFoundFlag(true)
            setVendorFound('vendor profile is not created !')
        }
    }, [vendorExist]); 

    return (
        <div className="flex flex-col lg:flex-row w-full h-screen gap-1">
            <div className="w-full lg:w-1/2 gap-1 overflow-y-scroll p-2">
                {vendorInfo && vendorInfo.length > 0 ? (
                    vendorInfo.map((vendor, index) => (
                        <div key={index} className="relative bg-gray-100 rounded-lg p-4 shadow-md mb-4 text-xs">
                            {vendor.status && (
                                <div className='flex flex-col lg:flex-row gap-1 w-full'>
                                    <section className='w-full lg:w-4/5 bg-gray-100 p-4'>
                                        <div className='flex flex-row items-center justify-between'>
                                            <h2 className='text-xl font-bold'>{vendor.productService}</h2>
                                            <h5 className='text-sm text-gray-600'>{vendor.userDetails?.username || 'N/A'}</h5>
                                        </div>
                                        <div className='flex items-center mt-1 mb-4'>
                                            <span className='rounded-full'>
                                                <img src='https://res.cloudinary.com/dq7vggsop/image/upload/v1719052736/er9exvf5p6zxwtwzspnk.png' className='h-4 w-4' alt='Location Icon' />
                                            </span>
                                            <span className='ml-2'>
                                                <p className='text-sm text-gray-700'>{vendor.userDetails.city || 'NA'}</p>
                                            </span>
                                        </div>
                                        <p className='text-sm text-gray-700'>{vendor.description}</p>
                                        <p className='text-sm text-gray-500'>{new Date(vendor.postDate).toLocaleString()}</p>
                                    </section>
                                    <section className='w-full lg:w-1/5 p-2 text-center'>
                                        <div className='flex flex-col items-center'>
                                            <div className='flex flex-row mb-6 cursor-pointer'>
                                                <Tooltip
                                                    title={vendor.userDetails.phone}
                                                    slotProps={{
                                                        popper: {
                                                            modifiers: [
                                                                {
                                                                    name: 'offset',
                                                                    options: {
                                                                        offset: [0, -14],
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    }}
                                                >
                                                    <a href={`tel:${vendor.userDetails.phone}`} itemprop="telephone" title={`Call ${vendor.userDetails.name}`}>
                                                        <img
                                                            src='https://res.cloudinary.com/dq7vggsop/image/upload/v1719051641/lvv0atftap9boxmoir8e.png'
                                                            alt='Call-Icon'
                                                            className='h-6 w-6 icon hover:h-7 hover:w-7 transition-all duration-300 ease-in-out'
                                                        />
                                                    </a>
                                                </Tooltip>
                                            </div>
                                            <div className='flex flex-row cursor-pointer'>
                                                <Tooltip
                                                    title="Chat in WhatsApp"
                                                    slotProps={{
                                                        popper: {
                                                            modifiers: [
                                                                {
                                                                    name: 'offset',
                                                                    options: {
                                                                        offset: [0, -14],
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    }}
                                                >
                                                    <a
                                                        href={`https://wa.me/+91${vendor.userDetails.phone}?text=Hello%20there%2C%20I%20am%20inquiring%20about%20the%20product%2Fservice%20you%20require!`}
                                                        itemprop="telephone" title={`Call ${vendor.userDetails.name}`}>
                                                        <img
                                                            src='https://res.cloudinary.com/dq7vggsop/image/upload/v1719051545/nmptxjm5ucoteg5hb3lx.png'
                                                            alt='WhatsApp-Icon'
                                                            className='h-6 w-6 icon hover:h-7 hover:w-7 transition-all duration-300 ease-in-out'
                                                        />
                                                    </a>
                                                </Tooltip>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <div className='text-center text-sm text-gray-600'>No Requirements found: {vendorCategory}</div>
                )}
                {vendorNotFoundFlag && (
                    <div className='text-center text-sm text-gray-600'>
                        because {vendorNotfound}
                    </div>
                )}
            </div>
            <div className="w-full lg:w-1/2 gap-1 overflow-y-scroll p-2">
                <Enquiry />
            </div>
        </div>
    )
}

export default VendorEnquiry