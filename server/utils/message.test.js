const expect = require('expect');

var {generateMessage} = require('./message')


describe('generateMessage', () => {
    it('should generate correct messaeg object', () => {

        var res = generateMessage('Boris','Hello')

        expect(res.from).toBe('Boris')
        expect(res.text).toBe('Hello')
        expect(typeof res.createdAt).toBe('number')

    })
})