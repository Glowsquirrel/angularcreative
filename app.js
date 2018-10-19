function ExpenseController($scope){

    $scope.services = [
        {
            name: 'Tuition',
            price: 3000,
            active:false
        },{
            name: 'Housing',
            price: 2000,
            active:false
        },{
            name: 'Food',
            price: 1000,
            active:false
        },{
            name: 'CS260',
            price: 0,
            active:false
        }
    ];

    $scope.toggleActive = function(s){
        s.active = !s.active;
    };
    
    $scope.addItem = function(){
        //if($scope.newservice === '' || $scope.newcost === '') { return; }
        console.log('1');
        $scope.services.push({
            name: $scope.newservice,
            price: $scope.newcost,
            active:false
            });
            console.log('2');
    };

    $scope.total = function(){

        var total = 0;
        angular.forEach($scope.services, function(s){
            if (s.active){
                total+= s.price;
            }
        });

        return total;
    };
}