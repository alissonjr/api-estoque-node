import User from '../interfaces/User';
export default class UsersController {
    private Users;
    private defaultResponse(data, statusCode?);
    private errorResponse(message, statusCode?);
    constructor(Users: any);
    getAll(): any;
    getById(id: number): any;
    create(data: User): any;
    update(data: User, id: number): any;
    delete(id: number): any;
}
