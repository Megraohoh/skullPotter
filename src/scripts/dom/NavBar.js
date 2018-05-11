const $ = require("jquery")
// const api = require("../api/APIManager")


//Create nav element to send to "navbar"
const sendNavToDom = function() {

    //Link dynamic nav to html
    const output = $("#navbar")
    //Fragment the document
    // const fragment = document.createDocumentFragment()
    //Create parent container for the whole navbar
    const navContainer =document.createElement("div")
    navContainer.classList = "navContainer"
    //Create nav element and append to parent
    const navbarEl = document.createElement("nav")
    //Create nav a href selectors
    const homeLink = document.createElement("a")
    homeLink.setAttribute("href", ".../main.js")
    homeLink.textContent = "Home"
    navbarEl.appendChild(homeLink)
    const commissionLink = document.createElement("a")
    commissionLink.setAttribute("href", "./CommissionWork.js")
    commissionLink.textContent = "Commission a Project"
    navbarEl.appendChild(commissionLink)
    const orderLink = document.createElement("a")
    orderLink.setAttribute("href", "./OrderForm.js")
    orderLink.textContent = "Order from Us"
    navbarEl.appendChild(orderLink)
    const catalogLink = document.createElement("a")
    catalogLink.setAttribute("href", "./DisplayCatalog.js")
    catalogLink.textContent = "Catalog"
    navbarEl.appendChild(catalogLink)
    navContainer.appendChild(navbarEl)
    output.append(navContainer)
}
module.exports = sendNavToDom
