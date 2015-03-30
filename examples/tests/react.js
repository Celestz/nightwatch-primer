module.exports = {
  "Get React" : function (browser) {
    browser
      .url("http://facebook.github.io/react/")
      .waitForElementVisible('body', 1000)
      .setValue('#todoExample input', 'nightwatch')
      .submitForm('#todoExample form')
      .verify.containsText('#todoExample li', 'nightwatch')
      .setValue('#todoExample input', 'patrick')
      .submitForm('#todoExample form')
      .verify.containsText('#todoExample li:nth-child(2)', 'patrick')
      .setValue('#todoExample input', 'checkmate')
      .submitForm('#todoExample form')
      .verify.containsText('#todoExample li:nth-child(3)', 'checkmate')
      // .waitForElementVisible('#todoExample button', 1000)
      // .click('#todoExample input')
      // .assert.containsText('#main', 'The Night Watch')
      .end();
  }
};
