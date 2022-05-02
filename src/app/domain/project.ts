export class Project {
  constructor(
    public CustomerID: number,
    public StateID: number,
    public ProjectID: number,
    public Names: string,
    public StartDate: Date,
    public FinishDate: Date,
    public Price: number,
    public AmountHours: number,) { }
}
