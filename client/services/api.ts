export const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';
export const getJSON = (path: string) => fetch(`${API}${path}`).then(r => r.json());
