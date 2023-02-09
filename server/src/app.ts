import Express from "express";
import {buildSchema} from "type-graphql";
import {ApolloServer} from "apollo-server-express";
import {ReservationResolver} from "./resolvers/Reservation.Resolver";

class App {
  public async listen() {
    const schema = await buildSchema({
      resolvers: [ReservationResolver],
      emitSchemaFile: true
    });

    const app = Express();

    const server = new ApolloServer({
      schema
    });

    server.applyMiddleware({ app });

    app.listen(4000, () =>
        console.log("Server is running on http://localhost:4000/graphql")
    );
  }

}

export default App;
