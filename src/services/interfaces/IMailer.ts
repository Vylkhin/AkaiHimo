export default interface IMailer {
    send:(mail_address:string,mail_content:string) => Promise<boolean>
}