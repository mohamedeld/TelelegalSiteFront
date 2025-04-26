import { useEffect } from "react";
import { useSearchParams } from "react-router";
import axiosInstance from "../libs/axiosInstance";

const MainVideoPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const fetchDecodedToken = async (token)=>{
        try{
            const res = await axiosInstance.post("/validate-token",{token});
            if(res?.status === 200){
                console.log(res?.data)
            }
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        const token = searchParams.get("token");
        fetchDecodedToken(token);
    },[])
  return (
    <div>MainVideoPage</div>
  )
}

export default MainVideoPage