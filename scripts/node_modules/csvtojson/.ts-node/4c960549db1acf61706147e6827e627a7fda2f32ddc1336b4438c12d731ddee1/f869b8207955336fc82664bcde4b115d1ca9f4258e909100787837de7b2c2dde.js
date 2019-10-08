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
var ProcessorLocal_1 = require("./ProcessorLocal");
var Converter_1 = require("./Converter");
var fs_1 = require("fs");
var path_1 = __importDefault(require("path"));
var assert_1 = __importDefault(require("assert"));
var dataDir = path_1.default.join(__dirname, "../test/data/");
describe("ProcessLocal", function () {
    it("should process csv chunks and output json", function () {
        return __awaiter(this, void 0, void 0, function () {
            var processor, data, lines, line0;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        processor = new ProcessorLocal_1.ProcessorLocal(new Converter_1.Converter());
                        data = fs_1.readFileSync(dataDir + "/complexJSONCSV");
                        return [4 /*yield*/, processor.process(data)];
                    case 1:
                        lines = _a.sent();
                        assert_1.default(lines.length === 2);
                        line0 = lines[0];
                        assert_1.default.equal(line0.fieldA.title, "Food Factory");
                        assert_1.default.equal(line0.fieldA.children.length, 2);
                        assert_1.default.equal(line0.fieldA.children[1].employee[0].name, "Tim");
                        return [2 /*return*/];
                }
            });
        });
    });
    it("should process csv chunks and output csv rows", function () {
        return __awaiter(this, void 0, void 0, function () {
            var processor, data, lines;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        processor = new ProcessorLocal_1.ProcessorLocal(new Converter_1.Converter({ output: "line" }));
                        data = fs_1.readFileSync(dataDir + "/complexJSONCSV");
                        return [4 /*yield*/, processor.process(data)];
                    case 1:
                        lines = _a.sent();
                        assert_1.default(lines.length === 2);
                        return [2 /*return*/];
                }
            });
        });
    });
    it("should return empty array if preRawHook removed the data", function () {
        var conv = new Converter_1.Converter();
        conv.preRawData(function (str) {
            return "";
        });
        var processor = new ProcessorLocal_1.ProcessorLocal(conv);
        var data = fs_1.readFileSync(dataDir + "/complexJSONCSV");
        return processor.process(data)
            .then(function (list) {
            assert_1.default.equal(list.length, 0);
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL2t4aWFuZy93b3JrL3Byb2plY3RzL2NzdjJqc29uL3NyYy9Qcm9jZXNzb3JMb2NhbC50ZXN0LnRzIiwic291cmNlcyI6WyIvVXNlcnMva3hpYW5nL3dvcmsvcHJvamVjdHMvY3N2Mmpzb24vc3JjL1Byb2Nlc3NvckxvY2FsLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFnRDtBQUNoRCx5Q0FBd0M7QUFFeEMseUJBQWdDO0FBQ2hDLDhDQUF3QjtBQUN4QixrREFBNEI7QUFFNUIsSUFBTSxPQUFPLEdBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUMsZUFBZSxDQUFDLENBQUM7QUFDbkQsUUFBUSxDQUFDLGNBQWMsRUFBQztJQUN0QixFQUFFLENBQUUsMkNBQTJDLEVBQUM7Ozs7Ozt3QkFDeEMsU0FBUyxHQUFDLElBQUksK0JBQWMsQ0FBQyxJQUFJLHFCQUFTLEVBQUUsQ0FBQyxDQUFDO3dCQUM5QyxJQUFJLEdBQUMsaUJBQVksQ0FBQyxPQUFPLEdBQUMsaUJBQWlCLENBQUMsQ0FBQzt3QkFDdkMscUJBQU0sU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQW5DLEtBQUssR0FBQyxTQUE2Qjt3QkFDekMsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUNyQixLQUFLLEdBQUMsS0FBSyxDQUFDLENBQUMsQ0FBZSxDQUFDO3dCQUNuQyxnQkFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxjQUFjLENBQUMsQ0FBQzt3QkFDaEQsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM3QyxnQkFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxDQUFDOzs7OztLQUMvRCxDQUFDLENBQUE7SUFDRixFQUFFLENBQUUsK0NBQStDLEVBQUM7Ozs7Ozt3QkFDNUMsU0FBUyxHQUFDLElBQUksK0JBQWMsQ0FBQyxJQUFJLHFCQUFTLENBQUMsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM3RCxJQUFJLEdBQUMsaUJBQVksQ0FBQyxPQUFPLEdBQUMsaUJBQWlCLENBQUMsQ0FBQzt3QkFDdkMscUJBQU0sU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQW5DLEtBQUssR0FBQyxTQUE2Qjt3QkFFekMsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7OztLQUM1QixDQUFDLENBQUE7SUFDRixFQUFFLENBQUUsMERBQTBELEVBQUM7UUFDN0QsSUFBTSxJQUFJLEdBQUMsSUFBSSxxQkFBUyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFDLEdBQUc7WUFDbEIsT0FBTyxFQUFFLENBQUM7UUFDWixDQUFDLENBQUMsQ0FBQztRQUNILElBQU0sU0FBUyxHQUFDLElBQUksK0JBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFNLElBQUksR0FBQyxpQkFBWSxDQUFDLE9BQU8sR0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDN0IsSUFBSSxDQUFDLFVBQUMsSUFBSTtZQUNULGdCQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQcm9jZXNzb3JMb2NhbH0gZnJvbSBcIi4vUHJvY2Vzc29yTG9jYWxcIjtcbmltcG9ydCB7IENvbnZlcnRlciB9IGZyb20gXCIuL0NvbnZlcnRlclwiO1xuaW1wb3J0IFAgZnJvbSBcImJsdWViaXJkXCI7XG5pbXBvcnQge3JlYWRGaWxlU3luY30gZnJvbSBcImZzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5pbXBvcnQgeyBKU09OUmVzdWx0IH0gZnJvbSBcIi4vbGluZVRvSnNvblwiO1xuY29uc3QgZGF0YURpcj1wYXRoLmpvaW4oX19kaXJuYW1lLFwiLi4vdGVzdC9kYXRhL1wiKTtcbmRlc2NyaWJlKFwiUHJvY2Vzc0xvY2FsXCIsKCk9PntcbiAgaXQgKFwic2hvdWxkIHByb2Nlc3MgY3N2IGNodW5rcyBhbmQgb3V0cHV0IGpzb25cIixhc3luYyBmdW5jdGlvbiAoKXtcbiAgICBjb25zdCBwcm9jZXNzb3I9bmV3IFByb2Nlc3NvckxvY2FsKG5ldyBDb252ZXJ0ZXIoKSk7XG4gICAgY29uc3QgZGF0YT1yZWFkRmlsZVN5bmMoZGF0YURpcitcIi9jb21wbGV4SlNPTkNTVlwiKTtcbiAgICBjb25zdCBsaW5lcz1hd2FpdCBwcm9jZXNzb3IucHJvY2VzcyhkYXRhKTtcbiAgICBhc3NlcnQobGluZXMubGVuZ3RoID09PSAyKTtcbiAgICBjb25zdCBsaW5lMD1saW5lc1swXSBhcyBKU09OUmVzdWx0O1xuICAgIGFzc2VydC5lcXVhbChsaW5lMC5maWVsZEEudGl0bGUsXCJGb29kIEZhY3RvcnlcIik7XG4gICAgYXNzZXJ0LmVxdWFsKGxpbmUwLmZpZWxkQS5jaGlsZHJlbi5sZW5ndGgsMik7XG4gICAgYXNzZXJ0LmVxdWFsKGxpbmUwLmZpZWxkQS5jaGlsZHJlblsxXS5lbXBsb3llZVswXS5uYW1lLFwiVGltXCIpO1xuICB9KVxuICBpdCAoXCJzaG91bGQgcHJvY2VzcyBjc3YgY2h1bmtzIGFuZCBvdXRwdXQgY3N2IHJvd3NcIixhc3luYyBmdW5jdGlvbiAoKXtcbiAgICBjb25zdCBwcm9jZXNzb3I9bmV3IFByb2Nlc3NvckxvY2FsKG5ldyBDb252ZXJ0ZXIoe291dHB1dDpcImxpbmVcIn0pKTtcbiAgICBjb25zdCBkYXRhPXJlYWRGaWxlU3luYyhkYXRhRGlyK1wiL2NvbXBsZXhKU09OQ1NWXCIpO1xuICAgIGNvbnN0IGxpbmVzPWF3YWl0IHByb2Nlc3Nvci5wcm9jZXNzKGRhdGEpO1xuICAgIFxuICAgIGFzc2VydChsaW5lcy5sZW5ndGggPT09IDIpO1xuICB9KVxuICBpdCAoXCJzaG91bGQgcmV0dXJuIGVtcHR5IGFycmF5IGlmIHByZVJhd0hvb2sgcmVtb3ZlZCB0aGUgZGF0YVwiLCgpPT57XG4gICAgY29uc3QgY29udj1uZXcgQ29udmVydGVyKCk7XG4gICAgY29udi5wcmVSYXdEYXRhKChzdHIpPT57XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9KTtcbiAgICBjb25zdCBwcm9jZXNzb3I9bmV3IFByb2Nlc3NvckxvY2FsKGNvbnYpO1xuICAgIGNvbnN0IGRhdGE9cmVhZEZpbGVTeW5jKGRhdGFEaXIrXCIvY29tcGxleEpTT05DU1ZcIik7XG4gICAgcmV0dXJuIHByb2Nlc3Nvci5wcm9jZXNzKGRhdGEpXG4gICAgLnRoZW4oKGxpc3QpPT57XG4gICAgICBhc3NlcnQuZXF1YWwobGlzdC5sZW5ndGgsMCk7XG4gICAgfSlcbiAgfSlcbn0pXG5cbiJdfQ==