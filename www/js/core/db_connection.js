function connectionDB(dbName, size){
    persistence.store.websql.config(
            persistence,
            dbName, 
            '0.0.1',  //DB version
            'scholarship database', //Display DB name
            size, 
            0, 
            2);
    persistence.schemaSync();    
}