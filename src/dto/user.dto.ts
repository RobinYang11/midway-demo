import { Rule } from "@midwayjs/validate";


export class UserLoginDTO {
  @Rule({})
  username: string;

  @Rule({})
  password: string;
}

export class UserDto{
  @Rule({})
  username: string;

  @Rule({})
  password: string;
}