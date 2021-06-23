# mongoose-mongodb-connecter
It's a nodeJS module that lets you connect to mongoDB without having to worry about depreciation(s)
## Usage

You just have to simply import it into your nodejs app like this:

```
const connectDB = require("mongoose-mongodb-connecter");
```
and then call it by giving the uri to your mongoDB database like this:

```
const dbURI = config.get("dbURI");
connectDB(dbURI)

```
## Links
##### [GitHub]("https://github.com/TheHamsterDog/mongoose-mongodb-connecter")
##### [NPM]("https://www.npmjs.com/package/mongoose-mongodb-connecter")
