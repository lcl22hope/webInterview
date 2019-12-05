Promise.resolve(1)
    .then(v => {
        console.log("then", v); //1 
        Promise.resolve(5)
            .then(v => {
                console.log("then", v); //5
                return v + 1;
            })
            .then(v => {
                console.log("then", v); //6
                return v + 1;
            })
            .then(v => {
                console.log("then", v); //7
                return v + 1;
            });

        return v + 1; //2
    })
    .then(v => {
        console.log("then", v); //2
        return v + 1; 
    })
    .then(v => {
        console.log("then", v); //3
        return v + 1; //4
    });

// 输出结果时 1,5,2,6,3,7
