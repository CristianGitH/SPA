export class Requirement {
    constructor(public RequirementID: number,
        public ProjectID: number,
        public PriorityID: number,
        public DeveloperID: number,
        public Reach: string,
        public ApplicationDate: Date,
        public DevelopmentDays: number,
        public DevelopmentDate: Date,
        public TestingDate: Date){}
}
