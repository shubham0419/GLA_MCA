const getData = async (search) => {
  try {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${search}`);
    const data = await res.json();
    console.log(data);
    data.forEach((movie) => {
      const div = document.createElement("div");
      div.style.display = "inline-block";
      const img = document.createElement("img");
      if(movie.show.image != null) img.setAttribute("src", movie.show.image.medium);
      div.appendChild(img);
      document.body.appendChild(div);
    });

    console.log(data);
  } catch (error) {

  }
};

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const search = e.target.children[0].value;
  console.log(search);
  getData(search);
});
