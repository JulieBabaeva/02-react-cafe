import css from "./App.module.css"
import CafeInfo from "./components/CafeInfo/CafeInfo"
import { useState } from 'react'
import { type Votes, type VoteType } from "./types/votes";
import VoteOptions from "./components/VoteOptions/VoteOptions";
import VoteStats from "./components/VoteStats/VoteStats";
import Notification from "./components/Notification/Notification";



export default function App() {

  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const handleVotes=(type: VoteType) => {
    const newVotes = { ...votes };
    newVotes[type] = newVotes[type] + 1;
    setVotes(newVotes);

  }
  const resetVotes= () => { setVotes({
    good: 0,
    neutral: 0,
    bad: 0
  })}
    
  
  const total = votes.good + votes.neutral + votes.bad
  const positivePersentage = total>0 ?Math.round((votes.good/total)*100):0  
  return (
    <div className={css.app}>
      <CafeInfo></CafeInfo>
      <VoteOptions onVote={handleVotes} onReset={resetVotes} canReset={total> 0} ></VoteOptions>
      {total > 0 ?<VoteStats votes={votes} totalVotes={total} positiveRate={positivePersentage}></VoteStats>:
      <Notification></Notification>}
    </div>
  ) 
}


