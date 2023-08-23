
  export class Task{
    public id?: string
    constructor(
      public title: string,
      public description: string,
      public startDate: Date,
      public endDate: Date,
      public priority: number){}
  }


