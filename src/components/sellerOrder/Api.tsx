import axios from 'axios';
import {Datas} from './SellerOrder'
export const submitData = async (data: Datas) => {
    try{
        const response = await axios.post('/',data);
        return response.data;
    }catch(error){
        throw new Error('error!'+error);
    }
};

export const submitImages = async(images: File[]) =>{
    const formData = new FormData();
    images.forEach((image, index)=>{
        formData.append(`image${index}`,image);
    })

try{
    const response = await axios.post('/',formData,{
        headers:{
            'Content-Type': 'multipart/form-data'
        },
    });
    return response.data;
} 
catch(error){
    throw new Error('Error!!(images)'+ error);
}
};