-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-08-2022 a las 01:23:37
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `info`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleado`
--

CREATE TABLE `empleado` (
  `id` int(11) NOT NULL,
  `nombreCompleto` varchar(100) DEFAULT NULL,
  `dni` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `empleado`
--

INSERT INTO `empleado` (`id`, `nombreCompleto`, `dni`) VALUES
(1, 'McClain John', 15369023),
(2, 'Connor John', 23100782),
(3, 'Schaeffer Alan', 17201720),
(4, 'Riggs Martin', 29111953),
(5, 'Anderson Thomas', 32750983),
(24, 'Travis Jack', 25012003);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lugar`
--

CREATE TABLE `lugar` (
  `id` int(11) NOT NULL,
  `direccion` varchar(150) DEFAULT NULL,
  `localidad` varchar(100) DEFAULT NULL,
  `cliente` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `lugar`
--

INSERT INTO `lugar` (`id`, `direccion`, `localidad`, `cliente`) VALUES
(1, 'El Rosillo 1535', 'Marcos Paz', 'Morel Hector'),
(2, 'Bernardo de Irigoyen 879', 'Moron', 'Carrascal Liliana'),
(3, 'Mendoza 875', 'Jose Marmol', 'Gomez Maria Teresa'),
(4, 'Domingo Repetto 296', 'Martinez', 'Santoalla Claudia'),
(5, 'Calle 24 208', 'La Plata', 'Crivaro Hugo'),
(6, 'Arenales 2884', 'CABA', 'Chazarreta Nelida'),
(7, 'Wallaby 42', 'Sidney', 'P. Sherman');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tareas`
--

CREATE TABLE `tareas` (
  `id` int(11) NOT NULL,
  `fecha` datetime DEFAULT NULL,
  `descripcion` varchar(1000) DEFAULT NULL,
  `empleadoId` int(11) DEFAULT NULL,
  `lugarId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tareas`
--

INSERT INTO `tareas` (`id`, `fecha`, `descripcion`, `empleadoId`, `lugarId`) VALUES
(1, '2022-07-20 09:35:00', 'Retirar planillas', 2, 5),
(2, '2022-07-20 09:35:00', 'Entregar insumos', 4, 1),
(3, '2022-07-20 09:35:00', 'Retirar equipamiento', 4, 2),
(5, '2022-07-28 00:00:00', 'Entregar planillas', 3, 4),
(6, '2022-07-28 00:00:00', 'Entregar insumos', 5, 5);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `lugar`
--
ALTER TABLE `lugar`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `empleadoId` (`empleadoId`),
  ADD KEY `lugarId` (`lugarId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `empleado`
--
ALTER TABLE `empleado`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `lugar`
--
ALTER TABLE `lugar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `tareas`
--
ALTER TABLE `tareas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD CONSTRAINT `tareas_ibfk_1` FOREIGN KEY (`empleadoId`) REFERENCES `empleado` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `tareas_ibfk_2` FOREIGN KEY (`lugarId`) REFERENCES `lugar` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
