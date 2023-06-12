const {readFileSync} = require('fs');

// Read the JSON in problem1.json
const res = JSON.parse(readFileSync('./problem1.json',{encoding: 'utf-8'}))

// Add height and weight to Fluffy
Object.assign(res, {weight: 6});
Object.assign(res, {height : 4});

// Fluffy name is spelled wrongly. Update it to Fluffyy
Object.assign(res, {name: "Fluffyy"});

// List all the activities of Fluffyy’s catFriends. && Print the catFriends names.
let catFriendsActivities = [];
let catFriendsWeight=0;
for (const key in res.catFriends) {
    //List all the activities of Fluffyy’s catFriends
    catFriendsActivities.push(...res.catFriends[key].activities)
    // Print the catFriends names.
    console.log(`cat${+key+1} name is ${res.catFriends[key].name}`)
    catFriendsWeight += res.catFriends[key].weight;
}

// Print the total weight of catFriends
console.log(`total weight of catFriends is `+ catFriendsWeight);

// Print the total activities of all cats 
let allCatsActivities = [...res.activities, ...catFriendsActivities]
console.log(`total activities of all cats is ${allCatsActivities.length}: `)
for (const key in allCatsActivities) {
    console.log((+key+1) +') '+allCatsActivities[key])
}

// Add 2 more activities to Bar & Foo cats 
res.catFriends[0].activities.push("lazy", "scratching things")
res.catFriends[1].activities.push("play with cotton reels", "tree climbing")
// console.log(res.catFriends[0].activities);
// console.log(res.catFriends[1].activities);

//Update the fur color of bar
res.catFriends[0].furcolor = "yellow";

console.log(res);
