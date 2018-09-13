import uuid from 'uuid';
import { success, failure } from './libs/httpResponse';
import * as dynamoDb from './libs/dynamodb';

export const main = async (evt, ctx, cb) => {
      const data = JSON.parse(evt.body);
      const Item = {
            userId: evt.requestContext.identity.cognitoIdentityId,
            noteId: uuid.v1(),
            name: data.name,
            content: data.content,
            attachment: data.attachment,
            createdAt: Date.now()
      };
      try {
            await dynamoDb.call('put', { TableName: 'notes', Item });
            cb(null, success(Item));
      } catch (e) {
            cb(null, failure({status: false}));
      }
};

