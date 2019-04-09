// IIFE Immediately invoked function expression;
// IIFE are used by libraries to control the scope, build modules,
// provide encapsulation and avoid global variables;
(function() {

    var createWorker = function() {

    var workCount = 0;

    // revealing module pattern
    var task1 = function() {
        workCount += 1;
        console.log("task1");
    };

    var task2 = function() {
        workCount += 1;
        console.log("task2");
    };

    // exposing the global variables
    return {
        job1: task1,
        job2: task2
    };
};
    // object - data and methods atached to it
    var worker = createWorker();

    worker.job1();
    worker.job2();
}());