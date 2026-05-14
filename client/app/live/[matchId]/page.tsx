'use client';
import { useEffect, useState } from 'react';
import { getJSON } from '@/services/api';
import { socket } from '@/services/socket';
import ScoreCard from '@/components/ScoreCard';
import WormChart from '@/components/WormChart';
import { LivePulse } from '@/components/LivePulse';

export default function LiveMatch({ params }: { params: { matchId: string } }) {
  const [match, setMatch] = useState<any>();
  useEffect(() => { getJSON(`/matches/${params.matchId}/live`).then(setMatch); socket.emit('join:match', params.matchId); socket.on('ball:event', ()=>getJSON(`/matches/${params.matchId}/live`).then(setMatch)); return ()=>{socket.off('ball:event');}; }, [params.matchId]);
  if (!match) return <div className='p-6'>Loading...</div>;
  return <main className='p-4 space-y-4'><div className='flex justify-between'><LivePulse /><div>{match.status}</div></div><ScoreCard match={match} /><WormChart data={match.innings?.[0]?.balls?.map((b:any)=>({over:`${b.over}.${b.ball}`,runs:b.runs})) || []}/></main>;
}
