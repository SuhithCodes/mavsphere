-- Users and Authentication
CREATE TABLE users (
    id VARCHAR(36) PRIMARY KEY,           -- UUID from uuidv4()
    email VARCHAR(255) NOT NULL UNIQUE,   -- Email address
    password VARCHAR(255) NOT NULL,       -- Hashed password
    first_name VARCHAR(100) NOT NULL,     
    last_name VARCHAR(100) NOT NULL,      
    username VARCHAR(255) NOT NULL UNIQUE,
    is_mentor BOOLEAN DEFAULT FALSE,      
    avatar_url VARCHAR(255),
    graduation_year INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- User Profile Information
CREATE TABLE user_profiles (
    user_id VARCHAR(36) PRIMARY KEY,
    bio TEXT,
    current_institution VARCHAR(255),
    location VARCHAR(255),
    linkedin_url VARCHAR(255),
    github_url VARCHAR(255),
    kaggle_url VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Education History
CREATE TABLE education (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    degree_title VARCHAR(255) NOT NULL,
    institution VARCHAR(255) NOT NULL,
    start_year INT NOT NULL,
    end_year INT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Professional Experience
CREATE TABLE experience (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    position_title VARCHAR(255) NOT NULL,
    organization VARCHAR(255) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE,
    responsibilities TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Skills and Research
CREATE TABLE user_skills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    publications TEXT,
    research_areas TEXT,
    technical_skills TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Events System
CREATE TABLE events (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    date DATETIME NOT NULL,
    duration INT,
    location VARCHAR(255),
    type ENUM('meeting', 'deadline', 'seminar', 'conference', 'workshop', 'workout') NOT NULL,
    website VARCHAR(255),
    description TEXT,
    notes TEXT,
    organizer VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Event Participants
CREATE TABLE event_participants (
    event_id INT,
    user_id VARCHAR(36),
    status ENUM('registered', 'attended', 'cancelled') DEFAULT 'registered',
    PRIMARY KEY (event_id, user_id),
    FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Forums
CREATE TABLE forums (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Forum Posts
CREATE TABLE forum_posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    forum_id INT NOT NULL,
    user_id VARCHAR(36) NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (forum_id) REFERENCES forums(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Career Development Resources
CREATE TABLE roadmaps (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    type VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(100) NOT NULL,
    link VARCHAR(255) NOT NULL,
    download_link VARCHAR(255) NOT NULL
);

-- Mentorship Program
CREATE TABLE mentorship_relationships (
    id INT AUTO_INCREMENT PRIMARY KEY,
    mentor_id VARCHAR(36) NOT NULL,
    mentee_id VARCHAR(36) NOT NULL,
    status ENUM('pending', 'active', 'completed', 'cancelled') DEFAULT 'pending',
    start_date DATE,
    end_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (mentor_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (mentee_id) REFERENCES users(id) ON DELETE CASCADE
);