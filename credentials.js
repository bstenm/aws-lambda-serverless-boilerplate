export const s3 = {
      name: 'notes-bs'
};

export const awsUser = [{
      name: 'admin',
      accessKeyID: 'AKIAI5PY74SZDRYX7OJA',
      secretKey: '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'
}];

export const userPool = {
      poolId: 'us-east-1_dafnkxBjp',
      poolARN: 'arn:aws:cognito-idp:us-east-1:755796975476:userpool/us-east-1_dafnkxBjp',
      domainPrefix: 'notes-bs-app',
      appClients: [{
            name: 'notes-app',
            appClientId: '35l4j9i02kctlm54fnvg0b7eft'
      }]
};

export const identityPool = {
      name: 'notes_bs_identity_pool',
      id: 'us-east-1:80546e0c-6893-4e87-a7d8-4d0e9c9dab83'
};

const apiGatewayId = ' https://t8q3ml85wc.execute-api.us-east-1.amazonaws.com/prod';
