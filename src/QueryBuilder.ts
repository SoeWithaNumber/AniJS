export class QueryBuilder{
    protected queryFields = new Set<string>()
    
    addField(field: string): void{
        this.queryFields.add(field);
    }
    
}