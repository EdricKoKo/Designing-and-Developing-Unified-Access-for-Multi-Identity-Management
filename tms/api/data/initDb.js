const pool = require('../data/db');

// Projects Table
async function createProjectsTable() {
  await pool.query(`CREATE TABLE IF NOT EXISTS Projects (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255),
    Description TEXT,
    Owner VARCHAR(255),
    PM VARCHAR(255)
  )`);
}

// Tasks Table
async function createTasksTable() {
  await pool.query(`CREATE TABLE IF NOT EXISTS Tasks (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    ProjectID INT,
    Name VARCHAR(255),
    Description TEXT,
    AssignedTo VARCHAR(255),
    StartedDate DATE,
    DubeDate DATE,
    Status ENUM('Todo','WIP','Completed','KIV'),
    Comments TEXT,
    FOREIGN KEY (ProjectID) REFERENCES Projects(ID)
  )`);
}

async function initDB() {
  await createProjectsTable();
  await createTasksTable();
}

module.exports = { initDB };
