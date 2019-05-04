var obj = {
    name: 'age',
    age: 20,
    sex: 'female',
    [Symbol.iterator]() {
        var self = this;
        var i = 0;
        var keys = Object.keys(this);
        return {
            next() {
                if (i < keys.length) {
                    return {
                        value: self[keys[i++]],
                        done: false
                    }
                } else {
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
}

for (let item of obj) {
    console.log(item);
}