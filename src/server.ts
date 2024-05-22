import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function main() {

    try {
        await mongoose.connect(config.db_url as string);


    app.listen(config.port, () => {
        console.log(`L2B3A2 app listening on port ${config.port}`)
      })
    } catch (err) {
        console.log(err);
    }
        
}

  main();