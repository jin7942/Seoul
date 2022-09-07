/**
 * @ 유효성 검사
 */

// 정규포현식
const nameEngRegex = /^[a-zA-Z0-9]{2,12}$/;
const nameKorRegex = /^[가-힣0-9]{2,12}$/;
const numberRegex = /^[0-9]{0,12}$/;

// input 태그 입력값 가져오기
const inputEng = document.getElementById('inputEng');
const inputKor = document.getElementById('inputKor');
const inputNum = document.getElementById('inputNum');

function onSubmit() {
    // 영문(대소문자), 숫자
    if (inputEng.value == '' || !inputEng.test(nameEngRegex)) {
        alert('입력값 확인');
        return false;
    }

    // 한글, 숫자
    if (inputKor.value == '' || !inputKor.test(nameKorRegex)) {
        alert('입력값 확인');
        return false;
    }

    // 숫자
    if (inputNum.value == '' || !inputNum.test(numberRegex)) {
        alert('입력값 확인');
        return false;
    }

    // 모든 조건을 만족할 경우 서브밋
    document.getElementById('formID').onSubmit();
}
