function Hunter(name, level) {
    this.name = name;
    this.level = level;
    this.list = []; // 记录谁订阅了自己
}

Hunter.prototype.publish = function(money) {
    console.log(`${this.level}猎人${this.name}寻求帮助`);
    this.list.forEach(item => item(money));
};
Hunter.prototype.subscribe = function(target, fn) {
    console.log(`${this.level}猎人订阅了${target.name}`);
    target.list.push(fn);
}

let hunterA = new Hunter('hunterA', 1);
let hunterB = new Hunter('hunterB', 2);
let hunterC = new Hunter('hunterC', 3);
let hunterD = new Hunter('hunterD', 1);
hunterA.subscribe(hunterC, function(money) {
    console.log('A收到' + money);
});
hunterB.subscribe(hunterC, function(money) {
    console.log('B收到' + money);
});
hunterD.subscribe(hunterC, function(money) {
    console.log('C收到' + money);
});

hunterC.publish(123)