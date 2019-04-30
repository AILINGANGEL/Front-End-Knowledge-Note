// 事件调度中心
let HunterUnion = {
    type: 'hunt',
    topics: Object.create(null),
    subscribe: function(topic, fn) {
        if (!this.topics[topic]) {
            this.topics[topic] = [];
        }
        this.topics[topic].push(fn);
    },
    publish: function(topic) {
        if (!this.topics[topic]) return;
        for (let fn of this.topics[topic]) {
            fn.apply(null, Array.prototype.slice.call(arguments, 1));
        }
    }
}

// 定义一个猎人类
function Hunter(name, level) {
    this.name = name;
    this.level = level;
}

Hunter.prototype.subscribe = function(topic, fn) {
    // 通过事件中心进行订阅
    HunterUnion.subscribe(topic, fn);
};

Hunter.prototype.publish = function(topic, ...args) {
    // 通过事件中心进行发布
    HunterUnion.publish(topic, ...args);
};

let hunterA = new Hunter('hunterA', 1);
let hunterB = new Hunter('hunterB', 2);
let hunterC = new Hunter('hunterC', 3);
let hunterD = new Hunter('hunterD', 1);
hunterA.subscribe('tiger', function(...args) {
    console.log('A收到' + args.join(','));
});
hunterB.subscribe('tiger', function(...args) {
    console.log('B收到' + args.join(','));
});
hunterC.subscribe('sheep', function(...args) {
    console.log('C收到' + args.join(','));
});

hunterD.publish('tiger', 'publish from hunterD', ' 测试信息  ');