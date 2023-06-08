/* let employee: Employee = {
  firstName : "Emil",
  lastName: "Andersson",
  fullName(): string {
      return this.firstName + " " + this.lastName;
  }
}: string

employee.firstName = 10;  //* Error - Type 'number' is not assignable to type 'string' */

/* ----------------------------------------------------------------------------- */

interface IceCream {
  flavor: string;
  scoops: number;
}

let myIceCream: IceCream = {
  flavor: 'vanilla',
  scoops: 2
}

console.log(myIceCream.flavor);

function tooManyScoops(dessert: IceCream) {
  if (dessert.scoops >= 4) {
     return dessert.scoops + ' is too many scoops!';
  } else {
     return 'Your order will be ready soon!';
  }
}

console.log(tooManyScoops({flavor: 'vanilla', scoops: 5}));


/* interface Sundae extends IceCream {
  sauce: 'chocolate' | 'caramel' | 'strawberry';
  nuts?: boolean;
  whippedCream?: boolean;
  instructions?: boolean;
}

let myIceCream: Sundae = {
  flavor: 'vanilla',
  scoops: 2
} */

interface Sundae {
  sauce: 'chocolate' | 'caramel' | 'strawberry';
  nuts?: boolean;
  whippedCream?: boolean;
  instructions?: boolean;
  scoops: number;
  flavor: string;
}

let myIceCream1: Sundae = {
  flavor: 'vanilla',
  sauce: 'caramel',
  nuts: true,
  scoops: 2
}

function tooManyScoops1(dessert: Sundae) {
  if (dessert.scoops >= 4) {
      return dessert.scoops + ' is too many scoops!';
  } else {
      return 'Your order will be ready soon!';
  }
}
console.log(tooManyScoops1({flavor: 'vanilla', scoops: 5, sauce: 'caramel'}));

/*  Создание индексируемых типов */
interface IceCreamArray {
  [index: number]: string;
}

let myIceCream2: IceCreamArray;
myIceCream2 = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCream2[0];
console.log(myStr);


/*  */

const fetchURL = 'https://jsonplaceholder.typicode.com/posts'
// Interface describing the shape of our json data
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
async function fetchPosts(url: string) {
    let response = await fetch(url);
    let body = await response.json();
    return body as Post[];
}
async function showPost() {
    let posts = await fetchPosts(fetchURL);
    // Display the contents of the first item in the response
    let post = posts[0];
    console.log('Post #' + post.id)
    // If the userId is 1, then display a note that it's an administrator
    console.log('Author: ' + (post.userId === 1 ? "Administrator" : post.userId.toString()))
    console.log('Title: ' + post.title)
    console.log('Body: ' + post.body)
}

showPost();