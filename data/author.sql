CREATE TABLE `freedb_Proyectos Molones`.`authors` (
`idAuthor` INT NOT NULL AUTO_INCREMENT,
`name` VARCHAR(255) NOT NULL,
`job` VARCHAR(255) NOT NULL,
PRIMARY KEY (`idAuthor`),
UNIQUE INDEX `idAuthor_UNIQUE` (`idAuthor` ASC) VISIBLE);