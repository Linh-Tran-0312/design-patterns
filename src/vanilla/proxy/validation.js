const person = {
    fname: "John",
    lname: "Doe",
    age: 30
}
const handler = {
    set(obj, prop, value) {
        if(prop === "age" && value < 0) {
            // throw new Error("Age cannot be negative");
            console.log("Age cannot be negative");
            return false;
        }
        obj[prop] = value;
        return true;
    }
}

const proxy = new Proxy(person, handler);
proxy.age = -1;
console.log(proxy.age);