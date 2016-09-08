(function () {
    'use strict';

    angular
        .module('app.map')
        .controller('MapCtrl', MapCtrl);

    MapCtrl.$inject = ['$scope', '$q'];

    function MapCtrl($scope, $q) {
        var vm = this;
        console.log("MapCtrl");

        vm.lat = null;
        vm.lon = null;
        vm.locPosition = null;
        vm.arrivelength = null;
        vm.message = '출발전';
        var mapContainer = null;
        var mapOption = {};
        var map = null;
        var userMarker = null;
        vm.targetPosition = null;
        var arriveSrc = null;
        var arriveSize = null;
        var arriveOption = null;
        var arriveImage = null;
        var arriveMarker = null;
        var targetFence = null;
        var targetLat = null;
        var targetLng = null;
        var setFenceMeter = null;
        var arriveBoolean = false;
        var userTargetLine = null;
        var userLine = null;
        vm.logArray = [];
        vm.showLogArray = [];
        vm.moveAmount = 0.0001;
        vm.selectModel = '0';
        vm.selectBoxData = [
            {
                value: '0',
                name: '텔레캅',
                gb: 126.8927588,
                hb: 37.4973211
            }, {
                value: '1',
                name: 'GS 칼텍스',
                gb: 126.89574099999984,
                hb: 37.49857169999988
            }, {
                value: '2',
                name: '구로고등학교',
                gb: 126.89004099999966,
                hb: 37.498771699999885
            }, {
                value: '3',
                name: '동구로 초등학교',
                gb: 126.89244099999974,
                hb: 37.49527169999977
            }, {
                value: '4',
                name: '대림3동 주민센터',
                gb: 126.89804099999992,
                hb: 37.49827169999987
            }, {
                value: '5',
                name: '국민은행',
                gb: 126.88954099999964,
                hb: 37.49587169999979
            }
        ];

        $scope.$on('$ionicView.enter', function () {
            targetLat = 37.4973211;
            targetLng = 126.8927588;
            setFenceMeter = 100;

            mapContainer = document.getElementById('map');
            mapOption = {
                center: new daum.maps.LatLng(targetLat, targetLng), // 지도의 중심좌표(ktt)
                level: 4, // 지도의 확대 레벨
                draggable: true
            };

            map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

            $q.when(getNowLocation()).then(function (result) {
                map.panTo(result.locPosition);

                userMarker = new daum.maps.Marker({
                    map: map,
                    position: result.locPosition
                });

                vm.targetPosition = new daum.maps.LatLng(targetLat, targetLng);

                arriveSrc = 'http://i1.daumcdn.net/localimg/localimages/07/mapapidoc/blue_b.png'; // 도착 마커이미지 주소입니다
                arriveSize = new daum.maps.Size(50, 45); // 도착 마커이미지의 크기입니다
                arriveOption = {
                    offset: new daum.maps.Point(15, 43) // 도착 마커이미지에서 마커의 좌표에 일치시킬 좌표를 설정합니다 (기본값은 이미지의 가운데 아래입니다)
                };

                // 도착 마커 이미지를 생성합니다
                arriveImage = new daum.maps.MarkerImage(arriveSrc, arriveSize, arriveOption);

                // 도착 마커를 생성합니다
                arriveMarker = new daum.maps.Marker({
                    map: map, // 도착 마커가 지도 위에 표시되도록 설정합니다
                    position: vm.targetPosition,
                    image: arriveImage // 도착 마커이미지를 설정합니다
                });

                // 지도에 표시할 원을 생성합니다
                targetFence = new daum.maps.Circle({
                    center: vm.targetPosition,
                    radius: 100, // 미터 단위의 원의 반지름입니다
                    strokeWeight: 2, // 선의 두께입니다
                    strokeColor: '#75B8FA', // 선의 색깔입니다
                    strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                    strokeStyle: 'solid', // 선의 스타일 입니다
                    fillColor: '#CFE7FF', // 채우기 색깔입니다
                    fillOpacity: 0.5  // 채우기 불투명도 입니다
                });

                targetFence.setMap(map);

                navigator.geolocation.watchPosition(function (position) {
                    vm.locPosition = new daum.maps.LatLng(position.coords.latitude, position.coords.longitude);

                    $scope.$apply();
                });
            });
        });

        //현재위치를 구하는 함수
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
                vm.locPosition = new daum.maps.LatLng(targetLat, targetLng);
                data = {
                    lat: targetLat,
                    lon: targetLng,
                    locPosition: vm.locPosition
                };
                def.reject(data);
            }
            return def.promise;
        }

        //두 목표의 사이의 거리 구하기
        function calcDistance(lat1, lon1, lat2, lon2) {
            var EARTH_R, Rad, radLat1, radLat2, radDist;
            var distance, ret;

            EARTH_R = 6371000.0;
            Rad = Math.PI / 180;
            radLat1 = Rad * lat1;
            radLat2 = Rad * lat2;
            radDist = Rad * (lon1 - lon2);

            distance = Math.sin(radLat1) * Math.sin(radLat2);
            distance = distance + Math.cos(radLat1) * Math.cos(radLat2)
                * Math.cos(radDist);
            ret = EARTH_R * Math.acos(distance);

            var rtn = Math.round(Math.round(ret) / 1000);

            if (ret <= 1000) {
                rtn = Math.round(ret) + "m";
            } else {
                rtn = rtn + "." + Math.round(ret % 1000) + "km";
            }
            return {
                rtn: rtn,
                ret: Math.round(ret)
            };
        }

        function betweenLength(hb1, gb1, hb2, gb2) {
            var betweenLength = calcDistance(hb1, gb1, hb2, gb2);
            vm.arrivelength = betweenLength.rtn;
            if (betweenLength.ret <= setFenceMeter) {
                vm.message = '목적지 접근! - touch가능!';
                arriveBoolean = true;
            } else {
                vm.message = '가는중!';
                arriveBoolean = false;
            }
        }

        //자신의 위치 watch
        $scope.$watch('vm.locPosition', function (newVal) {
            if (userMarker !== null) {
                userMarker.setMap(null);

                userMarker = new daum.maps.Marker({
                    map: map,
                    position: new daum.maps.LatLng(vm.locPosition.hb, vm.locPosition.gb)
                });
                map.panTo(new daum.maps.LatLng(vm.locPosition.hb, vm.locPosition.gb));
            }
            if (newVal !== null && vm.targetPosition !== null) {
                betweenLength(vm.locPosition.hb, vm.locPosition.gb, vm.targetPosition.hb, vm.targetPosition.gb);
            }
        });

        //도착 위치 watch
        $scope.$watch('vm.targetPosition', function (newVal) {
            if (arriveMarker !== null && targetFence !== null) {
                arriveMarker.setMap(null);
                targetFence.setMap(null);

                var position = new daum.maps.LatLng(vm.targetPosition.hb, vm.targetPosition.gb);
                arriveMarker = new daum.maps.Marker({
                    map: map, // 도착 마커가 지도 위에 표시되도록 설정합니다
                    position: position,
                    image: arriveImage // 도착 마커이미지를 설정합니다
                });

                // 지도에 표시할 원을 생성합니다
                targetFence = new daum.maps.Circle({
                    center: position,
                    radius: 100, // 미터 단위의 원의 반지름입니다
                    strokeWeight: 2, // 선의 두께입니다
                    strokeColor: '#75B8FA', // 선의 색깔입니다
                    strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                    strokeStyle: 'solid', // 선의 스타일 입니다
                    fillColor: '#CFE7FF', // 채우기 색깔입니다
                    fillOpacity: 0.5  // 채우기 불투명도 입니다
                });

                targetFence.setMap(map);
            }
            if (newVal !== null && vm.targetPosition !== null) {
                betweenLength(vm.locPosition.hb, vm.locPosition.gb, vm.targetPosition.hb, vm.targetPosition.gb);
            }
        });

        var date = null;
        var dateString = '';
        //정보 수신
        function setLocation(data) {
            vm.locPosition = data;
            setLog('user', data);
        }

        function setTargetLocation(data) {
            vm.targetPosition = data;
            setLog('target', data);
        }

        function setLog(who, position) {
            if (position.flag !== 'select') {
                date = new Date();
                dateString = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + " - " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
                var insertData = {
                    target: who,
                    lat: (position.hb + "").substring(0, 9),
                    lon: (position.gb + "").substring(0, 9),
                    date: dateString
                };
                vm.logArray.push(insertData);

                var linePath = [];
                var lineTargetPath = [];
                for (var cnt = 0; cnt < vm.logArray.length; cnt++) {
                    if (vm.logArray[cnt].target === 'target') {
                        lineTargetPath.push(new daum.maps.LatLng(vm.logArray[cnt].lat, vm.logArray[cnt].lon));
                    } else if (vm.logArray[cnt].target === 'user') {
                        linePath.push(new daum.maps.LatLng(vm.logArray[cnt].lat, vm.logArray[cnt].lon));
                    }
                }

                userLine = new daum.maps.Polyline({
                    path: linePath, // 선을 구성하는 좌표배열 입니다
                    strokeWeight: 2, // 선의 두께 입니다
                    strokeColor: 'blue', // 선의 색깔입니다
                    strokeOpacity: 0.5, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                    strokeStyle: 'solid' // 선의 스타일입니다
                });

                userTargetLine = new daum.maps.Polyline({
                    path: lineTargetPath, // 선을 구성하는 좌표배열 입니다
                    strokeWeight: 2, // 선의 두께 입니다
                    strokeColor: 'red', // 선의 색깔입니다
                    strokeOpacity: 0.5, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                    strokeStyle: 'solid' // 선의 스타일입니다
                });

                userLine.setMap(null);
                userTargetLine.setMap(null);

                userLine.setMap(map);
                userTargetLine.setMap(map);
            } else {
                //이전에 세이브
                vm.logArray = [];
            }
        }

        vm.arrive = function () {
            if (arriveBoolean) {
                window.alert("잡았습니다.");
            }
        };

        vm.keyUp = function (event) {
            var key = event.key.toUpperCase();

            if (key === 'ARROWUP') {
                upAction();
            } else if (key === 'ARROWLEFT') {
                leftAction();
            } else if (key === 'ARROWRIGHT') {
                rightAction();
            } else if (key === 'ARROWDOWN') {
                downAction();
            } else if (key === 'W') {
                targetUpAction();
            } else if (key === 'A') {
                targetLeftAction();
            } else if (key === 'D') {
                targetRightAction();
            } else if (key === 'S') {
                targetDownAction();
            }
        };

        function upAction() {
            setLocation({
                gb: vm.locPosition.gb,
                hb: vm.locPosition.hb + vm.moveAmount
            });
        }

        function leftAction() {
            setLocation({
                gb: vm.locPosition.gb - vm.moveAmount,
                hb: vm.locPosition.hb
            });
        }

        function rightAction() {
            setLocation({
                gb: vm.locPosition.gb + vm.moveAmount,
                hb: vm.locPosition.hb
            });
        }

        function downAction() {
            setLocation({
                gb: vm.locPosition.gb,
                hb: vm.locPosition.hb - vm.moveAmount
            });
        }

        function targetUpAction() {
            setTargetLocation({
                gb: vm.targetPosition.gb,
                hb: vm.targetPosition.hb + vm.moveAmount
            });
        }

        function targetLeftAction() {
            setTargetLocation({
                gb: vm.targetPosition.gb - vm.moveAmount,
                hb: vm.targetPosition.hb
            });
        }

        function targetRightAction() {
            setTargetLocation({
                gb: vm.targetPosition.gb + vm.moveAmount,
                hb: vm.targetPosition.hb
            });
        }

        function targetDownAction() {
            setTargetLocation({
                gb: vm.targetPosition.gb,
                hb: vm.targetPosition.hb - vm.moveAmount
            });
        }

        vm.selectChange = function () {
            var selectedData = {};
            for (var cnt = 0; cnt < vm.selectBoxData.length; cnt++) {
                if (vm.selectBoxData[cnt].value === vm.selectModel) {
                    selectedData = vm.selectBoxData[cnt];
                }
            }
            setTargetLocation({
                gb: selectedData.gb,
                hb: selectedData.hb,
                flag: 'select'
            });
        };

        $scope.updateDir = function (x, y) {
            var intX = parseFloat(x);
            var intY = parseFloat(y);
            setLocation({
                gb: vm.locPosition.gb + intX,
                hb: vm.locPosition.hb + intY
            });
        }
    }
})();
