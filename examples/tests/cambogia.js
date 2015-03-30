module.exports = {
  "Fill Out Index" : function (browser) {
    browser
      .url("http://open:nutra@katm.us/adshore/feature/thepurecambogiaultra.com/sea")
      .waitForElementPresent('form[name="f"]',1000)
      .setValue('input[name="first_name"]', 'Patrick')
      .setValue('input[name="last_name"]', 'Chua')
      .setValue('input[name="address"]', 'Address 1')
      .setValue('input[name="address2"]', 'Address 2')
      .setValue('input[name="city"]', 'Makati')
      .setValue('input[name="address2"]', 'Address 2')
      .click('select[name="state"] option[value="64"]')
      .setValue('input[name="zip"]', '11111')
      .setValue('input[name="phone"]', '123456789')
      .setValue('input[name="email"]', 'patrick@katmus.com')
      .click('form[name="f"] .btn-rush')
      .waitForElementNotVisible('.modal-backdrop.in',500)
      .assert.urlContains('checkout')
      // .waitForElementVisible('#todoExample button', 1000)
      // .click('#todoExample input')
      // .assert.containsText('#main', 'The Night Watch')
  },
  "Checkout Single Bottle Package" : function(browser) {
    browser
    .click('.boxes.box3')
    .click('select[name="payment_method"] option[value="visa"]')
    .setValue('input[name="cc_number"]','4444333322221111')
    .click('select[name="cc_exp_mm"] option[value="05"]')
    .click('select[name="cc_exp_yyyy"] option[value="2017"]')
    .setValue('input[name="cc_csc"]','125')
    .click('form[name="f"] .btn-rush')
    .waitForElementNotVisible('.modal-backdrop.in',4000)
    .assert.urlContains('upsell')
    .end();
  }
};
