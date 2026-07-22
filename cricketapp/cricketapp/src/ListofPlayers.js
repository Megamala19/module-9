import React from 'react';

const players = [
  { name: 'Rohit Sharma', score: 85 },
  { name: 'Virat Kohli', score: 72 },
  { name: 'KL Rahul', score: 45 },
  { name: 'Shreyas Iyer', score: 60 },
  { name: 'Suryakumar Yadav', score: 91 },
  { name: 'Hardik Pandya', score: 55 },
  { name: 'Ravindra Jadeja', score: 38 },
  { name: 'Jasprit Bumrah', score: 12 },
  { name: 'Mohammed Shami', score: 8 },
  { name: 'Kuldeep Yadav', score: 15 },
  { name: 'Ishan Kishan', score: 68 }
];

function ListofPlayers() {
  // Use map() to render each player's name and score.
  const playerList = players.map((player, index) => (
    <li key={index}>{player.name} — {player.score}</li>
  ));

  // Use an arrow function to filter players scoring below 70.
  const lowScorers = players.filter((player) => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>
      <ul>{playerList}</ul>

      <h3>Players with score below 70</h3>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>{player.name} — {player.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
