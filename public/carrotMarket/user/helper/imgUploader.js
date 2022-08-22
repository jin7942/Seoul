/**
 * @ 이미지업로더
 */
function getImageFiles(e) {
    const uploadFiles = [];
    const files = e.currentTarget.files;
    const imagePreview = document.querySelector('.image-preview');
    const imagePreview2 = document.querySelector('.image-preview2');

    if ([...files].length >= 7) {
        alert('이미지는 최대 6개 까지 업로드가 가능합니다.');
        return;
    }

    // 파일 타입 검사
    [...files].forEach((file) => {
        if (!file.type.match('image/.*')) {
            alert('이미지 파일만 업로드가 가능합니다.');
            return;
        }

        // 파일 갯수 검사
        if ([...files].length < 7) {
            uploadFiles.push(file);
            const reader = new FileReader();
            reader.onload = (e) => {
                const preview = createElement(e, file);

                // if (imagePreview.childElementCount >= 3) {
                //     imagePreview2.appendChild(preview);
                // } else {
                //     imagePreview.appendChild(preview);
                // }

                imagePreview.childElementCount >= 3 ? imagePreview2.appendChild(preview) : imagePreview.appendChild(preview);
            };
            reader.readAsDataURL(file);
        }
    });
}

function createElement(e, file) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.setAttribute('src', e.target.result);
    img.setAttribute('data-file', file.name);
    li.appendChild(img);

    return li;
}

const realUpload = document.querySelector('.real-upload');
const upload = document.querySelector('.upload');

realUpload.addEventListener('change', getImageFiles);
