//Global Vars
//===============

var cryptos = ["bitcoin", "litecoin", "hodl", "dogecoin", "cryptokitties", "fomo", "xrp", "altseason", "decentralization", "blockchain"];
var cryptoText;




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

                    respData.forEach(function (elem, i) {

                        var giphyImg = $("<img>");

                        giphyImg.attr("src", elem.images.fixed_height_still.url);
                        giphyImg.attr("data-still", elem.images.fixed_height_still.url);
                        giphyImg.attr("data-state", "still");
                        giphyImg.attr("data-animate", elem.images.fixed_height.url);
                        giphyImg.addClass("img-fluid btn-outline-success gpimg giphyBtn");
                        giphyImg.on("click", function () {
                            var giphyState = $(this).attr("data-state");
                            if (giphyState === "still") {
                                $(this).attr("src", $(this).attr("data-animate"));
                                $(this).attr("data-state", "animate");
                            } else {
                                $(this).attr("src", $(this).attr("data-still"));
                                $(this).attr("data-state", "still");
                            }

                        })

                        var giphyRating = $("<p>");
                        giphyRating.addClass("text-center rating");

                        $("#giphy").prepend(" Rated:" + respData[i].rating + "<p>");
                        $("#giphy").prepend(giphyImg);


                        $("#giphy").after(giphyRating);

                    })






                    // }
                })



        })

    });

}


function addButton() {

    var textInput;


    $("#submit").on("click", function () {

        textInput = $("#text-crypto").val().trim();
        console.log(textInput);

    })


}


//Main
//============


addButton();
showBtn();