import { setAllJobs } from '@/Redux/jobSlice'
import { JOB_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAllJobs = () => {
    const dispatch=useDispatch();
  useEffect(()=>{
    const fetchAllJobs=async()=>{
        try{
            const res=await axios.get(`${JOB_API_END_POINT}/get` , {withCredentials:true});
            // console.log(res);
            
            if(res.data.success){
              dispatch(setAllJobs(res.data.jobs));
          }
      } catch (error) {
          console.log(error);
      }
  }
  fetchAllJobs();
},[])
}

export default useGetAllJobs
