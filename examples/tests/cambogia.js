module.exports = {
  "Fill Cambogia" : function (browser) {
    browser
      .url("http://open:nutra@katm.us/adshore/feature/thepurecambogiaultra.com/sea")
      .waitForElementPresent('form[name="f"]',1000)
      .setValue('input[name="first_name"]', 'Patrick')
      .setValue('input[name="last_name"]', 'Chua')
      .setValue('input[name="address"]', 'Address 1')
      .setValue('input[name="address2"]', 'Address 2')
      .setValue('input[name="city"]', 'Makati')
      .setValue('input[name="address2"]', 'Address 2')
      .setValue('select[name="state"]', '64')
      .setValue('input[name="zip"]', '11111')
      .setValue('input[name="phone"]', '123456789')
      .setValue('input[name="email"]', 'patrick@katmus.com')
      .click('form[name="f"] .btn-rush')
      .waitForElementNotVisible('.modal-backdrop.in',1000)
      .assert.urlContains('checkout')
      // .waitForElementVisible('#todoExample button', 1000)
      // .click('#todoExample input')
      // .assert.containsText('#main', 'The Night Watch')
      .end();
  }
};
