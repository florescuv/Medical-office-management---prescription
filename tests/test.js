fixture('Doctor Network App Integration Test')
    .page('http://localhost:3000/');

test('Fill form and validate Result', async t => {
    await t
        .setNativeDialogHandler(() => true)
		.typeText('#register_username', 'Test nume')
		.wait(3000)
		.typeText('#register_age', '22')
		.wait(3000)
}).timeouts({
    pageLoadTimeout:    3000,
});