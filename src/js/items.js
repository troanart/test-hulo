export default function CreateElem() {
  var videoId = '824804225';

    function getVimeoVideoData(videoId, callback) {
        var apiUrl = 'https://vimeo.com/api/v2/video/' + videoId + '.json';

        var xhr = new XMLHttpRequest();
        xhr.open('GET', apiUrl, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                callback(response[0]);
            }
        };
        xhr.send();
    }

    function displayVideoThumbnail(videoData) {
        var thumbnailUrl = videoData.thumbnail_large;
        var videoThumbnail = document.createElement('img');
        videoThumbnail.src = thumbnailUrl;
    
        for(let i = 0; i <= 8; i++) {
        galleryItems.push({
            preview: thumbnailUrl,
            original: 'https://player.vimeo.com/video/' + videoId,
            description: `${i} видео`
        });
        }
    
    }

    var galleryItems = [];

    getVimeoVideoData(videoId, function(videoData) {
        displayVideoThumbnail(videoData); 
        const container = document.querySelector('.swiper-wrapper');
        container.innerHTML = createMarcup(galleryItems);
    });

    function createMarcup(galleryItems) {
        return galleryItems.map(({ preview, description }) => {
            return `<div class="swiper-slide "  >
                        <img class="preview"  src="${preview}" alt="${description}"  />
                    </div>`;
        });
    }
}



