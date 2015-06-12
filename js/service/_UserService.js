describe('UserService', function() {
    var User;

    // before each test, instantiate app module
    beforeEach(angular.mock.module('app'));

    // before each test, inject UserService
    beforeEach(inject(function(_UserService_) {
        UserService = _UserService_;
    }));

    // Tests User constructor, makes sure it has a name

    describe("Constructor", function(){
        it('assigns a name', function(){
            var User = new UserService('Ben');
            expect(User.name).toEqual('Ben');
        });
    });

});
