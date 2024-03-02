ALTER TABLE `freedb_Proyectos Molones`.`projects` 
ADD COLUMN `description` VARCHAR(255) NOT NULL AFTER `name`,
ADD COLUMN `technologies` VARCHAR(255) NOT NULL AFTER `description`,
ADD COLUMN `image` VARCHAR(1024) NOT NULL AFTER `technologies`,
ADD COLUMN `repo` VARCHAR(255) NOT NULL AFTER `image`,
ADD COLUMN `demo` VARCHAR(255) NOT NULL AFTER `repo`,
ADD COLUMN `slogan` VARCHAR(255) NULL AFTER `demo`,
CHANGE COLUMN `idProject` `idProject` INT NOT NULL AUTO_INCREMENT ,
CHANGE COLUMN `name` `name` VARCHAR(255) NOT NULL ;