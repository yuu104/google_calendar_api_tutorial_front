import Repository from "./Repository";

const resource = "/calendar";

export type Event = {
  start_time: string;
  title: string;
};

const getEvents = () => {
  return Repository.get(resource);
};

export const calendarRepository = { getEvents };
