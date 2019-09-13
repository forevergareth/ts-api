import { Model } from "objection";

// User model.
export default class User extends Model {
  readonly id!: number;

  firstName!: string;
  
  // Table name is the only required property.
  static get tableName() {
    return "users";
  }

  // This is only used for validation. Whenever a model instance
  // is created it is checked against this schema.
  static get jsonSchema() {
    return {
      type: "object",
      required: ["firstName"],

      properties: {
        id: { type: "integer" },
        firstName: { type: "string", minLength: 1, maxLength: 255 }
      }
    };
  }
}
