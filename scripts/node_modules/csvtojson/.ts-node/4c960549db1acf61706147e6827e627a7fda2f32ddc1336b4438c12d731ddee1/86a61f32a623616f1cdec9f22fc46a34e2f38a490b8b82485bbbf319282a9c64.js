"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Result_1 = require("./Result");
var Converter_1 = require("./Converter");
var path_1 = __importDefault(require("path"));
var assert_1 = __importDefault(require("assert"));
var dataDir = path_1.default.join(__dirname, "../test/data/");
describe("Result", function () {
    it("should return need push downstream based on needEmitAll parameter", function () {
        var conv = new Converter_1.Converter();
        var res = new Result_1.Result(conv);
        assert_1.default.equal(res["needEmitAll"], false);
        conv.then();
        assert_1.default.equal(res["needEmitAll"], true);
        conv.parseParam.needEmitAll = false;
        assert_1.default.equal(res["needEmitAll"], false);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL2t4aWFuZy93b3JrL3Byb2plY3RzL2NzdjJqc29uL3NyYy9SZXN1bHQudGVzdC50cyIsInNvdXJjZXMiOlsiL1VzZXJzL2t4aWFuZy93b3JrL3Byb2plY3RzL2NzdjJqc29uL3NyYy9SZXN1bHQudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFnQztBQUNoQyx5Q0FBd0M7QUFHeEMsOENBQXdCO0FBQ3hCLGtEQUE0QjtBQUU1QixJQUFNLE9BQU8sR0FBQyxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxlQUFlLENBQUMsQ0FBQztBQUVuRCxRQUFRLENBQUMsUUFBUSxFQUFDO0lBQ2hCLEVBQUUsQ0FBRSxtRUFBbUUsRUFBQztRQUNwRSxJQUFNLElBQUksR0FBQyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztRQUMzQixJQUFNLEdBQUcsR0FBQyxJQUFJLGVBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixnQkFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osZ0JBQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFDLEtBQUssQ0FBQztRQUNsQyxnQkFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0MsQ0FBQyxDQUFDLENBQUM7QUFFTCxDQUFDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVzdWx0fSBmcm9tIFwiLi9SZXN1bHRcIjtcbmltcG9ydCB7IENvbnZlcnRlciB9IGZyb20gXCIuL0NvbnZlcnRlclwiO1xuaW1wb3J0IFAgZnJvbSBcImJsdWViaXJkXCI7XG5pbXBvcnQge3JlYWRGaWxlU3luY30gZnJvbSBcImZzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5pbXBvcnQgeyBKU09OUmVzdWx0IH0gZnJvbSBcIi4vbGluZVRvSnNvblwiO1xuY29uc3QgZGF0YURpcj1wYXRoLmpvaW4oX19kaXJuYW1lLFwiLi4vdGVzdC9kYXRhL1wiKTtcblxuZGVzY3JpYmUoXCJSZXN1bHRcIiwoKT0+e1xuICBpdCAoXCJzaG91bGQgcmV0dXJuIG5lZWQgcHVzaCBkb3duc3RyZWFtIGJhc2VkIG9uIG5lZWRFbWl0QWxsIHBhcmFtZXRlclwiLGZ1bmN0aW9uICgpe1xuICAgICAgY29uc3QgY29udj1uZXcgQ29udmVydGVyKCk7XG4gICAgICBjb25zdCByZXM9bmV3IFJlc3VsdChjb252KTtcbiAgICAgIGFzc2VydC5lcXVhbChyZXNbXCJuZWVkRW1pdEFsbFwiXSxmYWxzZSk7XG4gICAgICBjb252LnRoZW4oKTtcbiAgICAgIGFzc2VydC5lcXVhbChyZXNbXCJuZWVkRW1pdEFsbFwiXSx0cnVlKTtcbiAgICAgIGNvbnYucGFyc2VQYXJhbS5uZWVkRW1pdEFsbD1mYWxzZTtcbiAgICAgIGFzc2VydC5lcXVhbChyZXNbXCJuZWVkRW1pdEFsbFwiXSxmYWxzZSk7XG4gIH0pO1xuXG59KVxuXG4iXX0=