app.controller('HomeController', function($scope, $interval) {
    var cyclelist = ['build', 'create', 'assemble', 'construct', 'make', 'develop', 'produce'];
    var i = 0;
    var max = cyclelist.length-1;
    $scope.rand = cyclelist[i];
    $interval(function() {
        (i == max) ? i = 0 : i++;
        $scope.rand = cyclelist[i];
    }, 2000);
});
