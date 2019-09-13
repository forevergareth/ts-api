import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {

    console.log('up');
    return knex.schema.createTable('users', table => {

        table.increments('id').primary();
        table.string('firstName');

    });
}


export async function down(knex: Knex): Promise<any> {
    console.log('down');
    return knex.schema.dropTableIfExists('users');
}

