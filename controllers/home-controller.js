app.controller('HomeController', function($scope, $interval) {
    var cyclelist = ['build', 'create', 'assemble', 'construct', 'make', 'develop', 'produce'];
    $scope.rand = cyclelist[0];
    $interval(function() {
        var random = Math.floor(Math.random() * (cyclelist.length - 0));
        $scope.rand = cyclelist[random];
    }, 2000);
});
