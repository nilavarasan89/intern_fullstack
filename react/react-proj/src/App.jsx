import "./App.css";

function App() {
  return (
    <>
      <h1>This App is for celebrities</h1>
      <Data ob="Social Media" />
      <App2 />
      <Players />
    </>
  );
}

function Data(prop) {
  return (
    <h2>Name: {prop.ob}</h2>
  );
}

function App2() {
  return (
    <h3>Welcome to The Game</h3>
  );
}

function Players() {

  const playersData = [
    {
      id: 100,
      name: "Kathadi Club",
      team: "Instagram"
    },
    {
      id: 101,
      name: "VJ Sidhu vlogs",
      team: "Youtube"
    },
    {
      id: 102,
      name: "Cyber thamizha",
      team: "Youtube"
    },
    {
      id: 103,
      name: "Manikandan",
      team: "Instagram"
    }
  ];

  return (
    <>
      <h2>Player Details</h2>
      <div className="players-grid">
        {playersData.map((player) => (
          <article className="player-card" key={player.id}>
            <h3>{player.name}</h3>
            <p><strong>ID:</strong> {player.id}</p>
            <p><strong>Team:</strong> {player.team}</p>
          </article>
        ))}
      </div>
    </>
  );
}

export default App;