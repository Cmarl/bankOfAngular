'use strict';

angular.module('boa')
.controller('AccountsCtrl',function($scope, Account){
  Account.init();

  $scope.addAccount = function(name){
    Account.add(name);
  };
});
