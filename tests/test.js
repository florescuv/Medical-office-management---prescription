fixture('Doctor Network App Integration Test')
    .page('http://localhost:3000/');

test('Fill form and validate Result', async t => {
    await t
        .setNativeDialogHandler(() => true)
		.typeText('#register_username', 'Test nume')
		.wait(10000)
}).timeouts({
    pageLoadTimeout:    3000,
});