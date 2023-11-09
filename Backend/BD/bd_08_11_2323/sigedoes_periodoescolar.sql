-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: sigedoes
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `periodoescolar`
--

DROP TABLE IF EXISTS `periodoescolar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `periodoescolar` (
  `idperiodoescolar` int NOT NULL AUTO_INCREMENT,
  `periodoescolar` varchar(45) NOT NULL,
  `anio` varchar(45) NOT NULL,
  `periodo` int NOT NULL,
  PRIMARY KEY (`idperiodoescolar`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `periodoescolar`
--

LOCK TABLES `periodoescolar` WRITE;
/*!40000 ALTER TABLE `periodoescolar` DISABLE KEYS */;
INSERT INTO `periodoescolar` VALUES (1,'SEMESTRAL 1 - 2023','2023',1),(2,'SEMESTRAL 2 - 2023','2023',2),(3,'SEMESTRAL 1 - 2022','2022',1),(4,'SEMESTRAL 2 - 2022','2022',2),(5,'SEMESTRAL 1 - 2021','2021',1),(6,'SEMESTRAL 2 - 2021','2021',2),(7,'SEMESTRAL 1 - 2020','2020',1),(8,'SEMESTRAL 2 - 2020','2020',2),(9,'SEMESTRAL 1 - 2019','2019',1),(10,'SEMESTRAL 2 - 2019','2019',2),(11,'SEMESTRAL 1 - 2018','2018',1),(12,'SEMESTRAL 2 - 2018','2018',2),(13,'SEMESTRAL 1 - 2017','2017',1),(14,'SEMESTRAL 2 - 2017','2017',2);
/*!40000 ALTER TABLE `periodoescolar` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-08 23:57:48
