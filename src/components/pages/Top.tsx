import { FC, useEffect, useState } from "react";
import styles from "@styles/components/Top.module.scss";
import { RepositoryFactory } from "src/repositories/RepositoryFactory";
import { Event } from "src/repositories/CalendarRepository";

const calendarRepository = RepositoryFactory.get("calendar");

export const Top: FC = () => {
  const [events, setEvents] = useState<Event[]>();

  useEffect(() => {
    (async () => {
      try {
        const res = await calendarRepository.getEvents();
        const data = res.data as Event[];
        setEvents(data);
      } catch (e) {
        alert("Google Calendarへの接続に失敗しました");
      }
    })();
  }, []);

  return (
    <div className={styles.container}>
      {events ? (
        <ul>
          {events.map((event) => (
            <li key={event.start_time + event.title} className={styles.list}>
              <div className={styles.startTime}>
                {`${new Date(event.start_time)
                  .getHours()
                  .toString()
                  .padStart(2, "0")} : ${new Date(event.start_time)
                  .getMinutes()
                  .toString()
                  .padStart(2, "0")}`}
              </div>
              <div className={styles.eventTitle}>{event.title}</div>
            </li>
          ))}
        </ul>
      ) : (
        <div>今日の予定はありません</div>
      )}
    </div>
  );
};

// const initEvents: Event[] = [
//   { start_time: "2022-11-24T13:00:00+09:00", title: "テスト" },
//   { start_time: "2022-11-24T14:00:00+09:00", title: "テスト2" },
//   { start_time: "2022-11-24T15:00:00+09:00", title: "テスト4" },
//   { start_time: "2022-11-24T16:00:00+09:00", title: "テスト5" },
//   { start_time: "2022-11-24T17:00:00+09:00", title: "テスト6" },
// ];
