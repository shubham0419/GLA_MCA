

const shows = async ()=>{
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();
  const div = document.createElement("div");
  
  console.log(data);
}

shows();