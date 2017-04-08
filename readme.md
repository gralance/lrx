## LRX

### Environment require
- [PHP 7 or up](http://php.net/)
- [Composer](https://getcomposer.org/)
- [Laravel 5.4 or up](https://laravel.com)
- [Node 6.9.1 or up](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/zh-Hans/)

### Install
clone LRX to your computer
```sh
git clone https://github.com/sexyoung/lrx.git
```

### Enter lrx folder
```sh
cd folder
```

### Install laravel vendor
```sh
composer install
```

### Enter client folder
```sh
cd client
```

### Install front-end packages
```sh
yarn
```

### Run Laravel server
Go to project root folder, then
```sh
php artison serve
```

### Run front-end server
Go client folder, then
```sh
yarn start
```

### deploy production
Go client folder, then
```sh
yarn run build
```

Go to project root folder, then
```sh
php artison serve
```

### Folder intro
```
app/
bootstrap/
client/ ← front-end root folder
  src/
    app/
      ...
      routes.js ← front-end route configure
  test/
  ...
config/
database/
public/
resources/
routes/
  ...
  web.php  ← backend route configure
  api.php  ← backend api route configure
  ...
storage/
tests/
.env
```
