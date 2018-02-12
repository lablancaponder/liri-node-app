var fs = require("fs");

var strings = require('node-strings');

var client = require("./keys.js");

var inquirer = require("inquirer");

var SpotifyWebApi = require('node-spotify-api');

var spotifyApi = new SpotifyWebApi({
  id: "6f04540acdf34aacab5daa5b72b5fe2a",
  secret: "8c9778b0ab134c398d2390c84ac4c5ff"
});


var request = require("request");

var omdb = require('omdb');







console.log("");
console.log("");
console.log("          LLLLLLLLLLL             IIIIIIIIIIRRRRRRRRRRRRRRRRR   IIIIIIIIII".bold());
console.log("          L:::::::::L             I::::::::IR::::::::::::::::R  I::::::::I".bold());
console.log("          L:::::::::L             I::::::::IR::::::RRRRRR:::::R I::::::::I".bold());
console.log("          LL:::::::LL             II::::::IIRR:::::R     R:::::RII::::::II".bold());
console.log("            L:::::L                 I::::I    R::::R     R:::::R  I::::I  ".bold());
console.log("            L:::::L                 I::::I    R::::R     R:::::R  I::::I  ".bold());
console.log("            L:::::L                 I::::I    R::::RRRRRR:::::R   I::::I  ".bold());
console.log("            L:::::L                 I::::I    R:::::::::::::RR    I::::I  ".bold());
console.log("            L:::::L                 I::::I    R::::RRRRRR:::::R   I::::I  ".bold());
console.log("            L:::::L                 I::::I    R::::R     R:::::R  I::::I  ".bold());
console.log("            L:::::L                 I::::I    R::::R     R:::::R  I::::I  ".bold());
console.log("            L:::::L         LLLLLL  I::::I    R::::R     R:::::R  I::::I  ".bold());
console.log("          LL:::::::LLLLLLLLL:::::LII::::::IIRR:::::R     R:::::RII::::::II".bold());
console.log("          L::::::::::::::::::::::LI::::::::IR::::::R     R:::::RI::::::::I".bold());
console.log("          L::::::::::::::::::::::LI::::::::IR::::::R     R:::::RI::::::::I".bold());
console.log("          LLLLLLLLLLLLLLLLLLLLLLLLIIIIIIIIIIRRRRRRRR     RRRRRRRIIIIIIIIII".bold());
console.log("");
console.log("");
console.log("");
                                                                
                                                                
                                                                
                                                  



// --------------------------------------- CHOOSE A LIRI COMMAND
// -------------------------------------------------------------------------------------


inquirer.prompt([

    {
      type: "list",
      name: "userInput",
      message: "Hello LaBlanca, what would you like to do today? \r\n",
      choices: ["a)  View latest tweets", "b)  Look up a song", "c)  Look up a movie"]
    }
])
    
    
    
    .then(function (command) {
        if (command.userInput === "a)  View latest tweets") {

            tweets();
        }

        else if (command.userInput === "b)  Look up a song") {

                                       
            songSearch();
        }

        else if (command.userInput === "c)  Look up a movie") {    

             movieSearch();
        };
        
    
    });
                
         

    

// -------------------------------------- MAIN TWITTER FUNCTION
// -----------------------------------------------------------------------------------------------------------


function tweets() {
    
            
         console.log("");      
         console.log("               Your latests    ".bold())
         console.log("            ┌┬┐┬ ┬┌─┐┌─┐┌┬┐┌─┐".bold());
         console.log("             │ │││├┤ ├┤  │ └─┐".bold());
         console.log("             ┴ └┴┘└─┘└─┘ ┴ └─┘".bold());
                
         console.log("         ____________________________".bold());
         console.log("");


         var params = {screen_name: "bootcamplmp", count: "20"};
         
          client.get("statuses/user_timeline", params, function(error, tweets, response) {
              if(error) throw error;
 
 
 
         for (i = 0; i < tweets.length; i++) {
             // Logs Tweet Text to Console
             console.log("");
             console.log("");           
             console.log("");
             console.log("     " + tweets[i].text.bold());           
             console.log("     " + tweets[i].created_at);
             
                  
            }
       });
 }



// -------------------------------------- MAIN SPOTIFY FUNCTION
// -----------------------------------------------------------------------------------------------------------

