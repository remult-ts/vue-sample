import { DateTimeColumn, EntityClass, IdEntity, StringColumn } from "@remult/core";

@EntityClass
export class Users extends IdEntity {
    name = new StringColumn({
        validate:()=>{
            if (this.name.value.length<3)
                this.name.validationError = 'Name is too short';
        }
    });
    createdDate = new DateTimeColumn();
    constructor() {
        super({
            name: 'users',
            saving: () => {
                if (this.isNew())
                    this.createdDate.value = new Date()
            },
            allowApiCRUD: true
        })
    }
}

