angular.module('app')
    .directive('propertyModalTrigger', function($rootScope) {
        return {
            restrict: 'A',
            scope: {
                htmlID: '=propertyModalTrigger'
            },
            link: function(scope, elem, attrs) {
                elem.on('click', function(event) {
                    event.preventDefault();
                    let id = '#' + scope.htmlID;
                    $(id).modal('show');
                    $rootScope.showModal = scope.htmlID;
                    scope.$apply();
                });
            }
        };
    });
