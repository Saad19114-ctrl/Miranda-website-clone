

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });
// var timeline = gsap.timeline();

// timeline.to(".page1", {
//     y: "100vh",
//     scale: 0.5,
//     duration: 0,
// });

// timeline.to(".page1", {
//     y: "30vh",
//     duration: 1,
//     delay: 1,
// });

// timeline.to(".page1", {
//     y: "0vh",
//     rotate: 360,
//     scale: 1,
//     duration: 0.7,
// });
 
// window.onscroll = function() {myFunction()};

// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;
// console.log(sticky);
// function myFunction() {
//     var pageY = window.pageYOffset;
//     console.log(pageY) 
    
//   if (pageY > sticky) {  
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

const changeColorButton = document.querySelector(".change-color h1");
var colorPickerContainer = document.getElementById('colorPickerContainer');
const defaultButton = document.querySelector(".default-button button");
const page = document.querySelector(".page1");
const closeButton = document.querySelector(".close-button");
// Retrieve the color from localStorage on page load
const storedColor = localStorage.getItem("backgroundColor");

if (storedColor) {
    page.style.backgroundColor = storedColor;
}

changeColorButton.addEventListener("click", () => {
    colorPickerContainer.style.display = 'block';
});

function changeColor(color) {
    page.style.backgroundColor = color;
    // Save the selected color to localStorage
    localStorage.setItem("backgroundColor", color);
}

closeButton.addEventListener("click", () => {
    colorPickerContainer.style.display = 'none';
});

defaultButton.addEventListener("click", () => {
    // Remove the stored color from localStorage
    localStorage.removeItem("backgroundColor");
    // Set the background color to the default value or update as needed
    page.style.backgroundColor = '#C4BCB3'; // Set the default color here if needed
});

// setTimeout(()=> {
//     console.log("Message after 10 seconds.")
// }, 4000);

// function callBackFn() {
//     console.log("This is a callback");
// }

// function highOrderFunction(callback) {
//     callback();
// }

// highOrderFunction(callBackFn);

class Car {
    constructor (size, price) {
        this.size = size;
        this.price = price;
    }
    fuelConsumption(x) {
        return x + this.size + this.price;
    }
};
 
const Rectangle = class Rectangle2 {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };

// const rectangle = new Rectangle (10, 20)
// console.log(Car)
// console.log(rectangle);


function checkOddorEven (number) {
    return new Promise((resolve, reject) => {
 
    if (number%2 === 0) {
        setTimeout(()=>{resolve("The number is even")}, 4000)
    }
    else {
        reject("The number is not even")
    }
});
};

async function randomOutcome() {
    return new Promise((resolve, reject) => {
         setInterval(() => {
            let number = Math.random();
            if (number > 0.5) {
              console.log(number)
                resolve("Number greater than 0.5");
            } else {
              console.log(number)
                reject("Number less than 0.5");
            }
        }, 3000);
    });
}

async function foo() {
  return "Hello World";
}

const result = foo();
// Call randomOutcome function  
// randomOutcome()
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));


 
checkOddorEven(100098098076670)
.then
((result)=> 
{console.log(result)})
.catch
((error)=> 
{ console.log(error)});

// const fetchUser = () => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const user = { id: 1, name: 'John' };
//         resolve(user);
//       }, 1000);
//     });
//   };
  
//   const fetchPosts = () => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const posts = ['Post 1', 'Post 2', 'Post 3'];
//         resolve(posts);
//       }, 2000);
//     });
//   };
  
//   fetchUser()
//     .then((user) => fetchPosts(user));
//     .then((posts) => console.log(posts));
//     .catch((error) => console.log(error));

const fetchUser = (userId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = { id: userId, name: `User ${userId}` };
        if (user) {
          resolve(user);
        } else {
          reject(`User with ID ${userId} not found`);
        }
      }, 1000);
    });
  };
  
  const fetchPostsByUserId = (userId) => { 
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulated posts data for different users
        const postsData = {
          1: ['Post 1 by User 1', 'Post 2 by User 1', 'Post 3 by User 1'],
          2: ['Post 1 by User 2', 'Post 2 by User 2'],
          3: ['Post 1 by User 3', 'Post 2 by User 3', 'Post 3 by User 3'],
        };
        const posts = postsData[userId] || [];
        if (posts.length > 0) {
          resolve(posts);
        } else {
          reject(`No posts found for user with ID ${userId}`);
        } 
      }, 2000);
    });
  }; 
  
  // Array of user IDs for which we want to fetch posts

  const userIds = [1];
  
  // Function to fetch posts for multiple user IDs
  const fetchPostsForMultipleUsers = (userIds) => {
    const promises = userIds.map((userId) => {
      return fetchPostsByUserId(userId);
    });
  
    return Promise.all(promises);
  };
  
  fetchPostsForMultipleUsers(userIds)
    .then((posts) => console.log(posts))
    .catch((error) => console.log(error));
  

// const number = 10;
// const car1 = new Car(10, 10);
// console.log(car1.fuelConsumption(number))

// changeColorButton.addEventListener("click", () => {
//     console.log(colorPickerContainer)
//     colorPickerContainer.style.display = 'block'
// })

// let page = document.querySelector(".page1");

// function changeColor(color) {
//     page.style.backgroundColor = color;
// }

// const closeButton = document.querySelector(".close-button");
// closeButton.addEventListener("click", () => {
//     colorPickerContainer.style.display = 'none';
// })