export default interface IDatabase {
    getAll(model: string): Promise<any[]>;
    getById(model: string, id: string):  Promise<any>;
    login(model: string, email: string):  Promise<any>;
    create(model: string, data: any):  Promise<any>;
    update(model: string, id: string, data: any): void;
    delete(model: string, id: string): void;
}