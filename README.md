# NODE-CITIES-INFO

## Quick Start

Get started developing...

```shell
# install deps
npm install

# run in development mode
npm run dev

```

---

## Install Dependencies

Install all package dependencies (one time operation)

```shell
npm install
```

## Compile .env file

Rename .env.example in .env, and compile with your credential so it looks like this

```shell
PORT = 3000
API_WEATHER_KEY = <YOUR_API_KEY> 
API_YELP_KEY = <YOUR_API_KEY> 
```
###  API_WEATHER_KEY reference https://openweathermap.org/api
###  API_YELP_KEY reference https://www.yelp.com/developers/documentation/v3/business

## Run It
#### Run in *development* mode:
Runs the application is development mode.

```shell
npm run dev
```

## Try It
* Open your browser to [http://localhost:3000](http://localhost:3000)
* Invoke the `/api/cities-info` endpoint 
  ```shell
  curl http://localhost:3000/api/cities-info
  ```

