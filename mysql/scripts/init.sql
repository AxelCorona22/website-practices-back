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
  user          VARCHAR(250) NOT NULL,
  email         VARCHAR(250) NOT NULL,
  password      VARCHAR(250) NOT NULL,
  clearPassword VARCHAR(250) NOT NULL,
  updatedAt     DATETIME NULL,
  createdAt     DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE productos
(
  id            INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  uuid          VARCHAR(36) NOT NULL,
  nombre        VARCHAR(250) NOT NULL,
  categoria     INT NOT NULL,
  precio      	INT NOT NULL,
  descuento     INT NOT NULL,
  updatedAt     DATETIME NULL,
  createdAt     DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categorias
(
  id            INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  uuid          VARCHAR(36) NOT NULL,
  nombre        VARCHAR(250) NOT NULL,
  updatedAt     DATETIME NULL,
  createdAt     DATETIME DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE productos ADD FOREIGN KEY (categoria) REFERENCES categorias(id);


CREATE TABLE ventas
(
  id            INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  uuid          VARCHAR(36) NOT NULL,
  cliente       INT NOT NULL,
  total         FLOAT,
  updatedAt     DATETIME NULL,
  createdAt     DATETIME DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE ventas ADD FOREIGN KEY (cliente) REFERENCES clientes(id);

CREATE TABLE detalleventa
(
  id            INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  uuid          VARCHAR(36) NOT NULL,
  venta         INT NOT NULL,
  producto      INT NOT NULL,
  cantidad      FLOAT,
  precio        FLOAT,
  updatedAt     DATETIME NULL,
  createdAt     DATETIME DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE detalleventa ADD FOREIGN KEY (venta) REFERENCES ventas(id);
ALTER TABLE detalleventa ADD FOREIGN KEY (producto) REFERENCES productos(id);
