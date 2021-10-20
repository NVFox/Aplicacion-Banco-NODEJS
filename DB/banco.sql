-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-10-2021 a las 01:45:03
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 7.4.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `banco`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `DocCli` varchar(30) NOT NULL,
  `NomCli` varchar(30) NOT NULL,
  `ApeCli` varchar(30) NOT NULL,
  `CorreoCli` varchar(30) NOT NULL,
  `CelularCli` varchar(30) NOT NULL,
  `SexoCli` varchar(10) NOT NULL,
  `FechaNacCli` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`DocCli`, `NomCli`, `ApeCli`, `CorreoCli`, `CelularCli`, `SexoCli`, `FechaNacCli`) VALUES
('100', 'Pepe', 'Perez', 'pepe@gmail.com', '310222222', 'M', '0000-00-00'),
('1000127812', 'Andres', 'Tellez', 'andres12@gmail.com', '3173350013', 'M', '2000-06-08'),
('1000154632', 'Juan', 'Rodriguez', 'juan45@hotmail.com', '3152151456', 'M', '1999-10-18'),
('1000247859', 'Lucas', 'Melo', 'lucas54@gmail.com', '3158771245', 'M', '2000-01-04'),
('1000278516', 'Jose', 'Ramirez', 'jose23@gmail.com', '3173350123', 'M', '1999-05-18'),
('1000874123', 'Fernanda', 'Hernandez', 'fernanda34@gmail.com', '3218451245', 'F', '2001-07-11');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `creditos`
--

