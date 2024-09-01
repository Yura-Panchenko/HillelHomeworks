let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000},{name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

function sumSalaries(company) {
    let sum = 0;
    for (let key in company) {
        if (Array.isArray(company[key])) {
            for (let i = 0; i < company[key].length; i++) {
                sum += company[key][i].salary;
            }
        } else {
            sum += sumSalaries(company[key]);
        }
    }
    return sum;
};

console.log(sumSalaries(company));