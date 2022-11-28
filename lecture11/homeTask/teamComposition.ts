import {
    DeveloperSpecialization,
    KindOfBusiness,
    KindOfCoffee,
    KindOfTesting,
    Rank,
    RankOfEnglish, StatusOfTask
} from "../components/enums/mainEnums";
import {Task} from "../components/interfaces/task";
let moment = require('moment-timezone');

type employee = Developer | ProjectManager | BusinessAnalyst | QAEngineer;

abstract class Employee {
    #name: string;
    #lastName: string;
    #age: number;
    #salary: number;
    #experience: number;
    #rank: Rank;
    #listOfTasks: Array<Task>;

    constructor(name: string, lastName: string, age: number, salary: number, experience: number, rank: Rank) {
        this.#name = name;
        this.#lastName = lastName;
        this.#age = age;
        this.#salary = salary;
        this.#experience = experience;
        this.#rank = rank;
        this.#listOfTasks = [];
    }

    get fullName(): string {
        return this.#name + ' ' + this.#lastName;
    }
    get age(): number {
        return this.#age;
    }
    get salary(): number {
        return this.#salary;
    }
    get experience(): number {
        return this.#experience;
    }
    get rank(): Rank {
        return this.#rank;
    }
    get listOfTasks(): Array<Task> {
        return this.#listOfTasks;
    }

    set salary(newSalary: number) {
        this.#salary = newSalary;
    }
    set rank(newRank: Rank) {
        this.#rank = newRank;
    }
    set listOfTasks(newList: Array<Task>) {
        this.#listOfTasks = newList;
    }

    getInfo(): string {
        return `Full name: ${this.fullName}\n` +
            `Age: ${this.age}\n` +
            `Salary: ${this.salary}$\n` +
            `Experience: ${this.experience} year\n` +
            `Rank: ${this.rank}\n`;
    }
    quitJob(): void {
        this.salary = 0;
        console.log('Now, I\'m unemployed and looking for new projects');
    }
    makeTask(task: Task, employee: employee): void {
        employee.listOfTasks.push(task);
    }
    changeStatusOfTask(idOfTask: number, newStatus: StatusOfTask, newDescription: string, employee: employee) {
        let newTask = this.listOfTasks.find(task => task.id === idOfTask);
        if (newTask) {
            newTask.status = newStatus;
            newTask.description = newDescription;
            employee.listOfTasks.push(newTask);
            this.listOfTasks = this.listOfTasks.filter(task => task.id !== idOfTask);
        } else {
            console.log('You don\'t have task with given id');
        }
    }

    abstract getResultOfPassedInterview(resultFromCompany: boolean): boolean;
    abstract improveRank(resultFromCompany: boolean): any;
}

class Developer extends Employee {
    #specialization: DeveloperSpecialization;
    #PC: string;
    #IDE: string;

    constructor(name: string, lastName: string, age: number, salary: number, experience: number, rank: Rank, specialization: DeveloperSpecialization, PC: string, IDE: string) {
        super(name, lastName, age, salary, experience, rank);
        this.#specialization = specialization;
        this.#PC = PC;
        this.#IDE = IDE;
    }

    get specialization(): DeveloperSpecialization {
        return this.#specialization;
    }
    get PC(): string {
        return this.#PC;
    }
    get IDE(): string {
        return this.#IDE;
    }

    set specialization(newSpecialization: DeveloperSpecialization) {
        this.#specialization = newSpecialization;
    }
    set PC(newPC: string) {
        this.#PC = newPC;
    }
    set IDE(newIDE: string) {
        this.#IDE = newIDE;
    }

