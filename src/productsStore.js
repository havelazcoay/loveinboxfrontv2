// Coffee: price_1LnUTFDM1jwCEz8OGoOSXiSM
// Sunglasses: price_1LnUTxDM1jwCEz8OAqHYTwKQ
// Camera: price_1LnUUoDM1jwCEz8OvxIcJ7to

const productsArray = [
    {
      id: 1,
      name: "Hotwheels",
      productType: "Toy car",
      price: 8,
      rating: 5,
      image: "hotwheels1.jpg",
      description: "only another hotwheels toycar from mattel",
    },
    {
      id: 2,
      name: "Barbie",
      productType: "Barbie Doll",
      price: 15,
      rating: 4,
      image: "Barbie1.jpg",
      description: "only another Barbie Doll from mattel",
    },
    {
      id: 3,
      name: "Woody",
      productType: "action figure",
      price: 12,
      rating: 4,
      image: "woody1.jpg",
      description: "woody from toy story",
    },
    
    {
      id: 4,
      name: "Insector",
      productType: "RC car",
      price: 50,
      rating: 5,
      image: "insector1.jpg",
      description: "the best RC car ever",
    },
    {
      id: 5,
      name: "Funko Apex",
      productType: "Funko",
      price: 18,
      rating: 5,
      image: "funkoapex1.jpg",
      description: "pathfinder funko",
    },
    {
      id: 6,
      name: "hotwheels",
      productType: "pista",
      price: 100,
      rating: 5,
      image: "pistahotwheels1.png",
      description: "another hotwheels circuit",
    },
    {
      id: 7,
      name: "Monopoly",
      productType: "board game",
      price: 30,
      rating: 4,
      image: "monopoly.jpg",
      description: "monopoly by Hasbro",
    },
    {
      id: 8,
      name: "Max Steel",
      productType: "action figure",
      price: 22,
      rating: 5,
      image: "maxsteel1.png",
      description: "the best action man",
    },
  ];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };