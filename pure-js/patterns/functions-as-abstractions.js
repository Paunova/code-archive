var work = function() {
    console.log("work hard!");
};

// doWork, a generic function that could be reused
var doWork = function(f) {
    console.log("start");

    try {
        f();
    }
    catch(ex) {
        console.log(ex);
    }

    console.log("end");
};

doWork(work);