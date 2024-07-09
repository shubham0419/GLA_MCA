const shows = async () => {

  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  data.forEach(element => {
    console.log(element.show.image.medium);
    let img = `<img src=${element.show.image.medium}>`;
    const div = document.createElement("div");
    div.innerHTML = img;
    document.body.append(div);
  });
  
  console.log(data);
};

shows();
