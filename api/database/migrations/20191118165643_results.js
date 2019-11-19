
exports.up = function(knex) {
    return knex.schema.createTable('results', t => {
        t.uuid('id').primary()
        t.string('repositoryName')
        t.string('status')
        t.integer('age')
        t.timestamp('queuedAt')
        t.timestamp('scanningAt')
        t.timestamp('finishedAt')
        t.jsonb('findings')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
