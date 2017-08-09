import HttpStatus from 'http-status';
import User from '../interfaces/User';

/**
 * Controller of all Users methods
 * 
 * @export
 * @class UsersController
 */
export default class UsersController {

    private Users;
    
    /**
     * Default Response of requesitions
     * 
     * @private
     * @param {object} data - default response
     * @param {number} [statusCode=HttpStatus.OK] - status of requesition
     * @returns 
     * @memberof UsersController
     */
    private defaultResponse(data: object, statusCode: number = HttpStatus.OK) {
        return { data, statusCode }
    }

    /**
     * Default error response of requisitions
     * 
     * @private
     * @param {string} message - message error
     * @param {number} [statusCode=HttpStatus.BAD_REQUEST]  - status of requisition
     * @returns 
     * @memberof UsersController
     */
    private errorResponse(message: string, statusCode: number = HttpStatus.BAD_REQUEST){
        return this.defaultResponse({ error: message }, statusCode);
    }

    /**
     * Creates an instance of UsersController.
     * @param {any} Users - model with Product's methods
     * @memberof UsersController
     */
    constructor(Users) {
        this.Users = Users;
    }

    /**
     * Get all Users found
     * 
     * @returns 
     * @memberof UsersController
     */
    public getAll() {
        return this.Users.findAll({})
            .then(result => this.defaultResponse(result))
            .catch(error => this.errorResponse(error.message));
    }

    /**
     * Get a specific user
     * 
     * @param {number} id 
     * @memberof UsersController
     */
    public getById(id: number) {
        return this.Users.findOne({ where: id })
            .then(result => this.defaultResponse(result))
            .catch(error => this.errorResponse(error.message));
    }

    /**
     * Create a new user
     * 
     * @param {User} data - informations of new User
     * @memberof UsersController
     */
    public create(data: User) {
        return this.Users.create(data)
            .then(result => this.defaultResponse(result, HttpStatus.CREATED))
            .catch(error => this.errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
    }

    /**
     * Update a user
     * 
     * @param {User} data - informations to be updated
     * @param {number} id - id of user that will be updated
     * @memberof UsersController
     */
    public update(data: User, id: number) {
        return this.Users.update(data, { where: id })
            .then(result => this.defaultResponse(result))
            .catch(error => this.errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
    }

    /**
     * Delete a user
     * 
     * @param {number} id - id of user that will be deleted
     * @memberof UsersController
     */
    public delete(id: number) {
        return this.Users.destroy({ where: id })
            .then(result => this.defaultResponse(result, HttpStatus.NO_CONTENT))
            .catch(error => this.errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
    }
}