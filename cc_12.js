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

