"use strict";
/* let employee: Employee = {
  firstName : "Emil",
  lastName: "Andersson",
  fullName(): string {
      return this.firstName + " " + this.lastName;
  }
}: string

employee.firstName = 10;  //* Error - Type 'number' is not assignable to type 'string' */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let myIceCream = {
    flavor: 'vanilla',
    scoops: 2
};
console.log(myIceCream.flavor);
function tooManyScoops(dessert) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    }
    else {
        return 'Your order will be ready soon!';
    }
}
console.log(tooManyScoops({ flavor: 'vanilla', scoops: 5 }));
let myIceCream1 = {
    flavor: 'vanilla',
    sauce: 'caramel',
    nuts: true,
    scoops: 2
};
function tooManyScoops1(dessert) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    }
    else {
        return 'Your order will be ready soon!';
    }
}
console.log(tooManyScoops1({ flavor: 'vanilla', scoops: 5, sauce: 'caramel' }));
let myIceCream2;
myIceCream2 = ['chocolate', 'vanilla', 'strawberry'];
let myStr = myIceCream2[0];
console.log(myStr);
/*  */
const fetchURL = 'https://jsonplaceholder.typicode.com/posts';
function fetchPosts(url) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch(url);
        let body = yield response.json();
        return body;
    });
}
function showPost() {
    return __awaiter(this, void 0, void 0, function* () {
        let posts = yield fetchPosts(fetchURL);
        // Display the contents of the first item in the response
        let post = posts[0];
        console.log('Post #' + post.id);
        // If the userId is 1, then display a note that it's an administrator
        console.log('Author: ' + (post.userId === 1 ? "Administrator" : post.userId.toString()));
        console.log('Title: ' + post.title);
        console.log('Body: ' + post.body);
    });
}
showPost();
