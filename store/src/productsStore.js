// Hotwheels: price_1M565BKBOvZP1x6C9NJp1bTR
// barbie: price_1M56B7KBOvZP1x6CzzAQEdYw
// woody: price_1M56BcKBOvZP1x6CQpLOePxD
// Insector: price_1M56C3KBOvZP1x6CadjnAiju
// Funko apex: price_1M56CfKBOvZP1x6CzUICJ6ty
// Monopoly: price_1M56DQKBOvZP1x6CARBVtw96
// Max steel: price_1M56DpKBOvZP1x6Ctw4Q1SEj

const productsArray = [
    {
      id: "price_1M565BKBOvZP1x6C9NJp1bTR",
      name: "Hotwheels",
      productType: "Toy car",
      price: 8,
      rating: 5,
      image: "hotwheels1.jpg",
      description: "only another hotwheels toycar from mattel",
    },
    {
      id: "price_1M56B7KBOvZP1x6CzzAQEdYw",
      name: "Barbie",
      productType: "Barbie Doll",
      price: 15,
      rating: 4,
      image: "Barbie1.jpg",
      description: "only another Barbie Doll from mattel",
    },
    {
      id: "price_1M56BcKBOvZP1x6CQpLOePxD",
      name: "woody",
      productType: "action figure",
      price: 12,
      rating: 4,
      image: "woody1.jpg",
      description: "woody from toy story",
    },
    
    {
      id: "price_1M56C3KBOvZP1x6CadjnAiju",
      name: "insector",
      productType: "RC car",
      price: 50,
      rating: 5,
      image: "insector1.jpg",
      description: "the best RC car ever",
    },
    {
      id: "price_1M56CfKBOvZP1x6CzUICJ6ty",
      name: "funko apex",
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
      id: "price_1M56DQKBOvZP1x6CARBVtw96",
      name: "monopoly",
      productType: "board game",
      price: 30,
      rating: 4,
      image: "monopoly.jpg",
      description: "monopoly by Hasbro",
    },
    {
      id: "price_1M56DpKBOvZP1x6Ctw4Q1SEj",
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