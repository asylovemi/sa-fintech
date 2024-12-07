---
title: Функциональные требования
sidebar_position: 1
---


## Диаграмма

```plantuml

@startuml
left to right direction

actor "Пользователь" as Tourist
actor "Контакты пользователя (семья, друзья)" as Contacts

package "Создание и планирование маршрутов" {
usecase "Выбор начальной и конечной точки маршрута" as UC1
usecase "Добавление промежуточных точек" as UC2
usecase "Определение типа маршрута" as UC3
usecase "Задание уровня сложности маршрута" as UC4
usecase "Расчет расстояния и набора высоты" as UC5
usecase "Уведомления о погодных условиях" as UC6
usecase "Сохранение и публикация маршрута" as UC7
usecase "Привязка к карте и поддержка оффлайн-навигации" as UC8
usecase "Создание альтернативных или аварийных маршрутов" as UC9
usecase "Выбор готовых маршрутов" as UC14
usecase "Создание маршрута" as UC21
}

package "Социальное взаимодействие" {
usecase "Создание профиля пользователя" as UC10
usecase "Фильтрация попутчиков по критериям" as UC12
usecase "Поиск попутчиков по маршруту" as UC11
usecase "Просмотр профилей попутчиков" as UC13
usecase "Чат для обсуждения планов" as UC16
usecase "Отзывы и рейтинги попутчиков" as UC17
usecase "Уведомления о новых попутчиках" as UC18
}

package "Безопасность и мониторинг" {
usecase "Мониторинг местоположения для безопасности" as UC19
usecase "Добавление системы тревожных сигналов" as UC20
}


Tourist --> UC10
Tourist --> UC11
Tourist --> UC14
Tourist --> UC19
Contacts --> UC19
Tourist --> UC21

UC4 -[dotted]-> UC5 : <<include>>
UC7 -[dotted]-> UC8 : <<include>>
UC12 <-[dotted]- UC11 : <<include>>
UC11 -[dotted]-> UC13 : <<include>>
UC21 -[dotted]-> UC9 : <<include>>
UC21 -[dotted]-> UC7 : <<include>>
UC21 -[dotted]-> UC1 : <<include>>
UC14 -[dotted]-> UC4 : <<include>>
UC11 -[dotted]-> UC16 : <<include>>
UC14 -[dotted]-> UC3 : <<include>>
UC1 -[dotted]-> UC5 : <<include>>

UC19 <-[dotted]- UC20 : <<extend>>
UC19 <-[dotted]- UC6 : <<extend>>
UC11 <-[dotted]- UC18 : <<extend>>
UC13 <-[dotted]- UC17 : <<extend>>
UC1 <-[dotted]- UC2 : <<extend>>
UC14 <-[dotted]- UC6 : <<extend>>
UC21 <-[dotted]- UC6 : <<extend>>

@enduml


```

## Описание Use Case
### 1. Выбор существующих маршрутов

- **Описание:** Пользователь может выбирать из списка существующих маршрутов, которые были загружены другими пользователями. Эти    маршруты будут содержать подробную информацию, такую как описание, уровень сложности, точки интереса и отзывы других пользователей.

- **Акторы:** Пользователь (путешественник)

- **Основной поток:**

  1. Пользователь входит в систему.

  2. Переходит в раздел существующих маршрутов.

  3. Выбирает маршрут из списка, используя фильтры (уровень сложности, длительность, отзывы).

  4. Система отображает детали маршрута на интерактивной карте.

  5. Пользователь может добавить выбранный маршрут в свои запланированные походы.

- **Приоритет:** Средний

### 2. Создание маршрутов
- **Описание:** Пользователь создает маршрут, указывая начальную точку, конечную точку и промежуточные точки, а также продолжительность и планируемую дату поездки.

- **Акторы:** Пользователь (путешественник)

- **Основной поток:**

  1. Пользователь входит в систему.

  2. Открывает раздел "Создание маршрута".

  3. Вводит необходимые данные (начало, конец, промежуточные точки, даты, предпочтения).

  4. Система предлагает оптимальный маршрут на основе введенных данных и показывает карту.

  5. Пользователь сохраняет маршрут.

- **Альтернативный поток:** Если данные введены некорректно, система уведомляет пользователя об ошибке и предлагает ввести корректные данные.

- **Приоритет:** Высокий