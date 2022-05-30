import { Pipe, PipeTransform } from "@angular/core";
import { format, parse } from "date-fns";

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: string, formatString: string, dateFormat: string): unknown {

    if (value === undefined || value === null) {
      return "";
    }

    let date = parse(value, formatString, new Date());
    if (!isNaN(date.getTime())) {
      return format(date, dateFormat);
    }

    date = new Date(value);
    if (!isNaN(date.getTime())) {
      return format(date, dateFormat);
    }

    return value;
  }

}
