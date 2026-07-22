import type { Query } from "./internal/Query.js";
import type { Media } from "./internal/TypeInterfaces.js";
import { QueryBuilder } from "./QueryBuilder.js";
class mediaQuery<TResult = Media> implements Query<TResult>{
    private readonly queryData: QueryBuilder = new QueryBuilder;
    build(): string{

    }
}

export {mediaQuery}
