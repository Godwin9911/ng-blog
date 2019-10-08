export class Users {
  id: number;
  name: string;
  username: string;
  email: string;
  address: any;
  phone: string;
  website: string;
  company: any;
}

export class AppError {
  statusText: string;
  message: string;
}

export class Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

