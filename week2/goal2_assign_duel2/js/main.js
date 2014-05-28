//Name: Venus Cross
// May 24, 2014
//Instructor: Fialishia O'Loughlin
//Assignment:  GoalDuel 1





//self executing function
        (function() {

        console.log("fight!!!");

        // player name
        var playerOneName = ["Kenya",20,100];
        var playerTwoName = ["Porsha",20,100];


        // start round
        var round = 1;

        function fight() {
            alert(playerOneName []+ "." + playerOneHealth + "*START*" + playerTwoName + "." + playerTwoHealth);
            for (var i = 0; i < 10; i++)
            {
                // random formula is - Math.floor(Math.random() * (max-min) + min);
                var minDamage1 = player1Damage * .5;
                var minDamage2 = player2Damage * .5;

                var f1 = Math.floor(Math.random() * (player1Damage - minDamage1) + minDamage1);
                var f2 = Math.floor(Math.random() * (player2Damage - minDamage2) + minDamage2);

                //inflict damage
                playerOneHealth -= f1;
                playerTwoHealth -= f2;

                console.log(playerOneName + ":" + playerOneHealth + " " + playerTwoName + ":" + playerTwoHealth);

                //check for victor
                var result = winnerCheck();
                console.log(result);
                if (result === "no winner")
                {
                    round++;
                    //noinspection BadExpressionStatementJS
                    alert(playerOneName + ":" + playerOneHealth + "*ROUND* " + round + "OVER" + "*" + playerTwoName + ":" + playerTwoHealth);
                } else {
                    alert(result);
                    break;
                };
            };
        };

        function winnerCheck() {
            var result = "no winner";
            if (playerOneHealth < 1 && playerTwoHealth < 1)
            {
                result = "You Both Die";
            } else if (playerOneHealth<1) {
                result = playerTwoName + "WINS!!!"
            } else if (playerTwoHealth<1)
            {
                result = playerOneName + "WINS!!!"

            };
            return result;
        };
        /*The fight starts here below *******/

//console.log('program starts here');
        fight();
    })();

