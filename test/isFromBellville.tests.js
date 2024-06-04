describe('this test for isFromBellville', function () {
    it('should show you how to use MochaJS', function () {
        assert.equal(isFromBellville('CY 123'), true);
        assert.equal(isFromBellville('CJ 123'), false);

    });

});