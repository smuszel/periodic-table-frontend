declare module "*.json" {
    export const date: number;
    export const repos: any;
}

declare module "*.svg" {
    export default class extends React.Component<any, any> { }
}

declare namespace NodeJS {
    export interface ProcessEnv {
        API_URL: string;
        DB_NAME: string;
        DB_USERNAME: string;
        DB_PASSWORD: string;
        DB_ADDRESS: string;
        GH_TOKEN: string
    }
}