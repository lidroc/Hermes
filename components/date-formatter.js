import { formatDate } from "@/lib/format";

export default function DateFormatter({ dateString }) {
  const formattedDate = formatDate(dateString);
  return <time dateTime={dateString}>{formattedDate}</time>;
}
