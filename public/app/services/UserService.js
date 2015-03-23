app.service('UserService',['$http',function($http){
    this.get= function(success,error){
        return $http.get("http://localhost:3000/user").success(success).error(error);
    };
    this.save= function(data,success,error){
        return $http.post("http://localhost:3000/user",data).success(success).error(error);
    };
    this.delete= function(id,success,error){
        return $http.get("http://localhost:3000/user/"+id).success(success).error(error);
    };
}]);