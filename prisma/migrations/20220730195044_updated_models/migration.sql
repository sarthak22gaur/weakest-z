-- CreateTable
CREATE TABLE `Vote` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `votedForId` INTEGER NOT NULL,
    `votedAgainstId` INTEGER NOT NULL,

    INDEX `Vote_votedForId_idx`(`votedForId`),
    INDEX `Vote_votedAgainstId_idx`(`votedAgainstId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dbz` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `img_url` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Dbz_id_key`(`id`),
    UNIQUE INDEX `Dbz_name_key`(`name`),
    UNIQUE INDEX `Dbz_img_url_key`(`img_url`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
