import React from 'react'
import { Badge } from './badge'
import { useNavigate } from 'react-router-dom'

function LatestJobCards({job}) {
  const navigate=useNavigate();
  return (

    <div onClick={()=>navigate(`/description/${job._id}`)} className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
        <div>
      
      <h1 className='font-medium text-lg '>{job?.company?.name}</h1>
      <p className='text-sm text-gray-600'> {job?.location}</p>
      </div>
      <div>
        <h1 className='font-bold text-lg my-2 '>{job?.title}</h1>
        <p className='font-medium'> {job?.description}</p>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, optio?</p> */}
      </div>
      <div>
        <Badge className={'text-green-600 font-bold' } variant={'ghost'}>{job?.position} positions</Badge>
        <Badge className={'text-blue-600 font-bold' } variant={'ghost'}>{job?.jobType}</Badge>
        <Badge className={'text-purple-700 font-bold' } variant={'ghost'}>{job?.salary} lpa</Badge>
      </div>
    </div>
  )
}

export default LatestJobCards
