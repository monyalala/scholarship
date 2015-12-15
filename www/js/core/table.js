function createTable() {
    var Tbl_major = persistence.define("tbl_major", {
        m_id: "INT",
        m_name: "TEXT",
        m_desc: "TEXT"
    });
    var Tbl_university = persistence.define("tbl_university", {
        uni_id: "INT",
        uni_name: "TEXT",
        uni_img_path: "TEXT",
        uni_map: "TEXT",
        uni_status: "INT",
        uni_desc: "TEXT",
        uni_logo_path: "TEXT",
        uni_shortcut: "TEXT"        
    });
}