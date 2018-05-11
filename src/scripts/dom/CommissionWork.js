// Purpose: Build the commission form
const $ = require("jquery")
const api = require("../api/APIManager")

const buildCommissionForm = function () {
    //Creating document fragment
    const fragment = document.createDocumentFragment()

    const $customerCommissionForm = $("<div></div").addClass("commissionForm")
    fragment.appendChild($customerCommissionForm)

    // Customer info (name, address, phone number, email)
    const $customerNameCommission = $("<input></input>").addClass("customerNameCommission")
    $customerCommissionForm.appendChild($customerNameCommission)

    const $customerAddressCommission = $("<input></input>").addClass("customerAddressCommission")
    $customerCommissionForm.appendChild(customerAddressCommission)

    const $customerPhoneCommission = $("<input></input>").addClass("customerPhoneCommission")
    $customerCommissionForm.appendChild($customerPhoneCommission)

    const $customerEmailCommission = $("<input></input>").addClass("customerNameCommission")
    $customerCommissionForm.appendChild($customerEmailCommission)

    // Type of animal
    const $animalToTaxidermy = $("<input></input").addClass("animalToTaxidermy")
    $customerCommissionForm.appendChild(animalToTaxidermy)
    // Quantity of animals
    // const $quantityOfAnimals = $("<select><option value="1">1</option><option value="2">1</option><option value="3">1</option><option value="4">1</option><option value="5">1</option></select>").addClass("quantityOfAnimals")
    $customerCommissionForm.appendChild($quantityOfAnimals)
    // Size
    // const $animalSizeToTaxidermy = $("<select><option value="extra-small">Extra Small</option><option value="small">Small</option><option value="medium">Medium</option><option value="large">Large</option><option value="extra-large">Extra</option></select").addClass("animalSizeToTaxidermy")
    $customerCommissionForm.appendChild(animalSizeToTaxidermy)// Mounted?
    const $preferredMountStyle = $("<input></input").addClass("preferredMountStyle")
    $customerCommissionForm.appendChild(preferredMountStyle)
    // When you want it by (date field)
    const $preferredDeliveryDate = $("<input></input").addClass("preferredDeliveryDate")
    $customerCommissionForm.appendChild(preferredDeliveryDate)
}



module.exports = buildCommissionForm