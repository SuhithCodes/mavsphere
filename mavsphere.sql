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

CREATE TABLE roadmaps (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    type VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(100) NOT NULL,
    link VARCHAR(255) NOT NULL,
    download_link VARCHAR(255) NOT NULL
);
