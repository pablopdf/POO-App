class product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

class UI {
  addProduct(product) {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML = `<div class="card text-center mb-4">
        <div class="card-body">
         <strong>
         Nombre del Producto
         </strong>: ${product.name}
         <strong> 
         Precio del Producto
         </strong>: $ ${product.price}
         <strong>
         Año del Producto
         </strong>: ${product.year}
         <a href="#" class="btn btn-danger" name="delete">X</a>
        </div>
      </div>`;
    productList.appendChild(element);
  }
  resetForm() {
    document.getElementById("product-form").reset();
  }
  deleteProduct(element) {
    if (element.name === "delete") {
      element.parentElement.parentElement.parentElement.remove();
      this.showMessage("Producto Eliminado", "danger");
    }
  }
  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = "alert alert-" + cssClass;
    div.appendChild(document.createTextNode(message));
    //Mostrando en el DOM
    const container = document.querySelector(".container");
    const app = document.querySelector("#app");
    container.insertBefore(div, app);
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 1000);
  }
}

//DOM Events

document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const year = document.getElementById("year").value;

    const Product = new product(name, price, year);

    const ui = new UI();

    if (name === "" || price === "" || year === "") {
      return ui.showMessage("Completa los campos", "info");
    }
    ui.addProduct(Product);

    ui.resetForm();

    ui.showMessage("Producto Agregado Satisfactoriamente", "success");

    e.preventDefault();
  });

document.getElementById("product-list").addEventListener("click", function (e) {
  const ui = new UI();
  ui.deleteProduct(e.target);
});
