import * as dayjs from "dayjs"

export const formatDate = (date) => {
  return dayjs(date).format("DD-MMM-YYYY").toUpperCase()
}
