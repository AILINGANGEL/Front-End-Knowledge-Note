function propertyIsFromPrototype(obj, attr) {
    return (attr in obj) && (!obj.hasOwnProperty(attr))
}

console.log(propertyIsFromPrototype({}, 'a'));