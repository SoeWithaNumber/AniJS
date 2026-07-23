export class QueryBuilder{
    public readonly queryFields = new Set<string>()
    
    addField(field: string): void{
        this.queryFields.add(field);
    }
    
}