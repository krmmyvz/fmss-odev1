# 1. Ödev
Patika.dev &amp; FMSS Bilişim Front-end Practicum Hafta 1 - 1. Ödev
Patika.dev linkim: "https://app.patika.dev/keremyvz"

## Açıklama

Bu ödev, bir Node.js uygulamasında async/await yapısının kullanımını ve 'axios' kütüphanesiyle API çağrılarının nasıl yapılacağını öğrenmeyi amaçlamaktadır.
![Ekran Görüntüsü](https://github.com/krmmyvz/fmss-odev1/blob/main/Console%20Output.png)
## Kurulum

1. Bu uygulamayı klonlayın.
2. `npm install` komutunu çalıştırarak bağımlılıkları yükleyin.
3. `node app.js` komutunu çalıştırarak konsol uygulamasını başlatın.

### Fonksiyon Açıklaması

Bu ödevde, default olarak dışa aktarılan ve async olarak tanımlanan bir fonksiyon yazmanız gerekmektedir. Bu fonksiyon, Number tipinde bir parametre almalı ve bu parametre user id'yi belirtmelidir. Fonksiyonun görevi, verilen user id'ye göre ilgili kullanıcının verilerini ve post'larını API'dan çekerek, bu verileri birleştirip bir obje olarak return etmektir.

Fonksiyon içerisinde, axios kütüphanesi kullanılarak iki farklı API çağrısı yapılmaktadır. İlk olarak, user bilgileri için "https://jsonplaceholder.typicode.com/users/{user_id}" endpoint'i kullanılır. Burada, '{user_id}' yerine parametredeki user id değeri yazılmalıdır. İkinci olarak, ilgili kullanıcının post'ları için "https://jsonplaceholder.typicode.com/posts?userId={user_id}" endpoint'i kullanılır. Yine burada, '{user_id}' yerine parametredeki user id değeri yazılmalıdır.

Bu iki API çağrısı sonucu elde edilen veriler, birleştirilerek aşağıdaki gibi bir obje olarak return edilir:

```javascript
{
  id: user_id,
  name: user_name,
  username: user_username,
  email: user_email,
  posts: [
    {
      id: post_id,
      title: post_title,
      body: post_body
    },
    ...
  ]
}

