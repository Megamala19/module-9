import React from 'react';

const oddTeam = ['Rohit Sharma', 'KL Rahul', 'Suryakumar Yadav', 'Ravindra Jadeja', 'Mohammed Shami'];
const evenTeam = ['Virat Kohli', 'Shreyas Iyer', 'Hardik Pandya', 'Jasprit Bumrah', 'Kuldeep Yadav'];

const T20players = ['Rohit Sharma', 'Virat Kohli', 'Suryakumar Yadav'];
const RanjiTrophyPlayers = ['Prithvi Shaw', 'Sarfaraz Khan', 'Yashasvi Jaiswal'];

function IndianPlayers() {
  // Destructuring: pull out the first two players of each team.
  const [oddPlayer1, oddPlayer2] = oddTeam;
  const [evenPlayer1, evenPlayer2] = evenTeam;

  // Merge feature (spread operator) of ES6 to combine two arrays.
  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Indian Players</h2>

      <h3>Odd Team Players</h3>
      <p>{oddPlayer1}, {oddPlayer2}</p>

      <h3>Even Team Players</h3>
      <p>{evenPlayer1}, {evenPlayer2}</p>

      <h3>T20 + Ranji Trophy Players (Merged)</h3>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
