
import ThirdPartyEmailPasswordNode from 'supertokens-node/recipe/thirdpartyemailpassword'
import SessionNode from 'supertokens-node/recipe/session'
import { appInfo } from './appInfo'

export const backendConfig = () => {
    return {
        framework: "express",
        supertokens: {
            // try.supertokens.io is for demo purposes. Replace this with the address of your core instance (sign up on supertokens.io), or self host a core.
            connectionURI: "https://try.supertokens.io",
            // apiKey: "IF YOU HAVE AN API KEY FOR THE CORE, ADD IT HERE",
        },
        appInfo,
        recipeList: [
            ThirdPartyEmailPasswordNode.init({
                providers: [
                    // We have provided you with development keys which you can use for testsing.
                    // IMPORTANT: Please replace them with your own OAuth keys for production use.
                    ThirdPartyEmailPasswordNode.Google({
                        clientId: "597044962448-mnnl7ehkjvvb75cs6tg4mphvjideqk6i.apps.googleusercontent.com",
                        clientSecret: "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"
                    }),
                ],
            }),
            SessionNode.init(),
        ],
        isInServerlessEnv: true,
    }
}
