"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function up(knex) {
    console.log('up');
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('firstName');
    });
}
exports.up = up;
async function down(knex) {
    console.log('down');
    return knex.schema.dropTableIfExists('users');
}
exports.down = down;
