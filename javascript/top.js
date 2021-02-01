var cloneMedia = $('.media').clone();

$('.media-list').html('');



$.ajax({
		method: "GET",
		url: "http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=portugal&limit=10&api_key=9ce20f16bde36a8f5734ac6f62463ebe&format=json"
	})
	.done(function (msg) {
		console.log(msg);

		msg.tracks.track.forEach(function (result) {
			var liMedia = cloneMedia.clone();

			
			$('#image', liMedia).attr('src', result.image[2]["#text"])
			$('.title', liMedia).text(result.name);
			$('.Artista', liMedia).text(result.artist.name);
			$('.Ouvintes', liMedia).text(result.listeners);
			$(".add", liMedia).click(function () {
				if (!localStorage.getItem("favoritos")) localStorage.setItem("favoritos", "[]");
				let favoritos = JSON.parse(localStorage.getItem("favoritos"));
				if (favoritos.find(x => x.artist.name == result.artist.name && x.name == result.name)) return alert("Esta música já foi adicionada aos favoritos!")
				favoritos.push({
					name: result.name,
					artist: result.artist,
					ouvintes: result.listeners
				})
				localStorage.setItem("favoritos", JSON.stringify(favoritos))
			})
			$(".remove", liMedia).click(function () {
				if (!localStorage.getItem("favoritos")) localStorage.setItem("favoritos", "[]");
				let favoritos = JSON.parse(localStorage.getItem("favoritos"));
				for (let i = 0; i < favoritos.length; i++) {
					if (favoritos[i].name == result.name && favoritos[i].artist.name == result.artist.name) favoritos.splice(i, 1)
				}
				localStorage.setItem("favoritos", JSON.stringify(favoritos));
			})
			$('.media-list').append(liMedia);
		})
	});