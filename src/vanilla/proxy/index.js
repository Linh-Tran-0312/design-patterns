const person = {
    fname: "John",
    lname: "Doe",
    age: 30
}
const handler = {
    get(obj, prop) {
        console.log(`The value of ${prop} is ${obj[prop]}`);
        if(prop === "name") {
            return `${obj.fname} ${obj.lname}`;
        }
        return obj[prop];
    },
    set(obj, prop, value) {
        console.log(`Setting ${prop} to ${value}`);
        if(prop === "name") {
            const [fname, lname] = value.split(" ");
            obj.fname = fname;
            obj.lname = lname;
            return true;
        }
        obj[prop] = value;
        return true;
    }
}

const proxy = new Proxy(person, handler);
console.log(proxy.name);
proxy.name = "Jane Doe";
console.log(proxy.name);