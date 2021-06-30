import { APIGatewayProxyHandler } from 'aws-lambda';
import { format } from 'date-fns';

export const helloWorld: APIGatewayProxyHandler = async (
  event,
  _context,
  callback
) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: format(new Date(), "'Today is a' eeee"),
        input: event,
      },
      null,
      2
    ),
  };
};
