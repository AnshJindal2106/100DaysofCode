import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const mi = await prisma.team.create({ data: { name: 'Mumbai Indians', shortName: 'MI' } });
  const csk = await prisma.team.create({ data: { name: 'Chennai Super Kings', shortName: 'CSK' } });
  const t = await prisma.tournament.create({ data: { name: 'IPL', season: '2026' } });
  await prisma.match.create({ data: { homeTeamId: mi.id, awayTeamId: csk.id, venue: 'Wankhede', format: 'T20', startTime: new Date(), status: 'LIVE', tournamentId: t.id } });
}
main().finally(() => prisma.$disconnect());
