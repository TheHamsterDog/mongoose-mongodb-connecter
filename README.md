# mongoose-mongodb-connecter
It's a nodeJS module that lets you connect to mongoDB without having to worry about depreciation(s)
## Usage

You just have to simply import it into your nodejs app like this:

```
const connectDB = require("mongoose-mongodb-connecter");
```
After importing it, you just have to call it by passing your mongoose instance and the uri to your mongoDB database, as an argument, like this:

```
const mongoose = require("mongoose");
const dbURI = config.get("dbURI");
connectDB(mongoose, dbURI)

```
## Links
##### [GitHub](https://github.com/TheHamsterDog/mongoose-mongodb-connecter)
##### [NPM](https://www.npmjs.com/package/mongoose-mongodb-connecter)
