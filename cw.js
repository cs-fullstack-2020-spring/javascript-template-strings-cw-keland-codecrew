// # JavaScript template strings class work

// ### Exercise 1:
// Create a template string and assign it to the variable ```my_template_string```.

// The template string should contain the following data only:

// ```
// My name is ${my_name}.
// My id is ${my_id}.
// My address is ${my_address}.
// ````
// let my_name = `Kevin`;
// let my_id = `3124`;
// let my_address = `809 Teflon Dr`;


// console.log(`My name is ${my_name}.

// My id is ${ my_id}.

// My address is ${my_address}`)





// Create the variables ```my_name```, ```my_id```, and ```my_address``` and set their values to ```Kevin```, ```2112```, and ```Memphis, TN```.

// Use the template string you created and assigned to the variable ```my_template_string``` to log the formatted output to the console.

// Sample Output:
// ```
// My name is Kevin.
// My id is 2112.
// My address is Memphis, TN.
// ```


// ### Exercise 2:

// Create a new template string 

// ```
// var contestant = "1_M_l337!";
// var score = "9001";
// ```

// and use the provided variables to print 
// ```
// Congratulations 1_M_l337! !!, your score is 9001.
// ```

// let constestant = (`1_M_1337!` );
// let score = (`9001.`);


//  console.log(`Congratulations ${constestant}!!!!, your score is ${score}`)




// ### Exercise 3:

// Combine multiple development concepts to create a basketball scoring program that meets the following requirements:
// - Prompts the user for the name of their Home team
// - Prompts the user for the name of the Visiting team
// - Prompt the user to enter the score for their home team *(include the team name when prompting the user)*
// `How many points did the Memphis Grizzlies score? (Home team score)`
// - Prompt the user to enter the score for the visiting team *(include the team name when prompting the user)*
// `How many points did the GS Warriors score? (Visting team score)`

// In your program determine which team won the game with the highest score and display the results in an alert box.

// Expected Output:
// ```
// Looks like the Memphis Grizzles have defeated the GS Warriors!

// FINAL SCORE:
// Home/Memphis Grizzlies: 102
// Visitors/GS Warriors: 23
// ```

let home_team =prompt ("Name of their home team ");
    console.log (`Name on your home team ${home_team}`)

if (home_team == true);

{
    

let visiting_team =prompt ("Name of the Visiting team");
    console.log (`Name on your home team ${visiting_team}`);

    if (visiting_team == true);{




let  score1 =prompt ("Enter score of home team");
    console.log (`The score of ${home_team} is ${score1}`);
    {
let score2 =prompt ("Enter score of Visiting team");
        console.log (`The score of ${visiting_team} is ${score2}`);
    }
    if (home_team <= visiting_team == true);
    {
        console.log (`${home_team} has won the game`)
    }


