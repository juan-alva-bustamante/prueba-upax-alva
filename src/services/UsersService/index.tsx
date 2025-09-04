export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export class UsersService {
  public async getUsers() {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();

      return data as IUser[];
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  }
}
