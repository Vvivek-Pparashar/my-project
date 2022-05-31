module.exports = (temp, product) => {
  let output = temp.toString().replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.toString().replace(/{%IMAGE%}/g, product.image);
  output = output.toString().replace(/{%PRICE%}/g, product.price);
  output = output.toString().replace(/{%FROM%}/g, product.from);
  output = output.toString().replace(/{%ID%}/g, product.id);
  output = output.toString().replace(/{%DESCRIPTION%}/g, product.description);
  output = output.toString().replace(/{%NUTRI%}/g, product.nutrients);
  output = output.toString().replace(/{%QUANTITY%}/g, product.quantity);

  if (!product.organic) {
    output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
  }

  return output;
};
