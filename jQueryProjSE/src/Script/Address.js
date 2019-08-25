$(function () {

    var parseAddress = function (address) {
        var location = {
            county: '',
            district: '',
            detail: ''
        }
        let countArray = ['縣', '市'];
        let districtArray = ['市', '山', '島', '台', '里', '區', '鄉', '鎮' ];
        let countyPos = -1;
        $.each(countArray, function (index, value) {
            if (address.indexOf(value) != -1) {
                countyPos = address.indexOf(value);
                return false; // break;
            }
        });
        let districtPos = -1;
        $.each(districtArray, function (index, value) {
            if (address.indexOf(value) != -1) {
                if (value == '市') {
                    if (countyPos != address.indexOf(value)) {
                        districtPos = address.indexOf(value);
                        return false;
                    }
                } else if (value == '山') {
                    if (address.indexOf('阿里山') != -1) {
                        districtPos = address.indexOf(value);
                        return false;
                    }
                } else if (value == '島') {
                    if (address.indexOf('東沙群島') != -1 || address.indexOf('南沙群島') != -1) {
                        districtPos = address.indexOf(value);
                        return false;
                    }
                } else if (value == '台') {
                    if (address.indexOf('釣魚台')) {
                        districtPos = address.indexOf(value);
                        return false;
                    }
                } else if (value == '里') {
                    if (address.indexOf('太麻里')) {
                        districtPos = address.indexOf(value);
                        return false;
                    }
                } else {
                    districtPos = address.indexOf(value);
                    return false; // break;
                }
            }
        });

        location.county = address.substring(0, countyPos + 1);
        location.district = address.substring(countyPos + 1, districtPos + 1);
        location.detail = address.substr(districtPos + 1);

        return location;
    }

    var task01 = function () {
        var address = 'XX市YY區ZZZ';
        QUnit.test(address, function (assert) {
            var location = parseAddress(address);
            assert.equal(location.county, "XX市", "");
            assert.equal(location.district, "YY區", "");
            assert.equal(location.detail, "ZZZ", "");
        });
    }
    var task02 = function () {
        var address = 'XX縣YY市ZZ區QQQ鄉RR鎮';
        QUnit.test(address, function (assert) {
            var location = parseAddress(address);
            assert.equal(location.county, "XX縣", "");
            assert.equal(location.district, "YY市", "");
            assert.equal(location.detail, "ZZ區QQQ鄉RR鎮", "");
        });
    }

    var task03 = function () {
        var address = '宜蘭縣頭城鎮XXXXX';
        QUnit.test(address, function (assert) {
            var location = parseAddress(address);
            assert.equal(location.county, "宜蘭縣", "");
            assert.equal(location.district, "頭城鎮", "");
            assert.equal(location.detail, "XXXXX", "");
        });
    }
    var task04 = function () {
        var address = '宜蘭縣礁溪鄉XXXXX';
        QUnit.test(address, function (assert) {
            var location = parseAddress(address);
            assert.equal(location.county, "宜蘭縣", "");
            assert.equal(location.district, "礁溪鄉", "");
            assert.equal(location.detail, "XXXXX", "");
        });
    }
    var task05 = function () {
        var address = '宜蘭縣宜蘭市礁溪鄉XXXXX';
        QUnit.test(address, function (assert) {
            var location = parseAddress(address);
            assert.equal(location.county, "宜蘭縣", "");
            assert.equal(location.district, "宜蘭市", "");
            assert.equal(location.detail, "礁溪鄉XXXXX", "");
        });
    }
    var task06 = function () {
        var address = '嘉義縣阿里山礁溪鄉XXXXX';
        QUnit.test(address, function (assert) {
            var location = parseAddress(address);
            assert.equal(location.county, "嘉義縣", "");
            assert.equal(location.district, "阿里山", "");
            assert.equal(location.detail, "礁溪鄉XXXXX", "");
        });
    }
    var task07 = function () {
        var address = '高雄市東沙群島礁溪鄉XXXXX';
        QUnit.test(address, function (assert) {
            var location = parseAddress(address);
            assert.equal(location.county, "高雄市", "");
            assert.equal(location.district, "東沙群島", "");
            assert.equal(location.detail, "礁溪鄉XXXXX", "");
        });
    }

    task01();
    task02();
    task03();
    task04();
    task05();
    task06();
    task07();

});
