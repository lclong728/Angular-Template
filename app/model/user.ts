/*
* model class : User
*/
export class User {

    private userID : number;
    private userName : string;
    private department : string 

    constructor( id : number, name : string , department : string){
        this.userID = id;
        this.userName = name;
        this.department = department;
    }

    // getter 
    getId() : number {
        return this.userID;
    }

    getName() : String {
        return this.userName;
    }

    getDepartment(){
        return this.department;
    }

    // setter 
    public setName(userName : string) {
        this.userName = userName;
    }

    public setId(userId : number) {
        this.userID = userId;
    }

    public setDepartment(deapartment : string) {
        this.department = deapartment;
    }
}
