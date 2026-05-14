import './globals.css';
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html><body><div className='min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950'>{children}</div></body></html>; }
