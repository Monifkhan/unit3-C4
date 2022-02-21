async function apiCall(url) {

    //add api call logic here

        try{
            let res = await fetch(url);

            let data = await res.json()
            return data;

        }catch(err){
            console.log(err)
        }

}


function appendArticles(articles, main) {
    //add append logic here
    articles.forEach(element => {
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = element.urlToImage;

        let title = document.createElement("p");
        title.innerText = element.title;

        let p = document.createElement("p");
        p.innerHTML = element.description;

        div.append(image,title,p);

        div.onclick =()=>{
localStorage.setItem("article",JSON.stringify(element));
window.location.href = "news.html"
        }
        main.append(div);
    });



}

export { apiCall, appendArticles }