function songSearch() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What song would you like to search?",
        name: "spotifySearch"
      }
    ])
    .then(function(user) {
      var spotifySearch = user.spotifySearch;

      if (spotifySearch === "") {
        spotifyApi
          .request(
            "https://api.spotify.com/v1/search?q=ace+of+base&type=track&limit=5"
          )
          .then(function(data) {
            console.log("");      
            console.log("               ┌─┐┬─┐┬─┐┌─┐┬─┐ ┬┬".bold());                            
            console.log("               ├┤ ├┬┘├┬┘│ │├┬┘ ││".bold());                             
            console.log("               └─┘┴└─┴└─└─┘┴└─ oo".bold());
            console.log("             LIRI chose one for you!    ".bold())

                 
            console.log("         ____________________________".bold());
            console.log("");

            console.log("\r\n        Artist: ".bold() + data.tracks.items[0].artists[0].name);
          
            console.log("\r\n        Song Title: ".bold() + data.tracks.items[0].name);
            
            
            console.log("\r\n        Album Name: ".bold() + data.tracks.items[0].album.name);
            
            
            console.log("\r\n        Spotify Url: ".bold() + data.tracks.items[0].external_urls.spotify); 
            
           
            console.log("");
            console.log("");     
          })
         
      } else {

        spotifyApi
          .request(
            "https://api.spotify.com/v1/search?q=" +
              spotifySearch +
              "&type=track&limit=5"
          )
          .then(function(data) {
            console.log("");
            console.log("");     

  
            console.log("");      
            console.log("                Your chosen    ".bold())                                       
            console.log("               ┌─┐┌─┐┌┐┌┌─┐".bold());                            
            console.log("               └─┐│ │││││ ┬".bold());                             
            console.log("               └─┘└─┘┘└┘└─┘".bold());

                 
            console.log("         ____________________________".bold());
            console.log("");


          console.log("\r\n        Artist: ".bold() + data.tracks.items[0].artists[0].name);
          
          console.log("\r\n        Song Title: ".bold() + data.tracks.items[0].name);
          
          
          console.log("\r\n        Album Name: ".bold() + data.tracks.items[0].album.name);
          
          
          console.log("\r\n        Spotify Url: ".bold() + data.tracks.items[0].external_urls.spotify); 
          
         
          console.log("");
          console.log("");     

        })
       
    }
  });
}




// // -------------------------------------- MAIN MOVIE FUNCTION
// // -----------------------------------------------------------------------------------------------------------




function movieSearch() {

  inquirer
    .prompt([
      {
        type: "input",
        name: "movieSearch",
        message: "What movie would you like to search for?"
      }
    ])
    .then(function(user) {
      if (user.movieSearch === "") {
        request(
          "http://www.omdbapi.com/?t=mr+nobody&plot=short&apikey=trilogy",
          function(error, response, body) {
            if (!error && response.statusCode === 200) {
              console.log("");
              console.log("");     

    
              console.log("");      
              console.log("               ┌─┐┬─┐┬─┐┌─┐┬─┐ ┬┬".bold());                            
              console.log("               ├┤ ├┬┘├┬┘│ │├┬┘ ││".bold());                             
              console.log("               └─┘┴└─┴└─└─┘┴└─ oo".bold());
              console.log("             LIRI chose one for you!    ".bold())

                   
              console.log("         ____________________________".bold());
              console.log("");


            console.log("\r\n        Title: ".bold() + JSON.parse(body).Title);
            
            console.log("\r\n        Year: ".bold() + JSON.parse(body).Year);
            
            
            console.log("\r\n        IMDB Rating: ".bold() + JSON.parse(body).imdbRating);
            
            
            console.log("\r\n        Rotten Tomatoes Rating: ".bold() + JSON.parse(body).Ratings[1].Value); 
            
            
            console.log("\r\n        Country: ".bold() + JSON.parse(body).Country);
            
            
            console.log("\r\n        Language: ".bold() + JSON.parse(body).Language);
            
            
            console.log("\r\n        Plot: ".bold() + JSON.parse(body).Plot);
            
            
            console.log("\r\n        Actors: ".bold() + JSON.parse(body).Actors);

            console.log("");
            console.log("");     
            }
          }
        );
      } else {
        var movieChosen = user.movieSearch.split();
        var parsedTitle = movieChosen.join("+");
        request(
          "http://www.omdbapi.com/?t=" +
            parsedTitle +
            "&plot=short&apikey=trilogy",
          function(error, response, body) {
            if (!error && response.statusCode === 200) {

                console.log("");
                console.log("");     

      
                console.log("");      
                console.log("                Your chosen    ".bold())
                console.log("               ┌┬┐┌─┐┬  ┬┬┌─┐".bold());                            
                console.log("               ││││ │└┐┌┘│├┤".bold());                             
                console.log("               ┴ ┴└─┘ └┘ ┴└─┘".bold());

                     
                console.log("         ____________________________".bold());
                console.log("");


              console.log("\r\n        Title: ".bold() + JSON.parse(body).Title);
              
              console.log("\r\n        Year: ".bold() + JSON.parse(body).Year);
              
              
              console.log("\r\n        IMDB Rating: ".bold() + JSON.parse(body).imdbRating);
              
              
              console.log("\r\n        Rotten Tomatoes Rating: ".bold() + JSON.parse(body).Ratings[1].Value); 
              
              
              console.log("\r\n        Country: ".bold() + JSON.parse(body).Country);
              
              
              console.log("\r\n        Language: ".bold() + JSON.parse(body).Language);
              
              
              console.log("\r\n        Plot: ".bold() + JSON.parse(body).Plot);
              
              
              console.log("\r\n        Actors: ".bold() + JSON.parse(body).Actors);

              console.log("");
              console.log("");     
            }
          }
        );
      }
    });
}