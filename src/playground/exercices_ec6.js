console.log("I'm exercising!");

var obj = {
    a: 10
};
  
Object.defineProperty(obj, 'b', {
    get: () => {
        console.log('entering "get"');
        console.log(this.a, typeof this.a, this); // undefined 'undefined' Window {...} (or the global object)
        return this.a + 10; // represents global object 'Window', therefore 'this.a' returns 'undefined'
    }
});

console.log(obj.b.get());