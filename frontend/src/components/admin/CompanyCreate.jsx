import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch } from 'react-redux'
import { setSingleCompany } from '@/Redux/companySlice'

const CompanyCreate = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const dispatch = useDispatch();

  const registerNewCompany = async () => {
    try {
      const res = await axios.post(`${COMPANY_API_END_POINT}/register`, { companyName }, {
        
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true,
      });
      // console.log(res);
      if (res?.data?.success) {
        dispatch(setSingleCompany(res.data.company));
        toast.success(res.data.message);
        const companyId = res?.data?.company?._id;
        navigate(`/admin/companies/${companyId}`);
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "something went wrong . please try again");
    }
  };
  return (
    <div className='bg-customGray'>
      <Navbar />
      <div className='max-w-4xl mx-auto'>
        <div className='my-10'>
          <h1 className='font-bold text-2xl'>your company name</h1>
          <p>what is your companty name ? change Later</p>

        </div>
        <Label>company name</Label>
        <Input type="text"
          className="my-2"
          placeholder="career vista pvt. ltd."
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <div className='item-center flex gap-2 my-10'>
          <Button variant="outline" onClick={() => navigate("/admin/Companies")}>cancel</Button>
          <Button onClick={registerNewCompany} >Continue</Button>

        </div>

      </div>
    </div>
  )
}

export default CompanyCreate
