$(document).ready(function(){
fetch('https://gnews.io/api/v4/top-headlines?lang=en&country=gb&token=7efe78330fba91f56056fd80623d99b7')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
       var html = '';
       for(var i = 0; i < data.articles.length; i++) {
        html +=
           `<ul>
                <li>
                    <img src="`+ data.articles[i].image +`">
                    <div>
                        <a href="`+ data.articles[i].url +`"> <b>` + data.articles[i].title + `</b></a> <br>
                        <i> `+ data.articles[i].publishedAt + `</i> <br>
                        <p>` +  data.articles[i].description + `</p>
                     </div>
                </li>
            </ul>`
       }

       $("#container").html(html);
    })
    // .catch(function(err){
    //     alert('Có Lỗi')
    // })
});

function mySearch(){
    
    var input = $("#searchKey").val();
    var from = $("#from").val();
    var to = $("#to").val();
    fetch('https://gnews.io/api/v4/search?lang=en&country=gb&q='+ input +'&from='+from+'&to='+to +'&token=7efe78330fba91f56056fd80623d99b7')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        
        var html = '';
        for(var i = 0; i < data.articles.length; i++) {
         html +=
            `<ul>
                 <li>
                     <img src="`+ data.articles[i].image +`">
                     <div>
                         <a href="`+ data.articles[i].url +`"> <b>` + data.articles[i].title + `</b></a>
                         <p>` +  data.articles[i].description + `</p>
                      </div>
                 </li>
             </ul>`
        }
 
        $("#container").html(html);
    })
}

   

