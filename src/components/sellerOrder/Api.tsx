import axios from 'axios';
import {Datas} from './SellerOrder'
export const submitData = async (data: Datas): Promise<void> => {
    try {
        const formData = new FormData();
        formData.append('model', JSON.stringify(data.model)); 
        formData.append('name', data.model.name);
        formData.append('amount', String(data.model.amount));
        formData.append('price', String(data.model.price));
        formData.append('description', data.model.description);
        formData.append('optionName', data.model.optionName);
        formData.append('origin', data.model.origin);
        formData.append('shippingMethod', data.model.shippingMethod);
        formData.append('sellerName', data.model.sellerName);
        if (data.model.imgFile) {
            formData.append('imgFile', data.model.imgFile); 
            console.log(data.model.imgFile)// 이미지 파일을 직접 추가
        }
        const response = await axios.post('http://43.203.104.198:8080/api/item/createItem', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw new Error('submitdata에러발생' + error);
    }
};

// export const submitImages = async(imgFiles:File[]):Promise<string[]>=>{
    
//     try{
//         const formData = new FormData();
//         imgFiles.forEach((file, index) => {
//             formData.append(`image_${index}`, file);
//           });
//         const response = await axios.post('http://43.203.104.198:8080/api/item/createItem',formData,{
//             headers:{
//                 'Content-Type': 'multipart/form-data'
//             },
//         });
//         return response.data;
//     } 
//     catch(error){
//         throw new Error('Error!!(images)'+ error);
//     }
//     };