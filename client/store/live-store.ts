import { create } from 'zustand';
export const useLiveStore = create<{match:any;setMatch:(m:any)=>void}>((set)=>({match:null,setMatch:(match)=>set({match})}));
