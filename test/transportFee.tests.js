describe('this test for transportFee', function () {
    it('should show you how to use MochaJS', function () {
        assert.equal(transportFee('morning'), 'R20');

        assert.equal(transportFee('afternoon'), 'R10');

        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');

    });

});