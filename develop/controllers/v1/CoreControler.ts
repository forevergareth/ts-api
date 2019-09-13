// Routing Controllers Annotations
import { JsonController, Get, Controller, Param, OnUndefined } from "routing-controllers";
import User from "../../database/models/User";

@JsonController("/v1") // Create a controller prefix for each end point
export class CoreController {

  constructor(
    // Inject a dervice in a controler like this
    // private userRepository: UserRepository
  ) {
  }
  
  @Get("/users")
  getAll() {

    return User.query<User>();
  }
  
  @Get("/users/:name")
  createOne(@Param("name") name: string) {

    return User.query<User>().insert({firstName: name});
  }
}
