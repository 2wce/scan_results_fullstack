const guid = require('objection-guid')();
const { Model } = require('objection')

const knex = require('../database/knex')

Model.knex(knex)

class Result extends guid(Model) {
    // Table name is the only required property.
    static get tableName() {
        return 'results'
    }

    // Optional JSON schema. This is not the database schema!
    // No tables or columns are generated based on this. This is only
    // used for input validation. Whenever a model instance is created
    // either explicitly or implicitly it is checked against this schema.
    // See http://json-schema.org/ for more info.
    static get jsonSchema() {
        return {
            type: 'object',

            properties: {
                id: { type: 'string', minLength: 1, maxLength: 255 },
                repositoryName: {
                    type: 'string',
                    minLength: 1,
                    maxLength: 255,
                },
                status: { type: 'string', minLength: 1, maxLength: 255 },
                age: { type: 'number' },
                queuedAt: { type: 'date-time' },
                scanningAt: { type: 'date-time' },
                finishedAt: { type: 'date-time' },

                // Properties defined as objects or arrays are
                // automatically converted to JSON strings when
                // writing to database and back to objects and arrays
                // when reading from database. To override this
                // behaviour, you can override the
                // Model.jsonAttributes property.]
                findings: {
                    type: 'array',
                    properties: {
                        type: { type: 'string' },
                        ruleId: { type: 'string' },
                        location: {
                            type: 'object',
                            properties: {
                                path: { type: 'string' },
                                positions: {
                                    type: 'object',
                                    properties: {
                                        begin: {
                                            type: 'object',
                                            properties: {
                                                line: { type: 'integer' },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        metadata: {
                            type: 'object',
                            properties: {
                                description: { type: 'string' },
                                severity: { type: 'string' },
                            },
                        },
                    },
                },
            },
        }
    }
}

module.exports = Result
