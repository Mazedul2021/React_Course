const introduce = (name, age) => {
    return (`I am ${name}, and I am ${age} years old `);
  };
  
  const multiply = (a,b) => {
    return (a*b);
  };
  
  const isAdult = (age) => {
    return age >= 18;
  };
  
  
  console.log(introduce("Mithun",26));
  console.log(multiply(2,6));
  console.log(isAdult(26));