"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = __importDefault(require("../src"));
var assert_1 = __importDefault(require("assert"));
var fs = require("fs");
var sinon_1 = require("sinon");
var sb = sinon_1.sandbox.create();
describe("testCSVConverter3", function () {
    afterEach(function () {
        sb.restore();
    });
    it("should parse large csv file with UTF-8 without spliting characters", function (done) {
        var testData = __dirname + "/data/large-utf8.csv";
        var rs = fs.createReadStream(testData);
        var csvConverter = src_1.default({});
        var count = 0;
        csvConverter.preRawData(function (csvRawData) {
            assert_1.default(csvRawData.charCodeAt(0) < 2000);
            return csvRawData;
        });
        csvConverter.on("data", function () {
            count++;
        });
        csvConverter.then(function () {
            assert_1.default(count === 5290);
            done();
        });
        rs.pipe(csvConverter);
    });
    it("should setup customise type convert function", function (done) {
        src_1.default({
            checkType: true,
            colParser: {
                "column1": "string",
                "column5": function (item, head, resultRow, row, i) {
                    assert_1.default.equal(item, '{"hello":"world"}');
                    assert_1.default.equal(head, "column5"),
                        assert_1.default(resultRow);
                    assert_1.default(row);
                    assert_1.default.equal(i, 5);
                    return "hello world";
                }
            }
        })
            .fromFile(__dirname + "/data/dataWithType")
            .subscribe(function (json) {
            assert_1.default.equal(typeof json.column1, "string");
            assert_1.default.equal(json.column5, "hello world");
            assert_1.default.strictEqual(json["name#!"], false);
            assert_1.default.strictEqual(json["column9"], true);
        })
            .on('done', function () {
            done();
        });
    });
    it("should accept pipe as quote", function (done) {
        src_1.default({
            quote: "|",
            output: "csv"
        })
            .fromFile(__dirname + "/data/pipeAsQuote")
            .subscribe(function (csv) {
            assert_1.default.equal(csv[2], "blahhh, blah");
        })
            .on('done', function () {
            done();
        });
    });
    it("emit file not exists error when try to open a non-exists file", function () {
        var called = false;
        var cb = sb.spy(function (err) {
            assert_1.default(err.toString().indexOf("File does not exist") > -1);
        });
        return src_1.default()
            .fromFile("somefile")
            .subscribe(function (csv) {
        })
            .on("error", cb)
            .then(function () {
            assert_1.default(false);
        }, function (err) {
            assert_1.default.equal(cb.callCount, 1);
        });
    });
    it("should include column that is both included and excluded", function () {
        return src_1.default({
            includeColumns: /b/,
            ignoreColumns: /a|b/
        })
            .fromString("a,b,c\n1,2,3\n4,5,6")
            .subscribe(function (d) {
            assert_1.default(d.b);
            assert_1.default(!d.a);
        });
    });
    it("should allow async preLine hook", function () {
        return src_1.default()
            .preFileLine(function (line) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve(line + "changed");
                }, 20);
            });
        })
            .fromString("a,b\n1,2")
            .subscribe(function (d) {
            assert_1.default(d.bchanged);
            assert_1.default.equal(d.bchanged, "2changed");
        });
    });
    it("should allow async subscribe function", function () {
        return src_1.default({ trim: true })
            .fromString("a,b,c\n    1,2,3\n    4,5,6")
            .subscribe(function (d) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    d.a = 10;
                    resolve();
                }, 20);
            });
        })
            .then(function (d) {
            assert_1.default.equal(d[0].a, 10);
            assert_1.default.equal(d[1].a, 10);
        });
    });
    it("should propagate value to next then", function () {
        return src_1.default({ trim: true })
            .fromString("a,b,c\n  1,2,3\n  4,5,6")
            .then(undefined, undefined)
            .then(function (d) {
            assert_1.default.equal(d.length, 2);
            assert_1.default.equal(d[0].a, "1");
        });
    });
    it("should propagate error to next then", function () {
        return src_1.default({ trim: true })
            .fromFile(__dirname + "/data/dataWithUnclosedQuotes")
            .then(undefined, undefined)
            .then(function () {
            assert_1.default(false);
        }, function (err) {
            assert_1.default(err);
            assert_1.default.equal(err.err, "unclosed_quote");
        });
    });
    it("should fallback to text is number can not be parsed", function () {
        return src_1.default({
            colParser: {
                "a": "number"
            }
        })
            .fromString("a,b,c\n  1,2,3\n  fefe,5,6")
            .then(function (d) {
            assert_1.default.strictEqual(d[0].a, 1);
            assert_1.default.equal(d[1].a, "fefe");
        });
    });
    it("should omit a column", function () {
        return src_1.default({
            colParser: {
                "a": "omit"
            }
        })
            .fromString("a,b,c\n  1,2,3\n  fefe,5,6")
            .then(function (d) {
            assert_1.default.strictEqual(d[0].a, undefined);
            assert_1.default.equal(d[1].a, undefined);
        });
    });
    it("could turn off quote and should trim even quote is turned off", function () {
        return src_1.default({
            quote: "off",
            trim: true
        })
            .fromString("a,b,c\n  \"1\",\"2\",\"3\"\n  \"fefe,5\",6")
            .then(function (d) {
            assert_1.default.equal(d[0].a, '"1"');
            assert_1.default.equal(d[0].b, '"2"');
            assert_1.default.equal(d[1].a, '"fefe');
            assert_1.default.equal(d[1].b, '5"');
        });
    });
    it("should allow ignoreEmpty with checkColumn", function () {
        return src_1.default({
            checkColumn: true,
            ignoreEmpty: true
        })
            .fromString("date,altitude,airtime\n    2016-07-08,2000,23\n    \n    2016-07-09,3000,43")
            .then(function (data) {
        }, function (err) {
            console.log(err);
            assert_1.default(!err);
        });
    });
    it("should allow quotes without content", function () {
        var data = "a|^^|^b^";
        return src_1.default({
            delimiter: '|',
            quote: '^',
            noheader: true,
        })
            .fromString(data)
            .then(function (jsonObj) {
            assert_1.default.equal(jsonObj[0].field2, "");
        });
    });
    it("should parse header with quotes correctly", function () {
        var testData = __dirname + "/data/csvWithUnclosedHeader";
        return src_1.default({
            headers: ["exam_date", "sample_no", "status", "sample_type", "patient_id", "last_name", "first_name", "gender_of_patient", "patient_birth_date", "patient_note", "patient_department", "accession_number", "sample_site", "physician", "operator", "department", "note", "test_order_code", "draw_time", "approval_status", "approval_time", "report_layout", "patient_account_number", "none_1", "errors_detected_during_measurement", "age", "error_code_01", "weight", "error_code_02", "height", "error_code_03", "hcg_beta_p", "error_code_04", "troponin_i_p", "error_code_05", "ck_mb_p", "error_code_06", "d_dimer_p", "error_code_07", "hscrp_p", "error_code_08", "myoglobin_p", "error_code_09", "nt_probnp", "error_code_10", "crp", "error_code_11", "bnp", "error_code_12", "tnt", "error_code_13", "demo_p", "error_code_14", "pct", "error_code_15"]
        })
            .fromFile(testData)
            .then(function (d) {
            assert_1.default.equal(d.length, 2);
            assert_1.default.equal(d[0].sample_no, "12669");
        });
    });
    it("should stream json string correctly", function (done) {
        var data = "a,b,c\n1,2,3\n4,5,6";
        var hasLeftBracket = false;
        var hasRightBracket = false;
        src_1.default({
            downstreamFormat: "array"
        })
            .fromString(data)
            .on("data", function (d) {
            var str = d.toString();
            if (str[0] === "[" && str.length === 2) {
                hasLeftBracket = true;
            }
            else if (str[0] === "]" && str.length === 2) {
                hasRightBracket = true;
            }
            else {
                assert_1.default.equal(str[str.length - 2], ",");
            }
        })
            .on("end", function () {
            assert_1.default.equal(hasLeftBracket, true);
            assert_1.default.equal(hasRightBracket, true);
            done();
        });
    });
    it("should stream json line correctly", function (done) {
        var data = "a,b,c\n1,2,3\n4,5,6";
        src_1.default({
            downstreamFormat: "line"
        })
            .fromString(data)
            .on("data", function (d) {
            var str = d.toString();
            assert_1.default.notEqual(str[str.length - 2], ",");
        })
            .on("end", function () {
            done();
        });
    });
    it("should not send json if needEmitAll is false", function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = "a,b,c\n1,2,3\n4,5,6";
                return [2 /*return*/, src_1.default({
                        needEmitAll: false
                    })
                        .fromString(data)
                        .then(function (d) {
                        assert_1.default(d.length === 0);
                    })];
            });
        });
    });
    it("should convert null to null object", function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = "a,b,c\nnull,2,3\n4,5,6";
                return [2 /*return*/, src_1.default({
                        nullObject: true
                    })
                        .fromString(data)
                        .then(function (d) {
                        assert_1.default.equal(d[0].a, null);
                    })];
            });
        });
    });
    it("should process period properly", function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = "a..,b,c\n1,2,3\n4,5,6";
                return [2 /*return*/, src_1.default({})
                        .fromString(data)
                        .then(function (d) {
                        assert_1.default.equal(d[0]["a.."], 1);
                        assert_1.default.equal(d[1]["a.."], 4);
                    })];
            });
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL2t4aWFuZy93b3JrL3Byb2plY3RzL2NzdjJqc29uL3Rlc3QvdGVzdENTVkNvbnZlcnRlcjMudHMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9reGlhbmcvd29yay9wcm9qZWN0cy9jc3YyanNvbi90ZXN0L3Rlc3RDU1ZDb252ZXJ0ZXIzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBeUI7QUFDekIsa0RBQTRCO0FBQzVCLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2QiwrQkFBZ0M7QUFFaEMsSUFBTSxFQUFFLEdBQUcsZUFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQzVCLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRTtJQUM1QixTQUFTLENBQUM7UUFDUixFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQyxvRUFBb0UsRUFBRSxVQUFVLElBQUk7UUFDckYsSUFBSSxRQUFRLEdBQUcsU0FBUyxHQUFHLHNCQUFzQixDQUFDO1FBQ2xELElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QyxJQUFJLFlBQVksR0FBRyxhQUFHLENBQUMsRUFDdEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsWUFBWSxDQUFDLFVBQVUsQ0FBQyxVQUFVLFVBQVU7WUFDMUMsZ0JBQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ3hDLE9BQU8sVUFBVSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUU7WUFDdEIsS0FBSyxFQUFFLENBQUM7UUFDVixDQUFDLENBQUMsQ0FBQztRQUNILFlBQVksQ0FBQyxJ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QUNULFVBQVUsRUFBQyxJQUFJO3FCQUNoQixDQUFDO3lCQUNELFVBQVUsQ0FBQyxJQUFJLENBQUM7eUJBQ2hCLElBQUksQ0FBQyxVQUFDLENBQUM7d0JBQ04sZ0JBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQTtvQkFDM0IsQ0FBQyxDQUFDLEVBQUE7OztLQUNILENBQUMsQ0FBQTtJQUNGLEVBQUUsQ0FBRSxnQ0FBZ0MsRUFBQzs7OztnQkFDN0IsSUFBSSxHQUFDLHVCQUVULENBQUE7Z0JBQ0Ysc0JBQU8sYUFBRyxDQUFDLEVBQ1YsQ0FBQzt5QkFDRCxVQUFVLENBQUMsSUFBSSxDQUFDO3lCQUNoQixJQUFJLENBQUMsVUFBQyxDQUFDO3dCQUNOLGdCQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQzt3QkFDNUIsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM5QixDQUFDLENBQUMsRUFBQTs7O0tBQ0gsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3N2IGZyb20gXCIuLi9zcmNcIjtcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xudmFyIGZzID0gcmVxdWlyZShcImZzXCIpO1xuaW1wb3J0IHsgc2FuZGJveCB9IGZyb20gXCJzaW5vblwiO1xuaW1wb3J0IENTVkVycm9yIGZyb20gXCIuLi9zcmMvQ1NWRXJyb3JcIjtcbmNvbnN0IHNiID0gc2FuZGJveC5jcmVhdGUoKTtcbmRlc2NyaWJlKFwidGVzdENTVkNvbnZlcnRlcjNcIiwgZnVuY3Rpb24gKCkge1xuICBhZnRlckVhY2goZnVuY3Rpb24gKCkge1xuICAgIHNiLnJlc3RvcmUoKTtcbiAgfSk7XG4gIGl0KFwic2hvdWxkIHBhcnNlIGxhcmdlIGNzdiBmaWxlIHdpdGggVVRGLTggd2l0aG91dCBzcGxpdGluZyBjaGFyYWN0ZXJzXCIsIGZ1bmN0aW9uIChkb25lKSB7XG4gICAgdmFyIHRlc3REYXRhID0gX19kaXJuYW1lICsgXCIvZGF0YS9sYXJnZS11dGY4LmNzdlwiO1xuICAgIHZhciBycyA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0odGVzdERhdGEpO1xuICAgIHZhciBjc3ZDb252ZXJ0ZXIgPSBjc3Yoe1xuICAgIH0pO1xuICAgIHZhciBjb3VudCA9IDA7XG4gICAgY3N2Q29udmVydGVyLnByZVJhd0RhdGEoZnVuY3Rpb24gKGNzdlJhd0RhdGEpIHtcbiAgICAgIGFzc2VydChjc3ZSYXdEYXRhLmNoYXJDb2RlQXQoMCkgPCAyMDAwKTtcbiAgICAgIHJldHVybiBjc3ZSYXdEYXRhO1xuICAgIH0pXG4gICAgY3N2Q29udmVydGVyLm9uKFwiZGF0YVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjb3VudCsrO1xuICAgIH0pO1xuICAgIGNzdkNvbnZlcnRlci50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIGFzc2VydChjb3VudCA9PT0gNTI5MCk7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gICAgcnMucGlwZShjc3ZDb252ZXJ0ZXIpO1xuICB9KTtcbiAgaXQoXCJzaG91bGQgc2V0dXAgY3VzdG9taXNlIHR5cGUgY29udmVydCBmdW5jdGlvblwiLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgIGNzdih7XG4gICAgICBjaGVja1R5cGU6IHRydWUsXG4gICAgICBjb2xQYXJzZXI6IHtcbiAgICAgICAgXCJjb2x1bW4xXCI6IFwic3RyaW5nXCIsXG4gICAgICAgIFwiY29sdW1uNVwiOiBmdW5jdGlvbiAoaXRlbSwgaGVhZCwgcmVzdWx0Um93LCByb3csIGkpIHtcbiAgICAgICAgICBhc3NlcnQuZXF1YWwoaXRlbSwgJ3tcImhlbGxvXCI6XCJ3b3JsZFwifScpO1xuICAgICAgICAgIGFzc2VydC5lcXVhbChoZWFkLCBcImNvbHVtbjVcIiksXG4gICAgICAgICAgICBhc3NlcnQocmVzdWx0Um93KTtcbiAgICAgICAgICBhc3NlcnQocm93KTtcbiAgICAgICAgICBhc3NlcnQuZXF1YWwoaSwgNSk7XG4gICAgICAgICAgcmV0dXJuIFwiaGVsbG8gd29ybGRcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgICAuZnJvbUZpbGUoX19kaXJuYW1lICsgXCIvZGF0YS9kYXRhV2l0aFR5cGVcIilcbiAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKHR5cGVvZiBqc29uLmNvbHVtbjEsIFwic3RyaW5nXCIpO1xuICAgICAgICBhc3NlcnQuZXF1YWwoanNvbi5jb2x1bW41LCBcImhlbGxvIHdvcmxkXCIpO1xuICAgICAgICBhc3NlcnQuc3RyaWN0RXF1YWwoanNvbltcIm5hbWUjIVwiXSwgZmFsc2UpO1xuICAgICAgICBhc3NlcnQuc3RyaWN0RXF1YWwoanNvbltcImNvbHVtbjlcIl0sIHRydWUpO1xuICAgICAgfSlcbiAgICAgIC5vbignZG9uZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9uZSgpXG4gICAgICB9KTtcbiAgfSlcbiAgaXQoXCJzaG91bGQgYWNjZXB0IHBpcGUgYXMgcXVvdGVcIiwgZnVuY3Rpb24gKGRvbmUpIHtcbiAgICBjc3Yoe1xuICAgICAgcXVvdGU6IFwifFwiLFxuICAgICAgb3V0cHV0OiBcImNzdlwiXG4gICAgfSlcbiAgICAgIC5mcm9tRmlsZShfX2Rpcm5hbWUgKyBcIi9kYXRhL3BpcGVBc1F1b3RlXCIpXG4gICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChjc3YpIHtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKGNzdlsyXSwgXCJibGFoaGgsIGJsYWhcIik7XG4gICAgICB9KVxuICAgICAgLm9uKCdkb25lJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBkb25lKClcbiAgICAgIH0pO1xuICB9KVxuICBpdChcImVtaXQgZmlsZSBub3QgZXhpc3RzIGVycm9yIHdoZW4gdHJ5IHRvIG9wZW4gYSBub24tZXhpc3RzIGZpbGVcIiwgZnVuY3Rpb24gKCkge1xuICAgIGxldCBjYWxsZWQgPSBmYWxzZTtcbiAgICBjb25zdCBjYiA9IHNiLnNweSgoZXJyKSA9PiB7XG4gICAgICBhc3NlcnQoZXJyLnRvU3RyaW5nKCkuaW5kZXhPZihcIkZpbGUgZG9lcyBub3QgZXhpc3RcIikgPiAtMSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNzdigpXG4gICAgICAuZnJvbUZpbGUoXCJzb21lZmlsZVwiKVxuICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoY3N2KSB7XG5cbiAgICAgIH0pXG4gICAgICAub24oXCJlcnJvclwiLCBjYilcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgYXNzZXJ0KGZhbHNlKTtcbiAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKGNiLmNhbGxDb3VudCwgMSk7XG4gICAgICB9KVxuXG4gIH0pXG4gIGl0KFwic2hvdWxkIGluY2x1ZGUgY29sdW1uIHRoYXQgaXMgYm90aCBpbmNsdWRlZCBhbmQgZXhjbHVkZWRcIiwgKCkgPT4ge1xuICAgIHJldHVybiBjc3Yoe1xuICAgICAgaW5jbHVkZUNvbHVtbnM6IC9iLyxcbiAgICAgIGlnbm9yZUNvbHVtbnM6IC9hfGIvXG4gICAgfSlcbiAgICAgIC5mcm9tU3RyaW5nKGBhLGIsY1xuMSwyLDNcbjQsNSw2YClcbiAgICAgIC5zdWJzY3JpYmUoKGQpID0+IHtcbiAgICAgICAgYXNzZXJ0KGQuYik7XG4gICAgICAgIGFzc2VydCghZC5hKTtcbiAgICAgIH0pXG4gIH0pXG4gIGl0KFwic2hvdWxkIGFsbG93IGFzeW5jIHByZUxpbmUgaG9va1wiLCAoKSA9PiB7XG4gICAgcmV0dXJuIGNzdigpXG4gICAgICAucHJlRmlsZUxpbmUoKGxpbmUpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUobGluZSArIFwiY2hhbmdlZFwiKVxuICAgICAgICAgIH0sIDIwKTtcblxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5mcm9tU3RyaW5nKGBhLGJcbjEsMmApXG4gICAgICAuc3Vic2NyaWJlKChkKSA9PiB7XG4gICAgICAgIGFzc2VydChkLmJjaGFuZ2VkKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKGQuYmNoYW5nZWQsIFwiMmNoYW5nZWRcIik7XG4gICAgICB9KVxuXG4gIH0pXG5cbiAgaXQoXCJzaG91bGQgYWxsb3cgYXN5bmMgc3Vic2NyaWJlIGZ1bmN0aW9uXCIsICgpID0+IHtcbiAgICByZXR1cm4gY3N2KHsgdHJpbTogdHJ1ZSB9KVxuICAgICAgLmZyb21TdHJpbmcoYGEsYixjXG4gICAgMSwyLDNcbiAgICA0LDUsNmApXG4gICAgICAuc3Vic2NyaWJlKChkKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkLmEgPSAxMDtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9LCAyMCk7XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLnRoZW4oKGQpID0+IHtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKGRbMF0uYSwgMTApO1xuICAgICAgICBhc3NlcnQuZXF1YWwoZFsxXS5hLCAxMCk7XG4gICAgICB9KVxuICB9KVxuICBpdChcInNob3VsZCBwcm9wYWdhdGUgdmFsdWUgdG8gbmV4dCB0aGVuXCIsICgpID0+IHtcbiAgICByZXR1cm4gY3N2KHsgdHJpbTogdHJ1ZSB9KVxuICAgICAgLmZyb21TdHJpbmcoYGEsYixjXG4gIDEsMiwzXG4gIDQsNSw2YClcbiAgICAgIC50aGVuKHVuZGVmaW5lZCwgdW5kZWZpbmVkKVxuICAgICAgLnRoZW4oKGQpID0+IHtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKGQubGVuZ3RoLCAyKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKGRbMF0uYSwgXCIxXCIpO1xuICAgICAgfSlcblxuICB9KVxuICBpdChcInNob3VsZCBwcm9wYWdhdGUgZXJyb3IgdG8gbmV4dCB0aGVuXCIsICgpID0+IHtcbiAgICByZXR1cm4gY3N2KHsgdHJpbTogdHJ1ZSB9KVxuICAgICAgLmZyb21GaWxlKF9fZGlybmFtZSArIFwiL2RhdGEvZGF0YVdpdGhVbmNsb3NlZFF1b3Rlc1wiKVxuICAgICAgLnRoZW4odW5kZWZpbmVkLCB1bmRlZmluZWQpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGFzc2VydChmYWxzZSlcbiAgICAgIH0sIChlcnI6IENTVkVycm9yKSA9PiB7XG4gICAgICAgIGFzc2VydChlcnIpO1xuICAgICAgICBhc3NlcnQuZXF1YWwoZXJyLmVyciwgXCJ1bmNsb3NlZF9xdW90ZVwiKTtcbiAgICAgIH0pXG4gIH0pXG4gIGl0KFwic2hvdWxkIGZhbGxiYWNrIHRvIHRleHQgaXMgbnVtYmVyIGNhbiBub3QgYmUgcGFyc2VkXCIsICgpID0+IHtcbiAgICByZXR1cm4gY3N2KHtcbiAgICAgIGNvbFBhcnNlcjoge1xuICAgICAgICBcImFcIjogXCJudW1iZXJcIlxuICAgICAgfVxuICAgIH0pXG4gICAgICAuZnJvbVN0cmluZyhgYSxiLGNcbiAgMSwyLDNcbiAgZmVmZSw1LDZgKVxuICAgICAgLnRoZW4oKGQpID0+IHtcbiAgICAgICAgYXNzZXJ0LnN0cmljdEVxdWFsKGRbMF0uYSwgMSk7XG4gICAgICAgIGFzc2VydC5lcXVhbChkWzFdLmEsIFwiZmVmZVwiKTtcbiAgICAgIH0pXG4gIH0pXG4gIGl0KFwic2hvdWxkIG9taXQgYSBjb2x1bW5cIiwgKCkgPT4ge1xuICAgIHJldHVybiBjc3Yoe1xuICAgICAgY29sUGFyc2VyOiB7XG4gICAgICAgIFwiYVwiOiBcIm9taXRcIlxuICAgICAgfVxuICAgIH0pXG4gICAgICAuZnJvbVN0cmluZyhgYSxiLGNcbiAgMSwyLDNcbiAgZmVmZSw1LDZgKVxuICAgICAgLnRoZW4oKGQpID0+IHtcbiAgICAgICAgYXNzZXJ0LnN0cmljdEVxdWFsKGRbMF0uYSwgdW5kZWZpbmVkKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKGRbMV0uYSwgdW5kZWZpbmVkKTtcbiAgICAgIH0pXG4gIH0pXG4gIGl0KFwiY291bGQgdHVybiBvZmYgcXVvdGUgYW5kIHNob3VsZCB0cmltIGV2ZW4gcXVvdGUgaXMgdHVybmVkIG9mZlwiLCAoKSA9PiB7XG4gICAgcmV0dXJuIGNzdih7XG4gICAgICBxdW90ZTogXCJvZmZcIixcbiAgICAgIHRyaW06IHRydWVcbiAgICB9KVxuICAgICAgLmZyb21TdHJpbmcoYGEsYixjXG4gIFwiMVwiLFwiMlwiLFwiM1wiXG4gIFwiZmVmZSw1XCIsNmApXG4gICAgICAudGhlbigoZCkgPT4ge1xuICAgICAgICBhc3NlcnQuZXF1YWwoZFswXS5hLCAnXCIxXCInKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKGRbMF0uYiwgJ1wiMlwiJyk7XG4gICAgICAgIGFzc2VydC5lcXVhbChkWzFdLmEsICdcImZlZmUnKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKGRbMV0uYiwgJzVcIicpO1xuICAgICAgfSlcbiAgfSlcbiAgaXQoXCJzaG91bGQgYWxsb3cgaWdub3JlRW1wdHkgd2l0aCBjaGVja0NvbHVtblwiLCAoKSA9PiB7XG4gICAgcmV0dXJuIGNzdih7XG4gICAgICBjaGVja0NvbHVtbjogdHJ1ZSxcbiAgICAgIGlnbm9yZUVtcHR5OiB0cnVlXG4gICAgfSlcbiAgICAgIC5mcm9tU3RyaW5nKGBkYXRlLGFsdGl0dWRlLGFpcnRpbWVcbiAgICAyMDE2LTA3LTA4LDIwMDAsMjNcbiAgICBcbiAgICAyMDE2LTA3LTA5LDMwMDAsNDNgKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcblxuICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICBhc3NlcnQoIWVycik7XG4gICAgICB9KVxuICB9KTtcbiAgaXQoXCJzaG91bGQgYWxsb3cgcXVvdGVzIHdpdGhvdXQgY29udGVudFwiLCAoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IFwiYXxeXnxeYl5cIjtcbiAgICByZXR1cm4gY3N2KHtcbiAgICAgIGRlbGltaXRlcjogJ3wnLFxuICAgICAgcXVvdGU6ICdeJyxcbiAgICAgIG5vaGVhZGVyOiB0cnVlLFxuICAgIH0pXG4gICAgICAuZnJvbVN0cmluZyhkYXRhKVxuICAgICAgLnRoZW4oKGpzb25PYmopID0+IHtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKGpzb25PYmpbMF0uZmllbGQyLCBcIlwiKTtcbiAgICAgIH0pO1xuICB9KVxuICBpdChcInNob3VsZCBwYXJzZSBoZWFkZXIgd2l0aCBxdW90ZXMgY29ycmVjdGx5XCIsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGVzdERhdGEgPSBfX2Rpcm5hbWUgKyBcIi9kYXRhL2NzdldpdGhVbmNsb3NlZEhlYWRlclwiO1xuICAgIHJldHVybiBjc3Yoe1xuICAgICAgaGVhZGVyczogW1wiZXhhbV9kYXRlXCIsIFwic2FtcGxlX25vXCIsIFwic3RhdHVzXCIsIFwic2FtcGxlX3R5cGVcIiwgXCJwYXRpZW50X2lkXCIsIFwibGFzdF9uYW1lXCIsIFwiZmlyc3RfbmFtZVwiLCBcImdlbmRlcl9vZl9wYXRpZW50XCIsIFwicGF0aWVudF9iaXJ0aF9kYXRlXCIsIFwicGF0aWVudF9ub3RlXCIsIFwicGF0aWVudF9kZXBhcnRtZW50XCIsIFwiYWNjZXNzaW9uX251bWJlclwiLCBcInNhbXBsZV9zaXRlXCIsIFwicGh5c2ljaWFuXCIsIFwib3BlcmF0b3JcIiwgXCJkZXBhcnRtZW50XCIsIFwibm90ZVwiLCBcInRlc3Rfb3JkZXJfY29kZVwiLCBcImRyYXdfdGltZVwiLCBcImFwcHJvdmFsX3N0YXR1c1wiLCBcImFwcHJvdmFsX3RpbWVcIiwgXCJyZXBvcnRfbGF5b3V0XCIsIFwicGF0aWVudF9hY2NvdW50X251bWJlclwiLCBcIm5vbmVfMVwiLCBcImVycm9yc19kZXRlY3RlZF9kdXJpbmdfbWVhc3VyZW1lbnRcIiwgXCJhZ2VcIiwgXCJlcnJvcl9jb2RlXzAxXCIsIFwid2VpZ2h0XCIsIFwiZXJyb3JfY29kZV8wMlwiLCBcImhlaWdodFwiLCBcImVycm9yX2NvZGVfMDNcIiwgXCJoY2dfYmV0YV9wXCIsIFwiZXJyb3JfY29kZV8wNFwiLCBcInRyb3BvbmluX2lfcFwiLCBcImVycm9yX2NvZGVfMDVcIiwgXCJja19tYl9wXCIsIFwiZXJyb3JfY29kZV8wNlwiLCBcImRfZGltZXJfcFwiLCBcImVycm9yX2NvZGVfMDdcIiwgXCJoc2NycF9wXCIsIFwiZXJyb3JfY29kZV8wOFwiLCBcIm15b2dsb2Jpbl9wXCIsIFwiZXJyb3JfY29kZV8wOVwiLCBcIm50X3Byb2JucFwiLCBcImVycm9yX2NvZGVfMTBcIiwgXCJjcnBcIiwgXCJlcnJvcl9jb2RlXzExXCIsIFwiYm5wXCIsIFwiZXJyb3JfY29kZV8xMlwiLCBcInRudFwiLCBcImVycm9yX2NvZGVfMTNcIiwgXCJkZW1vX3BcIiwgXCJlcnJvcl9jb2RlXzE0XCIsIFwicGN0XCIsIFwiZXJyb3JfY29kZV8xNVwiXVxuICAgIH0pXG4gICAgICAuZnJvbUZpbGUodGVzdERhdGEpXG4gICAgICAudGhlbigoZCkgPT4ge1xuICAgICAgICBhc3NlcnQuZXF1YWwoZC5sZW5ndGgsIDIpO1xuICAgICAgICBhc3NlcnQuZXF1YWwoZFswXS5zYW1wbGVfbm8sIFwiMTI2NjlcIik7XG4gICAgICB9KVxuXG4gIH0pO1xuICBpdCAoXCJzaG91bGQgc3RyZWFtIGpzb24gc3RyaW5nIGNvcnJlY3RseVwiLGZ1bmN0aW9uKGRvbmUpe1xuICAgIGNvbnN0IGRhdGE9YGEsYixjXG4xLDIsM1xuNCw1LDZgXG4gICAgbGV0IGhhc0xlZnRCcmFja2V0PWZhbHNlO1xuICAgIGxldCBoYXNSaWdodEJyYWNrZXQ9ZmFsc2U7XG4gICAgY3N2KHtcbiAgICAgIGRvd25zdHJlYW1Gb3JtYXQ6XCJhcnJheVwiXG4gICAgfSlcbiAgICAuZnJvbVN0cmluZyhkYXRhKVxuICAgIC5vbihcImRhdGFcIiwoZCk9PntcbiAgICAgIGNvbnN0IHN0cj1kLnRvU3RyaW5nKCk7XG4gICAgICBpZiAoc3RyWzBdPT09XCJbXCIgJiYgc3RyLmxlbmd0aCA9PT0yKXtcbiAgICAgICAgaGFzTGVmdEJyYWNrZXQ9dHJ1ZTtcbiAgICAgIH1lbHNlIGlmIChzdHJbMF09PT1cIl1cIiAmJiBzdHIubGVuZ3RoPT09Mil7XG4gICAgICAgIGhhc1JpZ2h0QnJhY2tldD10cnVlO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGFzc2VydC5lcXVhbChzdHJbc3RyLmxlbmd0aC0yXSxcIixcIik7XG4gICAgICB9XG4gICAgICBcbiAgICB9KVxuICAgIC5vbihcImVuZFwiLCgpPT57XG4gICAgICBhc3NlcnQuZXF1YWwoaGFzTGVmdEJyYWNrZXQsdHJ1ZSk7XG4gICAgICBhc3NlcnQuZXF1YWwoaGFzUmlnaHRCcmFja2V0LHRydWUpO1xuICAgICAgZG9uZSgpO1xuICAgIH0pXG4gIH0pXG4gIGl0IChcInNob3VsZCBzdHJlYW0ganNvbiBsaW5lIGNvcnJlY3RseVwiLGZ1bmN0aW9uKGRvbmUpe1xuICAgIGNvbnN0IGRhdGE9YGEsYixjXG4xLDIsM1xuNCw1LDZgXG4gICAgY3N2KHtcbiAgICAgIGRvd25zdHJlYW1Gb3JtYXQ6XCJsaW5lXCJcbiAgICB9KVxuICAgIC5mcm9tU3RyaW5nKGRhdGEpXG4gICAgLm9uKFwiZGF0YVwiLChkKT0+e1xuICAgICAgY29uc3Qgc3RyPWQudG9TdHJpbmcoKTtcbiAgICAgIFxuICAgICAgYXNzZXJ0Lm5vdEVxdWFsKHN0cltzdHIubGVuZ3RoLTJdLFwiLFwiKTtcbiAgICB9KVxuICAgIC5vbihcImVuZFwiLCgpPT57XG4gICAgICBkb25lKCk7XG4gICAgfSlcbiAgfSlcbiAgaXQgKFwic2hvdWxkIG5vdCBzZW5kIGpzb24gaWYgbmVlZEVtaXRBbGwgaXMgZmFsc2VcIixhc3luYyBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGRhdGE9YGEsYixjXG4xLDIsM1xuNCw1LDZgXG4gICAgcmV0dXJuIGNzdih7XG4gICAgICBuZWVkRW1pdEFsbDpmYWxzZVxuICAgIH0pXG4gICAgLmZyb21TdHJpbmcoZGF0YSlcbiAgICAudGhlbigoZCk9PntcbiAgICAgIGFzc2VydChkLmxlbmd0aD09PTApO1xuICAgIH0pXG4gIH0pXG4gIGl0IChcInNob3VsZCBjb252ZXJ0IG51bGwgdG8gbnVsbCBvYmplY3RcIixhc3luYyBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGRhdGE9YGEsYixjXG5udWxsLDIsM1xuNCw1LDZgXG4gICAgcmV0dXJuIGNzdih7XG4gICAgICBudWxsT2JqZWN0OnRydWVcbiAgICB9KVxuICAgIC5mcm9tU3RyaW5nKGRhdGEpXG4gICAgLnRoZW4oKGQpPT57XG4gICAgICBhc3NlcnQuZXF1YWwoZFswXS5hLG51bGwpXG4gICAgfSlcbiAgfSlcbiAgaXQgKFwic2hvdWxkIHByb2Nlc3MgcGVyaW9kIHByb3Blcmx5XCIsYXN5bmMgZnVuY3Rpb24oKXtcbiAgICBjb25zdCBkYXRhPWBhLi4sYixjXG4xLDIsM1xuNCw1LDZgXG4gICAgcmV0dXJuIGNzdih7XG4gICAgfSlcbiAgICAuZnJvbVN0cmluZyhkYXRhKVxuICAgIC50aGVuKChkKT0+e1xuICAgICAgYXNzZXJ0LmVxdWFsKGRbMF1bXCJhLi5cIl0sMSk7XG4gICAgICBhc3NlcnQuZXF1YWwoZFsxXVtcImEuLlwiXSw0KTtcbiAgICB9KVxuICB9KVxufSk7XG4iXX0=