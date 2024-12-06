---
title: ERD
sidebar_position: 1
---

# Модель данных

import Drawio from '@theme/Drawio'
import diagram from '!!raw-loader!./model.drawio';

<Drawio content={diagram} editable={false} />


## Route

| Название       | Тип          | Описание               |
| -------------- | ------------ | ---------------------- |
| route_id       | int          | Идентификатор маршрута |
| name           | varchar(255) | Название               |
| description    | text         | Описание               |
| type           | enum         | Тип маршрута           |
| difficulty     | enum         | Сложность              |
| distance       | float        | Расстояние             |
| elevation_gain | int          | Набор высоты           |
| duration       | int          | Длительность           |