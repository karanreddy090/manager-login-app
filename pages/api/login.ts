import { CognitoIdentityProviderClient, InitiateAuthCommand, InitiateAuthCommandOutput } from "@aws-sdk/client-cognito-identity-provider"
import { NextApiRequest, NextApiResponse } from "next/types";

const { COGNITO_REGION, COGNITO_APP_CLIENT_ID, COGNITO_USER_POOL_ID } = process.env

export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse,
    ) {
        debugger;
 if (req.method !== 'POST') return res.status(405).send({body:"error"})

    const params = {
        AuthFlow: 'USER_PASSWORD_AUTH',
        ClientId: COGNITO_APP_CLIENT_ID,
        UserPoolId: COGNITO_USER_POOL_ID,
        AuthParameters: {
            USERNAME: req.body.username,
            PASSWORD: req.body.password
        }
    }

    const cognitoClient = new CognitoIdentityProviderClient({
        region: COGNITO_REGION
    })
    const initiateAuthCommand = new InitiateAuthCommand(params)

    try {
        const response = await cognitoClient.send(initiateAuthCommand)
        console.log(response)
        return res.status(response['$metadata']?.httpStatusCode || 200).json({
            ...response.AuthenticationResult
        })
    } catch (err:any) {
        console.log(err)
        return res.status(err['$metadata'].httpStatusCode).json({ message: err.toString() })
    }
}
