async function getData() {
	var response = await fetch('https://samandtheo3dp.com/redirect.json');
	var api_data = await response.json()

    const params = new URLSearchParams(window.location.search)
    var data = params.get('l')

    var url_r = ""


    for (var i = 0; i < api_data.length; i++){
        if (api_data[i].id == data){
            var url_r = api_data[i].url
            console.log(url_r)
        }
        
        if (url_r == ""){
            var url_r = "https://shop.SamAndTheo3DP.com"
        }
    }
    location.replace(url_r)
}

getData()