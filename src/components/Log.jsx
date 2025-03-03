const Log = ({ turns }) => {
  return (
    <ol id="log">
      {turns.map((turn, index) => (
        <li key={index}>
          <span className="player">{turn.player}</span> played square{" "}
          <span className="square">
            {turn.square.row}, {turn.square.col}
          </span>
        </li>
      ))}
    </ol>
  );
};

export default Log;
