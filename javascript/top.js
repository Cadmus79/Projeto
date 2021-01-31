var cloneMedia = $('.media').clone();

/*$('#btSearch').on('click', function(){

	var valorPesquisa = $('#pesquisa').val();
	$('.panel-title').text('Resultados da pesquisa de "' + valorPesquisa + '"');
*/
	$('.media-list').html('');

	$.ajax({
		method: "GET",
        url: "http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=portugal&limit=10&api_key=9ce20f16bde36a8f5734ac6f62463ebe&format=json"
	})
	.done(function(msg){
		//console.log('msg');
		console.log(msg);

		msg.tracks.track.forEach(function(result){
			var liMedia = cloneMedia.clone();

			$('a', liMedia).attr('href', result.url);
			$('#image', liMedia).attr('src', result.image[2]["#text"])
			$('.title', liMedia).text(result.name);
			$('.Artista', liMedia).text(result.artist.name);
			$('.Ouvintes', liMedia).text(result.listeners);
			
			$('.media-list').append(liMedia);
		})
});

