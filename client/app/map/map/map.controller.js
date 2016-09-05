(function () {
    'use strict';

    angular
        .module('app.map')
        .controller('MapCtrl', MapCtrl);

    MapCtrl.$inject = ['$scope', '$q'];

    function MapCtrl($scope, $q) {
        var vm = this;
        console.log("MapCtrl");
        var mapContainer = document.getElementById('map');
        var mapOption = {
            center: new daum.maps.LatLng(37.4973211, 126.8927588), // 지도의 중심좌표(ktt)
            level: 3 // 지도의 확대 레벨
        };

        var map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

        // daum.maps.event.addListener(map, 'center_changed', function () {
        //     console.log('지도의 중심 좌표는 ' + map.getCenter().toString() + ' 입니다.');
        // });

        vm.lat = null;
        vm.lon = null;
        vm.locPosition = null;

        function getNowLocation() {

            var data = {};
            var def = $q.defer();
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    vm.lat = position.coords.latitude; // 위도
                    vm.lon = position.coords.longitude; // 경도
                    vm.locPosition = new daum.maps.LatLng(vm.lat, vm.lon);
                    data = {
                        lat: vm.lat,
                        lon: vm.lon,
                        locPosition: vm.locPosition
                    };
                    def.resolve(data);
                });
            } else {
                vm.locPosition = new daum.maps.LatLng(37.4973211, 126.8927588);
                data = {
                    lat: 37.4973211,
                    lon: 126.8927588,
                    locPosition: vm.locPosition
                };
                def.reject(data);
            }
            return def.promise;
        }

        $q.when(getNowLocation()).then(function (result) {
            console.log("result = ", result);
            map.panTo(result.locPosition);

            var userMarker = new daum.maps.Marker({
                map: map,
                position: result.locPosition,
                draggable: true
            });

            var targetPosition = new daum.maps.LatLng(37.50147825411543, 126.89881673475415);
            var targetMarker = new daum.maps.Marker({
                map: map,
                position: targetPosition
            });

            // 지도에 표시할 원을 생성합니다
            var targetFence = new daum.maps.Circle({
                center: targetPosition,
                radius: 100, // 미터 단위의 원의 반지름입니다
                strokeWeight: 2, // 선의 두께입니다
                strokeColor: '#75B8FA', // 선의 색깔입니다
                strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                strokeStyle: 'solid', // 선의 스타일 입니다
                fillColor: '#CFE7FF', // 채우기 색깔입니다
                fillOpacity: 0.5  // 채우기 불투명도 입니다
            });
















            var arriveSrc = 'http://i1.daumcdn.net/localimg/localimages/07/mapapidoc/blue_b.png', // 도착 마커이미지 주소입니다
                arriveSize = new daum.maps.Size(50, 45), // 도착 마커이미지의 크기입니다
                arriveOption = {
                    offset: new daum.maps.Point(15, 43) // 도착 마커이미지에서 마커의 좌표에 일치시킬 좌표를 설정합니다 (기본값은 이미지의 가운데 아래입니다)
                };

// 도착 마커 이미지를 생성합니다
            var arriveImage = new daum.maps.MarkerImage(arriveSrc, arriveSize, arriveOption);

            var arriveDragSrc = 'http://i1.daumcdn.net/localimg/localimages/07/mapapidoc/blue_drag.png', // 도착 마커의 드래그 이미지 주소입니다
                arriveDragSize = new daum.maps.Size(50, 64), // 도착 마커의 드래그 이미지 크기입니다
                arriveDragOption = {
                    offset: new daum.maps.Point(15, 54) // 도착 마커의 드래그 이미지에서 마커의 좌표에 일치시킬 좌표를 설정합니다 (기본값은 이미지의 가운데 아래입니다)
                };

// 도착 마커의 드래그 이미지를 생성합니다
            var arriveDragImage = new daum.maps.MarkerImage(arriveDragSrc, arriveDragSize, arriveDragOption);

// 도착 마커가 표시될 위치입니다
            var arrivePosition = new daum.maps.LatLng(33.450701, 126.572667);

// 도착 마커를 생성합니다
            var arriveMarker = new daum.maps.Marker({
                map: map, // 도착 마커가 지도 위에 표시되도록 설정합니다
                position: arrivePosition,
                draggable: true, // 도착 마커가 드래그 가능하도록 설정합니다
                image: arriveImage // 도착 마커이미지를 설정합니다
            });















            userMarker.setMap(map);
            targetMarker.setMap(map);
            targetFence.setMap(map);

            // 마커에 dragend 이벤트 등록
            daum.maps.event.addListener(userMarker, 'dragend', function () {
                console.log('마커에 dragend 이벤트가 발생했습니다!');
                console.log(userMarker.getPosition());
            });
        });

        navigator.geolocation.watchPosition(function (position) {
            console.log("I am now located at: " + position.coords.latitude + "," + position.coords.longitude);
        });
    }
})();

