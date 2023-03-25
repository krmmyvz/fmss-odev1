import readline from 'readline';
import {getPosts, getUsers} from './getdata.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//readline modülü kullanarak kullanıcıdan bir ID girmesi istenir.

rl.question('Lütfen bir ID giriniz: ', async (userId) => {
    console.log(`Girdiğiniz user ID değeri: ${userId}`);

    // Ardından, isNaN fonksiyonu kullanarak kullanıcının 
    // girdiği değerin sayı olup olmadığı kontrol edilir. 
    // Eğer sayı değilse, hata mesajı yazdırılır ve program sonlandırılır.
    if (isNaN(userId)) {
        const error = new Error('Girdiğiniz değer sayısal bir değer değil!');
        console.error(error);
        rl.close();
        return;
    }

    // userId sayısal bir değer ise işleme devam edilir.
    // getUsers ve getPosts fonksiyonları kullanılarak API'den kullanıcı ve post verileri alınır. 
    // Bu fonksiyonlar ayrı bir modül olarak getdata.js dosyasında yer alırlar.
    try {
        // Promise.all fonksiyonu kullanarak iki asenkron fonksiyonun sonuçları beklenir. 
        // Sonuçlar, bir dizi olarak geri döndürülür.   
        const [user, posts] = await Promise.all([
            getUsers(userId),
            getPosts(userId)
        ]);
        // Son olarak, kullanıcı ve post verileri birleştirilerek userData 
        // nesnesi oluşturulur ve bu nesne konsola yazdırılır.
        // Hata durumunda hata mesajı yazdırılır ve program sonlandırılır.
        const userData = { ...user, posts };
        console.log(userData);
    } catch (error) {
        console.error(error);
    }
    rl.close();
});
