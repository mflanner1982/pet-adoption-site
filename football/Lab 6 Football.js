
console.log('hello,world'); 
document.getElementById("demo").innerHTML = "Hello Javascript";

using System; 

class Program {

    public static void Main (string[] args) {

        int team1Points = 0; 
        int team2Points = 0;
        int team1Wins = 0;
        int Team2Wins = 0; 

        Console.WriteLine("let us report on 3 football matches between 2 teams:"); 
        Console.WriteLine("_______________________");

        Console.WriteLine("Rule: Winning team receives 3 points. Losing team receives 0 points. Tie means both teams get 1 point each.");
        Console.WriteLine("________________________"); 

        Console.WriteLine("Enter team 1's Name:");
        string team1 = Console.ReadLine();
        Console.WriteLine("Enter team 2's name:"); 
        string team2 = Console.ReadLine();

        string outcome="";
        Console.WriteLine("Game outcome: 1=> Team 1 won; 2=> Team 2 won; X=> Tie");

        for (int i=1; i <+3; i++) // LOOP captures different games
        {
            Console.WriteLine("Enter Outcome for game # " + i); 
            outcome = Console.ReadLine(); //game outcome can be 1, 2, or x

            if(outcome =="1"){
                team1Wins = team1Wins + 1;
                team1Points = team1Points + 3;
            }
            else if (outcome == "2")
            {
                team2Wins = teams2Wins + 1; 
                team2Points = team2Points + 3; 
            }
            else if (outcome =="X")
            {
                team1Points = team1points + 1;
            }
        }
        Console.WriteLine("Team 1: {0} total wins = (1) total points = {2} ", team1, team1Wins, team1Points);
        Console.WriteLine("Team 2: {0} total wins = {1} total points = {2}", team2, team2Wins, team2Points); 
    }
}