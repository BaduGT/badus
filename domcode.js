$('#leftnavbar') // search element dengan id "leftnavbar"
    .find("a.nav-link."+page) // cari child element <a> dengan class "nav-link" dan "nama-halaman"
    .addClass("active") // tambah class "active" pada child element tersebut
$('#header')
    .find("li.nav-item."+page)
    .addClass("active")
;
