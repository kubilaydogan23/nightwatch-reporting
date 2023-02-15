module.exports = {

    'Demo test for search functionality': function (browser) {
        browser.url('https://www.ecosia.org/')
            .assert.titleContains('Ecosia')
            .assert.titleEquals('Ecosia - the search engine that plants trees')
            .assert.visible('input[type=search]')
            .setValue('input[type=search]', 'nightwatch')
            .assert.visible('button[type=submit]')
            .click('button[type=submit]')
            .waitForElementVisible('.mainline', 15000)
            .assert.textContains('.mainline', 'Nightwatch');
        browser.end();
    },

    'Using custom commands': function (browser) { 
        browser
            .url("https://www.saucedemo.com/")
            .login("standard_user", "secret_sauce" )
            .assert.visible('#shopping_cart_container')
            .pause(5000);
        browser.end();
    }
}