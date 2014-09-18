/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function HomeController($window, $scope){
    console.log($window.innerHeight);
    document.getElementById('logo').style.height = $window.innerHeight + 'px';
};


