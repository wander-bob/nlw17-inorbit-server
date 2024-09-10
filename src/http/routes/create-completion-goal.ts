import { z } from 'zod';
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { createGoalCompletion } from '../../functions/create-goal-completion';

export const createGoalCompletionRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/goals/completions',
    {
      schema: {
        body: z.object({
          goalId: z.string(),
        }),
      },
    },
    async (request, reply) => {
      const { goalId } = request.body;

      await createGoalCompletion({ goalId });

      reply.status(201).send();
    }
  );
};
