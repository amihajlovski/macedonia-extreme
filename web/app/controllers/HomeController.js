/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function HomeController($window, $scope){
    document.getElementById('logo').style.height = $window.innerHeight + 'px';
    document.getElementById('row1').style.height = ($window.innerHeight / 2) + 'px';
    document.getElementById('row2').style.height = ($window.innerHeight / 2) + 'px';
    $scope.title = "M A C E D O N I A          X         B I K I N G   T O U R S";
    
};


