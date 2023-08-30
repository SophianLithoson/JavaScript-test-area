let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

function sumSalaries() {
    let total = 0;
    for (salary in salaries)
        total += salaries[salary];
    return total;
}