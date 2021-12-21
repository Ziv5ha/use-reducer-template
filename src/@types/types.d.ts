declare namespace UserType {
  interface action {
    type: string;
    payload: { name: string; age: number; queryName?: string };
  }
  type state = { name: string; age: number }[];
}
