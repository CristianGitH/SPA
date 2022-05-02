export class Project {
  constructor(
    public CustomerId: number,
    public StateId: number,
    public ProjectId: number,
    public Names: string,
    public StartDate: Date,
    public FinishDate: Date,
    public Price: number,
    public AmountHours: number,) { }
}
