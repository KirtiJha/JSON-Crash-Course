//var person = {
  //  name: "Kirti",
    //age: 32,
    //address: {
      //  street: "5 main st",
        //city: "Boston"
    //},
    //children: ["Brian", "Nick"]
//}
//person = JSON.stringify(person);
//person = JSON.parse(person);

var people = [
    {
       name: "name1",
       age: 20 
    },
    {
        name: "name2",
        age: 30
    },
    {
        name: "name3",
        age: 40
    }
];

var output = '';
//console.log(people[0].name);
for(var i = 0; i < people.length; i++) {
    //console.log(people[i].name);
    output += '<li>'+people[i].name+'</li>';
}
document.getElementById('people').innerHTML = output;