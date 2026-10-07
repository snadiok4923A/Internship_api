const fs = require('fs');
const path = require('path');
const Database = require('better-sqlite3');

const databaseDir = path.resolve(__dirname, '../../database');
const databasePath = path.join(databaseDir, 'internships.db');
const schemaPath = path.join(databaseDir, 'schema.sql');

fs.mkdirSync(databaseDir, { recursive: true });

const db = new Database(databasePath);
db.pragma('journal_mode = WAL');

const schemaSql = fs.readFileSync(schemaPath, 'utf8');
db.exec(schemaSql);

function parseRow(row) {
  if (!row) return null;

  const internship = { ...row };

  if (typeof internship.skills === 'string') {
    try {
      internship.skills = JSON.parse(internship.skills);
    } catch (error) {
      internship.skills = [];
    }
  }

  return internship;
}

module.exports = { db, parseRow, databasePath };
