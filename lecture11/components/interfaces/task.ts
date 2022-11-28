import {StatusOfTask} from "../enums/mainEnums";

export interface Task {
    id: number;
    description: string;
    status: StatusOfTask;
}