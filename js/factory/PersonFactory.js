angular.module('app').factory('PersonFactory', [function() {

    return function Person(name) {
        this.name = name;
    };
}])
