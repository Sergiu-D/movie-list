export default function formatRuntime(rt) {
  const hour = Math.trunc(rt / 60);
  const minutes = rt % 60;

  const formatHour = (h) => {
    if (h === 0) return ``;
    if (h === 1) return `0${h} hour`;
    if (h < 10) return `0${h} hours`;
    if (h > 10) return `${h} hours`;
  };

  const formatMinutes = (m) => {
    if (m === 0) return ``;
    if (m === 1) return `0${m} minute`;
    if (m < 10) return `0${m} minutes`;
    if (m > 10) return `${m} minutes`;
  };

  return !hour && !minutes
    ? `No info`
    : `${formatHour(hour)} ${formatMinutes(minutes)}`;
}
