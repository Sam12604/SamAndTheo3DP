var response
var api_data

async function getData() {
	response = await fetch('https://samandtheo3dp.com/redirect.json');
	api_data = await response.json()

    const params = new URLSearchParams(window.location.search)
    data = params.get('l')
    api_data.get(data)
	document.getElementById("test1").textContent = api_data;
}


getData()


const params = new URLSearchParams(window.location.search)
data = params.get('l')