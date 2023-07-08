
import { useState,useEffect } from 'react';
import './App.css';
function App(){
  const [board,setBoard]  =useState([
    [' ',' ',' '],
    [' ',' ',' '],
    [' ',' ',' ']
  ]) 
  const [turn,setturn] = useState(true);
  const [gameover,setgameover]=useState(false);
  const [winner,setwinner] = useState("")
    const handlechange = (row,col)=>{
    if(board[row][col]!==' ')return;
  const newboard = [...board];
  newboard[row][col] = turn && newboard[row][col] === ' '? 'X':'O';
  setBoard(newboard);
  setturn(!turn);
}
useEffect(() => {

  if(board[0][0]==='X'&&board[0][1]==='X'&&board[0][2]==='X'){
    setgameover(true);
    setwinner("PLAYER 1 is the winner");
    return;
  }
  if(board[1][0]==='X'&&board[1][1]==='X'&&board[1][2]==='X'){
    setgameover(true)
    setwinner("PLAYER 1 is the winner");    return;

  }
  if(board[2][0]==='X'&&board[2][1]==='X'&&board[2][2]==='X'){
    setgameover(true)
    setwinner("PLAYER 1 is the winner");    return;

  }
  if(board[0][0]==='X'&&board[1][0]==='X'&&board[2][0]==='X'){
    setgameover(true)
    setwinner("PLAYER 1 is the winner");    return;

  }
  if(board[0][1]==='X'&&board[1][1]==='X'&&board[2][1]==='X'){
    setgameover(true)
    setwinner("PLAYER 1 is the winner");    return;

  }
  if(board[0][2]==='X'&&board[1][2]==='X'&&board[2][2]==='X'){
    setgameover(true)
    setwinner("PLAYER 1 is the winner");    return;

  }
  if(board[0][0]==='X'&&board[1][1]==='X'&&board[2][2]==='X'){
    setgameover(true)
    setwinner("PLAYER 1 is the winner");    return;

  }if(board[0][2]==='X'&&board[1][1]==='X'&&board[2][0]==='X'){
    setgameover(true)
    setwinner("PLAYER 1 is the winner");    return;

  }
  //
  if(board[0][0]==='O'&&board[0][1]==='O'&&board[0][2]==='O'){
    setgameover(true)
    setwinner("PLAYER 2 is the winner");    return;
  }
  if(board[1][0]==='O'&&board[1][1]==='O'&&board[1][2]==='O'){
    setgameover(true)
    setwinner("PLAYER 2 is the winner");    return;
  }
  if(board[2][0]==='O'&&board[2][1]==='O'&&board[2][2]==='O'){
    setgameover(true)
    setwinner("PLAYER 2 is the winner");    return;
  }
  if(board[0][0]==='O'&&board[1][0]==='O'&&board[2][0]==='O'){
    setgameover(true)
    setwinner("PLAYER 2 is the winner");    return;
  }
  if(board[0][1]==='O'&&board[1][1]==='O'&&board[2][1]==='O'){
    setgameover(true)
    setwinner("PLAYER 2 is the winner");    return;
  }
  if(board[0][2]==='O'&&board[1][2]==='O'&&board[2][2]==='O'){
    setgameover(true)
    setwinner("PLAYER 2 is the winner");    return;
  }
  if(board[0][0]==='O'&&board[1][1]==='O'&&board[2][2]==='O'){
    setgameover(true)
    setwinner("PLAYER 2 is the winner");    return;
  }
  if(board[0][2]==='O'&&board[1][1]==='O'&&board[2][0]==='O'){
    setgameover(true)
    setwinner("PLAYER 2 is the winner");    return;
  }
  let stats = true;
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if(board[row][col]===' '){
        stats = false;
      }
    }
  }
  if(stats){
    setwinner("MATCH IS TIE :)");
    setgameover(true);
  }
}, [board])


  return (
    < div className='disable-selection'>
      {!gameover&&
      <h1 className='top'>{
        !gameover&&
         turn?"PLAYER 1'S TURN":"PLAYER 2'S TURN"
      }</h1>}
      { !gameover&&
    <div className="container">
      {
        board.map((val,row)=>{
          return val.map((data,col)=>{
            return (<div className='box' onClick={()=>{handlechange(row,col)}}><h2>{data}</h2></div>
          )})
        })
      }
    </div>
      }
    {gameover&&
         <h1 className='finale'>{winner}</h1>
    }</div>
  );
}
export default App;