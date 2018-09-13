import ms from './config/messages';
import { log } from './libs/Log';
import * as dynamoDb from "./libs/dynamodb";
import { success, failure } from "./libs/httpResponse";

export const main = async ({
      requestContext: { identity: { cognitoIdentityId: userId }},
      pathParameters: { id: noteId }
} , _, cb) => {
      try {
            const params = { TableName: 'notes', Key: { userId, noteId }};
            await dynamoDb.call('delete', params);
            cb(null, success({ status: true }));
      } catch (e) {
            log.error(e);
            cb(null, failure({ status: false }));
      }
}