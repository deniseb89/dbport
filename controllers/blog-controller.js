app.controller('BlogController', function($scope, $http, $sce) {
    $http.get("posts.json").then(function(response) {
        $scope.posts = response.data;
        angular.forEach($scope.posts, function(post) {
            $http.get(post.file).then(function(response) {
                post.file = markdown.toHTML(response.data);
                $sce.trustAsHtml(post.file);
            });
        });
    });
});
