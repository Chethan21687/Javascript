let cricket_teams=new Array("India",'NZ','AUS')

console.log(cricket_teams.at(1))
console.log(cricket_teams.at(0))
console.log(cricket_teams.at(-1))
console.log(cricket_teams.at(-3))

cricket_teams[2]="SA" //Arrays are mutable
console.log(cricket_teams);

console.log(cricket_teams.length);