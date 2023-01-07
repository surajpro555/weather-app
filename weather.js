const loc=document.getElementById('location')
const climate=document.getElementById('climate')
const tempvalue=document.getElementById('temp-value')
const searchInput=document.getElementById('search-input')
const searchbutton=document.getElementById('search-button')
searchbutton.onclick=()=>{
    if(searchInput.value==''||searchInput.value==' ')
    {
        window.alert('Enter City Name');
    }
   else{
       const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'aae399e3e9mshf675ef3563c6c08p1294a2jsn2f103f6b5806',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
                }
       };
      fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${searchInput.value}`, options)
	 .then(response => response.json())
	 .then(data =>
      {
            loc.innerHTML=`<b>${(searchInput.value).toUpperCase()}</b>`;
            searchInput.value="";
            tempvalue.innerHTML=data.temp;
      })
	.catch(err => console.error(err));
  }
}