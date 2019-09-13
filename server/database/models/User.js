"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
// User model.
class User extends objection_1.Model {
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
exports.default = User;
