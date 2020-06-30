import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"

function jsonResponse(obj: any, statusCode: number): any {
  return {
    statusCode,
    body: JSON.stringify(obj),
    headers: { 
      'content-type': 'application/json',
    }
  }
}

export const lambdaHandler = async ( event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  return jsonResponse(event, 200)
}