    getInfo(): string {
        return super.getInfo() +
            `Specialization: ${this.specialization}\n` +
            `PC: ${this.PC}\n` +
            `IDE: ${this.IDE}`;
    }
    getResultOfPassedInterview(resultFromCompany: boolean): boolean {
        if (resultFromCompany) {
            console.log(`You passed interview, your technical skills suitable for our requirements`);
            return true;
        } else if (!resultFromCompany && this.experience < 1) {
            console.log(`Sorry, you have less experience, than we need`);
            return false;
        }
        console.log(`Sorry, but we need to give you negative feedback`);
        return false;
    }
    improveRank(resultFromCompany: boolean): any {
        if (this.getResultOfPassedInterview(resultFromCompany)) {
            switch (this.rank) {
                case Rank.Trainee: {
                    this.rank = Rank.Junior;
                    this.salary += 450;
                    return {rank: this.rank, salary: this.salary};
                }
                case Rank.Junior: {
                    this.rank = Rank.Middle;
                    this.salary += 1200;
                    return {rank: this.rank, salary: this.salary};
                }
                case Rank.Middle: {
                    this.rank = Rank.Senior;
                    this.salary += 1500;
                    return {rank: this.rank, salary: this.salary};
                }
                case Rank.Senior: {
                    this.rank = Rank.Lead;
                    this.salary += 1000;
                    return {rank: this.rank, salary: this.salary};
                }
                case Rank.Lead: {
                    console.log('You have highest rank of programmers');
                    return {rank: this.rank, salary: this.salary};
                }
            }
        }
        console.log('You must work harder to improve yourself rank');
        return {rank: this.rank, salary: this.salary};
    }
    writeSolutionForTask(timeMs: number) {
        setTimeout(() => console.log(`${this.fullName} wrote cleaning code and fulfilled task`), timeMs);
    }
    giveThanksToPMForCoffee(): string {
        return 'Tnx a lot my lovely PM';
    }
    static calculatePaymentsOfAllDevelopers(arrayOfDevelopers: Array<Developer>): number {
        let payments: number = 0;
        for (let developer of arrayOfDevelopers) {
            payments += developer.salary;
        }
        return payments;
    }
}

class BusinessAnalyst extends Employee {
    #programForWorkWithDocumentation: string;
    #mainDirectionInBusiness: KindOfBusiness;

    constructor(name: string, lastName: string, age: number, salary: number, experience: number, rank: Rank, programForWork: string, mainDirectionInBusiness: KindOfBusiness) {
        super(name, lastName, age, salary, experience, rank);
        this.#programForWorkWithDocumentation = programForWork;
        this.#mainDirectionInBusiness = mainDirectionInBusiness;
    }

    get programForWorkWithDocumentation(): string {
        return this.#programForWorkWithDocumentation;
    }
    get mainDirectionInBusiness(): KindOfBusiness {
        return this.#mainDirectionInBusiness;
    }

    set mainDirectionInBusiness(newDirection: KindOfBusiness) {
        this.#mainDirectionInBusiness = newDirection;
    }

