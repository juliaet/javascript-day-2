// var x = 2;
// var userName = "julia";
// var htmlBuilder = "";

// teams = new Array([]);
// teams = ["Braves", "Nationals","Phillies","Mets","Marlins","Cardinals","Cubs","Brewers","Reds","Pirates","Dogers","Diamondbacks","Giants","Padres","Rockies",];
// wins = [89,79,74,72,51,81,76,74,67,62,93,75,69,66,60];
// losses = [55,63,68,70,91,62,66,68,77,81,52,68,74,76,84];
//
// console.log(teams);
// console.log(wins);
// console.log(wins[x]);
//
// htmlBuilder = '<h2>Teams:</h2>';
// htmlBuilder += '<div class="teams-list">';
//
// for (var i=0; i<teams.length; i++){
//   // console.log("inside the loop " + i);
//   console.log(teams[i]);
//   console.log(htmlBuilder);
//
//   if (losses[i] >= 60){
//     console.log("This team is horrible");
//   }else{
//     console.log('This team is not that bad');
//   }
//
//   htmlBuilder += teams[i] + " Wins: " + wins[i] + " Losses: " + losses[i] + "</br>";
//
// }
//
// htmlBuilder += "</div";
// document.getElementById("teams").innerHTML=htmlBuilder;
//
//
// // logic part from video


teams = new Array([]);
teams = ["Braves", "Nationals","Phillies","Mets","Marlins","Cardinals","Cubs","Brewers","Reds","Pirates","Dodgers","Diamondbacks","Giants","Padres","Rockies",];
wins = [89,79,74,72,51,81,76,74,67,62,93,75,69,66,60];
losses = [55,63,68,70,91,62,66,68,77,81,52,68,74,76,84];

var table = "";

table = '<table> <tr> <th> Teams </th> <th> Wins </th> <th> Losses </th> </tr>';

var tempHighWins = 0;
var tempLeader = 0;

for (var i=0; i<teams.length; i++){
  if(wins[i] >= tempHighWins){
    tempHighWins = wins[i];
    tempLeader = i;
  }
}
                                                            //https://www.youtube.com/watch?v=F-JDZrYyzdY
for (var x=0; x<teams.length; x++){
  if(teams[x] == teams[tempLeader]){
    table += `<tr> <td> <strong> ${teams[x]} </strong> </td> <td> <strong> ${wins[x]} </strong> </td> <td> <strong> ${losses[x]} </strong> </td>`;
  }else table += `<tr> <td> ${teams[x]} </td> <td> ${wins[x]} </td> <td> ${losses[x]} </td> </tr>`;
    console.log(table);
}

table += `</table>`;

console.log("The team with the most wins of " + tempHighWins + " are the " + teams[tempLeader]);

document.getElementById('teams').innerHTML=table;


// let teams = [
//   { Teams: "Braves", Wins: 89, Losses: 55 },            //https://www.valentinog.com/blog/html-table/
//   { Teams: "Nationals", Wins: 79, Losses: 63 },
//   { Teams: "Phillies", Wins: 74, Losses: 68 },
//   { Teams: "Mets", Wins: 72, Losses: 70 },
//   { Teams: "Marlins", Wins: 51, Losses: 91 },
//   { Teams: "Cardinals", Wins: 81, Losses: 62 },
//   { Teams: "Cubs", Wins: 76, Losses: 66 },
//   { Teams: "Brewers", Wins: 74, Losses: 68 },
//   { Teams: "Reds", Wins: 67, Losses: 77 },
//   { Teams: "Pirates", Wins: 62, Losses: 81 },
//   { Teams: "Dodgers", Wins: 93, Losses: 52 },
//   { Teams: "Diamondbacks", Wins: 75, Losses: 68 },
//   { Teams: "Giants", Wins: 69, Losses: 74 },
//   { Teams: "Padres", Wins: 66, Losses: 76 },
//   { Teams: "Rockies", Wins: 60, Losses: 84 }
// ]
//
// function generateTableHead(table, data) {
//   let thead = table.createTHead();
//   let row = thead.insertRow();
//   for (let key of data) {
//     let th = document.createElement("th");
//     let text = document.createTextNode(key);
//     th.appendChild(text);
//     row.appendChild(th);
//   }
// }
//
// function generateTable(table, data) {
//   for (let element of data) {
//     let row = table.insertRow();
//     for (key in element) {
//       let cell = row.insertCell();
//       let text = document.createTextNode(element[key]);
//       cell.appendChild(text);
//     }
//   }
// }
//
// let table = document.querySelector("table");
// let data = Object.keys(teams[0]);
// generateTableHead(table, data);
// generateTable(table, teams);
