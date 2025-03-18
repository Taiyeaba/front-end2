const handleAddtoCart = () => {
  const productName = document.getElementById('product-Name');
  const productQuantity = document.getElementById('product-Quantity');

  const name = productName.value;
  const quantity = productQuantity.value;

  //console.log(name,quantity)

displayProduct(name,quantity);
productName.value="";
productQuantity.value="";

}
const displayProduct = (productName, productQuantity) => {
  const productContainer = document.getElementById('product-Container');

  const li = document.createElement("li");
  li.innerText = `${productName} : ${productQuantity}`; // ✅ Fixed interpolation & typo

  productContainer.appendChild(li);
};


//note: 2 ti input e like add e click korbo text gulo add hobe