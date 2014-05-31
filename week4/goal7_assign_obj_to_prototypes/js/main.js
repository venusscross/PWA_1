/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */


(function(){

    //variables
    var numofPeople = 5;
    var people =[];
    var names = ["JAZMIN,BRIANA,WANDA,KARIEL,KIA"];
    var interval;

    //loops
    for (var i = 0; i < numofPeople ; i++){
      var personIndex = Math.floor(Math.random()*names.length);

        // using NEW reserved words

        var person = new Person(names[PersonIndex],i+1);


        populateHTML(person.name, "r"+(i+1)+"c1");
        populateHTML(person.job,"r"+(i+1)+"c2");


        people.push(person);
        names.splice(personIndex, 1);

    }
    // one at a time intervals

    clearInterval(interval);

    interval= setInterval(runUpdate, 1000/30);

    function populateHTML(date, field){
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


