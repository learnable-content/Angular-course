import { Pipe, PipeTransform } from "@angular/core";
import { UniverseEvent } from "./universe-event";

@Pipe({
    name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {
    transform(events: Array<UniverseEvent>, selectedCategory: string): Array<UniverseEvent> {
        if (selectedCategory === 'events') {
            return events;
        }
        return events.filter(event => event.category === selectedCategory);
    }
};
