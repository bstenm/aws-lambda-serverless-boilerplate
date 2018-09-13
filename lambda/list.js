import ms from './config/messages';
import { log } from './libs/Log';
import * as dynamoDb from "./libs/dynamodb";
import { success, failure } from "./libs/httpResponse";

export const main = async ({
      requestContext: {
            identity: { cognitoIdentityId: userId }
      }} , _, cb) => {
      try {
            const params = {
                  TableName: 'notes',
                  KeyConditionExpression: 'userId = :userId',
                  ExpressionAttributeValues: { ':userId': userId }
            };
            const { Items } = await dynamoDb.call('query', params);
            cb(null, success(Items));
      } catch (e) {
            log.error(e);
            cb(null, failure({ status: false }));
      }
}