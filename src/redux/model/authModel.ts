export interface AuthorizeRequest {
    login: string;
    password: string;
}

export interface AuthorizeReponse {
    accessToken: string;
    expire: string;
}