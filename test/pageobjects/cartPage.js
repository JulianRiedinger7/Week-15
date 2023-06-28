class CartPage {
  get productTitle() {
    return $('div.cart_item >div .inventory_item_name')
  }

  get checkoutBtn() {
    return $('#checkout')
  }

  get continueShoppingBtn() {
    return $('#continue-shopping')
  }
}

export default new CartPage()
