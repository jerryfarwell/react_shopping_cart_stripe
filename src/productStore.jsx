// price_1MtvMSFrCY7e7e3NSzXuwvf0      cofee
// price_1MtvSbFrCY7e7e3NGMMEhPv6      sungalasses
// price_1MtvVzFrCY7e7e3NnAzt4XqB      camera




const ProdutcsArray = [

    {
        id: "price_1MtvMSFrCY7e7e3NSzXuwvf0",
        title: "cofee",
        price: 4.99
    },
    {
        id: "price_1MtvSbFrCY7e7e3NGMMEhPv6 ",
        title: "sunglasses",
        price: 9.99
    },
    {
        id: "price_1MtvVzFrCY7e7e3NnAzt4XqB",
        title: "camera",
        price: 39.99
    },

]


function GetProductData (id) {

    let ProductData = ProdutcsArray.find(product => product.id === id);

    if (ProductData === undefined){
        console.log("product data does not exist dor ID :" + id);
        return undefined

    }
    return ProductData;
}




export {ProdutcsArray, GetProductData};