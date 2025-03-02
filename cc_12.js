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