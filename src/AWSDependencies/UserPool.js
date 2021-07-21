import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_SWaVkD7aX",
    ClientId: "50gal9tu9dbjimgnjpdufjo882"
}

export default new CognitoUserPool(poolData);