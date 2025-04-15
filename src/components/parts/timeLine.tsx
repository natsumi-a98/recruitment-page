import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Box } from "@mui/material";

// タイムラインに表示する1日のスケジュールイベント一覧
const events = [
  { time: "08:00", content: "起床" },
  { time: "09:00", content: "出勤" },
  { time: "10:00", content: "始業" },
  { time: "12:00", content: "ランチライム" },
  { time: "13:00", content: "午後の業務開始" },
  { time: "19:00", content: "終業" },
  { time: "20:00", content: "帰宅" },
  { time: "21:30", content: "うぇぶくり学習" },
  { time: "23:30", content: "就寝" },
];

const ExampleTimeline = () => {
  return (
    <Box sx={{ width: "350px" }}>
      {/* MUIのTimelineコンポーネントでイベント一覧を表示 */}
      <Timeline sx={{ margin: "0", padding: "0" }}>
        {/* 各イベントを1つずつタイムラインアイテムとして表示 */}
        {events.map((event, index) => (
          <TimelineItem key={index}>
            {/* 左側に時間を表示するエリア（余白や配置を調整） */}
            <TimelineOppositeContent
              sx={{
                flex: "0 0 60px",
                textAlign: "right",
                paddingRight: "15px",
                paddingLeft: "0",
                color: "#0e0e0e",
              }}
            >
              {event.time}
            </TimelineOppositeContent>

            {/* 中央の線や丸を構成するセパレーター部分 */}
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: "#b0bec5" }} />
              {index < events.length - 1 && (
                <TimelineConnector sx={{ backgroundColor: "#b0bec5" }} />
              )}
            </TimelineSeparator>

            {/* 右側にイベント内容を表示 */}
            <TimelineContent color="#0e0e0e">{event.content}</TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};
export default ExampleTimeline;
