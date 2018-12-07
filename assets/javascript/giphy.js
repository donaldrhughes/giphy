//Global Vars
//===============

var cryptos = ["bitcoin", "litecoin", "hodl", "dogecoin", "cryptokitties", "fomo", "xrp", "altseason"];





//functions
//===============

function showBtn() {

    cryptos.forEach(function (elem, i) {

        var cryptoBtn = $("<button>");
        cryptoBtn.addClass("btn btn-success m-1");
        cryptoBtn.text(elem);
        cryptoBtn.attr("data-crypto", elem);
        $("#buttons").append(cryptoBtn)
        cryptoBtn.on("click", function () {

            var query = "q=" + elem;
            var apikey = "x6t5WwzJNrOFH2o9necLTHkI7UJN1pvj"
            var resp = "http://api.giphy.com/v1/gifs/search?" + query + "&api_key=" + apikey + "&limit=10";



            $.ajax({
                url: resp,
                method: "GET"
            })
                .then(function (response) {
                    

                    var respData = response.data;
                    console.log(respData);
                    for (var i = 0; i < respData.length; i++) {
                        var giphyImg = $("<img>");
                        giphyImg.attr("src", respData[i].images.fixed_height.url);
                        giphyImg.addClass("img-fluid");
                        console.log(giphyImg);
                        
                        var giphyRating = $("<p>");
                        giphyRating.text(respData[i].rating);

                        $("#giphy").prepend(giphyImg);
                        $("#giphy").prepend("Rated:" + giphyRating);
                        
                        
                        
                        
                    }
                })



        })

    });

}





//Main
//============



showBtn();