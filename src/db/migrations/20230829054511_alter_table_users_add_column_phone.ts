import { Knex } from "knex";

/**
 * Migration to create a new table for users.
 * @param {Knex} knex
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable("users", (table) => {
    table.specificType("phone_number", "varchar(15)");
  });
}

/**
 * Revert above migration
 * @param {Knex} knex
 */
export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable("users", (table) => {
    table.dropColumn("phone_number");
  });
}
