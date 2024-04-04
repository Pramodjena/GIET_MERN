const user = {
    username: "pramod",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "pramod"
// user.welcomeMessage()

// console.log(this);

// function welcome(){
//     let username = "pramod"
//     console.log(this.username);
// }

// welcome()

// const welcome = function () {
//     let username = "pramod"
//     console.log(this.username);
// }

const welcome =  () => {
    let username = "pramod"
    console.log(this);
}


// welcome()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "pramod"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()