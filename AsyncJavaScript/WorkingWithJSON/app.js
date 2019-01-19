document.getElementById("button1").addEventListener("click", loadCustomer);
document.getElementById("button2").addEventListener("click", loadCustomers);

//function to load one customer
function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customer.json", true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      //console.log(this.responseText);
      const customer = JSON.parse(this.responseText);
      const output = `
      <ul>
      <li>ID:${customer.id}</li>
      <li>Name:${customer.name}</li>
      <li>Company:${customer.company}</li>
      <li>Phone:${customer.phone}</li>
      </ul>
      `;
      document.getElementById("customer").innerHTML = output;
    }
  };

  xhr.send();
}

//function to load all customers
function loadCustomers(e) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customers.json", true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      //console.log(this.responseText);
      const customers = JSON.parse(this.responseText);
      //console.log(customers.length);

      let output = ``;
      customers.forEach(customer => {
        output += `
            <ul>
            <li>ID:${customer.id}</li>
            <li>Name:${customer.name}</li>
            <li>Company:${customer.company}</li>
            <li>Phone:${customer.phone}</li>
            </ul>
            `;
      });
      document.getElementById("customers").innerHTML = output;
    }
  };

  xhr.send();
}
