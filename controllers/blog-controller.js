app.controller('BlogController', function($scope, $http, $sce) {
    $http.get("blog/intro.md").then(function(response) {
        $scope.post = markdown.toHTML(response.data);
        $sce.trustAsHtml($scope.post);
    });
});
