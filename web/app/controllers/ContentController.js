/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function ContentController($window, $scope){
    
    $scope.resHeight = $window.innerHeight;
    
    //
    //BIKING
    ////////////////////////////////////////////////////////////////////////////
    document.getElementById('bikeCover').style.height = ($scope.resHeight * 0.5) + 'px';
    document.getElementById('bikeLine').style.height = ($scope.resHeight * 0.1) + 'px';
    document.getElementById('biking').style.height = ($scope.resHeight * 0.4) + 'px';
    document.getElementById('line1').style.height = (($scope.resHeight * 0.4) * 0.2) + 'px';
    document.getElementById('line2').style.height = (($scope.resHeight * 0.4) * 0.2) + 'px';
    document.getElementById('line3').style.height = (($scope.resHeight * 0.4) * 0.2) + 'px';
    document.getElementById('line4').style.height = (($scope.resHeight * 0.4) * 0.2) + 'px';
    document.getElementById('line5').style.height = (($scope.resHeight * 0.4) * 0.2) + 'px';
}
