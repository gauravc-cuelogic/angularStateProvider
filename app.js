var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      //level 1
      .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })
        //level 2
      .state('home.list', {
            url: '/list',
            templateUrl: 'partial-home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })
        //level 3
      .state('home.list.color', {
            url: '/listcolor',
            templateUrl: 'partial-home-list-color.html',
            controller: function($scope) {
                $scope.dogsColor = ['Bernese is black in color', 'Husky is brown in color', 'Goldendoodle is brown in color'];
            }
        })
        //level 4
      .state('home.list.color.size', {
            url: '/size',
            template: "these all are Big size dogs. <div ui-view></div><a ui-sref='.about'>About</a>"
        })
        //level 5
      .state('home.list.color.size.about', {
            url: '/about',
            template: "Nothing to say!!"
        })
});
