import { calendarRepository } from "./CalendarRepository";

const repositories = {
  calendar: calendarRepository,
};

type TypeOfRepositories = keyof typeof repositories;

export const RepositoryFactory = {
  get: (name: TypeOfRepositories) => repositories[name],
};
