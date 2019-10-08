"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var strip_bom_1 = __importDefault(require("strip-bom"));
/**
 * For each data chunk coming to parser:
 * 1. append the data to the buffer that is left from last chunk
 * 2. check if utf8 chars being split, if does, stripe the bytes and add to left buffer.
 * 3. stripBom
 */
function prepareData(chunk, runtime) {
    var workChunk = concatLeftChunk(chunk, runtime);
    runtime.csvLineBuffer = undefined;
    var cleanCSVString = cleanUtf8Split(workChunk, runtime).toString("utf8");
    if (runtime.started === false) {
        return strip_bom_1.default(cleanCSVString);
    }
    else {
        return cleanCSVString;
    }
}
exports.prepareData = prepareData;
/**
 *  append data to buffer that is left form last chunk
 */
function concatLeftChunk(chunk, runtime) {
    if (runtime.csvLineBuffer && runtime.csvLineBuffer.length > 0) {
        return Buffer.concat([runtime.csvLineBuffer, chunk]);
    }
    else {
        return chunk;
    }
}
/**
 * check if utf8 chars being split, if does, stripe the bytes and add to left buffer.
 */
function cleanUtf8Split(chunk, runtime) {
    var idx = chunk.length - 1;
    /**
     * From Keyang:
     * The code below is to check if a single utf8 char (which could be multiple bytes) being split.
     * If the char being split, the buffer from two chunk needs to be concat
     * check how utf8 being encoded to understand the code below.
     * If anyone has any better way to do this, please let me know.
     */
    if ((chunk[idx] & 1 << 7) != 0) {
        while ((chunk[idx] & 3 << 6) === 128) {
            idx--;
        }
        idx--;
    }
    if (idx != chunk.length - 1) {
        runtime.csvLineBuffer = chunk.slice(idx + 1);
        return chunk.slice(0, idx + 1);
        // var _cb=cb;
        // var self=this;
        // cb=function(){
        //   if (self._csvLineBuffer){
        //     self._csvLineBuffer=Buffer.concat([bufFromString(self._csvLineBuffer,"utf8"),left]);
        //   }else{
        //     self._csvLineBuffer=left;
        //   }
        //   _cb();
        // }
    }
    else {
        return chunk;
    }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL2t4aWFuZy93b3JrL3Byb2plY3RzL2NzdjJqc29uL3NyYy9kYXRhQ2xlYW4udHMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9reGlhbmcvd29yay9wcm9qZWN0cy9jc3YyanNvbi9zcmMvZGF0YUNsZWFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0Esd0RBQWlDO0FBQ2pDOzs7OztHQUtHO0FBQ0gscUJBQTRCLEtBQWEsRUFBRSxPQUFxQjtJQUM5RCxJQUFNLFNBQVMsR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELE9BQU8sQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ2xDLElBQU0sY0FBYyxHQUFHLGNBQWMsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNFLElBQUksT0FBTyxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUU7UUFDN0IsT0FBTyxtQkFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQ2pDO1NBQU07UUFDTCxPQUFPLGNBQWMsQ0FBQztLQUN2QjtBQUNILENBQUM7QUFURCxrQ0FTQztBQUNEOztHQUVHO0FBQ0gseUJBQXlCLEtBQWEsRUFBRSxPQUFxQjtJQUMzRCxJQUFJLE9BQU8sQ0FBQyxhQUFhLElBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQzdELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUN0RDtTQUFNO1FBQ0wsT0FBTyxLQUFLLENBQUM7S0FDZDtBQUNILENBQUM7QUFDRDs7R0FFRztBQUNILHdCQUF3QixLQUFhLEVBQUUsT0FBcUI7SUFDMUQsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDM0I7Ozs7OztPQU1HO0lBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzlCLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUNwQyxHQUFHLEVBQUUsQ0FBQztTQUNQO1FBQ0QsR0FBRyxFQUFFLENBQUM7S0FDUDtJQUNELElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQzNCLE9BQU8sQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0MsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDOUIsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsOEJBQThCO1FBQzlCLDJGQUEyRjtRQUMzRixXQUFXO1FBQ1gsZ0NBQWdDO1FBQ2hDLE1BQU07UUFDTixXQUFXO1FBQ1gsSUFBSTtLQUNMO1NBQU07UUFDTCxPQUFPLEtBQUssQ0FBQztLQUNkO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhcnNlUnVudGltZSB9IGZyb20gXCIuL1BhcnNlUnVudGltZVwiO1xuaW1wb3J0IHN0cmlwQm9tIGZyb20gXCJzdHJpcC1ib21cIjtcbi8qKlxuICogRm9yIGVhY2ggZGF0YSBjaHVuayBjb21pbmcgdG8gcGFyc2VyOlxuICogMS4gYXBwZW5kIHRoZSBkYXRhIHRvIHRoZSBidWZmZXIgdGhhdCBpcyBsZWZ0IGZyb20gbGFzdCBjaHVua1xuICogMi4gY2hlY2sgaWYgdXRmOCBjaGFycyBiZWluZyBzcGxpdCwgaWYgZG9lcywgc3RyaXBlIHRoZSBieXRlcyBhbmQgYWRkIHRvIGxlZnQgYnVmZmVyLlxuICogMy4gc3RyaXBCb20gXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmVwYXJlRGF0YShjaHVuazogQnVmZmVyLCBydW50aW1lOiBQYXJzZVJ1bnRpbWUpOiBzdHJpbmcge1xuICBjb25zdCB3b3JrQ2h1bmsgPSBjb25jYXRMZWZ0Q2h1bmsoY2h1bmssIHJ1bnRpbWUpO1xuICBydW50aW1lLmNzdkxpbmVCdWZmZXIgPSB1bmRlZmluZWQ7XG4gIGNvbnN0IGNsZWFuQ1NWU3RyaW5nID0gY2xlYW5VdGY4U3BsaXQod29ya0NodW5rLCBydW50aW1lKS50b1N0cmluZyhcInV0ZjhcIik7XG4gIGlmIChydW50aW1lLnN0YXJ0ZWQgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIHN0cmlwQm9tKGNsZWFuQ1NWU3RyaW5nKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY2xlYW5DU1ZTdHJpbmc7XG4gIH1cbn1cbi8qKlxuICogIGFwcGVuZCBkYXRhIHRvIGJ1ZmZlciB0aGF0IGlzIGxlZnQgZm9ybSBsYXN0IGNodW5rXG4gKi9cbmZ1bmN0aW9uIGNvbmNhdExlZnRDaHVuayhjaHVuazogQnVmZmVyLCBydW50aW1lOiBQYXJzZVJ1bnRpbWUpOiBCdWZmZXIge1xuICBpZiAocnVudGltZS5jc3ZMaW5lQnVmZmVyICYmIHJ1bnRpbWUuY3N2TGluZUJ1ZmZlci5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5jb25jYXQoW3J1bnRpbWUuY3N2TGluZUJ1ZmZlciwgY2h1bmtdKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY2h1bms7XG4gIH1cbn1cbi8qKlxuICogY2hlY2sgaWYgdXRmOCBjaGFycyBiZWluZyBzcGxpdCwgaWYgZG9lcywgc3RyaXBlIHRoZSBieXRlcyBhbmQgYWRkIHRvIGxlZnQgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbGVhblV0ZjhTcGxpdChjaHVuazogQnVmZmVyLCBydW50aW1lOiBQYXJzZVJ1bnRpbWUpOiBCdWZmZXIge1xuICBsZXQgaWR4ID0gY2h1bmsubGVuZ3RoIC0gMTtcbiAgLyoqXG4gICAqIEZyb20gS2V5YW5nOlxuICAgKiBUaGUgY29kZSBiZWxvdyBpcyB0byBjaGVjayBpZiBhIHNpbmdsZSB1dGY4IGNoYXIgKHdoaWNoIGNvdWxkIGJlIG11bHRpcGxlIGJ5dGVzKSBiZWluZyBzcGxpdC5cbiAgICogSWYgdGhlIGNoYXIgYmVpbmcgc3BsaXQsIHRoZSBidWZmZXIgZnJvbSB0d28gY2h1bmsgbmVlZHMgdG8gYmUgY29uY2F0XG4gICAqIGNoZWNrIGhvdyB1dGY4IGJlaW5nIGVuY29kZWQgdG8gdW5kZXJzdGFuZCB0aGUgY29kZSBiZWxvdy4gXG4gICAqIElmIGFueW9uZSBoYXMgYW55IGJldHRlciB3YXkgdG8gZG8gdGhpcywgcGxlYXNlIGxldCBtZSBrbm93LlxuICAgKi9cbiAgaWYgKChjaHVua1tpZHhdICYgMSA8PCA3KSAhPSAwKSB7XG4gICAgd2hpbGUgKChjaHVua1tpZHhdICYgMyA8PCA2KSA9PT0gMTI4KSB7XG4gICAgICBpZHgtLTtcbiAgICB9XG4gICAgaWR4LS07XG4gIH1cbiAgaWYgKGlkeCAhPSBjaHVuay5sZW5ndGggLSAxKSB7XG4gICAgcnVudGltZS5jc3ZMaW5lQnVmZmVyID0gY2h1bmsuc2xpY2UoaWR4ICsgMSk7XG4gICAgcmV0dXJuIGNodW5rLnNsaWNlKDAsIGlkeCArIDEpXG4gICAgLy8gdmFyIF9jYj1jYjtcbiAgICAvLyB2YXIgc2VsZj10aGlzO1xuICAgIC8vIGNiPWZ1bmN0aW9uKCl7XG4gICAgLy8gICBpZiAoc2VsZi5fY3N2TGluZUJ1ZmZlcil7XG4gICAgLy8gICAgIHNlbGYuX2NzdkxpbmVCdWZmZXI9QnVmZmVyLmNvbmNhdChbYnVmRnJvbVN0cmluZyhzZWxmLl9jc3ZMaW5lQnVmZmVyLFwidXRmOFwiKSxsZWZ0XSk7XG4gICAgLy8gICB9ZWxzZXtcbiAgICAvLyAgICAgc2VsZi5fY3N2TGluZUJ1ZmZlcj1sZWZ0O1xuICAgIC8vICAgfVxuICAgIC8vICAgX2NiKCk7XG4gICAgLy8gfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBjaHVuaztcbiAgfVxufSJdfQ==