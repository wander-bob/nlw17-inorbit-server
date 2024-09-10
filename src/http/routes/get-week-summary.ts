import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { getWeekSummary } from '../../functions/get-week-summary';

export const getWeekSummaryRoute: FastifyPluginAsyncZod = async app => {
  app.get('/goals/summary', async (request, reply) => {
    const data = await getWeekSummary();
    return reply.send(data);
  });
};
