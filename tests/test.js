fixture('Doctor Network App Integration Test')
    .page('http://localhost:3000/');

test('Fill form and validate Result', async t => {
    await t
        .setNativeDialogHandler(() => true)
		.typeText('#register_username', 'Test nume')
		.wait(3000)
		.typeText('#register_age', '22')
		.wait(3000)
		.click('#register_gender')
		.wait(1000)
		.click('body > div:nth-child(3) > div > div > div.rc-virtual-list > div.rc-virtual-list-holder > div > div > div:nth-child(1)')
		.wait(3000)
		.typeText('#register_date', '2023-04-05')
		.wait(3000)
}).timeouts({
    pageLoadTimeout:    3000,
});