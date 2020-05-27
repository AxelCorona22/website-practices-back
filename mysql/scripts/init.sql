CREATE TABLE usuarios
(
  id            INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  uuid          VARCHAR(36) NOT NULL,
  perfil        VARCHAR(250) NOT NULL,
  nombre        VARCHAR(250) NOT NULL,
  email         VARCHAR(250) NOT NULL,
  activo        TINYINT NOT NULL DEFAULT 1,
  password      VARCHAR(250) NOT NULL,
  clearPassword VARCHAR(250) NOT NULL,
  updatedAt     DATETIME NULL,
  createdAt     DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE clientes
(
  id            INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  uuid          VARCHAR(36) NOT NULL,
  name          VARCHAR(250) NOT NULL,
  user          VARCHAR(250) NOT NULL,
  email         VARCHAR(250) NOT NULL,
  password      VARCHAR(250) NOT NULL,
  clearPassword VARCHAR(250) NOT NULL,
  updatedAt     DATETIME NULL,
  createdAt     DATETIME DEFAULT CURRENT_TIMESTAMP
);
