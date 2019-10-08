"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var stream_1 = require("stream");
var Parameters_1 = require("./Parameters");
var ParseRuntime_1 = require("./ParseRuntime");
var bluebird_1 = __importDefault(require("bluebird"));
// import { ProcessorFork } from "./ProcessFork";
var ProcessorLocal_1 = require("./ProcessorLocal");
var Result_1 = require("./Result");
var Converter = /** @class */ (function (_super) {
    __extends(Converter, _super);
    function Converter(param, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.options = options;
        _this.params = Parameters_1.mergeParams(param);
        _this.runtime = ParseRuntime_1.initParseRuntime(_this);
        _this.result = new Result_1.Result(_this);
        // if (this.params.fork) {
        //   this.processor = new ProcessorFork(this);
        // } else {
        _this.processor = new ProcessorLocal_1.ProcessorLocal(_this);
        // }
        _this.once("error", function (err) {
            // console.log("BBB");
            //wait for next cycle to emit the errors.
            setImmediate(function () {
                _this.result.processError(err);
                _this.emit("done", err);
            });
        });
        _this.once("done", function () {
            _this.processor.destroy();
        });
        return _this;
    }
    Converter.prototype.preRawData = function (onRawData) {
        this.runtime.preRawDataHook = onRawData;
        return this;
    };
    Converter.prototype.preFileLine = function (onFileLine) {
        this.runtime.preFileLineHook = onFileLine;
        return this;
    };
    Converter.prototype.subscribe = function (onNext, onError, onCompleted) {
        this.parseRuntime.subscribe = {
            onNext: onNext,
            onError: onError,
            onCompleted: onCompleted
        };
        return this;
    };
    Converter.prototype.fromFile = function (filePath, options) {
        var _this = this;
        var fs = require("fs");
        // var rs = null;
        // this.wrapCallback(cb, function () {
        //   if (rs && rs.destroy) {
        //     rs.destroy();
        //   }
        // });
        fs.exists(filePath, function (exist) {
            if (exist) {
                var rs = fs.createReadStream(filePath, options);
                rs.pipe(_this);
            }
            else {
                _this.emit('error', new Error("File does not exist. Check to make sure the file path to your csv is correct."));
            }
        });
        return this;
    };
    Converter.prototype.fromStream = function (readStream) {
        readStream.pipe(this);
        return this;
    };
    Converter.prototype.fromString = function (csvString) {
        var csv = csvString.toString();
        var read = new stream_1.Readable();
        var idx = 0;
        read._read = function (size) {
            if (idx >= csvString.length) {
                this.push(null);
            }
            else {
                var str = csvString.substr(idx, size);
                this.push(str);
                idx += size;
            }
        };
        return this.fromStream(read);
    };
    Converter.prototype.then = function (onfulfilled, onrejected) {
        var _this = this;
        return new bluebird_1.default(function (resolve, reject) {
            _this.parseRuntime.then = {
                onfulfilled: function (value) {
                    if (onfulfilled) {
                        resolve(onfulfilled(value));
                    }
                    else {
                        resolve(value);
                    }
                },
                onrejected: function (err) {
                    if (onrejected) {
                        resolve(onrejected(err));
                    }
                    else {
                        reject(err);
                    }
                }
            };
        });
    };
    Object.defineProperty(Converter.prototype, "parseParam", {
        get: function () {
            return this.params;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Converter.prototype, "parseRuntime", {
        get: function () {
            return this.runtime;
        },
        enumerable: true,
        configurable: true
    });
    Converter.prototype._transform = function (chunk, encoding, cb) {
        var _this = this;
        this.processor.process(chunk)
            .then(function (result) {
            // console.log(result);
            if (result.length > 0) {
                _this.runtime.started = true;
                return _this.result.processResult(result);
            }
        })
            .then(function () {
            _this.emit("drained");
            cb();
        }, function (error) {
            _this.runtime.hasError = true;
            _this.runtime.error = error;
            _this.emit("error", error);
            cb();
        });
    };
    Converter.prototype._flush = function (cb) {
        var _this = this;
        this.processor.flush()
            .then(function (data) {
            if (data.length > 0) {
                return _this.result.processResult(data);
            }
        })
            .then(function () {
            _this.processEnd(cb);
        }, function (err) {
            _this.emit("error", err);
            cb();
        });
    };
    Converter.prototype.processEnd = function (cb) {
        this.result.endProcess();
        this.emit("done");
        cb();
    };
    Object.defineProperty(Converter.prototype, "parsedLineNumber", {
        get: function () {
            return this.runtime.parsedLineNumber;
        },
        enumerable: true,
        configurable: true
    });
    return Converter;
}(stream_1.Transform));
exports.Converter = Converter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL2t4aWFuZy93b3JrL3Byb2plY3RzL2NzdjJqc29uL3NyYy9Db252ZXJ0ZXIudHMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9reGlhbmcvd29yay9wcm9qZWN0cy9jc3YyanNvbi9zcmMvQ29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUErRDtBQUMvRCwyQ0FBMEQ7QUFDMUQsK0NBQWdFO0FBQ2hFLHNEQUF5QjtBQU96QixpREFBaUQ7QUFDakQsbURBQWtEO0FBQ2xELG1DQUFrQztBQU1sQztJQUErQiw2QkFBUztJQXVGdEMsbUJBQVksS0FBOEIsRUFBUyxPQUE4QjtRQUE5Qix3QkFBQSxFQUFBLFlBQThCO1FBQWpGLFlBQ0Usa0JBQU0sT0FBTyxDQUFDLFNBdUJmO1FBeEJrRCxhQUFPLEdBQVAsT0FBTyxDQUF1QjtRQUUvRSxLQUFJLENBQUMsTUFBTSxHQUFHLHdCQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsS0FBSSxDQUFDLE9BQU8sR0FBRywrQkFBZ0IsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN0QyxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQy9CLDBCQUEwQjtRQUMxQiw4Q0FBOEM7UUFDOUMsV0FBVztRQUNYLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSwrQkFBYyxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUk7UUFDSixLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFDLEdBQVE7WUFDMUIsc0JBQXNCO1lBQ3RCLHlDQUF5QztZQUN6QyxZQUFZLENBQUM7Z0JBQ1gsS0FBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzlCLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBRUwsQ0FBQyxDQUFDLENBQUM7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RyxLQUFLLENBQUM7WUFDM0IsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDMUIsRUFBRSxFQUFFLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCwwQkFBTSxHQUFOLFVBQU8sRUFBWTtRQUFuQixpQkFjQztRQWJDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFO2FBQ25CLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDVCxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUVuQixPQUFPLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3hDO1FBQ0gsQ0FBQyxDQUFDO2FBQ0QsSUFBSSxDQUFDO1lBQ0osS0FBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0QixDQUFDLEVBQUUsVUFBQyxHQUFHO1lBQ0wsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDeEIsRUFBRSxFQUFFLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDTyw4QkFBVSxHQUFsQixVQUFtQixFQUFFO1FBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQixFQUFFLEVBQUUsQ0FBQztJQUNQLENBQUM7SUFDRCxzQkFBSSx1Q0FBZ0I7YUFBcEI7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7UUFDdkMsQ0FBQzs7O09BQUE7SUFDSCxnQkFBQztBQUFELENBQUMsQUEzSkQsQ0FBK0Isa0JBQVMsR0EySnZDO0FBM0pZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNmb3JtLCBUcmFuc2Zvcm1PcHRpb25zLCBSZWFkYWJsZSB9IGZyb20gXCJzdHJlYW1cIjtcbmltcG9ydCB7IENTVlBhcnNlUGFyYW0sIG1lcmdlUGFyYW1zIH0gZnJvbSBcIi4vUGFyYW1ldGVyc1wiO1xuaW1wb3J0IHsgUGFyc2VSdW50aW1lLCBpbml0UGFyc2VSdW50aW1lIH0gZnJvbSBcIi4vUGFyc2VSdW50aW1lXCI7XG5pbXBvcnQgUCBmcm9tIFwiYmx1ZWJpcmRcIjtcbmltcG9ydCB7IHN0cmluZ1RvTGluZXMgfSBmcm9tIFwiLi9maWxlbGluZVwiO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSBcImxvZGFzaC9tYXBcIjtcbmltcG9ydCB7IFJvd1NwbGl0LCBSb3dTcGxpdFJlc3VsdCB9IGZyb20gXCIuL3Jvd1NwbGl0XCI7XG5pbXBvcnQgZ2V0RW9sIGZyb20gXCIuL2dldEVvbFwiO1xuaW1wb3J0IGxpbmVUb0pzb24sIHsgSlNPTlJlc3VsdCB9IGZyb20gXCIuL2xpbmVUb0pzb25cIjtcbmltcG9ydCB7IFByb2Nlc3NvciwgUHJvY2Vzc0xpbmVSZXN1bHQgfSBmcm9tIFwiLi9Qcm9jZXNzb3JcIjtcbi8vIGltcG9ydCB7IFByb2Nlc3NvckZvcmsgfSBmcm9tIFwiLi9Qcm9jZXNzRm9ya1wiO1xuaW1wb3J0IHsgUHJvY2Vzc29yTG9jYWwgfSBmcm9tIFwiLi9Qcm9jZXNzb3JMb2NhbFwiO1xuaW1wb3J0IHsgUmVzdWx0IH0gZnJvbSBcIi4vUmVzdWx0XCI7XG5pbXBvcnQgQ1NWRXJyb3IgZnJvbSBcIi4vQ1NWRXJyb3JcIjtcbmltcG9ydCB7IGJ1ZkZyb21TdHJpbmcgfSBmcm9tIFwiLi91dGlsXCI7XG5cblxuXG5leHBvcnQgY2xhc3MgQ29udmVydGVyIGV4dGVuZHMgVHJhbnNmb3JtIGltcGxlbWVudHMgUHJvbWlzZUxpa2U8YW55W10+IHtcbiAgcHJlUmF3RGF0YShvblJhd0RhdGE6IFByZVJhd0RhdGFDYWxsYmFjayk6IENvbnZlcnRlciB7XG4gICAgdGhpcy5ydW50aW1lLnByZVJhd0RhdGFIb29rID0gb25SYXdEYXRhO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHByZUZpbGVMaW5lKG9uRmlsZUxpbmU6IFByZUZpbGVMaW5lQ2FsbGJhY2spOiBDb252ZXJ0ZXIge1xuICAgIHRoaXMucnVudGltZS5wcmVGaWxlTGluZUhvb2sgPSBvbkZpbGVMaW5lO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHN1YnNjcmliZShcbiAgICBvbk5leHQ/OiAoZGF0YTogYW55LCBsaW5lTnVtYmVyOiBudW1iZXIpID0+IHZvaWQgfCBQcm9taXNlTGlrZTx2b2lkPixcbiAgICBvbkVycm9yPzogKGVycjogQ1NWRXJyb3IpID0+IHZvaWQsXG4gICAgb25Db21wbGV0ZWQ/OiAoKSA9PiB2b2lkKTogQ29udmVydGVyIHtcbiAgICB0aGlzLnBhcnNlUnVudGltZS5zdWJzY3JpYmUgPSB7XG4gICAgICBvbk5leHQsXG4gICAgICBvbkVycm9yLFxuICAgICAgb25Db21wbGV0ZWRcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgZnJvbUZpbGUoZmlsZVBhdGg6IHN0cmluZywgb3B0aW9ucz86IHN0cmluZyB8IENyZWF0ZVJlYWRTdHJlYW1PcHRpb24gfCB1bmRlZmluZWQpOiBDb252ZXJ0ZXIge1xuICAgIGNvbnN0IGZzID0gcmVxdWlyZShcImZzXCIpO1xuICAgIC8vIHZhciBycyA9IG51bGw7XG4gICAgLy8gdGhpcy53cmFwQ2FsbGJhY2soY2IsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgIGlmIChycyAmJiBycy5kZXN0cm95KSB7XG4gICAgLy8gICAgIHJzLmRlc3Ryb3koKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9KTtcbiAgICBmcy5leGlzdHMoZmlsZVBhdGgsIChleGlzdCkgPT4ge1xuICAgICAgaWYgKGV4aXN0KSB7XG4gICAgICAgIGNvbnN0IHJzID0gZnMuY3JlYXRlUmVhZFN0cmVhbShmaWxlUGF0aCwgb3B0aW9ucyk7XG4gICAgICAgIHJzLnBpcGUodGhpcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgbmV3IEVycm9yKFwiRmlsZSBkb2VzIG5vdCBleGlzdC4gQ2hlY2sgdG8gbWFrZSBzdXJlIHRoZSBmaWxlIHBhdGggdG8geW91ciBjc3YgaXMgY29ycmVjdC5cIikpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGZyb21TdHJlYW0ocmVhZFN0cmVhbTogUmVhZGFibGUpOiBDb252ZXJ0ZXIge1xuICAgIHJlYWRTdHJlYW0ucGlwZSh0aGlzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBmcm9tU3RyaW5nKGNzdlN0cmluZzogc3RyaW5nKTogQ29udmVydGVyIHtcbiAgICBjb25zdCBjc3YgPSBjc3ZTdHJpbmcudG9TdHJpbmcoKTtcbiAgICBjb25zdCByZWFkID0gbmV3IFJlYWRhYmxlKCk7XG4gICAgbGV0IGlkeCA9IDA7XG4gICAgcmVhZC5fcmVhZCA9IGZ1bmN0aW9uIChzaXplKSB7XG4gICAgICBpZiAoaWR4ID49IGNzdlN0cmluZy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5wdXNoKG51bGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc3RyID0gY3N2U3RyaW5nLnN1YnN0cihpZHgsIHNpemUpO1xuICAgICAgICB0aGlzLnB1c2goc3RyKTtcbiAgICAgICAgaWR4ICs9IHNpemU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZyb21TdHJlYW0ocmVhZCk7XG4gIH1cbiAgdGhlbjxUUmVzdWx0MSA9IGFueVtdLCBUUmVzdWx0MiA9IG5ldmVyPihvbmZ1bGZpbGxlZD86ICh2YWx1ZTogYW55W10pID0+IFRSZXN1bHQxIHwgUHJvbWlzZUxpa2U8VFJlc3VsdDE+LCBvbnJlamVjdGVkPzogKHJlYXNvbjogYW55KSA9PiBUUmVzdWx0MiB8IFByb21pc2VMaWtlPFRSZXN1bHQyPik6IFByb21pc2VMaWtlPFRSZXN1bHQxIHwgVFJlc3VsdDI+IHtcbiAgICByZXR1cm4gbmV3IFAoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5wYXJzZVJ1bnRpbWUudGhlbiA9IHtcbiAgICAgICAgb25mdWxmaWxsZWQ6ICh2YWx1ZTogYW55W10pID0+IHtcbiAgICAgICAgICBpZiAob25mdWxmaWxsZWQpIHtcbiAgICAgICAgICAgIHJlc29sdmUob25mdWxmaWxsZWQodmFsdWUpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSBhcyBhbnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25yZWplY3RlZDogKGVycjogRXJyb3IpID0+IHtcbiAgICAgICAgICBpZiAob25yZWplY3RlZCkge1xuICAgICAgICAgICAgcmVzb2x2ZShvbnJlamVjdGVkKGVycikpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBwdWJsaWMgZ2V0IHBhcnNlUGFyYW0oKTogQ1NWUGFyc2VQYXJhbSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1zO1xuICB9XG4gIHB1YmxpYyBnZXQgcGFyc2VSdW50aW1lKCk6IFBhcnNlUnVudGltZSB7XG4gICAgcmV0dXJuIHRoaXMucnVudGltZTtcbiAgfVxuICBwcml2YXRlIHBhcmFtczogQ1NWUGFyc2VQYXJhbTtcbiAgcHJpdmF0ZSBydW50aW1lOiBQYXJzZVJ1bnRpbWU7XG4gIHByaXZhdGUgcHJvY2Vzc29yOiBQcm9jZXNzb3I7XG4gIHByaXZhdGUgcmVzdWx0OiBSZXN1bHQ7XG4gIGNvbnN0cnVjdG9yKHBhcmFtPzogUGFydGlhbDxDU1ZQYXJzZVBhcmFtPiwgcHVibGljIG9wdGlvbnM6IFRyYW5zZm9ybU9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIHRoaXMucGFyYW1zID0gbWVyZ2VQYXJhbXMocGFyYW0pO1xuICAgIHRoaXMucnVudGltZSA9IGluaXRQYXJzZVJ1bnRpbWUodGhpcyk7XG4gICAgdGhpcy5yZXN1bHQgPSBuZXcgUmVzdWx0KHRoaXMpO1xuICAgIC8vIGlmICh0aGlzLnBhcmFtcy5mb3JrKSB7XG4gICAgLy8gICB0aGlzLnByb2Nlc3NvciA9IG5ldyBQcm9jZXNzb3JGb3JrKHRoaXMpO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgdGhpcy5wcm9jZXNzb3IgPSBuZXcgUHJvY2Vzc29yTG9jYWwodGhpcyk7XG4gICAgLy8gfVxuICAgIHRoaXMub25jZShcImVycm9yXCIsIChlcnI6IGFueSkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJCQkJcIik7XG4gICAgICAvL3dhaXQgZm9yIG5leHQgY3ljbGUgdG8gZW1pdCB0aGUgZXJyb3JzLlxuICAgICAgc2V0SW1tZWRpYXRlKCgpID0+IHtcbiAgICAgICAgdGhpcy5yZXN1bHQucHJvY2Vzc0Vycm9yKGVycik7XG4gICAgICAgIHRoaXMuZW1pdChcImRvbmVcIiwgZXJyKTtcbiAgICAgIH0pO1xuXG4gICAgfSk7XG4gICAgdGhpcy5vbmNlKFwiZG9uZVwiLCAoKSA9PiB7XG4gICAgICB0aGlzLnByb2Nlc3Nvci5kZXN0cm95KCk7XG4gICAgfSlcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIF90cmFuc2Zvcm0oY2h1bms6IGFueSwgZW5jb2Rpbmc6IHN0cmluZywgY2I6IEZ1bmN0aW9uKSB7XG4gICAgdGhpcy5wcm9jZXNzb3IucHJvY2VzcyhjaHVuaylcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5ydW50aW1lLnN0YXJ0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0LnByb2Nlc3NSZXN1bHQocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5lbWl0KFwiZHJhaW5lZFwiKTtcbiAgICAgICAgY2IoKTtcbiAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLnJ1bnRpbWUuaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICB0aGlzLnJ1bnRpbWUuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgZXJyb3IpO1xuICAgICAgICBjYigpO1xuICAgICAgfSk7XG4gIH1cbiAgX2ZsdXNoKGNiOiBGdW5jdGlvbikge1xuICAgIHRoaXMucHJvY2Vzc29yLmZsdXNoKClcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcblxuICAgICAgICAgIHJldHVybiB0aGlzLnJlc3VsdC5wcm9jZXNzUmVzdWx0KGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnByb2Nlc3NFbmQoY2IpO1xuICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBlcnIpO1xuICAgICAgICBjYigpO1xuICAgICAgfSlcbiAgfVxuICBwcml2YXRlIHByb2Nlc3NFbmQoY2IpIHtcbiAgICB0aGlzLnJlc3VsdC5lbmRQcm9jZXNzKCk7XG4gICAgdGhpcy5lbWl0KFwiZG9uZVwiKTtcbiAgICBjYigpO1xuICB9XG4gIGdldCBwYXJzZWRMaW5lTnVtYmVyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucnVudGltZS5wYXJzZWRMaW5lTnVtYmVyO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZVJlYWRTdHJlYW1PcHRpb24ge1xuICBmbGFncz86IHN0cmluZztcbiAgZW5jb2Rpbmc/OiBzdHJpbmc7XG4gIGZkPzogbnVtYmVyO1xuICBtb2RlPzogbnVtYmVyO1xuICBhdXRvQ2xvc2U/OiBib29sZWFuO1xuICBzdGFydD86IG51bWJlcjtcbiAgZW5kPzogbnVtYmVyO1xuICBoaWdoV2F0ZXJNYXJrPzogbnVtYmVyO1xufVxuZXhwb3J0IHR5cGUgQ2FsbEJhY2sgPSAoZXJyOiBFcnJvciwgZGF0YTogQXJyYXk8YW55PikgPT4gdm9pZDtcblxuXG5leHBvcnQgdHlwZSBQcmVGaWxlTGluZUNhbGxiYWNrID0gKGxpbmU6IHN0cmluZywgbGluZU51bWJlcjogbnVtYmVyKSA9PiBzdHJpbmcgfCBQcm9taXNlTGlrZTxzdHJpbmc+O1xuZXhwb3J0IHR5cGUgUHJlUmF3RGF0YUNhbGxiYWNrID0gKGNzdlN0cmluZzogc3RyaW5nKSA9PiBzdHJpbmcgfCBQcm9taXNlTGlrZTxzdHJpbmc+O1xuIl19