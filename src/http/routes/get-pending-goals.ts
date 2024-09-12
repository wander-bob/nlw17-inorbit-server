import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { getWeekPendingGoals } from '../../functions/get-week-pending-goals';

export const getPendingGoalsRoute: FastifyPluginAsyncZod = async app => {
  app.get('/goals/pending', async (request, reply) => {
    const data = await getWeekPendingGoals();
    return reply.send(data);
  });
};
