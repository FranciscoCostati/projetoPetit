-- MySQL dump 10.13  Distrib 8.0.35, for Linux (x86_64)
--
-- Host: localhost    Database: cadastro
-- ------------------------------------------------------
-- Server version	8.0.35-0ubuntu0.23.10.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `aluna`
--

DROP TABLE IF EXISTS `aluna`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aluna` (
  `dataMatricula` date DEFAULT NULL,
  `nomeAluna` text,
  `cpfRgResponsavel` int DEFAULT NULL,
  `cpfRgAluna` int DEFAULT NULL,
  `celular` text,
  `telefone` text,
  `nomeResponsavel` text,
  `numeroRua` int DEFAULT NULL,
  `bairro` text,
  `horarioAula` date DEFAULT NULL,
  `turma` text,
  `municipio` text,
  `sexo` text,
  `ativo` char(1) DEFAULT NULL,
  `idade` int DEFAULT NULL,
  `mensalidade` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aluna`
--

LOCK TABLES `aluna` WRITE;
/*!40000 ALTER TABLE `aluna` DISABLE KEYS */;
INSERT INTO `aluna` VALUES ('2023-01-01','Aluna 1',123456789,987654321,'99999-9999','8888-8888','Responsável 1',123,'Bairro 1','2023-01-01','Turma 1','Município 1','Feminino','S',20,'150.00'),('2023-01-02','Aluna 2',234567890,876543210,'88888-8888','7777-7777','Responsável 2',234,'Bairro 2','2023-01-02','Turma 2','Município 2','Feminino','S',21,'160.00'),('2023-01-03','Aluna 3',345678901,765432109,'77777-7777','6666-6666','Responsável 3',345,'Bairro 3','2023-01-03','Turma 3','Município 3','Feminino','S',22,'170.00'),('2023-01-04','Aluna 4',456789012,654321098,'66666-6666','5555-5555','Responsável 4',456,'Bairro 4','2023-01-04','Turma 4','Município 4','Feminino','S',23,'180.00'),('2023-01-05','Aluna 5',567890123,543210987,'55555-5555','4444-4444','Responsável 5',567,'Bairro 5','2023-01-05','Turma 5','Município 5','Feminino','S',24,'190.00'),('2023-01-06','Aluna 6',678901234,432109876,'44444-4444','3333-3333','Responsável 6',678,'Bairro 6','2023-01-06','Turma 6','Município 6','Feminino','S',25,'200.00'),('2023-01-07','Aluna 7',789012345,321098765,'33333-3333','2222-2222','Responsável 7',789,'Bairro 7','2023-01-07','Turma 7','Município 7','Feminino','S',26,'210.00'),('2023-01-08','Aluna 8',890123456,210987654,'22222-2222','1111-1111','Responsável 8',890,'Bairro 8','2023-01-08','Turma 8','Município 8','Feminino','S',27,'220.00'),('2023-01-09','Aluna 9',901234567,109876543,'11111-1111','0000-0000','Responsável 9',901,'Bairro 9','2023-01-09','Turma 9','Município 9','Feminino','S',28,'230.00'),('2023-01-10','Aluna 10',123456789,987654321,'00000-0000','9999-9999','Responsável 10',123,'Bairro 10','2023-01-10','Turma 10','Município 10','Feminino','S',29,'240.00'),('2023-01-01','Aluna 1',123456789,987654321,'99999-9999','8888-8888','Responsável 1',123,'Bairro 1','2023-01-01','Turma 1','Município 1','Feminino','S',20,'150.00'),('2023-01-01','Aluna 11',123456789,987654321,'99999-9999','8888-8888','Responsável 1',123,'Bairro 1','2023-01-01','Turma 1','Município 1','Feminino','S',20,'150.00'),('2023-01-01','Aluna 11',123456789,987654321,'99999-9999','8888-8888','Responsável 1',123,'Bairro 1','2023-01-01','Turma 1','Município 1','Feminino','S',20,'150.00'),('2023-01-01','Aluna 11',123456789,987654321,'99999-9999','8888-8888','Responsável 1',123,'Bairro 1','2023-01-01','Turma 1','Município 1','Feminino','S',20,NULL),('2023-01-01','Aluna 11',123456789,987654321,'99999-9999','8888-8888','Responsável 1',123,'Bairro 1','2023-01-01','Turma 1','Município 1','Feminino','S',NULL,NULL),('2023-01-01','Aluna 11',123456789,987654321,'99999-9999','8888-8888','Responsável 1',123,'Bairro 1','2023-01-01','Turma 1','Município 1','Feminino','S',20,NULL);
/*!40000 ALTER TABLE `aluna` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-15 20:57:22
