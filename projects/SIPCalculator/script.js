let calculate = document.getElementById("calculate");

calculate.onclick = function() {
    let amount = document.getElementById("amount").value;
    let period = document.getElementById("period").value;
    let returns = document.getElementById("returns").value;
    let infaj = document.getElementById("inflation").value;
    if (amount == '' || period == '' || returns == '') {
        return;
    }
    returns = returns / 100;
    if (infaj == "yes") {
        returns = ((1 + returns) / 1.06) - 1;
        console.log(returns);
    }
    let n = period * 12;
    let i = returns / 12;
    let j = i + 1;
    let z = Math.pow(j, n) - 1;
    let ma = amount * (z / i) * j;
    console.log(Math.round(ma));

    let summary = document.getElementById("summary");
    summary.innerHTML = '';
    let table = document.createElement('table');
    let row1 = document.createElement('tr');
    let row1data1 = document.createElement('td');
    row1data1.innerHTML = "Maturity Amount";
    let row1data2 = document.createElement('td');
    row1data2.innerHTML = Math.round(ma);
    row1.appendChild(row1data1);
    row1.appendChild(row1data2);
    table.appendChild(row1);

    let row2 = document.createElement('tr');
    let row2data1 = document.createElement('td');
    row2data1.innerHTML = "Amount Invested";
    let row2data2 = document.createElement('td');
    row2data2.innerHTML = amount * period * 12;
    row2.appendChild(row2data1);
    row2.appendChild(row2data2);
    table.appendChild(row2);

    let row3 = document.createElement('tr');
    let row3data1 = document.createElement('td');
    row3data1.innerHTML = "Profit";
    let row3data2 = document.createElement('td');
    row3data2.innerHTML = Math.round(ma) - (amount * period * 12);
    row3data2.style.fontWeight = "bold";
    row3.appendChild(row3data1);
    row3.appendChild(row3data2);
    table.appendChild(row3);

    summary.appendChild(table);
};

// For a monthly SIP payment P for a period of n months:

// Maturity amount = P × ((1 + i)^n - 1) / i) × (1 + i)

// where,
// i = r / 100 / 12