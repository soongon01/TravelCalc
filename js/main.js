/**
 * Created by user on 2016-08-26.
 */

var flightFee = {
    la: 935000,
    bangkok: 570000,
    sydney: 1250000
};

function dpFlightFeeToBadge(city) {
    var fee = flightFee[city];
    fee = fee.toLocaleString("en").split(".")[0];
    fee += "원";
    document.getElementById("flightFee").innerHTML = fee;
}
/*
페이지가 로딩되면 수행되는 함수
1.LA를 선택하고 LA의 비행기값을 배지에 출력한다.
 */
function initPage() {
    dpFlightFeeToBadge('la');
}
/*
라디오 버튼이 클릭될 때 마다 배지에 비행기값을 출력한다.
 */
function displayFlightFee(city) {
    dpFlightFeeToBadge(city);
}