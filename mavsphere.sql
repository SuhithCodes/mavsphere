CREATE TABLE users (
    id VARCHAR(36) PRIMARY KEY,           -- UUID from uuidv4()
    email VARCHAR(255) NOT NULL UNIQUE,   -- Email address (unique)
    password VARCHAR(255) NOT NULL,       -- Hashed password
    first_name VARCHAR(100) NOT NULL,     -- First name
    last_name VARCHAR(100) NOT NULL,      -- Last name
    username VARCHAR(255) NOT NULL UNIQUE, -- Generated from first_name.last_name
    is_mentor BOOLEAN DEFAULT FALSE,      -- Mentor status checkbox
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

create table opportunites;