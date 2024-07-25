const destinations = [
  {
    name: "Taj Mahal, Agra",
    Image: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Taj_Mahal_2012.jpg/800px-Taj_Mahal_2012.jpg"
    ],
    information: "The Taj Mahal, located in Agra, is a magnificent white marble mausoleum built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal. It is a UNESCO World Heritage Site and one of the Seven Wonders of the World.",
    hotels: [
      {
        name: "The Oberoi Amarvilas",
        address: "Taj East Gate Road, Agra, Uttar Pradesh"
      },
      {
        name: "ITC Mughal",
        address: "Taj Ganj, Agra, Uttar Pradesh"
      }
    ]
  },
  {
    name: "Jaipur, Rajasthan",
    Image: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Hawa_Mahal_2011.jpg/800px-Hawa_Mahal_2011.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Amber_Fort.jpg/800px-Amber_Fort.jpg"
    ],
    information: "Jaipur, also known as the Pink City, is the capital of Rajasthan. It is famous for its historic palaces and forts, including the Hawa Mahal and the Amber Fort.",
    hotels: [
      {
        name: "Taj Rambagh Palace",
        address: "Bhawani Singh Road, Jaipur, Rajasthan"
      },
      {
        name: "The Oberoi Rajvilas",
        address: "Goner Road, Jaipur, Rajasthan"
      }
    ]
  },
  {
    name: "Varanasi, Uttar Pradesh",
    Image: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Varanasi_Ghats.jpg/800px-Varanasi_Ghats.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Ganges_Aarti_at_Varanasi.jpg/800px-Ganges_Aarti_at_Varanasi.jpg"
    ],
    information: "Varanasi, also known as Kashi, is one of the oldest living cities in the world. It is a major religious hub in India, known for its ghats along the Ganges River and the evening Ganga Aarti.",
    hotels: [
      {
        name: "BrijRama Palace",
        address: "Munshi Ghat, Darbhanga Ghat, Varanasi, Uttar Pradesh"
      },
      {
        name: "Taj Nadesar Palace",
        address: "Nadesar Palace Grounds, Varanasi, Uttar Pradesh"
      }
    ]
  },
  {
    name: "Udaipur, Rajasthan",
    Image: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Lake_Pichola%2C_Udaipur%2C_Rajasthan.jpg/800px-Lake_Pichola%2C_Udaipur%2C_Rajasthan.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Udaipur_Palace.jpg/800px-Udaipur_Palace.jpg"
    ],
    information: "Udaipur, also known as the City of Lakes, is a beautiful city in Rajasthan. It is famous for its lakes, palaces, and vibrant culture.",
    hotels: [
      {
        name: "Taj Lake Palace",
        address: "Pichola, Udaipur, Rajasthan"
      },
      {
        name: "The Oberoi Udaivilas",
        address: "Haridasji Ki Magri, Udaipur, Rajasthan"
      }
    ]
  },
  {
    name: "Hampi, Karnataka",
    Image: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Hampi_Temple.jpg/800px-Hampi_Temple.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Hampi_scenery.jpg/800px-Hampi_scenery.jpg"
    ],
    information: "Hampi is an ancient village in Karnataka, known for its ruins of Vijayanagara Empire. It is a UNESCO World Heritage Site.",
    hotels: [
      {
        name: "Evolve Back, Hampi",
        address: "Hampi, Karnataka"
      },
      {
        name: "Heritage Resort Hampi",
        address: "Hampi, Karnataka"
      }
    ]
  }
];


const destinationSelect = document.getElementById("destination");

const addDestinationOptions = ()=>{
  for(let destination of destinations){
    const option = `<option value="${destination.name}">${destination.name}</option>`;
    destinationSelect.insertAdjacentHTML("beforeend", option);
  }
}

addDestinationOptions();
