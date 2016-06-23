app.controller('PortfolioController', function($scope, $http) {
    $http.get("portfolio.json").then(function(response) {
        $scope.pieces = response.data;
    });
});
