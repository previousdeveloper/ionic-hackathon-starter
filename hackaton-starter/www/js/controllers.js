angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope) {
  })

  .controller('ChatsCtrl', function ($scope, Chats) {


    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('LoginCtrl', ['$scope', 'localStorageService', '$ionicPopup', '$location',
    function ($scope, localStorageService, $ionicPopup, $location) {
      $scope.model = {
        username: null,
        password: null
      };


      localStorageService.set('username', "gokhan");
      localStorageService.set('password', "gokhan");

      var username = localStorageService.get('username');
      var password = localStorageService.get('password');

      $scope.login = function () {

        if ($scope.model.username === username && $scope.model.password === password) {

          var alertPopup = $ionicPopup.alert({
            title: 'Yonlendirme',
            template: 'Yonlendirme'
          });
          alertPopup.then(function (res) {
            console.log('Thank you for not eating my delicious ice cream cone');
          });

          $location.path('/tab/account')
        }

      };


    }])
  .controller('SignUpCtrl', ['$scope', 'localStorageService', function ($scope, localStorageService) {


  }])


  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
