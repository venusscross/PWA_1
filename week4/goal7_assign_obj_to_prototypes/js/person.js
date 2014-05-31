/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7 Advanced Object Person Blue Print
 *
 * Venus Cross May 30,2014
 */
(function () {

    window.Person=Person;

    Person.jobs = ["doctor, lawyer, dancer, cook"];
    Person.actions = ["reading","cooking","sewing"];

    function Person(name, row{

        console.log("Person Created: ",name);

        this.name  = name;

        //random jobs
        this.action = Person.actions[Math.floor(Math.random()*Person.actions.length)];

        // update row for JS
        this.row =row;

        //first actions beginngers action

        var id = document.getElementById("r"+ this.row+"c3");
        id.innerHTML=this.action;
    }

    Person.prototype.update = function(){
        if (math.floor(Math.random() <.01)){
            
        }
    }
})