describe('this test for totalPhoneBill', function () {
    it('should show you how to use MochaJS', function () {
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
        assert.equal('R3.40', totalPhoneBill('call, sms'));
        assert.equal('R1.30', totalPhoneBill('sms, sms'));

    });

});