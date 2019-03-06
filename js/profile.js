

  $("input[type='radio']").on( 'click', function(){
    if ($("#description").is(":checked")) {
         $("#isi_deskripsi").css( "display","block" );
         $("#isi_experience").css( "display","none" );
         $("#isi_hobby").css( "display","none" );
         $("#isi_academic").css( "display","none" );
         $("#isi_achievement").css( "display","none" );
         $("#isi_skill").css( "display","none" );
         $("#isi_bucketlist").css( "display","none" );
         $("#isi_project").css( "display","none" );





    } else if ($("#experience").is(":checked")) {
         $("#isi_deskripsi").css( "display","none" );
         $("#isi_experience").css( "display","block" );
         $("#isi_hobby").css( "display","none" );
         $("#isi_academic").css( "display","none" );
         $("#isi_achievement").css( "display","none" );
         $("#isi_skill").css( "display","none" );
         $("#isi_bucketlist").css( "display","none" );
         $("#isi_project").css( "display","none" );



} else if ($("#hobby").is(":checked")) {
         $("#isi_deskripsi").css( "display","none" );
         $("#isi_experience").css( "display","none" );
         $("#isi_hobby").css( "display","block" );
         $("#isi_academic").css( "display","none" );
         $("#isi_achievement").css( "display","none" );
         $("#isi_skill").css( "display","none" );
         $("#isi_bucketlist").css( "display","none" );
         $("#isi_project").css( "display","none" );



} else if ($("#academic").is(":checked")) {
         $("#isi_deskripsi").css( "display","none" );
         $("#isi_experience").css( "display","none" );
         $("#isi_hobby").css( "display","none" );
         $("#isi_academic").css( "display","block" );
         $("#isi_achievement").css( "display","none" );
         $("#isi_skill").css( "display","none" );
         $("#isi_bucketlist").css( "display","none" );
         $("#isi_project").css( "display","none" );



} else if ($("#achievement").is(":checked")) {
         $("#isi_deskripsi").css( "display","none" );
         $("#isi_experience").css( "display","none" );
         $("#isi_hobby").css( "display","none" );
         $("#isi_academic").css( "display","none" );
         $("#isi_achievement").css( "display","block" );
         $("#isi_skill").css( "display","none" );
         $("#isi_bucketlist").css( "display","none" );
         $("#isi_project").css( "display","none" );



} else if ($("#skill").is(":checked")) {
         $("#isi_deskripsi").css( "display","none" );
         $("#isi_experience").css( "display","none" );
         $("#isi_hobby").css( "display","none" );
         $("#isi_academic").css( "display","none" );
         $("#isi_achievement").css( "display","none" );
         $("#isi_skill").css( "display","block" );
         $("#isi_bucketlist").css( "display","none" );
         $("#isi_project").css( "display","none" );



}else if ($("#bucketlist").is(":checked")) {
         $("#isi_deskripsi").css( "display","none" );
         $("#isi_experience").css( "display","none" );
         $("#isi_hobby").css( "display","none" );
         $("#isi_academic").css( "display","none" );
         $("#isi_achievement").css( "display","none" );
         $("#isi_skill").css( "display","none" );
         $("#isi_bucketlist").css( "display","block" );
         $("#isi_project").css( "display","none" );



}else if ($("#project").is(":checked")) {
         $("#isi_deskripsi").css( "display","none" );
         $("#isi_experience").css( "display","none" );
         $("#isi_hobby").css( "display","none" );
         $("#isi_academic").css( "display","none" );
         $("#isi_achievement").css( "display","none" );
         $("#isi_skill").css( "display","none" );
         $("#isi_bucketlist").css( "display","none" );
         $("#isi_project").css( "display","block" );
}
});