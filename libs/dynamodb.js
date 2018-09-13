import AWS from "aws-sdk";
import { region } from '../config';

AWS.config.update({ region });

export const call = (action, params) => {
      const dynamoDb = new AWS.DynamoDB.DocumentClient();
      return dynamoDb[action](params).promise();
}