import { CognitoUserPool, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import { NextApiRequest, NextApiResponse } from 'next/types';
const { COGNITO_REGION, COGNITO_APP_CLIENT_ID, COGNITO_USER_POOL_ID } = process.env

export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse,
) {
    // debugger;
    if (req.method !== 'POST') return res.status(405).send({body:"error"})

    var authenticationData = {
        Username: req.body.username,
        Password:  req.body.password,
    };
    // debugger;
    var authenticationDetails = new AuthenticationDetails(authenticationData);
    var poolData = {
        UserPoolId: COGNITO_USER_POOL_ID || '',
        ClientId: COGNITO_APP_CLIENT_ID || ''
    };
    var userPool = new CognitoUserPool(poolData);
    var userData = {
        Username:  req.body.username,
        Pool: userPool
    };
    var cognitoUser = new CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            var accessToken = result.getAccessToken().getJwtToken();
            debugger;
            /* Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer */
            var idToken = result.getIdToken().getJwtToken();
            console.log(idToken);
            return res.status(200).json({
                result
            })
        },

        onFailure: function (err) {
            console.log(err);
        },

    });
}
