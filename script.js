// script.js

const categories = {
    headwear: ["assets/headwear/headwear1.PNG", "assets/headwear/headwear2.PNG", ""],
    necklaces: ["assets/necklaces/necklace1.PNG", "assets/necklaces/necklace2.PNG"],
    earrings: ["assets/earrings/earrings1.PNG", "assets/earrings/earrings2.PNG", "assets/earrings/earrings3.PNG"],
    tops: ["assets/tops/top1.PNG", "assets/tops/top2.PNG", "assets/tops/top3.PNG", "assets/tops/top4.PNG"],
    bottoms: ["assets/bottoms/bottom1.PNG", "assets/bottoms/bottom2.PNG", "assets/bottoms/bottom3.PNG"],
    shoes: ["assets/shoes/shoes1.PNG", "assets/shoes/shoes2.PNG", "assets/shoes/shoes3.PNG"]
  };
  
  let currentCategory = "tops";
  let currentIndexes = {
    headwear: 0,
    necklaces: 0,
    earrings: 0,
    tops: 0,
    bottoms: 0,
    shoes: 0
  };
  
  const layerMap = {
    headwear: document.getElementById("headwear-layer"),
    necklaces: document.getElementById("necklace-layer"),
    earrings: document.getElementById("earrings-layer"),
    tops: document.getElementById("top-layer"),
    bottoms: document.getElementById("bottom-layer"),
    shoes: document.getElementById("shoes-layer")
  };
  
  function updateLayer(category) {
    const index = currentIndexes[category];
    const imgPath = categories[category][index];
    
    if (imgPath === "") {
      layerMap[category].style.display = "none"; // Hide the layer
    } else {
      layerMap[category].style.display = "block"; // Show the layer
      layerMap[category].src = imgPath;
    }
  }
  
  document.querySelectorAll(".category-buttons button").forEach((button) => {
    button.addEventListener("click", () => {
      currentCategory = button.dataset.category;
    });
  });
  
  document.getElementById("prev").addEventListener("click", () => {
    const items = categories[currentCategory];
    currentIndexes[currentCategory] =
      (currentIndexes[currentCategory] - 1 + items.length) % items.length;
    updateLayer(currentCategory);
  });
  
  document.getElementById("next").addEventListener("click", () => {
    const items = categories[currentCategory];
    currentIndexes[currentCategory] =
      (currentIndexes[currentCategory] + 1) % items.length;
    updateLayer(currentCategory);
  });
  
  // Initialize all layers to first item
  Object.keys(categories).forEach((category) => {
    updateLayer(category);
  });