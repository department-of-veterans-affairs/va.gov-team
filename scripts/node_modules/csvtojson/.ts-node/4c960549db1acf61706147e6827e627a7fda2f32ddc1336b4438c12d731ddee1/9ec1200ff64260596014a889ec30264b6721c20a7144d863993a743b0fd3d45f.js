"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bluebird_1 = __importDefault(require("bluebird"));
var os_1 = require("os");
var Result = /** @class */ (function () {
    function Result(converter) {
        this.converter = converter;
        this.finalResult = [];
    }
    Object.defineProperty(Result.prototype, "needEmitLine", {
        get: function () {
            return !!this.converter.parseRuntime.subscribe && !!this.converter.parseRuntime.subscribe.onNext || this.needPushDownstream;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Result.prototype, "needPushDownstream", {
        get: function () {
            if (this._needPushDownstream === undefined) {
                this._needPushDownstream = this.converter.listeners("data").length > 0 || this.converter.listeners("readable").length > 0;
            }
            return this._needPushDownstream;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Result.prototype, "needEmitAll", {
        get: function () {
            return !!this.converter.parseRuntime.then && this.converter.parseParam.needEmitAll;
            // return !!this.converter.parseRuntime.then;
        },
        enumerable: true,
        configurable: true
    });
    Result.prototype.processResult = function (resultLines) {
        var _this = this;
        var startPos = this.converter.parseRuntime.parsedLineNumber;
        if (this.needPushDownstream && this.converter.parseParam.downstreamFormat === "array") {
            if (startPos === 0) {
                pushDownstream(this.converter, "[" + os_1.EOL);
            }
        }
        // let prom: P<any>;
        return new bluebird_1.default(function (resolve, reject) {
            if (_this.needEmitLine) {
                processLineByLine(resultLines, _this.converter, 0, _this.needPushDownstream, function (err) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        _this.appendFinalResult(resultLines);
                        resolve();
                    }
                });
                // resolve();
            }
            else {
                _this.appendFinalResult(resultLines);
                resolve();
            }
        });
    };
    Result.prototype.appendFinalResult = function (lines) {
        if (this.needEmitAll) {
            this.finalResult = this.finalResult.concat(lines);
        }
        this.converter.parseRuntime.parsedLineNumber += lines.length;
    };
    Result.prototype.processError = function (err) {
        if (this.converter.parseRuntime.subscribe && this.converter.parseRuntime.subscribe.onError) {
            this.converter.parseRuntime.subscribe.onError(err);
        }
        if (this.converter.parseRuntime.then && this.converter.parseRuntime.then.onrejected) {
            this.converter.parseRuntime.then.onrejected(err);
        }
    };
    Result.prototype.endProcess = function () {
        if (this.converter.parseRuntime.then && this.converter.parseRuntime.then.onfulfilled) {
            if (this.needEmitAll) {
                this.converter.parseRuntime.then.onfulfilled(this.finalResult);
            }
            else {
                this.converter.parseRuntime.then.onfulfilled([]);
            }
        }
        if (this.converter.parseRuntime.subscribe && this.converter.parseRuntime.subscribe.onCompleted) {
            this.converter.parseRuntime.subscribe.onCompleted();
        }
        if (this.needPushDownstream && this.converter.parseParam.downstreamFormat === "array") {
            pushDownstream(this.converter, "]" + os_1.EOL);
        }
    };
    return Result;
}());
exports.Result = Result;
function processLineByLine(lines, conv, offset, needPushDownstream, cb) {
    if (offset >= lines.length) {
        cb();
    }
    else {
        if (conv.parseRuntime.subscribe && conv.parseRuntime.subscribe.onNext) {
            var hook_1 = conv.parseRuntime.subscribe.onNext;
            var nextLine_1 = lines[offset];
            var res = hook_1(nextLine_1, conv.parseRuntime.parsedLineNumber + offset);
            offset++;
            // if (isAsync === undefined) {
            if (res && res.then) {
                res.then(function () {
                    processRecursive(lines, hook_1, conv, offset, needPushDownstream, cb, nextLine_1);
                }, cb);
            }
            else {
                // processRecursive(lines, hook, conv, offset, needPushDownstream, cb, nextLine, false);
                if (needPushDownstream) {
                    pushDownstream(conv, nextLine_1);
                }
                while (offset < lines.length) {
                    var line = lines[offset];
                    hook_1(line, conv.parseRuntime.parsedLineNumber + offset);
                    offset++;
                    if (needPushDownstream) {
                        pushDownstream(conv, line);
                    }
                }
                cb();
            }
            // } else if (isAsync === true) {
            //   (res as PromiseLike<void>).then(function () {
            //     processRecursive(lines, hook, conv, offset, needPushDownstream, cb, nextLine, true);
            //   }, cb);
            // } else if (isAsync === false) {
            //   processRecursive(lines, hook, conv, offset, needPushDownstream, cb, nextLine, false);
            // }
        }
        else {
            if (needPushDownstream) {
                while (offset < lines.length) {
                    var line = lines[offset++];
                    pushDownstream(conv, line);
                }
            }
            cb();
        }
    }
}
function processRecursive(lines, hook, conv, offset, needPushDownstream, cb, res) {
    if (needPushDownstream) {
        pushDownstream(conv, res);
    }
    processLineByLine(lines, conv, offset, needPushDownstream, cb);
}
function pushDownstream(conv, res) {
    if (typeof res === "object" && !conv.options.objectMode) {
        var data = JSON.stringify(res);
        conv.push(data + (conv.parseParam.downstreamFormat === "array" ? "," + os_1.EOL : os_1.EOL), "utf8");
    }
    else {
        conv.push(res);
    }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL2t4aWFuZy93b3JrL3Byb2plY3RzL2NzdjJqc29uL3NyYy9SZXN1bHQudHMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9reGlhbmcvd29yay9wcm9qZWN0cy9jc3YyanNvbi9zcmMvUmVzdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsc0RBQXlCO0FBRXpCLHlCQUF5QjtBQUN6QjtJQWdCRSxnQkFBb0IsU0FBb0I7UUFBcEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQURoQyxnQkFBVyxHQUFVLEVBQUUsQ0FBQztJQUNZLENBQUM7SUFmN0Msc0JBQVksZ0NBQVk7YUFBeEI7WUFDRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFBO1FBQzdILENBQUM7OztPQUFBO0lBRUQsc0JBQVksc0NBQWtCO2FBQTlCO1lBQ0UsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEtBQUssU0FBUyxFQUFFO2dCQUMxQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2FBQzNIO1lBQ0QsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFDRCxzQkFBWSwrQkFBVzthQUF2QjtZQUNFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7WUFDbkYsNkNBQTZDO1FBQy9DLENBQUM7OztPQUFBO0lB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Q0FBQyxDQUFDO0FBQ2pFLENBQUM7QUFDRCx3QkFBd0IsSUFBZSxFQUFFLEdBQXNCO0lBQzdELElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7UUFDdkQsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsUUFBRyxDQUFDLENBQUMsQ0FBQyxRQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUM1RjtTQUFNO1FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNoQjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb252ZXJ0ZXIgfSBmcm9tIFwiLi9Db252ZXJ0ZXJcIjtcbmltcG9ydCB7IFByb2Nlc3NMaW5lUmVzdWx0IH0gZnJvbSBcIi4vUHJvY2Vzc29yXCI7XG5pbXBvcnQgUCBmcm9tIFwiYmx1ZWJpcmRcIjtcbmltcG9ydCBDU1ZFcnJvciBmcm9tIFwiLi9DU1ZFcnJvclwiO1xuaW1wb3J0IHsgRU9MIH0gZnJvbSBcIm9zXCI7XG5leHBvcnQgY2xhc3MgUmVzdWx0IHtcbiAgcHJpdmF0ZSBnZXQgbmVlZEVtaXRMaW5lKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuY29udmVydGVyLnBhcnNlUnVudGltZS5zdWJzY3JpYmUgJiYgISF0aGlzLmNvbnZlcnRlci5wYXJzZVJ1bnRpbWUuc3Vic2NyaWJlLm9uTmV4dCB8fCB0aGlzLm5lZWRQdXNoRG93bnN0cmVhbVxuICB9XG4gIHByaXZhdGUgX25lZWRQdXNoRG93bnN0cmVhbT86IGJvb2xlYW47XG4gIHByaXZhdGUgZ2V0IG5lZWRQdXNoRG93bnN0cmVhbSgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5fbmVlZFB1c2hEb3duc3RyZWFtID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX25lZWRQdXNoRG93bnN0cmVhbSA9IHRoaXMuY29udmVydGVyLmxpc3RlbmVycyhcImRhdGFcIikubGVuZ3RoID4gMCB8fCB0aGlzLmNvbnZlcnRlci5saXN0ZW5lcnMoXCJyZWFkYWJsZVwiKS5sZW5ndGggPiAwO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbmVlZFB1c2hEb3duc3RyZWFtO1xuICB9XG4gIHByaXZhdGUgZ2V0IG5lZWRFbWl0QWxsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuY29udmVydGVyLnBhcnNlUnVudGltZS50aGVuICYmIHRoaXMuY29udmVydGVyLnBhcnNlUGFyYW0ubmVlZEVtaXRBbGw7XG4gICAgLy8gcmV0dXJuICEhdGhpcy5jb252ZXJ0ZXIucGFyc2VSdW50aW1lLnRoZW47XG4gIH1cbiAgcHJpdmF0ZSBmaW5hbFJlc3VsdDogYW55W10gPSBbXTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb252ZXJ0ZXI6IENvbnZlcnRlcikgeyB9XG4gIHByb2Nlc3NSZXN1bHQocmVzdWx0TGluZXM6IFByb2Nlc3NMaW5lUmVzdWx0W10pOiBQPGFueT4ge1xuICAgIGNvbnN0IHN0YXJ0UG9zID0gdGhpcy5jb252ZXJ0ZXIucGFyc2VSdW50aW1lLnBhcnNlZExpbmVOdW1iZXI7XG4gICAgaWYgKHRoaXMubmVlZFB1c2hEb3duc3RyZWFtICYmIHRoaXMuY29udmVydGVyLnBhcnNlUGFyYW0uZG93bnN0cmVhbUZvcm1hdCA9PT0gXCJhcnJheVwiKSB7XG4gICAgICBpZiAoc3RhcnRQb3MgPT09IDApIHtcbiAgICAgICAgcHVzaERvd25zdHJlYW0odGhpcy5jb252ZXJ0ZXIsIFwiW1wiICsgRU9MKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gbGV0IHByb206IFA8YW55PjtcbiAgICByZXR1cm4gbmV3IFAoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMubmVlZEVtaXRMaW5lKSB7XG4gICAgICAgIHByb2Nlc3NMaW5lQnlMaW5lKFxuICAgICAgICAgIHJlc3VsdExpbmVzLFxuICAgICAgICAgIHRoaXMuY29udmVydGVyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgdGhpcy5uZWVkUHVzaERvd25zdHJlYW0sXG4gICAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuYXBwZW5kRmluYWxSZXN1bHQocmVzdWx0TGluZXMpO1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgKVxuICAgICAgICAvLyByZXNvbHZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFwcGVuZEZpbmFsUmVzdWx0KHJlc3VsdExpbmVzKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgYXBwZW5kRmluYWxSZXN1bHQobGluZXM6IGFueVtdKSB7XG4gICAgaWYgKHRoaXMubmVlZEVtaXRBbGwpIHtcbiAgICAgIHRoaXMuZmluYWxSZXN1bHQgPSB0aGlzLmZpbmFsUmVzdWx0LmNvbmNhdChsaW5lcyk7XG4gICAgfVxuICAgIHRoaXMuY29udmVydGVyLnBhcnNlUnVudGltZS5wYXJzZWRMaW5lTnVtYmVyICs9IGxpbmVzLmxlbmd0aDtcbiAgfVxuICBwcm9jZXNzRXJyb3IoZXJyOiBDU1ZFcnJvcikge1xuICAgIGlmICh0aGlzLmNvbnZlcnRlci5wYXJzZVJ1bnRpbWUuc3Vic2NyaWJlICYmIHRoaXMuY29udmVydGVyLnBhcnNlUnVudGltZS5zdWJzY3JpYmUub25FcnJvcikge1xuICAgICAgdGhpcy5jb252ZXJ0ZXIucGFyc2VSdW50aW1lLnN1YnNjcmliZS5vbkVycm9yKGVycik7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbnZlcnRlci5wYXJzZVJ1bnRpbWUudGhlbiAmJiB0aGlzLmNvbnZlcnRlci5wYXJzZVJ1bnRpbWUudGhlbi5vbnJlamVjdGVkKSB7XG4gICAgICB0aGlzLmNvbnZlcnRlci5wYXJzZVJ1bnRpbWUudGhlbi5vbnJlamVjdGVkKGVycik7XG4gICAgfVxuICB9XG4gIGVuZFByb2Nlc3MoKSB7XG4gICAgXG4gICAgICBpZiAodGhpcy5jb252ZXJ0ZXIucGFyc2VSdW50aW1lLnRoZW4gJiYgdGhpcy5jb252ZXJ0ZXIucGFyc2VSdW50aW1lLnRoZW4ub25mdWxmaWxsZWQpIHtcbiAgICAgICAgaWYgKHRoaXMubmVlZEVtaXRBbGwpIHtcbiAgICAgICAgICB0aGlzLmNvbnZlcnRlci5wYXJzZVJ1bnRpbWUudGhlbi5vbmZ1bGZpbGxlZCh0aGlzLmZpbmFsUmVzdWx0KTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgdGhpcy5jb252ZXJ0ZXIucGFyc2VSdW50aW1lLnRoZW4ub25mdWxmaWxsZWQoW10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgaWYgKHRoaXMuY29udmVydGVyLnBhcnNlUnVudGltZS5zdWJzY3JpYmUgJiYgdGhpcy5jb252ZXJ0ZXIucGFyc2VSdW50aW1lLnN1YnNjcmliZS5vbkNvbXBsZXRlZCkge1xuICAgICAgdGhpcy5jb252ZXJ0ZXIucGFyc2VSdW50aW1lLnN1YnNjcmliZS5vbkNvbXBsZXRlZCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5uZWVkUHVzaERvd25zdHJlYW0gJiYgdGhpcy5jb252ZXJ0ZXIucGFyc2VQYXJhbS5kb3duc3RyZWFtRm9ybWF0ID09PSBcImFycmF5XCIpIHtcbiAgICAgIHB1c2hEb3duc3RyZWFtKHRoaXMuY29udmVydGVyLCBcIl1cIiArIEVPTCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NMaW5lQnlMaW5lKFxuICBsaW5lczogUHJvY2Vzc0xpbmVSZXN1bHRbXSxcblxuICBjb252OiBDb252ZXJ0ZXIsXG4gIG9mZnNldDogbnVtYmVyLFxuICBuZWVkUHVzaERvd25zdHJlYW06IGJvb2xlYW4sXG4gIGNiOiAoZXJyPykgPT4gdm9pZCxcbikge1xuICBpZiAob2Zmc2V0ID49IGxpbmVzLmxlbmd0aCkge1xuICAgIGNiKCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGNvbnYucGFyc2VSdW50aW1lLnN1YnNjcmliZSAmJiBjb252LnBhcnNlUnVudGltZS5zdWJzY3JpYmUub25OZXh0KSB7XG4gICAgICBjb25zdCBob29rID0gY29udi5wYXJzZVJ1bnRpbWUuc3Vic2NyaWJlLm9uTmV4dDtcbiAgICAgIGNvbnN0IG5leHRMaW5lID0gbGluZXNbb2Zmc2V0XTtcbiAgICAgIGNvbnN0IHJlcyA9IGhvb2sobmV4dExpbmUsIGNvbnYucGFyc2VSdW50aW1lLnBhcnNlZExpbmVOdW1iZXIgKyBvZmZzZXQpO1xuICAgICAgb2Zmc2V0Kys7XG4gICAgICAvLyBpZiAoaXNBc3luYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAocmVzICYmIHJlcy50aGVuKSB7XG4gICAgICAgIHJlcy50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBwcm9jZXNzUmVjdXJzaXZlKGxpbmVzLCBob29rLCBjb252LCBvZmZzZXQsIG5lZWRQdXNoRG93bnN0cmVhbSwgY2IsIG5leHRMaW5lKTtcbiAgICAgICAgfSwgY2IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcHJvY2Vzc1JlY3Vyc2l2ZShsaW5lcywgaG9vaywgY29udiwgb2Zmc2V0LCBuZWVkUHVzaERvd25zdHJlYW0sIGNiLCBuZXh0TGluZSwgZmFsc2UpO1xuICAgICAgICBpZiAobmVlZFB1c2hEb3duc3RyZWFtKSB7XG4gICAgICAgICAgcHVzaERvd25zdHJlYW0oY29udiwgbmV4dExpbmUpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChvZmZzZXQgPCBsaW5lcy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbb2Zmc2V0XTtcbiAgICAgICAgICBob29rKGxpbmUsIGNvbnYucGFyc2VSdW50aW1lLnBhcnNlZExpbmVOdW1iZXIgKyBvZmZzZXQpO1xuICAgICAgICAgIG9mZnNldCsrO1xuICAgICAgICAgIGlmIChuZWVkUHVzaERvd25zdHJlYW0pIHtcbiAgICAgICAgICAgIHB1c2hEb3duc3RyZWFtKGNvbnYsIGxpbmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYigpO1xuICAgICAgfVxuICAgICAgLy8gfSBlbHNlIGlmIChpc0FzeW5jID09PSB0cnVlKSB7XG4gICAgICAvLyAgIChyZXMgYXMgUHJvbWlzZUxpa2U8dm9pZD4pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgLy8gICAgIHByb2Nlc3NSZWN1cnNpdmUobGluZXMsIGhvb2ssIGNvbnYsIG9mZnNldCwgbmVlZFB1c2hEb3duc3RyZWFtLCBjYiwgbmV4dExpbmUsIHRydWUpO1xuICAgICAgLy8gICB9LCBjYik7XG4gICAgICAvLyB9IGVsc2UgaWYgKGlzQXN5bmMgPT09IGZhbHNlKSB7XG4gICAgICAvLyAgIHByb2Nlc3NSZWN1cnNpdmUobGluZXMsIGhvb2ssIGNvbnYsIG9mZnNldCwgbmVlZFB1c2hEb3duc3RyZWFtLCBjYiwgbmV4dExpbmUsIGZhbHNlKTtcbiAgICAgIC8vIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG5lZWRQdXNoRG93bnN0cmVhbSkge1xuICAgICAgICB3aGlsZSAob2Zmc2V0IDwgbGluZXMubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgbGluZSA9IGxpbmVzW29mZnNldCsrXTtcbiAgICAgICAgICBwdXNoRG93bnN0cmVhbShjb252LCBsaW5lKTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgICBjYigpO1xuICAgIH1cblxuICB9XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NSZWN1cnNpdmUoXG4gIGxpbmVzOiBQcm9jZXNzTGluZVJlc3VsdFtdLFxuICBob29rOiAoZGF0YTogYW55LCBsaW5lTnVtYmVyOiBudW1iZXIpID0+IHZvaWQgfCBQcm9taXNlTGlrZTx2b2lkPixcbiAgY29udjogQ29udmVydGVyLFxuICBvZmZzZXQ6IG51bWJlcixcbiAgbmVlZFB1c2hEb3duc3RyZWFtOiBib29sZWFuLFxuICBjYjogKGVycj8pID0+IHZvaWQsXG4gIHJlczogUHJvY2Vzc0xpbmVSZXN1bHQsXG4pIHtcbiAgaWYgKG5lZWRQdXNoRG93bnN0cmVhbSkge1xuICAgIHB1c2hEb3duc3RyZWFtKGNvbnYsIHJlcyk7XG4gIH1cbiAgcHJvY2Vzc0xpbmVCeUxpbmUobGluZXMsIGNvbnYsIG9mZnNldCwgbmVlZFB1c2hEb3duc3RyZWFtLCBjYik7XG59XG5mdW5jdGlvbiBwdXNoRG93bnN0cmVhbShjb252OiBDb252ZXJ0ZXIsIHJlczogUHJvY2Vzc0xpbmVSZXN1bHQpIHtcbiAgaWYgKHR5cGVvZiByZXMgPT09IFwib2JqZWN0XCIgJiYgIWNvbnYub3B0aW9ucy5vYmplY3RNb2RlKSB7XG4gICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHJlcyk7XG4gICAgY29udi5wdXNoKGRhdGEgKyAoY29udi5wYXJzZVBhcmFtLmRvd25zdHJlYW1Gb3JtYXQgPT09IFwiYXJyYXlcIiA/IFwiLFwiICsgRU9MIDogRU9MKSwgXCJ1dGY4XCIpO1xuICB9IGVsc2Uge1xuICAgIGNvbnYucHVzaChyZXMpO1xuICB9XG59Il19