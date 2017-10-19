const expect = require('expect');

const {isRealString} = require('./validator');


describe('isRealString', () => {
    it('Should validate username and room name correctly', () => {

        var username = 'Boris';
        var roomname = 'NodeCourse';
        var usernameWithSpaces = '  Boris   '
        var onlySpaces = '     ';
        var onlyNumbers = 123

        expect(isRealString(username) && isRealString(roomname)).toBe(true);
        expect(isRealString(usernameWithSpaces) && isRealString(roomname)).toBe(true);
        expect(isRealString(onlySpaces) && isRealString(roomname)).toBe(false);
        expect(isRealString(username) && isRealString(onlySpaces)).toBe(false);
        expect(isRealString(onlyNumbers) && isRealString(roomname)).toBe(false);




    })
})