app.controller('HomeController', function($scope) {
    var cyclelist = ['....your list'];
    $scope.rand = cyclelist[0];
    setInterval(function () {
        var random = Math.floor(Math.random() * (cyclelist.length - 0));
        $scope.rand = cyclelist[random];
        $scope.$apply();
    }, 2000);
});
