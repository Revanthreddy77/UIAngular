const person = {
    name: 'Revanth',
    age: 23,
    city: 'Hyderabad',
    country: 'India',
    occupation: 'Engineer',
    };
    
    const { name, age, ...details } = person;
    console.log(name);
    console.log(age); 
    console.log(details);