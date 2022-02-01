import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCompliments1643652308222 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "compliments",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true
                    },
                    {
                        name: "user_sender",
                        type: "int",
                    },
                    {
                        name: "user_receiver",
                        type: "int"
                    },
                    {
                        name: "tag_id",
                        type: "int"
                    },
                    {
                        name: "message",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKUserSenderCompliments",
                        referencedTableName: "users", // NOME DA TABELA DE LA
                        referencedColumnNames: ["id"], // COLUNA DE LA
                        columnNames: ["user_sender"], // COLUNA DE CA
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    },
                    {
                        name: "FKUserReceiverCompliments",
                        referencedTableName: "users", // NOME DA TABELA DE LA
                        referencedColumnNames: ["id"], // COLUNA DE LA
                        columnNames: ["user_receiver"], // COLUNA DE CA
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    },
                    { 
                        name: "FKTagCompliments",
                        referencedTableName: "tags", // NOME DA TABELA DE LA
                        referencedColumnNames: ["id"], // COLUNA DE LA
                        columnNames: ["tag_id"], // COLUNA DE CA
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("compliments")
    }

}
