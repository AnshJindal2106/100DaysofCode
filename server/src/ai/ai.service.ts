export const generateMatchSummary = async (payload: { home: string; away: string; score: string }) =>
  `AI Summary: ${payload.home} vs ${payload.away} currently ${payload.score}. Momentum favors disciplined bowling and boundary conversion.`;
