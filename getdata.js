import axios from 'axios';

// getUserId fonksiyonu parametre olarak aldığı userId ile birlikte "https://jsonplaceholder.typicode.com/users" endpoint'ine bir GET isteği gönderir.
// Gönderilen isteğin sonucunda elde edilen veri resolve fonksiyonuna gönderilir.
// Eğer herhangi bir hata oluşursa reject fonksiyonu ile bir hata fırlatılır.
export const getUsers = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { data } = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`);
            resolve(data);
        } catch (error) {
            reject(new Error("Bir hata oluştu"));
        }
    })
}

// getPosts fonksiyonu parametre olarak aldığı userId ile birlikte "https://jsonplaceholder.typicode.com/posts" endpoint'ine bir GET isteği gönderir.
// Gönderilen istek sonucunda elde edilen veri resolve fonksiyonuna gönderilir.
// Eğer herhangi bir hata oluşursa reject fonksiyonu ile bir hata fırlatılır.
export const getPosts = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { data } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
            resolve(data);
        } catch (error) {
            reject(new Error("Bir hata oluştu"));
        }
    })
}