import { Exclude } from "class-transformer";
import { Entity, PrimaryColumn, Column, UpdateDateColumn, CreateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid'

// COMANDO PARA CRIAR yarn typeorm entity:create -n User
// ENTIDADE É UMA TABELA (ENTIDADE USUARIO) // entidade <> ORM <> BD
@Entity("users")
class User {
    @PrimaryColumn()
    readonly id: string // SOMENTE A ENTIDADE PODERA CRIAR O ID

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    admin: boolean

    @Exclude()
    @Column()
    password: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date


    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}

export { User }
