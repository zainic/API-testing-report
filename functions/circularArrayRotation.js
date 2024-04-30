function circularArrayRotation(a, k, queries) {
    return new Promise((resolve, reject) => {
        if (a.constructor !== Array || queries.constructor !== Array || typeof k !== "number") reject("input type is not suitable")
        if (k - parseInt(k) !== 0) reject("k must be integer")
        if (k < 0) reject("k must be non negative")
        if (Math.max(...queries) >= a.length) reject("query must be less than length of a")
        for (let i=0; i<k; i++){
            let x = a.pop();
            a.unshift(x);
        }
        resolve(queries.map(val => a[val]));
    })
    
}

export default circularArrayRotation;