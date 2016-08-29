/**
 * Created by user on 2016-08-26.
 */

$(document).ready(function() {

    var flightFee = {
        la: 935000,
        bangkok: 570000,
        sydney: 1250000
    };

    var currentDest = "";
    initPage();

    $(':radio').click(function (e) {
        currentDest = e.target.value;
        displayFlightFee(currentDest);
    });

    $('#calcBtn').click(function () {
        calcFlightFee();
    });

    function dpFlightFeeToBadge(city) {
        var fee = flightFee[city];
        fee = fee.toLocaleString("en").split(".")[0];
        fee += "원";
        $("#flightFee").html(fee);
    }

    /*
     페이지가 로딩되면 수행되는 함수
     1.LA를 선택하고 LA의 비행기값을 배지에 출력한다.
     */
    function initPage() {
        dpFlightFeeToBadge('la');
        currentDest = "la";
    }

    /*
     라디오 버튼이 클릭될 때 마다 배지에 비행기값을 출력한다.
     */
    function displayFlightFee(city) {
        dpFlightFeeToBadge(city);
        currentDest = city;
    }

    /*
     성인,소아 요금 100%, 유아는 20%적용
     세금 5% 추가
     */
    function calcFlightFee() {
        //1. 셀렉트박스에서 인원을 확보, 목적지 데이터를 확보
        var howManyAdult = $("#adult").val();
        var howManyKid = $("#kid").val();
        var howManyInfant = $("#infant").val();

        var flightFeeNumber = flightFee[currentDest];

        //2. 성인(소아)의 항공료를 계산
        var howManyAdultAndKid =
            parseInt(howManyAdult) + parseInt(howManyKid);

        var adultFeeSubtotal = howManyAdultAndKid * flightFeeNumber;
        var infantFeeSubtotal =
            Math.floor((parseInt(howManyInfant) * flightFeeNumber) * 0.2);

        var grandTotal = (adultFeeSubtotal + infantFeeSubtotal) * 1.05;
        //formatting grandTotal
        grandTotal = grandTotal.toLocaleString("en").split(".")[0];

        //3. 최종금액 표기
        $("#totalPrice").html(grandTotal);
    }

});


