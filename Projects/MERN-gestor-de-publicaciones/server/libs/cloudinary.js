import{ v2 as cloudinary} from 'cloudinary'
import { CLOUDINARY_API_KEY } from '../config.js';

cloudinary.config({ 
  cloud_name: 'dukdkdnrn', 
  api_key: '532744347799956', 
  api_secret: CLOUDINARY_API_KEY
});
export const uploadImage = async filePath =>{
  return await cloudinary.uploader.upload(filePath,{
    folder: 'test'
  })
}

export const deleteImage = async id =>{
  return await cloudinary.uploader.destroy(id)
}