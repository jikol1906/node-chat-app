const expect = require('expect');

var {generateMessage,generateLocationMessage} = require('./message')


describe('generateMessage', () => {
    it('should generate correct messaeg object', () => {

        var res = generateMessage('Boris','Hello');

        expect(res.from).toBe('Boris');
        expect(res.text).toBe('Hello');
        expect(typeof res.createdAt).toBe('number')

    })
})

describe('generateLocationMessage',() => {
    it('should generate correct location object', () => {

        var res = generateLocationMessage('Boris','12','43');

        expect(res.from).toBe('Boris');
        expect(res.url).toBe('https://www.google.com/maps?q=12,43');
        expect(typeof res.createdAt).toBe('number')

    })
})