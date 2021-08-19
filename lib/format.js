import { parseISO, format } from "date-fns";

export function formatDate(dateString) {
  const date = parseISO(dateString);
  return format(date, "LLLL d, yyyy");
}

export function formatPath(path, replace = "") {
  return path.replace(/\.md$/, replace);
}
