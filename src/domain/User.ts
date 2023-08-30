interface User {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  profilePictureURL: string;
}

export type UserToInsert = Omit<User, "id">;

export interface CreateUserPayload {
  name: string;
  email: string;
  address: string;
  phoneNumber: string;
  fileString: string;
}

export default User;
