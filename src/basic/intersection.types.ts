type RH = {
  peoplesRH: number;
  sectorsRH: Array<string>;
  Director: string;
};

type Managment = {
  peoplesManagment: number;
  sectorsManagment: Array<string>;
  CEO: string;
};

type Company = RH & Managment;

const company = {
  peoplesRH: 100,
  peoplesManagment: 10,
  sectorsRH: ['peoples', 'benefit', 'journey'],
  sectorsManagment: ['executives', 'directors', 'partner'],
  Director: 'Joao Braga',
  CEO: 'Raphael Angel',
};
