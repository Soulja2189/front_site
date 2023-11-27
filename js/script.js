medicineblok = document.querySelector('.medicines')
if(window.location.pathname=="/D:/site/front/index.html" ){
async function uploadMultiple() {
    const response = await fetch("http://127.0.0.1:8000/medicines/", {
      method: "GET",
    });
    const result = await response.json();
    console.log(result)
    for (i of result.medicines){
        medicines = document.createElement('div')
        medicines.appendChild(document.createElement('h3')).innerHTML = i.name
        medicines.appendChild(document.createElement('p')).innerHTML = i.description
        a = medicines.appendChild(document.createElement('a'))
        a.href = 'index.html'
        medicineblok.appendChild(medicines)
        }
    }
uploadMultiple()
}

newsblok = document.querySelector('.news')
if(window.location.pathname=="/D:/site/front/news.html" ){
async function uploadMultiple() {
    const response = await fetch("http://127.0.0.1:8000/news/", {
      method: "GET",
    });
    const result = await response.json();
//    console.log(result)
    for (i of result.news){
        news = document.createElement('div')
        news.appendChild(document.createElement('h2')).innerHTML = i.header
        news.appendChild(document.createElement('p')).innerHTML = i.text
        a = news.appendChild(document.createElement('a'))
        a.href = 'news.html'
        newsblok.appendChild(news)
    }
}
uploadMultiple()
}

//catblok = document.querySelector('.categories')
//medname = document.querySelector('.medname')
//meddis = document.querySelector('.meddis')
//if(window.location.pathname=="/D:/site/front/index.html" ){
//    async function uploadMultiple2(){
//        const response = await fetch("http://127.0.0.1:8000/medicines/", {
//            method: "GET",
//        });
//        const result2 = await response.json();
//        for (y of result2.medicines){
//            if (y.categories_id===i.id){
//                medicineblok = document.createElement('div')
//                medicinename = document.createElement('h3')
//                description = document.createElement('p')
//                medicinename.innerHTML = y.name
//                description.innerHTML = y.description
//                medname.appendChild(medicinename)
//                meddis.appendChild(description)
//            }
//        }
//    }
//    async function uploadMultiple() {
//        const response = await fetch("http://127.0.0.1:8000/categories/", {
//            method: "GET",
//        });
//        const result = await response.json();
//        console.log(result)
//        for (i of result.categories){
//            categories = document.createElement('div')
//            cat = document.createElement('h2')
//            cat.innerHTML = i.categories
//            catblok.appendChild(cat)
//            uploadMultiple2()
//            }
//        }
//    uploadMultiple()
//}
