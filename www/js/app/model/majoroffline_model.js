var MajorofflineModel = {
    add: function (majors) {
        $.map(majors, function (major){
            majorParam = {
                m_id: major.m_id,
                m_name: major.m_name,
                m_desc: major.m_desc
            };
            persistence.add(new Tbl_major(majorParam));
        });
        persistence.flush();       
    },
    update: function (oldManjors, newMajors){
       $.map(newMajors, function (newMajor){
           var isNew = true;
           $.each(oldMajors, function(i, oldMajor){
               if(oldMajor.m_id() == newMajor.m_id){
                   console.log("Has Major Match");
                   isNew = false;
                   oldMajor.m_name(newMajor.m_name);
                   oldMajor.m_desc(newMajor.m_desc);     
                   return false;
               }else{
                   isNew = true;
               }
           });
           if(isNew){
               console.log("newMajor :", newMajor);
               MajorofflineModel.add(newMajor);
           }
       }) ;
       persistence.flush();
    },
    fetchAll: function (callback){
        Tbl_major.all().list(callback);
    }
};