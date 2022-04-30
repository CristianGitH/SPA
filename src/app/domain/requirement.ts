export class Requirement {
    constructor(public RequirementID: number,
        public Reach: string,
        public ApplicationDate: Date,
        public DevelopmentDays: number,
        public DevelopmentDate: Date,
        public TestingDate: Date){}
}
