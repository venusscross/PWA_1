/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7  Advanced Objects Venus Cross May 30, 2014
 */


(function(){

    //variables
    var numofPeople = 5;
    var people =[];
    var names = ["Jazmin","Briana","Wanda","Kariel","Kia"];
    var interval;

    //loops
    for (var i = 0; i < numofPeople ; i++){
      var personIndex = Math.floor(Math.random()*names.length);

        // using NEW reserved words

        var person = new Person(names[personIndex],i+0);
        //new constructor[([arguments])]


        populateHTML(person.name, "r"+(i+1)+"c1");
        populateHTML(person.job,"r"+(i+1)+"c2");


        people.push(person);
        names.splice(personIndex,1);

    }
    // one at a time intervals

    clearInterval(interval);

    interval= setInterval(runUpdate, 1000 / 30);

    function populateHTML(data, field){
        var id=document.getElementById(field);
        id.innerHTML = data;
    }



    function runUpdate(){
        people.forEach(function(element){
            //console.log (element);
            element.update();

        });

    }
})();


