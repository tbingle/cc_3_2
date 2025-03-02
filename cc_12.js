//Inital Commit
//Task 1

const dashboardById = document.getElementById("dashboard"); //Using getElementById
const dashboardByQuery = document.querySelector("#dashboard"); //Using querySelector
const revenueCard = document.createElement("div");//Using createElement
revenueCard.setAttribute("class", "metric-card");
revenueCard.setAttribute("id", "revenueCard");
revenueCard.innerHTML = `
  <h3>Revenue</h3>
  <p>$0</p>
`;
dashboardById.appendChild(revenueCard); // Or you can use dashboardByQuery.appendChild(revenueCard);

//Task 2

const metricCardsNodeList = document.querySelectorAll(".metric-card");//Select Elements
const metricCardsArray = Array.from(metricCardsNodeList);//Convert to list
metricCardsArray.forEach(card => {//Update information
  const title = card.querySelector("h3");
  title.innerText += " - Updated"; 
  card.style.backgroundColor = "#f3f3f3"; 
});

//Task 3

const inventoryList = document.getElementById("inventoryList");
//Function to add a new inventory item to the list
function addInventoryItem(productName) {
    //Create a new element
    const newProduct = document.createElement("li");
    //Set a class 
    newProduct.setAttribute("class", "product-item");
    newProduct.setAttribute("data-name", productName); //Adding the product name 
    newProduct.innerText = productName;
    //New product item 
    inventoryList.appendChild(newProduct);
    //Remove the product item on click
    newProduct.addEventListener("click", removeInventoryItem);
}
//Remove a product item when clicked
function removeInventoryItem(event) {
    //Remove the clicked item
    inventoryList.removeChild(event.target);
}
function createCustomerCard(name) {
    const customerCard = document.createElement('div');
    customerCard.classList.add('customer-card');
    customerCard.innerText = `Customer: ${name}`;
    document.getElementById('customerSection').appendChild(customerCard);
}

//Task 4 

document.addEventListener("DOMContentLoaded", function() {
    //Select the parent container 
    const customerSection = document.getElementById("customerSection");
    const customerCards = document.querySelectorAll(".customer-card");
    //Event listener 
    customerSection.addEventListener("click", function() {
        console.log("Customer section clicked");
    });
    customerCards.forEach(card => {
        card.addEventListener("click", function(event) {
            //Log the customer card 
            console.log("Customer card clicked");
            //Prevent event bubbling 
            event.stopPropagation();
        });
    });
});

