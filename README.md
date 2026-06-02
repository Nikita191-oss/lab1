# Лабораторная работа 1

Это шаблон для первой лабораторной: web-решение лежит в Git, тест запускается при `push` в ветку `main`, а после успешного теста файлы автоматически обновляются на сервере.

## Что здесь есть

- `src/` - исходники сайта.
- `tests/` - тест приложения.
- `scripts/build.mjs` - сборка в папку `dist/`.
- `.github/workflows/deploy.yml` - CI/CD workflow.

## Как повторить

1. Создай репозиторий и положи файлы из этого шаблона.
2. Убедись, что ветка называется `main`.
3. На сервере создай папку для сайта, например `/var/www/lab1`.
4. На Ubuntu Server установи self-hosted runner из GitHub Actions.
5. Дай пользователю runner доступ на запись в `/var/www/lab1`.
6. Сделай `push` в `main`.
7. GitHub Actions выполнит `npm install`, затем `npm test`, потом `npm run build`, а после этого скопирует `dist/` в `/var/www/lab1`.

## Как настроить сервер

Если у тебя Apache, просто укажи `DocumentRoot` на папку `/var/www/lab1`.

Пример команд на сервере:

```bash
sudo mkdir -p /var/www/lab1
sudo chown -R nikita:nikita /var/www/lab1
```

## Как работает pipeline

- При `push` в `main` запускается workflow.
- Сначала ставятся зависимости.
- Затем выполняется `npm test`.
- Если тесты проходят, выполняется `npm run build`.
- После этого `rsync` копирует `dist/` на сервер.

## Что показать в отчёте

- Схему: Git -> CI/CD -> сервер.
- Скриншот workflow в GitHub Actions.
- Скриншот сайта после деплоя.
- Команду установки self-hosted runner.

## Если хочешь сделать это проще

Можно заменить GitHub Actions на GitLab CI. Логика останется той же: тесты проходят, потом деплой.
