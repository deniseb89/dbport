var app = angular.module('app', ["ui.router"]);

app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/");
    $stateProvider
        .state('home', {
            url: "/",
            controller: "HomeController",
            templateUrl: "views/home.html"
        })
        .state('portfolio', {
            url: "/portfolio",
            controller: "PortfolioController",
            templateUrl: "views/portfolio.html"
        })
        .state('blog', {
            url: "/blog",
            controller: "BlogController",
            templateUrl: "views/blog.html"
        })
}]);