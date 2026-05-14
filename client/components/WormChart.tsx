'use client';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
export default function WormChart({ data }: { data: any[] }) { return <div className='glass p-4 h-64'><ResponsiveContainer><LineChart data={data}><XAxis dataKey='over'/><YAxis/><Tooltip/><Line dataKey='runs' stroke='#ff7a18'/></LineChart></ResponsiveContainer></div>; }
