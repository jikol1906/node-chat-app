const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

    var users;

    beforeEach(() => {
        users = new Users();

        users.users = [{
            id: '1',
            name:'John',
            room: 'Node Course'
        }, {
            id:'2',
            name:'Jen',
            room:'React Course'
        },{
            id:'3',
            name:'Johnny',
            room:'Node Course'
        }]


    });

    it('should remove a user', () => {

        var userId = '3';

        var user = users.removeUser(userId);

        expect(user.id).toBe(userId)
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {

        var userId = '99';

        var user = users.removeUser('99');

        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);

    });

    it('should find user', () => {

        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);

    });

    it('should not find user', () => {

        var userId = '9'
        var user = users.getUser(userId);

        expect(user).toBeFalsy();

    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Boris',
            room: 'room'
        };

        var resUser = users.addUser(user.id,user.name,user.room);
        expect(users.users).toEqual([user]);
    });

    it('should return names for Node Course', () => {

        var usersList = users.getUserList('Node Course');

        expect(usersList).toEqual(['John','Johnny']);

    });

    it('should return names for React Course', () => {

        var usersList = users.getUserList('React Course');

        expect(usersList).toEqual(['Jen']);

    })

})