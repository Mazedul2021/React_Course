const person = {
    name: "Mithun",
    age: 26,
    country: "Bangladesh"
  };
  
  const {name, age, country} = person;
  
  console.log(name, age, country);
  
  
  const printPerson =({name, age, country}) => {
    console.log(`${name} is ${age} years old and lives in ${country}`);
  };
  
  printPerson(person);
  
  
  
  
  const newPerson = {...person, age:28};
  
  console.log(newPerson);