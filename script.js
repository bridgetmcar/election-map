var createCandidate = function (name, color)
{

var politician = {};
politician.name = name;
politician.electionResults = null;
politician.totalVotes = 0;
politician.color = color;

politician.announcePolitician = function()

{
  console.log("The candidate is " + name + "!")
};
var winner;
politician.tallyVotes = function ()
 {
  this.totalVotes = 0;
  for (var i=0; i<this.electionResults.length; i++)
  {
    this.totalVotes = this.totalVotes + this.electionResults[i];

  }
}
politician.announcePolitician();
return politician;
};

var flo = createCandidate("Flo Florrick",  [132, 17, 11]);
var jane = createCandidate("Jane Doesitall",  [245, 141, 136]);

console.log(flo.color);
console.log(jane.color);

flo.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

jane.electionResults = [4, 2, 4, 4, 17, 3, 3, 1, 2, 1, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 11, 3, 1, 2, 11, 2, 3, 1];

flo.electionResults[9] = 1;
jane.electionResults[9] = 28;
flo.electionResults[4] = 17;
jane.electionResults[4] = 38;
flo.electionResults[43] = 11;
jane.electionResults[43] = 27;

var theStates;
var state;
var winner;

var setStateResults = function (state)
{
  theStates[state].winner=null;
  if (flo.electionResults[state] > jane.electionResults[state])
  {
    theStates[state].winner=flo;
  }
  else if (jane.electionResults[state]>flo.electionResults[state])
  {
    theStates[state].winner=jane;
  }

  var stateWinner = theStates[state].winner;

  if (stateWinner !== null) {
    theStates[state].rgbColor=stateWinner.color;
  }
  else {
    theStates[state].rgbColor=[11,32,57];
  }
  var stateInfoTable = document.getElementById('stateResults');
  var header = stateInfoTable.children[0].children[0];
  header.children[0];
  var stateName = header.children[0];
  stateName.innerText = theStates[state].nameFull;

  header.children[1];
  var stateAbbreviation = header.children[1];
  stateAbbreviation.innerText = theStates[state].nameAbbrev;

  var body = stateInfoTable.children[1];
  var candidate1Name = body.children[0].children[0].innerText = flo.name;
  var candidate1Results = body.children[0].children[1].innerText = flo.electionResults[state];
  var candidate2Name = body.children[1].children[0].innerText = jane.name;
  var candidate2Results = body.children[1].children[1].innerText = jane.electionResults[state];
  var stateWinnerName = body.children[2].children[1];

  if (theStates[state].winner === null)
    {
      stateWinnerName.innerText = "Draw";
    }
    else {
      stateWinnerName.innerText = theStates[state].winner.name;
    }

  // if (flo.electionResults[state] > jane.electionResults[state])
  // {
  //   stateWinner = "Flo Florrick";
  // }
  // else if (flo.electionResults[state] == jane.electionResults[state])
  // {
  //   stateWinner = "Draw";
  // }
  // else {
  //   stateWinner = "Jane Doesitall";
  // }
  // return stateWinner;

  //stateInfoTable.children[1].children[0].children[0].innerText = "Flo Florrick";
  //stateInfoTable.children[1].children[0].children[1].innerText = flo.electionResults[state];
  //stateInfoTable.children[1].children[1].children[0].innerText = "Jane Doesitall";
  //stateInfoTable.children[1].children[1].children[1].innerText = jane.electionResults[state];

};



jane.tallyVotes();
flo.tallyVotes();

if (jane.totalVotes > flo.totalVotes)
{
  winner=jane.name;
}
else if (flo.totalVotes==jane.totalVotes)
  {
    winner="draw";
  }
else
  {
    winner=flo.name;
  };


var countryTable = document.getElementById('countryResults');
var row = countryTable.children[0].children[0];
row.children[0].innerText = flo.name;
row.children[1].innerText = flo.totalVotes;
row.children[2].innerText = jane.name;
row.children[3].innerText = jane.totalVotes;
row.children[5].innerText = winner;


setStateResults();


// if (jane.totalVotes > flo.totalVotes)
// {
//   winner=jane.name;
// }
// else if (flo.totalVotes==jane.totalVotes)
//   {
//     winner="draw";
//   }
// else
//   {
//     winner=flo.name;
//   };


var countryTable = document.getElementById('countryResults');
var row = countryTable.children[0].children[0];
row.children[0].innerText = flo.name;
row.children[1].innerText = flo.totalVotes;
row.children[2].innerText = jane.name;
row.children[3].innerText = jane.totalVotes;
row.children[5].innerText = winner;




setStateResults();

console.log(flo.totalVotes);
console.log(jane.totalVotes);
console.log("The Winner is " + winner + "!!!");
