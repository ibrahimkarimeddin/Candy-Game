const ScoreBoard = ({ score }) => {
  return (
    <div className="score-board flex items-center">
      <h2 className="text-white text-2xl font-bold">Your Score  : </h2>
      <h2 className=" text-white mt-1 ml-2"> {score}</h2>
    </div>
  )
}

export default ScoreBoard