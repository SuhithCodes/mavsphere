-- CreateTable
CREATE TABLE `JobListing` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `company` VARCHAR(191) NOT NULL,
    `website` VARCHAR(191) NULL,
    `location` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `salaryRange` VARCHAR(191) NOT NULL,
    `datePosted` DATETIME(3) NOT NULL,
    `experienceLevel` VARCHAR(191) NOT NULL,
    `industry` VARCHAR(191) NOT NULL,
    `skillsRequired` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InternshipListing` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `company` VARCHAR(191) NOT NULL,
    `website` VARCHAR(191) NULL,
    `location` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `salaryRange` VARCHAR(191) NOT NULL,
    `datePosted` DATETIME(3) NOT NULL,
    `experienceLevel` VARCHAR(191) NOT NULL,
    `industry` VARCHAR(191) NOT NULL,
    `skillsRequired` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
