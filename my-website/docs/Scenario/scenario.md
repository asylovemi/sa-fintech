---
title: Поиск попутчиков
sidebar_position: 1
---
# Поиск попутчиков

### Участники сценария

| Система      | Описание                           |
| ------------ | ---------------------------------- |
| Система      | Система, отвечающая за системность |
| База данных  | Базовая базовость                  |
| Пользователь | Отвечает за пользование            |
| Попутчик     | Отвечает за попутчество            |
---

### Диаграмма

```plantuml

@startuml
actor Пользователь as User
participant "Система" as System
participant "База данных" as DB
actor "Попутчик" as Messenger

autonumber

== Регистрация пользователя ==
User -> System: Создать профиль
activate System
System -> System: Проверка данных профиля
alt Данные корректны
    System -> DB: Сохранить данные профиля
    activate DB
    DB --> System: Подтверждение
    deactivate DB
    System --> User: Профиль создан 
note left: Перейти к п.7
else Ошибка в данных
    System --> User: Сообщение об ошибке
note left: Конец процесса
end
deactivate System

== Инициация поиска попутчиков ==
User -> System: Инициировать поиск попутчиков
activate System
System --> User: Ввести параметры маршрута
deactivate System

== Отбор подходящих попутчиков ==
User -> System: Ввод данных (точки, даты, предпочтения)
activate System
System -> System: Проверка введенных данных
System -> DB: Получить список доступных попутчиков
activate DB
DB --> System: Список попутчиков
deactivate DB
System -> System: Фильтрация подходящих попутчиков
System --> User: Список найденных попутчиков
deactivate System

== Запрос на совместное путешествие ==
User -> System: Отправить запрос попутчику
activate System
System -> Messenger: Отправить запрос через мессенджер
activate Messenger
Messenger -> System: Получить ответ от попутчика
deactivate Messenger


alt Принятие запроса
   System --> User: Получить положительный ответ
note left: Перейти к п.20
else Отклонение запроса
   System --> User: Получить отрицательный ответ
note left: Конец процесса
end
deactivate System

== Завершение процесса ==
User --> System: Подтверждение совместного путешествия
activate System
System -> System: Проверка подтверждения от обоих участников
alt Подтверждение от обоих
    System -> DB: Обновить статус путешествия
    activate DB
    DB --> System: Подтверждение
    deactivate DB
    System --> User: Совместное путешествие подтверждено
else Подтверждение только от одного
    System --> User: Ожидание подтверждения второго участника
end
deactivate System
@enduml


```
---
### Описание сценария использования

1. **User** создает профиль, отправляя запрос `POST /v1/user`.
2. **System** проверяет данные
3. **System** сохраняет данные в **Database**.



