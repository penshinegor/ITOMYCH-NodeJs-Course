import {BusinessAnalyst, Developer, ProjectManager, QAEngineer} from "./teamComposition";
import {
    DeveloperSpecialization,
    KindOfBusiness,
    KindOfCoffee,
    KindOfTesting,
    Rank,
    RankOfEnglish,
    StatusOfTask
} from "../components/enums/mainEnums";

class Team {
    projectManager: ProjectManager;
    businessAnalyst: BusinessAnalyst;
    frontEndDeveloper: Developer;
    backEndDeveloper: Developer;
    QAEngineer: QAEngineer;

    constructor() {
        this.projectManager = new ProjectManager('Bridgette', 'Fusion', 23, 1500, 2.5, Rank.Middle, KindOfCoffee.BlackIvoryCoffee, RankOfEnglish.Advanced);
        this.businessAnalyst = new BusinessAnalyst('John', 'Smith', 25, 2200, 3, Rank.Senior, 'Microsoft Word', KindOfBusiness.Outstuff);
        this.frontEndDeveloper = new Developer('Bob', 'Trumper', 29, 5000, 7, Rank.Lead, DeveloperSpecialization.FrontEnd, 'MacBook Pro', 'Visual Studio Code');
        this.backEndDeveloper = new Developer('Andrew', 'Jackson', 22, 1000, 1.5, Rank.Junior, DeveloperSpecialization.BackEnd, 'HP Laptop', 'Visual Studio 2022');
        this.QAEngineer = new QAEngineer('Patton', 'Planon', 45, 3500, 12, Rank.Senior, 'Lenovo', KindOfTesting.BlackBox);
    }

    calculateAllPaymentForTeam(): number {
        return ProjectManager.calculatePaymentsOfAllProjectManagers([this.projectManager]) +
            BusinessAnalyst.calculatePaymentsOfAllBusinessAnalysts([this.businessAnalyst]) +
            Developer.calculatePaymentsOfAllDevelopers([this.frontEndDeveloper]) +
            Developer.calculatePaymentsOfAllDevelopers([this.backEndDeveloper]) +
            QAEngineer.calculatePaymentsOfAllQAEngineer([this.QAEngineer]);
    }
}

let team = new Team();

team.projectManager.makeTask({ id: 1, status: StatusOfTask.TODO, description: 'Write solution for task'}, team.frontEndDeveloper);
team.projectManager.makeTask({ id: 2, status: StatusOfTask.TODO, description: 'Write solution for task with React'}, team.frontEndDeveloper);
team.frontEndDeveloper.changeStatusOfTask(1, StatusOfTask.Done, 'Give me a cup of coffee', team.projectManager);
console.log(team.frontEndDeveloper.listOfTasks);
console.log(team.projectManager.listOfTasks);
