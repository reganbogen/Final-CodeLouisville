<script type = "text/javascript">
	var app = angular.module('todoApp', ['ngResource']);

	app.factory('Todo', function($resource) {
		return $resource('todo/:_id', {_id: '@_id'});
	});

	app.controller('todoCtrl', function($scope, Todo) {
		$scope.instance = {};
		$scope.todos = Todo.query();
		$scope.add = function() {
			var todo = new Todo($scope.instance)
			todo.$save(function(_todo){
				$scope.todos.push(_todo);
				$scope.instance = {}
			});
		};
	});
</script>