const cities = [
    { id: 1, name: 'New York', population: 8405837 },
    { id: 2, name: 'Los Angeles', population: 3990456 },
    { id: 3, name: 'Chicago', population: 2695594 },
    { id: 4, name: 'Houston', population: 2320268 },
    { id: 5, name: 'Phoenix', population: 1732492 },
];

// console.log(cities)
// cities.forEach((item) => {
//     console.log(item.name + ' has a population of ' + item.population + ' people.');
// });

// for(let city of cities) {
//     console.log(city.name + ' has a population of ' + city.population + ' people.');
// }

// for(let index in cities) {
//     console.log(cities[index].name + ' has a population of ' + cities[index].population + ' people.')
// }

// for(let i = 0;i<cities.length;i++) {
//     console.log(cities[i].name + ' has a population of ' + cities[i].population + ' people.')
// }

// var count = 0;
// while(count < cities.length) {
//     console.log(cities[count].name + ' has a population of ' + cities[count].population + ' people.')
//     count++;
// }

// var count = 0;
// do{
//     document.write(cities[count].name + ' has a population of ' + cities[count].population + ' people.</br>')
//     console.log(cities[count].name + ' has a population of ' + cities[count].population + ' people.')
//     count++;
// }while(count < cities.length);

const q = 3
switch(q) {
    case 1:
        console.log(cities[q - 1]);
        document.write(cities[q - 1].name + ' has a population of ' + cities[q - 1].population + ' people.');
        break;
    case 2:
        console.log(cities[q - 1]);
        document.write(cities[q - 1].name + ' has a population of ' + cities[q - 1].population + ' people.');
        break;
    case 3:
        console.log(cities[q - 1]);
        document.write(cities[q - 1].name + ' has a population of ' + cities[q - 1].population + ' people.');
        break;
    case 4:
        console.log(cities[q - 1]);
        document.write(cities[q - 1].name + ' has a population of ' + cities[q - 1].population + ' people.');
        break;
    case 5:
        console.log(cities[q - 1]);
        document.write(cities[q - 1].name + ' has a population of ' + cities[q - 1].population + ' people.');
        break;
    default:
        console.log('You chose something else.');
        break;
}