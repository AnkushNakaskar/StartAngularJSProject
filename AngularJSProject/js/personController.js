
PersonApp.controller('personController', function ($scope,personServices) {
            $scope.message = "Hello World!";  
   
  $scope.squareValue= personServices.squareofnumber(4);
    
     personServices.fetchNumberOfEmployeesForCompany("VUCLIP").then(function(response){
     $scope.numberOfEmployees=response.entity;
         console.log($scope.numberOfEmployees);
    });
    
    console.log("...."+$scope.numberOfEmployees);
    
    $scope.personList = [
         {
      "id": 1,
      "first_name": "Vish",
      "last_name": "Vatharakar",
      "manager_id": 5,
      "company": {
        "id": 1,
        "name": "Vuclip"
      }
    },
    {
      "id": 2,
      "first_name": "Rohit",
      "last_name": "Gupta",
      "manager_id": 5,
      "company": {
        "id": 1,
        "name": "Vuclip"
      }
    },
    {
      "id": 3,
      "first_name": "Amit",
      "last_name": "Arora",
      "manager_id": 5,
      "company": {
        "id": 1,
        "name": "Vuclip"
      }
    },
    {
      "id": 4,
      "first_name": "Ankush",
      "last_name": "Nakaskar",
      "manager_id": 5,
      "company": {
        "id": 1,
        "name": "Vuclip"
      }
    },
    {
      "id": 5,
      "first_name": "Ashish",
      "last_name": "Gawali",
      "manager_id": -1,
      "company": {
        "id": 1,
        "name": "Vuclip"
      }
    }
 
    ];
    
        });