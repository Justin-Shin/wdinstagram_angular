"use strict";

(function(){
  angular
    .module("wdinstagram", ["ui.router","ngResource"])
    .config(["$stateProvider", RouterFunction])
    .factory("PostFactory",[ "$resource" , PostFactoryFunction])
    .controller("PostIndexController", ["PostFactory",PostIndexControllerFunction])
    .controller("PostNewController", ["PostFactory","$state",PostNewControllerFunction])
    .controller("PostShowController", ["PostFactory","$stateParams",PostShowControllerFunction])

  function RouterFunction($stateProvider){
    $stateProvider
    .state("wdinstagramIndex", {
      url: "/wdinstagram",
      templateUrl: "js/ng-views/index.html",
      controller: "PostIndexController",
      controllerAs: "vm"
    })
    .state("wdinstagramNew", {
      url: "/wdinstagram/new",
      templateUrl: "js/ng-views/new.html",
      controller: "GrumbleNewController",
      controllerAs: "vm"
    })
    .state("wdinstagramShow", {
      url: "/wdinstagram/:id",
      templateUrl: "js/ng-views/show.html",
      controller: "GrumbleShowController",
      controllerAs: "vm"
    });
  }
  function PostFactoryFunction($resource){
    return $resource("http://localhost:3000/grumbles/:id", {}, {
      update: {method: "PUT"}
    })
  }
  function PostIndexControllerFunction(PostFactory){
    this.posts = PostFactory.query()
  }
  function PostNewControllerFunction(PostFactory,$state){

  }
  function PostShowControllerFunction(PostFactory,$stateParams){

  }

})();
