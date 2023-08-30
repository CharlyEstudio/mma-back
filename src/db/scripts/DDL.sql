-- mma.statistic definition

CREATE TABLE `statistic` (
  `id` int NOT NULL AUTO_INCREMENT,
  `wins` int NOT NULL,
  `loses` int NOT NULL,
  `knokcouts` int NOT NULL,
  `submissions` int NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- mma.weight_classes definition

CREATE TABLE `weight_classes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `weight_class` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- mma.detail definition

CREATE TABLE `detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nationality` varchar(255) NOT NULL,
  `team` varchar(255) NOT NULL,
  `age` int NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `weightClassId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_770a00cdc78b7f8f621fd228341` (`weightClassId`),
  CONSTRAINT `FK_770a00cdc78b7f8f621fd228341` FOREIGN KEY (`weightClassId`) REFERENCES `weight_classes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- mma.fighter definition

CREATE TABLE `fighter` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `statisticId` int DEFAULT NULL,
  `detailId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `REL_11cded51f828278c92031f2db0` (`statisticId`),
  UNIQUE KEY `REL_3a111c71912d3ee7ae44ebc929` (`detailId`),
  CONSTRAINT `FK_11cded51f828278c92031f2db07` FOREIGN KEY (`statisticId`) REFERENCES `statistic` (`id`),
  CONSTRAINT `FK_3a111c71912d3ee7ae44ebc9290` FOREIGN KEY (`detailId`) REFERENCES `detail` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- mma.fight definition

CREATE TABLE `fight` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fight` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `fighterAId` int DEFAULT NULL,
  `fighterBId` int DEFAULT NULL,
  `weightClassId` int DEFAULT NULL,
  `winnerId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_0dd6e3fc4ebe8277be863334993` (`fighterAId`),
  KEY `FK_b00cd9931d1152c1b16ac2936d9` (`fighterBId`),
  KEY `FK_9109cc108d104622b40130ab7a0` (`weightClassId`),
  KEY `FK_bafc71189768827955608067eb9` (`winnerId`),
  CONSTRAINT `FK_0dd6e3fc4ebe8277be863334993` FOREIGN KEY (`fighterAId`) REFERENCES `fighter` (`id`),
  CONSTRAINT `FK_9109cc108d104622b40130ab7a0` FOREIGN KEY (`weightClassId`) REFERENCES `weight_classes` (`id`),
  CONSTRAINT `FK_b00cd9931d1152c1b16ac2936d9` FOREIGN KEY (`fighterBId`) REFERENCES `fighter` (`id`),
  CONSTRAINT `FK_bafc71189768827955608067eb9` FOREIGN KEY (`winnerId`) REFERENCES `fighter` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
