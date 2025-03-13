// Arrow Function..!!
const obj = {
    firstName: "Akshay",
    printName: () => {
        console.log(this);
    },
    printName2: function(){
        console.log(this);
    },
};
const obj2 = {
    firstName: "Simran",
};

obj.printName();
obj.printName2();

obj.printName.call();
obj.printName2.call();






