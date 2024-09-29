import cloudinary from "cloudinary"
import "dotenv/config"

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_KEY,
    api_secret:process.env.CLOUD_SECRET
});


const uploadOnCloudinary= async(fileBuffer,fileName)=>{
    try {
        const result=await cloudinary.v2.uploader.upload(fileBuffer,{
            resource_type:"auto",
            public_id:fileName
        })
        return result;
        
    } catch (error) {
        console.error("cloudinary upload error" +error)
        
    }

}
export {cloudinary,uploadOnCloudinary}