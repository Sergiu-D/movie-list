export default function formatRuntime(rt) {
  const hour = Math.trunc(rt / 60);
  const minutes = rt % 60;

  const formatHour = (h) => {
    if (h === 0) return ``;
    if (h === 1) return `0${h} hour`;
    if (h < 10) return `0${h} hours`;

    return `${hour} hours and`;
  };

  const formatMinutes = (n) => {
    if (n === 0) return ``;
    if (n === 1) return `0${n} minute`;
    if (n < 10) return `0${n} minutes`;

    return `${n} minutes`;
  };
  // console.log("ora: " + hour)

  return !hour && !minutes
    ? `No info`
    : `${formatHour(hour)} ${formatMinutes(minutes)}`;
}
