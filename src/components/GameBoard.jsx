const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

{
  /*
   * This component is responsible for rendering the game board.
   * It uses the initialGameBoard array to render the board.
   * It maps over the initialGameBoard array to render each row.
   * For each row, it maps over the columns to render the buttons.
   * The buttons will display the playerSymbol from the initialGameBoard array.
   */
}
const GameBoard = () => {
  return (
    <ol id="game-board">
      {initialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
