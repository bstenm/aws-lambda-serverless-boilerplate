import uuid from 'uuid';
import { success, failure } from './libs/httpResponse';
import * as dynamoDb from './libs/dynamodb';

export const main = async ({
      requestContext: { identity: { cognitoIdentityId: userId }},
      pathParameters: { id: noteId },
      body
}, _, cb) => {
      const data = JSON.parse(body);
      const params = {
            TableName: "notes",
            Key: { userId, noteId },
            UpdateExpression: "SET content = :content, attachment = :attachment",
            ExpressionAttributeValues: {
                  ":attachment": data.attachment || null,
                  ":content": data.content || null
            },
            ReturnValues: "ALL_NEW"
          };
      try {
            await dynamoDb.call('update', params);
            cb(null, success({ status: true }));
      } catch (e) {
            cb(null, failure({status: false}));
      }
};

