/**
 * Created by chisun.joung on 2016-03-15.
 */
angular.module('todo',[])
    .controller('TodoController',['$scope',function($scope){
        $scope.list = ['test','execute','refactor'];
        $scope.add = function(item) {
            $scope.list.push(item);
        };
    }]);