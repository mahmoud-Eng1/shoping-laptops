// this function retun dolarsin
const currencyFormat = new Intl.NumberFormat(undefined, {
currency: "USD",
style: "currency",
});
const stylePrice = (number)=> {
    return currencyFormat.format(number) 
}
export default stylePrice;