    getInfo(): string {
        return super.getInfo() +
            `Program, which using for documentation: ${this.programForWorkWithDocumentation}\n` +
            `Main direction in business: ${this.mainDirectionInBusiness}`;
    }
    getResultOfPassedInterview(resultFromCompany: boolean): boolean {
        if (resultFromCompany) {
            console.log(`You passed interview, your method for analyzing customer requirements is appropriate for our company`);
            return true;
        } else if (!resultFromCompany && this.programForWorkWithDocumentation !== 'Microsoft Word') {
            console.log(`Sorry, you have wrong program for work with documentation, than we need`);
            return false;
        }
        console.log(`Sorry, but we need to give you negative feedback`);
        return false;
    }
    improveRank(resultFromCompany: boolean): any {
        if (this.getResultOfPassedInterview(resultFromCompany)) {
            switch (this.rank) {
                case Rank.Trainee: {
                    this.rank = Rank.Junior;
                    this.salary += 200;
                    return {rank: this.rank, salary: this.salary};
                }
                case Rank.Junior: {
                    this.rank = Rank.Middle;
                    this.salary += 700;
                    return {rank: this.rank, salary: this.salary};
                }
                case Rank.Middle: {
                    this.rank = Rank.Senior;
                    this.salary += 1000;
                    return {rank: this.rank, salary: this.salary};
                }
                case Rank.Senior: {
                    this.rank = Rank.Lead;
                    this.salary += 1300;
                    return {rank: this.rank, salary: this.salary};
                }
                case Rank.Lead: {
                    console.log('You have highest rank of BA');
                    return {rank: this.rank, salary: this.salary};
                }
            }
        }
        console.log('You must work harder to improve yourself rank');
        return {rank: this.rank, salary: this.salary};
    }
    makeRequirementsForSoftware(arrayOfRequirements: Array<string>): any {
        let objectOfRequirements: any = {};
        let index: number = 1;
        for (let requirement of arrayOfRequirements) {
            objectOfRequirements[`${index}`] = `Requirement ${index}`;
            index++;
        }
        return objectOfRequirements;
    }
    drawUpReport(): void {
        console.log(`${this.fullName} make the report of requirements for customer software`);
    }
    static calculatePaymentsOfAllBusinessAnalysts(arrayOfAnalysts: Array<BusinessAnalyst>): number {
        let payments: number = 0;
        for (let businessAnalyst of arrayOfAnalysts) {
            payments += businessAnalyst.salary;
        }
        return payments;
    }
}

class ProjectManager extends Employee {
    #favoriteCoffee: KindOfCoffee;
    #english: RankOfEnglish;

    constructor(name: string, lastName: string, age: number, salary: number, experience: number, rank: Rank, favoriteCoffee: KindOfCoffee, english: RankOfEnglish) {
        super(name, lastName, age, salary, experience, rank);
        this.#favoriteCoffee = favoriteCoffee;
        this.#english = english;
    }

    get favoriteCoffee(): KindOfCoffee {
        return this.#favoriteCoffee;
    }
    get english(): RankOfEnglish {
        return this.#english;
    }

    set favoriteCoffee(changedFavoriteCoffee: KindOfCoffee) {
        this.#favoriteCoffee = changedFavoriteCoffee;
    }
    set english(upRank: RankOfEnglish) {
        this.#english = upRank;
    }

    getInfo(): string {
        return super.getInfo() +
            `Favorite coffee: ${this.favoriteCoffee}\n` +
            `English: ${this.english}`;
    }
    getResultOfPassedInterview(resultFromCompany: boolean): boolean {
        if (resultFromCompany) {
            console.log(`You passed interview, your method for analyzing customer requirements is appropriate for our company`);
            return true;
        } else if (!resultFromCompany && this.english < RankOfEnglish.Intermediate) {
            console.log(`Sorry, you have lesser level of English for communicating with customer`);
            return false;
        }
        console.log(`Sorry, but we need to give you negative feedback`);
        return false;
    }
    improveRank(resultFromCompany: boolean): any {
        if (this.getResultOfPassedInterview(resultFromCompany)) {
            switch (this.rank) {
                case Rank.Trainee: {
                    this.rank = Rank.Junior;
                    this.salary += 350;
                    return {rank: this.rank, salary: this.salary};
                }
                case Rank.Junior: {
                    this.rank = Rank.Middle;
                    this.salary += 500;
                    return {rank: this.rank, salary: this.salary};
                }
                case Rank.Middle: {
                    this.rank = Rank.Senior;
                    this.salary += 700;
                    return {rank: this.rank, salary: this.salary};
                }
                case Rank.Senior: {
                    this.rank = Rank.Lead;
                    this.salary += 1000;
                    return {rank: this.rank, salary: this.salary};
                }
                case Rank.Lead: {
                    console.log('You have highest rank of PM');
                    return {rank: this.rank, salary: this.salary};
                }
            }
        }
        console.log('You must work harder to improve yourself rank');
        return {rank: this.rank, salary: this.salary};
    }
    makeFavoriteCoffeeForFavoriteDeveloper(develop: Developer): void {
        console.log('This is joke =)');
        console.log(`Bi-Bi-Bi, ${this.favoriteCoffee} is ready to drink for favorite developer: ${develop.fullName}`, develop.giveThanksToPMForCoffee());
    }
    makeCallWithCustomerAndTeam(countryOfCustomer: string, cityOfCustomer: string, countryPM: string, cityPM: string): boolean {
        return moment().tz(`${countryOfCustomer}/${cityOfCustomer}`).format() === moment().tz(`${countryPM}/${cityPM}`).format();
    }
    static calculatePaymentsOfAllProjectManagers(arrayOfProjectManagers: Array<ProjectManager>): number {
        let payments: number = 0;
        for (let PM of arrayOfProjectManagers) {
            payments += PM.salary;
        }
        return payments;
    }
}

