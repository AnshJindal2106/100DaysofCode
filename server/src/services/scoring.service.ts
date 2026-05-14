export const computeRunRate = (runs:number, overs:number) => overs > 0 ? +(runs / overs).toFixed(2) : 0;
