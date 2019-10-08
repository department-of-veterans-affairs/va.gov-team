"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Converter_1 = require("../src/Converter");
var src_1 = __importDefault(require("../src"));
var assert = require("assert");
var fs = require("fs");
var sandbox = require('sinon').sandbox.create();
describe("testCSVConverter2", function () {
    afterEach(function () {
        sandbox.restore();
    });
    it("should convert from large csv string", function (done) {
        var csvStr = fs.readFileSync(__dirname + "/data/large-csv-sample.csv", "utf8");
        var conv = new Converter_1.Converter({});
        conv.fromString(csvStr).then(function (res) {
            assert(res.length === 5290);
            done();
        });
    });
    it("should set eol", function (done) {
        var rs = fs.createReadStream(__dirname + "/data/large-csv-sample.csv");
        var conv = new Converter_1.Converter({
            eol: "\n"
        });
        var count = 0;
        conv.subscribe(function (resultJson, index) {
            count++;
            assert(resultJson);
            // assert(row.length === 2);
            assert(index >= 0);
        });
        conv.on("error", function () {
            console.log(arguments);
        });
        conv.then(function (result) {
            assert(result);
            assert(count === 5290);
            done();
        });
        rs.pipe(conv);
    });
    it("should convert tsv String", function (done) {
        var tsv = __dirname + "/data/dataTsv";
        var csvStr = fs.readFileSync(tsv, "utf8");
        var conv = new Converter_1.Converter({
            delimiter: "\t",
            "checkType": false
        });
        conv.fromString(csvStr).then(function (res) {
            assert(res);
            assert.equal(res.length, 200);
            done();
        });
    });
    it("should allow customised header with nohead csv string.", function (done) {
        var testData = __dirname + "/data/noheadercsv";
        var rs = fs.readFileSync(testData, "utf8");
        var conv = new Converter_1.Converter({
            noheader: true,
            headers: ["a", "b", "c", "e", "f", "g"]
        });
        conv.fromString(rs).then(function (json) {
            assert.equal(json[0].field7, 40);
            assert.equal(json[0].a, "CC102-PDMI-001");
            done();
        });
    });
    it("should parse fromFile", function (done) {
        var csvFile = __dirname + "/data/large-csv-sample.csv";
        var conv = new Converter_1.Converter({});
        conv.fromFile(csvFile).then(function (res) {
            assert.equal(res.length, 5290);
            done();
        });
    });
    it("should fromFile should emit error", function (done) {
        var csvFile = __dirname + "/data/dataWithUnclosedQuotes";
        var conv = new Converter_1.Converter({});
        conv.fromFile(csvFile).then(function (res) {
            done();
        }, function (err) {
            assert(err);
            done();
        });
    });
    it("should parse no header with dynamic column number", function (done) {
        var testData = __dirname + "/data/noheaderWithVaryColumnNum";
        var rs = fs.readFileSync(testData, "utf8");
        var conv = new Converter_1.Converter({
            noheader: true
        });
        conv.fromString(rs).then(function (json) {
            assert.equal(json.length, 2);
            assert.equal(json[1].field4, 7);
            done();
        });
    });
    it("should parse tabsv data with dynamic columns", function (done) {
        var testData = __dirname + "/data/tabsv";
        var rs = fs.readFileSync(testData, "utf8");
        var conv = new Converter_1.Converter({
            delimiter: "\t"
        });
        conv.fromString(rs).then(function (json) {
            assert.equal(json[0].Idevise, "");
            done();
        });
    });
    it("should use first line break as eol", function (done) {
        var testData = __dirname + "/data/testEol";
        var conv = new Converter_1.Converter({
            noheader: true
        });
        conv.fromFile(testData).then(function (json) {
            assert(json);
            done();
        });
    });
    it("should detect delimiter", function (done) {
        var testData = __dirname + "/data/dataWithAutoDelimiter";
        var rs = fs.createReadStream(testData);
        var conv = new Converter_1.Converter({ delimiter: "auto" });
        conv.then(function (res) {
            assert.equal(res[0].col1, "Mini. Sectt:hisar S.O");
            assert.equal(res[1].col1, "#Mini. Sectt");
            done();
        });
        rs.pipe(conv);
    });
    it("should emit delimiter event", function (done) {
        var testData = __dirname + "/data/dataWithAutoDelimiter";
        var rs = fs.createReadStream(testData);
        var conv = new Converter_1.Converter({ delimiter: "auto" });
        var delimiterCallback = sandbox.spy(function (delimiter) {
            assert.equal(delimiter, ":");
        });
        conv.on("delimiter", delimiterCallback);
        conv.then(function () {
            assert.equal(delimiterCallback.callCount, 1);
            done();
        });
        rs.pipe(conv);
    });
    it("should emit delimiter event when no header", function (done) {
        var testData = __dirname + "/data/dataWithAutoDelimiter";
        var rs = fs.createReadStream(testData);
        var conv = new Converter_1.Converter({ delimiter: "auto", noheader: true });
        var delimiterCallback = sandbox.spy(function (delimiter) {
            assert.equal(delimiter, ":");
        });
        conv.on("delimiter", delimiterCallback);
        conv.then(function () {
            assert.equal(delimiterCallback.callCount, 1);
            done();
        });
        rs.pipe(conv);
    });
    // it("should not emit delimiter event when delimiter is specified", function (done) {
    //   var testData = __dirname + "/data/columnArray";
    //   var rs = fs.createReadStream(testData);
    //   var conv = new Converter();
    //   conv.on("delimiter", function (delimiter) {
    //     assert.fail("delimiter event should not have been emitted");
    //   });
    //   conv.then(function () {
    //     done();
    //   });
    //   rs.pipe(conv);
    // });
    it("should stripe out whitespaces if trim is true", function (done) {
        var testData = __dirname + "/data/dataWithWhiteSpace";
        var rs = fs.createReadStream(testData);
        var conv = new Converter_1.Converter({ trim: true });
        conv.then(function (res) {
            assert.equal(res[0]["Column 1"], "Column1Row1");
            assert.equal(res[0]["Column 2"], "Column2Row1");
            done();
        });
        rs.pipe(conv);
    });
    it("should convert triple quotes correctly", function (done) {
        var testData = __dirname + "/data/dataWithTripleQoutes";
        var rs = fs.createReadStream(testData);
        var conv = new Converter_1.Converter({ trim: true });
        conv.then(function (res) {
            assert.equal(res[0].Description, "ac, abs, moon");
            assert.equal(res[1].Model, "Venture \"Extended Edition\"");
            assert.equal(res[2].Model, "Venture \"Extended Edition, Very Large\"");
            done();
        });
        rs.pipe(conv);
    });
    it("should pre process raw data in the line", function (done) {
        var testData = __dirname + "/data/quoteTolerant";
        var rs = fs.createReadStream(testData);
        var conv = new Converter_1.Converter();
        conv.preRawData(function (d) {
            return d.replace('THICK', 'THIN');
        });
        conv.then(function (res) {
            assert(res[0].Description.indexOf('THIN') > -1);
            done();
        });
        rs.pipe(conv);
    });
    it("should pre process by line in the line", function (done) {
        var testData = __dirname + "/data/quoteTolerant";
        var rs = fs.createReadStream(testData);
        var conv = new Converter_1.Converter();
        conv.preFileLine(function (line, lineNumber) {
            if (lineNumber === 1) {
                line = line.replace('THICK', 'THIN');
            }
            return line;
        });
        conv.then(function (res) {
            assert(res[0].Description.indexOf('THIN') > -1);
            done();
        });
        rs.pipe(conv);
    });
    it("should support object mode", function (done) {
        var testData = __dirname + "/data/complexJSONCSV";
        var rs = fs.createReadStream(testData);
        var conv = new Converter_1.Converter({}, {
            objectMode: true
        });
        conv.on("data", function (d) {
            assert(typeof d === "object");
        });
        conv.then(function (res) {
            assert(res);
            assert(res.length > 0);
            done();
        });
        rs.pipe(conv);
    });
    it("should get delimiter automatically if there is no header", function (done) {
        var test_converter = new Converter_1.Converter({
            delimiter: 'auto',
            headers: ['col1', 'col2'],
            noheader: true,
            checkColumn: true
        });
        var my_data = 'first_val\tsecond_val';
        test_converter.fromString(my_data).then(function (result) {
            assert.equal(result.length, 1);
            assert.equal(result[0].col1, "first_val");
            assert.equal(result[0].col2, "second_val");
            done();
        });
    });
    it("should process escape chars", function (done) {
        var test_converter = new Converter_1.Converter({
            escape: "\\",
            checkType: true
        });
        var testData = __dirname + "/data/dataWithSlashEscape";
        var rs = fs.createReadStream(testData);
        test_converter.then(function (res) {
            assert.equal(res[0].raw.hello, "world");
            assert.equal(res[0].raw.test, true);
            done();
        });
        rs.pipe(test_converter);
    });
    it("should output ndjson format", function (done) {
        var conv = new Converter_1.Converter();
        conv.fromString("a,b,c\n1,2,3\n4,5,6")
            .on("data", function (d) {
            d = d.toString();
            assert.equal(d[d.length - 1], "\n");
        })
            .on("done", done);
    });
    it("should parse from stream", function (done) {
        var testData = __dirname + "/data/complexJSONCSV";
        var rs = fs.createReadStream(testData);
        src_1.default()
            .fromStream(rs)
            .then(function (res) {
            assert(res);
            done();
        });
    });
    it("should set output as csv", function (done) {
        var testData = __dirname + "/data/complexJSONCSV";
        var rs = fs.createReadStream(testData);
        var numOfRow = 0;
        src_1.default({ output: "csv" })
            .fromStream(rs)
            .subscribe(function (row, idx) {
            numOfRow++;
            assert(row);
            assert(idx >= 0);
        })
            .on("done", function (error) {
            assert(!error);
            assert.equal(2, numOfRow);
            assert(numOfRow !== 0);
            done();
        });
    });
    it("should transform with subscribe function", function (done) {
        var testData = __dirname + "/data/complexJSONCSV";
        var rs = fs.createReadStream(testData);
        var numOfRow = 0;
        var numOfJson = 0;
        src_1.default()
            .fromStream(rs)
            .subscribe(function (json, idx) {
            json.a = "test";
            assert(idx >= 0);
        })
            .on("data", function (d) {
            var j = JSON.parse(d.toString());
            assert.equal(j.a, "test");
        })
            .on("end", function () {
            done();
        });
    });
    it("should parse a complex JSON", function (done) {
        var converter = new Converter_1.Converter({ checkType: true });
        var r = fs.createReadStream(__dirname + "/data/complexJSONCSV");
        converter.then(function (res) {
            assert(res);
            assert(res.length === 2);
            assert(res[0].fieldA.title === "Food Factory");
            assert(res[0].fieldA.children.length === 2);
            assert(res[0].fieldA.children[0].name === "Oscar");
            assert(res[0].fieldA.children[0].id === 23);
            assert(res[0].fieldA.children[1].name === "Tikka");
            assert.equal(res[0].fieldA.children[1].employee.length, 2);
            assert(res[0].fieldA.children[1].employee[0].name === "Tim", JSON.stringify(res[0].fieldA.children[1].employee[0]));
            assert(res[0].fieldA.address.length === 2);
            assert(res[0].fieldA.address[0] === "3 Lame Road");
            assert(res[0].fieldA.address[1] === "Grantstown");
            assert(res[0].description === "A fresh new food factory", res[0].description);
            done();
        });
        r.pipe(converter);
    });
    it("should allow flatKey to change parse behaviour", function (done) {
        var conv = new Converter_1.Converter({
            flatKeys: true
        });
        conv.fromString("a.b,b.d,c.a\n1,2,3\n4,5,6").subscribe(function (d) {
            assert(d["a.b"]);
            assert(d["b.d"]);
            assert(d["c.a"]);
        })
            .on("done", done);
    });
    it("should allow flat mods to change parse behaviour", function (done) {
        var conv = new Converter_1.Converter({
            colParser: {
                "a.b": {
                    flat: true
                }
            }
        });
        conv.fromString("a.b,b.d,c.a\n1,2,3\n4,5,6").subscribe(function (d) {
            assert(d["a.b"]);
        })
            .on("done", done);
    });
    it("should process long header", function (done) {
        var testData = __dirname + "/data/longHeader";
        var rs = fs.createReadStream(testData, { highWaterMark: 100 });
        var numOfRow = 0;
        var numOfJson = 0;
        src_1.default({}, { highWaterMark: 100 })
            .fromStream(rs)
            .subscribe(function (res, idx) {
            numOfJson++;
            assert.equal(res.Date, '8/26/16');
            assert(idx >= 0);
        })
            .on("done", function () {
            assert(numOfJson === 1);
            done();
        });
    });
    it("should parse #139", function (done) {
        var rs = fs.createReadStream(__dirname + "/data/data#139");
        src_1.default()
            .fromStream(rs)
            .then(function (res) {
            assert.equal(res[1].field3, "9001009395 9001009990");
            done();
        });
    });
    it("should ignore column", function (done) {
        var rs = fs.createReadStream(__dirname + "/data/dataWithQoutes");
        var headerEmitted = false;
        src_1.default({
            ignoreColumns: /TIMESTAMP/
        })
            .fromStream(rs)
            .on("header", function (header) {
            assert.equal(header.indexOf("TIMESTAMP"), -1);
            assert.equal(header.indexOf("UPDATE"), 0);
            if (headerEmitted) {
                throw ("header event should only happen once");
            }
            headerEmitted = true;
        })
            // .on("csv", function (row, idx) {
            //   if (!headerEmitted) {
            //     throw ("header should be emitted before any data events");
            //   }
            //   assert(idx >= 0);
            //   if (idx === 1) {
            //     assert.equal(row[0], "n");
            //   }
            // })
            .subscribe(function (j, idx) {
            assert(!j.TIMESTAMP);
            assert(idx >= 0);
        })
            .on("done", function () {
            assert(headerEmitted);
            done();
        });
    });
    it("should keep space around comma in csv", function () {
        var str = "\"Name\",\"Number\"\n    \"John , space\", 1234\n    \"Mr. , space\", 4321\n    ";
        return src_1.default().fromString(str)
            .then(function (data) {
            assert.equal(data[0].Name, "John , space");
            assert.equal(data[1].Name, "Mr. , space");
        });
    });
    it("should include column", function (done) {
        var rs = fs.createReadStream(__dirname + "/data/dataWithQoutes");
        src_1.default({
            includeColumns: /TIMESTAMP/
        })
            .fromStream(rs)
            .on("header", function (header) {
            assert.equal(header.indexOf("TIMESTAMP"), 0);
            assert.equal(header.indexOf("UPDATE"), -1);
            assert.equal(header.length, 1);
        })
            .subscribe(function (j, idx) {
            assert(idx >= 0);
            if (idx === 1) {
                assert.equal(j.TIMESTAMP, "abc, def, ccc");
            }
            assert(!j.UID);
            assert(!j['BYTES SENT']);
        })
            .on("done", function () {
            done();
        });
    });
    it("should allow headers and include columns to be given as reference to the same var", function (done) {
        var rs = fs.createReadStream(__dirname + "/data/complexJSONCSV");
        var headers = [
            'first',
            'second',
            'third',
        ];
        var expected = headers;
        src_1.default({
            headers: headers,
            includeColumns: /(first|second|third)/,
        })
            .fromStream(rs)
            .on("header", function (header) {
            expected.forEach(function (value, index) {
                assert.equal(header.indexOf(value), index);
            });
        })
            .subscribe(function (j, idx) {
            assert(idx >= 0);
            assert.equal(expected.length, Object.keys(j).length);
            expected.forEach(function (attribute) {
                assert(j.hasOwnProperty(attribute));
            });
        })
            .on("done", function () {
            done();
        });
    });
    it("should leave provided params objects unmutated", function () {
        var rs = fs.createReadStream(__dirname + "/data/complexJSONCSV");
        var includeColumns = [
            'fieldA.title',
            'description',
        ];
        return src_1.default({
            includeColumns: /(fieldA\.title|description)/,
        })
            .fromStream(rs)
            .on("json", function (j, idx) {
            assert(idx >= 0);
        })
            .on("header", function (header) {
            includeColumns.forEach(function (value, index) {
                assert.equal(index, header.indexOf(value));
            });
        });
    });
    it("should only call done once", function (done) {
        var counter = 0;
        src_1.default()
            .fromString('"a","b", "c""')
            .on('done', function () {
            counter++;
        });
        setTimeout(function () {
            assert.equal(counter, 1);
            done();
        }, 100);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL2t4aWFuZy93b3JrL3Byb2plY3RzL2NzdjJqc29uL3Rlc3QvdGVzdENTVkNvbnZlcnRlcjIudHMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9reGlhbmcvd29yay9wcm9qZWN0cy9jc3YyanNvbi90ZXN0L3Rlc3RDU1ZDb252ZXJ0ZXIyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOENBQTZDO0FBQzdDLCtDQUF5QjtBQUN6QixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDL0IsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDaEQsUUFBUSxDQUFDLG1CQUFtQixFQUFFO0lBQzVCLFNBQVMsQ0FBQztRQUNSLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNwQixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxzQ0FBc0MsRUFBRSxVQUFVLElBQUk7UUFDdkQsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsNEJBQTRCLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxxQkFBUyxDQUFDLEVBQ3hCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRztZQUN4QyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQztZQUM1QixJQUFJLEVBQUUsQ0FBQztRQUNULENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsVUFBVSxJQUFJO1FBQ2pDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEdB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QUM7WUFDNUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsQ0FBQztZQUNuRCxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwSCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzNDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxhQUFhLENBQUMsQ0FBQztZQUNuRCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssWUFBWSxDQUFDLENBQUM7WUFDbEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEtBQUssMEJBQTBCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzlFLElBQUksRUFBRSxDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQUM7UUFDSCxDQUFDLENBQUMsSUFBSSxDQUFDLFNB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QUNULENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb252ZXJ0ZXIgfSBmcm9tIFwiLi4vc3JjL0NvbnZlcnRlclwiO1xuaW1wb3J0IGNzdiBmcm9tIFwiLi4vc3JjXCI7XG52YXIgYXNzZXJ0ID0gcmVxdWlyZShcImFzc2VydFwiKTtcbnZhciBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcbnZhciBzYW5kYm94ID0gcmVxdWlyZSgnc2lub24nKS5zYW5kYm94LmNyZWF0ZSgpO1xuZGVzY3JpYmUoXCJ0ZXN0Q1NWQ29udmVydGVyMlwiLCBmdW5jdGlvbiAoKSB7XG4gIGFmdGVyRWFjaChmdW5jdGlvbiAoKSB7XG4gICAgc2FuZGJveC5yZXN0b3JlKCk7XG4gIH0pO1xuXG4gIGl0KFwic2hvdWxkIGNvbnZlcnQgZnJvbSBsYXJnZSBjc3Ygc3RyaW5nXCIsIGZ1bmN0aW9uIChkb25lKSB7XG4gICAgdmFyIGNzdlN0ciA9IGZzLnJlYWRGaWxlU3luYyhfX2Rpcm5hbWUgKyBcIi9kYXRhL2xhcmdlLWNzdi1zYW1wbGUuY3N2XCIsIFwidXRmOFwiKTtcbiAgICB2YXIgY29udiA9IG5ldyBDb252ZXJ0ZXIoe1xuICAgIH0pO1xuICAgIGNvbnYuZnJvbVN0cmluZyhjc3ZTdHIpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgYXNzZXJ0KHJlcy5sZW5ndGggPT09IDUyOTApO1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9KTtcblxuICBpdChcInNob3VsZCBzZXQgZW9sXCIsIGZ1bmN0aW9uIChkb25lKSB7XG4gICAgdmFyIHJzID0gZnMuY3JlYXRlUmVhZFN0cmVhbShfX2Rpcm5hbWUgKyBcIi9kYXRhL2xhcmdlLWNzdi1zYW1wbGUuY3N2XCIpO1xuICAgIHZhciBjb252ID0gbmV3IENvbnZlcnRlcih7XG4gICAgICBlb2w6IFwiXFxuXCJcbiAgICB9KTtcbiAgICB2YXIgY291bnQgPSAwO1xuICAgIGNvbnYuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXN1bHRKc29uLCBpbmRleCkge1xuICAgICAgY291bnQrKztcbiAgICAgIGFzc2VydChyZXN1bHRKc29uKTtcbiAgICAgIC8vIGFzc2VydChyb3cubGVuZ3RoID09PSAyKTtcbiAgICAgIGFzc2VydChpbmRleCA+PSAwKTtcbiAgICB9KTtcbiAgICBjb252Lm9uKFwiZXJyb3JcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coYXJndW1lbnRzKTtcbiAgICB9KTtcbiAgICBjb252LnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgYXNzZXJ0KHJlc3VsdCk7XG4gICAgICBhc3NlcnQoY291bnQgPT09IDUyOTApO1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICAgIHJzLnBpcGUoY29udik7XG4gIH0pO1xuXG4gIGl0KFwic2hvdWxkIGNvbnZlcnQgdHN2IFN0cmluZ1wiLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgIHZhciB0c3YgPSBfX2Rpcm5hbWUgKyBcIi9kYXRhL2RhdGFUc3ZcIjtcbiAgICB2YXIgY3N2U3RyID0gZnMucmVhZEZpbGVTeW5jKHRzdiwgXCJ1dGY4XCIpO1xuICAgIHZhciBjb252ID0gbmV3IENvbnZlcnRlcih7XG4gICAgICBkZWxpbWl0ZXI6IFwiXFx0XCIsXG4gICAgICBcImNoZWNrVHlwZVwiOiBmYWxzZVxuICAgIH0pO1xuICAgIGNvbnYuZnJvbVN0cmluZyhjc3ZTdHIpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgYXNzZXJ0KHJlcyk7XG4gICAgICBhc3NlcnQuZXF1YWwocmVzLmxlbmd0aCwgMjAwKTtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgaXQoXCJzaG91bGQgYWxsb3cgY3VzdG9taXNlZCBoZWFkZXIgd2l0aCBub2hlYWQgY3N2IHN0cmluZy5cIiwgZnVuY3Rpb24gKGRvbmUpIHtcbiAgICB2YXIgdGVzdERhdGEgPSBfX2Rpcm5hbWUgKyBcIi9kYXRhL25vaGVhZGVyY3N2XCI7XG4gICAgdmFyIHJzID0gZnMucmVhZEZpbGVTeW5jKHRlc3REYXRhLCBcInV0ZjhcIik7XG4gICAgdmFyIGNvbnYgPSBuZXcgQ29udmVydGVyKHtcbiAgICAgIG5vaGVhZGVyOiB0cnVlLFxuICAgICAgaGVhZGVyczogW1wiYVwiLCBcImJcIiwgXCJjXCIsIFwiZVwiLCBcImZcIiwgXCJnXCJdXG4gICAgfSk7XG4gICAgY29udi5mcm9tU3RyaW5nKHJzKS50aGVuKGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICBhc3NlcnQuZXF1YWwoanNvblswXS5maWVsZDcsIDQwKTtcbiAgICAgIGFzc2VydC5lcXVhbChqc29uWzBdLmEsIFwiQ0MxMDItUERNSS0wMDFcIik7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGl0KFwic2hvdWxkIHBhcnNlIGZyb21GaWxlXCIsIGZ1bmN0aW9uIChkb25lKSB7XG4gICAgdmFyIGNzdkZpbGUgPSBfX2Rpcm5hbWUgKyBcIi9kYXRhL2xhcmdlLWNzdi1zYW1wbGUuY3N2XCI7XG4gICAgdmFyIGNvbnYgPSBuZXcgQ29udmVydGVyKHtcbiAgICB9KTtcbiAgICBjb252LmZyb21GaWxlKGNzdkZpbGUpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgYXNzZXJ0LmVxdWFsKHJlcy5sZW5ndGgsIDUyOTApO1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9KTtcblxuICBpdChcInNob3VsZCBmcm9tRmlsZSBzaG91bGQgZW1pdCBlcnJvclwiLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgIHZhciBjc3ZGaWxlID0gX19kaXJuYW1lICsgXCIvZGF0YS9kYXRhV2l0aFVuY2xvc2VkUXVvdGVzXCI7XG4gICAgdmFyIGNvbnYgPSBuZXcgQ29udmVydGVyKHtcbiAgICB9KTtcbiAgICBjb252LmZyb21GaWxlKGNzdkZpbGUpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuXG4gICAgICBkb25lKCk7XG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgYXNzZXJ0KGVycik7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGl0KFwic2hvdWxkIHBhcnNlIG5vIGhlYWRlciB3aXRoIGR5bmFtaWMgY29sdW1uIG51bWJlclwiLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgIHZhciB0ZXN0RGF0YSA9IF9fZGlybmFtZSArIFwiL2RhdGEvbm9oZWFkZXJXaXRoVmFyeUNvbHVtbk51bVwiO1xuICAgIHZhciBycyA9IGZzLnJlYWRGaWxlU3luYyh0ZXN0RGF0YSwgXCJ1dGY4XCIpO1xuICAgIHZhciBjb252ID0gbmV3IENvbnZlcnRlcih7XG4gICAgICBub2hlYWRlcjogdHJ1ZVxuICAgIH0pO1xuICAgIGNvbnYuZnJvbVN0cmluZyhycykudGhlbihmdW5jdGlvbiAoanNvbikge1xuICAgICAgYXNzZXJ0LmVxdWFsKGpzb24ubGVuZ3RoLCAyKTtcbiAgICAgIGFzc2VydC5lcXVhbChqc29uWzFdLmZpZWxkNCwgNyk7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGl0KFwic2hvdWxkIHBhcnNlIHRhYnN2IGRhdGEgd2l0aCBkeW5hbWljIGNvbHVtbnNcIiwgZnVuY3Rpb24gKGRvbmUpIHtcbiAgICB2YXIgdGVzdERhdGEgPSBfX2Rpcm5hbWUgKyBcIi9kYXRhL3RhYnN2XCI7XG4gICAgdmFyIHJzID0gZnMucmVhZEZpbGVTeW5jKHRlc3REYXRhLCBcInV0ZjhcIik7XG4gICAgdmFyIGNvbnYgPSBuZXcgQ29udmVydGVyKHtcbiAgICAgIGRlbGltaXRlcjogXCJcXHRcIlxuICAgIH0pO1xuICAgIGNvbnYuZnJvbVN0cmluZyhycykudGhlbihmdW5jdGlvbiAoanNvbikge1xuICAgICAgYXNzZXJ0LmVxdWFsKGpzb25bMF0uSWRldmlzZSwgXCJcIik7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGl0KFwic2hvdWxkIHVzZSBmaXJzdCBsaW5lIGJyZWFrIGFzIGVvbFwiLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgIHZhciB0ZXN0RGF0YSA9IF9fZGlybmFtZSArIFwiL2RhdGEvdGVzdEVvbFwiO1xuICAgIHZhciBjb252ID0gbmV3IENvbnZlcnRlcih7XG4gICAgICBub2hlYWRlcjogdHJ1ZVxuICAgIH0pO1xuICAgIGNvbnYuZnJvbUZpbGUodGVzdERhdGEpLnRoZW4oZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgIGFzc2VydChqc29uKTtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfSk7XG5cblxuICBpdChcInNob3VsZCBkZXRlY3QgZGVsaW1pdGVyXCIsIGZ1bmN0aW9uIChkb25lKSB7XG4gICAgdmFyIHRlc3REYXRhID0gX19kaXJuYW1lICsgXCIvZGF0YS9kYXRhV2l0aEF1dG9EZWxpbWl0ZXJcIjtcbiAgICB2YXIgcnMgPSBmcy5jcmVhdGVSZWFkU3RyZWFtKHRlc3REYXRhKTtcbiAgICB2YXIgY29udiA9IG5ldyBDb252ZXJ0ZXIoeyBkZWxpbWl0ZXI6IFwiYXV0b1wiIH0pO1xuICAgIGNvbnYudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICBhc3NlcnQuZXF1YWwocmVzWzBdLmNvbDEsIFwiTWluaS4gU2VjdHQ6aGlzYXIgUy5PXCIpO1xuICAgICAgYXNzZXJ0LmVxdWFsKHJlc1sxXS5jb2wxLCBcIiNNaW5pLiBTZWN0dFwiKTtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgICBycy5waXBlKGNvbnYpO1xuICB9KTtcblxuICBpdChcInNob3VsZCBlbWl0IGRlbGltaXRlciBldmVudFwiLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgIHZhciB0ZXN0RGF0YSA9IF9fZGlybmFtZSArIFwiL2RhdGEvZGF0YVdpdGhBdXRvRGVsaW1pdGVyXCI7XG4gICAgdmFyIHJzID0gZnMuY3JlYXRlUmVhZFN0cmVhbSh0ZXN0RGF0YSk7XG4gICAgdmFyIGNvbnYgPSBuZXcgQ29udmVydGVyKHsgZGVsaW1pdGVyOiBcImF1dG9cIiB9KTtcbiAgICB2YXIgZGVsaW1pdGVyQ2FsbGJhY2sgPSBzYW5kYm94LnNweShmdW5jdGlvbiAoZGVsaW1pdGVyKSB7XG4gICAgICBhc3NlcnQuZXF1YWwoZGVsaW1pdGVyLCBcIjpcIik7XG4gICAgfSk7XG4gICAgY29udi5vbihcImRlbGltaXRlclwiLCBkZWxpbWl0ZXJDYWxsYmFjayk7XG4gICAgY29udi50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIGFzc2VydC5lcXVhbChkZWxpbWl0ZXJDYWxsYmFjay5jYWxsQ291bnQsIDEpO1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICAgIHJzLnBpcGUoY29udik7XG4gIH0pO1xuXG4gIGl0KFwic2hvdWxkIGVtaXQgZGVsaW1pdGVyIGV2ZW50IHdoZW4gbm8gaGVhZGVyXCIsIGZ1bmN0aW9uIChkb25lKSB7XG4gICAgdmFyIHRlc3REYXRhID0gX19kaXJuYW1lICsgXCIvZGF0YS9kYXRhV2l0aEF1dG9EZWxpbWl0ZXJcIjtcbiAgICB2YXIgcnMgPSBmcy5jcmVhdGVSZWFkU3RyZWFtKHRlc3REYXRhKTtcbiAgICB2YXIgY29udiA9IG5ldyBDb252ZXJ0ZXIoeyBkZWxpbWl0ZXI6IFwiYXV0b1wiLCBub2hlYWRlcjogdHJ1ZSB9KTtcbiAgICB2YXIgZGVsaW1pdGVyQ2FsbGJhY2sgPSBzYW5kYm94LnNweShmdW5jdGlvbiAoZGVsaW1pdGVyKSB7XG4gICAgICBhc3NlcnQuZXF1YWwoZGVsaW1pdGVyLCBcIjpcIik7XG4gICAgfSk7XG4gICAgY29udi5vbihcImRlbGltaXRlclwiLCBkZWxpbWl0ZXJDYWxsYmFjayk7XG4gICAgY29udi50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIGFzc2VydC5lcXVhbChkZWxpbWl0ZXJDYWxsYmFjay5jYWxsQ291bnQsIDEpO1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICAgIHJzLnBpcGUoY29udik7XG4gIH0pO1xuXG4gIC8vIGl0KFwic2hvdWxkIG5vdCBlbWl0IGRlbGltaXRlciBldmVudCB3aGVuIGRlbGltaXRlciBpcyBzcGVjaWZpZWRcIiwgZnVuY3Rpb24gKGRvbmUpIHtcbiAgLy8gICB2YXIgdGVzdERhdGEgPSBfX2Rpcm5hbWUgKyBcIi9kYXRhL2NvbHVtbkFycmF5XCI7XG4gIC8vICAgdmFyIHJzID0gZnMuY3JlYXRlUmVhZFN0cmVhbSh0ZXN0RGF0YSk7XG4gIC8vICAgdmFyIGNvbnYgPSBuZXcgQ29udmVydGVyKCk7XG4gIC8vICAgY29udi5vbihcImRlbGltaXRlclwiLCBmdW5jdGlvbiAoZGVsaW1pdGVyKSB7XG4gIC8vICAgICBhc3NlcnQuZmFpbChcImRlbGltaXRlciBldmVudCBzaG91bGQgbm90IGhhdmUgYmVlbiBlbWl0dGVkXCIpO1xuICAvLyAgIH0pO1xuICAvLyAgIGNvbnYudGhlbihmdW5jdGlvbiAoKSB7XG4gIC8vICAgICBkb25lKCk7XG4gIC8vICAgfSk7XG5cbiAgLy8gICBycy5waXBlKGNvbnYpO1xuICAvLyB9KTtcblxuICBpdChcInNob3VsZCBzdHJpcGUgb3V0IHdoaXRlc3BhY2VzIGlmIHRyaW0gaXMgdHJ1ZVwiLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgIHZhciB0ZXN0RGF0YSA9IF9fZGlybmFtZSArIFwiL2RhdGEvZGF0YVdpdGhXaGl0ZVNwYWNlXCI7XG4gICAgdmFyIHJzID0gZnMuY3JlYXRlUmVhZFN0cmVhbSh0ZXN0RGF0YSk7XG4gICAgdmFyIGNvbnYgPSBuZXcgQ29udmVydGVyKHsgdHJpbTogdHJ1ZSB9KTtcbiAgICBjb252LnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgYXNzZXJ0LmVxdWFsKHJlc1swXVtcIkNvbHVtbiAxXCJdLCBcIkNvbHVtbjFSb3cxXCIpO1xuICAgICAgYXNzZXJ0LmVxdWFsKHJlc1swXVtcIkNvbHVtbiAyXCJdLCBcIkNvbHVtbjJSb3cxXCIpO1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICAgIHJzLnBpcGUoY29udik7XG4gIH0pO1xuXG4gIGl0KFwic2hvdWxkIGNvbnZlcnQgdHJpcGxlIHF1b3RlcyBjb3JyZWN0bHlcIiwgZnVuY3Rpb24gKGRvbmUpIHtcbiAgICB2YXIgdGVzdERhdGEgPSBfX2Rpcm5hbWUgKyBcIi9kYXRhL2RhdGFXaXRoVHJpcGxlUW91dGVzXCI7XG4gICAgdmFyIHJzID0gZnMuY3JlYXRlUmVhZFN0cmVhbSh0ZXN0RGF0YSk7XG4gICAgdmFyIGNvbnYgPSBuZXcgQ29udmVydGVyKHsgdHJpbTogdHJ1ZSB9KTtcbiAgICBjb252LnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgYXNzZXJ0LmVxdWFsKHJlc1swXS5EZXNjcmlwdGlvbiwgXCJhYywgYWJzLCBtb29uXCIpO1xuICAgICAgYXNzZXJ0LmVxdWFsKHJlc1sxXS5Nb2RlbCwgXCJWZW50dXJlIFxcXCJFeHRlbmRlZCBFZGl0aW9uXFxcIlwiKTtcbiAgICAgIGFzc2VydC5lcXVhbChyZXNbMl0uTW9kZWwsIFwiVmVudHVyZSBcXFwiRXh0ZW5kZWQgRWRpdGlvbiwgVmVyeSBMYXJnZVxcXCJcIik7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gICAgcnMucGlwZShjb252KTtcbiAgfSk7XG5cblxuXG4gIGl0KFwic2hvdWxkIHByZSBwcm9jZXNzIHJhdyBkYXRhIGluIHRoZSBsaW5lXCIsIGZ1bmN0aW9uIChkb25lKSB7XG4gICAgdmFyIHRlc3REYXRhID0gX19kaXJuYW1lICsgXCIvZGF0YS9xdW90ZVRvbGVyYW50XCI7XG4gICAgdmFyIHJzID0gZnMuY3JlYXRlUmVhZFN0cmVhbSh0ZXN0RGF0YSk7XG4gICAgdmFyIGNvbnYgPSBuZXcgQ29udmVydGVyKCk7XG4gICAgY29udi5wcmVSYXdEYXRhKGZ1bmN0aW9uIChkKSB7XG4gICAgICByZXR1cm4gZC5yZXBsYWNlKCdUSElDSycsICdUSElOJyk7XG4gICAgfSk7XG4gICAgY29udi50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIGFzc2VydChyZXNbMF0uRGVzY3JpcHRpb24uaW5kZXhPZignVEhJTicpID4gLTEpO1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICAgIHJzLnBpcGUoY29udik7XG4gIH0pO1xuXG4gIGl0KFwic2hvdWxkIHByZSBwcm9jZXNzIGJ5IGxpbmUgaW4gdGhlIGxpbmVcIiwgZnVuY3Rpb24gKGRvbmUpIHtcbiAgICB2YXIgdGVzdERhdGEgPSBfX2Rpcm5hbWUgKyBcIi9kYXRhL3F1b3RlVG9sZXJhbnRcIjtcbiAgICB2YXIgcnMgPSBmcy5jcmVhdGVSZWFkU3RyZWFtKHRlc3REYXRhKTtcbiAgICB2YXIgY29udiA9IG5ldyBDb252ZXJ0ZXIoKTtcbiAgICBjb252LnByZUZpbGVMaW5lKGZ1bmN0aW9uIChsaW5lLCBsaW5lTnVtYmVyKSB7XG4gICAgICBpZiAobGluZU51bWJlciA9PT0gMSkge1xuICAgICAgICBsaW5lID0gbGluZS5yZXBsYWNlKCdUSElDSycsICdUSElOJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGluZTtcbiAgICB9KTtcblxuICAgIGNvbnYudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICBhc3NlcnQocmVzWzBdLkRlc2NyaXB0aW9uLmluZGV4T2YoJ1RISU4nKSA+IC0xKTtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgICBycy5waXBlKGNvbnYpO1xuICB9KTtcblxuICBpdChcInNob3VsZCBzdXBwb3J0IG9iamVjdCBtb2RlXCIsIGZ1bmN0aW9uIChkb25lKSB7XG4gICAgdmFyIHRlc3REYXRhID0gX19kaXJuYW1lICsgXCIvZGF0YS9jb21wbGV4SlNPTkNTVlwiO1xuICAgIHZhciBycyA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0odGVzdERhdGEpO1xuICAgIHZhciBjb252ID0gbmV3IENvbnZlcnRlcih7fSwge1xuICAgICAgb2JqZWN0TW9kZTogdHJ1ZVxuICAgIH0pO1xuICAgIGNvbnYub24oXCJkYXRhXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICBhc3NlcnQodHlwZW9mIGQgPT09IFwib2JqZWN0XCIpO1xuICAgIH0pO1xuICAgIGNvbnYudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICBhc3NlcnQocmVzKTtcbiAgICAgIGFzc2VydChyZXMubGVuZ3RoID4gMCk7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gICAgcnMucGlwZShjb252KTtcbiAgfSk7XG5cbiAgaXQoXCJzaG91bGQgZ2V0IGRlbGltaXRlciBhdXRvbWF0aWNhbGx5IGlmIHRoZXJlIGlzIG5vIGhlYWRlclwiLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgIHZhciB0ZXN0X2NvbnZlcnRlciA9IG5ldyBDb252ZXJ0ZXIoe1xuICAgICAgZGVsaW1pdGVyOiAnYXV0bycsXG4gICAgICBoZWFkZXJzOiBbJ2NvbDEnLCAnY29sMiddLFxuICAgICAgbm9oZWFkZXI6IHRydWUsXG4gICAgICBjaGVja0NvbHVtbjogdHJ1ZVxuICAgIH0pO1xuXG4gICAgdmFyIG15X2RhdGEgPSAnZmlyc3RfdmFsXFx0c2Vjb25kX3ZhbCc7XG4gICAgdGVzdF9jb252ZXJ0ZXIuZnJvbVN0cmluZyhteV9kYXRhKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIGFzc2VydC5lcXVhbChyZXN1bHQubGVuZ3RoLCAxKTtcbiAgICAgIGFzc2VydC5lcXVhbChyZXN1bHRbMF0uY29sMSwgXCJmaXJzdF92YWxcIik7XG4gICAgICBhc3NlcnQuZXF1YWwocmVzdWx0WzBdLmNvbDIsIFwic2Vjb25kX3ZhbFwiKTtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgaXQoXCJzaG91bGQgcHJvY2VzcyBlc2NhcGUgY2hhcnNcIiwgZnVuY3Rpb24gKGRvbmUpIHtcbiAgICB2YXIgdGVzdF9jb252ZXJ0ZXIgPSBuZXcgQ29udmVydGVyKHtcbiAgICAgIGVzY2FwZTogXCJcXFxcXCIsXG4gICAgICBjaGVja1R5cGU6IHRydWVcbiAgICB9KTtcblxuICAgIHZhciB0ZXN0RGF0YSA9IF9fZGlybmFtZSArIFwiL2RhdGEvZGF0YVdpdGhTbGFzaEVzY2FwZVwiO1xuICAgIHZhciBycyA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0odGVzdERhdGEpO1xuICAgIHRlc3RfY29udmVydGVyLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgYXNzZXJ0LmVxdWFsKHJlc1swXS5yYXcuaGVsbG8sIFwid29ybGRcIik7XG4gICAgICBhc3NlcnQuZXF1YWwocmVzWzBdLnJhdy50ZXN0LCB0cnVlKTtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgICBycy5waXBlKHRlc3RfY29udmVydGVyKTtcbiAgfSk7XG5cbiAgaXQoXCJzaG91bGQgb3V0cHV0IG5kanNvbiBmb3JtYXRcIiwgZnVuY3Rpb24gKGRvbmUpIHtcbiAgICB2YXIgY29udiA9IG5ldyBDb252ZXJ0ZXIoKTtcbiAgICBjb252LmZyb21TdHJpbmcoXCJhLGIsY1xcbjEsMiwzXFxuNCw1LDZcIilcbiAgICAgIC5vbihcImRhdGFcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgZCA9IGQudG9TdHJpbmcoKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKGRbZC5sZW5ndGggLSAxXSwgXCJcXG5cIik7XG4gICAgICB9KVxuICAgICAgLm9uKFwiZG9uZVwiLCBkb25lKTtcbiAgfSk7XG5cbiAgaXQoXCJzaG91bGQgcGFyc2UgZnJvbSBzdHJlYW1cIiwgZnVuY3Rpb24gKGRvbmUpIHtcbiAgICB2YXIgdGVzdERhdGEgPSBfX2Rpcm5hbWUgKyBcIi9kYXRhL2NvbXBsZXhKU09OQ1NWXCI7XG4gICAgdmFyIHJzID0gZnMuY3JlYXRlUmVhZFN0cmVhbSh0ZXN0RGF0YSk7XG4gICAgY3N2KClcbiAgICAgIC5mcm9tU3RyZWFtKHJzKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBhc3NlcnQocmVzKTtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfSk7XG4gIH0pO1xuXG4gIGl0KFwic2hvdWxkIHNldCBvdXRwdXQgYXMgY3N2XCIsIGZ1bmN0aW9uIChkb25lKSB7XG4gICAgdmFyIHRlc3REYXRhID0gX19kaXJuYW1lICsgXCIvZGF0YS9jb21wbGV4SlNPTkNTVlwiO1xuICAgIHZhciBycyA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0odGVzdERhdGEpO1xuICAgIHZhciBudW1PZlJvdyA9IDA7XG4gICAgY3N2KHsgb3V0cHV0OiBcImNzdlwiIH0pXG4gICAgICAuZnJvbVN0cmVhbShycylcbiAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJvdywgaWR4KSB7XG4gICAgICAgIG51bU9mUm93Kys7XG4gICAgICAgIGFzc2VydChyb3cpO1xuICAgICAgICBhc3NlcnQoaWR4ID49IDApO1xuICAgICAgfSlcblxuICAgICAgLm9uKFwiZG9uZVwiLCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgYXNzZXJ0KCFlcnJvcik7XG4gICAgICAgIGFzc2VydC5lcXVhbCgyLCBudW1PZlJvdyk7XG4gICAgICAgIGFzc2VydChudW1PZlJvdyAhPT0gMCk7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH0pO1xuICB9KTtcblxuICBpdChcInNob3VsZCB0cmFuc2Zvcm0gd2l0aCBzdWJzY3JpYmUgZnVuY3Rpb25cIiwgZnVuY3Rpb24gKGRvbmUpIHtcbiAgICB2YXIgdGVzdERhdGEgPSBfX2Rpcm5hbWUgKyBcIi9kYXRhL2NvbXBsZXhKU09OQ1NWXCI7XG4gICAgdmFyIHJzID0gZnMuY3JlYXRlUmVhZFN0cmVhbSh0ZXN0RGF0YSk7XG4gICAgdmFyIG51bU9mUm93ID0gMDtcbiAgICB2YXIgbnVtT2ZKc29uID0gMDtcbiAgICBjc3YoKVxuICAgICAgLmZyb21TdHJlYW0ocnMpXG4gICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChqc29uLCBpZHgpIHtcbiAgICAgICAganNvbi5hID0gXCJ0ZXN0XCI7XG4gICAgICAgIGFzc2VydChpZHggPj0gMCk7XG4gICAgICB9KVxuICAgICAgLm9uKFwiZGF0YVwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICBjb25zdCBqID0gSlNPTi5wYXJzZShkLnRvU3RyaW5nKCkpO1xuICAgICAgICBhc3NlcnQuZXF1YWwoai5hLCBcInRlc3RcIik7XG4gICAgICB9KVxuICAgICAgLm9uKFwiZW5kXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfSk7XG4gIH0pO1xuXG4gIGl0KFwic2hvdWxkIHBhcnNlIGEgY29tcGxleCBKU09OXCIsIGZ1bmN0aW9uIChkb25lKSB7XG4gICAgdmFyIGNvbnZlcnRlciA9IG5ldyBDb252ZXJ0ZXIoeyBjaGVja1R5cGU6IHRydWUgfSk7XG4gICAgdmFyIHIgPSBmcy5jcmVhdGVSZWFkU3RyZWFtKF9fZGlybmFtZSArIFwiL2RhdGEvY29tcGxleEpTT05DU1ZcIik7XG4gICAgY29udmVydGVyLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgYXNzZXJ0KHJlcyk7XG4gICAgICBhc3NlcnQocmVzLmxlbmd0aCA9PT0gMik7XG4gICAgICBhc3NlcnQocmVzWzBdLmZpZWxkQS50aXRsZSA9PT0gXCJGb29kIEZhY3RvcnlcIik7XG4gICAgICBhc3NlcnQocmVzWzBdLmZpZWxkQS5jaGlsZHJlbi5sZW5ndGggPT09IDIpO1xuICAgICAgYXNzZXJ0KHJlc1swXS5maWVsZEEuY2hpbGRyZW5bMF0ubmFtZSA9PT0gXCJPc2NhclwiKTtcbiAgICAgIGFzc2VydChyZXNbMF0uZmllbGRBLmNoaWxkcmVuWzBdLmlkID09PSAyMyk7XG4gICAgICBhc3NlcnQocmVzWzBdLmZpZWxkQS5jaGlsZHJlblsxXS5uYW1lID09PSBcIlRpa2thXCIpO1xuICAgICAgYXNzZXJ0LmVxdWFsKHJlc1swXS5maWVsZEEuY2hpbGRyZW5bMV0uZW1wbG95ZWUubGVuZ3RoLCAyKTtcbiAgICAgIGFzc2VydChyZXNbMF0uZmllbGRBLmNoaWxkcmVuWzFdLmVtcGxveWVlWzBdLm5hbWUgPT09IFwiVGltXCIsIEpTT04uc3RyaW5naWZ5KHJlc1swXS5maWVsZEEuY2hpbGRyZW5bMV0uZW1wbG95ZWVbMF0pKTtcbiAgICAgIGFzc2VydChyZXNbMF0uZmllbGRBLmFkZHJlc3MubGVuZ3RoID09PSAyKTtcbiAgICAgIGFzc2VydChyZXNbMF0uZmllbGRBLmFkZHJlc3NbMF0gPT09IFwiMyBMYW1lIFJvYWRcIik7XG4gICAgICBhc3NlcnQocmVzWzBdLmZpZWxkQS5hZGRyZXNzWzFdID09PSBcIkdyYW50c3Rvd25cIik7XG4gICAgICBhc3NlcnQocmVzWzBdLmRlc2NyaXB0aW9uID09PSBcIkEgZnJlc2ggbmV3IGZvb2QgZmFjdG9yeVwiLCByZXNbMF0uZGVzY3JpcHRpb24pO1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICAgIHIucGlwZShjb252ZXJ0ZXIpO1xuICB9KTtcblxuICBpdChcInNob3VsZCBhbGxvdyBmbGF0S2V5IHRvIGNoYW5nZSBwYXJzZSBiZWhhdmlvdXJcIiwgZnVuY3Rpb24gKGRvbmUpIHtcbiAgICB2YXIgY29udiA9IG5ldyBDb252ZXJ0ZXIoe1xuICAgICAgZmxhdEtleXM6IHRydWVcbiAgICB9KTtcbiAgICBjb252LmZyb21TdHJpbmcoXCJhLmIsYi5kLGMuYVxcbjEsMiwzXFxuNCw1LDZcIikuc3Vic2NyaWJlKGZ1bmN0aW9uIChkKSB7XG4gICAgICBhc3NlcnQoZFtcImEuYlwiXSk7XG4gICAgICBhc3NlcnQoZFtcImIuZFwiXSk7XG4gICAgICBhc3NlcnQoZFtcImMuYVwiXSk7XG4gICAgfSlcbiAgICAgIC5vbihcImRvbmVcIiwgZG9uZSk7XG4gIH0pO1xuICBpdChcInNob3VsZCBhbGxvdyBmbGF0IG1vZHMgdG8gY2hhbmdlIHBhcnNlIGJlaGF2aW91clwiLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgIHZhciBjb252ID0gbmV3IENvbnZlcnRlcih7XG4gICAgICBjb2xQYXJzZXI6IHtcbiAgICAgICAgXCJhLmJcIjoge1xuICAgICAgICAgIGZsYXQ6IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnYuZnJvbVN0cmluZyhcImEuYixiLmQsYy5hXFxuMSwyLDNcXG40LDUsNlwiKS5zdWJzY3JpYmUoZnVuY3Rpb24gKGQpIHtcbiAgICAgIGFzc2VydChkW1wiYS5iXCJdKTtcbiAgICB9KVxuICAgICAgLm9uKFwiZG9uZVwiLCBkb25lKTtcbiAgfSk7XG5cbiAgaXQoXCJzaG91bGQgcHJvY2VzcyBsb25nIGhlYWRlclwiLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgIHZhciB0ZXN0RGF0YSA9IF9fZGlybmFtZSArIFwiL2RhdGEvbG9uZ0hlYWRlclwiO1xuICAgIHZhciBycyA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0odGVzdERhdGEsIHsgaGlnaFdhdGVyTWFyazogMTAwIH0pO1xuICAgIHZhciBudW1PZlJvdyA9IDA7XG4gICAgdmFyIG51bU9mSnNvbiA9IDA7XG4gICAgY3N2KHt9LCB7IGhpZ2hXYXRlck1hcms6IDEwMCB9KVxuICAgICAgLmZyb21TdHJlYW0ocnMpXG4gICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXMsIGlkeCkge1xuICAgICAgICBudW1PZkpzb24rKztcbiAgICAgICAgYXNzZXJ0LmVxdWFsKHJlcy5EYXRlLCAnOC8yNi8xNicpO1xuICAgICAgICBhc3NlcnQoaWR4ID49IDApO1xuICAgICAgfSlcbiAgICAgIC5vbihcImRvbmVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBhc3NlcnQobnVtT2ZKc29uID09PSAxKTtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfSk7XG4gIH0pO1xuXG4gIGl0KFwic2hvdWxkIHBhcnNlICMxMzlcIiwgZnVuY3Rpb24gKGRvbmUpIHtcbiAgICB2YXIgcnMgPSBmcy5jcmVhdGVSZWFkU3RyZWFtKF9fZGlybmFtZSArIFwiL2RhdGEvZGF0YSMxMzlcIik7XG4gICAgY3N2KClcbiAgICAgIC5mcm9tU3RyZWFtKHJzKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBhc3NlcnQuZXF1YWwocmVzWzFdLmZpZWxkMywgXCI5MDAxMDA5Mzk1IDkwMDEwMDk5OTBcIik7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH0pO1xuICB9KTtcblxuICBpdChcInNob3VsZCBpZ25vcmUgY29sdW1uXCIsIGZ1bmN0aW9uIChkb25lKSB7XG4gICAgdmFyIHJzID0gZnMuY3JlYXRlUmVhZFN0cmVhbShfX2Rpcm5hbWUgKyBcIi9kYXRhL2RhdGFXaXRoUW91dGVzXCIpO1xuICAgIHZhciBoZWFkZXJFbWl0dGVkID0gZmFsc2U7XG4gICAgY3N2KHtcbiAgICAgIGlnbm9yZUNvbHVtbnM6IC9USU1FU1RBTVAvXG4gICAgfSlcbiAgICAgIC5mcm9tU3RyZWFtKHJzKVxuICAgICAgLm9uKFwiaGVhZGVyXCIsIGZ1bmN0aW9uIChoZWFkZXIpIHtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKGhlYWRlci5pbmRleE9mKFwiVElNRVNUQU1QXCIpLCAtMSk7XG4gICAgICAgIGFzc2VydC5lcXVhbChoZWFkZXIuaW5kZXhPZihcIlVQREFURVwiKSwgMCk7XG4gICAgICAgIGlmIChoZWFkZXJFbWl0dGVkKSB7XG4gICAgICAgICAgdGhyb3cgKFwiaGVhZGVyIGV2ZW50IHNob3VsZCBvbmx5IGhhcHBlbiBvbmNlXCIpXG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVyRW1pdHRlZCA9IHRydWU7XG4gICAgICB9KVxuICAgICAgLy8gLm9uKFwiY3N2XCIsIGZ1bmN0aW9uIChyb3csIGlkeCkge1xuICAgICAgLy8gICBpZiAoIWhlYWRlckVtaXR0ZWQpIHtcbiAgICAgIC8vICAgICB0aHJvdyAoXCJoZWFkZXIgc2hvdWxkIGJlIGVtaXR0ZWQgYmVmb3JlIGFueSBkYXRhIGV2ZW50c1wiKTtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gICBhc3NlcnQoaWR4ID49IDApO1xuICAgICAgLy8gICBpZiAoaWR4ID09PSAxKSB7XG4gICAgICAvLyAgICAgYXNzZXJ0LmVxdWFsKHJvd1swXSwgXCJuXCIpO1xuICAgICAgLy8gICB9XG4gICAgICAvLyB9KVxuICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoaiwgaWR4KSB7XG4gICAgICAgIGFzc2VydCghai5USU1FU1RBTVApO1xuICAgICAgICBhc3NlcnQoaWR4ID49IDApO1xuICAgICAgfSlcbiAgICAgIC5vbihcImRvbmVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBhc3NlcnQoaGVhZGVyRW1pdHRlZCk7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH0pO1xuICB9KTtcbiAgaXQoXCJzaG91bGQga2VlcCBzcGFjZSBhcm91bmQgY29tbWEgaW4gY3N2XCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBzdHIgPSBgXCJOYW1lXCIsXCJOdW1iZXJcIlxuICAgIFwiSm9obiAsIHNwYWNlXCIsIDEyMzRcbiAgICBcIk1yLiAsIHNwYWNlXCIsIDQzMjFcbiAgICBgO1xuICAgIHJldHVybiBjc3YoKS5mcm9tU3RyaW5nKHN0cilcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGFzc2VydC5lcXVhbChkYXRhWzBdLk5hbWUsIFwiSm9obiAsIHNwYWNlXCIpO1xuICAgICAgICBhc3NlcnQuZXF1YWwoZGF0YVsxXS5OYW1lLCBcIk1yLiAsIHNwYWNlXCIpO1xuICAgICAgfSlcbiAgfSlcblxuICBpdChcInNob3VsZCBpbmNsdWRlIGNvbHVtblwiLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgIHZhciBycyA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0oX19kaXJuYW1lICsgXCIvZGF0YS9kYXRhV2l0aFFvdXRlc1wiKTtcbiAgICBjc3Yoe1xuICAgICAgaW5jbHVkZUNvbHVtbnM6IC9USU1FU1RBTVAvXG4gICAgfSlcbiAgICAgIC5mcm9tU3RyZWFtKHJzKVxuICAgICAgLm9uKFwiaGVhZGVyXCIsIGZ1bmN0aW9uIChoZWFkZXIpIHtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKGhlYWRlci5pbmRleE9mKFwiVElNRVNUQU1QXCIpLCAwKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKGhlYWRlci5pbmRleE9mKFwiVVBEQVRFXCIpLCAtMSk7XG4gICAgICAgIGFzc2VydC5lcXVhbChoZWFkZXIubGVuZ3RoLCAxKTtcbiAgICAgIH0pXG4gICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChqLCBpZHgpIHtcbiAgICAgICAgYXNzZXJ0KGlkeCA+PSAwKTtcbiAgICAgICAgaWYgKGlkeCA9PT0gMSkge1xuICAgICAgICAgIGFzc2VydC5lcXVhbChqLlRJTUVTVEFNUCwgXCJhYmMsIGRlZiwgY2NjXCIpO1xuICAgICAgICB9XG4gICAgICAgIGFzc2VydCghai5VSUQpXG4gICAgICAgIGFzc2VydCghalsnQllURVMgU0VOVCddKVxuICAgICAgfSlcbiAgICAgIC5vbihcImRvbmVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBkb25lKCk7XG4gICAgICB9KTtcbiAgfSk7XG5cbiAgaXQoXCJzaG91bGQgYWxsb3cgaGVhZGVycyBhbmQgaW5jbHVkZSBjb2x1bW5zIHRvIGJlIGdpdmVuIGFzIHJlZmVyZW5jZSB0byB0aGUgc2FtZSB2YXJcIiwgZnVuY3Rpb24gKGRvbmUpIHtcbiAgICB2YXIgcnMgPSBmcy5jcmVhdGVSZWFkU3RyZWFtKF9fZGlybmFtZSArIFwiL2RhdGEvY29tcGxleEpTT05DU1ZcIik7XG4gICAgdmFyIGhlYWRlcnMgPSBbXG4gICAgICAnZmlyc3QnLFxuICAgICAgJ3NlY29uZCcsXG4gICAgICAndGhpcmQnLFxuICAgIF07XG5cbiAgICB2YXIgZXhwZWN0ZWQgPSBoZWFkZXJzO1xuXG4gICAgY3N2KHtcbiAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICBpbmNsdWRlQ29sdW1uczogLyhmaXJzdHxzZWNvbmR8dGhpcmQpLyxcbiAgICB9KVxuICAgICAgLmZyb21TdHJlYW0ocnMpXG4gICAgICAub24oXCJoZWFkZXJcIiwgZnVuY3Rpb24gKGhlYWRlcikge1xuICAgICAgICBleHBlY3RlZC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICBhc3NlcnQuZXF1YWwoaGVhZGVyLmluZGV4T2YodmFsdWUpLCBpbmRleCk7XG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGosIGlkeCkge1xuICAgICAgICBhc3NlcnQoaWR4ID49IDApO1xuICAgICAgICBhc3NlcnQuZXF1YWwoZXhwZWN0ZWQubGVuZ3RoLCBPYmplY3Qua2V5cyhqKS5sZW5ndGgpO1xuICAgICAgICBleHBlY3RlZC5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgICBhc3NlcnQoai5oYXNPd25Qcm9wZXJ0eShhdHRyaWJ1dGUpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLm9uKFwiZG9uZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH0pO1xuICB9KTtcblxuICBpdChcInNob3VsZCBsZWF2ZSBwcm92aWRlZCBwYXJhbXMgb2JqZWN0cyB1bm11dGF0ZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJzID0gZnMuY3JlYXRlUmVhZFN0cmVhbShfX2Rpcm5hbWUgKyBcIi9kYXRhL2NvbXBsZXhKU09OQ1NWXCIpO1xuICAgIHZhciBpbmNsdWRlQ29sdW1ucyA9IFtcbiAgICAgICdmaWVsZEEudGl0bGUnLFxuICAgICAgJ2Rlc2NyaXB0aW9uJyxcbiAgICBdO1xuXG5cbiAgICByZXR1cm4gY3N2KHtcbiAgICAgIGluY2x1ZGVDb2x1bW5zOiAvKGZpZWxkQVxcLnRpdGxlfGRlc2NyaXB0aW9uKS8sXG4gICAgfSlcbiAgICAgIC5mcm9tU3RyZWFtKHJzKVxuICAgICAgLm9uKFwianNvblwiLCBmdW5jdGlvbihqLCBpZHgpIHtcbiAgICAgICAgYXNzZXJ0KGlkeCA+PSAwKTtcbiAgICAgIH0pXG4gICAgICAub24oXCJoZWFkZXJcIiwgZnVuY3Rpb24oaGVhZGVyKSB7XG4gICAgICAgIGluY2x1ZGVDb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAgIGFzc2VydC5lcXVhbChpbmRleCwgaGVhZGVyLmluZGV4T2YodmFsdWUpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICB9KTtcblxuICBpdChcInNob3VsZCBvbmx5IGNhbGwgZG9uZSBvbmNlXCIsIGZ1bmN0aW9uIChkb25lKSB7XG4gICAgdmFyIGNvdW50ZXI9MDtcbiAgICBjc3YoKVxuICAgIC5mcm9tU3RyaW5nKCdcImFcIixcImJcIiwgXCJjXCJcIicpXG4gICAgLm9uKCdkb25lJyxmdW5jdGlvbigpe1xuICAgICAgY291bnRlcisrO1xuICAgIH0pO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIGFzc2VydC5lcXVhbChjb3VudGVyLDEpO1xuICAgICAgZG9uZSgpO1xuICAgIH0sMTAwKTtcbiAgfSlcbn0pO1xuIl19