class QAEngineer extends Employee{
    #mainMethodOfTesting: KindOfTesting;
    #PC: string;

    constructor(name: string, lastName: string, age: number, salary: number, experience: number, rank: Rank, PC: string, methodOfTesting: KindOfTesting) {
        super(name, lastName, age, salary, experience, rank);
        this.#mainMethodOfTesting = methodOfTesting;
        this.#PC = PC;
    }

    get mainMethodOfTesting(): KindOfTesting {
        return this.#mainMethodOfTesting;
    }
    get PC(): string {
        return this.#PC;
    }

    set PC(newPC: string) {
        this.#PC = newPC;
    }

    getInfo(): string {
        return super.getInfo() +
            `Main method of testing: ${this.mainMethodOfTesting}\n` +
            `PC: ${this.PC}`;
    }
    getResultOfPassedInterview(resultFromCompany: boolean): boolean {
        if (resultFromCompany) {
            console.log(`You passed interview, your method of testing suitable for our requirements`);
            return true;
        } else if (!resultFromCompany && this.experience < 1) {
            console.log(`Sorry, you have less experience, than we need`);
            return false;
        }
        console.log(`Sorry, but we need to give you negative feedback`);
        return false;
    }
    improveRank(resultFromCompany: boolean): any {
        if (this.getResultOfPassedInterview(resultFromCompany)) {
            switch (this.rank) {
                case Rank.Trainee: {
                    this.rank = Rank.Junior;
                    this.salary += 250;
                    return {rank: this.rank, salary: this.salary};
                }
                case Rank.Junior: {
                    this.rank = Rank.Middle;
                    this.salary += 400;
                    return {rank: this.rank, salary: this.salary};
                }
                case Rank.Middle: {
                    this.rank = Rank.Senior;
                    this.salary += 900;
                    return {rank: this.rank, salary: this.salary};
                }
                case Rank.Senior: {
                    this.rank = Rank.Lead;
                    this.salary += 1300;
                    return {rank: this.rank, salary: this.salary};
                }
                case Rank.Lead: {
                    console.log('You have highest rank of QA engineer');
                    return {rank: this.rank, salary: this.salary};
                }
            }
        }
        console.log('You must work harder to improve yourself rank');
        return {rank: this.rank, salary: this.salary};
    }
    writeTestCase(timeMs: number) {
        setTimeout(() => console.log('All test cases were wrote'), timeMs);
    }
    reportTheBugs(errorMessage: string) {
        try {
            throw new Error(errorMessage);
        }
        catch (Error) {
            console.log(`Solution has a few bugs: ` + errorMessage);
        }
    }
    static calculatePaymentsOfAllQAEngineer(arrayOfQAEngineers: Array<QAEngineer>): number {
        let payments: number = 0;
        for (let QAEngineer of arrayOfQAEngineers) {
            payments += QAEngineer.salary;
        }
        return payments;
    }
}

export {Developer, BusinessAnalyst, ProjectManager, QAEngineer}

