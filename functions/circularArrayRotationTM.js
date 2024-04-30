function circularArrayRotationTM(a, k, queries) {
    return new Promise((resolve, reject) => {
        if (a.constructor !== Array || queries.constructor !== Array || typeof k !== "number") reject("input type is not suitable")
        if (k - parseInt(k) !== 0) reject("k must be integer")
        if (k < 0) reject("k must be non negative")
        if (Math.max(...queries) >= a.length) reject("query must be less than length of a")
        for (let i=0; i<k; i++){
            var newArr = [a[a.length-1]];
            for (let j=0; j < a.length-1; j++){
                newArr.push(a[j]);
            }
            a = [...newArr];
        }
        resolve(queries.map(val => a[val]));
    })
    
}

export default circularArrayRotationTM;