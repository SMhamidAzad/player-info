const searchTeam = ()=>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value ="";
    document.getElementById('spinner').style.display='block';
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPlayer(data.player[0]))
}
const displayPlayer = players =>{
    console.log(players);
    document.getElementById('spinner').style.display='none';
    const search = document.getElementById('searchPlayer');
    search.textContent="";
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML =`
    <div class="row g-0 mt-5">
    <div class="col-lg-4 col-12">
        <img src="${players.strCutout}" class="img-fluid rounded-start" alt="...">
    </div>
   <div class="col-lg-8 col-12">
      <div class="card-body">
         <h2 class="card-title text-danger">${players.strPlayer}</h2>
          <p class="card-text">${players.strDescriptionEN.slice(0,1200)}</p>
          <p class="card-text"><b>Country:</b> ${players.strNationality}</small></p>
        
        </div>
  </div>
  </div>
    `;
    search.appendChild(div);
}