CREATE TABLE `creditos` (
  `CodigoCredito` varchar(30) NOT NULL,
  `DocCli` varchar(30) NOT NULL,
  `CodLinea` varchar(30) NOT NULL,
  `MontoPrestado` int(11) NOT NULL,
  `FechaAproba` date NOT NULL,
  `Plazo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `creditos`
--

INSERT INTO `creditos` (`CodigoCredito`, `DocCli`, `CodLinea`, `MontoPrestado`, `FechaAproba`, `Plazo`) VALUES
('C1', '1000154632', 'A1', 35000000, '2021-05-04', 36),
('C3', '1000247859', 'A1', 25000000, '2020-12-08', 48);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuentas`
--

CREATE TABLE `cuentas` (
  `CodCuenta` varchar(30) NOT NULL,
  `DocCli` varchar(30) NOT NULL,
  `TipoCuenta` varchar(30) NOT NULL,
  `Saldo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cuentas`
--

INSERT INTO `cuentas` (`CodCuenta`, `DocCli`, `TipoCuenta`, `Saldo`) VALUES
('CN1', '1000247859', 'Corriente', 1500000),
('CN2', '100', 'Ahorros', 250000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lineas`
--

CREATE TABLE `lineas` (
  `CodLinea` varchar(30) NOT NULL,
  `NomLinea` varchar(30) NOT NULL,
  `MontoMaxiCredito` varchar(30) NOT NULL,
  `PlazoMaxCred` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `lineas`
--

INSERT INTO `lineas` (`CodLinea`, `NomLinea`, `MontoMaxiCredito`, `PlazoMaxCred`) VALUES
('A1', 'Linea 1', '45000000', 48),
('A2', 'Linea 2', '50000000', 48);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `operaciones`
--

CREATE TABLE `operaciones` (
  `CodOp` int(11) NOT NULL,
  `CodCuenta` varchar(30) NOT NULL,
  `TipoCuenta` varchar(30) NOT NULL,
  `Operacion` varchar(30) NOT NULL,
  `OpDinero` int(11) NOT NULL,
  `SalAnterior` int(11) NOT NULL,
  `SalActual` int(11) NOT NULL,
  `Fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `operaciones`
--

INSERT INTO `operaciones` (`CodOp`, `CodCuenta`, `TipoCuenta`, `Operacion`, `OpDinero`, `SalAnterior`, `SalActual`, `Fecha`) VALUES
(1, 'CN1', 'Corriente', 'Retiro', 2500000, 5000000, 2500000, '2021-09-06'),
(2, 'CN1', 'Corriente', 'Consignacion', 1000000, 2500000, 3500000, '2021-09-06'),
(3, 'CN1', 'Corriente', 'Retiro', 1000000, 3500000, 2500000, '2021-09-06'),
(4, 'CN1', 'Corriente', 'Consignacion', 1000000, 2500000, 3500000, '2021-09-06'),
(5, 'CN1', 'Corriente', 'Retiro', 1000000, 3500000, 2500000, '2021-09-06'),
(6, 'CN1', 'Corriente', 'Retiro', 1000000, 2500000, 1500000, '2021-09-06'),
(7, 'CN2', 'Ahorros', 'Consignacion', 400000, 100000, 500000, '2021-09-15'),
(8, 'CN2', 'Ahorros', 'Retiro', 250000, 500000, 250000, '2021-09-15');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `DocCli` varchar(30) NOT NULL,
  `NomUsu` varchar(30) NOT NULL,
  `Clave` varchar(255) NOT NULL,
  `Rol` varchar(30) NOT NULL,
  `Estado` varchar(50) NOT NULL,
  `Imagen` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`DocCli`, `NomUsu`, `Clave`, `Rol`, `Estado`, `Imagen`) VALUES
('100', 'Pepito', '$2a$08$5bXsZp75E/7B.aRFbTMHHuWuok2fojAWtChFLUlXFSJVZ0ARAgooS', 'Cliente', 'Activo', 'img9'),
('1000127812', 'admin', '$2a$08$L4B/jOQ1XDImv.cWymkfnupdfdoY0DGBsdw9pf.6rC8eCYft0ykz2', 'Administrador', 'Activo', 'img1'),
('1000154632', 'Juan1', '$2a$08$t3F7/JQuK.dSYZAGsg7x6..ifRAWnxi7557HRg068kO3riS10Ng/y', 'Cliente', 'Activo', 'img3'),
('1000247859', 'Lucas1', '$2a$08$G.Ihxo9uG5gBOkiD5fGUCOX/QI1M.CJbcm2UScXmLXV5kGnk.BTiC', 'Cliente', 'Activo', 'img6'),
('1000278516', 'Jose1', '$2a$08$859/swLoIfW/khhB0Ytdieui03uQrmDbhP5UW/eqCi7y7foP3Ezdq', 'Empleado', 'Activo', 'img2'),
('1000874123', 'Fernanda1', '$2a$08$0Gx3Kb26sDsdio2xqp/RXuPK5SPaQ7r4PMKWDwye6uGCuJSDEaiMW', 'Cliente', 'Inactivo', 'img5');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`DocCli`);

--
-- Indices de la tabla `creditos`
--
ALTER TABLE `creditos`
  ADD PRIMARY KEY (`CodigoCredito`),
  ADD KEY `DocCli` (`DocCli`) USING BTREE,
  ADD KEY `CodLinea` (`CodLinea`) USING BTREE;

--
-- Indices de la tabla `cuentas`
--
ALTER TABLE `cuentas`
  ADD PRIMARY KEY (`CodCuenta`),
  ADD KEY `DocCli` (`DocCli`);

--
-- Indices de la tabla `lineas`
--
ALTER TABLE `lineas`
  ADD PRIMARY KEY (`CodLinea`);

--
-- Indices de la tabla `operaciones`
--
ALTER TABLE `operaciones`
  ADD PRIMARY KEY (`CodOp`),
  ADD KEY `CodCuenta` (`CodCuenta`),
  ADD KEY `TipoCuenta` (`TipoCuenta`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`DocCli`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `operaciones`
--
ALTER TABLE `operaciones`
  MODIFY `CodOp` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `creditos`
--
ALTER TABLE `creditos`
  ADD CONSTRAINT `creditos_ibfk_1` FOREIGN KEY (`DocCli`) REFERENCES `clientes` (`DocCli`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `creditos_ibfk_2` FOREIGN KEY (`CodLinea`) REFERENCES `lineas` (`CodLinea`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `cuentas`
--
ALTER TABLE `cuentas`
  ADD CONSTRAINT `cuentas_ibfk_1` FOREIGN KEY (`DocCli`) REFERENCES `clientes` (`DocCli`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `operaciones`
--
ALTER TABLE `operaciones`
  ADD CONSTRAINT `operaciones_ibfk_1` FOREIGN KEY (`CodCuenta`) REFERENCES `cuentas` (`CodCuenta`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`DocCli`) REFERENCES `clientes` (`DocCli`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
