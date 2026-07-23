import type { Query } from "./internal/Query.js";
import type { Media } from "./internal/TypeInterfaces.js";
import { QueryBuilder } from "./QueryBuilder.js";

class mediaQuery<RequestType = {}> implements Query{
    private readonly queryData: QueryBuilder = new QueryBuilder;

    public id():void{
        this.queryData.addField("id")
        type RequestType = Pick<Media, "id">
    }
    
    build(): string{
        
    }
}

export {mediaQuery}
