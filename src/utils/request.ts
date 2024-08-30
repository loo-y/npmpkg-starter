import _ from 'lodash'
import { ENV, GATEWAY_URLS } from '../shared/constants'


export const post = async (
    apiValue: string,
    data: Record<string, any> = {},
    options: Record<string, any> = {}
): Promise<Record<string, any>> => {
    let result = {}
    const env = validateEnv(options.env)
    const isRaw = options.raw || false
    delete options.env
    delete options.raw

    const url = isRaw ? apiValue : getGatewayUrl(apiValue, env)
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            ...options,
        })

        result = await response.json()
    } catch (e) {
        console.error(e)
    }

    return result
}

const validateEnv = (env: string): ENV => {
    if (Object.values(ENV).includes(env as ENV)) {
        return env as ENV
    }
    return ENV.prod
}

const getGatewayUrl = (apiValue: string, env: ENV) => {
    return `${GATEWAY_URLS[env].client}${apiValue}`
}