export interface Team {
  teamName: string;
  clients: Client[];
}

export interface Client {
  clientName: string;
  orgoid: string;
  users: User[];
}

export interface User {
  username: string;
  name: string;
  aoid: string;
  role: string;
  password: string;
  owner: { team: string };
  notes?: string;
  clientName: string;
  orgoid: string;
  sor: string;
}
