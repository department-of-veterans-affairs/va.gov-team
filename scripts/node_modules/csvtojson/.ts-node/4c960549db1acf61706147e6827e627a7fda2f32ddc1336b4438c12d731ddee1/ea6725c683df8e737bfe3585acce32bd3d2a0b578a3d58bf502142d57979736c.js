"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Converter_1 = require("../src/Converter");
var assert = require("assert");
var fs = require("fs");
describe("Converter error handling", function () {
    it("should handle quote not closed", function (done) {
        var rs = fs.createReadStream(__dirname + "/data/dataWithUnclosedQuotes");
        var conv = new Converter_1.Converter({});
        conv.on("error", function (err) {
            assert(err.err === "unclosed_quote");
            done();
        });
        rs.pipe(conv);
    });
    it("should handle column number mismatched error", function (done) {
        var rs = fs.createReadStream(__dirname + "/data/dataWithMismatchedColumn");
        var conv = new Converter_1.Converter({
            checkColumn: true
        });
        var tested = false;
        conv.on("error", function (err) {
            if (tested === false) {
                assert(err.err === "column_mismatched");
                tested = true;
                // done();
            }
        });
        conv.on('done', function () {
            assert(tested);
            done();
        });
        rs.pipe(conv);
    });
    it("should treat quote not closed as column_mismatched when alwaysSplitAtEOL is true", function (done) {
        var rs = fs.createReadStream(__dirname + "/data/dataWithUnclosedQuotes");
        var conv = new Converter_1.Converter({
            checkColumn: true,
            alwaysSplitAtEOL: true,
        });
        var tested = false;
        conv.on("error", function (err) {
            if (tested === false) {
                assert(err.err === "column_mismatched");
                tested = true;
            }
        });
        conv.on('done', function () {
            assert(tested);
            done();
        });
        rs.pipe(conv);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL2t4aWFuZy93b3JrL3Byb2plY3RzL2NzdjJqc29uL3Rlc3QvdGVzdEVycm9ySGFuZGxlLnRzIiwic291cmNlcyI6WyIvVXNlcnMva3hpYW5nL3dvcmsvcHJvamVjdHMvY3N2Mmpzb24vdGVzdC90ZXN0RXJyb3JIYW5kbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBMkM7QUFFM0MsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQy9CLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUV2QixRQUFRLENBQUMsMEJBQTBCLEVBQUU7SUFDbkMsRUFBRSxDQUFDLGdDQUFnQyxFQUFFLFVBQVMsSUFBSTtRQUNoRCxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLDhCQUE4QixDQUFDLENBQUM7UUFDekUsSUFBSSxJQUFJLEdBQUcsSUFBSSxxQkFBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVMsR0FBWTtZQUNwQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3JDLElBQUksRUFBRSxDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBR0gsRUFBRSxDQUFFLDhDQUE4QyxFQUFFLFVBQVMsSUFBSTtRQUMvRCxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLGdDQUFnQyxDQUFDLENBQUM7UUFDM0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxxQkFBUyxDQUFDO1lBQ3ZCLFdBQVcsRUFBQyxJQUFJO1NBQ2pCLENBQUMsQ0FBQztRQUNILElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFTLEdBQVk7WUFDcEMsSUFBSSxNQUFNLEtBQUssS0FBSyxFQUFFO2dCQUNwQixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUN4QyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNkLFVBQVU7YUFDWDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUM7WUFDYixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDZixJQUFJLEVBQUUsQ0FBQztRQUNULENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxrRkFBa0YsRUFBRSxVQUFTLElBQUk7UUFDbEcsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsR0FBRyw4QkFBOEIsQ0FBQyxDQUFDO1FBQ3pFLElBQUksSUFBSSxHQUFHLElBQUkscUJBQVMsQ0FBQztZQUN2QixXQUFXLEVBQUMsSUFBSTtZQUNoQixnQkFBZ0IsRUFBQyxJQUFJO1NBQ3RCLENBQUMsQ0FBQztRQUNILElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFTLEdBQVk7WUFDcEMsSUFBSSxNQUFNLEtBQUssS0FBSyxFQUFFO2dCQUNwQixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUN4QyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ2Y7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFDO1lBQ2IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2YsSUFBSSxFQUFFLENBQUM7UUFDVCxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEIsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udmVydGVyfSBmcm9tIFwiLi4vc3JjL0NvbnZlcnRlclwiO1xuaW1wb3J0IENTVkVycm9yIGZyb20gXCIuLi9zcmMvQ1NWRXJyb3JcIjtcbnZhciBhc3NlcnQgPSByZXF1aXJlKFwiYXNzZXJ0XCIpO1xudmFyIGZzID0gcmVxdWlyZShcImZzXCIpO1xuXG5kZXNjcmliZShcIkNvbnZlcnRlciBlcnJvciBoYW5kbGluZ1wiLCBmdW5jdGlvbigpIHtcbiAgaXQoXCJzaG91bGQgaGFuZGxlIHF1b3RlIG5vdCBjbG9zZWRcIiwgZnVuY3Rpb24oZG9uZSkge1xuICAgIHZhciBycyA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0oX19kaXJuYW1lICsgXCIvZGF0YS9kYXRhV2l0aFVuY2xvc2VkUXVvdGVzXCIpO1xuICAgIHZhciBjb252ID0gbmV3IENvbnZlcnRlcih7fSk7XG4gICAgY29udi5vbihcImVycm9yXCIsIGZ1bmN0aW9uKGVycjpDU1ZFcnJvcikge1xuICAgICAgYXNzZXJ0KGVyci5lcnIgPT09IFwidW5jbG9zZWRfcXVvdGVcIik7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gICAgcnMucGlwZShjb252KTtcbiAgfSk7XG4gXG5cbiAgaXQgKFwic2hvdWxkIGhhbmRsZSBjb2x1bW4gbnVtYmVyIG1pc21hdGNoZWQgZXJyb3JcIiwgZnVuY3Rpb24oZG9uZSkge1xuICAgIHZhciBycyA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0oX19kaXJuYW1lICsgXCIvZGF0YS9kYXRhV2l0aE1pc21hdGNoZWRDb2x1bW5cIik7XG4gICAgdmFyIGNvbnYgPSBuZXcgQ29udmVydGVyKHtcbiAgICAgIGNoZWNrQ29sdW1uOnRydWVcbiAgICB9KTtcbiAgICB2YXIgdGVzdGVkID0gZmFsc2U7XG4gICAgY29udi5vbihcImVycm9yXCIsIGZ1bmN0aW9uKGVycjpDU1ZFcnJvcikge1xuICAgICAgaWYgKHRlc3RlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgYXNzZXJ0KGVyci5lcnIgPT09IFwiY29sdW1uX21pc21hdGNoZWRcIik7XG4gICAgICAgIHRlc3RlZCA9IHRydWU7XG4gICAgICAgIC8vIGRvbmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb252Lm9uKCdkb25lJyxmdW5jdGlvbigpIHtcbiAgICAgIGFzc2VydCh0ZXN0ZWQpO1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICAgIHJzLnBpcGUoY29udik7XG4gIH0pO1xuXG4gIGl0KFwic2hvdWxkIHRyZWF0IHF1b3RlIG5vdCBjbG9zZWQgYXMgY29sdW1uX21pc21hdGNoZWQgd2hlbiBhbHdheXNTcGxpdEF0RU9MIGlzIHRydWVcIiwgZnVuY3Rpb24oZG9uZSkge1xuICAgIHZhciBycyA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0oX19kaXJuYW1lICsgXCIvZGF0YS9kYXRhV2l0aFVuY2xvc2VkUXVvdGVzXCIpO1xuICAgIHZhciBjb252ID0gbmV3IENvbnZlcnRlcih7XG4gICAgICBjaGVja0NvbHVtbjp0cnVlLFxuICAgICAgYWx3YXlzU3BsaXRBdEVPTDp0cnVlLFxuICAgIH0pO1xuICAgIHZhciB0ZXN0ZWQgPSBmYWxzZTtcbiAgICBjb252Lm9uKFwiZXJyb3JcIiwgZnVuY3Rpb24oZXJyOkNTVkVycm9yKSB7XG4gICAgICBpZiAodGVzdGVkID09PSBmYWxzZSkge1xuICAgICAgICBhc3NlcnQoZXJyLmVyciA9PT0gXCJjb2x1bW5fbWlzbWF0Y2hlZFwiKTtcbiAgICAgICAgdGVzdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb252Lm9uKCdkb25lJyxmdW5jdGlvbigpIHtcbiAgICAgIGFzc2VydCh0ZXN0ZWQpO1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICAgIHJzLnBpcGUoY29udik7XG4gIH0pO1xufSk7XG4iXX0=