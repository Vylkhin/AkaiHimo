export default interface IAuthenticator {
    login:(password: string, hash: string) => Token | null
    signup: (password: string) => Hash | null 
    authenticate: (token: Token, id?:number, role?:string) => boolean
}