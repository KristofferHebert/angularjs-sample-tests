describe('PersonFactory', function() {
    var Person;

    // before each test, instantiate app module
    beforeEach(module('app'));

    // before each test, inject PersonFactory
    beforeEach(inject(function(_PersonFactory_) {
        PersonFactory = _PersonFactory_;
    }));

    // Tests Person constructor, makes sure it has a name

    describe("Constructor", function(){
        it('assigns a name', function(){
            var person = new PersonFactory('Ben');
            expect(person.name).toEqual('Ben');
        });
    });

});
