describe('this test for yearsAgo', function () {
    it('should show you how to use MochaJS', function () {
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });

});