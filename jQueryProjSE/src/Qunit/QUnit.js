$(function () {
    //    alert('hello');
    // QUnit - Environment Setup
    var taskEnvironmentSetup = function () {
        QUnit.test("My First Test", function (assert) {
            var value = "1";
            assert.equal(value, "1", "Value should be 1");
        });
    }
    // QUnit - Basic Usage
    var taskBasicUsage = function () {
        function square(x) {
            return x * x;
        }
        QUnit.test("TestSquare", function (assert) {
            var result = square(2);
            assert.equal(result, "4", "square(2) should be 4.");
        });
    }
    // QUnit - API
    var taskAPI = function () {
        console.log("do nothing");
    }
    // QUnit - Using Assertions
    var taskUsingAssertions = function () {
        QUnit.test("TestSuite", function (assert) {
            //test data
            var str1 = "abc";
            var str2 = "abc";
            var str3 = null;
            var val1 = 5;
            var val2 = 6;
            var expectedArray = ["one", "two", "three"];
            var resultArray = ["one", "two", "three"];

            //Check that two objects are equal
            assert.equal(str1, str2, "Strings passed are equal.");

            //Check that two objects are not equal
            assert.notEqual(str1, str3, "Strings passed are not equal.");

            //Check that a condition is true
            assert.ok(val1 < val2, val1 + " is less than " + val2);

            //Check that a condition is false
            assert.notOk(val1 > val2, val2 + " is not less than " + val1);

            //Check whether two arrays are equal to each other.
            assert.deepEqual(expectedArray, resultArray, "Arrays passed are equal.");

            //Check whether two arrays are equal to each other.
            assert.notDeepEqual(expectedArray, ["one", "two"],
                "Arrays passed are not equal.");
        });
    }
    // QUnit - Execution Procedure
    var taskExecutionProcedure = function () {
        QUnit.module("Module A (Execution Procedure)", {
            beforeEach: function (assert) {
                assert.ok(true, "before test case");
            },
            afterEach: function (assert) {
                assert.ok(true, "after test case");
            }
        });

        QUnit.test("test case 1", function (assert) {
            assert.ok(true, "Module A: in test case 1");
        });

        QUnit.test("test case 2", function (assert) {
            assert.ok(true, "Module A: in test case 2");
        });

        QUnit.module("Module B (Execution Procedure)");
        QUnit.test("test case 1", function (assert) {
            assert.ok(true, "Module B: in test case 1");
        });

        QUnit.test("test case 2", function (assert) {
            assert.ok(true, "Module B: in test case 2");
        });
    }
    // QUnit - Skip Test
    var taskSkipTest = function () {
        QUnit.module("Module A (Skip Test)", {
            beforeEach: function (assert) {
                assert.ok(true, "before test case");
            },
            afterEach: function (assert) {
                assert.ok(true, "after test case");
            }
        });

        QUnit.test("test case 1", function (assert) {
            assert.ok(true, "Module A: in test case 1");
        });

        QUnit.skip("test case 2", function (assert) {
            assert.ok(true, "Module A: in test case 2");
        });

        QUnit.module("Module B (Skip Test)");
        QUnit.test("test case 1", function (assert) {
            assert.ok(true, "Module B: in test case 1");
        });

        QUnit.skip("test case 2", function (assert) {
            assert.ok(true, "Module B: in test case 2");
        });
    }
    // QUnit - Only Test
    var taskOnlyTest = function () {
        QUnit.module("Module A (Only Test)", {
            beforeEach: function (assert) {
                assert.ok(true, "before test case");
            },
            afterEach: function (assert) {
                assert.ok(true, "after test case");
            }
        });

        QUnit.test("test case 1", function (assert) {
            assert.ok(true, "Module A: in test case 1");
        });
        // Effective range -> All Page
        QUnit.only("test case 2", function (assert) {
            assert.ok(true, "Module A: in test case 2");
        });

        QUnit.test("test case 3", function (assert) {
            assert.ok(true, "Module A: in test case 3");
        });

        QUnit.test("test case 4", function (assert) {
            assert.ok(true, "Module A: in test case 4");
        });
    }
    // QUnit - Async Call （異步呼叫）
    var taskAsyncCall = function () {
        QUnit.test("multiple call test()", function (assert) {
            var done = assert.async(3);

            setTimeout(function () {
                assert.ok(true, "first callback.");
                done();
            }, 1500);

            setTimeout(function () {
                assert.ok(true, "second callback.");
                done();
            }, 1500);

            setTimeout(function () {
                assert.ok(true, "third callback.");
                done();
            }, 1500);
        });
    }
    // QUnit - Expect Assertions （期待斷言）
    var taskExpectAssertions = function () {
        QUnit.test("multiple call test()", function (assert) {
            assert.expect(3);
            var done = assert.async(3);

            setTimeout(function () {
                assert.ok(true, "first callback.");
                done();
            }, 500);

            setTimeout(function () {
                assert.ok(true, "second callback.");
                done();
            }, 500);

            setTimeout(function () {
                assert.ok(true, "third callback.");
                done();
            }, 500);
        });
    }
    // QUnit - Callbacks (統計資料)
    var taskCallbacks = function () {
        //Register a callback to fire whenever a testsuite starts.
        QUnit.begin(function (details) {
            var data = document.getElementById("console").innerHTML;
            document.getElementById("console").innerHTML = "<br/>" +
                "QUnit.begin- Test Suite Begins " + "<br/>" +
                "Total Test: " + details.totalTests;
        });

        //Register a callback to fire whenever a test suite ends.		 
        QUnit.done(function (details) {
            var data = document.getElementById("console").innerHTML;
            document.getElementById("console").innerHTML = data + "<br/><br/>" +
                "QUnit.done - Test Suite Finised" + "<br/>" + "Total: " +
                details.total + " Failed: " + details.failed + " Passed: " +
                details.passed;
        });

        //Register a callback to fire whenever a module starts.
        QUnit.moduleStart(function (details) {
            var data = document.getElementById("console").innerHTML;
            document.getElementById("console").innerHTML = data + "<br/><br/>" +
                "QUnit.moduleStart - Module Begins " + "<br/>" + details.name;
        });

        //Register a callback to fire whenever a module ends.	  
        QUnit.moduleDone(function (details) {
            var data = document.getElementById("console").innerHTML;
            document.getElementById("console").innerHTML = data + "<br/><br/>" +
                "QUnit.moduleDone - Module Finished " + "<br/>" + details.name +
                " Failed/total: " + details.failed + "/" + details.total;
        });

        //Register a callback to fire whenever a test starts.
        QUnit.testStart(function (details) {
            var data = document.getElementById("console").innerHTML;
            document.getElementById("console").innerHTML = data + "<br/><br/>" +
                "QUnit.testStart - Test Begins " + "<br/>" + details.module + "" + details.name;
        });

        //Register a callback to fire whenever a test ends.
        QUnit.testDone(function (details) {
            var data = document.getElementById("console").innerHTML;
            document.getElementById("console").innerHTML = data + "<br/><br/>" +
                "QUnit.testDone - Test Finished " + "<br/>" + details.module + " " +
                details.name + "Failed/total: " + details.failed + " " + details.total +
                " " + details.duration;
        });

        QUnit.module("Module A", {
            beforeEach: function (assert) {
                assert.ok(true, "before test case");
            },
            afterEach: function (assert) {
                assert.ok(true, "after test case");
            }
        });

        QUnit.test("test case 1", function (assert) {
            assert.ok(true, "Module A: in test case 1");
        });

        QUnit.test("test case 2", function (assert) {
            assert.ok(true, "Module A: in test case 2");
        });

        QUnit.module("Module B");
        QUnit.test("test case 1", function (assert) {
            assert.ok(true, "Module B: in test case 1");
        });

        QUnit.test("test case 2", function (assert) {
            assert.ok(true, "Module B: in test case 2");
        });
    }
    // QUnit - Nested Modules(嵌套模組)
    var taskNestedModules = function () {
        QUnit.module("parent module", function (hooks) {
            hooks.beforeEach(function (assert) {
                assert.ok(true, "beforeEach called");
            });

            hooks.afterEach(function (assert) {
                assert.ok(true, "afterEach called");
            });

            QUnit.test("hook test 1", function (assert) {
                assert.expect(2);
            });

            QUnit.module("nested hook module", function (hooks) {
                // This will run after the parent module's beforeEach hook
                hooks.beforeEach(function (assert) {
                    assert.ok(true, "nested beforeEach called");
                });

                // This will run before the parent module's afterEach
                hooks.afterEach(function (assert) {
                    assert.ok(true, "nested afterEach called");
                });

                QUnit.test("hook test 2", function (assert) {
                    assert.expect(4);
                });
            });
        });
    }
    // QUnit - runTask
    taskEnvironmentSetup();
    //    taskBasicUsage();
    //    taskUsingAssertions();
    //    taskExecutionProcedure();
    //    taskSkipTest();
    //    taskOnlyTest();
    //    taskAsyncCall();
    //    taskExpectAssertions();
    //    taskCallbacks();
    //    taskNestedModules();


});
