angular.module('app').controller('mainCtrl', function($scope) {
	$scope.programmings = [
	{name: 'Rage-O-Saurus Rex' , show: true , capacity: "250" , workshop: "false" },
	{name: 'Food Fight' , show: true , capacity: "300" , workshop: false},
	{name: 'Tricky FOx' , show: true , capacity: "60" , workshop: false},
	{name: 'Finger Puppets' , show: false, capacity: "30" , workshop: true},
	{name: 'Sock Puppets' , show: false , capacity: "30" , workshop: true},
	{name: 'Shadow Puppets' , show: false, capacity: "30", workshop: true}
	]

});
