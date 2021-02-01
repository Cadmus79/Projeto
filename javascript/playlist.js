var cloneMedia = $('.media').clone();

$('.media-list').html('');

function showLocalStorageData(){
    if (localStorage.favoritos) {
        var strfavoritos = localStorage.getItem("favoritos");
        var objfavoritos = JSON.parse(strfavoritos);
        console.log(objfavoritos);

        $(objfavoritos).each(function( idx, elem ) {
            console.log(elem);
            var fav = cloneMedia.clone();
            $("#name-fav", fav).text( elem.name );
            $("#artista-fav", fav).text ( elem.artist.name );
            $("#ouvintes-fav", fav).text ( elem.ouvintes );
            $(".remove", fav).click(function () {
				if (!localStorage.getItem("favoritos")) localStorage.setItem("favoritos", "[]");
				let favoritos = JSON.parse(localStorage.getItem("favoritos"));
				for (let i = 0; i < favoritos.length; i++) {
					if (favoritos[i].name == elem.name && favoritos[i].artist.name == elem.artist.name) favoritos.splice(i, 1)
				}
                localStorage.setItem("favoritos", JSON.stringify(favoritos));
                console.log("a");
			})
			$('.media-list').append(fav);
        })

    }
}
showLocalStorageData();