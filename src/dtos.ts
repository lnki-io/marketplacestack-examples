/* Options:
Date: 2019-08-11 11:36:57
Version: 5.50
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://localhost:8443

//GlobalNamespace: 
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
//IncludeTypes: 
//ExcludeTypes: 
//DefaultImports: 
*/


export interface IReturn<T>
{
    createResponse(): T;
}

export interface IReturnVoid
{
    createResponse(): void;
}

export interface IHasSessionId
{
    sessionId: string;
}

export interface IHasBearerToken
{
    bearerToken: string;
}

export interface IPost
{
}

export interface IGet
{
}

export class set_item
{
    public constructor(init?:Partial<set_item>) { (<any>Object).assign(this, init); }
    public score: number;
    public value: string;
}

// @DataContract
export class ResponseError
{
    public constructor(init?:Partial<ResponseError>) { (<any>Object).assign(this, init); }
    // @DataMember(Order=1, EmitDefaultValue=false)
    public errorCode: string;

    // @DataMember(Order=2, EmitDefaultValue=false)
    public fieldName: string;

    // @DataMember(Order=3, EmitDefaultValue=false)
    public message: string;

    // @DataMember(Order=4, EmitDefaultValue=false)
    public meta: { [index:string]: string; };
}

// @DataContract
export class ResponseStatus
{
    public constructor(init?:Partial<ResponseStatus>) { (<any>Object).assign(this, init); }
    // @DataMember(Order=1)
    public errorCode: string;

    // @DataMember(Order=2)
    public message: string;

    // @DataMember(Order=3)
    public stackTrace: string;

    // @DataMember(Order=4)
    public errors: ResponseError[];

    // @DataMember(Order=5)
    public meta: { [index:string]: string; };
}

// @DataContract
export class UserApiKey
{
    public constructor(init?:Partial<UserApiKey>) { (<any>Object).assign(this, init); }
    // @DataMember(Order=1)
    public key: string;

    // @DataMember(Order=2)
    public keyType: string;

    // @DataMember(Order=3)
    public expiryDate: string;
}

export class apikeyresult
{
    public constructor(init?:Partial<apikeyresult>) { (<any>Object).assign(this, init); }
    public key: string;
    public keyType: string;
}

// @DataContract
export class AuthenticateResponse implements IHasSessionId, IHasBearerToken
{
    public constructor(init?:Partial<AuthenticateResponse>) { (<any>Object).assign(this, init); }
    // @DataMember(Order=1)
    public userId: string;

    // @DataMember(Order=2)
    public sessionId: string;

    // @DataMember(Order=3)
    public userName: string;

    // @DataMember(Order=4)
    public displayName: string;

    // @DataMember(Order=5)
    public referrerUrl: string;

    // @DataMember(Order=6)
    public bearerToken: string;

    // @DataMember(Order=7)
    public refreshToken: string;

    // @DataMember(Order=8)
    public responseStatus: ResponseStatus;

    // @DataMember(Order=9)
    public meta: { [index:string]: string; };
}

// @DataContract
export class GetApiKeysResponse
{
    public constructor(init?:Partial<GetApiKeysResponse>) { (<any>Object).assign(this, init); }
    // @DataMember(Order=1)
    public results: UserApiKey[];

    // @DataMember(Order=2)
    public responseStatus: ResponseStatus;
}

// @DataContract
export class RegenerateApiKeysResponse
{
    public constructor(init?:Partial<RegenerateApiKeysResponse>) { (<any>Object).assign(this, init); }
    // @DataMember(Order=1)
    public results: UserApiKey[];

    // @DataMember(Order=2)
    public responseStatus: ResponseStatus;
}

// @DataContract
export class ConvertSessionToTokenResponse
{
    public constructor(init?:Partial<ConvertSessionToTokenResponse>) { (<any>Object).assign(this, init); }
    // @DataMember(Order=1)
    public meta: { [index:string]: string; };

    // @DataMember(Order=2)
    public accessToken: string;

    // @DataMember(Order=3)
    public refreshToken: string;

    // @DataMember(Order=4)
    public responseStatus: ResponseStatus;
}

// @DataContract
export class GetAccessTokenResponse
{
    public constructor(init?:Partial<GetAccessTokenResponse>) { (<any>Object).assign(this, init); }
    // @DataMember(Order=1)
    public accessToken: string;

    // @DataMember(Order=2)
    public responseStatus: ResponseStatus;
}

// @Route("/sign", "PUT")
export class signRequest implements IReturn<any>
{
    public constructor(init?:Partial<signRequest>) { (<any>Object).assign(this, init); }
    public parameters: { [index:string]: string; };
    public serviceURL: string;
    public get: boolean;
    public createResponse() { return {}; }
    public getTypeName() { return 'signRequest'; }
}




