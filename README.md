# mongoose-mongodb-connecter
It's a nodeJS module that lets you connect to mongoDB really quick, so that you don't have to worry about depreciation(s)
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
