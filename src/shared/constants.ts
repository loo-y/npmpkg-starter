export enum ENV {
    fat = 'fat',
    uat = 'uat',
    prod = 'prod',
}

export const GATEWAY_URLS = {
    fat: {
        client: '//fx.fat.demo.com',
    },
    uat: {
        client: '//fx.uat.demo.com',
    },
    prod: {
        client: '//prod.demo.com',
    },
}
