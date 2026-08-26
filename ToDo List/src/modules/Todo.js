import { format, parseISO } from "date-fns";

export class Todo {
  constructor(
    title,
    description,
    dueDate,
    priority,
    notes = "",
    completed = false,
  ) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.completed = completed;
  }

  toggleComplete() {
    this.completed = !this.completed;
  }

  updateDetails(updateFields) {
    Object.assign(this, updateFields);
  }
}
