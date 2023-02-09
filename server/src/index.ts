import "reflect-metadata";
import { ottoman } from "./ottoman-global-config";
import App from './app';
const app = new App();

const main = async () => {
  try {
    await ottoman.connect({
      bucketName: 'travel-sample',
      connectionString: 'couchbase://localhost:8091',
      username: 'Lee',
      password: '123456',
    });
    await ottoman.start();
    app.listen();
  } catch (e) {
    console.log(e)
  }
}

main();



