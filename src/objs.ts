type Employee = {
  readonly id: number,
  name?: string,
  retire: (data: Date) => void
}

let employee: Employee = {
  id: 1, name: undefined, retire: (date: Date) => {
    console.log(date);
  }
};

//employee.id = 0;
employee.name = 'Ayus';
