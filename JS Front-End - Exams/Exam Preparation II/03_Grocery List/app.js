const BASE_URL = "http://localhost:3030/jsonstore/grocery/";

const loadProductBtn = document.querySelector("#load-product");
loadProductBtn.addEventListener("click", loadAllProducts);
const addProductBtn = document.querySelector("#add-product");
addProductBtn.addEventListener("click", addProduct);
const table = document.querySelector("#tbody");

const updateProductBtn = document.querySelector("#update-product");
updateProductBtn.addEventListener("click", updateProduct);

let allProducts;
let taskID;

const form = document.querySelector("form");

const allItemValues = {
    product: document.querySelector("#product"),
    count: document.querySelector("#count"),
    price: document.querySelector("#price"),
};

function createDomElement(type, parrent, textContent, classList, id, attributes, useInnerHtml) {
    const element = document.createElement(type);

    if (useInnerHtml && textContent) {
        element.innerHTML = textContent;
    } else {
        if (textContent && type !== "input") {
            element.textContent = textContent;
        }
    }
    if (textContent && type === "input") {
        element.value = textContent;
    }

    if (classList && classList.length > 0) {
        element.classList.add(...classList);
    }

    if (id) {
        element.id = id;
    }

    if (attributes) {
        for (const key in attributes) {
            element[key] = attributes[key];
        }
    }

    if (parrent) {
        parrent.appendChild(element);
    }
    return element;
}

async function loadAllProducts(e) {
    if (e) {
        e.preventDefault();
    }
    table.innerHTML = "";
    const result = Object.values(await (await fetch(BASE_URL)).json());
    allProducts = result;

    result.forEach((element) => {
        const tr = createDomElement("tr", table);
        createDomElement("td", tr, element.product, ["name"]);
        createDomElement("td", tr, element.count, ["count-product"]);
        createDomElement("td", tr, element.price, ["product-price"]);
        const btnTD = createDomElement("td", tr, null, ["btn"], element._id);
        const updateBtn = createDomElement("button", btnTD, "Update", ["update"]);
        updateBtn.addEventListener("click", update);
        const DeleteBtn = createDomElement("button", btnTD, "Delete", ["delete"]);
        DeleteBtn.addEventListener("click", deleteProduct);
    });
}

async function addProduct(e) {
    e.preventDefault();
    const {product, count, price} = allItemValues;
    await fetch(BASE_URL, {
        method: "POST",
        body: JSON.stringify({product: product.value, count: count.value, price: price.value}),
    });
    form.reset();
    loadAllProducts(e);
}

async function deleteProduct() {
    taskID = this.parentElement.id;

    await fetch(`${BASE_URL}${taskID}`, {
        method: "DELETE",
    });
    loadAllProducts();
}

async function update() {
    taskID = this.parentElement.id;
    const product = allProducts.find((p) => p._id === taskID);

    for (const key in allItemValues) {
        allItemValues[key].value = product[key];
    }

    document.getElementById(taskID).remove();
    addProductBtn.disabled = true;
    updateProductBtn.disabled = false;
}

async function updateProduct() {
    const {product, count, price} = allItemValues;

    await fetch(`${BASE_URL}${taskID}`, {
        method: "PATCH",
        body: JSON.stringify({product: product.value, count: count.value, price: price.value}),
    });
    addProductBtn.disabled = false;
    updateProductBtn.disabled = true;
    form.reset();
    loadAllProducts();
}
