app.controller('BlogController', function($scope, $http, $sce) {
    $http.get("posts.json").then(function(response) {
        $scope.posts = response.data;
    });
});
