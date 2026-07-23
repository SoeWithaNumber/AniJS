import type { Query } from "./internal/Query.js";
import type { Media } from "./internal/TypeInterfaces.js";
import { QueryBuilder } from "./QueryBuilder.js";

type AddField<T, K extends keyof Media> = T & Pick<Media, K>

class mediaQuery<TResult = {}> implements Query{
    private readonly queryData: QueryBuilder<Media> = new QueryBuilder;

    public id():mediaQuery<AddField<TResult, "id">>{
        
    }

    build(): string{
        
    }
}

export {mediaQuery}
