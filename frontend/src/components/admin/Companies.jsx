import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { Navigate, useNavigate } from 'react-router-dom'
import useGetAllCompanies from '@/hooks/useGetAllCompanies'
import { useDispatch } from 'react-redux'
import { setSearchCompanyByText } from '@/Redux/companySlice'


const Companies = () => {
    useGetAllCompanies();
    const navigate =useNavigate();
    const [input , setInput]=useState("");
    const dispatch=useDispatch();
    useEffect(()=>{
  dispatch(setSearchCompanyByText(input));
    },[input]);
    
    return (
        <div className='bg-customGray min-h-screen'>
            <Navbar />
            <div className='  max-w-6xl mx-auto my-10 '>
                <div className='gap-3 flex items-center justify-between my-5'>
                    <Input 
                     className="w-fit" 
                    placeholder="filter by name" 
                    onchange={(e)=>setInput(e.target.value)}
                    />
                    <Button onClick={()=>navigate("/admin/companies/Create")}>New company </Button>
                </div>
                <CompaniesTable/>

            </div>
        </div>
    )
}

export default Companies
