    PersonApp.service('personServices', function ($http,$q) {
        
        var deferred = $q.defer();
        
        this.squareofnumber = function (x) {
            return x * x;
        }
            
        this.fetchNumberOfEmployeesForCompany = function (companyName) {
            $http({                
                    url: 'http://localhost:9999/angularJSProject/persons/'+companyName+'/company/employees', 
                    method: "GET",
               
            }).then(function success(response) {
                
                // this function will be called when the request is success
                return deferred.resolve(response.data);
                }, function error(response) {
                console.log("Error in fetching number of employees for company ");
            });
            return deferred.promise;
        }

    });