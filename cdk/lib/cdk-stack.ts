import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import { HttpApi, LambdaProxyIntegration }  from '@aws-cdk/aws-apigatewayv2';
import * as path from 'path';

export class TypescriptLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const handler = new lambda.Function(this, 'Handler', {
      code: lambda.Code.fromAsset(path.join(__dirname, '../../built')),
      handler: 'app.lambdaHandler',
      runtime: lambda.Runtime.NODEJS_12_X,
    })

    const api = new HttpApi(this, 'API', {
      defaultIntegration: new LambdaProxyIntegration({ handler })
    })

    new cdk.CfnOutput(this, 'ApiURL', { value: api.url! })

  }
}
