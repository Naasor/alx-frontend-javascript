!function(o){var e={};function t(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return o[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=o,t.c=e,t.d=function(o,e,n){t.o(o,e)||Object.defineProperty(o,e,{enumerable:!0,get:n})},t.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},t.t=function(o,e){if(1&e&&(o=t(o)),8&e)return o;if(4&e&&"object"==typeof o&&o&&o.__esModule)return o;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:o}),2&e&&"string"!=typeof o)for(var r in o)t.d(n,r,function(e){return o[e]}.bind(null,r));return n},t.n=function(o){var e=o&&o.__esModule?function(){return o.default}:function(){return o};return t.d(e,"a",e),e},t.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},t.p="",t(t.s=0)}([function(o,e){var t=function(){function o(){}return o.prototype.workFromHome=function(){return"Working from home"},o.prototype.getCoffeeBreak=function(){return"Getting a coffee break"},o.prototype.workDirectorTasks=function(){return"Getting to director tasks"},o}(),n=function(){function o(){}return o.prototype.workFromHome=function(){return"Cannot work from home"},o.prototype.getCoffeeBreak=function(){return"Cannot have a break"},o.prototype.workTeacherTasks=function(){return"Getting to work"},o}();function r(o){return"number"==typeof o&&o<500?new n:new t}function u(o){return o instanceof t?o.workDirectorTasks():o instanceof n?o.workTeacherTasks():void 0}function c(o){return"Math"===o?"Teaching Math":"History"===o?"Teaching History":"Not teaching any subject"}var i=r(400);console.log(i.workFromHome());var f=r(600);console.log(f.workFromHome());var a=new t,l=new n;console.log(u(a)),console.log(u(l));console.log(c("Math")),console.log(c("History")),console.log(r("$500")),console.log(r(1e3)),console.log(r(200))}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi50cyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIndvcmtGcm9tSG9tZSIsImdldENvZmZlZUJyZWFrIiwid29ya0RpcmVjdG9yVGFza3MiLCJ3b3JrVGVhY2hlclRhc2tzIiwiY3JlYXRlRW1wbG95ZWUiLCJzYWxhcnkiLCJUZWFjaGVyIiwiRGlyZWN0b3IiLCJleGVjdXRlV29yayIsImVtcGxveWVlIiwidGVhY2hDbGFzcyIsInRvZGF5Q2xhc3MiLCJlbXBsb3llZTEiLCJjb25zb2xlIiwibG9nIiwiZW1wbG95ZWUyIiwiZGlyZWN0b3IiLCJ0ZWFjaGVyIl0sIm1hcHBpbmdzIjoiYUFDRSxJQUFJQSxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFVQyxRQUduQyxJQUFJQyxFQUFTSixFQUFpQkUsR0FBWSxDQUN6Q0csRUFBR0gsRUFDSEksR0FBRyxFQUNISCxRQUFTLElBVVYsT0FOQUksRUFBUUwsR0FBVU0sS0FBS0osRUFBT0QsUUFBU0MsRUFBUUEsRUFBT0QsUUFBU0YsR0FHL0RHLEVBQU9FLEdBQUksRUFHSkYsRUFBT0QsUUFLZkYsRUFBb0JRLEVBQUlGLEVBR3hCTixFQUFvQlMsRUFBSVYsRUFHeEJDLEVBQW9CVSxFQUFJLFNBQVNSLEVBQVNTLEVBQU1DLEdBQzNDWixFQUFvQmEsRUFBRVgsRUFBU1MsSUFDbENHLE9BQU9DLGVBQWViLEVBQVNTLEVBQU0sQ0FBRUssWUFBWSxFQUFNQyxJQUFLTCxLQUtoRVosRUFBb0JrQixFQUFJLFNBQVNoQixHQUNYLG9CQUFYaUIsUUFBMEJBLE9BQU9DLGFBQzFDTixPQUFPQyxlQUFlYixFQUFTaUIsT0FBT0MsWUFBYSxDQUFFQyxNQUFPLFdBRTdEUCxPQUFPQyxlQUFlYixFQUFTLGFBQWMsQ0FBRW1CLE9BQU8sS0FRdkRyQixFQUFvQnNCLEVBQUksU0FBU0QsRUFBT0UsR0FFdkMsR0FEVSxFQUFQQSxJQUFVRixFQUFRckIsRUFBb0JxQixJQUMvQixFQUFQRSxFQUFVLE9BQU9GLEVBQ3BCLEdBQVcsRUFBUEUsR0FBOEIsaUJBQVZGLEdBQXNCQSxHQUFTQSxFQUFNRyxXQUFZLE9BQU9ILEVBQ2hGLElBQUlJLEVBQUtYLE9BQU9ZLE9BQU8sTUFHdkIsR0FGQTFCLEVBQW9Ca0IsRUFBRU8sR0FDdEJYLE9BQU9DLGVBQWVVLEVBQUksVUFBVyxDQUFFVCxZQUFZLEVBQU1LLE1BQU9BLElBQ3RELEVBQVBFLEdBQTRCLGlCQUFURixFQUFtQixJQUFJLElBQUlNLEtBQU9OLEVBQU9yQixFQUFvQlUsRUFBRWUsRUFBSUUsRUFBSyxTQUFTQSxHQUFPLE9BQU9OLEVBQU1NLElBQVFDLEtBQUssS0FBTUQsSUFDOUksT0FBT0YsR0FJUnpCLEVBQW9CNkIsRUFBSSxTQUFTMUIsR0FDaEMsSUFBSVMsRUFBU1QsR0FBVUEsRUFBT3FCLFdBQzdCLFdBQXdCLE9BQU9yQixFQUFnQixTQUMvQyxXQUE4QixPQUFPQSxHQUV0QyxPQURBSCxFQUFvQlUsRUFBRUUsRUFBUSxJQUFLQSxHQUM1QkEsR0FJUlosRUFBb0JhLEVBQUksU0FBU2lCLEVBQVFDLEdBQVksT0FBT2pCLE9BQU9rQixVQUFVQyxlQUFlMUIsS0FBS3VCLEVBQVFDLElBR3pHL0IsRUFBb0JrQyxFQUFJLEdBSWpCbEMsRUFBb0JBLEVBQW9CbUMsRUFBSSxHLGdCQ25FckQsK0JBWUEsT0FYSSxZQUFBQyxhQUFBLFdBQ0ksTUFBTyxxQkFHWCxZQUFBQyxlQUFBLFdBQ0ksTUFBTywwQkFHWCxZQUFBQyxrQkFBQSxXQUNJLE1BQU8sNkJBRWYsRUFaQSxHQWVBLDJCQVlBLE9BWEksWUFBQUYsYUFBQSxXQUNJLE1BQU8seUJBR1gsWUFBQUMsZUFBQSxXQUNJLE1BQU8sdUJBR1gsWUFBQUUsaUJBQUEsV0FDSSxNQUFPLG1CQUVmLEVBWkEsR0FlQSxTQUFTQyxFQUFlQyxHQUNwQixNQUFzQixpQkFBWEEsR0FBdUJBLEVBQVMsSUFDaEMsSUFBSUMsRUFFSixJQUFJQyxFQWNuQixTQUFTQyxFQUFZQyxHQUNqQixPQUFJQSxhQUFvQkYsRUFDZkUsRUFBU1Asb0JBQ1BPLGFBQW9CSCxFQUN0QkcsRUFBU04sd0JBRFgsRUFTWCxTQUFTTyxFQUFXQyxHQUNoQixNQUFtQixTQUFmQSxFQUNPLGdCQUNlLFlBQWZBLEVBQ0EsbUJBR0EsMkJBS2YsSUFBTUMsRUFBWVIsRUFBZSxLQUNqQ1MsUUFBUUMsSUFBSUYsRUFBVVosZ0JBRXRCLElBQU1lLEVBQVlYLEVBQWUsS0FDakNTLFFBQVFDLElBQUlDLEVBQVVmLGdCQUV0QixJQUFNZ0IsRUFBcUIsSUFBSVQsRUFDekJVLEVBQW1CLElBQUlYLEVBRTdCTyxRQUFRQyxJQUFJTixFQUFZUSxJQUN4QkgsUUFBUUMsSUFBSU4sRUFBWVMsSUFLeEJKLFFBQVFDLElBQUlKLEVBSGdCLFNBSTVCRyxRQUFRQyxJQUFJSixFQUhtQixZQUsvQkcsUUFBUUMsSUFBSVYsRUFBZSxTQUMzQlMsUUFBUUMsSUFBSVYsRUFBZSxNQUMzQlMsUUFBUUMsSUFBSVYsRUFBZSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvLyBEaXJlY3RvckludGVyZmFjZVxyXG5pbnRlcmZhY2UgRGlyZWN0b3JJbnRlcmZhY2Uge1xyXG4gICAgd29ya0Zyb21Ib21lKCk6IHN0cmluZztcclxuICAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcclxuICAgIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZztcclxufVxyXG5cclxuLy8gVGVhY2hlckludGVyZmFjZVxyXG5pbnRlcmZhY2UgVGVhY2hlckludGVyZmFjZSB7XHJcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xyXG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nO1xyXG4gICAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIEltcGxlbWVudCBEaXJlY3RvciBjbGFzc1xyXG5jbGFzcyBEaXJlY3RvciBpbXBsZW1lbnRzIERpcmVjdG9ySW50ZXJmYWNlIHtcclxuICAgIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcIldvcmtpbmcgZnJvbSBob21lXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJHZXR0aW5nIGEgY29mZmVlIGJyZWFrXCI7XHJcbiAgICB9XHJcblxyXG4gICAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJHZXR0aW5nIHRvIGRpcmVjdG9yIHRhc2tzXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEltcGxlbWVudCBUZWFjaGVyIGNsYXNzXHJcbmNsYXNzIFRlYWNoZXIgaW1wbGVtZW50cyBUZWFjaGVySW50ZXJmYWNlIHtcclxuICAgIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcIkNhbm5vdCB3b3JrIGZyb20gaG9tZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwiQ2Fubm90IGhhdmUgYSBicmVha1wiO1xyXG4gICAgfVxyXG5cclxuICAgIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJHZXR0aW5nIHRvIHdvcmtcIjtcclxuICAgIH1cclxufVxyXG5cclxuLy8gY3JlYXRlRW1wbG95ZWUgZnVuY3Rpb25cclxuZnVuY3Rpb24gY3JlYXRlRW1wbG95ZWUoc2FsYXJ5OiBudW1iZXIgfCBzdHJpbmcpOiBEaXJlY3RvciB8IFRlYWNoZXIge1xyXG4gICAgaWYgKHR5cGVvZiBzYWxhcnkgPT09IFwibnVtYmVyXCIgJiYgc2FsYXJ5IDwgNTAwKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUZWFjaGVyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbmV3IERpcmVjdG9yO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBEZWZpbmUgdHlwZXMgZm9yIERpcmVjdG9yIGFuZCBUZWFjaGVyXHJcbi8vdHlwZSBEaXJlY3RvciA9IERpcmVjdG9ySW50ZXJmYWNlO1xyXG4vL3R5cGUgVGVhY2hlciA9IFRlYWNoZXJJbnRlcmZhY2U7XHJcblxyXG4vLyBpc0RpcmVjdG9yIGZ1bmN0aW9uXHJcbmZ1bmN0aW9uIGlzRGlyZWN0b3IoZW1wbG95ZWU6IFRlYWNoZXIgfCBEaXJlY3Rvcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGVtcGxveWVlIGluc3RhbmNlb2YgRGlyZWN0b3I7XHJcbiAgfVxyXG5cclxuLy8gZXhlY3V0ZVdvcmsgZnVuY3Rpb25cclxuZnVuY3Rpb24gZXhlY3V0ZVdvcmsoZW1wbG95ZWU6IFRlYWNoZXIgfCBEaXJlY3Rvcik6IHN0cmluZyB7XHJcbiAgICBpZiAoZW1wbG95ZWUgaW5zdGFuY2VvZiBEaXJlY3Rvcikge1xyXG4gICAgICByZXR1cm4gZW1wbG95ZWUud29ya0RpcmVjdG9yVGFza3MoKTtcclxuICAgIH0gZWxzZSBpZiAoZW1wbG95ZWUgaW5zdGFuY2VvZiBUZWFjaGVyKSB7XHJcbiAgICAgIHJldHVybiBlbXBsb3llZS53b3JrVGVhY2hlclRhc2tzKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFN0cmluZyBsaXRlcmFsIHR5cGUgbmFtZWQgU3ViamVjdHNcclxudHlwZSBTdWJqZWN0cyA9IFwiTWF0aFwiIHwgXCJIaXN0b3J5XCI7XHJcblxyXG4vLyB0ZWFjaENsYXNzIGZ1bmN0aW9uXHJcbmZ1bmN0aW9uIHRlYWNoQ2xhc3ModG9kYXlDbGFzczogU3ViamVjdHMpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRvZGF5Q2xhc3MgPT09IFwiTWF0aFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiVGVhY2hpbmcgTWF0aFwiO1xyXG4gICAgfSBlbHNlIGlmICh0b2RheUNsYXNzID09PSBcIkhpc3RvcnlcIikge1xyXG4gICAgICAgIHJldHVybiBcIlRlYWNoaW5nIEhpc3RvcnlcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gSGFuZGxlIG90aGVyIGNhc2VzIGlmIG5lZWRlZFxyXG4gICAgICAgIHJldHVybiBcIk5vdCB0ZWFjaGluZyBhbnkgc3ViamVjdFwiO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBFeGFtcGxlIHVzYWdlOlxyXG5jb25zdCBlbXBsb3llZTEgPSBjcmVhdGVFbXBsb3llZSg0MDApOyAvLyBXaWxsIHJldHVybiBhIFRlYWNoZXIgaW5zdGFuY2VcclxuY29uc29sZS5sb2coZW1wbG95ZWUxLndvcmtGcm9tSG9tZSgpKTsgLy8gQ2Fubm90IHdvcmsgZnJvbSBob21lXHJcblxyXG5jb25zdCBlbXBsb3llZTIgPSBjcmVhdGVFbXBsb3llZSg2MDApOyAvLyBXaWxsIHJldHVybiBhIERpcmVjdG9yIGluc3RhbmNlXHJcbmNvbnNvbGUubG9nKGVtcGxveWVlMi53b3JrRnJvbUhvbWUoKSk7IC8vIFdvcmtpbmcgZnJvbSBob21lXHJcblxyXG5jb25zdCBkaXJlY3RvcjogRGlyZWN0b3IgPSBuZXcgRGlyZWN0b3IoKTtcclxuY29uc3QgdGVhY2hlcjogVGVhY2hlciA9IG5ldyBUZWFjaGVyKCk7XHJcblxyXG5jb25zb2xlLmxvZyhleGVjdXRlV29yayhkaXJlY3RvcikpOyAvLyBXaWxsIGNhbGwgd29ya0RpcmVjdG9yVGFza3NcclxuY29uc29sZS5sb2coZXhlY3V0ZVdvcmsodGVhY2hlcikpOyAvLyBXaWxsIGNhbGwgd29ya1RlYWNoZXJUYXNrc1xyXG5cclxuY29uc3QgbWF0aENsYXNzOiBTdWJqZWN0cyA9IFwiTWF0aFwiO1xyXG5jb25zdCBoaXN0b3J5Q2xhc3M6IFN1YmplY3RzID0gXCJIaXN0b3J5XCI7XHJcblxyXG5jb25zb2xlLmxvZyh0ZWFjaENsYXNzKG1hdGhDbGFzcykpOyAvLyBUZWFjaGluZyBNYXRoXHJcbmNvbnNvbGUubG9nKHRlYWNoQ2xhc3MoaGlzdG9yeUNsYXNzKSk7IC8vIFRlYWNoaW5nIEhpc3RvcnlcclxuXHJcbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKCckNTAwJykpO1xyXG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgxMDAwKSk7XHJcbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKDIwMCkpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9