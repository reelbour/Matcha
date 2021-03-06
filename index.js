(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}




var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log = F2(function(tag, value)
{
	return value;
});

var _Debug_log_UNUSED = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString(value)
{
	return '<internals>';
}

function _Debug_toString_UNUSED(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File === 'function' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[94m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.ek.bG === region.eR.bG)
	{
		return 'on line ' + region.ek.bG;
	}
	return 'on lines ' + region.ek.bG + ' through ' + region.eR.bG;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	/**_UNUSED/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**_UNUSED/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**/
	if (typeof x.$ === 'undefined')
	//*/
	/**_UNUSED/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0 = 0;
var _Utils_Tuple0_UNUSED = { $: '#0' };

function _Utils_Tuple2(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2_UNUSED(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3_UNUSED(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr(c) { return c; }
function _Utils_chr_UNUSED(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil = { $: 0 };
var _List_Nil_UNUSED = { $: '[]' };

function _List_Cons(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons_UNUSED(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return word
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**_UNUSED/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
function _Json_unwrap_UNUSED(value) { return value.a; }

function _Json_wrap(value) { return value; }
function _Json_unwrap(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.g8,
		impl.$8,
		impl.hX,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_dispatchEffects(managers, result.b, subscriptions(model));
	}

	_Platform_dispatchEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				p: bag.n,
				q: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.q)
		{
			x = temp.p(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		r: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		r: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**/
	var node = args['node'];
	//*/
	/**_UNUSED/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		d_: func(record.d_),
		em: record.em,
		ee: record.ee
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.d_;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.em;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.ee) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.g8,
		impl.$8,
		impl.hX,
		function(sendToApp, initialModel) {
			var view = impl.ih;
			/**/
			var domNode = args['node'];
			//*/
			/**_UNUSED/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.g8,
		impl.$8,
		impl.hX,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.ei && impl.ei(sendToApp)
			var view = impl.ih;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.eE);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.C) && (_VirtualDom_doc.title = title = doc.C);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.hw;
	var onUrlRequest = impl.hx;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		ei: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.fA === next.fA
							&& curr.e5 === next.e5
							&& curr.fu.a === next.fu.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		g8: function(flags)
		{
			return A3(impl.g8, flags, _Browser_getUrl(), key);
		},
		ih: impl.ih,
		$8: impl.$8,
		hX: impl.hX
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { g$: 'hidden', ce: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { g$: 'mozHidden', ce: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { g$: 'msHidden', ce: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { g$: 'webkitHidden', ce: 'webkitvisibilitychange' }
		: { g$: 'hidden', ce: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		fK: _Browser_getScene(),
		f6: {
			t: _Browser_window.pageXOffset,
			u: _Browser_window.pageYOffset,
			du: _Browser_doc.documentElement.clientWidth,
			e2: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		du: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		e2: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			fK: {
				du: node.scrollWidth,
				e2: node.scrollHeight
			},
			f6: {
				t: node.scrollLeft,
				u: node.scrollTop,
				du: node.clientWidth,
				e2: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			fK: _Browser_getScene(),
			f6: {
				t: x,
				u: y,
				du: _Browser_doc.documentElement.clientWidth,
				e2: _Browser_doc.documentElement.clientHeight
			},
			gQ: {
				t: x + rect.left,
				u: y + rect.top,
				du: rect.width,
				e2: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});



// SEND REQUEST

var _Http_toTask = F3(function(router, toTask, request)
{
	return _Scheduler_binding(function(callback)
	{
		function done(response) {
			callback(toTask(request.eT.a(response)));
		}

		var xhr = new XMLHttpRequest();
		xhr.addEventListener('error', function() { done($elm$http$Http$NetworkError_); });
		xhr.addEventListener('timeout', function() { done($elm$http$Http$Timeout_); });
		xhr.addEventListener('load', function() { done(_Http_toResponse(request.eT.b, xhr)); });
		$elm$core$Maybe$isJust(request.f_) && _Http_track(router, xhr, request.f_.a);

		try {
			xhr.open(request.hm, request.f2, true);
		} catch (e) {
			return done($elm$http$Http$BadUrl_(request.f2));
		}

		_Http_configureRequest(xhr, request);

		request.eE.a && xhr.setRequestHeader('Content-Type', request.eE.a);
		xhr.send(request.eE.b);

		return function() { xhr.c = true; xhr.abort(); };
	});
});


// CONFIGURE

function _Http_configureRequest(xhr, request)
{
	for (var headers = request.e1; headers.b; headers = headers.b) // WHILE_CONS
	{
		xhr.setRequestHeader(headers.a.a, headers.a.b);
	}
	xhr.timeout = request.dk.a || 0;
	xhr.responseType = request.eT.d;
	xhr.withCredentials = request.gm;
}


// RESPONSES

function _Http_toResponse(toBody, xhr)
{
	return A2(
		200 <= xhr.status && xhr.status < 300 ? $elm$http$Http$GoodStatus_ : $elm$http$Http$BadStatus_,
		_Http_toMetadata(xhr),
		toBody(xhr.response)
	);
}


// METADATA

function _Http_toMetadata(xhr)
{
	return {
		f2: xhr.responseURL,
		hR: xhr.status,
		hS: xhr.statusText,
		e1: _Http_parseHeaders(xhr.getAllResponseHeaders())
	};
}


// HEADERS

function _Http_parseHeaders(rawHeaders)
{
	if (!rawHeaders)
	{
		return $elm$core$Dict$empty;
	}

	var headers = $elm$core$Dict$empty;
	var headerPairs = rawHeaders.split('\r\n');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf(': ');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3($elm$core$Dict$update, key, function(oldValue) {
				return $elm$core$Maybe$Just($elm$core$Maybe$isJust(oldValue)
					? value + ', ' + oldValue.a
					: value
				);
			}, headers);
		}
	}
	return headers;
}


// EXPECT

var _Http_expect = F3(function(type, toBody, toValue)
{
	return {
		$: 0,
		d: type,
		b: toBody,
		a: toValue
	};
});

var _Http_mapExpect = F2(function(func, expect)
{
	return {
		$: 0,
		d: expect.d,
		b: expect.b,
		a: function(x) { return func(expect.a(x)); }
	};
});

function _Http_toDataView(arrayBuffer)
{
	return new DataView(arrayBuffer);
}


// BODY and PARTS

var _Http_emptyBody = { $: 0 };
var _Http_pair = F2(function(a, b) { return { $: 0, a: a, b: b }; });

function _Http_toFormData(parts)
{
	for (var formData = new FormData(); parts.b; parts = parts.b) // WHILE_CONS
	{
		var part = parts.a;
		formData.append(part.a, part.b);
	}
	return formData;
}

var _Http_bytesToBlob = F2(function(mime, bytes)
{
	return new Blob([bytes], { type: mime });
});


// PROGRESS

function _Http_track(router, xhr, tracker)
{
	// TODO check out lengthComputable on loadstart event

	xhr.upload.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Sending({
			de: event.loaded,
			ej: event.total
		}))));
	});
	xhr.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Receiving({
			hB: event.loaded,
			ej: event.lengthComputable ? $elm$core$Maybe$Just(event.total) : $elm$core$Maybe$Nothing
		}))));
	});
}



// STRINGS


var _Parser_isSubString = F5(function(smallString, offset, row, col, bigString)
{
	var smallLength = smallString.length;
	var isGood = offset + smallLength <= bigString.length;

	for (var i = 0; isGood && i < smallLength; )
	{
		var code = bigString.charCodeAt(offset);
		isGood =
			smallString[i++] === bigString[offset++]
			&& (
				code === 0x000A /* \n */
					? ( row++, col=1 )
					: ( col++, (code & 0xF800) === 0xD800 ? smallString[i++] === bigString[offset++] : 1 )
			)
	}

	return _Utils_Tuple3(isGood ? offset : -1, row, col);
});



// CHARS


var _Parser_isSubChar = F3(function(predicate, offset, string)
{
	return (
		string.length <= offset
			? -1
			:
		(string.charCodeAt(offset) & 0xF800) === 0xD800
			? (predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1)
			:
		(predicate(_Utils_chr(string[offset]))
			? ((string[offset] === '\n') ? -2 : (offset + 1))
			: -1
		)
	);
});


var _Parser_isAsciiCode = F3(function(code, offset, string)
{
	return string.charCodeAt(offset) === code;
});



// NUMBERS


var _Parser_chompBase10 = F2(function(offset, string)
{
	for (; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (code < 0x30 || 0x39 < code)
		{
			return offset;
		}
	}
	return offset;
});


var _Parser_consumeBase = F3(function(base, offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var digit = string.charCodeAt(offset) - 0x30;
		if (digit < 0 || base <= digit) break;
		total = base * total + digit;
	}
	return _Utils_Tuple2(offset, total);
});


var _Parser_consumeBase16 = F2(function(offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (0x30 <= code && code <= 0x39)
		{
			total = 16 * total + code - 0x30;
		}
		else if (0x41 <= code && code <= 0x46)
		{
			total = 16 * total + code - 55;
		}
		else if (0x61 <= code && code <= 0x66)
		{
			total = 16 * total + code - 87;
		}
		else
		{
			break;
		}
	}
	return _Utils_Tuple2(offset, total);
});



// FIND STRING


var _Parser_findSubString = F5(function(smallString, offset, row, col, bigString)
{
	var newOffset = bigString.indexOf(smallString, offset);
	var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;

	while (offset < target)
	{
		var code = bigString.charCodeAt(offset++);
		code === 0x000A /* \n */
			? ( col=1, row++ )
			: ( col++, (code & 0xF800) === 0xD800 && offset++ )
	}

	return _Utils_Tuple3(newOffset, row, col);
});


function _Url_percentEncode(string)
{
	return encodeURIComponent(string);
}

function _Url_percentDecode(string)
{
	try
	{
		return $elm$core$Maybe$Just(decodeURIComponent(string));
	}
	catch (e)
	{
		return $elm$core$Maybe$Nothing;
	}
}


function _Time_now(millisToPosix)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(millisToPosix(Date.now())));
	});
}

var _Time_setInterval = F2(function(interval, task)
{
	return _Scheduler_binding(function(callback)
	{
		var id = setInterval(function() { _Scheduler_rawSpawn(task); }, interval);
		return function() { clearInterval(id); };
	});
});

function _Time_here()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(
			A2($elm$time$Time$customZone, -(new Date().getTimezoneOffset()), _List_Nil)
		));
	});
}


function _Time_getZoneName()
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			var name = $elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
		}
		catch (e)
		{
			var name = $elm$time$Time$Offset(new Date().getTimezoneOffset());
		}
		callback(_Scheduler_succeed(name));
	});
}



// DECODER

var _File_decoder = _Json_decodePrim(function(value) {
	// NOTE: checks if `File` exists in case this is run on node
	return (typeof File !== 'undefined' && value instanceof File)
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FILE', value);
});


// METADATA

function _File_name(file) { return file.name; }
function _File_mime(file) { return file.type; }
function _File_size(file) { return file.size; }

function _File_lastModified(file)
{
	return $elm$time$Time$millisToPosix(file.lastModified);
}


// DOWNLOAD

var _File_downloadNode;

function _File_getDownloadNode()
{
	return _File_downloadNode || (_File_downloadNode = document.createElement('a'));
}

var _File_download = F3(function(name, mime, content)
{
	return _Scheduler_binding(function(callback)
	{
		var blob = new Blob([content], {type: mime});

		// for IE10+
		if (navigator.msSaveOrOpenBlob)
		{
			navigator.msSaveOrOpenBlob(blob, name);
			return;
		}

		// for HTML5
		var node = _File_getDownloadNode();
		var objectUrl = URL.createObjectURL(blob);
		node.href = objectUrl;
		node.download = name;
		_File_click(node);
		URL.revokeObjectURL(objectUrl);
	});
});

function _File_downloadUrl(href)
{
	return _Scheduler_binding(function(callback)
	{
		var node = _File_getDownloadNode();
		node.href = href;
		node.download = '';
		node.origin === location.origin || (node.target = '_blank');
		_File_click(node);
	});
}


// IE COMPATIBILITY

function _File_makeBytesSafeForInternetExplorer(bytes)
{
	// only needed by IE10 and IE11 to fix https://github.com/elm/file/issues/10
	// all other browsers can just run `new Blob([bytes])` directly with no problem
	//
	return new Uint8Array(bytes.buffer, bytes.byteOffset, bytes.byteLength);
}

function _File_click(node)
{
	// only needed by IE10 and IE11 to fix https://github.com/elm/file/issues/11
	// all other browsers have MouseEvent and do not need this conditional stuff
	//
	if (typeof MouseEvent === 'function')
	{
		node.dispatchEvent(new MouseEvent('click'));
	}
	else
	{
		var event = document.createEvent('MouseEvents');
		event.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		document.body.appendChild(node);
		node.dispatchEvent(event);
		document.body.removeChild(node);
	}
}


// UPLOAD

var _File_node;

function _File_uploadOne(mimes)
{
	return _Scheduler_binding(function(callback)
	{
		_File_node = document.createElement('input');
		_File_node.type = 'file';
		_File_node.accept = A2($elm$core$String$join, ',', mimes);
		_File_node.addEventListener('change', function(event)
		{
			callback(_Scheduler_succeed(event.target.files[0]));
		});
		_File_click(_File_node);
	});
}

function _File_uploadOneOrMore(mimes)
{
	return _Scheduler_binding(function(callback)
	{
		_File_node = document.createElement('input');
		_File_node.type = 'file';
		_File_node.multiple = true;
		_File_node.accept = A2($elm$core$String$join, ',', mimes);
		_File_node.addEventListener('change', function(event)
		{
			var elmFiles = _List_fromArray(event.target.files);
			callback(_Scheduler_succeed(_Utils_Tuple2(elmFiles.a, elmFiles.b)));
		});
		_File_click(_File_node);
	});
}


// CONTENT

function _File_toString(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(reader.result));
		});
		reader.readAsText(blob);
		return function() { reader.abort(); };
	});
}

function _File_toBytes(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(new DataView(reader.result)));
		});
		reader.readAsArrayBuffer(blob);
		return function() { reader.abort(); };
	});
}

function _File_toUrl(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(reader.result));
		});
		reader.readAsDataURL(blob);
		return function() { reader.abort(); };
	});
}



// CREATE

var _Regex_never = /.^/;

var _Regex_fromStringWith = F2(function(options, string)
{
	var flags = 'g';
	if (options.ho) { flags += 'm'; }
	if (options.gD) { flags += 'i'; }

	try
	{
		return $elm$core$Maybe$Just(new RegExp(string, flags));
	}
	catch(error)
	{
		return $elm$core$Maybe$Nothing;
	}
});


// USE

var _Regex_contains = F2(function(re, string)
{
	return string.match(re) !== null;
});


var _Regex_findAtMost = F3(function(n, re, str)
{
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex == re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		out.push(A4($elm$regex$Regex$Match, result[0], result.index, number, _List_fromArray(subs)));
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _List_fromArray(out);
});


var _Regex_replaceAtMost = F4(function(n, re, replacer, string)
{
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		return replacer(A4($elm$regex$Regex$Match, match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
	}
	return string.replace(re, jsReplacer);
});

var _Regex_splitAtMost = F3(function(n, re, str)
{
	var string = str;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		var result = re.exec(string);
		if (!result) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _List_fromArray(out);
});

var _Regex_infinity = Infinity;
var $elm$core$Maybe$Just = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Maybe$Nothing = {$: 1};
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (!node.$) {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === -2) {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = 1;
var $elm$core$Basics$GT = 2;
var $elm$core$Basics$LT = 0;
var $elm$core$Result$Err = function (a) {
	return {$: 1, a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 0, a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 2, a: a};
};
var $elm$core$Basics$False = 1;
var $elm$core$Basics$add = _Basics_add;
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 0:
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 1) {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 1:
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 2:
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 1, a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.m) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.o),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.o);
		} else {
			var treeLen = builder.m * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.q) : builder.q;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.m);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.o) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.o);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{q: nodeList, m: (len / $elm$core$Array$branchFactor) | 0, o: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = 0;
var $elm$core$Result$isOk = function (result) {
	if (!result.$) {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 0:
			return 0;
		case 1:
			return 1;
		case 2:
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 1, a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = $elm$core$Basics$identity;
var $elm$url$Url$Http = 0;
var $elm$url$Url$Https = 1;
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {eZ: fragment, e5: host, fr: path, fu: port_, fA: protocol, fC: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 1) {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		0,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		1,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = $elm$core$Basics$identity;
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(0);
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return 0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0;
		return A2($elm$core$Task$map, tagger, task);
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			A2($elm$core$Task$map, toMessage, task));
	});
var $elm$browser$Browser$application = _Browser_application;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $author$project$Main$Anonymous = function (a) {
	return {$: 1, a: a};
};
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $author$project$Form$OnSubmit = function (a) {
	return {$: 0, a: a};
};
var $author$project$Form$form = F4(
	function (decoder, submitionType, url, implicitFields) {
		return {dH: decoder, P: $elm$core$Array$empty, dV: implicitFields, dh: submitionType, f2: url};
	});
var $webbhuset$elm_json_decode$Json$Decode$Field$require = F3(
	function (fieldName, valueDecoder, continuation) {
		return A2(
			$elm$json$Json$Decode$andThen,
			continuation,
			A2($elm$json$Json$Decode$field, fieldName, valueDecoder));
	});
var $elm$json$Json$Decode$fail = _Json_fail;
var $elm$json$Json$Decode$string = _Json_decodeString;
var $author$project$Main$resultDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (str) {
		switch (str) {
			case 'Success':
				return $elm$json$Json$Decode$succeed($elm$core$Result$Ok);
			case 'Failure':
				return $elm$json$Json$Decode$succeed($elm$core$Result$Err);
			default:
				return $elm$json$Json$Decode$fail('statusDecoder failed : not a valid status');
		}
	},
	$elm$json$Json$Decode$string);
var $author$project$Main$resultMessageDecoder = A3(
	$webbhuset$elm_json_decode$Json$Decode$Field$require,
	'result',
	$author$project$Main$resultDecoder,
	function (result) {
		return A3(
			$webbhuset$elm_json_decode$Json$Decode$Field$require,
			'message',
			$elm$json$Json$Decode$string,
			function (message) {
				return $elm$json$Json$Decode$succeed(
					result(message));
			});
	});
var $author$project$Main$requestAccountConfirmationForm = F2(
	function (a, b) {
		return A4(
			$author$project$Form$form,
			$author$project$Main$resultMessageDecoder,
			$author$project$Form$OnSubmit('confirm account'),
			'http://localhost:8080/control/account_confirmation.php',
			_List_fromArray(
				[
					_Utils_Tuple2(
					'a',
					$elm$core$String$fromInt(a)),
					_Utils_Tuple2(
					'b',
					$elm$core$String$fromInt(b))
				]));
	});
var $author$project$Form$Password = function (a) {
	return {$: 1, a: a};
};
var $elm$core$Elm$JsArray$push = _JsArray_push;
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $elm$core$Array$bitMask = 4294967295 >>> (32 - $elm$core$Array$shiftStep);
var $elm$core$Basics$ge = _Utils_ge;
var $elm$core$Elm$JsArray$singleton = _JsArray_singleton;
var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var $elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
var $elm$core$Array$insertTailInTree = F4(
	function (shift, index, tail, tree) {
		var pos = $elm$core$Array$bitMask & (index >>> shift);
		if (_Utils_cmp(
			pos,
			$elm$core$Elm$JsArray$length(tree)) > -1) {
			if (shift === 5) {
				return A2(
					$elm$core$Elm$JsArray$push,
					$elm$core$Array$Leaf(tail),
					tree);
			} else {
				var newSub = $elm$core$Array$SubTree(
					A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, $elm$core$Elm$JsArray$empty));
				return A2($elm$core$Elm$JsArray$push, newSub, tree);
			}
		} else {
			var value = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (!value.$) {
				var subTree = value.a;
				var newSub = $elm$core$Array$SubTree(
					A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, subTree));
				return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			} else {
				var newSub = $elm$core$Array$SubTree(
					A4(
						$elm$core$Array$insertTailInTree,
						shift - $elm$core$Array$shiftStep,
						index,
						tail,
						$elm$core$Elm$JsArray$singleton(value)));
				return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			}
		}
	});
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Array$unsafeReplaceTail = F2(
	function (newTail, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		var originalTailLen = $elm$core$Elm$JsArray$length(tail);
		var newTailLen = $elm$core$Elm$JsArray$length(newTail);
		var newArrayLen = len + (newTailLen - originalTailLen);
		if (_Utils_eq(newTailLen, $elm$core$Array$branchFactor)) {
			var overflow = _Utils_cmp(newArrayLen >>> $elm$core$Array$shiftStep, 1 << startShift) > 0;
			if (overflow) {
				var newShift = startShift + $elm$core$Array$shiftStep;
				var newTree = A4(
					$elm$core$Array$insertTailInTree,
					newShift,
					len,
					newTail,
					$elm$core$Elm$JsArray$singleton(
						$elm$core$Array$SubTree(tree)));
				return A4($elm$core$Array$Array_elm_builtin, newArrayLen, newShift, newTree, $elm$core$Elm$JsArray$empty);
			} else {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					newArrayLen,
					startShift,
					A4($elm$core$Array$insertTailInTree, startShift, len, newTail, tree),
					$elm$core$Elm$JsArray$empty);
			}
		} else {
			return A4($elm$core$Array$Array_elm_builtin, newArrayLen, startShift, tree, newTail);
		}
	});
var $elm$core$Array$push = F2(
	function (a, array) {
		var tail = array.d;
		return A2(
			$elm$core$Array$unsafeReplaceTail,
			A2($elm$core$Elm$JsArray$push, a, tail),
			array);
	});
var $author$project$Form$add = F2(
	function (field, myForm) {
		return _Utils_update(
			myForm,
			{
				P: A2($elm$core$Array$push, field, myForm.P)
			});
	});
var $author$project$Form$defaultTextFieldModel = function (label) {
	return {j: label, f3: _List_Nil, c: ''};
};
var $author$project$Form$passwordField = F2(
	function (label, myForm) {
		return A2(
			$author$project$Form$add,
			$author$project$Form$Password(
				$author$project$Form$defaultTextFieldModel(label)),
			myForm);
	});
var $author$project$Main$requestAccountRetrievalForm = F2(
	function (a, b) {
		return A2(
			$author$project$Form$passwordField,
			'confirm',
			A2(
				$author$project$Form$passwordField,
				'newpw',
				A4(
					$author$project$Form$form,
					$author$project$Main$resultMessageDecoder,
					$author$project$Form$OnSubmit('Retrieve password'),
					'http://localhost:8080/control/password_retrieval.php',
					_List_fromArray(
						[
							_Utils_Tuple2(
							'a',
							$elm$core$String$fromInt(a)),
							_Utils_Tuple2(
							'b',
							$elm$core$String$fromInt(b))
						]))));
	});
var $author$project$Main$anonymousAccessInit = function (route) {
	return _Utils_Tuple2(
		function () {
			switch (route.$) {
				case 7:
					var a = route.a;
					var b = route.b;
					return $author$project$Main$Anonymous(
						{
							U: $elm$core$Maybe$Nothing,
							V: $elm$core$Maybe$Just(
								A2($author$project$Main$requestAccountRetrievalForm, a, b)),
							aA: '',
							aE: '',
							aF: '',
							aG: '',
							aH: '',
							aI: '',
							aJ: '',
							aK: '',
							aL: ''
						});
				case 8:
					var a = route.a;
					var b = route.b;
					return $author$project$Main$Anonymous(
						{
							U: $elm$core$Maybe$Just(
								A2($author$project$Main$requestAccountConfirmationForm, a, b)),
							V: $elm$core$Maybe$Nothing,
							aA: '',
							aE: '',
							aF: '',
							aG: '',
							aH: '',
							aI: '',
							aJ: '',
							aK: '',
							aL: ''
						});
				default:
					return $author$project$Main$Anonymous(
						{U: $elm$core$Maybe$Nothing, V: $elm$core$Maybe$Nothing, aA: '', aE: '', aF: '', aG: '', aH: '', aI: '', aJ: '', aK: '', aL: ''});
			}
		}(),
		$elm$core$Platform$Cmd$none);
};
var $author$project$Main$GeoAuthRefused = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $author$project$Main$Logged = function (a) {
	return {$: 0, a: a};
};
var $krisajenkins$remotedata$RemoteData$NotAsked = {$: 0};
var $author$project$Main$ReceiveChats = function (a) {
	return {$: 64, a: a};
};
var $author$project$Main$ReceiveCurrentSettings = function (a) {
	return {$: 71, a: a};
};
var $author$project$Main$ReceiveFeedInit = function (a) {
	return {$: 51, a: a};
};
var $author$project$Main$ReceiveNotifS = function (a) {
	return {$: 63, a: a};
};
var $author$project$Main$ReceiveUserDetails = function (a) {
	return {$: 61, a: a};
};
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$time$Time$Jan = 0;
var $justinmimbs$date$Date$RD = $elm$core$Basics$identity;
var $elm$core$Basics$modBy = _Basics_modBy;
var $elm$core$Basics$neq = _Utils_notEqual;
var $justinmimbs$date$Date$isLeapYear = function (y) {
	return ((!A2($elm$core$Basics$modBy, 4, y)) && (!(!A2($elm$core$Basics$modBy, 100, y)))) || (!A2($elm$core$Basics$modBy, 400, y));
};
var $justinmimbs$date$Date$daysInMonth = F2(
	function (y, m) {
		switch (m) {
			case 0:
				return 31;
			case 1:
				return $justinmimbs$date$Date$isLeapYear(y) ? 29 : 28;
			case 2:
				return 31;
			case 3:
				return 30;
			case 4:
				return 31;
			case 5:
				return 30;
			case 6:
				return 31;
			case 7:
				return 31;
			case 8:
				return 30;
			case 9:
				return 31;
			case 10:
				return 30;
			default:
				return 31;
		}
	});
var $justinmimbs$date$Date$monthToNumber = function (m) {
	switch (m) {
		case 0:
			return 1;
		case 1:
			return 2;
		case 2:
			return 3;
		case 3:
			return 4;
		case 4:
			return 5;
		case 5:
			return 6;
		case 6:
			return 7;
		case 7:
			return 8;
		case 8:
			return 9;
		case 9:
			return 10;
		case 10:
			return 11;
		default:
			return 12;
	}
};
var $elm$time$Time$Apr = 3;
var $elm$time$Time$Aug = 7;
var $elm$time$Time$Dec = 11;
var $elm$time$Time$Feb = 1;
var $elm$time$Time$Jul = 6;
var $elm$time$Time$Jun = 5;
var $elm$time$Time$Mar = 2;
var $elm$time$Time$May = 4;
var $elm$time$Time$Nov = 10;
var $elm$time$Time$Oct = 9;
var $elm$time$Time$Sep = 8;
var $justinmimbs$date$Date$numberToMonth = function (mn) {
	var _v0 = A2($elm$core$Basics$max, 1, mn);
	switch (_v0) {
		case 1:
			return 0;
		case 2:
			return 1;
		case 3:
			return 2;
		case 4:
			return 3;
		case 5:
			return 4;
		case 6:
			return 5;
		case 7:
			return 6;
		case 8:
			return 7;
		case 9:
			return 8;
		case 10:
			return 9;
		case 11:
			return 10;
		default:
			return 11;
	}
};
var $justinmimbs$date$Date$toCalendarDateHelp = F3(
	function (y, m, d) {
		toCalendarDateHelp:
		while (true) {
			var monthDays = A2($justinmimbs$date$Date$daysInMonth, y, m);
			var mn = $justinmimbs$date$Date$monthToNumber(m);
			if ((mn < 12) && (_Utils_cmp(d, monthDays) > 0)) {
				var $temp$y = y,
					$temp$m = $justinmimbs$date$Date$numberToMonth(mn + 1),
					$temp$d = d - monthDays;
				y = $temp$y;
				m = $temp$m;
				d = $temp$d;
				continue toCalendarDateHelp;
			} else {
				return {eN: d, fk: m, gb: y};
			}
		}
	});
var $justinmimbs$date$Date$floorDiv = F2(
	function (a, b) {
		return $elm$core$Basics$floor(a / b);
	});
var $justinmimbs$date$Date$daysBeforeYear = function (y1) {
	var y = y1 - 1;
	var leapYears = (A2($justinmimbs$date$Date$floorDiv, y, 4) - A2($justinmimbs$date$Date$floorDiv, y, 100)) + A2($justinmimbs$date$Date$floorDiv, y, 400);
	return (365 * y) + leapYears;
};
var $justinmimbs$date$Date$divWithRemainder = F2(
	function (a, b) {
		return _Utils_Tuple2(
			A2($justinmimbs$date$Date$floorDiv, a, b),
			A2($elm$core$Basics$modBy, b, a));
	});
var $justinmimbs$date$Date$year = function (_v0) {
	var rd = _v0;
	var _v1 = A2($justinmimbs$date$Date$divWithRemainder, rd, 146097);
	var n400 = _v1.a;
	var r400 = _v1.b;
	var _v2 = A2($justinmimbs$date$Date$divWithRemainder, r400, 36524);
	var n100 = _v2.a;
	var r100 = _v2.b;
	var _v3 = A2($justinmimbs$date$Date$divWithRemainder, r100, 1461);
	var n4 = _v3.a;
	var r4 = _v3.b;
	var _v4 = A2($justinmimbs$date$Date$divWithRemainder, r4, 365);
	var n1 = _v4.a;
	var r1 = _v4.b;
	var n = (!r1) ? 0 : 1;
	return ((((n400 * 400) + (n100 * 100)) + (n4 * 4)) + n1) + n;
};
var $justinmimbs$date$Date$toOrdinalDate = function (_v0) {
	var rd = _v0;
	var y = $justinmimbs$date$Date$year(rd);
	return {
		d7: rd - $justinmimbs$date$Date$daysBeforeYear(y),
		gb: y
	};
};
var $justinmimbs$date$Date$toCalendarDate = function (_v0) {
	var rd = _v0;
	var date = $justinmimbs$date$Date$toOrdinalDate(rd);
	return A3($justinmimbs$date$Date$toCalendarDateHelp, date.gb, 0, date.d7);
};
var $justinmimbs$date$Date$day = A2(
	$elm$core$Basics$composeR,
	$justinmimbs$date$Date$toCalendarDate,
	function ($) {
		return $.eN;
	});
var $author$project$Main$dayList = A2(
	$elm$core$List$map,
	function (nr) {
		return _Utils_Tuple2(
			nr,
			$elm$core$String$fromInt(nr));
	},
	A2($elm$core$List$range, 1, 31));
var $author$project$ZipList$Empty = {$: 0};
var $author$project$ZipList$Zipper = F3(
	function (a, b, c) {
		return {$: 1, a: a, b: b, c: c};
	});
var $author$project$ZipList$fromList = function (list) {
	if (!list.b) {
		return $author$project$ZipList$Empty;
	} else {
		var head = list.a;
		var queue = list.b;
		return A3($author$project$ZipList$Zipper, _List_Nil, head, queue);
	}
};
var $elm$core$Basics$clamp = F3(
	function (low, high, number) {
		return (_Utils_cmp(number, low) < 0) ? low : ((_Utils_cmp(number, high) > 0) ? high : number);
	});
var $justinmimbs$date$Date$fromOrdinalDate = F2(
	function (y, od) {
		var daysInY = $justinmimbs$date$Date$isLeapYear(y) ? 366 : 365;
		return $justinmimbs$date$Date$daysBeforeYear(y) + A3($elm$core$Basics$clamp, 1, daysInY, od);
	});
var $author$project$BasicValues$Man = 0;
var $author$project$BasicValues$Woman = 1;
var $author$project$BasicValues$genderList = _List_fromArray(
	[
		_Utils_Tuple2(0, 'man'),
		_Utils_Tuple2(1, 'woman')
	]);
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var $author$project$ZipList$currentIndex = function (zipList) {
	if (!zipList.$) {
		return $elm$core$Maybe$Nothing;
	} else {
		var before = zipList.a;
		return $elm$core$Maybe$Just(
			$elm$core$List$length(before));
	}
};
var $author$project$ZipList$jumpBackward = F2(
	function (jumpSize, zipList) {
		if (jumpSize <= 0) {
			return zipList;
		} else {
			if ((zipList.$ === 1) && zipList.a.b) {
				var _v1 = zipList.a;
				var head = _v1.a;
				var queue = _v1.b;
				var elem = zipList.b;
				var after = zipList.c;
				return A2(
					$author$project$ZipList$jumpBackward,
					jumpSize - 1,
					A3(
						$author$project$ZipList$Zipper,
						queue,
						head,
						A2($elm$core$List$cons, elem, after)));
			} else {
				return zipList;
			}
		}
	});
var $author$project$ZipList$jumpForward = F2(
	function (jumpSize, zipList) {
		if (jumpSize <= 0) {
			return zipList;
		} else {
			if ((zipList.$ === 1) && zipList.c.b) {
				var before = zipList.a;
				var elem = zipList.b;
				var _v1 = zipList.c;
				var head = _v1.a;
				var queue = _v1.b;
				return A2(
					$author$project$ZipList$jumpForward,
					jumpSize - 1,
					A3(
						$author$project$ZipList$Zipper,
						A2($elm$core$List$cons, elem, before),
						head,
						queue));
			} else {
				return zipList;
			}
		}
	});
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$ZipList$Negatif = 2;
var $author$project$ZipList$Positif = 1;
var $author$project$ZipList$Zero = 0;
var $author$project$ZipList$sign = function (val) {
	return (!val) ? 0 : ((val > 0) ? 1 : 2);
};
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $author$project$ZipList$goToIndex = F2(
	function (newIndex, zipList) {
		var maybeIndex = $author$project$ZipList$currentIndex(zipList);
		var delta = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2(
				$elm$core$Maybe$map,
				function (index) {
					return newIndex - index;
				},
				maybeIndex));
		var _v0 = $author$project$ZipList$sign(delta);
		switch (_v0) {
			case 0:
				return zipList;
			case 1:
				return A2($author$project$ZipList$jumpForward, delta, zipList);
			default:
				return A2(
					$author$project$ZipList$jumpBackward,
					$elm$core$Basics$abs(delta),
					zipList);
		}
	});
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $author$project$ZipList$forward = function (zipList) {
	if (!zipList.$) {
		return zipList;
	} else {
		var before = zipList.a;
		var elem = zipList.b;
		var after = zipList.c;
		if (!after.b) {
			return zipList;
		} else {
			var head = after.a;
			var queue = after.b;
			return A3(
				$author$project$ZipList$Zipper,
				A2($elm$core$List$cons, elem, before),
				head,
				queue);
		}
	}
};
var $author$project$ZipList$goToNext = F2(
	function (condition, zipList) {
		goToNext:
		while (true) {
			if (!zipList.$) {
				return $author$project$ZipList$Empty;
			} else {
				var after = zipList.c;
				if (A2($elm$core$List$any, condition, after)) {
					var $temp$condition = condition,
						$temp$zipList = $author$project$ZipList$forward(zipList);
					condition = $temp$condition;
					zipList = $temp$zipList;
					continue goToNext;
				} else {
					return zipList;
				}
			}
		}
	});
var $author$project$ZipList$current = function (zipList) {
	if (!zipList.$) {
		return $elm$core$Maybe$Nothing;
	} else {
		var elem = zipList.b;
		return $elm$core$Maybe$Just(elem);
	}
};
var $author$project$ZipList$isCurrent = F2(
	function (condition, zipList) {
		return A2(
			$elm$core$Maybe$withDefault,
			false,
			A2(
				$elm$core$Maybe$map,
				condition,
				$author$project$ZipList$current(zipList)));
	});
var $author$project$ZipList$goToFirst = F2(
	function (condition, zipList) {
		var newZipList = A2($author$project$ZipList$goToIndex, 0, zipList);
		return A2($author$project$ZipList$isCurrent, condition, newZipList) ? newZipList : A2($author$project$ZipList$goToNext, condition, newZipList);
	});
var $larribas$elm_multi_input$MultiInput$init = function (id) {
	return {e8: id, ah: false, J: ''};
};
var $billstclair$elm_geolocation$PortFunnel$Geolocation$State = $elm$core$Basics$identity;
var $billstclair$elm_geolocation$PortFunnel$Geolocation$initialState = {dX: false};
var $justinmimbs$date$Date$month = A2(
	$elm$core$Basics$composeR,
	$justinmimbs$date$Date$toCalendarDate,
	function ($) {
		return $.fk;
	});
var $samhstn$time_format$Time$Format$monthToString = function (month) {
	switch (month) {
		case 0:
			return 'Jan';
		case 1:
			return 'Feb';
		case 2:
			return 'Mar';
		case 3:
			return 'Apr';
		case 4:
			return 'May';
		case 5:
			return 'Jun';
		case 6:
			return 'Jul';
		case 7:
			return 'Aug';
		case 8:
			return 'Sep';
		case 9:
			return 'Oct';
		case 10:
			return 'Nov';
		default:
			return 'Dec';
	}
};
var $author$project$Main$monthList = A2(
	$elm$core$List$map,
	function (month) {
		return _Utils_Tuple2(
			month,
			$samhstn$time_format$Time$Format$monthToString(month));
	},
	_List_fromArray(
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
var $author$project$BasicValues$Bisexual = 1;
var $author$project$BasicValues$Heterosexual = 2;
var $author$project$BasicValues$Homosexual = 0;
var $author$project$BasicValues$orientationList = _List_fromArray(
	[
		_Utils_Tuple2(0, 'homosexual'),
		_Utils_Tuple2(1, 'bisexual'),
		_Utils_Tuple2(2, 'heterosexual')
	]);
var $elm$json$Json$Decode$bool = _Json_decodeBool;
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $author$project$BasicValues$AWhileAgo = function (a) {
	return {$: 1, a: a};
};
var $author$project$BasicValues$Now = {$: 0};
var $author$project$BasicValues$lastLogDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (str) {
		if (str === 'Now') {
			return $elm$json$Json$Decode$succeed($author$project$BasicValues$Now);
		} else {
			var date = str;
			return $elm$json$Json$Decode$succeed(
				$author$project$BasicValues$AWhileAgo(date));
		}
	},
	$elm$json$Json$Decode$string);
var $author$project$Main$chatDecoder = A3(
	$webbhuset$elm_json_decode$Json$Decode$Field$require,
	'id',
	$elm$json$Json$Decode$int,
	function (id) {
		return A3(
			$webbhuset$elm_json_decode$Json$Decode$Field$require,
			'pseudo',
			$elm$json$Json$Decode$string,
			function (pseudo) {
				return A3(
					$webbhuset$elm_json_decode$Json$Decode$Field$require,
					'picture',
					$elm$json$Json$Decode$string,
					function (picture) {
						return A3(
							$webbhuset$elm_json_decode$Json$Decode$Field$require,
							'last_log',
							$author$project$BasicValues$lastLogDecoder,
							function (last_log) {
								return A3(
									$webbhuset$elm_json_decode$Json$Decode$Field$require,
									'last_message',
									$elm$json$Json$Decode$string,
									function (last_message) {
										return A3(
											$webbhuset$elm_json_decode$Json$Decode$Field$require,
											'unread',
											$elm$json$Json$Decode$bool,
											function (unread) {
												return $elm$json$Json$Decode$succeed(
													{e8: id, ag: last_log, dY: last_message, fs: picture, fB: pseudo, aO: unread});
											});
									});
							});
					});
			});
	});
var $author$project$Alert$alert = F2(
	function (color, message) {
		return {dE: color, d_: message};
	});
var $author$project$Alert$alertDecoder = A3(
	$webbhuset$elm_json_decode$Json$Decode$Field$require,
	'color',
	$elm$json$Json$Decode$string,
	function (color) {
		return A3(
			$webbhuset$elm_json_decode$Json$Decode$Field$require,
			'message',
			$elm$json$Json$Decode$string,
			function (message) {
				return $elm$json$Json$Decode$succeed(
					A2($author$project$Alert$alert, color, message));
			});
	});
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $elm$json$Json$Decode$maybe = function (decoder) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, decoder),
				$elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing)
			]));
};
var $webbhuset$elm_json_decode$Json$Decode$Field$attempt = F3(
	function (fieldName, valueDecoder, continuation) {
		return A2(
			$elm$json$Json$Decode$andThen,
			continuation,
			$elm$json$Json$Decode$maybe(
				A2($elm$json$Json$Decode$field, fieldName, valueDecoder)));
	});
var $author$project$Alert$dataAlertDecoder = function (dataDecoder) {
	return A3(
		$webbhuset$elm_json_decode$Json$Decode$Field$attempt,
		'data',
		dataDecoder,
		function (data) {
			return A3(
				$webbhuset$elm_json_decode$Json$Decode$Field$attempt,
				'alert',
				$author$project$Alert$alertDecoder,
				function (dAlert) {
					return $elm$json$Json$Decode$succeed(
						{aa: dAlert, eM: data});
				});
		});
};
var $elm$http$Http$BadStatus_ = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $elm$http$Http$BadUrl_ = function (a) {
	return {$: 0, a: a};
};
var $elm$http$Http$GoodStatus_ = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $elm$http$Http$NetworkError_ = {$: 2};
var $elm$http$Http$Receiving = function (a) {
	return {$: 1, a: a};
};
var $elm$http$Http$Sending = function (a) {
	return {$: 0, a: a};
};
var $elm$http$Http$Timeout_ = {$: 1};
var $elm$core$Dict$RBEmpty_elm_builtin = {$: -2};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Maybe$isJust = function (maybe) {
	if (!maybe.$) {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === -2) {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1) {
					case 0:
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 1:
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$Dict$Black = 1;
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: -1, a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = 0;
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === -1) && (!right.a)) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === -1) && (!left.a)) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === -1) && (!left.a)) && (left.d.$ === -1)) && (!left.d.a)) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === -2) {
			return A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1) {
				case 0:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 1:
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === -1) && (dict.d.$ === -1)) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.e.d.$ === -1) && (!dict.e.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				0,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.d.d.$ === -1) && (!dict.d.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				0,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === -1) && (!left.a)) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === -1) && (right.a === 1)) {
					if (right.d.$ === -1) {
						if (right.d.a === 1) {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === -1) && (dict.d.$ === -1)) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor === 1) {
			if ((lLeft.$ === -1) && (!lLeft.a)) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === -1) {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === -2) {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === -1) && (left.a === 1)) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === -1) && (!lLeft.a)) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === -1) {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === -1) {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === -1) {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (!_v0.$) {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $elm$http$Http$emptyBody = _Http_emptyBody;
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
var $elm$http$Http$expectStringResponse = F2(
	function (toMsg, toResult) {
		return A3(
			_Http_expect,
			'',
			$elm$core$Basics$identity,
			A2($elm$core$Basics$composeR, toResult, toMsg));
	});
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (!result.$) {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $elm$http$Http$BadBody = function (a) {
	return {$: 4, a: a};
};
var $elm$http$Http$BadStatus = function (a) {
	return {$: 3, a: a};
};
var $elm$http$Http$BadUrl = function (a) {
	return {$: 0, a: a};
};
var $elm$http$Http$NetworkError = {$: 2};
var $elm$http$Http$Timeout = {$: 1};
var $elm$http$Http$resolve = F2(
	function (toResult, response) {
		switch (response.$) {
			case 0:
				var url = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadUrl(url));
			case 1:
				return $elm$core$Result$Err($elm$http$Http$Timeout);
			case 2:
				return $elm$core$Result$Err($elm$http$Http$NetworkError);
			case 3:
				var metadata = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadStatus(metadata.hR));
			default:
				var body = response.b;
				return A2(
					$elm$core$Result$mapError,
					$elm$http$Http$BadBody,
					toResult(body));
		}
	});
var $elm$http$Http$expectJson = F2(
	function (toMsg, decoder) {
		return A2(
			$elm$http$Http$expectStringResponse,
			toMsg,
			$elm$http$Http$resolve(
				function (string) {
					return A2(
						$elm$core$Result$mapError,
						$elm$json$Json$Decode$errorToString,
						A2($elm$json$Json$Decode$decodeString, decoder, string));
				}));
	});
var $elm$json$Json$Decode$list = _Json_decodeList;
var $elm$http$Http$Request = function (a) {
	return {$: 1, a: a};
};
var $elm$http$Http$State = F2(
	function (reqs, subs) {
		return {fE: reqs, fR: subs};
	});
var $elm$http$Http$init = $elm$core$Task$succeed(
	A2($elm$http$Http$State, $elm$core$Dict$empty, _List_Nil));
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$http$Http$updateReqs = F3(
	function (router, cmds, reqs) {
		updateReqs:
		while (true) {
			if (!cmds.b) {
				return $elm$core$Task$succeed(reqs);
			} else {
				var cmd = cmds.a;
				var otherCmds = cmds.b;
				if (!cmd.$) {
					var tracker = cmd.a;
					var _v2 = A2($elm$core$Dict$get, tracker, reqs);
					if (_v2.$ === 1) {
						var $temp$router = router,
							$temp$cmds = otherCmds,
							$temp$reqs = reqs;
						router = $temp$router;
						cmds = $temp$cmds;
						reqs = $temp$reqs;
						continue updateReqs;
					} else {
						var pid = _v2.a;
						return A2(
							$elm$core$Task$andThen,
							function (_v3) {
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A2($elm$core$Dict$remove, tracker, reqs));
							},
							$elm$core$Process$kill(pid));
					}
				} else {
					var req = cmd.a;
					return A2(
						$elm$core$Task$andThen,
						function (pid) {
							var _v4 = req.f_;
							if (_v4.$ === 1) {
								return A3($elm$http$Http$updateReqs, router, otherCmds, reqs);
							} else {
								var tracker = _v4.a;
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A3($elm$core$Dict$insert, tracker, pid, reqs));
							}
						},
						$elm$core$Process$spawn(
							A3(
								_Http_toTask,
								router,
								$elm$core$Platform$sendToApp(router),
								req)));
				}
			}
		}
	});
var $elm$http$Http$onEffects = F4(
	function (router, cmds, subs, state) {
		return A2(
			$elm$core$Task$andThen,
			function (reqs) {
				return $elm$core$Task$succeed(
					A2($elm$http$Http$State, reqs, subs));
			},
			A3($elm$http$Http$updateReqs, router, cmds, state.fE));
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (!_v0.$) {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$http$Http$maybeSend = F4(
	function (router, desiredTracker, progress, _v0) {
		var actualTracker = _v0.a;
		var toMsg = _v0.b;
		return _Utils_eq(desiredTracker, actualTracker) ? $elm$core$Maybe$Just(
			A2(
				$elm$core$Platform$sendToApp,
				router,
				toMsg(progress))) : $elm$core$Maybe$Nothing;
	});
var $elm$http$Http$onSelfMsg = F3(
	function (router, _v0, state) {
		var tracker = _v0.a;
		var progress = _v0.b;
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$filterMap,
					A3($elm$http$Http$maybeSend, router, tracker, progress),
					state.fR)));
	});
var $elm$http$Http$Cancel = function (a) {
	return {$: 0, a: a};
};
var $elm$http$Http$cmdMap = F2(
	function (func, cmd) {
		if (!cmd.$) {
			var tracker = cmd.a;
			return $elm$http$Http$Cancel(tracker);
		} else {
			var r = cmd.a;
			return $elm$http$Http$Request(
				{
					gm: r.gm,
					eE: r.eE,
					eT: A2(_Http_mapExpect, func, r.eT),
					e1: r.e1,
					hm: r.hm,
					dk: r.dk,
					f_: r.f_,
					f2: r.f2
				});
		}
	});
var $elm$http$Http$MySub = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$http$Http$subMap = F2(
	function (func, _v0) {
		var tracker = _v0.a;
		var toMsg = _v0.b;
		return A2(
			$elm$http$Http$MySub,
			tracker,
			A2($elm$core$Basics$composeR, toMsg, func));
	});
_Platform_effectManagers['Http'] = _Platform_createManager($elm$http$Http$init, $elm$http$Http$onEffects, $elm$http$Http$onSelfMsg, $elm$http$Http$cmdMap, $elm$http$Http$subMap);
var $elm$http$Http$command = _Platform_leaf('Http');
var $elm$http$Http$subscription = _Platform_leaf('Http');
var $elm$http$Http$request = function (r) {
	return $elm$http$Http$command(
		$elm$http$Http$Request(
			{gm: false, eE: r.eE, eT: r.eT, e1: r.e1, hm: r.hm, dk: r.dk, f_: r.f_, f2: r.f2}));
};
var $elm$http$Http$post = function (r) {
	return $elm$http$Http$request(
		{eE: r.eE, eT: r.eT, e1: _List_Nil, hm: 'POST', dk: $elm$core$Maybe$Nothing, f_: $elm$core$Maybe$Nothing, f2: r.f2});
};
var $author$project$Main$requestChats = function (toMsg) {
	return $elm$http$Http$post(
		{
			eE: $elm$http$Http$emptyBody,
			eT: A2(
				$elm$http$Http$expectJson,
				toMsg,
				$author$project$Alert$dataAlertDecoder(
					$elm$json$Json$Decode$list($author$project$Main$chatDecoder))),
			f2: 'http://localhost:8080/control/chat_list.php'
		});
};
var $author$project$Main$GeoAuthGranted = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$parser$Parser$Advanced$Bad = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $elm$parser$Parser$Advanced$Parser = $elm$core$Basics$identity;
var $elm$parser$Parser$Advanced$andThen = F2(
	function (callback, _v0) {
		var parseA = _v0;
		return function (s0) {
			var _v1 = parseA(s0);
			if (_v1.$ === 1) {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p1 = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				var _v2 = callback(a);
				var parseB = _v2;
				var _v3 = parseB(s1);
				if (_v3.$ === 1) {
					var p2 = _v3.a;
					var x = _v3.b;
					return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
				} else {
					var p2 = _v3.a;
					var b = _v3.b;
					var s2 = _v3.c;
					return A3($elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
				}
			}
		};
	});
var $elm$parser$Parser$andThen = $elm$parser$Parser$Advanced$andThen;
var $elm$parser$Parser$UnexpectedChar = {$: 11};
var $elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$DeadEnd = F4(
	function (row, col, problem, contextStack) {
		return {eI: col, gK: contextStack, fw: problem, fI: row};
	});
var $elm$parser$Parser$Advanced$Empty = {$: 0};
var $elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, s.fI, s.eI, x, s.f));
	});
var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var $elm$parser$Parser$Advanced$chompIf = F2(
	function (isGood, expecting) {
		return function (s) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, s.d4, s.b);
			return _Utils_eq(newOffset, -1) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : (_Utils_eq(newOffset, -2) ? A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				0,
				{eI: 1, f: s.f, h: s.h, d4: s.d4 + 1, fI: s.fI + 1, b: s.b}) : A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				0,
				{eI: s.eI + 1, f: s.f, h: s.h, d4: newOffset, fI: s.fI, b: s.b}));
		};
	});
var $elm$parser$Parser$chompIf = function (isGood) {
	return A2($elm$parser$Parser$Advanced$chompIf, isGood, $elm$parser$Parser$UnexpectedChar);
};
var $justinmimbs$date$Date$deadEndToString = function (_v0) {
	var problem = _v0.fw;
	if (problem.$ === 12) {
		var message = problem.a;
		return message;
	} else {
		return 'Expected a date in ISO 8601 format';
	}
};
var $elm$parser$Parser$ExpectingEnd = {$: 10};
var $elm$parser$Parser$Advanced$end = function (x) {
	return function (s) {
		return _Utils_eq(
			$elm$core$String$length(s.b),
			s.d4) ? A3($elm$parser$Parser$Advanced$Good, false, 0, s) : A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, x));
	};
};
var $elm$parser$Parser$end = $elm$parser$Parser$Advanced$end($elm$parser$Parser$ExpectingEnd);
var $elm$parser$Parser$Advanced$map2 = F3(
	function (func, _v0, _v1) {
		var parseA = _v0;
		var parseB = _v1;
		return function (s0) {
			var _v2 = parseA(s0);
			if (_v2.$ === 1) {
				var p = _v2.a;
				var x = _v2.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p1 = _v2.a;
				var a = _v2.b;
				var s1 = _v2.c;
				var _v3 = parseB(s1);
				if (_v3.$ === 1) {
					var p2 = _v3.a;
					var x = _v3.b;
					return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
				} else {
					var p2 = _v3.a;
					var b = _v3.b;
					var s2 = _v3.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p1 || p2,
						A2(func, a, b),
						s2);
				}
			}
		};
	});
var $elm$parser$Parser$Advanced$ignorer = F2(
	function (keepParser, ignoreParser) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$always, keepParser, ignoreParser);
	});
var $elm$parser$Parser$ignorer = $elm$parser$Parser$Advanced$ignorer;
var $elm$parser$Parser$Advanced$keeper = F2(
	function (parseFunc, parseArg) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$apL, parseFunc, parseArg);
	});
var $elm$parser$Parser$keeper = $elm$parser$Parser$Advanced$keeper;
var $elm$parser$Parser$Advanced$map = F2(
	function (func, _v0) {
		var parse = _v0;
		return function (s0) {
			var _v1 = parse(s0);
			if (!_v1.$) {
				var p = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				return A3(
					$elm$parser$Parser$Advanced$Good,
					p,
					func(a),
					s1);
			} else {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			}
		};
	});
var $elm$parser$Parser$map = $elm$parser$Parser$Advanced$map;
var $elm$parser$Parser$Advanced$Append = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$oneOfHelp = F3(
	function (s0, bag, parsers) {
		oneOfHelp:
		while (true) {
			if (!parsers.b) {
				return A2($elm$parser$Parser$Advanced$Bad, false, bag);
			} else {
				var parse = parsers.a;
				var remainingParsers = parsers.b;
				var _v1 = parse(s0);
				if (!_v1.$) {
					var step = _v1;
					return step;
				} else {
					var step = _v1;
					var p = step.a;
					var x = step.b;
					if (p) {
						return step;
					} else {
						var $temp$s0 = s0,
							$temp$bag = A2($elm$parser$Parser$Advanced$Append, bag, x),
							$temp$parsers = remainingParsers;
						s0 = $temp$s0;
						bag = $temp$bag;
						parsers = $temp$parsers;
						continue oneOfHelp;
					}
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$oneOf = function (parsers) {
	return function (s) {
		return A3($elm$parser$Parser$Advanced$oneOfHelp, s, $elm$parser$Parser$Advanced$Empty, parsers);
	};
};
var $elm$parser$Parser$oneOf = $elm$parser$Parser$Advanced$oneOf;
var $justinmimbs$date$Date$MonthAndDay = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $justinmimbs$date$Date$OrdinalDay = function (a) {
	return {$: 2, a: a};
};
var $justinmimbs$date$Date$WeekAndWeekday = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$backtrackable = function (_v0) {
	var parse = _v0;
	return function (s0) {
		var _v1 = parse(s0);
		if (_v1.$ === 1) {
			var x = _v1.b;
			return A2($elm$parser$Parser$Advanced$Bad, false, x);
		} else {
			var a = _v1.b;
			var s1 = _v1.c;
			return A3($elm$parser$Parser$Advanced$Good, false, a, s1);
		}
	};
};
var $elm$parser$Parser$backtrackable = $elm$parser$Parser$Advanced$backtrackable;
var $elm$parser$Parser$Advanced$commit = function (a) {
	return function (s) {
		return A3($elm$parser$Parser$Advanced$Good, true, a, s);
	};
};
var $elm$parser$Parser$commit = $elm$parser$Parser$Advanced$commit;
var $elm$parser$Parser$Advanced$mapChompedString = F2(
	function (func, _v0) {
		var parse = _v0;
		return function (s0) {
			var _v1 = parse(s0);
			if (_v1.$ === 1) {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				return A3(
					$elm$parser$Parser$Advanced$Good,
					p,
					A2(
						func,
						A3($elm$core$String$slice, s0.d4, s1.d4, s0.b),
						a),
					s1);
			}
		};
	});
var $elm$parser$Parser$mapChompedString = $elm$parser$Parser$Advanced$mapChompedString;
var $justinmimbs$date$Date$int1 = A2(
	$elm$parser$Parser$mapChompedString,
	F2(
		function (str, _v0) {
			return A2(
				$elm$core$Maybe$withDefault,
				0,
				$elm$core$String$toInt(str));
		}),
	$elm$parser$Parser$chompIf($elm$core$Char$isDigit));
var $elm$parser$Parser$Advanced$succeed = function (a) {
	return function (s) {
		return A3($elm$parser$Parser$Advanced$Good, false, a, s);
	};
};
var $elm$parser$Parser$succeed = $elm$parser$Parser$Advanced$succeed;
var $justinmimbs$date$Date$int2 = A2(
	$elm$parser$Parser$mapChompedString,
	F2(
		function (str, _v0) {
			return A2(
				$elm$core$Maybe$withDefault,
				0,
				$elm$core$String$toInt(str));
		}),
	A2(
		$elm$parser$Parser$ignorer,
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed(0),
			$elm$parser$Parser$chompIf($elm$core$Char$isDigit)),
		$elm$parser$Parser$chompIf($elm$core$Char$isDigit)));
var $justinmimbs$date$Date$int3 = A2(
	$elm$parser$Parser$mapChompedString,
	F2(
		function (str, _v0) {
			return A2(
				$elm$core$Maybe$withDefault,
				0,
				$elm$core$String$toInt(str));
		}),
	A2(
		$elm$parser$Parser$ignorer,
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed(0),
				$elm$parser$Parser$chompIf($elm$core$Char$isDigit)),
			$elm$parser$Parser$chompIf($elm$core$Char$isDigit)),
		$elm$parser$Parser$chompIf($elm$core$Char$isDigit)));
var $elm$parser$Parser$Expecting = function (a) {
	return {$: 0, a: a};
};
var $elm$parser$Parser$Advanced$Token = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$parser$Parser$toToken = function (str) {
	return A2(
		$elm$parser$Parser$Advanced$Token,
		str,
		$elm$parser$Parser$Expecting(str));
};
var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var $elm$core$Basics$not = _Basics_not;
var $elm$parser$Parser$Advanced$token = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(str);
	return function (s) {
		var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.d4, s.fI, s.eI, s.b);
		var newOffset = _v1.a;
		var newRow = _v1.b;
		var newCol = _v1.c;
		return _Utils_eq(newOffset, -1) ? A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
			$elm$parser$Parser$Advanced$Good,
			progress,
			0,
			{eI: newCol, f: s.f, h: s.h, d4: newOffset, fI: newRow, b: s.b});
	};
};
var $elm$parser$Parser$token = function (str) {
	return $elm$parser$Parser$Advanced$token(
		$elm$parser$Parser$toToken(str));
};
var $justinmimbs$date$Date$dayOfYear = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed($elm$core$Basics$identity),
				$elm$parser$Parser$token('-')),
			$elm$parser$Parser$oneOf(
				_List_fromArray(
					[
						$elm$parser$Parser$backtrackable(
						A2(
							$elm$parser$Parser$andThen,
							$elm$parser$Parser$commit,
							A2($elm$parser$Parser$map, $justinmimbs$date$Date$OrdinalDay, $justinmimbs$date$Date$int3))),
						A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$keeper,
							$elm$parser$Parser$succeed($justinmimbs$date$Date$MonthAndDay),
							$justinmimbs$date$Date$int2),
						$elm$parser$Parser$oneOf(
							_List_fromArray(
								[
									A2(
									$elm$parser$Parser$keeper,
									A2(
										$elm$parser$Parser$ignorer,
										$elm$parser$Parser$succeed($elm$core$Basics$identity),
										$elm$parser$Parser$token('-')),
									$justinmimbs$date$Date$int2),
									$elm$parser$Parser$succeed(1)
								]))),
						A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$keeper,
							A2(
								$elm$parser$Parser$ignorer,
								$elm$parser$Parser$succeed($justinmimbs$date$Date$WeekAndWeekday),
								$elm$parser$Parser$token('W')),
							$justinmimbs$date$Date$int2),
						$elm$parser$Parser$oneOf(
							_List_fromArray(
								[
									A2(
									$elm$parser$Parser$keeper,
									A2(
										$elm$parser$Parser$ignorer,
										$elm$parser$Parser$succeed($elm$core$Basics$identity),
										$elm$parser$Parser$token('-')),
									$justinmimbs$date$Date$int1),
									$elm$parser$Parser$succeed(1)
								])))
					]))),
			$elm$parser$Parser$backtrackable(
			A2(
				$elm$parser$Parser$andThen,
				$elm$parser$Parser$commit,
				A2(
					$elm$parser$Parser$keeper,
					A2(
						$elm$parser$Parser$keeper,
						$elm$parser$Parser$succeed($justinmimbs$date$Date$MonthAndDay),
						$justinmimbs$date$Date$int2),
					$elm$parser$Parser$oneOf(
						_List_fromArray(
							[
								$justinmimbs$date$Date$int2,
								$elm$parser$Parser$succeed(1)
							]))))),
			A2($elm$parser$Parser$map, $justinmimbs$date$Date$OrdinalDay, $justinmimbs$date$Date$int3),
			A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($justinmimbs$date$Date$WeekAndWeekday),
					$elm$parser$Parser$token('W')),
				$justinmimbs$date$Date$int2),
			$elm$parser$Parser$oneOf(
				_List_fromArray(
					[
						$justinmimbs$date$Date$int1,
						$elm$parser$Parser$succeed(1)
					]))),
			$elm$parser$Parser$succeed(
			$justinmimbs$date$Date$OrdinalDay(1))
		]));
var $justinmimbs$date$Date$daysBeforeMonth = F2(
	function (y, m) {
		var leapDays = $justinmimbs$date$Date$isLeapYear(y) ? 1 : 0;
		switch (m) {
			case 0:
				return 0;
			case 1:
				return 31;
			case 2:
				return 59 + leapDays;
			case 3:
				return 90 + leapDays;
			case 4:
				return 120 + leapDays;
			case 5:
				return 151 + leapDays;
			case 6:
				return 181 + leapDays;
			case 7:
				return 212 + leapDays;
			case 8:
				return 243 + leapDays;
			case 9:
				return 273 + leapDays;
			case 10:
				return 304 + leapDays;
			default:
				return 334 + leapDays;
		}
	});
var $justinmimbs$date$Date$isBetweenInt = F3(
	function (a, b, x) {
		return (_Utils_cmp(a, x) < 1) && (_Utils_cmp(x, b) < 1);
	});
var $justinmimbs$date$Date$fromCalendarParts = F3(
	function (y, mn, d) {
		return (A3($justinmimbs$date$Date$isBetweenInt, 1, 12, mn) && A3(
			$justinmimbs$date$Date$isBetweenInt,
			1,
			A2(
				$justinmimbs$date$Date$daysInMonth,
				y,
				$justinmimbs$date$Date$numberToMonth(mn)),
			d)) ? $elm$core$Result$Ok(
			($justinmimbs$date$Date$daysBeforeYear(y) + A2(
				$justinmimbs$date$Date$daysBeforeMonth,
				y,
				$justinmimbs$date$Date$numberToMonth(mn))) + d) : $elm$core$Result$Err(
			'Invalid calendar date (' + ($elm$core$String$fromInt(y) + (', ' + ($elm$core$String$fromInt(mn) + (', ' + ($elm$core$String$fromInt(d) + ')'))))));
	});
var $justinmimbs$date$Date$fromOrdinalParts = F2(
	function (y, od) {
		return (A3($justinmimbs$date$Date$isBetweenInt, 1, 365, od) || ((od === 366) && $justinmimbs$date$Date$isLeapYear(y))) ? $elm$core$Result$Ok(
			$justinmimbs$date$Date$daysBeforeYear(y) + od) : $elm$core$Result$Err(
			'Invalid ordinal date (' + ($elm$core$String$fromInt(y) + (', ' + ($elm$core$String$fromInt(od) + ')'))));
	});
var $justinmimbs$date$Date$weekdayNumber = function (_v0) {
	var rd = _v0;
	var _v1 = A2($elm$core$Basics$modBy, 7, rd);
	if (!_v1) {
		return 7;
	} else {
		var n = _v1;
		return n;
	}
};
var $justinmimbs$date$Date$daysBeforeWeekYear = function (y) {
	var jan4 = $justinmimbs$date$Date$daysBeforeYear(y) + 4;
	return jan4 - $justinmimbs$date$Date$weekdayNumber(jan4);
};
var $justinmimbs$date$Date$firstOfYear = function (y) {
	return $justinmimbs$date$Date$daysBeforeYear(y) + 1;
};
var $justinmimbs$date$Date$is53WeekYear = function (y) {
	var wdnJan1 = $justinmimbs$date$Date$weekdayNumber(
		$justinmimbs$date$Date$firstOfYear(y));
	return (wdnJan1 === 4) || ((wdnJan1 === 3) && $justinmimbs$date$Date$isLeapYear(y));
};
var $justinmimbs$date$Date$fromWeekParts = F3(
	function (wy, wn, wdn) {
		return (A3($justinmimbs$date$Date$isBetweenInt, 1, 7, wdn) && (A3($justinmimbs$date$Date$isBetweenInt, 1, 52, wn) || ((wn === 53) && $justinmimbs$date$Date$is53WeekYear(wy)))) ? $elm$core$Result$Ok(
			($justinmimbs$date$Date$daysBeforeWeekYear(wy) + ((wn - 1) * 7)) + wdn) : $elm$core$Result$Err(
			'Invalid week date (' + ($elm$core$String$fromInt(wy) + (', ' + ($elm$core$String$fromInt(wn) + (', ' + ($elm$core$String$fromInt(wdn) + ')'))))));
	});
var $justinmimbs$date$Date$fromYearAndDayOfYear = function (_v0) {
	var y = _v0.a;
	var doy = _v0.b;
	switch (doy.$) {
		case 0:
			var mn = doy.a;
			var d = doy.b;
			return A3($justinmimbs$date$Date$fromCalendarParts, y, mn, d);
		case 1:
			var wn = doy.a;
			var wdn = doy.b;
			return A3($justinmimbs$date$Date$fromWeekParts, y, wn, wdn);
		default:
			var od = doy.a;
			return A2($justinmimbs$date$Date$fromOrdinalParts, y, od);
	}
};
var $justinmimbs$date$Date$int4 = A2(
	$elm$parser$Parser$mapChompedString,
	F2(
		function (str, _v0) {
			return A2(
				$elm$core$Maybe$withDefault,
				0,
				$elm$core$String$toInt(str));
		}),
	A2(
		$elm$parser$Parser$ignorer,
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					A2(
						$elm$parser$Parser$ignorer,
						$elm$parser$Parser$succeed(0),
						$elm$parser$Parser$oneOf(
							_List_fromArray(
								[
									$elm$parser$Parser$chompIf(
									function (c) {
										return c === '-';
									}),
									$elm$parser$Parser$succeed(0)
								]))),
					$elm$parser$Parser$chompIf($elm$core$Char$isDigit)),
				$elm$parser$Parser$chompIf($elm$core$Char$isDigit)),
			$elm$parser$Parser$chompIf($elm$core$Char$isDigit)),
		$elm$parser$Parser$chompIf($elm$core$Char$isDigit)));
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $elm$parser$Parser$Problem = function (a) {
	return {$: 12, a: a};
};
var $elm$parser$Parser$Advanced$problem = function (x) {
	return function (s) {
		return A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, x));
	};
};
var $elm$parser$Parser$problem = function (msg) {
	return $elm$parser$Parser$Advanced$problem(
		$elm$parser$Parser$Problem(msg));
};
var $justinmimbs$date$Date$resultToParser = function (result) {
	if (!result.$) {
		var x = result.a;
		return $elm$parser$Parser$succeed(x);
	} else {
		var message = result.a;
		return $elm$parser$Parser$problem(message);
	}
};
var $justinmimbs$date$Date$parser = A2(
	$elm$parser$Parser$andThen,
	A2($elm$core$Basics$composeR, $justinmimbs$date$Date$fromYearAndDayOfYear, $justinmimbs$date$Date$resultToParser),
	A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed($elm$core$Tuple$pair),
			$justinmimbs$date$Date$int4),
		$justinmimbs$date$Date$dayOfYear));
var $elm$parser$Parser$DeadEnd = F3(
	function (row, col, problem) {
		return {eI: col, fw: problem, fI: row};
	});
var $elm$parser$Parser$problemToDeadEnd = function (p) {
	return A3($elm$parser$Parser$DeadEnd, p.fI, p.eI, p.fw);
};
var $elm$parser$Parser$Advanced$bagToList = F2(
	function (bag, list) {
		bagToList:
		while (true) {
			switch (bag.$) {
				case 0:
					return list;
				case 1:
					var bag1 = bag.a;
					var x = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$core$List$cons, x, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
				default:
					var bag1 = bag.a;
					var bag2 = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$parser$Parser$Advanced$bagToList, bag2, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
			}
		}
	});
var $elm$parser$Parser$Advanced$run = F2(
	function (_v0, src) {
		var parse = _v0;
		var _v1 = parse(
			{eI: 1, f: _List_Nil, h: 1, d4: 0, fI: 1, b: src});
		if (!_v1.$) {
			var value = _v1.b;
			return $elm$core$Result$Ok(value);
		} else {
			var bag = _v1.b;
			return $elm$core$Result$Err(
				A2($elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var $elm$parser$Parser$run = F2(
	function (parser, source) {
		var _v0 = A2($elm$parser$Parser$Advanced$run, parser, source);
		if (!_v0.$) {
			var a = _v0.a;
			return $elm$core$Result$Ok(a);
		} else {
			var problems = _v0.a;
			return $elm$core$Result$Err(
				A2($elm$core$List$map, $elm$parser$Parser$problemToDeadEnd, problems));
		}
	});
var $justinmimbs$date$Date$fromIsoString = A2(
	$elm$core$Basics$composeR,
	$elm$parser$Parser$run(
		A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed($elm$core$Basics$identity),
			A2(
				$elm$parser$Parser$ignorer,
				$justinmimbs$date$Date$parser,
				A2(
					$elm$parser$Parser$andThen,
					$justinmimbs$date$Date$resultToParser,
					$elm$parser$Parser$oneOf(
						_List_fromArray(
							[
								A2($elm$parser$Parser$map, $elm$core$Result$Ok, $elm$parser$Parser$end),
								A2(
								$elm$parser$Parser$map,
								$elm$core$Basics$always(
									$elm$core$Result$Err('Expected a date only, not a date and time')),
								$elm$parser$Parser$chompIf(
									$elm$core$Basics$eq('T'))),
								$elm$parser$Parser$succeed(
								$elm$core$Result$Err('Expected a date only'))
							])))))),
	$elm$core$Result$mapError(
		A2(
			$elm$core$Basics$composeR,
			$elm$core$List$map($justinmimbs$date$Date$deadEndToString),
			$elm$core$String$join('; '))));
var $author$project$BasicValues$genderDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (str) {
		switch (str) {
			case 'Man':
				return $elm$json$Json$Decode$succeed(0);
			case 'Woman':
				return $elm$json$Json$Decode$succeed(1);
			default:
				return $elm$json$Json$Decode$fail('genderDecoder failed : not valid gender');
		}
	},
	$elm$json$Json$Decode$string);
var $author$project$BasicValues$orientationDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (str) {
		switch (str) {
			case 'Homosexual':
				return $elm$json$Json$Decode$succeed(0);
			case 'Bisexual':
				return $elm$json$Json$Decode$succeed(1);
			case 'Heterosexual':
				return $elm$json$Json$Decode$succeed(2);
			default:
				return $elm$json$Json$Decode$fail('orientationDecoder failed : not valid orientation');
		}
	},
	$elm$json$Json$Decode$string);
var $author$project$Main$pictureDecoder = A3(
	$webbhuset$elm_json_decode$Json$Decode$Field$require,
	'id',
	$elm$json$Json$Decode$int,
	function (id) {
		return A3(
			$webbhuset$elm_json_decode$Json$Decode$Field$require,
			'path',
			$elm$json$Json$Decode$string,
			function (path) {
				return $elm$json$Json$Decode$succeed(
					_Utils_Tuple2(id, path));
			});
	});
var $author$project$Main$currentSettingsDecoder = A3(
	$webbhuset$elm_json_decode$Json$Decode$Field$require,
	'pseudo',
	$elm$json$Json$Decode$string,
	function (pseudo) {
		return A3(
			$webbhuset$elm_json_decode$Json$Decode$Field$require,
			'first_name',
			$elm$json$Json$Decode$string,
			function (first_name) {
				return A3(
					$webbhuset$elm_json_decode$Json$Decode$Field$require,
					'last_name',
					$elm$json$Json$Decode$string,
					function (last_name) {
						return A3(
							$webbhuset$elm_json_decode$Json$Decode$Field$require,
							'email',
							$elm$json$Json$Decode$string,
							function (email) {
								return A3(
									$webbhuset$elm_json_decode$Json$Decode$Field$require,
									'gender',
									$author$project$BasicValues$genderDecoder,
									function (gender) {
										return A3(
											$webbhuset$elm_json_decode$Json$Decode$Field$require,
											'orientation',
											$author$project$BasicValues$orientationDecoder,
											function (orientation) {
												return A3(
													$webbhuset$elm_json_decode$Json$Decode$Field$require,
													'biography',
													$elm$json$Json$Decode$string,
													function (biography) {
														return A3(
															$webbhuset$elm_json_decode$Json$Decode$Field$require,
															'birth',
															$elm$json$Json$Decode$string,
															function (birth) {
																return A3(
																	$webbhuset$elm_json_decode$Json$Decode$Field$require,
																	'pictures',
																	$elm$json$Json$Decode$list($author$project$Main$pictureDecoder),
																	function (pictures) {
																		return A3(
																			$webbhuset$elm_json_decode$Json$Decode$Field$require,
																			'popularity_score',
																			$elm$json$Json$Decode$int,
																			function (popularity_score) {
																				return A3(
																					$webbhuset$elm_json_decode$Json$Decode$Field$require,
																					'tags',
																					$elm$json$Json$Decode$list($elm$json$Json$Decode$string),
																					function (tags) {
																						return A3(
																							$webbhuset$elm_json_decode$Json$Decode$Field$require,
																							'geoAuth',
																							$elm$json$Json$Decode$bool,
																							function (geoAuth) {
																								return A3(
																									$webbhuset$elm_json_decode$Json$Decode$Field$require,
																									'longitude',
																									$elm$json$Json$Decode$float,
																									function (longitude) {
																										return A3(
																											$webbhuset$elm_json_decode$Json$Decode$Field$require,
																											'latitude',
																											$elm$json$Json$Decode$float,
																											function (latitude) {
																												var _v0 = $justinmimbs$date$Date$fromIsoString(birth);
																												if (_v0.$ === 1) {
																													var msg = _v0.a;
																													return $elm$json$Json$Decode$fail(msg);
																												} else {
																													var date = _v0.a;
																													return $elm$json$Json$Decode$succeed(
																														{
																															aV: biography,
																															W: date,
																															dL: email,
																															aY: first_name,
																															a_: gender,
																															ct: geoAuth ? A2($author$project$Main$GeoAuthGranted, latitude, longitude) : A2($author$project$Main$GeoAuthRefused, latitude, longitude),
																															a3: last_name,
																															a7: orientation,
																															w: $author$project$ZipList$fromList(pictures),
																															a8: popularity_score,
																															fB: pseudo,
																															fT: tags
																														});
																												}
																											});
																									});
																							});
																					});
																			});
																	});
															});
													});
											});
									});
							});
					});
			});
	});
var $author$project$Main$requestCurrentSettings = function (toMsg) {
	return $elm$http$Http$post(
		{
			eE: $elm$http$Http$emptyBody,
			eT: A2(
				$elm$http$Http$expectJson,
				toMsg,
				$author$project$Alert$dataAlertDecoder($author$project$Main$currentSettingsDecoder)),
			f2: 'http://localhost:8080/control/settings_current.php'
		});
};
var $author$project$Feed$filtersEdgeValuesDecoder = A3(
	$webbhuset$elm_json_decode$Json$Decode$Field$require,
	'ageMin',
	$elm$json$Json$Decode$float,
	function (ageMin) {
		return A3(
			$webbhuset$elm_json_decode$Json$Decode$Field$require,
			'ageMax',
			$elm$json$Json$Decode$float,
			function (ageMax) {
				return A3(
					$webbhuset$elm_json_decode$Json$Decode$Field$require,
					'distanceMax',
					$elm$json$Json$Decode$float,
					function (distanceMax) {
						return A3(
							$webbhuset$elm_json_decode$Json$Decode$Field$require,
							'popularityMin',
							$elm$json$Json$Decode$float,
							function (popularityMin) {
								return A3(
									$webbhuset$elm_json_decode$Json$Decode$Field$require,
									'popularityMax',
									$elm$json$Json$Decode$float,
									function (popularityMax) {
										return $elm$json$Json$Decode$succeed(
											{dw: ageMax, dx: ageMin, dI: distanceMax, eb: popularityMax, ec: popularityMin});
									});
							});
					});
			});
	});
var $author$project$Form$LiveUpdate = {$: 1};
var $author$project$Form$Checkbox = function (a) {
	return {$: 4, a: a};
};
var $author$project$Form$checkboxField = F4(
	function (label, checked, text, myForm) {
		return A2(
			$author$project$Form$add,
			$author$project$Form$Checkbox(
				{j: label, ep: text, c: checked}),
			myForm);
	});
var $author$project$Form$DoubleSlider = function (a) {
	return {$: 2, a: a};
};
var $author$project$Form$DoubleSliderHighMsg = function (a) {
	return {$: 3, a: a};
};
var $author$project$Form$DoubleSliderLowMsg = function (a) {
	return {$: 2, a: a};
};
var $carwow$elm_slider$DoubleSlider$DoubleSlider = $elm$core$Basics$identity;
var $elm$core$String$fromFloat = _String_fromNumber;
var $carwow$elm_slider$DoubleSlider$defaultCurrentRangeFormatter = function (values) {
	return (_Utils_eq(values.hj, values.fi) && _Utils_eq(values.g0, values.fh)) ? '' : A2(
		$elm$core$String$join,
		' ',
		_List_fromArray(
			[
				$elm$core$String$fromFloat(values.hj),
				'-',
				$elm$core$String$fromFloat(values.g0)
			]));
};
var $carwow$elm_slider$RangeSlider$defaultLabelFormatter = function (value) {
	return $elm$core$String$fromFloat(value);
};
var $carwow$elm_slider$RangeSlider$defaultValueFormatter = F2(
	function (value, max) {
		return _Utils_eq(value, max) ? '' : $elm$core$String$fromFloat(value);
	});
var $carwow$elm_slider$DoubleSlider$init = function (attrs) {
	return {
		e: {fh: attrs.fh, dZ: $carwow$elm_slider$RangeSlider$defaultLabelFormatter, fi: attrs.fi, d1: $carwow$elm_slider$RangeSlider$defaultLabelFormatter, fQ: attrs.fQ},
		p: $carwow$elm_slider$DoubleSlider$defaultCurrentRangeFormatter,
		g: {ce: attrs.hs, cr: $carwow$elm_slider$RangeSlider$defaultValueFormatter, c: attrs.g0},
		i: {ce: attrs.hu, cr: $carwow$elm_slider$RangeSlider$defaultValueFormatter, c: attrs.hj},
		n: 1.0
	};
};
var $author$project$Form$defaultDoubleSliderFieldModel = F2(
	function (label, _v0) {
		var min = _v0.a;
		var max = _v0.b;
		return {
			j: label,
			c: $carwow$elm_slider$DoubleSlider$init(
				{g0: max, hj: min, fh: max, fi: min, hs: $author$project$Form$DoubleSliderHighMsg, hu: $author$project$Form$DoubleSliderLowMsg, fQ: 1})
		};
	});
var $author$project$Form$doubleSliderField = F3(
	function (label, _v0, myForm) {
		var min = _v0.a;
		var max = _v0.b;
		return A2(
			$author$project$Form$add,
			$author$project$Form$DoubleSlider(
				A2(
					$author$project$Form$defaultDoubleSliderFieldModel,
					label,
					_Utils_Tuple2(min, max))),
			myForm);
	});
var $author$project$Form$MultiInput = function (a) {
	return {$: 6, a: a};
};
var $author$project$Form$multiInputField = F3(
	function (label, initialItems, myForm) {
		return A2(
			$author$project$Form$add,
			$author$project$Form$MultiInput(
				{
					a2: initialItems,
					j: label,
					bK: label,
					bo: $larribas$elm_multi_input$MultiInput$init(label)
				}),
			myForm);
	});
var $author$project$Feed$profileDecoder = A3(
	$webbhuset$elm_json_decode$Json$Decode$Field$require,
	'id',
	$elm$json$Json$Decode$int,
	function (id) {
		return A3(
			$webbhuset$elm_json_decode$Json$Decode$Field$require,
			'pseudo',
			$elm$json$Json$Decode$string,
			function (pseudo) {
				return A3(
					$webbhuset$elm_json_decode$Json$Decode$Field$require,
					'picture',
					$elm$json$Json$Decode$string,
					function (picture) {
						return A3(
							$webbhuset$elm_json_decode$Json$Decode$Field$require,
							'tags',
							$elm$json$Json$Decode$list($elm$json$Json$Decode$string),
							function (tags) {
								return A3(
									$webbhuset$elm_json_decode$Json$Decode$Field$require,
									'liked',
									$elm$json$Json$Decode$bool,
									function (liked) {
										return $elm$json$Json$Decode$succeed(
											{e8: id, ff: liked, fs: picture, fB: pseudo, fT: tags});
									});
							});
					});
			});
	});
var $author$project$Feed$pageContentDecoder = A3(
	$webbhuset$elm_json_decode$Json$Decode$Field$require,
	'pageAmount',
	$elm$json$Json$Decode$int,
	function (pageAmount) {
		return A3(
			$webbhuset$elm_json_decode$Json$Decode$Field$require,
			'elemAmount',
			$elm$json$Json$Decode$int,
			function (elemAmount) {
				return A3(
					$webbhuset$elm_json_decode$Json$Decode$Field$require,
					'users',
					$elm$json$Json$Decode$list($author$project$Feed$profileDecoder),
					function (users) {
						return $elm$json$Json$Decode$succeed(
							{dK: elemAmount, d8: pageAmount, es: users});
					});
			});
	});
var $author$project$Form$SingleSlider = function (a) {
	return {$: 3, a: a};
};
var $author$project$Form$SingleSliderMsg = function (a) {
	return {$: 4, a: a};
};
var $carwow$elm_slider$SingleSlider$SingleSlider = $elm$core$Basics$identity;
var $carwow$elm_slider$SingleSlider$init = function (attrs) {
	return {
		e: {fh: attrs.fh, dZ: $carwow$elm_slider$RangeSlider$defaultLabelFormatter, fi: attrs.fi, d1: $carwow$elm_slider$RangeSlider$defaultLabelFormatter, fQ: attrs.fQ},
		r: {ce: attrs.hr, cr: $carwow$elm_slider$RangeSlider$defaultValueFormatter, c: attrs.c}
	};
};
var $author$project$Form$defaultSingleSliderFieldModel = F2(
	function (label, _v0) {
		var min = _v0.a;
		var max = _v0.b;
		return {
			j: label,
			c: $carwow$elm_slider$SingleSlider$init(
				{fh: max, fi: min, hr: $author$project$Form$SingleSliderMsg, fQ: 1, c: min})
		};
	});
var $author$project$Form$singleSliderField = F3(
	function (label, _v0, myForm) {
		var min = _v0.a;
		var max = _v0.b;
		return A2(
			$author$project$Form$add,
			$author$project$Form$SingleSlider(
				A2(
					$author$project$Form$defaultSingleSliderFieldModel,
					label,
					_Utils_Tuple2(min, max))),
			myForm);
	});
var $author$project$Feed$filtersFormInit = function (_v0) {
	var ageMin = _v0.dx;
	var ageMax = _v0.dw;
	var distanceMax = _v0.dI;
	var popularityMin = _v0.ec;
	var popularityMax = _v0.eb;
	return A4(
		$author$project$Form$checkboxField,
		'liked',
		false,
		'liked',
		A4(
			$author$project$Form$checkboxField,
			'viewed',
			false,
			'viewed',
			A3(
				$author$project$Form$multiInputField,
				'tags',
				_List_Nil,
				A3(
					$author$project$Form$singleSliderField,
					'distanceMax',
					_Utils_Tuple2(3, distanceMax),
					A3(
						$author$project$Form$doubleSliderField,
						'popularity',
						_Utils_Tuple2(popularityMin, popularityMax),
						A3(
							$author$project$Form$doubleSliderField,
							'age',
							_Utils_Tuple2(ageMin, ageMax),
							A4(
								$author$project$Form$form,
								$author$project$Alert$dataAlertDecoder($author$project$Feed$pageContentDecoder),
								$author$project$Form$LiveUpdate,
								'http://localhost:8080/control/feed_filter.php',
								_List_Nil)))))));
};
var $author$project$Feed$feedOpenDecoder = A3(
	$webbhuset$elm_json_decode$Json$Decode$Field$require,
	'filtersEdgeValues',
	$author$project$Feed$filtersEdgeValuesDecoder,
	function (filtersEdgeValues) {
		return A3(
			$webbhuset$elm_json_decode$Json$Decode$Field$require,
			'pageContent',
			$author$project$Feed$pageContentDecoder,
			function (pageContent) {
				return $elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						$author$project$Feed$filtersFormInit(filtersEdgeValues),
						pageContent));
			});
	});
var $author$project$Feed$requestFeedInit = function (toMsg) {
	return $elm$http$Http$post(
		{
			eE: $elm$http$Http$emptyBody,
			eT: A2(
				$elm$http$Http$expectJson,
				toMsg,
				$author$project$Alert$dataAlertDecoder($author$project$Feed$feedOpenDecoder)),
			f2: 'http://localhost:8080/control/feed_open.php'
		});
};
var $author$project$Main$notifDecoder = A3(
	$webbhuset$elm_json_decode$Json$Decode$Field$require,
	'id',
	$elm$json$Json$Decode$int,
	function (id) {
		return A3(
			$webbhuset$elm_json_decode$Json$Decode$Field$require,
			'content',
			$elm$json$Json$Decode$string,
			function (content) {
				return A3(
					$webbhuset$elm_json_decode$Json$Decode$Field$require,
					'date',
					$elm$json$Json$Decode$string,
					function (date) {
						return A3(
							$webbhuset$elm_json_decode$Json$Decode$Field$require,
							'unread',
							$elm$json$Json$Decode$bool,
							function (unread) {
								return $elm$json$Json$Decode$succeed(
									{aW: content, by: date, e8: id, aO: unread});
							});
					});
			});
	});
var $author$project$Main$requestNotifs = function (myMsg) {
	return $elm$http$Http$post(
		{
			eE: $elm$http$Http$emptyBody,
			eT: A2(
				$elm$http$Http$expectJson,
				myMsg,
				$author$project$Alert$dataAlertDecoder(
					$elm$json$Json$Decode$list($author$project$Main$notifDecoder))),
			f2: 'http://localhost:8080/control/account_notifs.php'
		});
};
var $elm$http$Http$multipartBody = function (parts) {
	return A2(
		_Http_pair,
		'',
		_Http_toFormData(parts));
};
var $elm$http$Http$stringPart = _Http_pair;
var $rundis$elm_bootstrap$Bootstrap$Carousel$Active = 1;
var $rundis$elm_bootstrap$Bootstrap$Carousel$defaultStateOptions = {
	N: 1,
	a$: $elm$core$Maybe$Just(5000),
	bE: true,
	ea: true,
	el: 0,
	ik: true
};
var $rundis$elm_bootstrap$Bootstrap$Carousel$IgnoreHover = 2;
var $rundis$elm_bootstrap$Bootstrap$Carousel$NotAnimating = {$: 2};
var $rundis$elm_bootstrap$Bootstrap$Carousel$NotHovered = 1;
var $rundis$elm_bootstrap$Bootstrap$Carousel$State = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $rundis$elm_bootstrap$Bootstrap$Carousel$initialStateWithOptions = function (options) {
	return A2(
		$rundis$elm_bootstrap$Bootstrap$Carousel$State,
		$rundis$elm_bootstrap$Bootstrap$Carousel$NotAnimating,
		{
			ap: options.el,
			N: options.N,
			bB: options.ea ? 1 : 2,
			a$: A2($elm$core$Maybe$withDefault, 0, options.a$),
			bE: options.bE,
			ej: 2,
			ik: options.ik
		});
};
var $rundis$elm_bootstrap$Bootstrap$Carousel$initialState = $rundis$elm_bootstrap$Bootstrap$Carousel$initialStateWithOptions($rundis$elm_bootstrap$Bootstrap$Carousel$defaultStateOptions);
var $author$project$Main$userDetailsDecoder = A3(
	$webbhuset$elm_json_decode$Json$Decode$Field$require,
	'id',
	$elm$json$Json$Decode$int,
	function (id) {
		return A3(
			$webbhuset$elm_json_decode$Json$Decode$Field$require,
			'pseudo',
			$elm$json$Json$Decode$string,
			function (pseudo) {
				return A3(
					$webbhuset$elm_json_decode$Json$Decode$Field$require,
					'first_name',
					$elm$json$Json$Decode$string,
					function (first_name) {
						return A3(
							$webbhuset$elm_json_decode$Json$Decode$Field$require,
							'last_name',
							$elm$json$Json$Decode$string,
							function (last_name) {
								return A3(
									$webbhuset$elm_json_decode$Json$Decode$Field$require,
									'gender',
									$author$project$BasicValues$genderDecoder,
									function (gender) {
										return A3(
											$webbhuset$elm_json_decode$Json$Decode$Field$require,
											'orientation',
											$author$project$BasicValues$orientationDecoder,
											function (orientation) {
												return A3(
													$webbhuset$elm_json_decode$Json$Decode$Field$require,
													'biography',
													$elm$json$Json$Decode$string,
													function (biography) {
														return A3(
															$webbhuset$elm_json_decode$Json$Decode$Field$require,
															'birth',
															$elm$json$Json$Decode$string,
															function (birth) {
																return A3(
																	$webbhuset$elm_json_decode$Json$Decode$Field$require,
																	'last_log',
																	$author$project$BasicValues$lastLogDecoder,
																	function (last_log) {
																		return A3(
																			$webbhuset$elm_json_decode$Json$Decode$Field$require,
																			'pictures',
																			$elm$json$Json$Decode$list($elm$json$Json$Decode$string),
																			function (pictures) {
																				return A3(
																					$webbhuset$elm_json_decode$Json$Decode$Field$require,
																					'popularity_score',
																					$elm$json$Json$Decode$int,
																					function (popularity_score) {
																						return A3(
																							$webbhuset$elm_json_decode$Json$Decode$Field$require,
																							'tags',
																							$elm$json$Json$Decode$list($elm$json$Json$Decode$string),
																							function (tags) {
																								return A3(
																									$webbhuset$elm_json_decode$Json$Decode$Field$require,
																									'liked',
																									$elm$json$Json$Decode$bool,
																									function (liked) {
																										return $elm$json$Json$Decode$succeed(
																											{aV: biography, W: birth, bu: $rundis$elm_bootstrap$Bootstrap$Carousel$initialState, aY: first_name, a_: gender, e8: id, ag: last_log, a3: last_name, ff: liked, a7: orientation, w: pictures, a8: popularity_score, fB: pseudo, fT: tags});
																									});
																							});
																					});
																			});
																	});
															});
													});
											});
									});
							});
					});
			});
	});
var $author$project$Main$requestUserDetails = F2(
	function (id, toMsg) {
		return $elm$http$Http$post(
			{
				eE: $elm$http$Http$multipartBody(
					_List_fromArray(
						[
							A2(
							$elm$http$Http$stringPart,
							'id',
							$elm$core$String$fromInt(id))
						])),
				eT: A2(
					$elm$http$Http$expectJson,
					toMsg,
					$author$project$Alert$dataAlertDecoder($author$project$Main$userDetailsDecoder)),
				f2: 'http://localhost:8080/control/user_info.php'
			});
	});
var $author$project$Main$yearList = A2(
	$elm$core$List$map,
	function (nr) {
		return _Utils_Tuple2(
			nr,
			$elm$core$String$fromInt(nr));
	},
	A2($elm$core$List$range, 1900, 2020));
var $author$project$Main$loggedAccessInit = F3(
	function (route, pseudo, picture) {
		var date = A2($justinmimbs$date$Date$fromOrdinalDate, 2000, 1);
		return _Utils_Tuple2(
			$author$project$Main$Logged(
				{
					bv: _List_Nil,
					O: $elm$core$Maybe$Nothing,
					eV: _List_Nil,
					gS: 0,
					eW: 0,
					cq: 0,
					gU: $elm$core$Maybe$Nothing,
					dO: {cs: $billstclair$elm_geolocation$PortFunnel$Geolocation$initialState},
					cK: _List_Nil,
					fs: picture,
					w: $elm$core$Maybe$Nothing,
					fB: pseudo,
					bM: '',
					bN: '',
					bO: '',
					ba: '',
					bb: date,
					bc: A2(
						$author$project$ZipList$goToFirst,
						A2(
							$elm$core$Basics$composeR,
							$elm$core$Tuple$first,
							$elm$core$Basics$eq(
								$justinmimbs$date$Date$day(date))),
						$author$project$ZipList$fromList($author$project$Main$dayList)),
					bd: A2(
						$author$project$ZipList$goToFirst,
						A2(
							$elm$core$Basics$composeR,
							$elm$core$Tuple$first,
							$elm$core$Basics$eq(
								$justinmimbs$date$Date$month(date))),
						$author$project$ZipList$fromList($author$project$Main$monthList)),
					be: A2(
						$author$project$ZipList$goToFirst,
						A2(
							$elm$core$Basics$composeR,
							$elm$core$Tuple$first,
							$elm$core$Basics$eq(
								$justinmimbs$date$Date$year(date))),
						$author$project$ZipList$fromList($author$project$Main$yearList)),
					bf: '',
					bg: '',
					bh: $author$project$ZipList$fromList($author$project$BasicValues$genderList),
					x: A2($author$project$Main$GeoAuthRefused, 0, 0),
					bi: '',
					bj: $author$project$ZipList$fromList($author$project$BasicValues$orientationList),
					df: 0,
					bk: '',
					aD: _List_Nil,
					bl: $larribas$elm_multi_input$MultiInput$init('settings-tags'),
					dm: 0,
					T: $krisajenkins$remotedata$RemoteData$NotAsked
				}),
			function () {
				switch (route.$) {
					case 0:
						return $author$project$Feed$requestFeedInit($author$project$Main$ReceiveFeedInit);
					case 3:
						var id = route.a;
						return A2($author$project$Main$requestUserDetails, id, $author$project$Main$ReceiveUserDetails);
					case 4:
						return $author$project$Main$requestNotifs($author$project$Main$ReceiveNotifS);
					case 5:
						return $author$project$Main$requestChats($author$project$Main$ReceiveChats);
					case 9:
						return $author$project$Main$requestCurrentSettings($author$project$Main$ReceiveCurrentSettings);
					default:
						return $elm$core$Platform$Cmd$none;
				}
			}());
	});
var $elm$core$Tuple$mapFirst = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var $author$project$Main$Unknown = {$: 12};
var $elm$url$Url$Parser$State = F5(
	function (visited, unvisited, params, frag, value) {
		return {as: frag, ay: params, al: unvisited, c: value, aP: visited};
	});
var $elm$url$Url$Parser$getFirstMatch = function (states) {
	getFirstMatch:
	while (true) {
		if (!states.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			var state = states.a;
			var rest = states.b;
			var _v1 = state.al;
			if (!_v1.b) {
				return $elm$core$Maybe$Just(state.c);
			} else {
				if ((_v1.a === '') && (!_v1.b.b)) {
					return $elm$core$Maybe$Just(state.c);
				} else {
					var $temp$states = rest;
					states = $temp$states;
					continue getFirstMatch;
				}
			}
		}
	}
};
var $elm$url$Url$Parser$removeFinalEmpty = function (segments) {
	if (!segments.b) {
		return _List_Nil;
	} else {
		if ((segments.a === '') && (!segments.b.b)) {
			return _List_Nil;
		} else {
			var segment = segments.a;
			var rest = segments.b;
			return A2(
				$elm$core$List$cons,
				segment,
				$elm$url$Url$Parser$removeFinalEmpty(rest));
		}
	}
};
var $elm$url$Url$Parser$preparePath = function (path) {
	var _v0 = A2($elm$core$String$split, '/', path);
	if (_v0.b && (_v0.a === '')) {
		var segments = _v0.b;
		return $elm$url$Url$Parser$removeFinalEmpty(segments);
	} else {
		var segments = _v0;
		return $elm$url$Url$Parser$removeFinalEmpty(segments);
	}
};
var $elm$url$Url$Parser$addToParametersHelp = F2(
	function (value, maybeList) {
		if (maybeList.$ === 1) {
			return $elm$core$Maybe$Just(
				_List_fromArray(
					[value]));
		} else {
			var list = maybeList.a;
			return $elm$core$Maybe$Just(
				A2($elm$core$List$cons, value, list));
		}
	});
var $elm$url$Url$percentDecode = _Url_percentDecode;
var $elm$url$Url$Parser$addParam = F2(
	function (segment, dict) {
		var _v0 = A2($elm$core$String$split, '=', segment);
		if ((_v0.b && _v0.b.b) && (!_v0.b.b.b)) {
			var rawKey = _v0.a;
			var _v1 = _v0.b;
			var rawValue = _v1.a;
			var _v2 = $elm$url$Url$percentDecode(rawKey);
			if (_v2.$ === 1) {
				return dict;
			} else {
				var key = _v2.a;
				var _v3 = $elm$url$Url$percentDecode(rawValue);
				if (_v3.$ === 1) {
					return dict;
				} else {
					var value = _v3.a;
					return A3(
						$elm$core$Dict$update,
						key,
						$elm$url$Url$Parser$addToParametersHelp(value),
						dict);
				}
			}
		} else {
			return dict;
		}
	});
var $elm$url$Url$Parser$prepareQuery = function (maybeQuery) {
	if (maybeQuery.$ === 1) {
		return $elm$core$Dict$empty;
	} else {
		var qry = maybeQuery.a;
		return A3(
			$elm$core$List$foldr,
			$elm$url$Url$Parser$addParam,
			$elm$core$Dict$empty,
			A2($elm$core$String$split, '&', qry));
	}
};
var $elm$url$Url$Parser$parse = F2(
	function (_v0, url) {
		var parser = _v0;
		return $elm$url$Url$Parser$getFirstMatch(
			parser(
				A5(
					$elm$url$Url$Parser$State,
					_List_Nil,
					$elm$url$Url$Parser$preparePath(url.fr),
					$elm$url$Url$Parser$prepareQuery(url.fC),
					url.eZ,
					$elm$core$Basics$identity)));
	});
var $author$project$Main$Chats = {$: 5};
var $author$project$Main$Confirm = F2(
	function (a, b) {
		return {$: 8, a: a, b: b};
	});
var $author$project$Main$Home = {$: 0};
var $author$project$Main$Notifs = {$: 4};
var $author$project$Main$Retreive = {$: 6};
var $author$project$Main$RetreiveLink = F2(
	function (a, b) {
		return {$: 7, a: a, b: b};
	});
var $author$project$Main$Settings = {$: 9};
var $author$project$Main$Signin = {$: 1};
var $author$project$Main$Signout = {$: 11};
var $author$project$Main$Signup = {$: 2};
var $author$project$Main$Test = {$: 10};
var $author$project$Main$User = function (a) {
	return {$: 3, a: a};
};
var $elm$url$Url$Parser$Parser = $elm$core$Basics$identity;
var $elm$url$Url$Parser$custom = F2(
	function (tipe, stringToSomething) {
		return function (_v0) {
			var visited = _v0.aP;
			var unvisited = _v0.al;
			var params = _v0.ay;
			var frag = _v0.as;
			var value = _v0.c;
			if (!unvisited.b) {
				return _List_Nil;
			} else {
				var next = unvisited.a;
				var rest = unvisited.b;
				var _v2 = stringToSomething(next);
				if (!_v2.$) {
					var nextValue = _v2.a;
					return _List_fromArray(
						[
							A5(
							$elm$url$Url$Parser$State,
							A2($elm$core$List$cons, next, visited),
							rest,
							params,
							frag,
							value(nextValue))
						]);
				} else {
					return _List_Nil;
				}
			}
		};
	});
var $elm$url$Url$Parser$int = A2($elm$url$Url$Parser$custom, 'NUMBER', $elm$core$String$toInt);
var $elm$url$Url$Parser$mapState = F2(
	function (func, _v0) {
		var visited = _v0.aP;
		var unvisited = _v0.al;
		var params = _v0.ay;
		var frag = _v0.as;
		var value = _v0.c;
		return A5(
			$elm$url$Url$Parser$State,
			visited,
			unvisited,
			params,
			frag,
			func(value));
	});
var $elm$url$Url$Parser$map = F2(
	function (subValue, _v0) {
		var parseArg = _v0;
		return function (_v1) {
			var visited = _v1.aP;
			var unvisited = _v1.al;
			var params = _v1.ay;
			var frag = _v1.as;
			var value = _v1.c;
			return A2(
				$elm$core$List$map,
				$elm$url$Url$Parser$mapState(value),
				parseArg(
					A5($elm$url$Url$Parser$State, visited, unvisited, params, frag, subValue)));
		};
	});
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $elm$url$Url$Parser$oneOf = function (parsers) {
	return function (state) {
		return A2(
			$elm$core$List$concatMap,
			function (_v0) {
				var parser = _v0;
				return parser(state);
			},
			parsers);
	};
};
var $elm$url$Url$Parser$s = function (str) {
	return function (_v0) {
		var visited = _v0.aP;
		var unvisited = _v0.al;
		var params = _v0.ay;
		var frag = _v0.as;
		var value = _v0.c;
		if (!unvisited.b) {
			return _List_Nil;
		} else {
			var next = unvisited.a;
			var rest = unvisited.b;
			return _Utils_eq(next, str) ? _List_fromArray(
				[
					A5(
					$elm$url$Url$Parser$State,
					A2($elm$core$List$cons, next, visited),
					rest,
					params,
					frag,
					value)
				]) : _List_Nil;
		}
	};
};
var $elm$url$Url$Parser$slash = F2(
	function (_v0, _v1) {
		var parseBefore = _v0;
		var parseAfter = _v1;
		return function (state) {
			return A2(
				$elm$core$List$concatMap,
				parseAfter,
				parseBefore(state));
		};
	});
var $elm$url$Url$Parser$top = function (state) {
	return _List_fromArray(
		[state]);
};
var $author$project$Main$routeParser = $elm$url$Url$Parser$oneOf(
	_List_fromArray(
		[
			A2($elm$url$Url$Parser$map, $author$project$Main$Home, $elm$url$Url$Parser$top),
			A2(
			$elm$url$Url$Parser$map,
			$author$project$Main$Signin,
			$elm$url$Url$Parser$s('signin')),
			A2(
			$elm$url$Url$Parser$map,
			$author$project$Main$Signup,
			$elm$url$Url$Parser$s('signup')),
			A2(
			$elm$url$Url$Parser$map,
			$author$project$Main$User,
			A2(
				$elm$url$Url$Parser$slash,
				$elm$url$Url$Parser$s('user'),
				$elm$url$Url$Parser$int)),
			A2(
			$elm$url$Url$Parser$map,
			$author$project$Main$Notifs,
			$elm$url$Url$Parser$s('notifs')),
			A2(
			$elm$url$Url$Parser$map,
			$author$project$Main$Chats,
			$elm$url$Url$Parser$s('chat')),
			A2(
			$elm$url$Url$Parser$map,
			$author$project$Main$Retreive,
			$elm$url$Url$Parser$s('retreive')),
			A2(
			$elm$url$Url$Parser$map,
			$author$project$Main$RetreiveLink,
			A2(
				$elm$url$Url$Parser$slash,
				$elm$url$Url$Parser$s('retreive'),
				A2($elm$url$Url$Parser$slash, $elm$url$Url$Parser$int, $elm$url$Url$Parser$int))),
			A2(
			$elm$url$Url$Parser$map,
			$author$project$Main$Confirm,
			A2(
				$elm$url$Url$Parser$slash,
				$elm$url$Url$Parser$s('confirm'),
				A2($elm$url$Url$Parser$slash, $elm$url$Url$Parser$int, $elm$url$Url$Parser$int))),
			A2(
			$elm$url$Url$Parser$map,
			$author$project$Main$Settings,
			$elm$url$Url$Parser$s('settings')),
			A2(
			$elm$url$Url$Parser$map,
			$author$project$Main$Signout,
			$elm$url$Url$Parser$s('signout')),
			A2(
			$elm$url$Url$Parser$map,
			$author$project$Main$Test,
			$elm$url$Url$Parser$s('test'))
		]));
var $author$project$Main$urlToRoute = function (url) {
	return A2(
		$elm$core$Maybe$withDefault,
		$author$project$Main$Unknown,
		A2($elm$url$Url$Parser$parse, $author$project$Main$routeParser, url));
};
var $author$project$Main$init = F3(
	function (flags, url, key) {
		var route = $author$project$Main$urlToRoute(url);
		var accessCmd = function () {
			if (flags.$ === 1) {
				return $author$project$Main$anonymousAccessInit(route);
			} else {
				var pseudo = flags.a.fB;
				var picture = flags.a.fs;
				return A3($author$project$Main$loggedAccessInit, route, pseudo, picture);
			}
		}();
		return A2(
			$elm$core$Tuple$mapFirst,
			function (access) {
				return {a: access, aa: $elm$core$Maybe$Nothing, I: key, l: route};
			},
			accessCmd);
	});
var $elm$json$Json$Decode$null = _Json_decodeNull;
var $author$project$Main$UrlChange = function (a) {
	return {$: 3, a: a};
};
var $author$project$Main$onUrlChange = function (url) {
	return $author$project$Main$UrlChange(url);
};
var $author$project$Main$ExternalLinkClicked = function (a) {
	return {$: 2, a: a};
};
var $author$project$Main$InternalLinkClicked = function (a) {
	return {$: 1, a: a};
};
var $author$project$Main$onUrlRequest = function (request) {
	if (!request.$) {
		var url = request.a;
		return $author$project$Main$InternalLinkClicked(url);
	} else {
		var href = request.a;
		return $author$project$Main$ExternalLinkClicked(href);
	}
};
var $author$project$Main$InputSettingsTags = function (a) {
	return {$: 35, a: a};
};
var $author$project$Main$ProcessPortFunnelVal = function (a) {
	return {$: 50, a: a};
};
var $author$project$Main$Tick = function (a) {
	return {$: 5, a: a};
};
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $author$project$Main$breakAppartGeoInfo = function (newGInfo) {
	if (!newGInfo.$) {
		var latitude = newGInfo.a;
		var longitude = newGInfo.b;
		return _Utils_Tuple3(true, latitude, longitude);
	} else {
		var latitude = newGInfo.a;
		var longitude = newGInfo.b;
		return _Utils_Tuple3(false, latitude, longitude);
	}
};
var $elm$time$Time$Every = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$time$Time$State = F2(
	function (taggers, processes) {
		return {fz: processes, fS: taggers};
	});
var $elm$time$Time$init = $elm$core$Task$succeed(
	A2($elm$time$Time$State, $elm$core$Dict$empty, $elm$core$Dict$empty));
var $elm$time$Time$addMySub = F2(
	function (_v0, state) {
		var interval = _v0.a;
		var tagger = _v0.b;
		var _v1 = A2($elm$core$Dict$get, interval, state);
		if (_v1.$ === 1) {
			return A3(
				$elm$core$Dict$insert,
				interval,
				_List_fromArray(
					[tagger]),
				state);
		} else {
			var taggers = _v1.a;
			return A3(
				$elm$core$Dict$insert,
				interval,
				A2($elm$core$List$cons, tagger, taggers),
				state);
		}
	});
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === -2) {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _v0) {
				stepState:
				while (true) {
					var list = _v0.a;
					var result = _v0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _v2 = list.a;
						var lKey = _v2.a;
						var lValue = _v2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_v0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_v0 = $temp$_v0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _v3 = A3(
			$elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				$elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _v3.a;
		var intermediateResult = _v3.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v4, result) {
					var k = _v4.a;
					var v = _v4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var $elm$time$Time$Name = function (a) {
	return {$: 0, a: a};
};
var $elm$time$Time$Offset = function (a) {
	return {$: 1, a: a};
};
var $elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$time$Time$customZone = $elm$time$Time$Zone;
var $elm$time$Time$setInterval = _Time_setInterval;
var $elm$time$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		if (!intervals.b) {
			return $elm$core$Task$succeed(processes);
		} else {
			var interval = intervals.a;
			var rest = intervals.b;
			var spawnTimer = $elm$core$Process$spawn(
				A2(
					$elm$time$Time$setInterval,
					interval,
					A2($elm$core$Platform$sendToSelf, router, interval)));
			var spawnRest = function (id) {
				return A3(
					$elm$time$Time$spawnHelp,
					router,
					rest,
					A3($elm$core$Dict$insert, interval, id, processes));
			};
			return A2($elm$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var $elm$time$Time$onEffects = F3(
	function (router, subs, _v0) {
		var processes = _v0.fz;
		var rightStep = F3(
			function (_v6, id, _v7) {
				var spawns = _v7.a;
				var existing = _v7.b;
				var kills = _v7.c;
				return _Utils_Tuple3(
					spawns,
					existing,
					A2(
						$elm$core$Task$andThen,
						function (_v5) {
							return kills;
						},
						$elm$core$Process$kill(id)));
			});
		var newTaggers = A3($elm$core$List$foldl, $elm$time$Time$addMySub, $elm$core$Dict$empty, subs);
		var leftStep = F3(
			function (interval, taggers, _v4) {
				var spawns = _v4.a;
				var existing = _v4.b;
				var kills = _v4.c;
				return _Utils_Tuple3(
					A2($elm$core$List$cons, interval, spawns),
					existing,
					kills);
			});
		var bothStep = F4(
			function (interval, taggers, id, _v3) {
				var spawns = _v3.a;
				var existing = _v3.b;
				var kills = _v3.c;
				return _Utils_Tuple3(
					spawns,
					A3($elm$core$Dict$insert, interval, id, existing),
					kills);
			});
		var _v1 = A6(
			$elm$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			processes,
			_Utils_Tuple3(
				_List_Nil,
				$elm$core$Dict$empty,
				$elm$core$Task$succeed(0)));
		var spawnList = _v1.a;
		var existingDict = _v1.b;
		var killTask = _v1.c;
		return A2(
			$elm$core$Task$andThen,
			function (newProcesses) {
				return $elm$core$Task$succeed(
					A2($elm$time$Time$State, newTaggers, newProcesses));
			},
			A2(
				$elm$core$Task$andThen,
				function (_v2) {
					return A3($elm$time$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var $elm$time$Time$Posix = $elm$core$Basics$identity;
var $elm$time$Time$millisToPosix = $elm$core$Basics$identity;
var $elm$time$Time$now = _Time_now($elm$time$Time$millisToPosix);
var $elm$time$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _v0 = A2($elm$core$Dict$get, interval, state.fS);
		if (_v0.$ === 1) {
			return $elm$core$Task$succeed(state);
		} else {
			var taggers = _v0.a;
			var tellTaggers = function (time) {
				return $elm$core$Task$sequence(
					A2(
						$elm$core$List$map,
						function (tagger) {
							return A2(
								$elm$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						taggers));
			};
			return A2(
				$elm$core$Task$andThen,
				function (_v1) {
					return $elm$core$Task$succeed(state);
				},
				A2($elm$core$Task$andThen, tellTaggers, $elm$time$Time$now));
		}
	});
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$time$Time$subMap = F2(
	function (f, _v0) {
		var interval = _v0.a;
		var tagger = _v0.b;
		return A2(
			$elm$time$Time$Every,
			interval,
			A2($elm$core$Basics$composeL, f, tagger));
	});
_Platform_effectManagers['Time'] = _Platform_createManager($elm$time$Time$init, $elm$time$Time$onEffects, $elm$time$Time$onSelfMsg, 0, $elm$time$Time$subMap);
var $elm$time$Time$subscription = _Platform_leaf('Time');
var $elm$time$Time$every = F2(
	function (interval, tagger) {
		return $elm$time$Time$subscription(
			A2($elm$time$Time$Every, interval, tagger));
	});
var $elm$core$Platform$Sub$map = _Platform_map;
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $author$project$Main$subPort = _Platform_incomingPort('subPort', $elm$json$Json$Decode$value);
var $larribas$elm_multi_input$MultiInput$FocusElement = {$: 0};
var $elm$browser$Browser$AnimationManager$Time = function (a) {
	return {$: 0, a: a};
};
var $elm$browser$Browser$AnimationManager$State = F3(
	function (subs, request, oldTime) {
		return {d6: oldTime, fF: request, fR: subs};
	});
var $elm$browser$Browser$AnimationManager$init = $elm$core$Task$succeed(
	A3($elm$browser$Browser$AnimationManager$State, _List_Nil, $elm$core$Maybe$Nothing, 0));
var $elm$browser$Browser$AnimationManager$now = _Browser_now(0);
var $elm$browser$Browser$AnimationManager$rAF = _Browser_rAF(0);
var $elm$browser$Browser$AnimationManager$onEffects = F3(
	function (router, subs, _v0) {
		var request = _v0.fF;
		var oldTime = _v0.d6;
		var _v1 = _Utils_Tuple2(request, subs);
		if (_v1.a.$ === 1) {
			if (!_v1.b.b) {
				var _v2 = _v1.a;
				return $elm$browser$Browser$AnimationManager$init;
			} else {
				var _v4 = _v1.a;
				return A2(
					$elm$core$Task$andThen,
					function (pid) {
						return A2(
							$elm$core$Task$andThen,
							function (time) {
								return $elm$core$Task$succeed(
									A3(
										$elm$browser$Browser$AnimationManager$State,
										subs,
										$elm$core$Maybe$Just(pid),
										time));
							},
							$elm$browser$Browser$AnimationManager$now);
					},
					$elm$core$Process$spawn(
						A2(
							$elm$core$Task$andThen,
							$elm$core$Platform$sendToSelf(router),
							$elm$browser$Browser$AnimationManager$rAF)));
			}
		} else {
			if (!_v1.b.b) {
				var pid = _v1.a.a;
				return A2(
					$elm$core$Task$andThen,
					function (_v3) {
						return $elm$browser$Browser$AnimationManager$init;
					},
					$elm$core$Process$kill(pid));
			} else {
				return $elm$core$Task$succeed(
					A3($elm$browser$Browser$AnimationManager$State, subs, request, oldTime));
			}
		}
	});
var $elm$browser$Browser$AnimationManager$onSelfMsg = F3(
	function (router, newTime, _v0) {
		var subs = _v0.fR;
		var oldTime = _v0.d6;
		var send = function (sub) {
			if (!sub.$) {
				var tagger = sub.a;
				return A2(
					$elm$core$Platform$sendToApp,
					router,
					tagger(
						$elm$time$Time$millisToPosix(newTime)));
			} else {
				var tagger = sub.a;
				return A2(
					$elm$core$Platform$sendToApp,
					router,
					tagger(newTime - oldTime));
			}
		};
		return A2(
			$elm$core$Task$andThen,
			function (pid) {
				return A2(
					$elm$core$Task$andThen,
					function (_v1) {
						return $elm$core$Task$succeed(
							A3(
								$elm$browser$Browser$AnimationManager$State,
								subs,
								$elm$core$Maybe$Just(pid),
								newTime));
					},
					$elm$core$Task$sequence(
						A2($elm$core$List$map, send, subs)));
			},
			$elm$core$Process$spawn(
				A2(
					$elm$core$Task$andThen,
					$elm$core$Platform$sendToSelf(router),
					$elm$browser$Browser$AnimationManager$rAF)));
	});
var $elm$browser$Browser$AnimationManager$Delta = function (a) {
	return {$: 1, a: a};
};
var $elm$browser$Browser$AnimationManager$subMap = F2(
	function (func, sub) {
		if (!sub.$) {
			var tagger = sub.a;
			return $elm$browser$Browser$AnimationManager$Time(
				A2($elm$core$Basics$composeL, func, tagger));
		} else {
			var tagger = sub.a;
			return $elm$browser$Browser$AnimationManager$Delta(
				A2($elm$core$Basics$composeL, func, tagger));
		}
	});
_Platform_effectManagers['Browser.AnimationManager'] = _Platform_createManager($elm$browser$Browser$AnimationManager$init, $elm$browser$Browser$AnimationManager$onEffects, $elm$browser$Browser$AnimationManager$onSelfMsg, 0, $elm$browser$Browser$AnimationManager$subMap);
var $elm$browser$Browser$AnimationManager$subscription = _Platform_leaf('Browser.AnimationManager');
var $elm$browser$Browser$AnimationManager$onAnimationFrame = function (tagger) {
	return $elm$browser$Browser$AnimationManager$subscription(
		$elm$browser$Browser$AnimationManager$Time(tagger));
};
var $elm$browser$Browser$Events$onAnimationFrame = $elm$browser$Browser$AnimationManager$onAnimationFrame;
var $larribas$elm_multi_input$MultiInput$subscriptions = function (state) {
	return state.ah ? $elm$browser$Browser$Events$onAnimationFrame(
		$elm$core$Basics$always($larribas$elm_multi_input$MultiInput$FocusElement)) : $elm$core$Platform$Sub$none;
};
var $author$project$Main$subscriptions = function (model) {
	var _v0 = model.a;
	if (_v0.$ === 1) {
		var amodel = _v0.a;
		return $elm$core$Platform$Sub$none;
	} else {
		var lmodel = _v0.a;
		var _v1 = $author$project$Main$breakAppartGeoInfo(lmodel.x);
		var geoAuth = _v1.a;
		return $elm$core$Platform$Sub$batch(
			_List_fromArray(
				[
					A2($elm$time$Time$every, 3000, $author$project$Main$Tick),
					A2(
					$elm$core$Platform$Sub$map,
					$author$project$Main$InputSettingsTags,
					$larribas$elm_multi_input$MultiInput$subscriptions(lmodel.bl)),
					geoAuth ? $author$project$Main$subPort($author$project$Main$ProcessPortFunnelVal) : $elm$core$Platform$Sub$none
				]));
	}
};
var $author$project$Main$AccountConfirmationForm = function (a) {
	return {$: 70, a: a};
};
var $author$project$Main$AccountRetrievalForm = function (a) {
	return {$: 69, a: a};
};
var $krisajenkins$remotedata$RemoteData$Failure = function (a) {
	return {$: 2, a: a};
};
var $author$project$Main$FiltersForm = function (a) {
	return {$: 52, a: a};
};
var $author$project$Main$ReceiveDiscution = function (a) {
	return {$: 66, a: a};
};
var $author$project$Main$ReceiveDiscutionRefresh = function (a) {
	return {$: 67, a: a};
};
var $author$project$Main$ReceiveLikeUpdate = function (a) {
	return {$: 56, a: a};
};
var $author$project$Main$ReceivePageContentUpdate = function (a) {
	return {$: 54, a: a};
};
var $author$project$Main$ReceivePicturesUpdate = function (a) {
	return {$: 48, a: a};
};
var $author$project$Main$ReplacePicture = function (a) {
	return {$: 47, a: a};
};
var $author$project$Main$SendMessageForm = function (a) {
	return {$: 68, a: a};
};
var $krisajenkins$remotedata$RemoteData$Success = function (a) {
	return {$: 3, a: a};
};
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(0),
			pairs));
};
var $elm$json$Json$Encode$string = _Json_wrap;
var $billstclair$elm_port_funnel$PortFunnel$encodeGenericMessage = function (message) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'module',
				$elm$json$Json$Encode$string(message.a4)),
				_Utils_Tuple2(
				'tag',
				$elm$json$Json$Encode$string(message.hY)),
				_Utils_Tuple2('args', message.gp)
			]));
};
var $billstclair$elm_port_funnel$PortFunnel$process = F4(
	function (accessors, _v0, genericMessage, state) {
		var moduleDesc = _v0;
		var _v1 = moduleDesc.dH(genericMessage);
		if (_v1.$ === 1) {
			var err = _v1.a;
			return $elm$core$Result$Err(err);
		} else {
			var message = _v1.a;
			var substate = accessors.e$(state);
			var _v2 = A2(moduleDesc.fy, message, substate);
			var substate2 = _v2.a;
			var response = _v2.b;
			return $elm$core$Result$Ok(
				_Utils_Tuple2(
					A2(accessors.fN, substate2, state),
					response));
		}
	});
var $Janiczek$cmd_extra$Cmd$Extra$withCmds = F2(
	function (cmds, model) {
		return _Utils_Tuple2(
			model,
			$elm$core$Platform$Cmd$batch(cmds));
	});
var $billstclair$elm_port_funnel$PortFunnel$appProcess = F5(
	function (cmdPort, genericMessage, funnel, state, model) {
		var _v0 = A4($billstclair$elm_port_funnel$PortFunnel$process, funnel.ey, funnel.fj, genericMessage, state);
		if (_v0.$ === 1) {
			var error = _v0.a;
			return $elm$core$Result$Err(error);
		} else {
			var _v1 = _v0.a;
			var state2 = _v1.a;
			var response = _v1.b;
			var gmToCmdPort = function (gm) {
				return cmdPort(
					$billstclair$elm_port_funnel$PortFunnel$encodeGenericMessage(gm));
			};
			var cmd = A2(funnel.eK, gmToCmdPort, response);
			var _v2 = A3(funnel.e0, response, state2, model);
			var model2 = _v2.a;
			var cmd2 = _v2.b;
			return $elm$core$Result$Ok(
				A2(
					$Janiczek$cmd_extra$Cmd$Extra$withCmds,
					_List_fromArray(
						[cmd, cmd2]),
					model2));
		}
	});
var $author$project$Main$cmdPort = _Platform_outgoingPort('cmdPort', $elm$core$Basics$identity);
var $author$project$Main$appTrampoline = F4(
	function (genericMessage, funnel, state, model) {
		var geolocationFunnel = funnel;
		return A5($billstclair$elm_port_funnel$PortFunnel$appProcess, $author$project$Main$cmdPort, genericMessage, geolocationFunnel, state, model);
	});
var $author$project$Alert$invalidImputAlert = function (serverMessage) {
	return A2($author$project$Alert$alert, 'DarkRed', serverMessage);
};
var $elm$core$Platform$Cmd$map = _Platform_map;
var $elm$browser$Browser$Navigation$pushUrl = _Browser_pushUrl;
var $author$project$Alert$put = F2(
	function (maybeNewAlert, model) {
		if (!maybeNewAlert.$) {
			var newAlert = maybeNewAlert.a;
			return _Utils_update(
				model,
				{
					aa: $elm$core$Maybe$Just(newAlert)
				});
		} else {
			return model;
		}
	});
var $author$project$Alert$httpErrorMessage = function (error) {
	switch (error.$) {
		case 0:
			var message = error.a;
			return 'Sory we got truble connecting to our server. The URL seems to be incorect: ' + message;
		case 1:
			return 'Sory we got truble connecting to our server. The server do not respond.';
		case 2:
			return 'Sory we got truble connecting to our server. Please make sure your internet connection is working.';
		case 3:
			var status = error.a;
			return 'Sory we got truble connecting to our server. Something happened to our server: Status code ' + $elm$core$String$fromInt(status);
		default:
			var message = error.a;
			return 'Sory we got truble connecting to our server. The body of the request is invalid: ' + message;
	}
};
var $author$project$Alert$serverNotReachedAlert = function (error) {
	return A2(
		$author$project$Alert$alert,
		'DarkOrange',
		$author$project$Alert$httpErrorMessage(error));
};
var $author$project$Alert$successAlert = function (serverMessage) {
	return A2($author$project$Alert$alert, 'DarkGreen', serverMessage);
};
var $author$project$Main$confirmAccountResultHandler = F3(
	function (result, model, cmd) {
		if (!result.$) {
			if (!result.a.$) {
				var message = result.a.a;
				return _Utils_Tuple2(
					A2(
						A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
						$author$project$Alert$successAlert(message),
						model),
					$elm$core$Platform$Cmd$batch(
						_List_fromArray(
							[
								A2($elm$core$Platform$Cmd$map, $author$project$Main$AccountConfirmationForm, cmd),
								A2($elm$browser$Browser$Navigation$pushUrl, model.I, '/signin')
							])));
			} else {
				var message = result.a.a;
				return _Utils_Tuple2(
					A2(
						A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
						$author$project$Alert$invalidImputAlert(message),
						model),
					A2($elm$core$Platform$Cmd$map, $author$project$Main$AccountConfirmationForm, cmd));
			}
		} else {
			var error = result.a;
			return _Utils_Tuple2(
				A2(
					A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
					$author$project$Alert$serverNotReachedAlert(error),
					model),
				A2($elm$core$Platform$Cmd$map, $author$project$Main$AccountConfirmationForm, cmd));
		}
	});
var $elm$file$File$Select$file = F2(
	function (mimes, toMsg) {
		return A2(
			$elm$core$Task$perform,
			toMsg,
			_File_uploadOne(mimes));
	});
var $justinmimbs$date$Date$fromCalendarDate = F3(
	function (y, m, d) {
		return ($justinmimbs$date$Date$daysBeforeYear(y) + A2($justinmimbs$date$Date$daysBeforeMonth, y, m)) + A3(
			$elm$core$Basics$clamp,
			1,
			A2($justinmimbs$date$Date$daysInMonth, y, m),
			d);
	});
var $billstclair$elm_port_funnel$PortFunnel$FunnelSpec = F4(
	function (accessors, moduleDesc, commander, handler) {
		return {ey: accessors, eK: commander, e0: handler, fj: moduleDesc};
	});
var $author$project$Main$GeolocationFunnel = $elm$core$Basics$identity;
var $billstclair$elm_geolocation$PortFunnel$Geolocation$commander = F2(
	function (_v0, _v1) {
		return $elm$core$Platform$Cmd$none;
	});
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $billstclair$elm_port_funnel$PortFunnel$StateAccessors = F2(
	function (get, set) {
		return {e$: get, fN: set};
	});
var $author$project$Main$geolocationAccessors = A2(
	$billstclair$elm_port_funnel$PortFunnel$StateAccessors,
	function ($) {
		return $.cs;
	},
	F2(
		function (substate, state) {
			return _Utils_update(
				state,
				{cs: substate});
		}));
var $billstclair$elm_geolocation$PortFunnel$Geolocation$errorToString = function (error) {
	switch (error.$) {
		case 0:
			var string = error.a;
			return 'PermissionDenied \"' + (string + '\"');
		case 1:
			var string = error.a;
			return 'LocationUnavailable \"' + (string + '\"');
		default:
			var string = error.a;
			return 'Timeout \"' + (string + '\"');
	}
};
var $Janiczek$cmd_extra$Cmd$Extra$withNoCmd = function (model) {
	return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
};
var $author$project$Main$geolocationHandler = F3(
	function (response, state, model) {
		var _v0 = _Utils_Tuple2(response, model.a);
		_v0$2:
		while (true) {
			switch (_v0.a.$) {
				case 0:
					if (!_v0.b.$) {
						var location = _v0.a.a;
						var lmodel = _v0.b.a;
						var _v1 = $author$project$Main$breakAppartGeoInfo(lmodel.x);
						var geoAuth = _v1.a;
						return (!geoAuth) ? $Janiczek$cmd_extra$Cmd$Extra$withNoCmd(model) : $Janiczek$cmd_extra$Cmd$Extra$withNoCmd(
							_Utils_update(
								model,
								{
									a: $author$project$Main$Logged(
										_Utils_update(
											lmodel,
											{
												x: A2($author$project$Main$GeoAuthGranted, location.hh, location.hi)
											}))
								}));
					} else {
						break _v0$2;
					}
				case 1:
					var error = _v0.a.a;
					return $Janiczek$cmd_extra$Cmd$Extra$withNoCmd(
						A2(
							A2(
								$elm$core$Basics$composeL,
								A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
								$author$project$Alert$invalidImputAlert),
							$billstclair$elm_geolocation$PortFunnel$Geolocation$errorToString(error),
							model));
				default:
					break _v0$2;
			}
		}
		return $Janiczek$cmd_extra$Cmd$Extra$withNoCmd(model);
	});
var $billstclair$elm_geolocation$PortFunnel$Geolocation$SendChanges = {$: 2};
var $billstclair$elm_geolocation$PortFunnel$Geolocation$Startup = {$: 0};
var $billstclair$elm_geolocation$PortFunnel$Geolocation$StopChanges = {$: 3};
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $billstclair$elm_geolocation$PortFunnel$Geolocation$decodeValue = F2(
	function (decoder, value) {
		var _v0 = A2($elm$json$Json$Decode$decodeValue, decoder, value);
		if (_v0.$ === 1) {
			var error = _v0.a;
			return $elm$core$Result$Err(
				$elm$json$Json$Decode$errorToString(error));
		} else {
			var a = _v0.a;
			return $elm$core$Result$Ok(a);
		}
	});
var $billstclair$elm_geolocation$PortFunnel$Geolocation$GetLocation = function (a) {
	return {$: 1, a: a};
};
var $billstclair$elm_geolocation$PortFunnel$Geolocation$Options = F3(
	function (enableHighAccuracy, timeout, maximumAge) {
		return {cp: enableHighAccuracy, cG: maximumAge, dk: timeout};
	});
var $elm$json$Json$Decode$map3 = _Json_map3;
var $elm$json$Json$Decode$nullable = function (decoder) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
				A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, decoder)
			]));
};
var $billstclair$elm_geolocation$PortFunnel$Geolocation$optionsDecoder = A4(
	$elm$json$Json$Decode$map3,
	$billstclair$elm_geolocation$PortFunnel$Geolocation$Options,
	A2($elm$json$Json$Decode$field, 'enableHighAccuracy', $elm$json$Json$Decode$bool),
	A2(
		$elm$json$Json$Decode$field,
		'timeout',
		$elm$json$Json$Decode$nullable($elm$json$Json$Decode$int)),
	A2(
		$elm$json$Json$Decode$field,
		'maximumAge',
		$elm$json$Json$Decode$nullable($elm$json$Json$Decode$int)));
var $billstclair$elm_geolocation$PortFunnel$Geolocation$getLocationDecoder = A2($elm$json$Json$Decode$map, $billstclair$elm_geolocation$PortFunnel$Geolocation$GetLocation, $billstclair$elm_geolocation$PortFunnel$Geolocation$optionsDecoder);
var $billstclair$elm_geolocation$PortFunnel$Geolocation$ReturnedError = function (a) {
	return {$: 5, a: a};
};
var $billstclair$elm_geolocation$PortFunnel$Geolocation$LocationUnavailable = function (a) {
	return {$: 1, a: a};
};
var $billstclair$elm_geolocation$PortFunnel$Geolocation$PermissionDenied = function (a) {
	return {$: 0, a: a};
};
var $billstclair$elm_geolocation$PortFunnel$Geolocation$Timeout = function (a) {
	return {$: 2, a: a};
};
var $billstclair$elm_geolocation$PortFunnel$Geolocation$errorDecoder = $elm$json$Json$Decode$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$json$Json$Decode$map,
			$billstclair$elm_geolocation$PortFunnel$Geolocation$PermissionDenied,
			A2($elm$json$Json$Decode$field, 'PermissionDenied', $elm$json$Json$Decode$string)),
			A2(
			$elm$json$Json$Decode$map,
			$billstclair$elm_geolocation$PortFunnel$Geolocation$LocationUnavailable,
			A2($elm$json$Json$Decode$field, 'LocationUnavailable', $elm$json$Json$Decode$string)),
			A2(
			$elm$json$Json$Decode$map,
			$billstclair$elm_geolocation$PortFunnel$Geolocation$Timeout,
			A2($elm$json$Json$Decode$field, 'Timeout', $elm$json$Json$Decode$string))
		]));
var $billstclair$elm_geolocation$PortFunnel$Geolocation$returnedErrorDecoder = A2($elm$json$Json$Decode$map, $billstclair$elm_geolocation$PortFunnel$Geolocation$ReturnedError, $billstclair$elm_geolocation$PortFunnel$Geolocation$errorDecoder);
var $billstclair$elm_geolocation$PortFunnel$Geolocation$ReturnedLocation = function (a) {
	return {$: 4, a: a};
};
var $billstclair$elm_geolocation$PortFunnel$Geolocation$Location = F6(
	function (latitude, longitude, accuracy, altitude, movement, timestamp) {
		return {br: accuracy, dA: altitude, hh: latitude, hi: longitude, d3: movement, eq: timestamp};
	});
var $billstclair$elm_geolocation$PortFunnel$Geolocation$Altitude = F2(
	function (value, accuracy) {
		return {br: accuracy, c: value};
	});
var $billstclair$elm_geolocation$PortFunnel$Geolocation$altitudeDecoder = A3(
	$elm$json$Json$Decode$map2,
	$billstclair$elm_geolocation$PortFunnel$Geolocation$Altitude,
	A2($elm$json$Json$Decode$field, 'value', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'accuracy', $elm$json$Json$Decode$float));
var $elm$json$Json$Decode$map6 = _Json_map6;
var $billstclair$elm_geolocation$PortFunnel$Geolocation$Moving = function (a) {
	return {$: 1, a: a};
};
var $billstclair$elm_geolocation$PortFunnel$Geolocation$Static = {$: 0};
var $billstclair$elm_geolocation$PortFunnel$Geolocation$movementDecoder = $elm$json$Json$Decode$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$json$Json$Decode$andThen,
			function (s) {
				return (s === 'static') ? $elm$json$Json$Decode$succeed($billstclair$elm_geolocation$PortFunnel$Geolocation$Static) : $elm$json$Json$Decode$fail('String not \"static\"');
			},
			$elm$json$Json$Decode$string),
			A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (speed, degreesFromNorth) {
					return $billstclair$elm_geolocation$PortFunnel$Geolocation$Moving(
						{eO: degreesFromNorth, fP: speed});
				}),
			A2($elm$json$Json$Decode$field, 'speed', $elm$json$Json$Decode$float),
			A2($elm$json$Json$Decode$field, 'degreesFromNorth', $elm$json$Json$Decode$float))
		]));
var $billstclair$elm_geolocation$PortFunnel$Geolocation$locationDecoder = A7(
	$elm$json$Json$Decode$map6,
	$billstclair$elm_geolocation$PortFunnel$Geolocation$Location,
	A2($elm$json$Json$Decode$field, 'latitude', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'longitude', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'accuracy', $elm$json$Json$Decode$float),
	A2(
		$elm$json$Json$Decode$field,
		'altitude',
		$elm$json$Json$Decode$nullable($billstclair$elm_geolocation$PortFunnel$Geolocation$altitudeDecoder)),
	A2(
		$elm$json$Json$Decode$field,
		'movement',
		$elm$json$Json$Decode$nullable($billstclair$elm_geolocation$PortFunnel$Geolocation$movementDecoder)),
	A2(
		$elm$json$Json$Decode$map,
		$elm$time$Time$millisToPosix,
		A2($elm$json$Json$Decode$field, 'timestamp', $elm$json$Json$Decode$int)));
var $billstclair$elm_geolocation$PortFunnel$Geolocation$returnedLocationDecoder = A2($elm$json$Json$Decode$map, $billstclair$elm_geolocation$PortFunnel$Geolocation$ReturnedLocation, $billstclair$elm_geolocation$PortFunnel$Geolocation$locationDecoder);
var $billstclair$elm_geolocation$PortFunnel$Geolocation$decode = function (_v0) {
	var tag = _v0.hY;
	var args = _v0.gp;
	switch (tag) {
		case 'getlocation':
			return A2($billstclair$elm_geolocation$PortFunnel$Geolocation$decodeValue, $billstclair$elm_geolocation$PortFunnel$Geolocation$getLocationDecoder, args);
		case 'sendchanges':
			return $elm$core$Result$Ok($billstclair$elm_geolocation$PortFunnel$Geolocation$SendChanges);
		case 'stopchanges':
			return $elm$core$Result$Ok($billstclair$elm_geolocation$PortFunnel$Geolocation$StopChanges);
		case 'location':
			return A2($billstclair$elm_geolocation$PortFunnel$Geolocation$decodeValue, $billstclair$elm_geolocation$PortFunnel$Geolocation$returnedLocationDecoder, args);
		case 'error':
			return A2($billstclair$elm_geolocation$PortFunnel$Geolocation$decodeValue, $billstclair$elm_geolocation$PortFunnel$Geolocation$returnedErrorDecoder, args);
		case 'startup':
			return $elm$core$Result$Ok($billstclair$elm_geolocation$PortFunnel$Geolocation$Startup);
		default:
			return $elm$core$Result$Err('Unknown Echo tag: ' + tag);
	}
};
var $billstclair$elm_port_funnel$PortFunnel$GenericMessage = F3(
	function (moduleName, tag, args) {
		return {gp: args, a4: moduleName, hY: tag};
	});
var $billstclair$elm_geolocation$PortFunnel$Geolocation$errorEncoder = function (error) {
	switch (error.$) {
		case 0:
			var string = error.a;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'PermissionDenied',
						$elm$json$Json$Encode$string(string))
					]));
		case 1:
			var string = error.a;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'LocationUnavailable',
						$elm$json$Json$Encode$string(string))
					]));
		default:
			var string = error.a;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'Timeout',
						$elm$json$Json$Encode$string(string))
					]));
	}
};
var $elm$json$Json$Encode$float = _Json_wrap;
var $billstclair$elm_geolocation$PortFunnel$Geolocation$altitudeEncoder = function (altitude) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'value',
				$elm$json$Json$Encode$float(altitude.c)),
				_Utils_Tuple2(
				'accuracy',
				$elm$json$Json$Encode$float(altitude.br))
			]));
};
var $elm$json$Json$Encode$int = _Json_wrap;
var $billstclair$elm_geolocation$PortFunnel$Geolocation$movementEncoder = function (movement) {
	if (!movement.$) {
		return $elm$json$Json$Encode$string('static');
	} else {
		var speed = movement.a.fP;
		var degreesFromNorth = movement.a.eO;
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'speed',
					$elm$json$Json$Encode$float(speed)),
					_Utils_Tuple2(
					'degreesFromNorth',
					$elm$json$Json$Encode$float(degreesFromNorth))
				]));
	}
};
var $elm$json$Json$Encode$null = _Json_encodeNull;
var $elm$time$Time$posixToMillis = function (_v0) {
	var millis = _v0;
	return millis;
};
var $billstclair$elm_geolocation$PortFunnel$Geolocation$locationEncoder = function (location) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'latitude',
				$elm$json$Json$Encode$float(location.hh)),
				_Utils_Tuple2(
				'longitude',
				$elm$json$Json$Encode$float(location.hi)),
				_Utils_Tuple2(
				'accuracy',
				$elm$json$Json$Encode$float(location.br)),
				_Utils_Tuple2(
				'altitude',
				function () {
					var _v0 = location.dA;
					if (_v0.$ === 1) {
						return $elm$json$Json$Encode$null;
					} else {
						var alt = _v0.a;
						return $billstclair$elm_geolocation$PortFunnel$Geolocation$altitudeEncoder(alt);
					}
				}()),
				_Utils_Tuple2(
				'movement',
				function () {
					var _v1 = location.d3;
					if (_v1.$ === 1) {
						return $elm$json$Json$Encode$null;
					} else {
						var move = _v1.a;
						return $billstclair$elm_geolocation$PortFunnel$Geolocation$movementEncoder(move);
					}
				}()),
				_Utils_Tuple2(
				'timestamp',
				$elm$json$Json$Encode$int(
					$elm$time$Time$posixToMillis(location.eq)))
			]));
};
var $billstclair$elm_geolocation$PortFunnel$Geolocation$moduleName = 'Geolocation';
var $elm$json$Json$Encode$bool = _Json_wrap;
var $billstclair$elm_geolocation$PortFunnel$Geolocation$optionsEncoder = function (options) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'enableHighAccuracy',
				$elm$json$Json$Encode$bool(options.cp)),
				_Utils_Tuple2(
				'timeout',
				function () {
					var _v0 = options.dk;
					if (_v0.$ === 1) {
						return $elm$json$Json$Encode$null;
					} else {
						var to = _v0.a;
						return $elm$json$Json$Encode$int(to);
					}
				}()),
				_Utils_Tuple2(
				'maximumAge',
				function () {
					var _v1 = options.cG;
					if (_v1.$ === 1) {
						return $elm$json$Json$Encode$null;
					} else {
						var age = _v1.a;
						return $elm$json$Json$Encode$int(age);
					}
				}())
			]));
};
var $billstclair$elm_geolocation$PortFunnel$Geolocation$encode = function (message) {
	switch (message.$) {
		case 1:
			var options = message.a;
			return A3(
				$billstclair$elm_port_funnel$PortFunnel$GenericMessage,
				$billstclair$elm_geolocation$PortFunnel$Geolocation$moduleName,
				'getlocation',
				$billstclair$elm_geolocation$PortFunnel$Geolocation$optionsEncoder(options));
		case 2:
			return A3($billstclair$elm_port_funnel$PortFunnel$GenericMessage, $billstclair$elm_geolocation$PortFunnel$Geolocation$moduleName, 'sendchanges', $elm$json$Json$Encode$null);
		case 3:
			return A3($billstclair$elm_port_funnel$PortFunnel$GenericMessage, $billstclair$elm_geolocation$PortFunnel$Geolocation$moduleName, 'stopchanges', $elm$json$Json$Encode$null);
		case 4:
			var location = message.a;
			return A3(
				$billstclair$elm_port_funnel$PortFunnel$GenericMessage,
				$billstclair$elm_geolocation$PortFunnel$Geolocation$moduleName,
				'location',
				$billstclair$elm_geolocation$PortFunnel$Geolocation$locationEncoder(location));
		case 5:
			var error = message.a;
			return A3(
				$billstclair$elm_port_funnel$PortFunnel$GenericMessage,
				$billstclair$elm_geolocation$PortFunnel$Geolocation$moduleName,
				'error',
				$billstclair$elm_geolocation$PortFunnel$Geolocation$errorEncoder(error));
		default:
			return A3($billstclair$elm_port_funnel$PortFunnel$GenericMessage, $billstclair$elm_geolocation$PortFunnel$Geolocation$moduleName, 'startup', $elm$json$Json$Encode$null);
	}
};
var $billstclair$elm_port_funnel$PortFunnel$ModuleDesc = $elm$core$Basics$identity;
var $billstclair$elm_port_funnel$PortFunnel$ModuleDescRecord = F4(
	function (moduleName, encoder, decoder, process) {
		return {dH: decoder, dM: encoder, a4: moduleName, fy: process};
	});
var $billstclair$elm_port_funnel$PortFunnel$makeModuleDesc = F4(
	function (name, encoder, decoder, processor) {
		return A4($billstclair$elm_port_funnel$PortFunnel$ModuleDescRecord, name, encoder, decoder, processor);
	});
var $billstclair$elm_geolocation$PortFunnel$Geolocation$ErrorResponse = function (a) {
	return {$: 1, a: a};
};
var $billstclair$elm_geolocation$PortFunnel$Geolocation$LocationResponse = function (a) {
	return {$: 0, a: a};
};
var $billstclair$elm_geolocation$PortFunnel$Geolocation$NoResponse = {$: 2};
var $billstclair$elm_geolocation$PortFunnel$Geolocation$process = F2(
	function (message, unboxed) {
		var state = unboxed;
		switch (message.$) {
			case 0:
				return _Utils_Tuple2(
					_Utils_update(
						state,
						{dX: true}),
					$billstclair$elm_geolocation$PortFunnel$Geolocation$NoResponse);
			case 4:
				var location = message.a;
				return _Utils_Tuple2(
					unboxed,
					$billstclair$elm_geolocation$PortFunnel$Geolocation$LocationResponse(location));
			case 5:
				var location = message.a;
				return _Utils_Tuple2(
					unboxed,
					$billstclair$elm_geolocation$PortFunnel$Geolocation$ErrorResponse(location));
			default:
				return _Utils_Tuple2(unboxed, $billstclair$elm_geolocation$PortFunnel$Geolocation$NoResponse);
		}
	});
var $billstclair$elm_geolocation$PortFunnel$Geolocation$moduleDesc = A4($billstclair$elm_port_funnel$PortFunnel$makeModuleDesc, $billstclair$elm_geolocation$PortFunnel$Geolocation$moduleName, $billstclair$elm_geolocation$PortFunnel$Geolocation$encode, $billstclair$elm_geolocation$PortFunnel$Geolocation$decode, $billstclair$elm_geolocation$PortFunnel$Geolocation$process);
var $author$project$Main$funnels = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2(
			$billstclair$elm_geolocation$PortFunnel$Geolocation$moduleName,
			A4($billstclair$elm_port_funnel$PortFunnel$FunnelSpec, $author$project$Main$geolocationAccessors, $billstclair$elm_geolocation$PortFunnel$Geolocation$moduleDesc, $billstclair$elm_geolocation$PortFunnel$Geolocation$commander, $author$project$Main$geolocationHandler))
		]));
var $elm$browser$Browser$Navigation$load = _Browser_load;
var $elm$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		if (ma.$ === 1) {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 1) {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				if (mc.$ === 1) {
					return $elm$core$Maybe$Nothing;
				} else {
					var c = mc.a;
					return $elm$core$Maybe$Just(
						A3(func, a, b, c));
				}
			}
		}
	});
var $billstclair$elm_port_funnel$PortFunnel$decodeValue = F2(
	function (decoder, value) {
		var _v0 = A2($elm$json$Json$Decode$decodeValue, decoder, value);
		if (!_v0.$) {
			var res = _v0.a;
			return $elm$core$Result$Ok(res);
		} else {
			var err = _v0.a;
			return $elm$core$Result$Err(
				$elm$json$Json$Decode$errorToString(err));
		}
	});
var $billstclair$elm_port_funnel$PortFunnel$genericMessageDecoder = A4(
	$elm$json$Json$Decode$map3,
	$billstclair$elm_port_funnel$PortFunnel$GenericMessage,
	A2($elm$json$Json$Decode$field, 'module', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'tag', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'args', $elm$json$Json$Decode$value));
var $billstclair$elm_port_funnel$PortFunnel$decodeGenericMessage = function (value) {
	return A2($billstclair$elm_port_funnel$PortFunnel$decodeValue, $billstclair$elm_port_funnel$PortFunnel$genericMessageDecoder, value);
};
var $billstclair$elm_port_funnel$PortFunnel$processValue = F5(
	function (funnels, appTrampoline, value, state, model) {
		var _v0 = $billstclair$elm_port_funnel$PortFunnel$decodeGenericMessage(value);
		if (_v0.$ === 1) {
			var error = _v0.a;
			return $elm$core$Result$Err(error);
		} else {
			var genericMessage = _v0.a;
			var moduleName = genericMessage.a4;
			var _v1 = A2($elm$core$Dict$get, moduleName, funnels);
			if (!_v1.$) {
				var funnel = _v1.a;
				var _v2 = A4(appTrampoline, genericMessage, funnel, state, model);
				if (_v2.$ === 1) {
					var error = _v2.a;
					return $elm$core$Result$Err(error);
				} else {
					var _v3 = _v2.a;
					var model2 = _v3.a;
					var cmd = _v3.b;
					return $elm$core$Result$Ok(
						_Utils_Tuple2(model2, cmd));
				}
			} else {
				return $elm$core$Result$Err('Unknown moduleName: ' + moduleName);
			}
		}
	});
var $author$project$Feed$receivePageContentUpdate = F3(
	function (resetPage, maybeReceivedPageContent, umodel) {
		if (!maybeReceivedPageContent.$) {
			var receivedPageContent = maybeReceivedPageContent.a;
			return _Utils_update(
				umodel,
				{
					eV: receivedPageContent.es,
					gS: receivedPageContent.dK,
					eW: receivedPageContent.d8,
					cq: resetPage ? 0 : umodel.cq
				});
		} else {
			return umodel;
		}
	});
var $author$project$Feed$receiveFeedInit = F2(
	function (maybeData, umodel) {
		if (!maybeData.$) {
			var _v1 = maybeData.a;
			var receivedFiltersForm = _v1.a;
			var receivedPageContent = _v1.b;
			return A3(
				$author$project$Feed$receivePageContentUpdate,
				true,
				$elm$core$Maybe$Just(receivedPageContent),
				_Utils_update(
					umodel,
					{
						gU: $elm$core$Maybe$Just(receivedFiltersForm)
					}));
		} else {
			return umodel;
		}
	});
var $author$project$ZipList$zipListDecoder = function (decoderA) {
	return A2(
		$elm$json$Json$Decode$map,
		$author$project$ZipList$fromList,
		$elm$json$Json$Decode$list(decoderA));
};
var $author$project$Main$removePicture = F2(
	function (pictures, toMsg) {
		var maybeId = A2(
			$elm$core$Maybe$map,
			$elm$core$Tuple$first,
			$author$project$ZipList$current(pictures));
		if (maybeId.$ === 1) {
			return $elm$core$Platform$Cmd$none;
		} else {
			var id = maybeId.a;
			return $elm$http$Http$post(
				{
					eE: $elm$http$Http$multipartBody(
						_List_fromArray(
							[
								A2(
								$elm$http$Http$stringPart,
								'id',
								$elm$core$String$fromInt(id))
							])),
					eT: A2(
						$elm$http$Http$expectJson,
						toMsg,
						$author$project$Alert$dataAlertDecoder(
							$author$project$ZipList$zipListDecoder($author$project$Main$pictureDecoder))),
					f2: 'http://localhost:8080/control/picture_remove.php'
				});
		}
	});
var $elm$http$Http$filePart = _Http_pair;
var $author$project$Main$replacePicture = F3(
	function (pictures, pictureFile, toMsg) {
		var maybeId = A2(
			$elm$core$Maybe$map,
			$elm$core$Tuple$first,
			$author$project$ZipList$current(pictures));
		if (maybeId.$ === 1) {
			return $elm$core$Platform$Cmd$none;
		} else {
			var id = maybeId.a;
			return $elm$http$Http$post(
				{
					eE: $elm$http$Http$multipartBody(
						_List_fromArray(
							[
								A2(
								$elm$http$Http$stringPart,
								'id',
								$elm$core$String$fromInt(id)),
								A2($elm$http$Http$filePart, 'pictureFile', pictureFile)
							])),
					eT: A2(
						$elm$http$Http$expectJson,
						toMsg,
						$author$project$Alert$dataAlertDecoder(
							$author$project$ZipList$zipListDecoder($author$project$Main$pictureDecoder))),
					f2: 'http://localhost:8080/control/picture_replace.php'
				});
		}
	});
var $author$project$Main$messageDecoder = A3(
	$webbhuset$elm_json_decode$Json$Decode$Field$require,
	'sent',
	$elm$json$Json$Decode$bool,
	function (sent) {
		return A3(
			$webbhuset$elm_json_decode$Json$Decode$Field$require,
			'date',
			$elm$json$Json$Decode$string,
			function (date) {
				return A3(
					$webbhuset$elm_json_decode$Json$Decode$Field$require,
					'content',
					$elm$json$Json$Decode$string,
					function (content) {
						return $elm$json$Json$Decode$succeed(
							{aW: content, by: date, de: sent});
					});
			});
	});
var $author$project$Main$confirmAlertDecoder = A3(
	$webbhuset$elm_json_decode$Json$Decode$Field$require,
	'confirm',
	$elm$json$Json$Decode$bool,
	function (confirm) {
		return A3(
			$webbhuset$elm_json_decode$Json$Decode$Field$attempt,
			'alert',
			$author$project$Alert$alertDecoder,
			function (alert) {
				return $elm$json$Json$Decode$succeed(
					{aa: alert, eL: confirm});
			});
	});
var $author$project$Form$Text = function (a) {
	return {$: 0, a: a};
};
var $author$project$Form$textField = F2(
	function (label, myForm) {
		return A2(
			$author$project$Form$add,
			$author$project$Form$Text(
				$author$project$Form$defaultTextFieldModel(label)),
			myForm);
	});
var $author$project$Main$requestSendMessageForm = function (id) {
	return A2(
		$author$project$Form$textField,
		'content',
		A4(
			$author$project$Form$form,
			$author$project$Main$confirmAlertDecoder,
			$author$project$Form$OnSubmit('Send message to that id'),
			'http://localhost:8080/control/chat_message.php',
			_List_fromArray(
				[
					_Utils_Tuple2(
					'id',
					$elm$core$String$fromInt(id))
				])));
};
var $author$project$Main$discutionDecoder = A3(
	$webbhuset$elm_json_decode$Json$Decode$Field$require,
	'id',
	$elm$json$Json$Decode$int,
	function (id) {
		return A3(
			$webbhuset$elm_json_decode$Json$Decode$Field$require,
			'pseudo',
			$elm$json$Json$Decode$string,
			function (pseudo) {
				return A3(
					$webbhuset$elm_json_decode$Json$Decode$Field$require,
					'picture',
					$elm$json$Json$Decode$string,
					function (picture) {
						return A3(
							$webbhuset$elm_json_decode$Json$Decode$Field$require,
							'last_log',
							$author$project$BasicValues$lastLogDecoder,
							function (last_log) {
								return A3(
									$webbhuset$elm_json_decode$Json$Decode$Field$require,
									'messages',
									$elm$json$Json$Decode$list($author$project$Main$messageDecoder),
									function (messages) {
										return $elm$json$Json$Decode$succeed(
											{
												e8: id,
												ag: last_log,
												d$: messages,
												fs: picture,
												fB: pseudo,
												aC: $author$project$Main$requestSendMessageForm(id)
											});
									});
							});
					});
			});
	});
var $author$project$Main$requestDiscution = F2(
	function (id, toMsg) {
		return $elm$http$Http$post(
			{
				eE: $elm$http$Http$multipartBody(
					_List_fromArray(
						[
							A2(
							$elm$http$Http$stringPart,
							'id',
							$elm$core$String$fromInt(id))
						])),
				eT: A2(
					$elm$http$Http$expectJson,
					toMsg,
					$author$project$Alert$dataAlertDecoder($author$project$Main$discutionDecoder)),
				f2: 'http://localhost:8080/control/chat_discution.php'
			});
	});
var $author$project$Feed$requestFeedPage = F3(
	function (requestedPageNumber, toMsg, umodel) {
		return ((!_Utils_eq(requestedPageNumber, umodel.cq)) && ((_Utils_cmp(requestedPageNumber, umodel.eW) < 0) && (requestedPageNumber >= 0))) ? $elm$core$Maybe$Just(
			_Utils_Tuple2(
				_Utils_update(
					umodel,
					{eV: _List_Nil, cq: requestedPageNumber}),
				$elm$http$Http$post(
					{
						eE: $elm$http$Http$multipartBody(
							_List_fromArray(
								[
									A2(
									$elm$http$Http$stringPart,
									'page',
									$elm$core$String$fromInt(requestedPageNumber))
								])),
						eT: A2(
							$elm$http$Http$expectJson,
							toMsg,
							$author$project$Alert$dataAlertDecoder($author$project$Feed$pageContentDecoder)),
						f2: 'http://localhost:8080/control/feed_page.php'
					}))) : $elm$core$Maybe$Nothing;
	});
var $author$project$Main$likeStatusDecoder = A3(
	$webbhuset$elm_json_decode$Json$Decode$Field$require,
	'id',
	$elm$json$Json$Decode$int,
	function (id) {
		return A3(
			$webbhuset$elm_json_decode$Json$Decode$Field$require,
			'newLikeStatus',
			$elm$json$Json$Decode$bool,
			function (newLikeStatus) {
				return $elm$json$Json$Decode$succeed(
					_Utils_Tuple2(id, newLikeStatus));
			});
	});
var $author$project$Main$requestLike = F2(
	function (id, toMsg) {
		return $elm$http$Http$post(
			{
				eE: $elm$http$Http$multipartBody(
					_List_fromArray(
						[
							A2(
							$elm$http$Http$stringPart,
							'id',
							$elm$core$String$fromInt(id))
						])),
				eT: A2(
					$elm$http$Http$expectJson,
					toMsg,
					$author$project$Alert$dataAlertDecoder($author$project$Main$likeStatusDecoder)),
				f2: 'http://localhost:8080/control/user_like.php'
			});
	});
var $author$project$Main$ResultSignout = function (a) {
	return {$: 19, a: a};
};
var $author$project$Main$requestSignout = $elm$http$Http$post(
	{
		eE: $elm$http$Http$emptyBody,
		eT: A2($elm$http$Http$expectJson, $author$project$Main$ResultSignout, $author$project$Main$resultMessageDecoder),
		f2: 'http://localhost:8080/control/account_signout.php'
	});
var $author$project$Main$ReceiveUnreadNotifsAmount = function (a) {
	return {$: 62, a: a};
};
var $author$project$Main$unreadNotifsAmountDecoder = A3(
	$webbhuset$elm_json_decode$Json$Decode$Field$require,
	'amount',
	$elm$json$Json$Decode$int,
	function (amount) {
		return $elm$json$Json$Decode$succeed(amount);
	});
var $author$project$Main$requestUnreadNotifsAmount = $elm$http$Http$post(
	{
		eE: $elm$http$Http$emptyBody,
		eT: A2(
			$elm$http$Http$expectJson,
			$author$project$Main$ReceiveUnreadNotifsAmount,
			$author$project$Alert$dataAlertDecoder($author$project$Main$unreadNotifsAmountDecoder)),
		f2: 'http://localhost:8080/control/account_notifs_amount.php'
	});
var $author$project$Main$retreiveAccountResultHandler = F3(
	function (result, model, cmd) {
		if (!result.$) {
			if (!result.a.$) {
				var message = result.a.a;
				return _Utils_Tuple2(
					A2(
						A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
						$author$project$Alert$successAlert(message),
						model),
					$elm$core$Platform$Cmd$batch(
						_List_fromArray(
							[
								A2($elm$core$Platform$Cmd$map, $author$project$Main$AccountRetrievalForm, cmd),
								A2($elm$browser$Browser$Navigation$pushUrl, model.I, '/signin')
							])));
			} else {
				var message = result.a.a;
				return _Utils_Tuple2(
					A2(
						A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
						$author$project$Alert$invalidImputAlert(message),
						model),
					A2($elm$core$Platform$Cmd$map, $author$project$Main$AccountRetrievalForm, cmd));
			}
		} else {
			var error = result.a;
			return _Utils_Tuple2(
				A2(
					A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
					$author$project$Alert$serverNotReachedAlert(error),
					model),
				A2($elm$core$Platform$Cmd$map, $author$project$Main$AccountRetrievalForm, cmd));
		}
	});
var $billstclair$elm_port_funnel$PortFunnel$messageToValue = F2(
	function (_v0, message) {
		var moduleDesc = _v0;
		return $billstclair$elm_port_funnel$PortFunnel$encodeGenericMessage(
			moduleDesc.dM(message));
	});
var $billstclair$elm_port_funnel$PortFunnel$sendMessage = F3(
	function (moduleDesc, cmdPort, message) {
		return cmdPort(
			A2($billstclair$elm_port_funnel$PortFunnel$messageToValue, moduleDesc, message));
	});
var $billstclair$elm_geolocation$PortFunnel$Geolocation$send = $billstclair$elm_port_funnel$PortFunnel$sendMessage($billstclair$elm_geolocation$PortFunnel$Geolocation$moduleDesc);
var $author$project$Alert$withDefault = F3(
	function (_default, maybeNewAlert, model) {
		if (!maybeNewAlert.$) {
			var newAlert = maybeNewAlert.a;
			return _Utils_update(
				model,
				{
					aa: $elm$core$Maybe$Just(newAlert)
				});
		} else {
			return _Utils_update(
				model,
				{
					aa: $elm$core$Maybe$Just(_default)
				});
		}
	});
var $author$project$Main$sendMessageFormResultHandler = F4(
	function (result, discution, lmodel, model) {
		if (!result.$) {
			var confirm = result.a.eL;
			var alert = result.a.aa;
			return A3(
				$author$project$Alert$withDefault,
				confirm ? $author$project$Alert$successAlert('Message sent!') : $author$project$Alert$invalidImputAlert('We can\'t send that message to this user. It may be because your or his/her account isn\'t complete or because there is no match between you two.'),
				alert,
				model);
		} else {
			var error = result.a;
			return A2(
				A2(
					$elm$core$Basics$composeL,
					A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
					$author$project$Alert$serverNotReachedAlert),
				error,
				model);
		}
	});
var $author$project$Main$setSendMessageForm = F4(
	function (newForm, discution, lmodel, model) {
		return _Utils_update(
			model,
			{
				a: $author$project$Main$Logged(
					_Utils_update(
						lmodel,
						{
							O: $elm$core$Maybe$Just(
								_Utils_update(
									discution,
									{aC: newForm}))
						}))
			});
	});
var $billstclair$elm_geolocation$PortFunnel$Geolocation$stopWatching = $billstclair$elm_geolocation$PortFunnel$Geolocation$StopChanges;
var $author$project$Main$ReceiveBlockUpdate = function (a) {
	return {$: 58, a: a};
};
var $author$project$Main$submitBlock = function (id) {
	return $elm$http$Http$post(
		{
			eE: $elm$http$Http$multipartBody(
				_List_fromArray(
					[
						A2(
						$elm$http$Http$stringPart,
						'id',
						$elm$core$String$fromInt(id))
					])),
			eT: A2($elm$http$Http$expectJson, $author$project$Main$ReceiveBlockUpdate, $author$project$Main$resultMessageDecoder),
			f2: 'http://localhost:8080/control/user_block.php'
		});
};
var $author$project$Main$ResultPwUpdate = function (a) {
	return {$: 24, a: a};
};
var $author$project$Main$submitPwUpdate = function (model) {
	return $elm$http$Http$post(
		{
			eE: $elm$http$Http$multipartBody(
				_List_fromArray(
					[
						A2($elm$http$Http$stringPart, 'oldpw', model.bO),
						A2($elm$http$Http$stringPart, 'newpw', model.bN),
						A2($elm$http$Http$stringPart, 'confirm', model.bM)
					])),
			eT: A2($elm$http$Http$expectJson, $author$project$Main$ResultPwUpdate, $author$project$Main$resultMessageDecoder),
			f2: 'http://localhost:8080/control/password_update.php'
		});
};
var $author$project$Main$ReceiveReportUpdate = function (a) {
	return {$: 60, a: a};
};
var $author$project$Main$submitReport = function (id) {
	return $elm$http$Http$post(
		{
			eE: $elm$http$Http$multipartBody(
				_List_fromArray(
					[
						A2(
						$elm$http$Http$stringPart,
						'id',
						$elm$core$String$fromInt(id))
					])),
			eT: A2($elm$http$Http$expectJson, $author$project$Main$ReceiveReportUpdate, $author$project$Main$resultMessageDecoder),
			f2: 'http://localhost:8080/control/user_report.php'
		});
};
var $author$project$Main$ResultRetreivalRequest = function (a) {
	return {$: 27, a: a};
};
var $author$project$Main$submitRetreivalRequest = function (model) {
	return $elm$http$Http$post(
		{
			eE: $elm$http$Http$multipartBody(
				_List_fromArray(
					[
						A2($elm$http$Http$stringPart, 'email', model.aA)
					])),
			eT: A2($elm$http$Http$expectJson, $author$project$Main$ResultRetreivalRequest, $author$project$Main$resultMessageDecoder),
			f2: 'http://localhost:8080/control/password_retreival_request.php'
		});
};
var $author$project$Main$genderToString = function (gender) {
	if (!gender) {
		return 'man';
	} else {
		return 'woman';
	}
};
var $elm$core$List$intersperse = F2(
	function (sep, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			var step = F2(
				function (x, rest) {
					return A2(
						$elm$core$List$cons,
						sep,
						A2($elm$core$List$cons, x, rest));
				});
			var spersed = A3($elm$core$List$foldr, step, _List_Nil, tl);
			return A2($elm$core$List$cons, hd, spersed);
		}
	});
var $author$project$Main$orientationToString = function (orientation) {
	switch (orientation) {
		case 2:
			return 'heterosexual';
		case 0:
			return 'homosexual';
		default:
			return 'bisexual';
	}
};
var $author$project$MyList$sumStringListLoop = F2(
	function (acc, list) {
		sumStringListLoop:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var head = list.a;
				var queue = list.b;
				var $temp$acc = _Utils_ap(acc, head),
					$temp$list = queue;
				acc = $temp$acc;
				list = $temp$list;
				continue sumStringListLoop;
			}
		}
	});
var $author$project$MyList$sumStringList = function (list) {
	return A2($author$project$MyList$sumStringListLoop, '', list);
};
var $justinmimbs$date$Date$monthNumber = A2($elm$core$Basics$composeR, $justinmimbs$date$Date$month, $justinmimbs$date$Date$monthToNumber);
var $justinmimbs$date$Date$ordinalDay = A2(
	$elm$core$Basics$composeR,
	$justinmimbs$date$Date$toOrdinalDate,
	function ($) {
		return $.d7;
	});
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			$elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var $elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3($elm$core$String$repeatHelp, n, chunk, '');
	});
var $elm$core$String$padLeft = F3(
	function (n, _char, string) {
		return _Utils_ap(
			A2(
				$elm$core$String$repeat,
				n - $elm$core$String$length(string),
				$elm$core$String$fromChar(_char)),
			string);
	});
var $justinmimbs$date$Date$padSignedInt = F2(
	function (length, _int) {
		return _Utils_ap(
			(_int < 0) ? '-' : '',
			A3(
				$elm$core$String$padLeft,
				length,
				'0',
				$elm$core$String$fromInt(
					$elm$core$Basics$abs(_int))));
	});
var $justinmimbs$date$Date$monthToQuarter = function (m) {
	return (($justinmimbs$date$Date$monthToNumber(m) + 2) / 3) | 0;
};
var $justinmimbs$date$Date$quarter = A2($elm$core$Basics$composeR, $justinmimbs$date$Date$month, $justinmimbs$date$Date$monthToQuarter);
var $elm$core$String$right = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(
			$elm$core$String$slice,
			-n,
			$elm$core$String$length(string),
			string);
	});
var $elm$time$Time$Fri = 4;
var $elm$time$Time$Mon = 0;
var $elm$time$Time$Sat = 5;
var $elm$time$Time$Sun = 6;
var $elm$time$Time$Thu = 3;
var $elm$time$Time$Tue = 1;
var $elm$time$Time$Wed = 2;
var $justinmimbs$date$Date$numberToWeekday = function (wdn) {
	var _v0 = A2($elm$core$Basics$max, 1, wdn);
	switch (_v0) {
		case 1:
			return 0;
		case 2:
			return 1;
		case 3:
			return 2;
		case 4:
			return 3;
		case 5:
			return 4;
		case 6:
			return 5;
		default:
			return 6;
	}
};
var $justinmimbs$date$Date$toWeekDate = function (_v0) {
	var rd = _v0;
	var wdn = $justinmimbs$date$Date$weekdayNumber(rd);
	var wy = $justinmimbs$date$Date$year(rd + (4 - wdn));
	var week1Day1 = $justinmimbs$date$Date$daysBeforeWeekYear(wy) + 1;
	return {
		f7: 1 + (((rd - week1Day1) / 7) | 0),
		f8: wy,
		ii: $justinmimbs$date$Date$numberToWeekday(wdn)
	};
};
var $justinmimbs$date$Date$weekNumber = A2(
	$elm$core$Basics$composeR,
	$justinmimbs$date$Date$toWeekDate,
	function ($) {
		return $.f7;
	});
var $justinmimbs$date$Date$weekYear = A2(
	$elm$core$Basics$composeR,
	$justinmimbs$date$Date$toWeekDate,
	function ($) {
		return $.f8;
	});
var $justinmimbs$date$Date$weekday = A2($elm$core$Basics$composeR, $justinmimbs$date$Date$weekdayNumber, $justinmimbs$date$Date$numberToWeekday);
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $justinmimbs$date$Date$ordinalSuffix = function (n) {
	var nn = A2($elm$core$Basics$modBy, 100, n);
	var _v0 = A2(
		$elm$core$Basics$min,
		(nn < 20) ? nn : A2($elm$core$Basics$modBy, 10, nn),
		4);
	switch (_v0) {
		case 1:
			return 'st';
		case 2:
			return 'nd';
		case 3:
			return 'rd';
		default:
			return 'th';
	}
};
var $justinmimbs$date$Date$withOrdinalSuffix = function (n) {
	return _Utils_ap(
		$elm$core$String$fromInt(n),
		$justinmimbs$date$Date$ordinalSuffix(n));
};
var $justinmimbs$date$Date$formatField = F4(
	function (language, _char, length, date) {
		switch (_char) {
			case 'y':
				if (length === 2) {
					return A2(
						$elm$core$String$right,
						2,
						A3(
							$elm$core$String$padLeft,
							2,
							'0',
							$elm$core$String$fromInt(
								$justinmimbs$date$Date$year(date))));
				} else {
					return A2(
						$justinmimbs$date$Date$padSignedInt,
						length,
						$justinmimbs$date$Date$year(date));
				}
			case 'Y':
				if (length === 2) {
					return A2(
						$elm$core$String$right,
						2,
						A3(
							$elm$core$String$padLeft,
							2,
							'0',
							$elm$core$String$fromInt(
								$justinmimbs$date$Date$weekYear(date))));
				} else {
					return A2(
						$justinmimbs$date$Date$padSignedInt,
						length,
						$justinmimbs$date$Date$weekYear(date));
				}
			case 'Q':
				switch (length) {
					case 1:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$quarter(date));
					case 2:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$quarter(date));
					case 3:
						return 'Q' + $elm$core$String$fromInt(
							$justinmimbs$date$Date$quarter(date));
					case 4:
						return $justinmimbs$date$Date$withOrdinalSuffix(
							$justinmimbs$date$Date$quarter(date));
					case 5:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$quarter(date));
					default:
						return '';
				}
			case 'M':
				switch (length) {
					case 1:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$monthNumber(date));
					case 2:
						return A3(
							$elm$core$String$padLeft,
							2,
							'0',
							$elm$core$String$fromInt(
								$justinmimbs$date$Date$monthNumber(date)));
					case 3:
						return language.cJ(
							$justinmimbs$date$Date$month(date));
					case 4:
						return language.d2(
							$justinmimbs$date$Date$month(date));
					case 5:
						return A2(
							$elm$core$String$left,
							1,
							language.cJ(
								$justinmimbs$date$Date$month(date)));
					default:
						return '';
				}
			case 'w':
				switch (length) {
					case 1:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$weekNumber(date));
					case 2:
						return A3(
							$elm$core$String$padLeft,
							2,
							'0',
							$elm$core$String$fromInt(
								$justinmimbs$date$Date$weekNumber(date)));
					default:
						return '';
				}
			case 'd':
				switch (length) {
					case 1:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$day(date));
					case 2:
						return A3(
							$elm$core$String$padLeft,
							2,
							'0',
							$elm$core$String$fromInt(
								$justinmimbs$date$Date$day(date)));
					case 3:
						return language.dG(
							$justinmimbs$date$Date$day(date));
					default:
						return '';
				}
			case 'D':
				switch (length) {
					case 1:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$ordinalDay(date));
					case 2:
						return A3(
							$elm$core$String$padLeft,
							2,
							'0',
							$elm$core$String$fromInt(
								$justinmimbs$date$Date$ordinalDay(date)));
					case 3:
						return A3(
							$elm$core$String$padLeft,
							3,
							'0',
							$elm$core$String$fromInt(
								$justinmimbs$date$Date$ordinalDay(date)));
					default:
						return '';
				}
			case 'E':
				switch (length) {
					case 1:
						return language.aQ(
							$justinmimbs$date$Date$weekday(date));
					case 2:
						return language.aQ(
							$justinmimbs$date$Date$weekday(date));
					case 3:
						return language.aQ(
							$justinmimbs$date$Date$weekday(date));
					case 4:
						return language.et(
							$justinmimbs$date$Date$weekday(date));
					case 5:
						return A2(
							$elm$core$String$left,
							1,
							language.aQ(
								$justinmimbs$date$Date$weekday(date)));
					case 6:
						return A2(
							$elm$core$String$left,
							2,
							language.aQ(
								$justinmimbs$date$Date$weekday(date)));
					default:
						return '';
				}
			case 'e':
				switch (length) {
					case 1:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$weekdayNumber(date));
					case 2:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$weekdayNumber(date));
					default:
						return A4($justinmimbs$date$Date$formatField, language, 'E', length, date);
				}
			default:
				return '';
		}
	});
var $justinmimbs$date$Date$formatWithTokens = F3(
	function (language, tokens, date) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (token, formatted) {
					if (!token.$) {
						var _char = token.a;
						var length = token.b;
						return _Utils_ap(
							A4($justinmimbs$date$Date$formatField, language, _char, length, date),
							formatted);
					} else {
						var str = token.a;
						return _Utils_ap(str, formatted);
					}
				}),
			'',
			tokens);
	});
var $justinmimbs$date$Pattern$Literal = function (a) {
	return {$: 1, a: a};
};
var $justinmimbs$date$Pattern$escapedQuote = A2(
	$elm$parser$Parser$ignorer,
	$elm$parser$Parser$succeed(
		$justinmimbs$date$Pattern$Literal('\'')),
	$elm$parser$Parser$token('\'\''));
var $justinmimbs$date$Pattern$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.b);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					$elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.d4, offset) < 0,
					0,
					{eI: col, f: s0.f, h: s0.h, d4: offset, fI: row, b: s0.b});
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$chompWhile = function (isGood) {
	return function (s) {
		return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.d4, s.fI, s.eI, s);
	};
};
var $elm$parser$Parser$chompWhile = $elm$parser$Parser$Advanced$chompWhile;
var $elm$parser$Parser$Advanced$getOffset = function (s) {
	return A3($elm$parser$Parser$Advanced$Good, false, s.d4, s);
};
var $elm$parser$Parser$getOffset = $elm$parser$Parser$Advanced$getOffset;
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $justinmimbs$date$Pattern$fieldRepeats = function (str) {
	var _v0 = $elm$core$String$toList(str);
	if (_v0.b && (!_v0.b.b)) {
		var _char = _v0.a;
		return A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed(
					F2(
						function (x, y) {
							return A2($justinmimbs$date$Pattern$Field, _char, 1 + (y - x));
						})),
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$getOffset,
					$elm$parser$Parser$chompWhile(
						$elm$core$Basics$eq(_char)))),
			$elm$parser$Parser$getOffset);
	} else {
		return $elm$parser$Parser$problem('expected exactly one char');
	}
};
var $elm$parser$Parser$Advanced$getChompedString = function (parser) {
	return A2($elm$parser$Parser$Advanced$mapChompedString, $elm$core$Basics$always, parser);
};
var $elm$parser$Parser$getChompedString = $elm$parser$Parser$Advanced$getChompedString;
var $justinmimbs$date$Pattern$field = A2(
	$elm$parser$Parser$andThen,
	$justinmimbs$date$Pattern$fieldRepeats,
	$elm$parser$Parser$getChompedString(
		$elm$parser$Parser$chompIf($elm$core$Char$isAlpha)));
var $justinmimbs$date$Pattern$finalize = A2(
	$elm$core$List$foldl,
	F2(
		function (token, tokens) {
			var _v0 = _Utils_Tuple2(token, tokens);
			if (((_v0.a.$ === 1) && _v0.b.b) && (_v0.b.a.$ === 1)) {
				var x = _v0.a.a;
				var _v1 = _v0.b;
				var y = _v1.a.a;
				var rest = _v1.b;
				return A2(
					$elm$core$List$cons,
					$justinmimbs$date$Pattern$Literal(
						_Utils_ap(x, y)),
					rest);
			} else {
				return A2($elm$core$List$cons, token, tokens);
			}
		}),
	_List_Nil);
var $elm$parser$Parser$Advanced$lazy = function (thunk) {
	return function (s) {
		var _v0 = thunk(0);
		var parse = _v0;
		return parse(s);
	};
};
var $elm$parser$Parser$lazy = $elm$parser$Parser$Advanced$lazy;
var $justinmimbs$date$Pattern$isLiteralChar = function (_char) {
	return (_char !== '\'') && (!$elm$core$Char$isAlpha(_char));
};
var $justinmimbs$date$Pattern$literal = A2(
	$elm$parser$Parser$map,
	$justinmimbs$date$Pattern$Literal,
	$elm$parser$Parser$getChompedString(
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed(0),
				$elm$parser$Parser$chompIf($justinmimbs$date$Pattern$isLiteralChar)),
			$elm$parser$Parser$chompWhile($justinmimbs$date$Pattern$isLiteralChar))));
var $justinmimbs$date$Pattern$quotedHelp = function (result) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$andThen,
				function (str) {
					return $justinmimbs$date$Pattern$quotedHelp(
						_Utils_ap(result, str));
				},
				$elm$parser$Parser$getChompedString(
					A2(
						$elm$parser$Parser$ignorer,
						A2(
							$elm$parser$Parser$ignorer,
							$elm$parser$Parser$succeed(0),
							$elm$parser$Parser$chompIf(
								$elm$core$Basics$neq('\''))),
						$elm$parser$Parser$chompWhile(
							$elm$core$Basics$neq('\''))))),
				A2(
				$elm$parser$Parser$andThen,
				function (_v0) {
					return $justinmimbs$date$Pattern$quotedHelp(result + '\'');
				},
				$elm$parser$Parser$token('\'\'')),
				$elm$parser$Parser$succeed(result)
			]));
};
var $justinmimbs$date$Pattern$quoted = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$ignorer,
		$elm$parser$Parser$succeed($justinmimbs$date$Pattern$Literal),
		$elm$parser$Parser$chompIf(
			$elm$core$Basics$eq('\''))),
	A2(
		$elm$parser$Parser$ignorer,
		$justinmimbs$date$Pattern$quotedHelp(''),
		$elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					$elm$parser$Parser$chompIf(
					$elm$core$Basics$eq('\'')),
					$elm$parser$Parser$end
				]))));
var $justinmimbs$date$Pattern$patternHelp = function (tokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$andThen,
				function (token) {
					return $justinmimbs$date$Pattern$patternHelp(
						A2($elm$core$List$cons, token, tokens));
				},
				$elm$parser$Parser$oneOf(
					_List_fromArray(
						[$justinmimbs$date$Pattern$field, $justinmimbs$date$Pattern$literal, $justinmimbs$date$Pattern$escapedQuote, $justinmimbs$date$Pattern$quoted]))),
				$elm$parser$Parser$lazy(
				function (_v0) {
					return $elm$parser$Parser$succeed(
						$justinmimbs$date$Pattern$finalize(tokens));
				})
			]));
};
var $elm$core$Result$withDefault = F2(
	function (def, result) {
		if (!result.$) {
			var a = result.a;
			return a;
		} else {
			return def;
		}
	});
var $justinmimbs$date$Pattern$fromString = function (str) {
	return A2(
		$elm$core$Result$withDefault,
		_List_fromArray(
			[
				$justinmimbs$date$Pattern$Literal(str)
			]),
		A2(
			$elm$parser$Parser$run,
			$justinmimbs$date$Pattern$patternHelp(_List_Nil),
			str));
};
var $justinmimbs$date$Date$formatWithLanguage = F2(
	function (language, pattern) {
		var tokens = $elm$core$List$reverse(
			$justinmimbs$date$Pattern$fromString(pattern));
		return A2($justinmimbs$date$Date$formatWithTokens, language, tokens);
	});
var $justinmimbs$date$Date$monthToName = function (m) {
	switch (m) {
		case 0:
			return 'January';
		case 1:
			return 'February';
		case 2:
			return 'March';
		case 3:
			return 'April';
		case 4:
			return 'May';
		case 5:
			return 'June';
		case 6:
			return 'July';
		case 7:
			return 'August';
		case 8:
			return 'September';
		case 9:
			return 'October';
		case 10:
			return 'November';
		default:
			return 'December';
	}
};
var $justinmimbs$date$Date$weekdayToName = function (wd) {
	switch (wd) {
		case 0:
			return 'Monday';
		case 1:
			return 'Tuesday';
		case 2:
			return 'Wednesday';
		case 3:
			return 'Thursday';
		case 4:
			return 'Friday';
		case 5:
			return 'Saturday';
		default:
			return 'Sunday';
	}
};
var $justinmimbs$date$Date$language_en = {
	dG: $justinmimbs$date$Date$withOrdinalSuffix,
	d2: $justinmimbs$date$Date$monthToName,
	cJ: A2(
		$elm$core$Basics$composeR,
		$justinmimbs$date$Date$monthToName,
		$elm$core$String$left(3)),
	et: $justinmimbs$date$Date$weekdayToName,
	aQ: A2(
		$elm$core$Basics$composeR,
		$justinmimbs$date$Date$weekdayToName,
		$elm$core$String$left(3))
};
var $justinmimbs$date$Date$format = function (pattern) {
	return A2($justinmimbs$date$Date$formatWithLanguage, $justinmimbs$date$Date$language_en, pattern);
};
var $justinmimbs$date$Date$toIsoString = $justinmimbs$date$Date$format('yyyy-MM-dd');
var $author$project$Main$submitSettings = function (model) {
	var _v0 = $author$project$Main$breakAppartGeoInfo(model.x);
	var geoAuth = _v0.a;
	var latitude = _v0.b;
	var longitude = _v0.c;
	return $elm$http$Http$post(
		{
			eE: $elm$http$Http$multipartBody(
				_List_fromArray(
					[
						A2($elm$http$Http$stringPart, 'pseudo', model.bk),
						A2($elm$http$Http$stringPart, 'first_name', model.bg),
						A2($elm$http$Http$stringPart, 'last_name', model.bi),
						A2($elm$http$Http$stringPart, 'email', model.bf),
						A2(
						$elm$http$Http$stringPart,
						'gender',
						$author$project$Main$genderToString(
							A2(
								$elm$core$Maybe$withDefault,
								_Utils_Tuple2(1, ''),
								$author$project$ZipList$current(model.bh)).a)),
						A2(
						$elm$http$Http$stringPart,
						'orientation',
						$author$project$Main$orientationToString(
							A2(
								$elm$core$Maybe$withDefault,
								_Utils_Tuple2(1, ''),
								$author$project$ZipList$current(model.bj)).a)),
						A2($elm$http$Http$stringPart, 'biography', model.ba),
						A2(
						$elm$http$Http$stringPart,
						'tags',
						$author$project$MyList$sumStringList(
							A2($elm$core$List$intersperse, ' ', model.aD))),
						A2(
						$elm$http$Http$stringPart,
						'birth',
						$justinmimbs$date$Date$toIsoString(model.bb)),
						A2(
						$elm$http$Http$stringPart,
						'geoAuth',
						geoAuth ? 'true' : 'false'),
						A2(
						$elm$http$Http$stringPart,
						'latitude',
						$elm$core$String$fromFloat(latitude)),
						A2(
						$elm$http$Http$stringPart,
						'longitude',
						$elm$core$String$fromFloat(longitude))
					])),
			eT: A2($elm$http$Http$expectJson, $author$project$Main$ResultPwUpdate, $author$project$Main$resultMessageDecoder),
			f2: 'http://localhost:8080/control/settings_update.php'
		});
};
var $author$project$Main$ResultSignin = function (a) {
	return {$: 9, a: a};
};
var $author$project$Main$signinDecoder = A3(
	$webbhuset$elm_json_decode$Json$Decode$Field$require,
	'pseudo',
	$elm$json$Json$Decode$string,
	function (pseudo) {
		return A3(
			$webbhuset$elm_json_decode$Json$Decode$Field$require,
			'picture',
			$elm$json$Json$Decode$string,
			function (picture) {
				return $elm$json$Json$Decode$succeed(
					{fs: picture, fB: pseudo});
			});
	});
var $author$project$Main$submitSignin = function (model) {
	return $elm$http$Http$post(
		{
			eE: $elm$http$Http$multipartBody(
				_List_fromArray(
					[
						A2($elm$http$Http$stringPart, 'pseudo', model.aF),
						A2($elm$http$Http$stringPart, 'password', model.aE)
					])),
			eT: A2(
				$elm$http$Http$expectJson,
				$author$project$Main$ResultSignin,
				$author$project$Alert$dataAlertDecoder($author$project$Main$signinDecoder)),
			f2: 'http://localhost:8080/control/account_signin.php'
		});
};
var $author$project$Main$ResultSignup = function (a) {
	return {$: 17, a: a};
};
var $author$project$Main$submitSignup = function (model) {
	return $elm$http$Http$post(
		{
			eE: $elm$http$Http$multipartBody(
				_List_fromArray(
					[
						A2($elm$http$Http$stringPart, 'pseudo', model.aL),
						A2($elm$http$Http$stringPart, 'lastname', model.aJ),
						A2($elm$http$Http$stringPart, 'firstname', model.aI),
						A2($elm$http$Http$stringPart, 'email', model.aH),
						A2($elm$http$Http$stringPart, 'password', model.aK),
						A2($elm$http$Http$stringPart, 'confirm', model.aG)
					])),
			eT: A2($elm$http$Http$expectJson, $author$project$Main$ResultSignup, $author$project$Main$resultMessageDecoder),
			f2: 'http://localhost:8080/control/account_signup.php'
		});
};
var $elm$core$String$toFloat = _String_toFloat;
var $elm$url$Url$addPort = F2(
	function (maybePort, starter) {
		if (maybePort.$ === 1) {
			return starter;
		} else {
			var port_ = maybePort.a;
			return starter + (':' + $elm$core$String$fromInt(port_));
		}
	});
var $elm$url$Url$addPrefixed = F3(
	function (prefix, maybeSegment, starter) {
		if (maybeSegment.$ === 1) {
			return starter;
		} else {
			var segment = maybeSegment.a;
			return _Utils_ap(
				starter,
				_Utils_ap(prefix, segment));
		}
	});
var $elm$url$Url$toString = function (url) {
	var http = function () {
		var _v0 = url.fA;
		if (!_v0) {
			return 'http://';
		} else {
			return 'https://';
		}
	}();
	return A3(
		$elm$url$Url$addPrefixed,
		'#',
		url.eZ,
		A3(
			$elm$url$Url$addPrefixed,
			'?',
			url.fC,
			_Utils_ap(
				A2(
					$elm$url$Url$addPort,
					url.fu,
					_Utils_ap(http, url.e5)),
				url.fr)));
};
var $author$project$Main$AvData = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $author$project$Main$Error = function (a) {
	return {$: 2, a: a};
};
var $author$project$Main$NoData = function (a) {
	return {$: 1, a: a};
};
var $author$project$Main$toWebResultDataAlert = function (result) {
	if (!result.$) {
		var data = result.a.eM;
		var alert = result.a.aa;
		if (!data.$) {
			var val = data.a;
			return A2($author$project$Main$AvData, val, alert);
		} else {
			return $author$project$Main$NoData(alert);
		}
	} else {
		var error = result.a;
		return $author$project$Main$Error(error);
	}
};
var $author$project$Main$unreadNotifsAmountResultHandler = F3(
	function (result, lmodel, model) {
		if (!result.$) {
			var alert = result.a.aa;
			var data = result.a.eM;
			var newAlert = _Utils_eq(alert, $elm$core$Maybe$Nothing) ? model.aa : alert;
			return A2(
				$elm$core$Maybe$withDefault,
				A2(
					$author$project$Alert$put,
					alert,
					A2(
						A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
						$author$project$Alert$serverNotReachedAlert(
							$elm$http$Http$BadBody('Data not received for notifs amount')),
						model)),
				A2(
					$elm$core$Maybe$map,
					function (amount) {
						return _Utils_update(
							model,
							{
								a: $author$project$Main$Logged(
									_Utils_update(
										lmodel,
										{dm: amount})),
								aa: newAlert
							});
					},
					data));
		} else {
			var error = result.a;
			return A2(
				A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
				$author$project$Alert$serverNotReachedAlert(error),
				model);
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Carousel$Animating = function (a) {
	return {$: 1, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Carousel$Paused = 0;
var $rundis$elm_bootstrap$Bootstrap$Carousel$Start = function (a) {
	return {$: 0, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Carousel$nextIndex = F3(
	function (stage, currentIndex, size) {
		var helper = function (transition) {
			switch (transition.$) {
				case 0:
					return A2($elm$core$Basics$modBy, size, currentIndex + 1);
				case 1:
					return A2($elm$core$Basics$modBy, size, currentIndex - 1);
				default:
					var m = transition.a;
					return A2($elm$core$Basics$modBy, size, m);
			}
		};
		switch (stage.$) {
			case 0:
				var transition = stage.a;
				return helper(transition);
			case 1:
				var transition = stage.a;
				return helper(transition);
			default:
				return currentIndex;
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Carousel$update = F2(
	function (message, model) {
		var tstage = model.a;
		var settings = model.b;
		var currentIndex = settings.ap;
		var size = settings.ej;
		switch (message.$) {
			case 1:
				return A2(
					$rundis$elm_bootstrap$Bootstrap$Carousel$State,
					tstage,
					_Utils_update(
						settings,
						{N: 0}));
			case 0:
				return A2(
					$rundis$elm_bootstrap$Bootstrap$Carousel$State,
					tstage,
					_Utils_update(
						settings,
						{N: 1}));
			case 5:
				var hovering = message.a;
				return A2(
					$rundis$elm_bootstrap$Bootstrap$Carousel$State,
					tstage,
					_Utils_update(
						settings,
						{bB: hovering}));
			case 2:
				var transition = message.a;
				var newSettings = function () {
					var _v2 = settings.N;
					if (_v2 === 2) {
						return _Utils_update(
							settings,
							{N: 1});
					} else {
						return settings;
					}
				}();
				if (tstage.$ === 2) {
					return (!_Utils_eq(
						A3(
							$rundis$elm_bootstrap$Bootstrap$Carousel$nextIndex,
							$rundis$elm_bootstrap$Bootstrap$Carousel$Start(transition),
							currentIndex,
							size),
						currentIndex)) ? A2(
						$rundis$elm_bootstrap$Bootstrap$Carousel$State,
						$rundis$elm_bootstrap$Bootstrap$Carousel$Start(transition),
						newSettings) : A2($rundis$elm_bootstrap$Bootstrap$Carousel$State, tstage, newSettings);
				} else {
					return A2($rundis$elm_bootstrap$Bootstrap$Carousel$State, tstage, newSettings);
				}
			case 3:
				switch (tstage.$) {
					case 2:
						return model;
					case 0:
						var transition = tstage.a;
						return A2(
							$rundis$elm_bootstrap$Bootstrap$Carousel$State,
							$rundis$elm_bootstrap$Bootstrap$Carousel$Animating(transition),
							settings);
					default:
						var transition = tstage.a;
						return A2(
							$rundis$elm_bootstrap$Bootstrap$Carousel$State,
							$rundis$elm_bootstrap$Bootstrap$Carousel$Animating(transition),
							settings);
				}
			default:
				var size_ = message.a;
				if (tstage.$ === 2) {
					return A2(
						$rundis$elm_bootstrap$Bootstrap$Carousel$State,
						$rundis$elm_bootstrap$Bootstrap$Carousel$NotAnimating,
						_Utils_update(
							settings,
							{ej: size_}));
				} else {
					return A2(
						$rundis$elm_bootstrap$Bootstrap$Carousel$State,
						$rundis$elm_bootstrap$Bootstrap$Carousel$NotAnimating,
						_Utils_update(
							settings,
							{
								ap: A3($rundis$elm_bootstrap$Bootstrap$Carousel$nextIndex, tstage, currentIndex, size),
								ej: size
							}));
				}
		}
	});
var $author$project$Form$Input = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = $elm$core$Array$bitMask & (index >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (!_v0.$) {
				var subTree = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _v0.a;
				return A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, values);
			}
		}
	});
var $elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var $elm$core$Array$get = F2(
	function (index, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? $elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? $elm$core$Maybe$Just(
			A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, tail)) : $elm$core$Maybe$Just(
			A3($elm$core$Array$getHelp, startShift, index, tree)));
	});
var $elm$core$Array$setHelp = F4(
	function (shift, index, value, tree) {
		var pos = $elm$core$Array$bitMask & (index >>> shift);
		var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
		if (!_v0.$) {
			var subTree = _v0.a;
			var newSub = A4($elm$core$Array$setHelp, shift - $elm$core$Array$shiftStep, index, value, subTree);
			return A3(
				$elm$core$Elm$JsArray$unsafeSet,
				pos,
				$elm$core$Array$SubTree(newSub),
				tree);
		} else {
			var values = _v0.a;
			var newLeaf = A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, values);
			return A3(
				$elm$core$Elm$JsArray$unsafeSet,
				pos,
				$elm$core$Array$Leaf(newLeaf),
				tree);
		}
	});
var $elm$core$Array$set = F3(
	function (index, value, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? array : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			tree,
			A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, tail)) : A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			A4($elm$core$Array$setHelp, startShift, index, value, tree),
			tail));
	});
var $author$project$Form$Response = function (a) {
	return {$: 2, a: a};
};
var $carwow$elm_slider$DoubleSlider$fetchHighValue = function (_v0) {
	var slider = _v0;
	var highValueAttributes = slider.g;
	return highValueAttributes.c;
};
var $carwow$elm_slider$DoubleSlider$fetchLowValue = function (_v0) {
	var slider = _v0;
	var lowValueAttributes = slider.i;
	return lowValueAttributes.c;
};
var $carwow$elm_slider$SingleSlider$fetchValue = function (_v0) {
	var slider = _v0;
	var valueAttributes = slider.r;
	return valueAttributes.c;
};
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(0),
				entries));
	});
var $elm$core$List$singleton = function (value) {
	return _List_fromArray(
		[value]);
};
var $author$project$Form$httpPostFieldBodyPart = function (myField) {
	switch (myField.$) {
		case 0:
			var model = myField.a;
			return $elm$core$List$singleton(
				A2($elm$http$Http$stringPart, model.j, model.c));
		case 1:
			var model = myField.a;
			return $elm$core$List$singleton(
				A2($elm$http$Http$stringPart, model.j, model.c));
		case 2:
			var model = myField.a;
			return A2(
				$elm$core$List$cons,
				A2(
					$elm$http$Http$stringPart,
					model.j + 'Min',
					$elm$core$String$fromFloat(
						$carwow$elm_slider$DoubleSlider$fetchLowValue(model.c))),
				$elm$core$List$singleton(
					A2(
						$elm$http$Http$stringPart,
						model.j + 'Max',
						$elm$core$String$fromFloat(
							$carwow$elm_slider$DoubleSlider$fetchHighValue(model.c)))));
		case 3:
			var model = myField.a;
			return $elm$core$List$singleton(
				A2(
					$elm$http$Http$stringPart,
					model.j,
					$elm$core$String$fromFloat(
						$carwow$elm_slider$SingleSlider$fetchValue(model.c))));
		case 4:
			var model = myField.a;
			return model.c ? $elm$core$List$singleton(
				A2($elm$http$Http$stringPart, model.j, 'True')) : $elm$core$List$singleton(
				A2($elm$http$Http$stringPart, model.j, 'False'));
		case 5:
			var model = myField.a;
			return $elm$core$List$singleton(
				A2(
					$elm$http$Http$stringPart,
					model.j,
					$elm$core$String$fromInt(model.c)));
		default:
			var label = myField.a.j;
			var items = myField.a.a2;
			var state = myField.a.bo;
			var placeholder = myField.a.bK;
			return $elm$core$List$singleton(
				A2(
					$elm$http$Http$stringPart,
					label,
					A2(
						$elm$json$Json$Encode$encode,
						0,
						A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, items))));
	}
};
var $author$project$Form$submit = function (myForm) {
	return $elm$http$Http$post(
		{
			eE: $elm$http$Http$multipartBody(
				$elm$core$List$concat(
					A2(
						$elm$core$List$append,
						A2(
							$elm$core$List$map,
							$author$project$Form$httpPostFieldBodyPart,
							$elm$core$Array$toList(myForm.P)),
						A2(
							$elm$core$List$map,
							function (_v0) {
								var key = _v0.a;
								var val = _v0.b;
								return $elm$core$List$singleton(
									A2($elm$http$Http$stringPart, key, val));
							},
							myForm.dV)))),
			eT: A2($elm$http$Http$expectJson, $author$project$Form$Response, myForm.dH),
			f2: myForm.f2
		});
};
var $author$project$Form$MultiInputMsg = function (a) {
	return {$: 7, a: a};
};
var $author$project$Form$Number = function (a) {
	return {$: 5, a: a};
};
var $elm$core$Task$onError = _Scheduler_onError;
var $elm$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return $elm$core$Task$command(
			A2(
				$elm$core$Task$onError,
				A2(
					$elm$core$Basics$composeL,
					A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
					$elm$core$Result$Err),
				A2(
					$elm$core$Task$andThen,
					A2(
						$elm$core$Basics$composeL,
						A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
						$elm$core$Result$Ok),
					task)));
	});
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$Set$Set_elm_builtin = $elm$core$Basics$identity;
var $elm$core$Set$empty = $elm$core$Dict$empty;
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0;
		return A3($elm$core$Dict$insert, key, 0, dict);
	});
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (!_v0.$) {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0;
		return A2($elm$core$Dict$member, key, dict);
	});
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $larribas$elm_multi_input$MultiInput$dropDuplicates = function (list) {
	var step = F2(
		function (next, _v0) {
			var set = _v0.a;
			var acc = _v0.b;
			return A2($elm$core$Set$member, next, set) ? _Utils_Tuple2(set, acc) : _Utils_Tuple2(
				A2($elm$core$Set$insert, next, set),
				A2($elm$core$List$cons, next, acc));
		});
	return $elm$core$List$reverse(
		A3(
			$elm$core$List$foldl,
			step,
			_Utils_Tuple2($elm$core$Set$empty, _List_Nil),
			list).b);
};
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm$browser$Browser$Dom$focus = _Browser_call('focus');
var $elm$regex$Regex$Match = F4(
	function (match, index, number, submatches) {
		return {g7: index, hl: match, hq: number, hW: submatches};
	});
var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
var $elm$regex$Regex$fromString = function (string) {
	return A2(
		$elm$regex$Regex$fromStringWith,
		{gD: false, ho: false},
		string);
};
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$regex$Regex$never = _Regex_never;
var $elm$regex$Regex$split = _Regex_splitAtMost(_Regex_infinity);
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $larribas$elm_multi_input$MultiInput$Backspace = 1;
var $larribas$elm_multi_input$MultiInput$Other = 2;
var $larribas$elm_multi_input$MultiInput$Tab = 0;
var $larribas$elm_multi_input$MultiInput$toSpecialKey = function (keyCode) {
	switch (keyCode) {
		case 8:
			return 1;
		case 9:
			return 0;
		default:
			return 2;
	}
};
var $larribas$elm_multi_input$MultiInput$update = F4(
	function (conf, msg, state, items) {
		var noChanges = _Utils_Tuple3(state, items, $elm$core$Platform$Cmd$none);
		var nextItemIsEmpty = state.J === '';
		switch (msg.$) {
			case 0:
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{ah: false}),
					items,
					state.ah ? A2(
						$elm$core$Task$attempt,
						function (_v1) {
							return $larribas$elm_multi_input$MultiInput$FocusElement;
						},
						$elm$browser$Browser$Dom$focus(state.e8)) : $elm$core$Platform$Cmd$none);
			case 2:
				var key = msg.a;
				var _v2 = $larribas$elm_multi_input$MultiInput$toSpecialKey(key);
				switch (_v2) {
					case 0:
						return nextItemIsEmpty ? noChanges : _Utils_Tuple3(
							_Utils_update(
								state,
								{ah: true, J: ''}),
							$larribas$elm_multi_input$MultiInput$dropDuplicates(
								_Utils_ap(
									items,
									_List_fromArray(
										[state.J]))),
							$elm$core$Platform$Cmd$none);
					case 1:
						if (nextItemIsEmpty) {
							var _v3 = $elm$core$List$head(
								$elm$core$List$reverse(items));
							if (!_v3.$) {
								var previousEmail = _v3.a;
								return _Utils_Tuple3(
									_Utils_update(
										state,
										{ah: true, J: previousEmail}),
									A2(
										$elm$core$List$take,
										$elm$core$List$length(items) - 1,
										items),
									$elm$core$Platform$Cmd$none);
							} else {
								return noChanges;
							}
						} else {
							return noChanges;
						}
					default:
						return noChanges;
				}
			case 4:
				var text = msg.a;
				var separatorRegex = A2(
					$elm$core$Maybe$withDefault,
					$elm$regex$Regex$never,
					$elm$regex$Regex$fromString(
						A2($elm$core$String$join, '|', conf.hK)));
				var allItems = A2($elm$regex$Regex$split, separatorRegex, text);
				var _v4 = _Utils_Tuple2(
					A2(
						$elm$core$List$filter,
						A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$String$isEmpty),
						A2(
							$elm$core$List$take,
							$elm$core$List$length(allItems) - 1,
							allItems)),
					A2(
						$elm$core$Maybe$withDefault,
						'',
						$elm$core$List$head(
							A2(
								$elm$core$List$drop,
								$elm$core$List$length(allItems) - 1,
								allItems))));
				var newItems = _v4.a;
				var nextItem = _v4.b;
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{ah: true, J: nextItem}),
					$larribas$elm_multi_input$MultiInput$dropDuplicates(
						_Utils_ap(items, newItems)),
					$elm$core$Platform$Cmd$none);
			case 3:
				var item = msg.a;
				return _Utils_Tuple3(
					state,
					A2(
						$elm$core$List$filter,
						$elm$core$Basics$neq(item),
						items),
					$elm$core$Platform$Cmd$none);
			default:
				var item = msg.a;
				return (item !== '') ? _Utils_Tuple3(
					_Utils_update(
						state,
						{J: ''}),
					$larribas$elm_multi_input$MultiInput$dropDuplicates(
						_Utils_ap(
							items,
							_List_fromArray(
								[item]))),
					$elm$core$Platform$Cmd$none) : noChanges;
		}
	});
var $carwow$elm_slider$SingleSlider$update = F2(
	function (value, _v0) {
		var slider = _v0;
		var valueAttributes = slider.r;
		return {
			e: slider.e,
			r: _Utils_update(
				valueAttributes,
				{c: value})
		};
	});
var $carwow$elm_slider$DoubleSlider$updateHighValue = F2(
	function (value, _v0) {
		var slider = _v0;
		var lowValueAttributes = slider.i;
		var highValueAttributes = slider.g;
		var commonAttributes = slider.e;
		return {
			e: commonAttributes,
			p: slider.p,
			g: _Utils_update(
				highValueAttributes,
				{
					c: A2($elm$core$Basics$max, value, lowValueAttributes.c - commonAttributes.fQ)
				}),
			i: lowValueAttributes,
			n: slider.n
		};
	});
var $carwow$elm_slider$DoubleSlider$updateLowValue = F2(
	function (value, _v0) {
		var slider = _v0;
		var lowValueAttributes = slider.i;
		var highValueAttributes = slider.g;
		var commonAttributes = slider.e;
		return {
			e: slider.e,
			p: slider.p,
			g: highValueAttributes,
			i: _Utils_update(
				lowValueAttributes,
				{
					c: A2($elm$core$Basics$min, value, slider.g.c - commonAttributes.fQ)
				}),
			n: slider.n
		};
	});
var $author$project$Form$updateField = F2(
	function (msg, myField) {
		var _v0 = _Utils_Tuple2(myField, msg);
		_v0$8:
		while (true) {
			switch (_v0.a.$) {
				case 0:
					if (!_v0.b.$) {
						var model = _v0.a.a;
						var newVal = _v0.b.a;
						return _Utils_Tuple2(
							$author$project$Form$Text(
								_Utils_update(
									model,
									{c: newVal})),
							$elm$core$Platform$Cmd$none);
					} else {
						break _v0$8;
					}
				case 1:
					if (_v0.b.$ === 1) {
						var model = _v0.a.a;
						var newVal = _v0.b.a;
						return _Utils_Tuple2(
							$author$project$Form$Password(
								_Utils_update(
									model,
									{c: newVal})),
							$elm$core$Platform$Cmd$none);
					} else {
						break _v0$8;
					}
				case 2:
					switch (_v0.b.$) {
						case 2:
							var model = _v0.a.a;
							var newLowVal = _v0.b.a;
							return _Utils_Tuple2(
								$author$project$Form$DoubleSlider(
									_Utils_update(
										model,
										{
											c: A2($carwow$elm_slider$DoubleSlider$updateLowValue, newLowVal, model.c)
										})),
								$elm$core$Platform$Cmd$none);
						case 3:
							var model = _v0.a.a;
							var newHighVal = _v0.b.a;
							return _Utils_Tuple2(
								$author$project$Form$DoubleSlider(
									_Utils_update(
										model,
										{
											c: A2($carwow$elm_slider$DoubleSlider$updateHighValue, newHighVal, model.c)
										})),
								$elm$core$Platform$Cmd$none);
						default:
							break _v0$8;
					}
				case 3:
					if (_v0.b.$ === 4) {
						var model = _v0.a.a;
						var newVal = _v0.b.a;
						return _Utils_Tuple2(
							$author$project$Form$SingleSlider(
								_Utils_update(
									model,
									{
										c: A2($carwow$elm_slider$SingleSlider$update, newVal, model.c)
									})),
							$elm$core$Platform$Cmd$none);
					} else {
						break _v0$8;
					}
				case 4:
					if (_v0.b.$ === 5) {
						var model = _v0.a.a;
						var newVal = _v0.b.a;
						return _Utils_Tuple2(
							$author$project$Form$Checkbox(
								_Utils_update(
									model,
									{c: newVal})),
							$elm$core$Platform$Cmd$none);
					} else {
						break _v0$8;
					}
				case 5:
					if (_v0.b.$ === 6) {
						var model = _v0.a.a;
						var newVal = _v0.b.a;
						return _Utils_Tuple2(
							$author$project$Form$Number(
								_Utils_update(
									model,
									{c: newVal})),
							$elm$core$Platform$Cmd$none);
					} else {
						break _v0$8;
					}
				default:
					if (_v0.b.$ === 7) {
						var model = _v0.a.a;
						var mimsg = _v0.b.a;
						var _v1 = A4(
							$larribas$elm_multi_input$MultiInput$update,
							{
								hK: _List_fromArray(
									['\n', '\t', ' ', ','])
							},
							mimsg,
							model.bo,
							model.a2);
						var nextState = _v1.a;
						var nextItems = _v1.b;
						var nextCmd = _v1.c;
						return _Utils_Tuple2(
							$author$project$Form$MultiInput(
								_Utils_update(
									model,
									{a2: nextItems, bo: nextState})),
							A2($elm$core$Platform$Cmd$map, $author$project$Form$MultiInputMsg, nextCmd));
					} else {
						break _v0$8;
					}
			}
		}
		return _Utils_Tuple2(myField, $elm$core$Platform$Cmd$none);
	});
var $author$project$Form$update = F2(
	function (msg, myForm) {
		switch (msg.$) {
			case 0:
				var id = msg.a;
				var inputMsg = msg.b;
				var maybeMyField = A2($elm$core$Array$get, id, myForm.P);
				if (!maybeMyField.$) {
					var myField = maybeMyField.a;
					var _v2 = A2($author$project$Form$updateField, inputMsg, myField);
					var myNewField = _v2.a;
					var fieldCmd = _v2.b;
					var myNewForm = _Utils_update(
						myForm,
						{
							P: A3($elm$core$Array$set, id, myNewField, myForm.P)
						});
					var submitionCmd = function () {
						var _v3 = myForm.dh;
						if (_v3.$ === 1) {
							return $author$project$Form$submit(myNewForm);
						} else {
							return $elm$core$Platform$Cmd$none;
						}
					}();
					var cmd = $elm$core$Platform$Cmd$batch(
						_List_fromArray(
							[
								A2(
								$elm$core$Platform$Cmd$map,
								$author$project$Form$Input(id),
								fieldCmd),
								submitionCmd
							]));
					return _Utils_Tuple3(myNewForm, cmd, $elm$core$Maybe$Nothing);
				} else {
					return _Utils_Tuple3(myForm, $elm$core$Platform$Cmd$none, $elm$core$Maybe$Nothing);
				}
			case 1:
				return _Utils_Tuple3(
					myForm,
					$author$project$Form$submit(myForm),
					$elm$core$Maybe$Nothing);
			default:
				var result = msg.a;
				return _Utils_Tuple3(
					myForm,
					$elm$core$Platform$Cmd$none,
					$elm$core$Maybe$Just(result));
		}
	});
var $billstclair$elm_geolocation$PortFunnel$Geolocation$watchChanges = $billstclair$elm_geolocation$PortFunnel$Geolocation$SendChanges;
var $author$project$Main$update = F2(
	function (msg, model) {
		var _v0 = _Utils_Tuple3(model.a, model.l, msg);
		_v0$76:
		while (true) {
			if (_v0.a.$ === 1) {
				switch (_v0.c.$) {
					case 1:
						var amodel = _v0.a.a;
						var url = _v0.c.a;
						return _Utils_Tuple2(
							model,
							A2(
								$elm$browser$Browser$Navigation$pushUrl,
								model.I,
								$elm$url$Url$toString(url)));
					case 3:
						var amodel = _v0.a.a;
						var url = _v0.c.a;
						var newRoute = $author$project$Main$urlToRoute(url);
						switch (newRoute.$) {
							case 7:
								var a = newRoute.a;
								var b = newRoute.b;
								var accountRetrievalForm = $elm$core$Maybe$Just(
									A2($author$project$Main$requestAccountRetrievalForm, a, b));
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											a: $author$project$Main$Anonymous(
												_Utils_update(
													amodel,
													{V: accountRetrievalForm})),
											l: newRoute
										}),
									$elm$core$Platform$Cmd$none);
							case 8:
								var a = newRoute.a;
								var b = newRoute.b;
								var accountConfirmationForm = $elm$core$Maybe$Just(
									A2($author$project$Main$requestAccountConfirmationForm, a, b));
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											a: $author$project$Main$Anonymous(
												_Utils_update(
													amodel,
													{U: accountConfirmationForm})),
											l: newRoute
										}),
									$elm$core$Platform$Cmd$none);
							default:
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{l: newRoute}),
									$elm$core$Platform$Cmd$none);
						}
					case 6:
						if (_v0.b.$ === 1) {
							var amodel = _v0.a.a;
							var _v5 = _v0.b;
							var pseudo = _v0.c.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										a: $author$project$Main$Anonymous(
											_Utils_update(
												amodel,
												{aF: pseudo}))
									}),
								$elm$core$Platform$Cmd$none);
						} else {
							break _v0$76;
						}
					case 7:
						if (_v0.b.$ === 1) {
							var amodel = _v0.a.a;
							var _v6 = _v0.b;
							var password = _v0.c.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										a: $author$project$Main$Anonymous(
											_Utils_update(
												amodel,
												{aE: password}))
									}),
								$elm$core$Platform$Cmd$none);
						} else {
							break _v0$76;
						}
					case 8:
						if (_v0.b.$ === 1) {
							var amodel = _v0.a.a;
							var _v7 = _v0.b;
							var _v8 = _v0.c;
							return _Utils_Tuple2(
								model,
								$author$project$Main$submitSignin(amodel));
						} else {
							break _v0$76;
						}
					case 9:
						var amodel = _v0.a.a;
						var result = _v0.c.a;
						var _v9 = $author$project$Main$toWebResultDataAlert(result);
						switch (_v9.$) {
							case 0:
								var pseudo = _v9.a.fB;
								var picture = _v9.a.fs;
								var alert = _v9.b;
								return _Utils_Tuple2(
									A2(
										$author$project$Alert$put,
										alert,
										_Utils_update(
											model,
											{
												a: A3($author$project$Main$loggedAccessInit, model.l, pseudo, picture).a
											})),
									A2($elm$browser$Browser$Navigation$pushUrl, model.I, '/'));
							case 1:
								var alert = _v9.a;
								return _Utils_Tuple2(
									A2($author$project$Alert$put, alert, model),
									$elm$core$Platform$Cmd$none);
							default:
								var error = _v9.a;
								return _Utils_Tuple2(
									A2(
										A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
										$author$project$Alert$serverNotReachedAlert(error),
										model),
									$elm$core$Platform$Cmd$none);
						}
					case 10:
						if (_v0.b.$ === 2) {
							var amodel = _v0.a.a;
							var _v10 = _v0.b;
							var pseudo = _v0.c.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										a: $author$project$Main$Anonymous(
											_Utils_update(
												amodel,
												{aL: pseudo}))
									}),
								$elm$core$Platform$Cmd$none);
						} else {
							break _v0$76;
						}
					case 11:
						if (_v0.b.$ === 2) {
							var amodel = _v0.a.a;
							var _v11 = _v0.b;
							var lastname = _v0.c.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										a: $author$project$Main$Anonymous(
											_Utils_update(
												amodel,
												{aJ: lastname}))
									}),
								$elm$core$Platform$Cmd$none);
						} else {
							break _v0$76;
						}
					case 12:
						if (_v0.b.$ === 2) {
							var amodel = _v0.a.a;
							var _v12 = _v0.b;
							var firstname = _v0.c.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										a: $author$project$Main$Anonymous(
											_Utils_update(
												amodel,
												{aI: firstname}))
									}),
								$elm$core$Platform$Cmd$none);
						} else {
							break _v0$76;
						}
					case 13:
						if (_v0.b.$ === 2) {
							var amodel = _v0.a.a;
							var _v13 = _v0.b;
							var email = _v0.c.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										a: $author$project$Main$Anonymous(
											_Utils_update(
												amodel,
												{aH: email}))
									}),
								$elm$core$Platform$Cmd$none);
						} else {
							break _v0$76;
						}
					case 14:
						if (_v0.b.$ === 2) {
							var amodel = _v0.a.a;
							var _v14 = _v0.b;
							var password = _v0.c.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										a: $author$project$Main$Anonymous(
											_Utils_update(
												amodel,
												{aK: password}))
									}),
								$elm$core$Platform$Cmd$none);
						} else {
							break _v0$76;
						}
					case 15:
						if (_v0.b.$ === 2) {
							var amodel = _v0.a.a;
							var _v15 = _v0.b;
							var pwConfirmation = _v0.c.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										a: $author$project$Main$Anonymous(
											_Utils_update(
												amodel,
												{aG: pwConfirmation}))
									}),
								$elm$core$Platform$Cmd$none);
						} else {
							break _v0$76;
						}
					case 16:
						if (_v0.b.$ === 2) {
							var amodel = _v0.a.a;
							var _v16 = _v0.b;
							var _v17 = _v0.c;
							return _Utils_Tuple2(
								model,
								$author$project$Main$submitSignup(amodel));
						} else {
							break _v0$76;
						}
					case 17:
						var amodel = _v0.a.a;
						var result = _v0.c.a;
						if (!result.$) {
							if (!result.a.$) {
								var message = result.a.a;
								return _Utils_Tuple2(
									A2(
										A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
										$author$project$Alert$successAlert(message),
										model),
									A2($elm$browser$Browser$Navigation$pushUrl, model.I, '/signin'));
							} else {
								var message = result.a.a;
								return _Utils_Tuple2(
									A2(
										A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
										$author$project$Alert$invalidImputAlert(message),
										model),
									$elm$core$Platform$Cmd$none);
							}
						} else {
							var error = result.a;
							return _Utils_Tuple2(
								A2(
									A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
									$author$project$Alert$serverNotReachedAlert(error),
									model),
								$elm$core$Platform$Cmd$none);
						}
					case 25:
						if (_v0.b.$ === 6) {
							var amodel = _v0.a.a;
							var _v25 = _v0.b;
							var email = _v0.c.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										a: $author$project$Main$Anonymous(
											_Utils_update(
												amodel,
												{aA: email}))
									}),
								$elm$core$Platform$Cmd$none);
						} else {
							break _v0$76;
						}
					case 26:
						if (_v0.b.$ === 6) {
							var amodel = _v0.a.a;
							var _v26 = _v0.b;
							var _v27 = _v0.c;
							return _Utils_Tuple2(
								model,
								$author$project$Main$submitRetreivalRequest(amodel));
						} else {
							break _v0$76;
						}
					case 27:
						var amodel = _v0.a.a;
						var result = _v0.c.a;
						if (!result.$) {
							if (!result.a.$) {
								var message = result.a.a;
								return _Utils_Tuple2(
									A2(
										A2(
											$elm$core$Basics$composeL,
											A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
											$author$project$Alert$successAlert),
										message,
										model),
									A2($elm$browser$Browser$Navigation$pushUrl, model.I, '/signin'));
							} else {
								var message = result.a.a;
								return _Utils_Tuple2(
									A2(
										A2(
											$elm$core$Basics$composeL,
											A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
											$author$project$Alert$invalidImputAlert),
										message,
										model),
									$elm$core$Platform$Cmd$none);
							}
						} else {
							var error = result.a;
							return _Utils_Tuple2(
								A2(
									A2(
										$elm$core$Basics$composeL,
										A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
										$author$project$Alert$serverNotReachedAlert),
									error,
									model),
								$elm$core$Platform$Cmd$none);
						}
					case 69:
						var amodel = _v0.a.a;
						var formMsg = _v0.c.a;
						var _v50 = amodel.V;
						if (_v50.$ === 1) {
							return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
						} else {
							var accountRetrievalForm = _v50.a;
							var _v51 = A2($author$project$Form$update, formMsg, accountRetrievalForm);
							var newForm = _v51.a;
							var formCmd = _v51.b;
							var response = _v51.c;
							if (!response.$) {
								var result = response.a;
								return A3(
									$author$project$Main$retreiveAccountResultHandler,
									result,
									_Utils_update(
										model,
										{
											a: $author$project$Main$Anonymous(
												_Utils_update(
													amodel,
													{
														V: $elm$core$Maybe$Just(newForm)
													}))
										}),
									formCmd);
							} else {
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											a: $author$project$Main$Anonymous(
												_Utils_update(
													amodel,
													{
														V: $elm$core$Maybe$Just(newForm)
													}))
										}),
									A2($elm$core$Platform$Cmd$map, $author$project$Main$AccountRetrievalForm, formCmd));
							}
						}
					case 70:
						var amodel = _v0.a.a;
						var formMsg = _v0.c.a;
						var _v53 = amodel.U;
						if (_v53.$ === 1) {
							return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
						} else {
							var accountConfirmationForm = _v53.a;
							var _v54 = A2($author$project$Form$update, formMsg, accountConfirmationForm);
							var newForm = _v54.a;
							var formCmd = _v54.b;
							var response = _v54.c;
							if (!response.$) {
								var result = response.a;
								return A3(
									$author$project$Main$confirmAccountResultHandler,
									result,
									_Utils_update(
										model,
										{
											a: $author$project$Main$Anonymous(
												_Utils_update(
													amodel,
													{
														U: $elm$core$Maybe$Just(newForm)
													}))
										}),
									formCmd);
							} else {
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											a: $author$project$Main$Anonymous(
												_Utils_update(
													amodel,
													{
														U: $elm$core$Maybe$Just(newForm)
													}))
										}),
									A2($elm$core$Platform$Cmd$map, $author$project$Main$AccountConfirmationForm, formCmd));
							}
						}
					default:
						break _v0$76;
				}
			} else {
				switch (_v0.c.$) {
					case 1:
						var url = _v0.c.a;
						return _Utils_Tuple2(
							model,
							A2(
								$elm$browser$Browser$Navigation$pushUrl,
								model.I,
								$elm$url$Url$toString(url)));
					case 2:
						var href = _v0.c.a;
						return _Utils_Tuple2(
							model,
							$elm$browser$Browser$Navigation$load(href));
					case 3:
						var lmodel = _v0.a.a;
						var url = _v0.c.a;
						var newRoute = $author$project$Main$urlToRoute(url);
						switch (newRoute.$) {
							case 0:
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{l: newRoute}),
									$author$project$Feed$requestFeedInit($author$project$Main$ReceiveFeedInit));
							case 3:
								var id = newRoute.a;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{l: newRoute}),
									A2($author$project$Main$requestUserDetails, id, $author$project$Main$ReceiveUserDetails));
							case 4:
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{l: newRoute}),
									$author$project$Main$requestNotifs($author$project$Main$ReceiveNotifS));
							case 5:
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{l: newRoute}),
									$author$project$Main$requestChats($author$project$Main$ReceiveChats));
							case 9:
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{l: newRoute}),
									$author$project$Main$requestCurrentSettings($author$project$Main$ReceiveCurrentSettings));
							case 11:
								return _Utils_Tuple2(model, $author$project$Main$requestSignout);
							default:
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{l: newRoute}),
									$elm$core$Platform$Cmd$none);
						}
					case 4:
						var lmodel = _v0.a.a;
						var id = _v0.c.a;
						return _Utils_Tuple2(
							model,
							A2(
								$elm$browser$Browser$Navigation$pushUrl,
								model.I,
								'/user/' + $elm$core$String$fromInt(id)));
					case 5:
						switch (_v0.b.$) {
							case 4:
								var lmodel = _v0.a.a;
								var _v3 = _v0.b;
								return _Utils_Tuple2(
									model,
									$elm$core$Platform$Cmd$batch(
										_List_fromArray(
											[
												$author$project$Main$requestNotifs($author$project$Main$ReceiveNotifS),
												$author$project$Main$requestUnreadNotifsAmount
											])));
							case 5:
								var lmodel = _v0.a.a;
								var _v4 = _v0.b;
								return _Utils_Tuple2(
									model,
									$elm$core$Platform$Cmd$batch(
										_List_fromArray(
											[
												$author$project$Main$requestChats($author$project$Main$ReceiveChats),
												A2(
												$elm$core$Maybe$withDefault,
												$elm$core$Platform$Cmd$none,
												A2(
													$elm$core$Maybe$map,
													function (lmd) {
														return A2($author$project$Main$requestDiscution, lmd.e8, $author$project$Main$ReceiveDiscutionRefresh);
													},
													lmodel.O)),
												$author$project$Main$requestUnreadNotifsAmount
											])));
							default:
								var lmodel = _v0.a.a;
								return _Utils_Tuple2(model, $author$project$Main$requestUnreadNotifsAmount);
						}
					case 20:
						if (_v0.b.$ === 9) {
							var lmodel = _v0.a.a;
							var _v19 = _v0.b;
							var oldpw = _v0.c.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										a: $author$project$Main$Logged(
											_Utils_update(
												lmodel,
												{bO: oldpw}))
									}),
								$elm$core$Platform$Cmd$none);
						} else {
							break _v0$76;
						}
					case 21:
						if (_v0.b.$ === 9) {
							var lmodel = _v0.a.a;
							var _v20 = _v0.b;
							var newpw = _v0.c.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										a: $author$project$Main$Logged(
											_Utils_update(
												lmodel,
												{bN: newpw}))
									}),
								$elm$core$Platform$Cmd$none);
						} else {
							break _v0$76;
						}
					case 22:
						if (_v0.b.$ === 9) {
							var lmodel = _v0.a.a;
							var _v21 = _v0.b;
							var confirmpw = _v0.c.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										a: $author$project$Main$Logged(
											_Utils_update(
												lmodel,
												{bM: confirmpw}))
									}),
								$elm$core$Platform$Cmd$none);
						} else {
							break _v0$76;
						}
					case 23:
						if (_v0.b.$ === 9) {
							var lmodel = _v0.a.a;
							var _v22 = _v0.b;
							var _v23 = _v0.c;
							return _Utils_Tuple2(
								model,
								$author$project$Main$submitPwUpdate(lmodel));
						} else {
							break _v0$76;
						}
					case 24:
						var lmodel = _v0.a.a;
						var result = _v0.c.a;
						if (!result.$) {
							if (!result.a.$) {
								var message = result.a.a;
								return _Utils_Tuple2(
									A2(
										A2(
											$elm$core$Basics$composeL,
											A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
											$author$project$Alert$successAlert),
										message,
										model),
									$elm$core$Platform$Cmd$none);
							} else {
								var message = result.a.a;
								return _Utils_Tuple2(
									A2(
										A2(
											$elm$core$Basics$composeL,
											A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
											$author$project$Alert$invalidImputAlert),
										message,
										model),
									$elm$core$Platform$Cmd$none);
							}
						} else {
							var error = result.a;
							return _Utils_Tuple2(
								A2(
									A2(
										$elm$core$Basics$composeL,
										A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
										$author$project$Alert$serverNotReachedAlert),
									error,
									model),
								$elm$core$Platform$Cmd$none);
						}
					case 28:
						if (_v0.b.$ === 9) {
							var lmodel = _v0.a.a;
							var _v29 = _v0.b;
							var pseudo = _v0.c.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										a: $author$project$Main$Logged(
											_Utils_update(
												lmodel,
												{bk: pseudo}))
									}),
								$elm$core$Platform$Cmd$none);
						} else {
							break _v0$76;
						}
					case 30:
						if (_v0.b.$ === 9) {
							var lmodel = _v0.a.a;
							var _v30 = _v0.b;
							var lastname = _v0.c.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										a: $author$project$Main$Logged(
											_Utils_update(
												lmodel,
												{bi: lastname}))
									}),
								$elm$core$Platform$Cmd$none);
						} else {
							break _v0$76;
						}
					case 29:
						if (_v0.b.$ === 9) {
							var lmodel = _v0.a.a;
							var _v31 = _v0.b;
							var firstname = _v0.c.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										a: $author$project$Main$Logged(
											_Utils_update(
												lmodel,
												{bg: firstname}))
									}),
								$elm$core$Platform$Cmd$none);
						} else {
							break _v0$76;
						}
					case 31:
						if (_v0.b.$ === 9) {
							var lmodel = _v0.a.a;
							var _v32 = _v0.b;
							var email = _v0.c.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										a: $author$project$Main$Logged(
											_Utils_update(
												lmodel,
												{bf: email}))
									}),
								$elm$core$Platform$Cmd$none);
						} else {
							break _v0$76;
						}
					case 32:
						if (_v0.b.$ === 9) {
							var lmodel = _v0.a.a;
							var _v33 = _v0.b;
							var selection = _v0.c.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										a: $author$project$Main$Logged(
											_Utils_update(
												lmodel,
												{bh: selection}))
									}),
								$elm$core$Platform$Cmd$none);
						} else {
							break _v0$76;
						}
					case 33:
						if (_v0.b.$ === 9) {
							var lmodel = _v0.a.a;
							var _v34 = _v0.b;
							var selection = _v0.c.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										a: $author$project$Main$Logged(
											_Utils_update(
												lmodel,
												{bj: selection}))
									}),
								$elm$core$Platform$Cmd$none);
						} else {
							break _v0$76;
						}
					case 36:
						if (_v0.b.$ === 9) {
							var lmodel = _v0.a.a;
							var _v35 = _v0.b;
							var selection = _v0.c.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										a: $author$project$Main$Logged(
											_Utils_update(
												lmodel,
												{bc: selection}))
									}),
								$elm$core$Platform$Cmd$none);
						} else {
							break _v0$76;
						}
					case 37:
						if (_v0.b.$ === 9) {
							var lmodel = _v0.a.a;
							var _v36 = _v0.b;
							var selection = _v0.c.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										a: $author$project$Main$Logged(
											_Utils_update(
												lmodel,
												{bd: selection}))
									}),
								$elm$core$Platform$Cmd$none);
						} else {
							break _v0$76;
						}
					case 38:
						if (_v0.b.$ === 9) {
							var lmodel = _v0.a.a;
							var _v37 = _v0.b;
							var selection = _v0.c.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										a: $author$project$Main$Logged(
											_Utils_update(
												lmodel,
												{be: selection}))
									}),
								$elm$core$Platform$Cmd$none);
						} else {
							break _v0$76;
						}
					case 34:
						if (_v0.b.$ === 9) {
							var lmodel = _v0.a.a;
							var _v38 = _v0.b;
							var bio = _v0.c.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										a: $author$project$Main$Logged(
											_Utils_update(
												lmodel,
												{ba: bio}))
									}),
								$elm$core$Platform$Cmd$none);
						} else {
							break _v0$76;
						}
					case 35:
						if (_v0.b.$ === 9) {
							var lmodel = _v0.a.a;
							var _v39 = _v0.b;
							var multInputMsg = _v0.c.a;
							var _v40 = A4(
								$larribas$elm_multi_input$MultiInput$update,
								{
									hK: _List_fromArray(
										['\n', '\t', ' ', ','])
								},
								multInputMsg,
								lmodel.bl,
								lmodel.aD);
							var nextState = _v40.a;
							var nextItems = _v40.b;
							var nextCmd = _v40.c;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										a: $author$project$Main$Logged(
											_Utils_update(
												lmodel,
												{aD: nextItems, bl: nextState}))
									}),
								A2($elm$core$Platform$Cmd$map, $author$project$Main$InputSettingsTags, nextCmd));
						} else {
							break _v0$76;
						}
					case 39:
						if (_v0.b.$ === 9) {
							var lmodel = _v0.a.a;
							var _v41 = _v0.b;
							var latitudeStr = _v0.c.a;
							return A2(
								$elm$core$Maybe$withDefault,
								_Utils_Tuple2(
									A2(
										A2(
											$elm$core$Basics$composeL,
											A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
											$author$project$Alert$invalidImputAlert),
										'The latitude you enter has to be a floating point number!',
										model),
									$elm$core$Platform$Cmd$none),
								A2(
									$elm$core$Maybe$map,
									function (latitude) {
										var _v42 = lmodel.x;
										if (!_v42.$) {
											return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
										} else {
											var longitude = _v42.b;
											return _Utils_Tuple2(
												_Utils_update(
													model,
													{
														a: $author$project$Main$Logged(
															_Utils_update(
																lmodel,
																{
																	x: A2($author$project$Main$GeoAuthRefused, latitude, longitude)
																}))
													}),
												$elm$core$Platform$Cmd$none);
										}
									},
									$elm$core$String$toFloat(latitudeStr)));
						} else {
							break _v0$76;
						}
					case 40:
						if (_v0.b.$ === 9) {
							var lmodel = _v0.a.a;
							var _v43 = _v0.b;
							var longitudeStr = _v0.c.a;
							return A2(
								$elm$core$Maybe$withDefault,
								_Utils_Tuple2(
									A2(
										A2(
											$elm$core$Basics$composeL,
											A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
											$author$project$Alert$invalidImputAlert),
										'The longitude you enter has to be a floating point number!',
										model),
									$elm$core$Platform$Cmd$none),
								A2(
									$elm$core$Maybe$map,
									function (longitude) {
										var _v44 = lmodel.x;
										if (!_v44.$) {
											return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
										} else {
											var latitude = _v44.a;
											return _Utils_Tuple2(
												_Utils_update(
													model,
													{
														a: $author$project$Main$Logged(
															_Utils_update(
																lmodel,
																{
																	x: A2($author$project$Main$GeoAuthRefused, latitude, longitude)
																}))
													}),
												$elm$core$Platform$Cmd$none);
										}
									},
									$elm$core$String$toFloat(longitudeStr)));
						} else {
							break _v0$76;
						}
					case 41:
						if (_v0.b.$ === 9) {
							var lmodel = _v0.a.a;
							var _v45 = _v0.b;
							var newAuth = _v0.c.a;
							var _v46 = lmodel.x;
							if (!_v46.$) {
								return newAuth ? _Utils_Tuple2(model, $elm$core$Platform$Cmd$none) : _Utils_Tuple2(
									_Utils_update(
										model,
										{
											a: $author$project$Main$Logged(
												_Utils_update(
													lmodel,
													{
														x: A2($author$project$Main$GeoAuthRefused, 0, 0)
													}))
										}),
									A2($billstclair$elm_geolocation$PortFunnel$Geolocation$send, $author$project$Main$cmdPort, $billstclair$elm_geolocation$PortFunnel$Geolocation$stopWatching));
							} else {
								return (!newAuth) ? _Utils_Tuple2(model, $elm$core$Platform$Cmd$none) : _Utils_Tuple2(
									_Utils_update(
										model,
										{
											a: $author$project$Main$Logged(
												_Utils_update(
													lmodel,
													{
														x: A2($author$project$Main$GeoAuthGranted, 0, 0)
													}))
										}),
									A2($billstclair$elm_geolocation$PortFunnel$Geolocation$send, $author$project$Main$cmdPort, $billstclair$elm_geolocation$PortFunnel$Geolocation$watchChanges));
							}
						} else {
							break _v0$76;
						}
					case 42:
						if (_v0.b.$ === 9) {
							var lmodel = _v0.a.a;
							var _v47 = _v0.b;
							var _v48 = _v0.c;
							var newLmodel = _Utils_update(
								lmodel,
								{
									bb: A2(
										$elm$core$Maybe$withDefault,
										lmodel.bb,
										A4(
											$elm$core$Maybe$map3,
											$justinmimbs$date$Date$fromCalendarDate,
											A2(
												$elm$core$Maybe$map,
												$elm$core$Tuple$first,
												$author$project$ZipList$current(lmodel.be)),
											A2(
												$elm$core$Maybe$map,
												$elm$core$Tuple$first,
												$author$project$ZipList$current(lmodel.bd)),
											A2(
												$elm$core$Maybe$map,
												$elm$core$Tuple$first,
												$author$project$ZipList$current(lmodel.bc))))
								});
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										a: $author$project$Main$Logged(newLmodel)
									}),
								$author$project$Main$submitSettings(newLmodel));
						} else {
							break _v0$76;
						}
					case 43:
						var lmodel = _v0.a.a;
						var result = _v0.c.a;
						if (!result.$) {
							if (!result.a.$) {
								var message = result.a.a;
								return _Utils_Tuple2(
									A2(
										A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
										$author$project$Alert$successAlert(message),
										model),
									$elm$core$Platform$Cmd$none);
							} else {
								var message = result.a.a;
								return _Utils_Tuple2(
									A2(
										A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
										$author$project$Alert$invalidImputAlert(message),
										model),
									$elm$core$Platform$Cmd$none);
							}
						} else {
							var error = result.a;
							return _Utils_Tuple2(
								A2(
									A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
									$author$project$Alert$serverNotReachedAlert(error),
									model),
								$elm$core$Platform$Cmd$none);
						}
					case 18:
						var lmodel = _v0.a.a;
						var _v56 = _v0.c;
						return _Utils_Tuple2(model, $author$project$Main$requestSignout);
					case 19:
						var lmodel = _v0.a.a;
						var response = _v0.c.a;
						if (!response.$) {
							if (!response.a.$) {
								var message = response.a.a;
								return _Utils_Tuple2(
									A2(
										A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
										$author$project$Alert$successAlert(message),
										_Utils_update(
											model,
											{
												a: $author$project$Main$anonymousAccessInit(model.l).a
											})),
									A2($elm$browser$Browser$Navigation$pushUrl, model.I, '/'));
							} else {
								var message = response.a.a;
								return _Utils_Tuple2(
									A2(
										A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
										$author$project$Alert$invalidImputAlert(message),
										model),
									$elm$core$Platform$Cmd$none);
							}
						} else {
							var error = response.a;
							return _Utils_Tuple2(
								A2(
									A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
									$author$project$Alert$serverNotReachedAlert(error),
									model),
								$elm$core$Platform$Cmd$none);
						}
					case 51:
						var lmodel = _v0.a.a;
						var result = _v0.c.a;
						if (!result.$) {
							var data = result.a.eM;
							var alert = result.a.aa;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										a: $author$project$Main$Logged(
											A2($author$project$Feed$receiveFeedInit, data, lmodel)),
										aa: alert
									}),
								$elm$core$Platform$Cmd$none);
						} else {
							var error = result.a;
							return _Utils_Tuple2(
								A2(
									A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
									$author$project$Alert$serverNotReachedAlert(error),
									model),
								$elm$core$Platform$Cmd$none);
						}
					case 52:
						var lmodel = _v0.a.a;
						var formMsg = _v0.c.a;
						var _v59 = lmodel.gU;
						if (_v59.$ === 1) {
							return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
						} else {
							var currentFiltersForm = _v59.a;
							var _v60 = A2($author$project$Form$update, formMsg, currentFiltersForm);
							var newForm = _v60.a;
							var formCmd = _v60.b;
							var response = _v60.c;
							if (!response.$) {
								if (!response.a.$) {
									var data = response.a.a.eM;
									var alert = response.a.a.aa;
									return _Utils_Tuple2(
										A2(
											$author$project$Alert$put,
											alert,
											_Utils_update(
												model,
												{
													a: $author$project$Main$Logged(
														A3($author$project$Feed$receivePageContentUpdate, true, data, lmodel))
												})),
										A2($elm$core$Platform$Cmd$map, $author$project$Main$FiltersForm, formCmd));
								} else {
									var error = response.a.a;
									return _Utils_Tuple2(
										A2(
											A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
											$author$project$Alert$serverNotReachedAlert(error),
											_Utils_update(
												model,
												{
													a: $author$project$Main$Logged(
														_Utils_update(
															lmodel,
															{
																gU: $elm$core$Maybe$Just(newForm)
															}))
												})),
										A2($elm$core$Platform$Cmd$map, $author$project$Main$FiltersForm, formCmd));
								}
							} else {
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											a: $author$project$Main$Logged(
												_Utils_update(
													lmodel,
													{
														gU: $elm$core$Maybe$Just(newForm)
													}))
										}),
									A2($elm$core$Platform$Cmd$map, $author$project$Main$FiltersForm, formCmd));
							}
						}
					case 53:
						if (!_v0.b.$) {
							var lmodel = _v0.a.a;
							var _v62 = _v0.b;
							var page = _v0.c.a;
							var maybeNewLModelCmdTuple = A3($author$project$Feed$requestFeedPage, page, $author$project$Main$ReceivePageContentUpdate, lmodel);
							if (!maybeNewLModelCmdTuple.$) {
								var _v64 = maybeNewLModelCmdTuple.a;
								var newLModel = _v64.a;
								var pageRequestCmd = _v64.b;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											a: $author$project$Main$Logged(newLModel)
										}),
									pageRequestCmd);
							} else {
								return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
							}
						} else {
							break _v0$76;
						}
					case 54:
						var lmodel = _v0.a.a;
						var result = _v0.c.a;
						if (!result.$) {
							var data = result.a.eM;
							var alert = result.a.aa;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										a: $author$project$Main$Logged(
											A3($author$project$Feed$receivePageContentUpdate, false, data, lmodel)),
										aa: alert
									}),
								$elm$core$Platform$Cmd$none);
						} else {
							var error = result.a;
							return _Utils_Tuple2(
								A2(
									A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
									$author$project$Alert$serverNotReachedAlert(error),
									model),
								$elm$core$Platform$Cmd$none);
						}
					case 55:
						switch (_v0.b.$) {
							case 0:
								var lmodel = _v0.a.a;
								var _v66 = _v0.b;
								var id = _v0.c.a;
								var likeRequest = A2($author$project$Main$requestLike, id, $author$project$Main$ReceiveLikeUpdate);
								return _Utils_Tuple2(model, likeRequest);
							case 3:
								var lmodel = _v0.a.a;
								var urlId = _v0.b.a;
								var id = _v0.c.a;
								if (_Utils_eq(urlId, id)) {
									var likeRequest = A2($author$project$Main$requestLike, id, $author$project$Main$ReceiveLikeUpdate);
									return _Utils_Tuple2(model, likeRequest);
								} else {
									return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
								}
							default:
								break _v0$76;
						}
					case 56:
						var lmodel = _v0.a.a;
						var result = _v0.c.a;
						var _v67 = $author$project$Main$toWebResultDataAlert(result);
						switch (_v67.$) {
							case 0:
								var _v68 = _v67.a;
								var id = _v68.a;
								var newLikeStatus = _v68.b;
								var alert = _v67.b;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											a: $author$project$Main$Logged(
												_Utils_update(
													lmodel,
													{
														eV: A2(
															$elm$core$List$map,
															function (profile) {
																return _Utils_eq(profile.e8, id) ? _Utils_update(
																	profile,
																	{ff: newLikeStatus}) : profile;
															},
															lmodel.eV),
														T: function () {
															var _v69 = lmodel.T;
															if (_v69.$ === 3) {
																var usrd = _v69.a;
																return _Utils_eq(usrd.e8, id) ? $krisajenkins$remotedata$RemoteData$Success(
																	_Utils_update(
																		usrd,
																		{ff: newLikeStatus})) : $krisajenkins$remotedata$RemoteData$Success(usrd);
															} else {
																var smthg = _v69;
																return smthg;
															}
														}()
													})),
											aa: alert
										}),
									$elm$core$Platform$Cmd$none);
							case 1:
								var alert = _v67.a;
								return _Utils_Tuple2(
									A2(
										$author$project$Alert$put,
										alert,
										A2(
											A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
											$author$project$Alert$invalidImputAlert('Sory we can\'t let you like/unlike this persone. It could be because your account isn\'t complete.'),
											model)),
									$elm$core$Platform$Cmd$none);
							default:
								var error = _v67.a;
								return _Utils_Tuple2(
									A2(
										A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
										$author$project$Alert$serverNotReachedAlert(error),
										model),
									$elm$core$Platform$Cmd$none);
						}
					case 57:
						if (_v0.b.$ === 3) {
							var lmodel = _v0.a.a;
							var urlId = _v0.b.a;
							var id = _v0.c.a;
							return _Utils_Tuple2(
								model,
								$author$project$Main$submitBlock(id));
						} else {
							break _v0$76;
						}
					case 59:
						if (_v0.b.$ === 3) {
							var lmodel = _v0.a.a;
							var urlId = _v0.b.a;
							var id = _v0.c.a;
							return _Utils_Tuple2(
								model,
								$author$project$Main$submitReport(id));
						} else {
							break _v0$76;
						}
					case 58:
						var lmodel = _v0.a.a;
						var result = _v0.c.a;
						if (!result.$) {
							if (!result.a.$) {
								var message = result.a.a;
								return _Utils_Tuple2(
									A2(
										A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
										$author$project$Alert$successAlert(message),
										model),
									A2($elm$browser$Browser$Navigation$pushUrl, model.I, '/'));
							} else {
								var message = result.a.a;
								return _Utils_Tuple2(
									A2(
										A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
										$author$project$Alert$invalidImputAlert(message),
										model),
									$elm$core$Platform$Cmd$none);
							}
						} else {
							var error = result.a;
							return _Utils_Tuple2(
								A2(
									A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
									$author$project$Alert$serverNotReachedAlert(error),
									model),
								$elm$core$Platform$Cmd$none);
						}
					case 60:
						var lmodel = _v0.a.a;
						var result = _v0.c.a;
						if (!result.$) {
							if (!result.a.$) {
								var message = result.a.a;
								return _Utils_Tuple2(
									A2(
										A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
										$author$project$Alert$successAlert(message),
										model),
									$elm$core$Platform$Cmd$none);
							} else {
								var message = result.a.a;
								return _Utils_Tuple2(
									A2(
										A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
										$author$project$Alert$invalidImputAlert(message),
										model),
									$elm$core$Platform$Cmd$none);
							}
						} else {
							var error = result.a;
							return _Utils_Tuple2(
								A2(
									A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
									$author$project$Alert$serverNotReachedAlert(error),
									model),
								$elm$core$Platform$Cmd$none);
						}
					case 61:
						var lmodel = _v0.a.a;
						var result = _v0.c.a;
						var _v72 = $author$project$Main$toWebResultDataAlert(result);
						switch (_v72.$) {
							case 0:
								var userDetails = _v72.a;
								var alert = _v72.b;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											a: $author$project$Main$Logged(
												_Utils_update(
													lmodel,
													{
														T: $krisajenkins$remotedata$RemoteData$Success(userDetails)
													})),
											aa: alert
										}),
									$elm$core$Platform$Cmd$none);
							case 1:
								var alert = _v72.a;
								return _Utils_Tuple2(
									A2(
										$author$project$Alert$put,
										alert,
										A2(
											A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
											$author$project$Alert$invalidImputAlert('Sory we can\'t let you access this user\'s infos. It could be because your account isn\'t complete.'),
											_Utils_update(
												model,
												{
													a: $author$project$Main$Logged(
														_Utils_update(
															lmodel,
															{
																T: $krisajenkins$remotedata$RemoteData$Failure('Access denied')
															}))
												}))),
									$elm$core$Platform$Cmd$none);
							default:
								var error = _v72.a;
								return _Utils_Tuple2(
									A2(
										A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
										$author$project$Alert$serverNotReachedAlert(error),
										model),
									$elm$core$Platform$Cmd$none);
						}
					case 62:
						var lmodel = _v0.a.a;
						var result = _v0.c.a;
						return _Utils_Tuple2(
							A3($author$project$Main$unreadNotifsAmountResultHandler, result, lmodel, model),
							$elm$core$Platform$Cmd$none);
					case 63:
						var lmodel = _v0.a.a;
						var result = _v0.c.a;
						var _v73 = $author$project$Main$toWebResultDataAlert(result);
						switch (_v73.$) {
							case 0:
								var newNotifList = _v73.a;
								var alert = _v73.b;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											a: $author$project$Main$Logged(
												_Utils_update(
													lmodel,
													{cK: newNotifList})),
											aa: alert
										}),
									$elm$core$Platform$Cmd$none);
							case 1:
								var alert = _v73.a;
								return _Utils_Tuple2(
									A2(
										$author$project$Alert$put,
										alert,
										A2(
											A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
											$author$project$Alert$invalidImputAlert('Sory we can\'t let you access this user\'s infos. It could be because your account isn\'t complete.'),
											model)),
									$elm$core$Platform$Cmd$none);
							default:
								var error = _v73.a;
								return _Utils_Tuple2(
									A2(
										A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
										$author$project$Alert$serverNotReachedAlert(error),
										model),
									$elm$core$Platform$Cmd$none);
						}
					case 64:
						var lmodel = _v0.a.a;
						var result = _v0.c.a;
						var _v74 = $author$project$Main$toWebResultDataAlert(result);
						switch (_v74.$) {
							case 0:
								var chatList = _v74.a;
								var alert = _v74.b;
								return _Utils_Tuple2(
									A2(
										$author$project$Alert$put,
										alert,
										_Utils_update(
											model,
											{
												a: $author$project$Main$Logged(
													_Utils_update(
														lmodel,
														{bv: chatList}))
											})),
									$elm$core$Platform$Cmd$none);
							case 1:
								var alert = _v74.a;
								return _Utils_Tuple2(
									A2($author$project$Alert$put, alert, model),
									$elm$core$Platform$Cmd$none);
							default:
								var error = _v74.a;
								return _Utils_Tuple2(
									A2(
										$author$project$Alert$put,
										$elm$core$Maybe$Just(
											$author$project$Alert$serverNotReachedAlert(error)),
										model),
									$elm$core$Platform$Cmd$none);
						}
					case 65:
						if (_v0.b.$ === 5) {
							var lmodel = _v0.a.a;
							var _v75 = _v0.b;
							var id = _v0.c.a;
							return _Utils_Tuple2(
								model,
								A2($author$project$Main$requestDiscution, id, $author$project$Main$ReceiveDiscution));
						} else {
							break _v0$76;
						}
					case 66:
						var lmodel = _v0.a.a;
						var result = _v0.c.a;
						if (!result.$) {
							var data = result.a.eM;
							var alert = result.a.aa;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										a: $author$project$Main$Logged(
											_Utils_update(
												lmodel,
												{O: data})),
										aa: alert
									}),
								$elm$core$Platform$Cmd$none);
						} else {
							var error = result.a;
							return _Utils_Tuple2(
								A2(
									A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
									$author$project$Alert$serverNotReachedAlert(error),
									model),
								$elm$core$Platform$Cmd$none);
						}
					case 67:
						var lmodel = _v0.a.a;
						var result = _v0.c.a;
						var _v77 = $author$project$Main$toWebResultDataAlert(result);
						switch (_v77.$) {
							case 0:
								var newDiscution = _v77.a;
								var alert = _v77.b;
								return _Utils_Tuple2(
									A2(
										$author$project$Alert$put,
										alert,
										_Utils_update(
											model,
											{
												a: $author$project$Main$Logged(
													_Utils_update(
														lmodel,
														{
															O: A2(
																$elm$core$Maybe$map,
																function (oldDiscution) {
																	return _Utils_update(
																		newDiscution,
																		{aC: oldDiscution.aC});
																},
																lmodel.O)
														}))
											})),
									$elm$core$Platform$Cmd$none);
							case 1:
								var alert = _v77.a;
								return _Utils_Tuple2(
									A2(
										$author$project$Alert$put,
										alert,
										_Utils_update(
											model,
											{
												a: $author$project$Main$Logged(
													_Utils_update(
														lmodel,
														{O: $elm$core$Maybe$Nothing}))
											})),
									$elm$core$Platform$Cmd$none);
							default:
								var error = _v77.a;
								return _Utils_Tuple2(
									A2(
										A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
										$author$project$Alert$serverNotReachedAlert(error),
										model),
									$elm$core$Platform$Cmd$none);
						}
					case 68:
						var lmodel = _v0.a.a;
						var formMsg = _v0.c.a;
						return A2(
							$elm$core$Maybe$withDefault,
							_Utils_Tuple2(model, $elm$core$Platform$Cmd$none),
							A2(
								$elm$core$Maybe$map,
								function (discution) {
									var _v78 = A2($author$project$Form$update, formMsg, discution.aC);
									var newForm = _v78.a;
									var formCmd = _v78.b;
									var response = _v78.c;
									if (response.$ === 1) {
										return _Utils_Tuple2(
											A4($author$project$Main$setSendMessageForm, newForm, discution, lmodel, model),
											A2($elm$core$Platform$Cmd$map, $author$project$Main$SendMessageForm, formCmd));
									} else {
										var result = response.a;
										return _Utils_Tuple2(
											A4(
												$author$project$Main$setSendMessageForm,
												newForm,
												discution,
												lmodel,
												A4($author$project$Main$sendMessageFormResultHandler, result, discution, lmodel, model)),
											A2($elm$core$Platform$Cmd$map, $author$project$Main$SendMessageForm, formCmd));
									}
								},
								lmodel.O));
					case 71:
						var lmodel = _v0.a.a;
						var result = _v0.c.a;
						var _v80 = $author$project$Main$toWebResultDataAlert(result);
						switch (_v80.$) {
							case 0:
								var currentSettings = _v80.a;
								var alert = _v80.b;
								var _v81 = $author$project$Main$breakAppartGeoInfo(currentSettings.ct);
								var geoAuth = _v81.a;
								return _Utils_Tuple2(
									A2(
										$author$project$Alert$put,
										alert,
										_Utils_update(
											model,
											{
												a: $author$project$Main$Logged(
													_Utils_update(
														lmodel,
														{
															w: $elm$core$Maybe$Just(currentSettings.w),
															ba: currentSettings.aV,
															bb: currentSettings.W,
															bc: A2(
																$author$project$ZipList$goToFirst,
																A2(
																	$elm$core$Basics$composeR,
																	$elm$core$Tuple$first,
																	$elm$core$Basics$eq(
																		$justinmimbs$date$Date$day(currentSettings.W))),
																$author$project$ZipList$fromList($author$project$Main$dayList)),
															bd: A2(
																$author$project$ZipList$goToFirst,
																A2(
																	$elm$core$Basics$composeR,
																	$elm$core$Tuple$first,
																	$elm$core$Basics$eq(
																		$justinmimbs$date$Date$month(currentSettings.W))),
																$author$project$ZipList$fromList($author$project$Main$monthList)),
															be: A2(
																$author$project$ZipList$goToFirst,
																A2(
																	$elm$core$Basics$composeR,
																	$elm$core$Tuple$first,
																	$elm$core$Basics$eq(
																		$justinmimbs$date$Date$year(currentSettings.W))),
																$author$project$ZipList$fromList($author$project$Main$yearList)),
															bf: currentSettings.dL,
															bg: currentSettings.aY,
															bh: A2(
																$author$project$ZipList$goToFirst,
																function (elem) {
																	return _Utils_eq(currentSettings.a_, elem.a);
																},
																$author$project$ZipList$fromList($author$project$BasicValues$genderList)),
															x: currentSettings.ct,
															bi: currentSettings.a3,
															bj: A2(
																$author$project$ZipList$goToFirst,
																function (elem) {
																	return _Utils_eq(currentSettings.a7, elem.a);
																},
																$author$project$ZipList$fromList($author$project$BasicValues$orientationList)),
															df: currentSettings.a8,
															bk: currentSettings.fB,
															aD: currentSettings.fT
														}))
											})),
									geoAuth ? A2($billstclair$elm_geolocation$PortFunnel$Geolocation$send, $author$project$Main$cmdPort, $billstclair$elm_geolocation$PortFunnel$Geolocation$watchChanges) : $elm$core$Platform$Cmd$none);
							case 1:
								var alert = _v80.a;
								return _Utils_Tuple2(
									A2($author$project$Alert$put, alert, model),
									$elm$core$Platform$Cmd$none);
							default:
								var error = _v80.a;
								return _Utils_Tuple2(
									A2(
										A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
										$author$project$Alert$serverNotReachedAlert(error),
										model),
									$elm$core$Platform$Cmd$none);
						}
					case 44:
						if (_v0.b.$ === 9) {
							var lmodel = _v0.a.a;
							var _v82 = _v0.b;
							var newZipList = _v0.c.a;
							var _v83 = lmodel.w;
							if (_v83.$ === 1) {
								return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
							} else {
								var pictures = _v83.a;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											a: $author$project$Main$Logged(
												_Utils_update(
													lmodel,
													{
														w: $elm$core$Maybe$Just(newZipList)
													}))
										}),
									$elm$core$Platform$Cmd$none);
							}
						} else {
							break _v0$76;
						}
					case 45:
						if (_v0.b.$ === 9) {
							var lmodel = _v0.a.a;
							var _v84 = _v0.b;
							var _v85 = _v0.c;
							return A2(
								$elm$core$Maybe$withDefault,
								_Utils_Tuple2(model, $elm$core$Platform$Cmd$none),
								A2(
									$elm$core$Maybe$map,
									function (p) {
										return _Utils_Tuple2(
											model,
											A2($author$project$Main$removePicture, p, $author$project$Main$ReceivePicturesUpdate));
									},
									lmodel.w));
						} else {
							break _v0$76;
						}
					case 46:
						if (_v0.b.$ === 9) {
							var lmodel = _v0.a.a;
							var _v86 = _v0.b;
							var _v87 = _v0.c;
							return _Utils_Tuple2(
								model,
								A2(
									$elm$file$File$Select$file,
									_List_fromArray(
										['image/png', 'image/jpg']),
									$author$project$Main$ReplacePicture));
						} else {
							break _v0$76;
						}
					case 47:
						if (_v0.b.$ === 9) {
							var lmodel = _v0.a.a;
							var _v88 = _v0.b;
							var file = _v0.c.a;
							return A2(
								$elm$core$Maybe$withDefault,
								_Utils_Tuple2(model, $elm$core$Platform$Cmd$none),
								A2(
									$elm$core$Maybe$map,
									function (p) {
										return _Utils_Tuple2(
											model,
											A3($author$project$Main$replacePicture, p, file, $author$project$Main$ReceivePicturesUpdate));
									},
									lmodel.w));
						} else {
							break _v0$76;
						}
					case 48:
						var lmodel = _v0.a.a;
						var response = _v0.c.a;
						var _v89 = $author$project$Main$toWebResultDataAlert(response);
						switch (_v89.$) {
							case 0:
								var newPictures = _v89.a;
								var alert = _v89.b;
								return _Utils_Tuple2(
									A2(
										$author$project$Alert$put,
										alert,
										_Utils_update(
											model,
											{
												a: $author$project$Main$Logged(
													_Utils_update(
														lmodel,
														{
															w: $elm$core$Maybe$Just(newPictures)
														}))
											})),
									$elm$core$Platform$Cmd$none);
							case 1:
								var alert = _v89.a;
								return _Utils_Tuple2(
									A2($author$project$Alert$put, alert, model),
									$elm$core$Platform$Cmd$none);
							default:
								var error = _v89.a;
								return _Utils_Tuple2(
									A2(
										A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
										$author$project$Alert$serverNotReachedAlert(error),
										model),
									$elm$core$Platform$Cmd$none);
						}
					case 49:
						if (_v0.b.$ === 3) {
							var lmodel = _v0.a.a;
							var carouselMsg = _v0.c.a;
							var _v90 = lmodel.T;
							if (_v90.$ === 3) {
								var userDetails = _v90.a;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											a: $author$project$Main$Logged(
												_Utils_update(
													lmodel,
													{
														T: $krisajenkins$remotedata$RemoteData$Success(
															_Utils_update(
																userDetails,
																{
																	bu: A2($rundis$elm_bootstrap$Bootstrap$Carousel$update, carouselMsg, userDetails.bu)
																}))
													}))
										}),
									$elm$core$Platform$Cmd$none);
							} else {
								return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
							}
						} else {
							break _v0$76;
						}
					case 50:
						var lmodel = _v0.a.a;
						var value = _v0.c.a;
						var _v91 = A5($billstclair$elm_port_funnel$PortFunnel$processValue, $author$project$Main$funnels, $author$project$Main$appTrampoline, value, lmodel.dO, model);
						if (_v91.$ === 1) {
							var error = _v91.a;
							return $Janiczek$cmd_extra$Cmd$Extra$withNoCmd(
								A2(
									A2(
										$elm$core$Basics$composeL,
										A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
										$author$project$Alert$invalidImputAlert),
									error,
									model));
						} else {
							var res = _v91.a;
							return res;
						}
					default:
						break _v0$76;
				}
			}
		}
		return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
	});
var $elm$html$Html$a = _VirtualDom_node('a');
var $mdgriffith$elm_ui$Internal$Model$AlignX = function (a) {
	return {$: 6, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$CenterX = 1;
var $mdgriffith$elm_ui$Element$centerX = $mdgriffith$elm_ui$Internal$Model$AlignX(1);
var $mdgriffith$elm_ui$Internal$Model$AlignY = function (a) {
	return {$: 5, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$CenterY = 1;
var $mdgriffith$elm_ui$Element$centerY = $mdgriffith$elm_ui$Internal$Model$AlignY(1);
var $rundis$elm_bootstrap$Bootstrap$Grid$Column = function (a) {
	return {$: 0, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Grid$col = F2(
	function (options, children) {
		return $rundis$elm_bootstrap$Bootstrap$Grid$Column(
			{ao: children, fo: options});
	});
var $mdgriffith$elm_ui$Internal$Model$Unkeyed = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$AsColumn = 1;
var $mdgriffith$elm_ui$Internal$Model$asColumn = 1;
var $mdgriffith$elm_ui$Internal$Style$classes = {gc: 'a', dv: 'atv', ge: 'ab', gf: 'cx', gg: 'cy', gh: 'acb', gi: 'accx', gj: 'accy', gk: 'acr', eB: 'al', eC: 'ar', gl: 'at', dy: 'ah', dz: 'av', go: 's', gt: 'bh', gu: 'b', gv: 'w7', gx: 'bd', gy: 'bdt', ca: 'bn', gz: 'bs', cb: 'cpe', gF: 'cp', gG: 'cpx', gH: 'cpy', ad: 'c', ci: 'ctr', cj: 'cb', ck: 'ccx', ae: 'ccy', bx: 'cl', cl: 'cr', gJ: 'ct', gL: 'cptr', gM: 'ctxt', gV: 'fcs', eY: 'focus-within', gX: 'fs', gZ: 'g', dQ: 'hbh', dR: 'hc', e3: 'he', dS: 'hf', e4: 'hfp', g1: 'hv', g4: 'ic', g6: 'fr', g9: 'iml', ha: 'imlf', hb: 'imlp', hc: 'implw', hd: 'it', hg: 'i', fg: 'lnk', a6: 'nb', fl: 'notxt', ht: 'ol', hv: 'or', ax: 'oq', hz: 'oh', fp: 'pg', fq: 'p', hA: 'ppe', hE: 'ui', fI: 'r', hG: 'sb', hH: 'sbx', hI: 'sby', hJ: 'sbt', hM: 'e', hN: 'cap', hO: 'sev', hU: 'sk', ep: 't', hZ: 'tc', h_: 'w8', h$: 'w2', h0: 'w9', h1: 'tj', dj: 'tja', h2: 'tl', h3: 'w3', h4: 'w5', h5: 'w4', h6: 'tr', h7: 'w6', h8: 'w1', h9: 'tun', f0: 'ts', aN: 'clr', ie: 'u', eu: 'wc', f9: 'we', ev: 'wf', ga: 'wfp', ew: 'wrp'};
var $mdgriffith$elm_ui$Internal$Model$Generic = {$: 0};
var $mdgriffith$elm_ui$Internal$Model$div = $mdgriffith$elm_ui$Internal$Model$Generic;
var $mdgriffith$elm_ui$Internal$Model$NoNearbyChildren = {$: 0};
var $mdgriffith$elm_ui$Internal$Model$columnClass = $mdgriffith$elm_ui$Internal$Style$classes.go + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.ad);
var $mdgriffith$elm_ui$Internal$Model$gridClass = $mdgriffith$elm_ui$Internal$Style$classes.go + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.gZ);
var $mdgriffith$elm_ui$Internal$Model$pageClass = $mdgriffith$elm_ui$Internal$Style$classes.go + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.fp);
var $mdgriffith$elm_ui$Internal$Model$paragraphClass = $mdgriffith$elm_ui$Internal$Style$classes.go + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.fq);
var $mdgriffith$elm_ui$Internal$Model$rowClass = $mdgriffith$elm_ui$Internal$Style$classes.go + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.fI);
var $mdgriffith$elm_ui$Internal$Model$singleClass = $mdgriffith$elm_ui$Internal$Style$classes.go + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.hM);
var $mdgriffith$elm_ui$Internal$Model$contextClasses = function (context) {
	switch (context) {
		case 0:
			return $mdgriffith$elm_ui$Internal$Model$rowClass;
		case 1:
			return $mdgriffith$elm_ui$Internal$Model$columnClass;
		case 2:
			return $mdgriffith$elm_ui$Internal$Model$singleClass;
		case 3:
			return $mdgriffith$elm_ui$Internal$Model$gridClass;
		case 4:
			return $mdgriffith$elm_ui$Internal$Model$paragraphClass;
		default:
			return $mdgriffith$elm_ui$Internal$Model$pageClass;
	}
};
var $mdgriffith$elm_ui$Internal$Model$Keyed = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$NoStyleSheet = {$: 0};
var $mdgriffith$elm_ui$Internal$Model$Styled = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$Unstyled = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$addChildren = F2(
	function (existing, nearbyChildren) {
		switch (nearbyChildren.$) {
			case 0:
				return existing;
			case 1:
				var behind = nearbyChildren.a;
				return _Utils_ap(behind, existing);
			case 2:
				var inFront = nearbyChildren.a;
				return _Utils_ap(existing, inFront);
			default:
				var behind = nearbyChildren.a;
				var inFront = nearbyChildren.b;
				return _Utils_ap(
					behind,
					_Utils_ap(existing, inFront));
		}
	});
var $mdgriffith$elm_ui$Internal$Model$addKeyedChildren = F3(
	function (key, existing, nearbyChildren) {
		switch (nearbyChildren.$) {
			case 0:
				return existing;
			case 1:
				var behind = nearbyChildren.a;
				return _Utils_ap(
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						behind),
					existing);
			case 2:
				var inFront = nearbyChildren.a;
				return _Utils_ap(
					existing,
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						inFront));
			default:
				var behind = nearbyChildren.a;
				var inFront = nearbyChildren.b;
				return _Utils_ap(
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						behind),
					_Utils_ap(
						existing,
						A2(
							$elm$core$List$map,
							function (x) {
								return _Utils_Tuple2(key, x);
							},
							inFront)));
		}
	});
var $mdgriffith$elm_ui$Internal$Model$AsEl = 2;
var $mdgriffith$elm_ui$Internal$Model$asEl = 2;
var $mdgriffith$elm_ui$Internal$Model$AsParagraph = 4;
var $mdgriffith$elm_ui$Internal$Model$asParagraph = 4;
var $mdgriffith$elm_ui$Internal$Flag$Flag = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$Second = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$flag = function (i) {
	return (i > 31) ? $mdgriffith$elm_ui$Internal$Flag$Second(1 << (i - 32)) : $mdgriffith$elm_ui$Internal$Flag$Flag(1 << i);
};
var $mdgriffith$elm_ui$Internal$Flag$alignBottom = $mdgriffith$elm_ui$Internal$Flag$flag(41);
var $mdgriffith$elm_ui$Internal$Flag$alignRight = $mdgriffith$elm_ui$Internal$Flag$flag(40);
var $mdgriffith$elm_ui$Internal$Flag$centerX = $mdgriffith$elm_ui$Internal$Flag$flag(42);
var $mdgriffith$elm_ui$Internal$Flag$centerY = $mdgriffith$elm_ui$Internal$Flag$flag(43);
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$html$Html$div = _VirtualDom_node('div');
var $mdgriffith$elm_ui$Internal$Model$lengthClassName = function (x) {
	switch (x.$) {
		case 0:
			var px = x.a;
			return $elm$core$String$fromInt(px) + 'px';
		case 1:
			return 'auto';
		case 2:
			var i = x.a;
			return $elm$core$String$fromInt(i) + 'fr';
		case 3:
			var min = x.a;
			var len = x.b;
			return 'min' + ($elm$core$String$fromInt(min) + $mdgriffith$elm_ui$Internal$Model$lengthClassName(len));
		default:
			var max = x.a;
			var len = x.b;
			return 'max' + ($elm$core$String$fromInt(max) + $mdgriffith$elm_ui$Internal$Model$lengthClassName(len));
	}
};
var $elm$core$Basics$round = _Basics_round;
var $mdgriffith$elm_ui$Internal$Model$floatClass = function (x) {
	return $elm$core$String$fromInt(
		$elm$core$Basics$round(x * 255));
};
var $mdgriffith$elm_ui$Internal$Model$transformClass = function (transform) {
	switch (transform.$) {
		case 0:
			return $elm$core$Maybe$Nothing;
		case 1:
			var _v1 = transform.a;
			var x = _v1.a;
			var y = _v1.b;
			var z = _v1.c;
			return $elm$core$Maybe$Just(
				'mv-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(x) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(y) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(z))))));
		default:
			var _v2 = transform.a;
			var tx = _v2.a;
			var ty = _v2.b;
			var tz = _v2.c;
			var _v3 = transform.b;
			var sx = _v3.a;
			var sy = _v3.b;
			var sz = _v3.c;
			var _v4 = transform.c;
			var ox = _v4.a;
			var oy = _v4.b;
			var oz = _v4.c;
			var angle = transform.d;
			return $elm$core$Maybe$Just(
				'tfrm-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(tx) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(ty) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(tz) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sx) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sy) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sz) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(ox) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(oy) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(oz) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(angle))))))))))))))))))));
	}
};
var $mdgriffith$elm_ui$Internal$Model$getStyleName = function (style) {
	switch (style.$) {
		case 13:
			var name = style.a;
			return name;
		case 12:
			var name = style.a;
			var o = style.b;
			return name;
		case 0:
			var _class = style.a;
			return _class;
		case 1:
			var name = style.a;
			return name;
		case 2:
			var i = style.a;
			return 'font-size-' + $elm$core$String$fromInt(i);
		case 3:
			var _class = style.a;
			return _class;
		case 4:
			var _class = style.a;
			return _class;
		case 5:
			var cls = style.a;
			var x = style.b;
			var y = style.c;
			return cls;
		case 7:
			var cls = style.a;
			var top = style.b;
			var right = style.c;
			var bottom = style.d;
			var left = style.e;
			return cls;
		case 6:
			var cls = style.a;
			var top = style.b;
			var right = style.c;
			var bottom = style.d;
			var left = style.e;
			return cls;
		case 8:
			var template = style.a;
			return 'grid-rows-' + (A2(
				$elm$core$String$join,
				'-',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.hF)) + ('-cols-' + (A2(
				$elm$core$String$join,
				'-',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.X)) + ('-space-x-' + ($mdgriffith$elm_ui$Internal$Model$lengthClassName(template.hP.a) + ('-space-y-' + $mdgriffith$elm_ui$Internal$Model$lengthClassName(template.hP.b)))))));
		case 9:
			var pos = style.a;
			return 'gp grid-pos-' + ($elm$core$String$fromInt(pos.fI) + ('-' + ($elm$core$String$fromInt(pos.eI) + ('-' + ($elm$core$String$fromInt(pos.du) + ('-' + $elm$core$String$fromInt(pos.e2)))))));
		case 11:
			var selector = style.a;
			var subStyle = style.b;
			var name = function () {
				switch (selector) {
					case 0:
						return 'fs';
					case 1:
						return 'hv';
					default:
						return 'act';
				}
			}();
			return A2(
				$elm$core$String$join,
				' ',
				A2(
					$elm$core$List$map,
					function (sty) {
						var _v1 = $mdgriffith$elm_ui$Internal$Model$getStyleName(sty);
						if (_v1 === '') {
							return '';
						} else {
							var styleName = _v1;
							return styleName + ('-' + name);
						}
					},
					subStyle));
		default:
			var x = style.a;
			return A2(
				$elm$core$Maybe$withDefault,
				'',
				$mdgriffith$elm_ui$Internal$Model$transformClass(x));
	}
};
var $mdgriffith$elm_ui$Internal$Model$reduceStyles = F2(
	function (style, nevermind) {
		var cache = nevermind.a;
		var existing = nevermind.b;
		var styleName = $mdgriffith$elm_ui$Internal$Model$getStyleName(style);
		return A2($elm$core$Set$member, styleName, cache) ? nevermind : _Utils_Tuple2(
			A2($elm$core$Set$insert, styleName, cache),
			A2($elm$core$List$cons, style, existing));
	});
var $mdgriffith$elm_ui$Internal$Model$Property = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$Style = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$dot = function (c) {
	return '.' + c;
};
var $mdgriffith$elm_ui$Internal$Model$formatColor = function (_v0) {
	var red = _v0.a;
	var green = _v0.b;
	var blue = _v0.c;
	var alpha = _v0.d;
	return 'rgba(' + ($elm$core$String$fromInt(
		$elm$core$Basics$round(red * 255)) + ((',' + $elm$core$String$fromInt(
		$elm$core$Basics$round(green * 255))) + ((',' + $elm$core$String$fromInt(
		$elm$core$Basics$round(blue * 255))) + (',' + ($elm$core$String$fromFloat(alpha) + ')')))));
};
var $mdgriffith$elm_ui$Internal$Model$formatBoxShadow = function (shadow) {
	return A2(
		$elm$core$String$join,
		' ',
		A2(
			$elm$core$List$filterMap,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					shadow.fa ? $elm$core$Maybe$Just('inset') : $elm$core$Maybe$Nothing,
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.d4.a) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.d4.b) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.dD) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.ej) + 'px'),
					$elm$core$Maybe$Just(
					$mdgriffith$elm_ui$Internal$Model$formatColor(shadow.dE))
				])));
};
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var $mdgriffith$elm_ui$Internal$Model$renderFocusStyle = function (focus) {
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Model$Style,
			$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eY) + ':focus-within',
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'border-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.gw),
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'background-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.gr),
						A2(
						$elm$core$Maybe$map,
						function (shadow) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'box-shadow',
								$mdgriffith$elm_ui$Internal$Model$formatBoxShadow(
									{
										dD: shadow.dD,
										dE: shadow.dE,
										fa: false,
										d4: A2(
											$elm$core$Tuple$mapSecond,
											$elm$core$Basics$toFloat,
											A2($elm$core$Tuple$mapFirst, $elm$core$Basics$toFloat, shadow.d4)),
										ej: shadow.ej
									}));
						},
						focus.hL),
						$elm$core$Maybe$Just(
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'outline', 'none'))
					]))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$Style,
			$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.go) + (':focus .focusable, ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.go) + '.focusable:focus')),
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'border-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.gw),
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'background-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.gr),
						A2(
						$elm$core$Maybe$map,
						function (shadow) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'box-shadow',
								$mdgriffith$elm_ui$Internal$Model$formatBoxShadow(
									{
										dD: shadow.dD,
										dE: shadow.dE,
										fa: false,
										d4: A2(
											$elm$core$Tuple$mapSecond,
											$elm$core$Basics$toFloat,
											A2($elm$core$Tuple$mapFirst, $elm$core$Basics$toFloat, shadow.d4)),
										ej: shadow.ej
									}));
						},
						focus.hL),
						$elm$core$Maybe$Just(
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'outline', 'none'))
					])))
		]);
};
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $mdgriffith$elm_ui$Internal$Style$Batch = function (a) {
	return {$: 5, a: a};
};
var $mdgriffith$elm_ui$Internal$Style$Child = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Class = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Descriptor = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Left = 3;
var $mdgriffith$elm_ui$Internal$Style$Prop = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Right = 2;
var $mdgriffith$elm_ui$Internal$Style$Self = $elm$core$Basics$identity;
var $mdgriffith$elm_ui$Internal$Style$Supports = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Content = $elm$core$Basics$identity;
var $mdgriffith$elm_ui$Internal$Style$Bottom = 1;
var $mdgriffith$elm_ui$Internal$Style$CenterX = 4;
var $mdgriffith$elm_ui$Internal$Style$CenterY = 5;
var $mdgriffith$elm_ui$Internal$Style$Top = 0;
var $mdgriffith$elm_ui$Internal$Style$alignments = _List_fromArray(
	[0, 1, 2, 3, 4, 5]);
var $mdgriffith$elm_ui$Internal$Style$contentName = function (desc) {
	switch (desc) {
		case 0:
			var _v1 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gJ);
		case 1:
			var _v2 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cj);
		case 2:
			var _v3 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cl);
		case 3:
			var _v4 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bx);
		case 4:
			var _v5 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ck);
		default:
			var _v6 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ae);
	}
};
var $mdgriffith$elm_ui$Internal$Style$selfName = function (desc) {
	switch (desc) {
		case 0:
			var _v1 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gl);
		case 1:
			var _v2 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ge);
		case 2:
			var _v3 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eC);
		case 3:
			var _v4 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eB);
		case 4:
			var _v5 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gf);
		default:
			var _v6 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gg);
	}
};
var $mdgriffith$elm_ui$Internal$Style$describeAlignment = function (values) {
	var createDescription = function (alignment) {
		var _v0 = values(alignment);
		var content = _v0.a;
		var indiv = _v0.b;
		return _List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$contentName(alignment),
				content),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.go),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$selfName(alignment),
						indiv)
					]))
			]);
	};
	return $mdgriffith$elm_ui$Internal$Style$Batch(
		A2($elm$core$List$concatMap, createDescription, $mdgriffith$elm_ui$Internal$Style$alignments));
};
var $mdgriffith$elm_ui$Internal$Style$elDescription = _List_fromArray(
	[
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'column'),
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre'),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Descriptor,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dQ),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gt),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '-1')
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Descriptor,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hJ),
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ep),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dS),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ev),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'auto !important')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dR),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dS),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ev),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ga),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eu),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
			])),
		$mdgriffith$elm_ui$Internal$Style$describeAlignment(
		function (alignment) {
			switch (alignment) {
				case 0:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', '0 !important')
							]));
				case 1:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', '0 !important')
							]));
				case 2:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
							]));
				case 3:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
							]));
				case 4:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
							]));
				default:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.go),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto')
									]))
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
							]));
			}
		})
	]);
var $mdgriffith$elm_ui$Internal$Style$gridAlignments = function (values) {
	var createDescription = function (alignment) {
		return _List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.go),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$selfName(alignment),
						values(alignment))
					]))
			]);
	};
	return $mdgriffith$elm_ui$Internal$Style$Batch(
		A2($elm$core$List$concatMap, createDescription, $mdgriffith$elm_ui$Internal$Style$alignments));
};
var $mdgriffith$elm_ui$Internal$Style$Above = 0;
var $mdgriffith$elm_ui$Internal$Style$Behind = 5;
var $mdgriffith$elm_ui$Internal$Style$Below = 1;
var $mdgriffith$elm_ui$Internal$Style$OnLeft = 3;
var $mdgriffith$elm_ui$Internal$Style$OnRight = 2;
var $mdgriffith$elm_ui$Internal$Style$Within = 4;
var $mdgriffith$elm_ui$Internal$Style$locations = function () {
	var loc = 0;
	var _v0 = function () {
		switch (loc) {
			case 0:
				return 0;
			case 1:
				return 0;
			case 2:
				return 0;
			case 3:
				return 0;
			case 4:
				return 0;
			default:
				return 0;
		}
	}();
	return _List_fromArray(
		[0, 1, 2, 3, 4, 5]);
}();
var $mdgriffith$elm_ui$Internal$Style$baseSheet = _List_fromArray(
	[
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		'html,body',
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'padding', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		_Utils_ap(
			$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.go),
			_Utils_ap(
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hM),
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.g4))),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.go) + ':focus',
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'outline', 'none')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hE),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'min-height', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				_Utils_ap(
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.go),
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dS)),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dS),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.g6),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.a6),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'fixed')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.a6),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'relative'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hM),
				$mdgriffith$elm_ui$Internal$Style$elDescription),
				$mdgriffith$elm_ui$Internal$Style$Batch(
				function (fn) {
					return A2($elm$core$List$map, fn, $mdgriffith$elm_ui$Internal$Style$locations);
				}(
					function (loc) {
						switch (loc) {
							case 0:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gc),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'bottom', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dS),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
												])),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ev),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
												])),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 1:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gu),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'bottom', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												])),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dS),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
												]))
										]));
							case 2:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hv),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 3:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ht),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'right', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 4:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.g6),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							default:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gt),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
						}
					}))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.go),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'relative'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'resize', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'box-sizing', 'border-box'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'padding', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-width', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'solid'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-size', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'color', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-family', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'line-height', '1'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'inherit'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ew),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-wrap', 'wrap')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.fl),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-moz-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-webkit-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-ms-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'user-select', 'none')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gL),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'pointer')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gM),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'text')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hA),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none !important')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cb),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto !important')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aN),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ax),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.g1, $mdgriffith$elm_ui$Internal$Style$classes.aN)) + ':hover',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.g1, $mdgriffith$elm_ui$Internal$Style$classes.ax)) + ':hover',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.gV, $mdgriffith$elm_ui$Internal$Style$classes.aN)) + ':focus',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.gV, $mdgriffith$elm_ui$Internal$Style$classes.ax)) + ':focus',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.dv, $mdgriffith$elm_ui$Internal$Style$classes.aN)) + ':active',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.dv, $mdgriffith$elm_ui$Internal$Style$classes.ax)) + ':active',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.f0),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Prop,
						'transition',
						A2(
							$elm$core$String$join,
							', ',
							A2(
								$elm$core$List$map,
								function (x) {
									return x + ' 160ms';
								},
								_List_fromArray(
									['transform', 'opacity', 'filter', 'background-color', 'color', 'font-size']))))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hG),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hH),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-x', 'auto'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.fI),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hI),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-y', 'auto'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ad),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hM),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gF),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gG),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-x', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gH),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-y', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eu),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', 'auto')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ca),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-width', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gx),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'dashed')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gy),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'dotted')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gz),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'solid')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ep),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-block')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hd),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'line-height', '1.05'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'background', 'transparent')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hM),
				$mdgriffith$elm_ui$Internal$Style$elDescription),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.fI),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.go),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', '0%'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.f9),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.fg),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dS),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.e4),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ev),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ci),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.gk,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.gi,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gf),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-left', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.gi,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gf),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-right', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:only-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.gi,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gg),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.gi + ' ~ u'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.gk + (' ~ s.' + $mdgriffith$elm_ui$Internal$Style$classes.gi)),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment) {
								case 0:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
											]));
								case 1:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
											]));
								case 2:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
											]),
										_List_Nil);
								case 3:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
											]),
										_List_Nil);
								case 4:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
											]),
										_List_Nil);
								default:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
											]));
							}
						}),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hO),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'space-between')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ad),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'column'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.go),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', '0%'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.e3),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ad),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dS),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ev),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ga),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eu),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.gh,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.gj,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gg),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', '0 !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.gj,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gg),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', '0 !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:only-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.gj,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gg),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.gj + ' ~ u'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.gh + (' ~ s.' + $mdgriffith$elm_ui$Internal$Style$classes.gj)),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment) {
								case 0:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto')
											]));
								case 1:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto')
											]));
								case 2:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
											]));
								case 3:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
											]));
								case 4:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
											]));
								default:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
											]),
										_List_Nil);
							}
						}),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ci),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hO),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'space-between')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gZ),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', '-ms-grid'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'.gp',
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.go),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Supports,
						_Utils_Tuple2('display', 'grid'),
						_List_fromArray(
							[
								_Utils_Tuple2('display', 'grid')
							])),
						$mdgriffith$elm_ui$Internal$Style$gridAlignments(
						function (alignment) {
							switch (alignment) {
								case 0:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
										]);
								case 1:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
										]);
								case 2:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
										]);
								case 3:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
										]);
								case 4:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
										]);
								default:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
										]);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.fp),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.go + ':first-child'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot(
							$mdgriffith$elm_ui$Internal$Style$classes.go + ($mdgriffith$elm_ui$Internal$Style$selfName(3) + (':first-child + .' + $mdgriffith$elm_ui$Internal$Style$classes.go))),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot(
							$mdgriffith$elm_ui$Internal$Style$classes.go + ($mdgriffith$elm_ui$Internal$Style$selfName(2) + (':first-child + .' + $mdgriffith$elm_ui$Internal$Style$classes.go))),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment) {
								case 0:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 1:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 2:
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'right'),
												A2(
												$mdgriffith$elm_ui$Internal$Style$Descriptor,
												'::after',
												_List_fromArray(
													[
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', '\"\"'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'table'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'clear', 'both')
													]))
											]));
								case 3:
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'left'),
												A2(
												$mdgriffith$elm_ui$Internal$Style$Descriptor,
												'::after',
												_List_fromArray(
													[
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', '\"\"'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'table'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'clear', 'both')
													]))
											]));
								case 4:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								default:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.g9),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'background-color', 'transparent')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hc),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hM),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hb),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'text'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ha),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'color', 'transparent')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.fq),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dQ),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gt),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '-1')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ep),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hM),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.g6),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gt),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gc),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gu),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hv),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ht),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ep),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hM),
								_List_fromArray(
									[
										A2(
										$mdgriffith$elm_ui$Internal$Style$Child,
										$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ep),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal')
											]))
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.fI),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-flex')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ad),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-flex')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gZ),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-grid')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment) {
								case 0:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 1:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 2:
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'right')
											]));
								case 3:
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'left')
											]));
								case 4:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								default:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				'.hidden',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'none')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.h8),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '100')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.h$),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '200')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.h3),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '300')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.h5),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '400')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.h4),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '500')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.h7),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '600')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gv),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '700')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.h_),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '800')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.h0),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '900')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hg),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'italic')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hU),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'line-through')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ie),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'underline'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip-ink', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip', 'ink')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				_Utils_ap(
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ie),
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hU)),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'line-through underline'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip-ink', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip', 'ink')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.h9),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'normal')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.h1),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'justify')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dj),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'justify-all')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hZ),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'center')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.h6),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'right')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.h2),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'left')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				'.modal',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'fixed'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none')
					]))
			]))
	]);
var $mdgriffith$elm_ui$Internal$Style$fontVariant = function (_var) {
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Style$Class,
			'.v-' + _var,
			_List_fromArray(
				[
					A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', '\"' + (_var + '\"'))
				])),
			A2(
			$mdgriffith$elm_ui$Internal$Style$Class,
			'.v-' + (_var + '-off'),
			_List_fromArray(
				[
					A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', '\"' + (_var + '\" 0'))
				]))
		]);
};
var $mdgriffith$elm_ui$Internal$Style$commonValues = $elm$core$List$concat(
	_List_fromArray(
		[
			A2(
			$elm$core$List$map,
			function (x) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.border-' + $elm$core$String$fromInt(x),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'border-width',
							$elm$core$String$fromInt(x) + 'px')
						]));
			},
			A2($elm$core$List$range, 0, 6)),
			A2(
			$elm$core$List$map,
			function (i) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.font-size-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'font-size',
							$elm$core$String$fromInt(i) + 'px')
						]));
			},
			A2($elm$core$List$range, 8, 32)),
			A2(
			$elm$core$List$map,
			function (i) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.p-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'padding',
							$elm$core$String$fromInt(i) + 'px')
						]));
			},
			A2($elm$core$List$range, 0, 24)),
			_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Class,
				'.v-smcp',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-variant', 'small-caps')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Class,
				'.v-smcp-off',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-variant', 'normal')
					]))
			]),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('zero'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('onum'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('liga'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('dlig'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('ordn'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('tnum'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('afrc'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('frac')
		]));
var $mdgriffith$elm_ui$Internal$Style$explainer = '\n.explain {\n    border: 6px solid rgb(174, 121, 15) !important;\n}\n.explain > .' + ($mdgriffith$elm_ui$Internal$Style$classes.go + (' {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n.ctr {\n    border: none !important;\n}\n.explain > .ctr > .' + ($mdgriffith$elm_ui$Internal$Style$classes.go + ' {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n')));
var $mdgriffith$elm_ui$Internal$Style$inputTextReset = '\ninput[type="search"],\ninput[type="search"]::-webkit-search-decoration,\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-results-button,\ninput[type="search"]::-webkit-search-results-decoration {\n  -webkit-appearance:none;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$sliderReset = '\ninput[type=range] {\n  -webkit-appearance: none; \n  background: transparent;\n  position:absolute;\n  left:0;\n  top:0;\n  z-index:10;\n  width: 100%;\n  outline: dashed 1px;\n  height: 100%;\n  opacity: 0;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$thumbReset = '\ninput[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-moz-range-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-ms-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range][orient=vertical]{\n    writing-mode: bt-lr; /* IE */\n    -webkit-appearance: slider-vertical;  /* WebKit */\n}\n';
var $mdgriffith$elm_ui$Internal$Style$trackReset = '\ninput[type=range]::-moz-range-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-ms-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-webkit-slider-runnable-track {\n    background: transparent;\n    cursor: pointer;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$overrides = '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.go) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.fI) + (' > ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.go) + (' { flex-basis: auto !important; } ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.go) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.fI) + (' > ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.go) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ci) + (' { flex-basis: auto !important; }}' + ($mdgriffith$elm_ui$Internal$Style$inputTextReset + ($mdgriffith$elm_ui$Internal$Style$sliderReset + ($mdgriffith$elm_ui$Internal$Style$trackReset + ($mdgriffith$elm_ui$Internal$Style$thumbReset + $mdgriffith$elm_ui$Internal$Style$explainer)))))))))))))));
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $mdgriffith$elm_ui$Internal$Style$Intermediate = $elm$core$Basics$identity;
var $mdgriffith$elm_ui$Internal$Style$emptyIntermediate = F2(
	function (selector, closing) {
		return {ch: closing, z: _List_Nil, aj: _List_Nil, _: selector};
	});
var $mdgriffith$elm_ui$Internal$Style$renderRules = F2(
	function (_v0, rulesToRender) {
		var parent = _v0;
		var generateIntermediates = F2(
			function (rule, rendered) {
				switch (rule.$) {
					case 0:
						var name = rule.a;
						var val = rule.b;
						return _Utils_update(
							rendered,
							{
								aj: A2(
									$elm$core$List$cons,
									_Utils_Tuple2(name, val),
									rendered.aj)
							});
					case 2:
						var _v2 = rule.a;
						var prop = _v2.a;
						var value = _v2.b;
						var props = rule.b;
						return _Utils_update(
							rendered,
							{
								z: A2(
									$elm$core$List$cons,
									{ch: '\n}', z: _List_Nil, aj: props, _: '@supports (' + (prop + (':' + (value + (') {' + parent._))))},
									rendered.z)
							});
					case 4:
						var selector = rule.a;
						var adjRules = rule.b;
						return _Utils_update(
							rendered,
							{
								z: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent._ + (' + ' + selector), ''),
										adjRules),
									rendered.z)
							});
					case 1:
						var child = rule.a;
						var childRules = rule.b;
						return _Utils_update(
							rendered,
							{
								z: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent._ + (' > ' + child), ''),
										childRules),
									rendered.z)
							});
					case 3:
						var descriptor = rule.a;
						var descriptorRules = rule.b;
						return _Utils_update(
							rendered,
							{
								z: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2(
											$mdgriffith$elm_ui$Internal$Style$emptyIntermediate,
											_Utils_ap(parent._, descriptor),
											''),
										descriptorRules),
									rendered.z)
							});
					default:
						var batched = rule.a;
						return _Utils_update(
							rendered,
							{
								z: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent._, ''),
										batched),
									rendered.z)
							});
				}
			});
		return A3($elm$core$List$foldr, generateIntermediates, parent, rulesToRender);
	});
var $mdgriffith$elm_ui$Internal$Style$renderCompact = function (styleClasses) {
	var renderValues = function (values) {
		return $elm$core$String$concat(
			A2(
				$elm$core$List$map,
				function (_v3) {
					var x = _v3.a;
					var y = _v3.b;
					return x + (':' + (y + ';'));
				},
				values));
	};
	var renderClass = function (rule) {
		var _v2 = rule.aj;
		if (!_v2.b) {
			return '';
		} else {
			return rule._ + ('{' + (renderValues(rule.aj) + (rule.ch + '}')));
		}
	};
	var renderIntermediate = function (_v0) {
		var rule = _v0;
		return _Utils_ap(
			renderClass(rule),
			$elm$core$String$concat(
				A2($elm$core$List$map, renderIntermediate, rule.z)));
	};
	return $elm$core$String$concat(
		A2(
			$elm$core$List$map,
			renderIntermediate,
			A3(
				$elm$core$List$foldr,
				F2(
					function (_v1, existing) {
						var name = _v1.a;
						var styleRules = _v1.b;
						return A2(
							$elm$core$List$cons,
							A2(
								$mdgriffith$elm_ui$Internal$Style$renderRules,
								A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, name, ''),
								styleRules),
							existing);
					}),
				_List_Nil,
				styleClasses)));
};
var $mdgriffith$elm_ui$Internal$Style$rules = _Utils_ap(
	$mdgriffith$elm_ui$Internal$Style$overrides,
	$mdgriffith$elm_ui$Internal$Style$renderCompact(
		_Utils_ap($mdgriffith$elm_ui$Internal$Style$baseSheet, $mdgriffith$elm_ui$Internal$Style$commonValues)));
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $mdgriffith$elm_ui$Internal$Model$staticRoot = function (opts) {
	var _v0 = opts.hn;
	switch (_v0) {
		case 0:
			return A3(
				$elm$virtual_dom$VirtualDom$node,
				'div',
				_List_Nil,
				_List_fromArray(
					[
						A3(
						$elm$virtual_dom$VirtualDom$node,
						'style',
						_List_Nil,
						_List_fromArray(
							[
								$elm$virtual_dom$VirtualDom$text($mdgriffith$elm_ui$Internal$Style$rules)
							]))
					]));
		case 1:
			return $elm$virtual_dom$VirtualDom$text('');
		default:
			return A3(
				$elm$virtual_dom$VirtualDom$node,
				'elm-ui-static-rules',
				_List_fromArray(
					[
						A2(
						$elm$virtual_dom$VirtualDom$property,
						'rules',
						$elm$json$Json$Encode$string($mdgriffith$elm_ui$Internal$Style$rules))
					]),
				_List_Nil);
	}
};
var $mdgriffith$elm_ui$Internal$Model$fontName = function (font) {
	switch (font.$) {
		case 0:
			return 'serif';
		case 1:
			return 'sans-serif';
		case 2:
			return 'monospace';
		case 3:
			var name = font.a;
			return '\"' + (name + '\"');
		case 4:
			var name = font.a;
			var url = font.b;
			return '\"' + (name + '\"');
		default:
			var name = font.a.hp;
			return '\"' + (name + '\"');
	}
};
var $mdgriffith$elm_ui$Internal$Model$isSmallCaps = function (_var) {
	switch (_var.$) {
		case 0:
			var name = _var.a;
			return name === 'smcp';
		case 1:
			var name = _var.a;
			return false;
		default:
			var name = _var.a;
			var index = _var.b;
			return (name === 'smcp') && (index === 1);
	}
};
var $mdgriffith$elm_ui$Internal$Model$hasSmallCaps = function (typeface) {
	if (typeface.$ === 5) {
		var font = typeface.a;
		return A2($elm$core$List$any, $mdgriffith$elm_ui$Internal$Model$isSmallCaps, font.f4);
	} else {
		return false;
	}
};
var $mdgriffith$elm_ui$Internal$Model$renderProps = F3(
	function (force, _v0, existing) {
		var key = _v0.a;
		var val = _v0.b;
		return force ? (existing + ('\n  ' + (key + (': ' + (val + ' !important;'))))) : (existing + ('\n  ' + (key + (': ' + (val + ';')))));
	});
var $mdgriffith$elm_ui$Internal$Model$renderStyle = F4(
	function (options, maybePseudo, selector, props) {
		if (maybePseudo.$ === 1) {
			return _List_fromArray(
				[
					selector + ('{' + (A3(
					$elm$core$List$foldl,
					$mdgriffith$elm_ui$Internal$Model$renderProps(false),
					'',
					props) + '\n}'))
				]);
		} else {
			var pseudo = maybePseudo.a;
			switch (pseudo) {
				case 1:
					var _v2 = options.g1;
					switch (_v2) {
						case 0:
							return _List_Nil;
						case 2:
							return _List_fromArray(
								[
									selector + ('-hv {' + (A3(
									$elm$core$List$foldl,
									$mdgriffith$elm_ui$Internal$Model$renderProps(true),
									'',
									props) + '\n}'))
								]);
						default:
							return _List_fromArray(
								[
									selector + ('-hv:hover {' + (A3(
									$elm$core$List$foldl,
									$mdgriffith$elm_ui$Internal$Model$renderProps(false),
									'',
									props) + '\n}'))
								]);
					}
				case 0:
					var renderedProps = A3(
						$elm$core$List$foldl,
						$mdgriffith$elm_ui$Internal$Model$renderProps(false),
						'',
						props);
					return _List_fromArray(
						[selector + ('-fs:focus {' + (renderedProps + '\n}')), '.' + ($mdgriffith$elm_ui$Internal$Style$classes.go + (':focus ~ ' + (selector + ('-fs:not(.focus)  {' + (renderedProps + '\n}'))))), '.' + ($mdgriffith$elm_ui$Internal$Style$classes.go + (':focus ' + (selector + ('-fs  {' + (renderedProps + '\n}'))))), selector + ('-fs:focus-within {' + (renderedProps + '\n}')), '.focusable-parent:focus ~ ' + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.go + (' ' + (selector + ('-fs {' + (renderedProps + '\n}'))))))]);
				default:
					return _List_fromArray(
						[
							selector + ('-act:active {' + (A3(
							$elm$core$List$foldl,
							$mdgriffith$elm_ui$Internal$Model$renderProps(false),
							'',
							props) + '\n}'))
						]);
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$renderVariant = function (_var) {
	switch (_var.$) {
		case 0:
			var name = _var.a;
			return '\"' + (name + '\"');
		case 1:
			var name = _var.a;
			return '\"' + (name + '\" 0');
		default:
			var name = _var.a;
			var index = _var.b;
			return '\"' + (name + ('\" ' + $elm$core$String$fromInt(index)));
	}
};
var $mdgriffith$elm_ui$Internal$Model$renderVariants = function (typeface) {
	if (typeface.$ === 5) {
		var font = typeface.a;
		return $elm$core$Maybe$Just(
			A2(
				$elm$core$String$join,
				', ',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$renderVariant, font.f4)));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$transformValue = function (transform) {
	switch (transform.$) {
		case 0:
			return $elm$core$Maybe$Nothing;
		case 1:
			var _v1 = transform.a;
			var x = _v1.a;
			var y = _v1.b;
			var z = _v1.c;
			return $elm$core$Maybe$Just(
				'translate3d(' + ($elm$core$String$fromFloat(x) + ('px, ' + ($elm$core$String$fromFloat(y) + ('px, ' + ($elm$core$String$fromFloat(z) + 'px)'))))));
		default:
			var _v2 = transform.a;
			var tx = _v2.a;
			var ty = _v2.b;
			var tz = _v2.c;
			var _v3 = transform.b;
			var sx = _v3.a;
			var sy = _v3.b;
			var sz = _v3.c;
			var _v4 = transform.c;
			var ox = _v4.a;
			var oy = _v4.b;
			var oz = _v4.c;
			var angle = transform.d;
			var translate = 'translate3d(' + ($elm$core$String$fromFloat(tx) + ('px, ' + ($elm$core$String$fromFloat(ty) + ('px, ' + ($elm$core$String$fromFloat(tz) + 'px)')))));
			var scale = 'scale3d(' + ($elm$core$String$fromFloat(sx) + (', ' + ($elm$core$String$fromFloat(sy) + (', ' + ($elm$core$String$fromFloat(sz) + ')')))));
			var rotate = 'rotate3d(' + ($elm$core$String$fromFloat(ox) + (', ' + ($elm$core$String$fromFloat(oy) + (', ' + ($elm$core$String$fromFloat(oz) + (', ' + ($elm$core$String$fromFloat(angle) + 'rad)')))))));
			return $elm$core$Maybe$Just(translate + (' ' + (scale + (' ' + rotate))));
	}
};
var $mdgriffith$elm_ui$Internal$Model$renderStyleRule = F3(
	function (options, rule, maybePseudo) {
		switch (rule.$) {
			case 0:
				var selector = rule.a;
				var props = rule.b;
				return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options, maybePseudo, selector, props);
			case 13:
				var name = rule.a;
				var prop = rule.b;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + name,
					_List_fromArray(
						[
							A2($mdgriffith$elm_ui$Internal$Model$Property, 'box-shadow', prop)
						]));
			case 12:
				var name = rule.a;
				var transparency = rule.b;
				var opacity = A2(
					$elm$core$Basics$max,
					0,
					A2($elm$core$Basics$min, 1, 1 - transparency));
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + name,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'opacity',
							$elm$core$String$fromFloat(opacity))
						]));
			case 2:
				var i = rule.a;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.font-size-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'font-size',
							$elm$core$String$fromInt(i) + 'px')
						]));
			case 1:
				var name = rule.a;
				var typefaces = rule.b;
				var features = A2(
					$elm$core$String$join,
					', ',
					A2($elm$core$List$filterMap, $mdgriffith$elm_ui$Internal$Model$renderVariants, typefaces));
				var families = _List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Model$Property,
						'font-family',
						A2(
							$elm$core$String$join,
							', ',
							A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$fontName, typefaces))),
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'font-feature-settings', features),
						A2(
						$mdgriffith$elm_ui$Internal$Model$Property,
						'font-variant',
						A2($elm$core$List$any, $mdgriffith$elm_ui$Internal$Model$hasSmallCaps, typefaces) ? 'small-caps' : 'normal')
					]);
				return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options, maybePseudo, '.' + name, families);
			case 3:
				var _class = rule.a;
				var prop = rule.b;
				var val = rule.c;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + _class,
					_List_fromArray(
						[
							A2($mdgriffith$elm_ui$Internal$Model$Property, prop, val)
						]));
			case 4:
				var _class = rule.a;
				var prop = rule.b;
				var color = rule.c;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + _class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							prop,
							$mdgriffith$elm_ui$Internal$Model$formatColor(color))
						]));
			case 5:
				var cls = rule.a;
				var x = rule.b;
				var y = rule.c;
				var yPx = $elm$core$String$fromInt(y) + 'px';
				var xPx = $elm$core$String$fromInt(x) + 'px';
				var single = '.' + $mdgriffith$elm_ui$Internal$Style$classes.hM;
				var row = '.' + $mdgriffith$elm_ui$Internal$Style$classes.fI;
				var wrappedRow = '.' + ($mdgriffith$elm_ui$Internal$Style$classes.ew + row);
				var right = '.' + $mdgriffith$elm_ui$Internal$Style$classes.eC;
				var paragraph = '.' + $mdgriffith$elm_ui$Internal$Style$classes.fq;
				var page = '.' + $mdgriffith$elm_ui$Internal$Style$classes.fp;
				var left = '.' + $mdgriffith$elm_ui$Internal$Style$classes.eB;
				var halfY = $elm$core$String$fromFloat(y / 2) + 'px';
				var halfX = $elm$core$String$fromFloat(x / 2) + 'px';
				var column = '.' + $mdgriffith$elm_ui$Internal$Style$classes.ad;
				var _class = '.' + cls;
				var any = '.' + $mdgriffith$elm_ui$Internal$Style$classes.go;
				return $elm$core$List$concat(
					_List_fromArray(
						[
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (row + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (wrappedRow + (' > ' + any)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin', halfY + (' ' + halfX))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (column + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-top', yPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-top', yPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + left)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-right', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + right)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_Utils_ap(_class, paragraph),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'line-height',
									'calc(1em + ' + ($elm$core$String$fromInt(y) + 'px)'))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							'textarea' + (any + _class),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'line-height',
									'calc(1em + ' + ($elm$core$String$fromInt(y) + 'px)')),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'height',
									'calc(100% + ' + ($elm$core$String$fromInt(y) + 'px)'))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + (' > ' + left)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-right', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + (' > ' + right)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + '::after'),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'content', '\'\''),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'display', 'block'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'height', '0'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'width', '0'),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'margin-top',
									$elm$core$String$fromInt((-1) * ((y / 2) | 0)) + 'px')
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + '::before'),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'content', '\'\''),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'display', 'block'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'height', '0'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'width', '0'),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'margin-bottom',
									$elm$core$String$fromInt((-1) * ((y / 2) | 0)) + 'px')
								]))
						]));
			case 7:
				var cls = rule.a;
				var top = rule.b;
				var right = rule.c;
				var bottom = rule.d;
				var left = rule.e;
				var _class = '.' + cls;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					_class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'padding',
							$elm$core$String$fromInt(top) + ('px ' + ($elm$core$String$fromInt(right) + ('px ' + ($elm$core$String$fromInt(bottom) + ('px ' + ($elm$core$String$fromInt(left) + 'px')))))))
						]));
			case 6:
				var cls = rule.a;
				var top = rule.b;
				var right = rule.c;
				var bottom = rule.d;
				var left = rule.e;
				var _class = '.' + cls;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					_class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'border-width',
							$elm$core$String$fromInt(top) + ('px ' + ($elm$core$String$fromInt(right) + ('px ' + ($elm$core$String$fromInt(bottom) + ('px ' + ($elm$core$String$fromInt(left) + 'px')))))))
						]));
			case 8:
				var template = rule.a;
				var toGridLengthHelper = F3(
					function (minimum, maximum, x) {
						toGridLengthHelper:
						while (true) {
							switch (x.$) {
								case 0:
									var px = x.a;
									return $elm$core$String$fromInt(px) + 'px';
								case 1:
									var _v2 = _Utils_Tuple2(minimum, maximum);
									if (_v2.a.$ === 1) {
										if (_v2.b.$ === 1) {
											var _v3 = _v2.a;
											var _v4 = _v2.b;
											return 'max-content';
										} else {
											var _v6 = _v2.a;
											var maxSize = _v2.b.a;
											return 'minmax(max-content, ' + ($elm$core$String$fromInt(maxSize) + 'px)');
										}
									} else {
										if (_v2.b.$ === 1) {
											var minSize = _v2.a.a;
											var _v5 = _v2.b;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + 'max-content)'));
										} else {
											var minSize = _v2.a.a;
											var maxSize = _v2.b.a;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(maxSize) + 'px)')));
										}
									}
								case 2:
									var i = x.a;
									var _v7 = _Utils_Tuple2(minimum, maximum);
									if (_v7.a.$ === 1) {
										if (_v7.b.$ === 1) {
											var _v8 = _v7.a;
											var _v9 = _v7.b;
											return $elm$core$String$fromInt(i) + 'fr';
										} else {
											var _v11 = _v7.a;
											var maxSize = _v7.b.a;
											return 'minmax(max-content, ' + ($elm$core$String$fromInt(maxSize) + 'px)');
										}
									} else {
										if (_v7.b.$ === 1) {
											var minSize = _v7.a.a;
											var _v10 = _v7.b;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(i) + ('fr' + 'fr)'))));
										} else {
											var minSize = _v7.a.a;
											var maxSize = _v7.b.a;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(maxSize) + 'px)')));
										}
									}
								case 3:
									var m = x.a;
									var len = x.b;
									var $temp$minimum = $elm$core$Maybe$Just(m),
										$temp$maximum = maximum,
										$temp$x = len;
									minimum = $temp$minimum;
									maximum = $temp$maximum;
									x = $temp$x;
									continue toGridLengthHelper;
								default:
									var m = x.a;
									var len = x.b;
									var $temp$minimum = minimum,
										$temp$maximum = $elm$core$Maybe$Just(m),
										$temp$x = len;
									minimum = $temp$minimum;
									maximum = $temp$maximum;
									x = $temp$x;
									continue toGridLengthHelper;
							}
						}
					});
				var toGridLength = function (x) {
					return A3(toGridLengthHelper, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing, x);
				};
				var xSpacing = toGridLength(template.hP.a);
				var ySpacing = toGridLength(template.hP.b);
				var rows = function (x) {
					return 'grid-template-rows: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$map, toGridLength, template.hF)));
				var msRows = function (x) {
					return '-ms-grid-rows: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						ySpacing,
						A2($elm$core$List$map, toGridLength, template.X)));
				var msColumns = function (x) {
					return '-ms-grid-columns: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						ySpacing,
						A2($elm$core$List$map, toGridLength, template.X)));
				var gapY = 'grid-row-gap:' + (toGridLength(template.hP.b) + ';');
				var gapX = 'grid-column-gap:' + (toGridLength(template.hP.a) + ';');
				var columns = function (x) {
					return 'grid-template-columns: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$map, toGridLength, template.X)));
				var _class = '.grid-rows-' + (A2(
					$elm$core$String$join,
					'-',
					A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.hF)) + ('-cols-' + (A2(
					$elm$core$String$join,
					'-',
					A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.X)) + ('-space-x-' + ($mdgriffith$elm_ui$Internal$Model$lengthClassName(template.hP.a) + ('-space-y-' + $mdgriffith$elm_ui$Internal$Model$lengthClassName(template.hP.b)))))));
				var modernGrid = _class + ('{' + (columns + (rows + (gapX + (gapY + '}')))));
				var supports = '@supports (display:grid) {' + (modernGrid + '}');
				var base = _class + ('{' + (msColumns + (msRows + '}')));
				return _List_fromArray(
					[base, supports]);
			case 9:
				var position = rule.a;
				var msPosition = A2(
					$elm$core$String$join,
					' ',
					_List_fromArray(
						[
							'-ms-grid-row: ' + ($elm$core$String$fromInt(position.fI) + ';'),
							'-ms-grid-row-span: ' + ($elm$core$String$fromInt(position.e2) + ';'),
							'-ms-grid-column: ' + ($elm$core$String$fromInt(position.eI) + ';'),
							'-ms-grid-column-span: ' + ($elm$core$String$fromInt(position.du) + ';')
						]));
				var modernPosition = A2(
					$elm$core$String$join,
					' ',
					_List_fromArray(
						[
							'grid-row: ' + ($elm$core$String$fromInt(position.fI) + (' / ' + ($elm$core$String$fromInt(position.fI + position.e2) + ';'))),
							'grid-column: ' + ($elm$core$String$fromInt(position.eI) + (' / ' + ($elm$core$String$fromInt(position.eI + position.du) + ';')))
						]));
				var _class = '.grid-pos-' + ($elm$core$String$fromInt(position.fI) + ('-' + ($elm$core$String$fromInt(position.eI) + ('-' + ($elm$core$String$fromInt(position.du) + ('-' + $elm$core$String$fromInt(position.e2)))))));
				var modernGrid = _class + ('{' + (modernPosition + '}'));
				var supports = '@supports (display:grid) {' + (modernGrid + '}');
				var base = _class + ('{' + (msPosition + '}'));
				return _List_fromArray(
					[base, supports]);
			case 11:
				var _class = rule.a;
				var styles = rule.b;
				var renderPseudoRule = function (style) {
					return A3(
						$mdgriffith$elm_ui$Internal$Model$renderStyleRule,
						options,
						style,
						$elm$core$Maybe$Just(_class));
				};
				return A2($elm$core$List$concatMap, renderPseudoRule, styles);
			default:
				var transform = rule.a;
				var val = $mdgriffith$elm_ui$Internal$Model$transformValue(transform);
				var _class = $mdgriffith$elm_ui$Internal$Model$transformClass(transform);
				var _v12 = _Utils_Tuple2(_class, val);
				if ((!_v12.a.$) && (!_v12.b.$)) {
					var cls = _v12.a.a;
					var v = _v12.b.a;
					return A4(
						$mdgriffith$elm_ui$Internal$Model$renderStyle,
						options,
						maybePseudo,
						'.' + cls,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Model$Property, 'transform', v)
							]));
				} else {
					return _List_Nil;
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$encodeStyles = F2(
	function (options, stylesheet) {
		return $elm$json$Json$Encode$object(
			A2(
				$elm$core$List$map,
				function (style) {
					var styled = A3($mdgriffith$elm_ui$Internal$Model$renderStyleRule, options, style, $elm$core$Maybe$Nothing);
					return _Utils_Tuple2(
						$mdgriffith$elm_ui$Internal$Model$getStyleName(style),
						A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, styled));
				},
				stylesheet));
	});
var $mdgriffith$elm_ui$Internal$Model$bracket = F2(
	function (selector, rules) {
		var renderPair = function (_v0) {
			var name = _v0.a;
			var val = _v0.b;
			return name + (': ' + (val + ';'));
		};
		return selector + (' {' + (A2(
			$elm$core$String$join,
			'',
			A2($elm$core$List$map, renderPair, rules)) + '}'));
	});
var $mdgriffith$elm_ui$Internal$Model$fontRule = F3(
	function (name, modifier, _v0) {
		var parentAdj = _v0.a;
		var textAdjustment = _v0.b;
		return _List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Model$bracket, '.' + (name + ('.' + (modifier + (', ' + ('.' + (name + (' .' + modifier))))))), parentAdj),
				A2($mdgriffith$elm_ui$Internal$Model$bracket, '.' + (name + ('.' + (modifier + ('> .' + ($mdgriffith$elm_ui$Internal$Style$classes.ep + (', .' + (name + (' .' + (modifier + (' > .' + $mdgriffith$elm_ui$Internal$Style$classes.ep)))))))))), textAdjustment)
			]);
	});
var $mdgriffith$elm_ui$Internal$Model$renderFontAdjustmentRule = F3(
	function (fontToAdjust, _v0, otherFontName) {
		var full = _v0.a;
		var capital = _v0.b;
		var name = _Utils_eq(fontToAdjust, otherFontName) ? fontToAdjust : (otherFontName + (' .' + fontToAdjust));
		return A2(
			$elm$core$String$join,
			' ',
			_Utils_ap(
				A3($mdgriffith$elm_ui$Internal$Model$fontRule, name, $mdgriffith$elm_ui$Internal$Style$classes.hN, capital),
				A3($mdgriffith$elm_ui$Internal$Model$fontRule, name, $mdgriffith$elm_ui$Internal$Style$classes.gX, full)));
	});
var $mdgriffith$elm_ui$Internal$Model$renderNullAdjustmentRule = F2(
	function (fontToAdjust, otherFontName) {
		var name = _Utils_eq(fontToAdjust, otherFontName) ? fontToAdjust : (otherFontName + (' .' + fontToAdjust));
		return A2(
			$elm$core$String$join,
			' ',
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Internal$Model$bracket,
					'.' + (name + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.hN + (', ' + ('.' + (name + (' .' + $mdgriffith$elm_ui$Internal$Style$classes.hN))))))),
					_List_fromArray(
						[
							_Utils_Tuple2('line-height', '1')
						])),
					A2(
					$mdgriffith$elm_ui$Internal$Model$bracket,
					'.' + (name + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.hN + ('> .' + ($mdgriffith$elm_ui$Internal$Style$classes.ep + (', .' + (name + (' .' + ($mdgriffith$elm_ui$Internal$Style$classes.hN + (' > .' + $mdgriffith$elm_ui$Internal$Style$classes.ep)))))))))),
					_List_fromArray(
						[
							_Utils_Tuple2('vertical-align', '0'),
							_Utils_Tuple2('line-height', '1')
						]))
				]));
	});
var $mdgriffith$elm_ui$Internal$Model$adjust = F3(
	function (size, height, vertical) {
		return {e2: height / size, ej: size, f5: vertical};
	});
var $elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$max, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$List$minimum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$min, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$convertAdjustment = function (adjustment) {
	var lines = _List_fromArray(
		[adjustment.gC, adjustment.gs, adjustment.gN, adjustment.hk]);
	var lineHeight = 1.5;
	var normalDescender = (lineHeight - 1) / 2;
	var oldMiddle = lineHeight / 2;
	var descender = A2(
		$elm$core$Maybe$withDefault,
		adjustment.gN,
		$elm$core$List$minimum(lines));
	var newBaseline = A2(
		$elm$core$Maybe$withDefault,
		adjustment.gs,
		$elm$core$List$minimum(
			A2(
				$elm$core$List$filter,
				function (x) {
					return !_Utils_eq(x, descender);
				},
				lines)));
	var base = lineHeight;
	var ascender = A2(
		$elm$core$Maybe$withDefault,
		adjustment.gC,
		$elm$core$List$maximum(lines));
	var capitalSize = 1 / (ascender - newBaseline);
	var capitalVertical = 1 - ascender;
	var fullSize = 1 / (ascender - descender);
	var fullVertical = 1 - ascender;
	var newCapitalMiddle = ((ascender - newBaseline) / 2) + newBaseline;
	var newFullMiddle = ((ascender - descender) / 2) + descender;
	return {
		gC: A3($mdgriffith$elm_ui$Internal$Model$adjust, capitalSize, ascender - newBaseline, capitalVertical),
		e_: A3($mdgriffith$elm_ui$Internal$Model$adjust, fullSize, ascender - descender, fullVertical)
	};
};
var $mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules = function (converted) {
	return _Utils_Tuple2(
		_List_fromArray(
			[
				_Utils_Tuple2('display', 'block')
			]),
		_List_fromArray(
			[
				_Utils_Tuple2('display', 'inline-block'),
				_Utils_Tuple2(
				'line-height',
				$elm$core$String$fromFloat(converted.e2)),
				_Utils_Tuple2(
				'vertical-align',
				$elm$core$String$fromFloat(converted.f5) + 'em'),
				_Utils_Tuple2(
				'font-size',
				$elm$core$String$fromFloat(converted.ej) + 'em')
			]));
};
var $mdgriffith$elm_ui$Internal$Model$typefaceAdjustment = function (typefaces) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (face, found) {
				if (found.$ === 1) {
					if (face.$ === 5) {
						var _with = face.a;
						var _v2 = _with.gd;
						if (_v2.$ === 1) {
							return found;
						} else {
							var adjustment = _v2.a;
							return $elm$core$Maybe$Just(
								_Utils_Tuple2(
									$mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(
										function ($) {
											return $.e_;
										}(
											$mdgriffith$elm_ui$Internal$Model$convertAdjustment(adjustment))),
									$mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(
										function ($) {
											return $.gC;
										}(
											$mdgriffith$elm_ui$Internal$Model$convertAdjustment(adjustment)))));
						}
					} else {
						return found;
					}
				} else {
					return found;
				}
			}),
		$elm$core$Maybe$Nothing,
		typefaces);
};
var $mdgriffith$elm_ui$Internal$Model$renderTopLevelValues = function (rules) {
	var withImport = function (font) {
		if (font.$ === 4) {
			var url = font.b;
			return $elm$core$Maybe$Just('@import url(\'' + (url + '\');'));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	};
	var fontImports = function (_v2) {
		var name = _v2.a;
		var typefaces = _v2.b;
		var imports = A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$filterMap, withImport, typefaces));
		return imports;
	};
	var allNames = A2($elm$core$List$map, $elm$core$Tuple$first, rules);
	var fontAdjustments = function (_v1) {
		var name = _v1.a;
		var typefaces = _v1.b;
		var _v0 = $mdgriffith$elm_ui$Internal$Model$typefaceAdjustment(typefaces);
		if (_v0.$ === 1) {
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$map,
					$mdgriffith$elm_ui$Internal$Model$renderNullAdjustmentRule(name),
					allNames));
		} else {
			var adjustment = _v0.a;
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$map,
					A2($mdgriffith$elm_ui$Internal$Model$renderFontAdjustmentRule, name, adjustment),
					allNames));
		}
	};
	return _Utils_ap(
		A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$map, fontImports, rules)),
		A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$map, fontAdjustments, rules)));
};
var $mdgriffith$elm_ui$Internal$Model$topLevelValue = function (rule) {
	if (rule.$ === 1) {
		var name = rule.a;
		var typefaces = rule.b;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(name, typefaces));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$toStyleSheetString = F2(
	function (options, stylesheet) {
		var combine = F2(
			function (style, rendered) {
				return {
					da: _Utils_ap(
						rendered.da,
						A3($mdgriffith$elm_ui$Internal$Model$renderStyleRule, options, style, $elm$core$Maybe$Nothing)),
					bR: function () {
						var _v1 = $mdgriffith$elm_ui$Internal$Model$topLevelValue(style);
						if (_v1.$ === 1) {
							return rendered.bR;
						} else {
							var topLevel = _v1.a;
							return A2($elm$core$List$cons, topLevel, rendered.bR);
						}
					}()
				};
			});
		var _v0 = A3(
			$elm$core$List$foldl,
			combine,
			{da: _List_Nil, bR: _List_Nil},
			stylesheet);
		var topLevel = _v0.bR;
		var rules = _v0.da;
		return _Utils_ap(
			$mdgriffith$elm_ui$Internal$Model$renderTopLevelValues(topLevel),
			$elm$core$String$concat(rules));
	});
var $mdgriffith$elm_ui$Internal$Model$toStyleSheet = F2(
	function (options, styleSheet) {
		var _v0 = options.hn;
		switch (_v0) {
			case 0:
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'div',
					_List_Nil,
					_List_fromArray(
						[
							A3(
							$elm$virtual_dom$VirtualDom$node,
							'style',
							_List_Nil,
							_List_fromArray(
								[
									$elm$virtual_dom$VirtualDom$text(
									A2($mdgriffith$elm_ui$Internal$Model$toStyleSheetString, options, styleSheet))
								]))
						]));
			case 1:
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'div',
					_List_Nil,
					_List_fromArray(
						[
							A3(
							$elm$virtual_dom$VirtualDom$node,
							'style',
							_List_Nil,
							_List_fromArray(
								[
									$elm$virtual_dom$VirtualDom$text(
									A2($mdgriffith$elm_ui$Internal$Model$toStyleSheetString, options, styleSheet))
								]))
						]));
			default:
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'elm-ui-rules',
					_List_fromArray(
						[
							A2(
							$elm$virtual_dom$VirtualDom$property,
							'rules',
							A2($mdgriffith$elm_ui$Internal$Model$encodeStyles, options, styleSheet))
						]),
					_List_Nil);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$embedKeyed = F4(
	function (_static, opts, styles, children) {
		var dynamicStyleSheet = A2(
			$mdgriffith$elm_ui$Internal$Model$toStyleSheet,
			opts,
			A3(
				$elm$core$List$foldl,
				$mdgriffith$elm_ui$Internal$Model$reduceStyles,
				_Utils_Tuple2(
					$elm$core$Set$empty,
					$mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts.gV)),
				styles).b);
		return _static ? A2(
			$elm$core$List$cons,
			_Utils_Tuple2(
				'static-stylesheet',
				$mdgriffith$elm_ui$Internal$Model$staticRoot(opts)),
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2('dynamic-stylesheet', dynamicStyleSheet),
				children)) : A2(
			$elm$core$List$cons,
			_Utils_Tuple2('dynamic-stylesheet', dynamicStyleSheet),
			children);
	});
var $mdgriffith$elm_ui$Internal$Model$embedWith = F4(
	function (_static, opts, styles, children) {
		var dynamicStyleSheet = A2(
			$mdgriffith$elm_ui$Internal$Model$toStyleSheet,
			opts,
			A3(
				$elm$core$List$foldl,
				$mdgriffith$elm_ui$Internal$Model$reduceStyles,
				_Utils_Tuple2(
					$elm$core$Set$empty,
					$mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts.gV)),
				styles).b);
		return _static ? A2(
			$elm$core$List$cons,
			$mdgriffith$elm_ui$Internal$Model$staticRoot(opts),
			A2($elm$core$List$cons, dynamicStyleSheet, children)) : A2($elm$core$List$cons, dynamicStyleSheet, children);
	});
var $mdgriffith$elm_ui$Internal$Flag$heightBetween = $mdgriffith$elm_ui$Internal$Flag$flag(45);
var $mdgriffith$elm_ui$Internal$Flag$heightFill = $mdgriffith$elm_ui$Internal$Flag$flag(37);
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$p = _VirtualDom_node('p');
var $mdgriffith$elm_ui$Internal$Flag$present = F2(
	function (myFlag, _v0) {
		var fieldOne = _v0.a;
		var fieldTwo = _v0.b;
		if (!myFlag.$) {
			var first = myFlag.a;
			return _Utils_eq(first & fieldOne, first);
		} else {
			var second = myFlag.a;
			return _Utils_eq(second & fieldTwo, second);
		}
	});
var $elm$html$Html$s = _VirtualDom_node('s');
var $elm$html$Html$u = _VirtualDom_node('u');
var $mdgriffith$elm_ui$Internal$Flag$widthBetween = $mdgriffith$elm_ui$Internal$Flag$flag(44);
var $mdgriffith$elm_ui$Internal$Flag$widthFill = $mdgriffith$elm_ui$Internal$Flag$flag(39);
var $mdgriffith$elm_ui$Internal$Model$finalizeNode = F6(
	function (has, node, attributes, children, embedMode, parentContext) {
		var createNode = F2(
			function (nodeName, attrs) {
				if (children.$ === 1) {
					var keyed = children.a;
					return A3(
						$elm$virtual_dom$VirtualDom$keyedNode,
						nodeName,
						attrs,
						function () {
							switch (embedMode.$) {
								case 0:
									return keyed;
								case 2:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedKeyed, false, opts, styles, keyed);
								default:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedKeyed, true, opts, styles, keyed);
							}
						}());
				} else {
					var unkeyed = children.a;
					return A2(
						function () {
							switch (nodeName) {
								case 'div':
									return $elm$html$Html$div;
								case 'p':
									return $elm$html$Html$p;
								default:
									return $elm$virtual_dom$VirtualDom$node(nodeName);
							}
						}(),
						attrs,
						function () {
							switch (embedMode.$) {
								case 0:
									return unkeyed;
								case 2:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedWith, false, opts, styles, unkeyed);
								default:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedWith, true, opts, styles, unkeyed);
							}
						}());
				}
			});
		var html = function () {
			switch (node.$) {
				case 0:
					return A2(createNode, 'div', attributes);
				case 1:
					var nodeName = node.a;
					return A2(createNode, nodeName, attributes);
				default:
					var nodeName = node.a;
					var internal = node.b;
					return A3(
						$elm$virtual_dom$VirtualDom$node,
						nodeName,
						attributes,
						_List_fromArray(
							[
								A2(
								createNode,
								internal,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Style$classes.go + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.hM))
									]))
							]));
			}
		}();
		switch (parentContext) {
			case 0:
				return (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$widthFill, has) && (!A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$widthBetween, has))) ? html : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$alignRight, has) ? A2(
					$elm$html$Html$u,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.go, $mdgriffith$elm_ui$Internal$Style$classes.hM, $mdgriffith$elm_ui$Internal$Style$classes.ci, $mdgriffith$elm_ui$Internal$Style$classes.ae, $mdgriffith$elm_ui$Internal$Style$classes.gk])))
						]),
					_List_fromArray(
						[html])) : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$centerX, has) ? A2(
					$elm$html$Html$s,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.go, $mdgriffith$elm_ui$Internal$Style$classes.hM, $mdgriffith$elm_ui$Internal$Style$classes.ci, $mdgriffith$elm_ui$Internal$Style$classes.ae, $mdgriffith$elm_ui$Internal$Style$classes.gi])))
						]),
					_List_fromArray(
						[html])) : html));
			case 1:
				return (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$heightFill, has) && (!A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$heightBetween, has))) ? html : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$centerY, has) ? A2(
					$elm$html$Html$s,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.go, $mdgriffith$elm_ui$Internal$Style$classes.hM, $mdgriffith$elm_ui$Internal$Style$classes.ci, $mdgriffith$elm_ui$Internal$Style$classes.gj])))
						]),
					_List_fromArray(
						[html])) : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$alignBottom, has) ? A2(
					$elm$html$Html$u,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.go, $mdgriffith$elm_ui$Internal$Style$classes.hM, $mdgriffith$elm_ui$Internal$Style$classes.ci, $mdgriffith$elm_ui$Internal$Style$classes.gh])))
						]),
					_List_fromArray(
						[html])) : html));
			default:
				return html;
		}
	});
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $mdgriffith$elm_ui$Internal$Model$textElementClasses = $mdgriffith$elm_ui$Internal$Style$classes.go + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.ep + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.eu + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.dR)))));
var $mdgriffith$elm_ui$Internal$Model$textElement = function (str) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Model$textElementClasses)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $mdgriffith$elm_ui$Internal$Model$textElementFillClasses = $mdgriffith$elm_ui$Internal$Style$classes.go + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.ep + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.ev + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.dS)))));
var $mdgriffith$elm_ui$Internal$Model$textElementFill = function (str) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Model$textElementFillClasses)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $mdgriffith$elm_ui$Internal$Model$createElement = F3(
	function (context, children, rendered) {
		var gatherKeyed = F2(
			function (_v8, _v9) {
				var key = _v8.a;
				var child = _v8.b;
				var htmls = _v9.a;
				var existingStyles = _v9.b;
				switch (child.$) {
					case 0:
						var html = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									html(context)),
								htmls),
							existingStyles) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									html(context)),
								htmls),
							existingStyles);
					case 1:
						var styled = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									A2(styled.g2, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context)),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.hV : _Utils_ap(styled.hV, existingStyles)) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									A2(styled.g2, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context)),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.hV : _Utils_ap(styled.hV, existingStyles));
					case 2:
						var str = child.a;
						return _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									_Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asEl) ? $mdgriffith$elm_ui$Internal$Model$textElementFill(str) : $mdgriffith$elm_ui$Internal$Model$textElement(str)),
								htmls),
							existingStyles);
					default:
						return _Utils_Tuple2(htmls, existingStyles);
				}
			});
		var gather = F2(
			function (child, _v6) {
				var htmls = _v6.a;
				var existingStyles = _v6.b;
				switch (child.$) {
					case 0:
						var html = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								html(context),
								htmls),
							existingStyles) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								html(context),
								htmls),
							existingStyles);
					case 1:
						var styled = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								A2(styled.g2, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.hV : _Utils_ap(styled.hV, existingStyles)) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								A2(styled.g2, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.hV : _Utils_ap(styled.hV, existingStyles));
					case 2:
						var str = child.a;
						return _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asEl) ? $mdgriffith$elm_ui$Internal$Model$textElementFill(str) : $mdgriffith$elm_ui$Internal$Model$textElement(str),
								htmls),
							existingStyles);
					default:
						return _Utils_Tuple2(htmls, existingStyles);
				}
			});
		if (children.$ === 1) {
			var keyedChildren = children.a;
			var _v1 = A3(
				$elm$core$List$foldr,
				gatherKeyed,
				_Utils_Tuple2(_List_Nil, _List_Nil),
				keyedChildren);
			var keyed = _v1.a;
			var styles = _v1.b;
			var newStyles = $elm$core$List$isEmpty(styles) ? rendered.hV : _Utils_ap(rendered.hV, styles);
			if (!newStyles.b) {
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A5(
						$mdgriffith$elm_ui$Internal$Model$finalizeNode,
						rendered.at,
						rendered.av,
						rendered.am,
						$mdgriffith$elm_ui$Internal$Model$Keyed(
							A3($mdgriffith$elm_ui$Internal$Model$addKeyedChildren, 'nearby-element-pls', keyed, rendered.ao)),
						$mdgriffith$elm_ui$Internal$Model$NoStyleSheet));
			} else {
				var allStyles = newStyles;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						g2: A4(
							$mdgriffith$elm_ui$Internal$Model$finalizeNode,
							rendered.at,
							rendered.av,
							rendered.am,
							$mdgriffith$elm_ui$Internal$Model$Keyed(
								A3($mdgriffith$elm_ui$Internal$Model$addKeyedChildren, 'nearby-element-pls', keyed, rendered.ao))),
						hV: allStyles
					});
			}
		} else {
			var unkeyedChildren = children.a;
			var _v3 = A3(
				$elm$core$List$foldr,
				gather,
				_Utils_Tuple2(_List_Nil, _List_Nil),
				unkeyedChildren);
			var unkeyed = _v3.a;
			var styles = _v3.b;
			var newStyles = $elm$core$List$isEmpty(styles) ? rendered.hV : _Utils_ap(rendered.hV, styles);
			if (!newStyles.b) {
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A5(
						$mdgriffith$elm_ui$Internal$Model$finalizeNode,
						rendered.at,
						rendered.av,
						rendered.am,
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							A2($mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed, rendered.ao)),
						$mdgriffith$elm_ui$Internal$Model$NoStyleSheet));
			} else {
				var allStyles = newStyles;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						g2: A4(
							$mdgriffith$elm_ui$Internal$Model$finalizeNode,
							rendered.at,
							rendered.av,
							rendered.am,
							$mdgriffith$elm_ui$Internal$Model$Unkeyed(
								A2($mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed, rendered.ao))),
						hV: allStyles
					});
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Single = F3(
	function (a, b, c) {
		return {$: 3, a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$Transform = function (a) {
	return {$: 10, a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$core$Bitwise$or = _Bitwise_or;
var $mdgriffith$elm_ui$Internal$Flag$add = F2(
	function (myFlag, _v0) {
		var one = _v0.a;
		var two = _v0.b;
		if (!myFlag.$) {
			var first = myFlag.a;
			return A2($mdgriffith$elm_ui$Internal$Flag$Field, first | one, two);
		} else {
			var second = myFlag.a;
			return A2($mdgriffith$elm_ui$Internal$Flag$Field, one, second | two);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$ChildrenBehind = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$ChildrenInFront = function (a) {
	return {$: 2, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$nearbyElement = F2(
	function (location, elem) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class(
					function () {
						switch (location) {
							case 0:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.a6, $mdgriffith$elm_ui$Internal$Style$classes.hM, $mdgriffith$elm_ui$Internal$Style$classes.gc]));
							case 1:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.a6, $mdgriffith$elm_ui$Internal$Style$classes.hM, $mdgriffith$elm_ui$Internal$Style$classes.gu]));
							case 2:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.a6, $mdgriffith$elm_ui$Internal$Style$classes.hM, $mdgriffith$elm_ui$Internal$Style$classes.hv]));
							case 3:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.a6, $mdgriffith$elm_ui$Internal$Style$classes.hM, $mdgriffith$elm_ui$Internal$Style$classes.ht]));
							case 4:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.a6, $mdgriffith$elm_ui$Internal$Style$classes.hM, $mdgriffith$elm_ui$Internal$Style$classes.g6]));
							default:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.a6, $mdgriffith$elm_ui$Internal$Style$classes.hM, $mdgriffith$elm_ui$Internal$Style$classes.gt]));
						}
					}())
				]),
			_List_fromArray(
				[
					function () {
					switch (elem.$) {
						case 3:
							return $elm$virtual_dom$VirtualDom$text('');
						case 2:
							var str = elem.a;
							return $mdgriffith$elm_ui$Internal$Model$textElement(str);
						case 0:
							var html = elem.a;
							return html($mdgriffith$elm_ui$Internal$Model$asEl);
						default:
							var styled = elem.a;
							return A2(styled.g2, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, $mdgriffith$elm_ui$Internal$Model$asEl);
					}
				}()
				]));
	});
var $mdgriffith$elm_ui$Internal$Model$addNearbyElement = F3(
	function (location, elem, existing) {
		var nearby = A2($mdgriffith$elm_ui$Internal$Model$nearbyElement, location, elem);
		switch (existing.$) {
			case 0:
				if (location === 5) {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenBehind(
						_List_fromArray(
							[nearby]));
				} else {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenInFront(
						_List_fromArray(
							[nearby]));
				}
			case 1:
				var existingBehind = existing.a;
				if (location === 5) {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenBehind(
						A2($elm$core$List$cons, nearby, existingBehind));
				} else {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						existingBehind,
						_List_fromArray(
							[nearby]));
				}
			case 2:
				var existingInFront = existing.a;
				if (location === 5) {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						_List_fromArray(
							[nearby]),
						existingInFront);
				} else {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenInFront(
						A2($elm$core$List$cons, nearby, existingInFront));
				}
			default:
				var existingBehind = existing.a;
				var existingInFront = existing.b;
				if (location === 5) {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						A2($elm$core$List$cons, nearby, existingBehind),
						existingInFront);
				} else {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						existingBehind,
						A2($elm$core$List$cons, nearby, existingInFront));
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Embedded = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$NodeName = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$addNodeName = F2(
	function (newNode, old) {
		switch (old.$) {
			case 0:
				return $mdgriffith$elm_ui$Internal$Model$NodeName(newNode);
			case 1:
				var name = old.a;
				return A2($mdgriffith$elm_ui$Internal$Model$Embedded, name, newNode);
			default:
				var x = old.a;
				var y = old.b;
				return A2($mdgriffith$elm_ui$Internal$Model$Embedded, x, y);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$alignXName = function (align) {
	switch (align) {
		case 0:
			return $mdgriffith$elm_ui$Internal$Style$classes.dy + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.eB);
		case 2:
			return $mdgriffith$elm_ui$Internal$Style$classes.dy + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.eC);
		default:
			return $mdgriffith$elm_ui$Internal$Style$classes.dy + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.gf);
	}
};
var $mdgriffith$elm_ui$Internal$Model$alignYName = function (align) {
	switch (align) {
		case 0:
			return $mdgriffith$elm_ui$Internal$Style$classes.dz + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.gl);
		case 2:
			return $mdgriffith$elm_ui$Internal$Style$classes.dz + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.ge);
		default:
			return $mdgriffith$elm_ui$Internal$Style$classes.dz + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.gg);
	}
};
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $mdgriffith$elm_ui$Internal$Model$FullTransform = F4(
	function (a, b, c, d) {
		return {$: 2, a: a, b: b, c: c, d: d};
	});
var $mdgriffith$elm_ui$Internal$Model$Moved = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$composeTransformation = F2(
	function (transform, component) {
		switch (transform.$) {
			case 0:
				switch (component.$) {
					case 0:
						var x = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, 0, 0));
					case 1:
						var y = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(0, y, 0));
					case 2:
						var z = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(0, 0, z));
					case 3:
						var xyz = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(xyz);
					case 4:
						var xyz = component.a;
						var angle = component.b;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(0, 0, 0),
							_Utils_Tuple3(1, 1, 1),
							xyz,
							angle);
					default:
						var xyz = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(0, 0, 0),
							xyz,
							_Utils_Tuple3(0, 0, 1),
							0);
				}
			case 1:
				var moved = transform.a;
				var x = moved.a;
				var y = moved.b;
				var z = moved.c;
				switch (component.$) {
					case 0:
						var newX = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(newX, y, z));
					case 1:
						var newY = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, newY, z));
					case 2:
						var newZ = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, y, newZ));
					case 3:
						var xyz = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(xyz);
					case 4:
						var xyz = component.a;
						var angle = component.b;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							moved,
							_Utils_Tuple3(1, 1, 1),
							xyz,
							angle);
					default:
						var scale = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							moved,
							scale,
							_Utils_Tuple3(0, 0, 1),
							0);
				}
			default:
				var moved = transform.a;
				var x = moved.a;
				var y = moved.b;
				var z = moved.c;
				var scaled = transform.b;
				var origin = transform.c;
				var angle = transform.d;
				switch (component.$) {
					case 0:
						var newX = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(newX, y, z),
							scaled,
							origin,
							angle);
					case 1:
						var newY = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(x, newY, z),
							scaled,
							origin,
							angle);
					case 2:
						var newZ = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(x, y, newZ),
							scaled,
							origin,
							angle);
					case 3:
						var newMove = component.a;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, newMove, scaled, origin, angle);
					case 4:
						var newOrigin = component.a;
						var newAngle = component.b;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, moved, scaled, newOrigin, newAngle);
					default:
						var newScale = component.a;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, moved, newScale, origin, angle);
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Flag$height = $mdgriffith$elm_ui$Internal$Flag$flag(7);
var $mdgriffith$elm_ui$Internal$Flag$heightContent = $mdgriffith$elm_ui$Internal$Flag$flag(36);
var $mdgriffith$elm_ui$Internal$Flag$merge = F2(
	function (_v0, _v1) {
		var one = _v0.a;
		var two = _v0.b;
		var three = _v1.a;
		var four = _v1.b;
		return A2($mdgriffith$elm_ui$Internal$Flag$Field, one | three, two | four);
	});
var $mdgriffith$elm_ui$Internal$Flag$none = A2($mdgriffith$elm_ui$Internal$Flag$Field, 0, 0);
var $mdgriffith$elm_ui$Internal$Model$renderHeight = function (h) {
	switch (h.$) {
		case 0:
			var px = h.a;
			var val = $elm$core$String$fromInt(px);
			var name = 'height-px-' + val;
			return _Utils_Tuple3(
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Style$classes.e3 + (' ' + name),
				_List_fromArray(
					[
						A3($mdgriffith$elm_ui$Internal$Model$Single, name, 'height', val + 'px')
					]));
		case 1:
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightContent, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.dR,
				_List_Nil);
		case 2:
			var portion = h.a;
			return (portion === 1) ? _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.dS,
				_List_Nil) : _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.e4 + (' height-fill-' + $elm$core$String$fromInt(portion)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						$mdgriffith$elm_ui$Internal$Style$classes.go + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.ad + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
							'height-fill-' + $elm$core$String$fromInt(portion))))),
						'flex-grow',
						$elm$core$String$fromInt(portion * 100000))
					]));
		case 3:
			var minSize = h.a;
			var len = h.b;
			var cls = 'min-height-' + $elm$core$String$fromInt(minSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'min-height',
				$elm$core$String$fromInt(minSize) + 'px');
			var _v1 = $mdgriffith$elm_ui$Internal$Model$renderHeight(len);
			var newFlag = _v1.a;
			var newAttrs = _v1.b;
			var newStyle = _v1.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
		default:
			var maxSize = h.a;
			var len = h.b;
			var cls = 'max-height-' + $elm$core$String$fromInt(maxSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'max-height',
				$elm$core$String$fromInt(maxSize) + 'px');
			var _v2 = $mdgriffith$elm_ui$Internal$Model$renderHeight(len);
			var newFlag = _v2.a;
			var newAttrs = _v2.b;
			var newStyle = _v2.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
	}
};
var $mdgriffith$elm_ui$Internal$Flag$widthContent = $mdgriffith$elm_ui$Internal$Flag$flag(38);
var $mdgriffith$elm_ui$Internal$Model$renderWidth = function (w) {
	switch (w.$) {
		case 0:
			var px = w.a;
			return _Utils_Tuple3(
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Style$classes.f9 + (' width-px-' + $elm$core$String$fromInt(px)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						'width-px-' + $elm$core$String$fromInt(px),
						'width',
						$elm$core$String$fromInt(px) + 'px')
					]));
		case 1:
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthContent, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.eu,
				_List_Nil);
		case 2:
			var portion = w.a;
			return (portion === 1) ? _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.ev,
				_List_Nil) : _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.ga + (' width-fill-' + $elm$core$String$fromInt(portion)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						$mdgriffith$elm_ui$Internal$Style$classes.go + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.fI + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
							'width-fill-' + $elm$core$String$fromInt(portion))))),
						'flex-grow',
						$elm$core$String$fromInt(portion * 100000))
					]));
		case 3:
			var minSize = w.a;
			var len = w.b;
			var cls = 'min-width-' + $elm$core$String$fromInt(minSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'min-width',
				$elm$core$String$fromInt(minSize) + 'px');
			var _v1 = $mdgriffith$elm_ui$Internal$Model$renderWidth(len);
			var newFlag = _v1.a;
			var newAttrs = _v1.b;
			var newStyle = _v1.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
		default:
			var maxSize = w.a;
			var len = w.b;
			var cls = 'max-width-' + $elm$core$String$fromInt(maxSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'max-width',
				$elm$core$String$fromInt(maxSize) + 'px');
			var _v2 = $mdgriffith$elm_ui$Internal$Model$renderWidth(len);
			var newFlag = _v2.a;
			var newAttrs = _v2.b;
			var newStyle = _v2.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
	}
};
var $mdgriffith$elm_ui$Internal$Flag$borderWidth = $mdgriffith$elm_ui$Internal$Flag$flag(27);
var $mdgriffith$elm_ui$Internal$Model$skippable = F2(
	function (flag, style) {
		if (_Utils_eq(flag, $mdgriffith$elm_ui$Internal$Flag$borderWidth)) {
			if (style.$ === 3) {
				var val = style.c;
				switch (val) {
					case '0px':
						return true;
					case '1px':
						return true;
					case '2px':
						return true;
					case '3px':
						return true;
					case '4px':
						return true;
					case '5px':
						return true;
					case '6px':
						return true;
					default:
						return false;
				}
			} else {
				return false;
			}
		} else {
			switch (style.$) {
				case 2:
					var i = style.a;
					return (i >= 8) && (i <= 32);
				case 7:
					var name = style.a;
					var t = style.b;
					var r = style.c;
					var b = style.d;
					var l = style.e;
					return _Utils_eq(t, b) && (_Utils_eq(t, r) && (_Utils_eq(t, l) && ((t >= 0) && (t <= 24))));
				default:
					return false;
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Flag$width = $mdgriffith$elm_ui$Internal$Flag$flag(6);
var $mdgriffith$elm_ui$Internal$Flag$xAlign = $mdgriffith$elm_ui$Internal$Flag$flag(30);
var $mdgriffith$elm_ui$Internal$Flag$yAlign = $mdgriffith$elm_ui$Internal$Flag$flag(29);
var $mdgriffith$elm_ui$Internal$Model$gatherAttrRecursive = F8(
	function (classes, node, has, transform, styles, attrs, children, elementAttrs) {
		gatherAttrRecursive:
		while (true) {
			if (!elementAttrs.b) {
				var _v1 = $mdgriffith$elm_ui$Internal$Model$transformClass(transform);
				if (_v1.$ === 1) {
					return {
						am: A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$class(classes),
							attrs),
						ao: children,
						at: has,
						av: node,
						hV: styles
					};
				} else {
					var _class = _v1.a;
					return {
						am: A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$class(classes + (' ' + _class)),
							attrs),
						ao: children,
						at: has,
						av: node,
						hV: A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$Transform(transform),
							styles)
					};
				}
			} else {
				var attribute = elementAttrs.a;
				var remaining = elementAttrs.b;
				switch (attribute.$) {
					case 0:
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = styles,
							$temp$attrs = attrs,
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 3:
						var flag = attribute.a;
						var exactClassName = attribute.b;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, flag, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = exactClassName + (' ' + classes),
								$temp$node = node,
								$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
					case 1:
						var actualAttribute = attribute.a;
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = styles,
							$temp$attrs = A2($elm$core$List$cons, actualAttribute, attrs),
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 4:
						var flag = attribute.a;
						var style = attribute.b;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, flag, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							if (A2($mdgriffith$elm_ui$Internal$Model$skippable, flag, style)) {
								var $temp$classes = $mdgriffith$elm_ui$Internal$Model$getStyleName(style) + (' ' + classes),
									$temp$node = node,
									$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							} else {
								var $temp$classes = $mdgriffith$elm_ui$Internal$Model$getStyleName(style) + (' ' + classes),
									$temp$node = node,
									$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
									$temp$transform = transform,
									$temp$styles = A2($elm$core$List$cons, style, styles),
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							}
						}
					case 10:
						var flag = attribute.a;
						var component = attribute.b;
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
							$temp$transform = A2($mdgriffith$elm_ui$Internal$Model$composeTransformation, transform, component),
							$temp$styles = styles,
							$temp$attrs = attrs,
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 7:
						var width = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$width, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							switch (width.$) {
								case 0:
									var px = width.a;
									var $temp$classes = ($mdgriffith$elm_ui$Internal$Style$classes.f9 + (' width-px-' + $elm$core$String$fromInt(px))) + (' ' + classes),
										$temp$node = node,
										$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has),
										$temp$transform = transform,
										$temp$styles = A2(
										$elm$core$List$cons,
										A3(
											$mdgriffith$elm_ui$Internal$Model$Single,
											'width-px-' + $elm$core$String$fromInt(px),
											'width',
											$elm$core$String$fromInt(px) + 'px'),
										styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 1:
									var $temp$classes = classes + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.eu),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$add,
										$mdgriffith$elm_ui$Internal$Flag$widthContent,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 2:
									var portion = width.a;
									if (portion === 1) {
										var $temp$classes = classes + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.ev),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$widthFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.ga + (' width-fill-' + $elm$core$String$fromInt(portion)))),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$widthFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
											$temp$transform = transform,
											$temp$styles = A2(
											$elm$core$List$cons,
											A3(
												$mdgriffith$elm_ui$Internal$Model$Single,
												$mdgriffith$elm_ui$Internal$Style$classes.go + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.fI + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
													'width-fill-' + $elm$core$String$fromInt(portion))))),
												'flex-grow',
												$elm$core$String$fromInt(portion * 100000)),
											styles),
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								default:
									var _v4 = $mdgriffith$elm_ui$Internal$Model$renderWidth(width);
									var addToFlags = _v4.a;
									var newClass = _v4.b;
									var newStyles = _v4.c;
									var $temp$classes = classes + (' ' + newClass),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$merge,
										addToFlags,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
										$temp$transform = transform,
										$temp$styles = _Utils_ap(newStyles, styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
							}
						}
					case 8:
						var height = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$height, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							switch (height.$) {
								case 0:
									var px = height.a;
									var val = $elm$core$String$fromInt(px) + 'px';
									var name = 'height-px-' + val;
									var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.e3 + (' ' + (name + (' ' + classes))),
										$temp$node = node,
										$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has),
										$temp$transform = transform,
										$temp$styles = A2(
										$elm$core$List$cons,
										A3($mdgriffith$elm_ui$Internal$Model$Single, name, 'height ', val),
										styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 1:
									var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.dR + (' ' + classes),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$add,
										$mdgriffith$elm_ui$Internal$Flag$heightContent,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 2:
									var portion = height.a;
									if (portion === 1) {
										var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.dS + (' ' + classes),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$heightFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.e4 + (' height-fill-' + $elm$core$String$fromInt(portion)))),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$heightFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
											$temp$transform = transform,
											$temp$styles = A2(
											$elm$core$List$cons,
											A3(
												$mdgriffith$elm_ui$Internal$Model$Single,
												$mdgriffith$elm_ui$Internal$Style$classes.go + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.ad + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
													'height-fill-' + $elm$core$String$fromInt(portion))))),
												'flex-grow',
												$elm$core$String$fromInt(portion * 100000)),
											styles),
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								default:
									var _v6 = $mdgriffith$elm_ui$Internal$Model$renderHeight(height);
									var addToFlags = _v6.a;
									var newClass = _v6.b;
									var newStyles = _v6.c;
									var $temp$classes = classes + (' ' + newClass),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$merge,
										addToFlags,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
										$temp$transform = transform,
										$temp$styles = _Utils_ap(newStyles, styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
							}
						}
					case 2:
						var description = attribute.a;
						switch (description.$) {
							case 0:
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'main', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 1:
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'nav', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 2:
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'footer', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 3:
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'aside', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 4:
								var i = description.a;
								if (i <= 1) {
									var $temp$classes = classes,
										$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'h1', node),
										$temp$has = has,
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								} else {
									if (i < 7) {
										var $temp$classes = classes,
											$temp$node = A2(
											$mdgriffith$elm_ui$Internal$Model$addNodeName,
											'h' + $elm$core$String$fromInt(i),
											node),
											$temp$has = has,
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes,
											$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'h6', node),
											$temp$has = has,
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								}
							case 9:
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 8:
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'role', 'button'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 5:
								var label = description.a;
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-label', label),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 6:
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-live', 'polite'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							default:
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-live', 'assertive'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
						}
					case 9:
						var location = attribute.a;
						var elem = attribute.b;
						var newStyles = function () {
							switch (elem.$) {
								case 3:
									return styles;
								case 2:
									var str = elem.a;
									return styles;
								case 0:
									var html = elem.a;
									return styles;
								default:
									var styled = elem.a;
									return _Utils_ap(styles, styled.hV);
							}
						}();
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = newStyles,
							$temp$attrs = attrs,
							$temp$children = A3($mdgriffith$elm_ui$Internal$Model$addNearbyElement, location, elem, children),
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 6:
						var x = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$xAlign, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = $mdgriffith$elm_ui$Internal$Model$alignXName(x) + (' ' + classes),
								$temp$node = node,
								$temp$has = function (flags) {
								switch (x) {
									case 1:
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$centerX, flags);
									case 2:
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$alignRight, flags);
									default:
										return flags;
								}
							}(
								A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$xAlign, has)),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
					default:
						var y = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$yAlign, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = $mdgriffith$elm_ui$Internal$Model$alignYName(y) + (' ' + classes),
								$temp$node = node,
								$temp$has = function (flags) {
								switch (y) {
									case 1:
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$centerY, flags);
									case 2:
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$alignBottom, flags);
									default:
										return flags;
								}
							}(
								A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$yAlign, has)),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
				}
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Untransformed = {$: 0};
var $mdgriffith$elm_ui$Internal$Model$untransformed = $mdgriffith$elm_ui$Internal$Model$Untransformed;
var $mdgriffith$elm_ui$Internal$Model$element = F4(
	function (context, node, attributes, children) {
		return A3(
			$mdgriffith$elm_ui$Internal$Model$createElement,
			context,
			children,
			A8(
				$mdgriffith$elm_ui$Internal$Model$gatherAttrRecursive,
				$mdgriffith$elm_ui$Internal$Model$contextClasses(context),
				node,
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Model$untransformed,
				_List_Nil,
				_List_Nil,
				$mdgriffith$elm_ui$Internal$Model$NoNearbyChildren,
				$elm$core$List$reverse(attributes)));
	});
var $mdgriffith$elm_ui$Internal$Model$Height = function (a) {
	return {$: 8, a: a};
};
var $mdgriffith$elm_ui$Element$height = $mdgriffith$elm_ui$Internal$Model$Height;
var $mdgriffith$elm_ui$Internal$Model$Attr = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$htmlClass = function (cls) {
	return $mdgriffith$elm_ui$Internal$Model$Attr(
		$elm$html$Html$Attributes$class(cls));
};
var $mdgriffith$elm_ui$Internal$Model$Content = {$: 1};
var $mdgriffith$elm_ui$Element$shrink = $mdgriffith$elm_ui$Internal$Model$Content;
var $mdgriffith$elm_ui$Internal$Model$Width = function (a) {
	return {$: 7, a: a};
};
var $mdgriffith$elm_ui$Element$width = $mdgriffith$elm_ui$Internal$Model$Width;
var $mdgriffith$elm_ui$Element$column = F2(
	function (attrs, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asColumn,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.gJ + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.bx)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
						attrs))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$container = F2(
	function (attributes, children) {
		return A2(
			$elm$html$Html$div,
			_Utils_ap(
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('container')
					]),
				attributes),
			children);
	});
var $mdgriffith$elm_ui$Element$el = F2(
	function (attrs, child) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					attrs)),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[child])));
	});
var $mdgriffith$elm_ui$Internal$Model$Fill = function (a) {
	return {$: 2, a: a};
};
var $mdgriffith$elm_ui$Element$fill = $mdgriffith$elm_ui$Internal$Model$Fill(1);
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $mdgriffith$elm_ui$Internal$Model$unstyled = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Unstyled, $elm$core$Basics$always);
var $mdgriffith$elm_ui$Element$html = $mdgriffith$elm_ui$Internal$Model$unstyled;
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
var $mdgriffith$elm_ui$Internal$Model$OnlyDynamic = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$StaticRootAndDynamic = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$AllowHover = 1;
var $mdgriffith$elm_ui$Internal$Model$Layout = 0;
var $mdgriffith$elm_ui$Internal$Model$Rgba = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var $mdgriffith$elm_ui$Internal$Model$focusDefaultStyle = {
	gr: $elm$core$Maybe$Nothing,
	gw: $elm$core$Maybe$Nothing,
	hL: $elm$core$Maybe$Just(
		{
			dD: 0,
			dE: A4($mdgriffith$elm_ui$Internal$Model$Rgba, 155 / 255, 203 / 255, 1, 1),
			d4: _Utils_Tuple2(0, 0),
			ej: 3
		})
};
var $mdgriffith$elm_ui$Internal$Model$optionsToRecord = function (options) {
	var combine = F2(
		function (opt, record) {
			switch (opt.$) {
				case 0:
					var hoverable = opt.a;
					var _v4 = record.g1;
					if (_v4.$ === 1) {
						return _Utils_update(
							record,
							{
								g1: $elm$core$Maybe$Just(hoverable)
							});
					} else {
						return record;
					}
				case 1:
					var focusStyle = opt.a;
					var _v5 = record.gV;
					if (_v5.$ === 1) {
						return _Utils_update(
							record,
							{
								gV: $elm$core$Maybe$Just(focusStyle)
							});
					} else {
						return record;
					}
				default:
					var renderMode = opt.a;
					var _v6 = record.hn;
					if (_v6.$ === 1) {
						return _Utils_update(
							record,
							{
								hn: $elm$core$Maybe$Just(renderMode)
							});
					} else {
						return record;
					}
			}
		});
	var andFinally = function (record) {
		return {
			gV: function () {
				var _v0 = record.gV;
				if (_v0.$ === 1) {
					return $mdgriffith$elm_ui$Internal$Model$focusDefaultStyle;
				} else {
					var focusable = _v0.a;
					return focusable;
				}
			}(),
			g1: function () {
				var _v1 = record.g1;
				if (_v1.$ === 1) {
					return 1;
				} else {
					var hoverable = _v1.a;
					return hoverable;
				}
			}(),
			hn: function () {
				var _v2 = record.hn;
				if (_v2.$ === 1) {
					return 0;
				} else {
					var actualMode = _v2.a;
					return actualMode;
				}
			}()
		};
	};
	return andFinally(
		A3(
			$elm$core$List$foldr,
			combine,
			{gV: $elm$core$Maybe$Nothing, g1: $elm$core$Maybe$Nothing, hn: $elm$core$Maybe$Nothing},
			options));
};
var $mdgriffith$elm_ui$Internal$Model$toHtml = F2(
	function (mode, el) {
		switch (el.$) {
			case 0:
				var html = el.a;
				return html($mdgriffith$elm_ui$Internal$Model$asEl);
			case 1:
				var styles = el.a.hV;
				var html = el.a.g2;
				return A2(
					html,
					mode(styles),
					$mdgriffith$elm_ui$Internal$Model$asEl);
			case 2:
				var text = el.a;
				return $mdgriffith$elm_ui$Internal$Model$textElement(text);
			default:
				return $mdgriffith$elm_ui$Internal$Model$textElement('');
		}
	});
var $mdgriffith$elm_ui$Internal$Model$renderRoot = F3(
	function (optionList, attributes, child) {
		var options = $mdgriffith$elm_ui$Internal$Model$optionsToRecord(optionList);
		var embedStyle = function () {
			var _v0 = options.hn;
			if (_v0 === 1) {
				return $mdgriffith$elm_ui$Internal$Model$OnlyDynamic(options);
			} else {
				return $mdgriffith$elm_ui$Internal$Model$StaticRootAndDynamic(options);
			}
		}();
		return A2(
			$mdgriffith$elm_ui$Internal$Model$toHtml,
			embedStyle,
			A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asEl,
				$mdgriffith$elm_ui$Internal$Model$div,
				attributes,
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(
					_List_fromArray(
						[child]))));
	});
var $mdgriffith$elm_ui$Internal$Model$Colored = F3(
	function (a, b, c) {
		return {$: 4, a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$FontFamily = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$FontSize = function (a) {
	return {$: 2, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$SansSerif = {$: 1};
var $mdgriffith$elm_ui$Internal$Model$StyleClass = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$Typeface = function (a) {
	return {$: 3, a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$bgColor = $mdgriffith$elm_ui$Internal$Flag$flag(8);
var $mdgriffith$elm_ui$Internal$Flag$fontColor = $mdgriffith$elm_ui$Internal$Flag$flag(14);
var $mdgriffith$elm_ui$Internal$Flag$fontFamily = $mdgriffith$elm_ui$Internal$Flag$flag(5);
var $mdgriffith$elm_ui$Internal$Flag$fontSize = $mdgriffith$elm_ui$Internal$Flag$flag(4);
var $mdgriffith$elm_ui$Internal$Model$formatColorClass = function (_v0) {
	var red = _v0.a;
	var green = _v0.b;
	var blue = _v0.c;
	var alpha = _v0.d;
	return $mdgriffith$elm_ui$Internal$Model$floatClass(red) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(green) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(blue) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(alpha))))));
};
var $elm$core$String$toLower = _String_toLower;
var $elm$core$String$words = _String_words;
var $mdgriffith$elm_ui$Internal$Model$renderFontClassName = F2(
	function (font, current) {
		return _Utils_ap(
			current,
			function () {
				switch (font.$) {
					case 0:
						return 'serif';
					case 1:
						return 'sans-serif';
					case 2:
						return 'monospace';
					case 3:
						var name = font.a;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
					case 4:
						var name = font.a;
						var url = font.b;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
					default:
						var name = font.a.hp;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
				}
			}());
	});
var $mdgriffith$elm_ui$Internal$Model$rootStyle = function () {
	var families = _List_fromArray(
		[
			$mdgriffith$elm_ui$Internal$Model$Typeface('Open Sans'),
			$mdgriffith$elm_ui$Internal$Model$Typeface('Helvetica'),
			$mdgriffith$elm_ui$Internal$Model$Typeface('Verdana'),
			$mdgriffith$elm_ui$Internal$Model$SansSerif
		]);
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$bgColor,
			A3(
				$mdgriffith$elm_ui$Internal$Model$Colored,
				'bg-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(
					A4($mdgriffith$elm_ui$Internal$Model$Rgba, 1, 1, 1, 0)),
				'background-color',
				A4($mdgriffith$elm_ui$Internal$Model$Rgba, 1, 1, 1, 0))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontColor,
			A3(
				$mdgriffith$elm_ui$Internal$Model$Colored,
				'fc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(
					A4($mdgriffith$elm_ui$Internal$Model$Rgba, 0, 0, 0, 1)),
				'color',
				A4($mdgriffith$elm_ui$Internal$Model$Rgba, 0, 0, 0, 1))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontSize,
			$mdgriffith$elm_ui$Internal$Model$FontSize(20)),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontFamily,
			A2(
				$mdgriffith$elm_ui$Internal$Model$FontFamily,
				A3($elm$core$List$foldl, $mdgriffith$elm_ui$Internal$Model$renderFontClassName, 'font-', families),
				families))
		]);
}();
var $mdgriffith$elm_ui$Element$layoutWith = F3(
	function (_v0, attrs, child) {
		var options = _v0.fo;
		return A3(
			$mdgriffith$elm_ui$Internal$Model$renderRoot,
			options,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass(
					A2(
						$elm$core$String$join,
						' ',
						_List_fromArray(
							[$mdgriffith$elm_ui$Internal$Style$classes.hE, $mdgriffith$elm_ui$Internal$Style$classes.go, $mdgriffith$elm_ui$Internal$Style$classes.hM]))),
				_Utils_ap($mdgriffith$elm_ui$Internal$Model$rootStyle, attrs)),
			child);
	});
var $mdgriffith$elm_ui$Element$layout = $mdgriffith$elm_ui$Element$layoutWith(
	{fo: _List_Nil});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$Col3 = 3;
var $rundis$elm_bootstrap$Bootstrap$General$Internal$LG = 3;
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$ColWidth = function (a) {
	return {$: 0, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$Width = F2(
	function (screenSize, columnCount) {
		return {eJ: columnCount, fL: screenSize};
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$width = F2(
	function (size, count) {
		return $rundis$elm_bootstrap$Bootstrap$Grid$Internal$ColWidth(
			A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$Width, size, count));
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Col$lg3 = A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$width, 3, 3);
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$Col9 = 9;
var $rundis$elm_bootstrap$Bootstrap$Grid$Col$lg9 = A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$width, 3, 9);
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
var $mdgriffith$elm_ui$Internal$Model$Min = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $mdgriffith$elm_ui$Element$minimum = F2(
	function (i, l) {
		return A2($mdgriffith$elm_ui$Internal$Model$Min, i, l);
	});
var $mdgriffith$elm_ui$Internal$Model$PaddingStyle = F5(
	function (a, b, c, d, e) {
		return {$: 7, a: a, b: b, c: c, d: d, e: e};
	});
var $mdgriffith$elm_ui$Internal$Flag$padding = $mdgriffith$elm_ui$Internal$Flag$flag(2);
var $mdgriffith$elm_ui$Element$padding = function (x) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$padding,
		A5(
			$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
			'p-' + $elm$core$String$fromInt(x),
			x,
			x,
			x,
			x));
};
var $mdgriffith$elm_ui$Internal$Model$paddingName = F4(
	function (top, right, bottom, left) {
		return 'pad-' + ($elm$core$String$fromInt(top) + ('-' + ($elm$core$String$fromInt(right) + ('-' + ($elm$core$String$fromInt(bottom) + ('-' + $elm$core$String$fromInt(left)))))));
	});
var $mdgriffith$elm_ui$Element$paddingEach = function (_v0) {
	var top = _v0.aM;
	var right = _v0.aB;
	var bottom = _v0.an;
	var left = _v0.au;
	return (_Utils_eq(top, right) && (_Utils_eq(top, bottom) && _Utils_eq(top, left))) ? A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$padding,
		A5(
			$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
			'p-' + $elm$core$String$fromInt(top),
			top,
			top,
			top,
			top)) : A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$padding,
		A5(
			$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
			A4($mdgriffith$elm_ui$Internal$Model$paddingName, top, right, bottom, left),
			top,
			right,
			bottom,
			left));
};
var $author$project$Main$InputRetreivalRequestEmail = function (a) {
	return {$: 25, a: a};
};
var $author$project$Main$SubmitRetreivalRequest = {$: 26};
var $mdgriffith$elm_ui$Internal$Model$Button = {$: 8};
var $mdgriffith$elm_ui$Internal$Model$Describe = function (a) {
	return {$: 2, a: a};
};
var $elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $elm$html$Html$Attributes$disabled = $elm$html$Html$Attributes$boolProperty('disabled');
var $mdgriffith$elm_ui$Internal$Model$NoAttribute = {$: 0};
var $mdgriffith$elm_ui$Element$Input$hasFocusStyle = function (attr) {
	if (((attr.$ === 4) && (attr.b.$ === 11)) && (!attr.b.a)) {
		var _v1 = attr.b;
		var _v2 = _v1.a;
		return true;
	} else {
		return false;
	}
};
var $mdgriffith$elm_ui$Element$Input$focusDefault = function (attrs) {
	return A2($elm$core$List$any, $mdgriffith$elm_ui$Element$Input$hasFocusStyle, attrs) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Internal$Model$htmlClass('focusable');
};
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 0, a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $mdgriffith$elm_ui$Element$Events$onClick = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Events$onClick);
var $mdgriffith$elm_ui$Element$Input$enter = 'Enter';
var $elm$virtual_dom$VirtualDom$MayPreventDefault = function (a) {
	return {$: 2, a: a};
};
var $elm$html$Html$Events$preventDefaultOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayPreventDefault(decoder));
	});
var $mdgriffith$elm_ui$Element$Input$onKey = F2(
	function (desiredCode, msg) {
		var decode = function (code) {
			return _Utils_eq(code, desiredCode) ? $elm$json$Json$Decode$succeed(msg) : $elm$json$Json$Decode$fail('Not the enter key');
		};
		var isKey = A2(
			$elm$json$Json$Decode$andThen,
			decode,
			A2($elm$json$Json$Decode$field, 'key', $elm$json$Json$Decode$string));
		return $mdgriffith$elm_ui$Internal$Model$Attr(
			A2(
				$elm$html$Html$Events$preventDefaultOn,
				'keyup',
				A2(
					$elm$json$Json$Decode$map,
					function (fired) {
						return _Utils_Tuple2(fired, true);
					},
					isKey)));
	});
var $mdgriffith$elm_ui$Element$Input$onEnter = function (msg) {
	return A2($mdgriffith$elm_ui$Element$Input$onKey, $mdgriffith$elm_ui$Element$Input$enter, msg);
};
var $mdgriffith$elm_ui$Internal$Model$Class = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$cursor = $mdgriffith$elm_ui$Internal$Flag$flag(21);
var $mdgriffith$elm_ui$Element$pointer = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$cursor, $mdgriffith$elm_ui$Internal$Style$classes.gL);
var $elm$html$Html$Attributes$tabindex = function (n) {
	return A2(
		_VirtualDom_attribute,
		'tabIndex',
		$elm$core$String$fromInt(n));
};
var $mdgriffith$elm_ui$Element$Input$button = F2(
	function (attrs, _v0) {
		var onPress = _v0.aw;
		var label = _v0.j;
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.ck + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.ae + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.hJ + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.fl)))))),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$pointer,
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Element$Input$focusDefault(attrs),
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Internal$Model$Describe($mdgriffith$elm_ui$Internal$Model$Button),
									A2(
										$elm$core$List$cons,
										$mdgriffith$elm_ui$Internal$Model$Attr(
											$elm$html$Html$Attributes$tabindex(0)),
										function () {
											if (onPress.$ === 1) {
												return A2(
													$elm$core$List$cons,
													$mdgriffith$elm_ui$Internal$Model$Attr(
														$elm$html$Html$Attributes$disabled(true)),
													attrs);
											} else {
												var msg = onPress.a;
												return A2(
													$elm$core$List$cons,
													$mdgriffith$elm_ui$Element$Events$onClick(msg),
													A2(
														$elm$core$List$cons,
														$mdgriffith$elm_ui$Element$Input$onEnter(msg),
														attrs));
											}
										}()))))))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[label])));
	});
var $mdgriffith$elm_ui$Element$Input$TextInputNode = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_ui$Element$Input$TextArea = {$: 1};
var $mdgriffith$elm_ui$Internal$Model$LivePolite = {$: 6};
var $mdgriffith$elm_ui$Element$Region$announce = $mdgriffith$elm_ui$Internal$Model$Describe($mdgriffith$elm_ui$Internal$Model$LivePolite);
var $mdgriffith$elm_ui$Internal$Model$AsRow = 0;
var $mdgriffith$elm_ui$Internal$Model$asRow = 0;
var $mdgriffith$elm_ui$Element$Input$applyLabel = F3(
	function (attrs, label, input) {
		if (label.$ === 1) {
			var labelText = label.a;
			return A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asColumn,
				$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
				attrs,
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(
					_List_fromArray(
						[input])));
		} else {
			var position = label.a;
			var labelAttrs = label.b;
			var labelChild = label.c;
			var labelElement = A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asEl,
				$mdgriffith$elm_ui$Internal$Model$div,
				labelAttrs,
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(
					_List_fromArray(
						[labelChild])));
			switch (position) {
				case 2:
					return A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asColumn,
						$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
						attrs,
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							_List_fromArray(
								[labelElement, input])));
				case 3:
					return A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asColumn,
						$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
						attrs,
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							_List_fromArray(
								[input, labelElement])));
				case 0:
					return A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asRow,
						$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
						attrs,
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							_List_fromArray(
								[input, labelElement])));
				default:
					return A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asRow,
						$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
						attrs,
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							_List_fromArray(
								[labelElement, input])));
			}
		}
	});
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $mdgriffith$elm_ui$Element$Input$autofill = A2(
	$elm$core$Basics$composeL,
	$mdgriffith$elm_ui$Internal$Model$Attr,
	$elm$html$Html$Attributes$attribute('autocomplete'));
var $mdgriffith$elm_ui$Internal$Model$Behind = 5;
var $mdgriffith$elm_ui$Internal$Model$Nearby = F2(
	function (a, b) {
		return {$: 9, a: a, b: b};
	});
var $mdgriffith$elm_ui$Element$createNearby = F2(
	function (loc, element) {
		if (element.$ === 3) {
			return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
		} else {
			return A2($mdgriffith$elm_ui$Internal$Model$Nearby, loc, element);
		}
	});
var $mdgriffith$elm_ui$Element$behindContent = function (element) {
	return A2($mdgriffith$elm_ui$Element$createNearby, 5, element);
};
var $mdgriffith$elm_ui$Internal$Model$MoveY = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$TransformComponent = F2(
	function (a, b) {
		return {$: 10, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$moveY = $mdgriffith$elm_ui$Internal$Flag$flag(26);
var $mdgriffith$elm_ui$Element$moveUp = function (y) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$TransformComponent,
		$mdgriffith$elm_ui$Internal$Flag$moveY,
		$mdgriffith$elm_ui$Internal$Model$MoveY(-y));
};
var $mdgriffith$elm_ui$Element$Input$calcMoveToCompensateForPadding = function (attrs) {
	var gatherSpacing = F2(
		function (attr, found) {
			if ((attr.$ === 4) && (attr.b.$ === 5)) {
				var _v2 = attr.b;
				var x = _v2.b;
				var y = _v2.c;
				if (found.$ === 1) {
					return $elm$core$Maybe$Just(y);
				} else {
					return found;
				}
			} else {
				return found;
			}
		});
	var _v0 = A3($elm$core$List$foldr, gatherSpacing, $elm$core$Maybe$Nothing, attrs);
	if (_v0.$ === 1) {
		return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
	} else {
		var vSpace = _v0.a;
		return $mdgriffith$elm_ui$Element$moveUp(
			$elm$core$Basics$floor(vSpace / 2));
	}
};
var $mdgriffith$elm_ui$Internal$Flag$overflow = $mdgriffith$elm_ui$Internal$Flag$flag(20);
var $mdgriffith$elm_ui$Element$clip = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$overflow, $mdgriffith$elm_ui$Internal$Style$classes.gF);
var $mdgriffith$elm_ui$Element$Background$color = function (clr) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$bgColor,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Colored,
			'bg-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(clr),
			'background-color',
			clr));
};
var $mdgriffith$elm_ui$Internal$Flag$borderColor = $mdgriffith$elm_ui$Internal$Flag$flag(28);
var $mdgriffith$elm_ui$Element$Border$color = function (clr) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderColor,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Colored,
			'bc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(clr),
			'border-color',
			clr));
};
var $mdgriffith$elm_ui$Element$rgb = F3(
	function (r, g, b) {
		return A4($mdgriffith$elm_ui$Internal$Model$Rgba, r, g, b, 1);
	});
var $mdgriffith$elm_ui$Element$Input$darkGrey = A3($mdgriffith$elm_ui$Element$rgb, 186 / 255, 189 / 255, 182 / 255);
var $mdgriffith$elm_ui$Element$paddingXY = F2(
	function (x, y) {
		return _Utils_eq(x, y) ? A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$padding,
			A5(
				$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
				'p-' + $elm$core$String$fromInt(x),
				x,
				x,
				x,
				x)) : A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$padding,
			A5(
				$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
				'p-' + ($elm$core$String$fromInt(x) + ('-' + $elm$core$String$fromInt(y))),
				y,
				x,
				y,
				x));
	});
var $mdgriffith$elm_ui$Element$Input$defaultTextPadding = A2($mdgriffith$elm_ui$Element$paddingXY, 12, 12);
var $mdgriffith$elm_ui$Internal$Flag$borderRound = $mdgriffith$elm_ui$Internal$Flag$flag(17);
var $mdgriffith$elm_ui$Element$Border$rounded = function (radius) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderRound,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Single,
			'br-' + $elm$core$String$fromInt(radius),
			'border-radius',
			$elm$core$String$fromInt(radius) + 'px'));
};
var $mdgriffith$elm_ui$Internal$Model$SpacingStyle = F3(
	function (a, b, c) {
		return {$: 5, a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Flag$spacing = $mdgriffith$elm_ui$Internal$Flag$flag(3);
var $mdgriffith$elm_ui$Internal$Model$spacingName = F2(
	function (x, y) {
		return 'spacing-' + ($elm$core$String$fromInt(x) + ('-' + $elm$core$String$fromInt(y)));
	});
var $mdgriffith$elm_ui$Element$spacing = function (x) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$spacing,
		A3(
			$mdgriffith$elm_ui$Internal$Model$SpacingStyle,
			A2($mdgriffith$elm_ui$Internal$Model$spacingName, x, x),
			x,
			x));
};
var $mdgriffith$elm_ui$Element$Input$white = A3($mdgriffith$elm_ui$Element$rgb, 1, 1, 1);
var $mdgriffith$elm_ui$Internal$Model$BorderWidth = F5(
	function (a, b, c, d, e) {
		return {$: 6, a: a, b: b, c: c, d: d, e: e};
	});
var $mdgriffith$elm_ui$Element$Border$width = function (v) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderWidth,
		A5(
			$mdgriffith$elm_ui$Internal$Model$BorderWidth,
			'b-' + $elm$core$String$fromInt(v),
			v,
			v,
			v,
			v));
};
var $mdgriffith$elm_ui$Element$Input$defaultTextBoxStyle = _List_fromArray(
	[
		$mdgriffith$elm_ui$Element$Input$defaultTextPadding,
		$mdgriffith$elm_ui$Element$Border$rounded(3),
		$mdgriffith$elm_ui$Element$Border$color($mdgriffith$elm_ui$Element$Input$darkGrey),
		$mdgriffith$elm_ui$Element$Background$color($mdgriffith$elm_ui$Element$Input$white),
		$mdgriffith$elm_ui$Element$Border$width(1),
		$mdgriffith$elm_ui$Element$spacing(5),
		$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
		$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink)
	]);
var $mdgriffith$elm_ui$Element$Input$getHeight = function (attr) {
	if (attr.$ === 8) {
		var h = attr.a;
		return $elm$core$Maybe$Just(h);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$Label = function (a) {
	return {$: 5, a: a};
};
var $mdgriffith$elm_ui$Element$Input$hiddenLabelAttribute = function (label) {
	if (label.$ === 1) {
		var textLabel = label.a;
		return $mdgriffith$elm_ui$Internal$Model$Describe(
			$mdgriffith$elm_ui$Internal$Model$Label(textLabel));
	} else {
		return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
	}
};
var $mdgriffith$elm_ui$Internal$Model$InFront = 4;
var $mdgriffith$elm_ui$Element$inFront = function (element) {
	return A2($mdgriffith$elm_ui$Element$createNearby, 4, element);
};
var $mdgriffith$elm_ui$Element$Input$isConstrained = function (len) {
	isConstrained:
	while (true) {
		switch (len.$) {
			case 1:
				return false;
			case 0:
				return true;
			case 2:
				return true;
			case 3:
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isConstrained;
			default:
				var l = len.b;
				return true;
		}
	}
};
var $mdgriffith$elm_ui$Element$Input$isHiddenLabel = function (label) {
	if (label.$ === 1) {
		return true;
	} else {
		return false;
	}
};
var $mdgriffith$elm_ui$Element$Input$isStacked = function (label) {
	if (!label.$) {
		var loc = label.a;
		switch (loc) {
			case 0:
				return false;
			case 1:
				return false;
			case 2:
				return true;
			default:
				return true;
		}
	} else {
		return true;
	}
};
var $mdgriffith$elm_ui$Element$Input$negateBox = function (box) {
	return {an: -box.an, au: -box.au, aB: -box.aB, aM: -box.aM};
};
var $elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 1, a: a};
};
var $elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm$html$Html$Events$targetValue = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	$elm$json$Json$Decode$string);
var $elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			$elm$json$Json$Decode$map,
			$elm$html$Html$Events$alwaysStop,
			A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetValue)));
};
var $mdgriffith$elm_ui$Element$htmlAttribute = $mdgriffith$elm_ui$Internal$Model$Attr;
var $mdgriffith$elm_ui$Element$Input$isFill = function (len) {
	isFill:
	while (true) {
		switch (len.$) {
			case 2:
				return true;
			case 1:
				return false;
			case 0:
				return false;
			case 3:
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isFill;
			default:
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isFill;
		}
	}
};
var $mdgriffith$elm_ui$Element$Input$isPixel = function (len) {
	isPixel:
	while (true) {
		switch (len.$) {
			case 1:
				return false;
			case 0:
				return true;
			case 2:
				return false;
			case 3:
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isPixel;
			default:
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isPixel;
		}
	}
};
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $mdgriffith$elm_ui$Element$Input$redistributeOver = F4(
	function (isMultiline, stacked, attr, els) {
		switch (attr.$) {
			case 9:
				return _Utils_update(
					els,
					{
						d: A2($elm$core$List$cons, attr, els.d)
					});
			case 7:
				var width = attr.a;
				return $mdgriffith$elm_ui$Element$Input$isFill(width) ? _Utils_update(
					els,
					{
						k: A2($elm$core$List$cons, attr, els.k),
						s: A2($elm$core$List$cons, attr, els.s),
						d: A2($elm$core$List$cons, attr, els.d)
					}) : (stacked ? _Utils_update(
					els,
					{
						k: A2($elm$core$List$cons, attr, els.k)
					}) : _Utils_update(
					els,
					{
						d: A2($elm$core$List$cons, attr, els.d)
					}));
			case 8:
				var height = attr.a;
				return (!stacked) ? _Utils_update(
					els,
					{
						k: A2($elm$core$List$cons, attr, els.k),
						d: A2($elm$core$List$cons, attr, els.d)
					}) : ($mdgriffith$elm_ui$Element$Input$isFill(height) ? _Utils_update(
					els,
					{
						k: A2($elm$core$List$cons, attr, els.k),
						d: A2($elm$core$List$cons, attr, els.d)
					}) : ($mdgriffith$elm_ui$Element$Input$isPixel(height) ? _Utils_update(
					els,
					{
						d: A2($elm$core$List$cons, attr, els.d)
					}) : _Utils_update(
					els,
					{
						d: A2($elm$core$List$cons, attr, els.d)
					})));
			case 6:
				return _Utils_update(
					els,
					{
						k: A2($elm$core$List$cons, attr, els.k)
					});
			case 5:
				return _Utils_update(
					els,
					{
						k: A2($elm$core$List$cons, attr, els.k)
					});
			case 4:
				switch (attr.b.$) {
					case 5:
						var _v1 = attr.b;
						return _Utils_update(
							els,
							{
								k: A2($elm$core$List$cons, attr, els.k),
								s: A2($elm$core$List$cons, attr, els.s),
								d: A2($elm$core$List$cons, attr, els.d),
								bq: A2($elm$core$List$cons, attr, els.bq)
							});
					case 7:
						var cls = attr.a;
						var _v2 = attr.b;
						var pad = _v2.a;
						var t = _v2.b;
						var r = _v2.c;
						var b = _v2.d;
						var l = _v2.e;
						if (isMultiline) {
							return _Utils_update(
								els,
								{
									E: A2($elm$core$List$cons, attr, els.E),
									d: A2($elm$core$List$cons, attr, els.d)
								});
						} else {
							var reducedVerticalPadding = $mdgriffith$elm_ui$Element$paddingEach(
								{
									an: b - A2($elm$core$Basics$min, t, b),
									au: l,
									aB: r,
									aM: t - A2($elm$core$Basics$min, t, b)
								});
							var newLineHeight = $mdgriffith$elm_ui$Element$htmlAttribute(
								A2(
									$elm$html$Html$Attributes$style,
									'line-height',
									'calc(1.0em + ' + ($elm$core$String$fromInt(
										2 * A2($elm$core$Basics$min, t, b)) + 'px)')));
							var newHeight = $mdgriffith$elm_ui$Element$htmlAttribute(
								A2(
									$elm$html$Html$Attributes$style,
									'height',
									'calc(1.0em + ' + ($elm$core$String$fromInt(
										2 * A2($elm$core$Basics$min, t, b)) + 'px)')));
							return _Utils_update(
								els,
								{
									E: A2($elm$core$List$cons, attr, els.E),
									s: A2(
										$elm$core$List$cons,
										newHeight,
										A2($elm$core$List$cons, newLineHeight, els.s)),
									d: A2($elm$core$List$cons, reducedVerticalPadding, els.d)
								});
						}
					case 6:
						var _v3 = attr.b;
						return _Utils_update(
							els,
							{
								E: A2($elm$core$List$cons, attr, els.E),
								d: A2($elm$core$List$cons, attr, els.d)
							});
					case 10:
						return _Utils_update(
							els,
							{
								E: A2($elm$core$List$cons, attr, els.E),
								d: A2($elm$core$List$cons, attr, els.d)
							});
					case 2:
						return _Utils_update(
							els,
							{
								k: A2($elm$core$List$cons, attr, els.k)
							});
					case 1:
						var _v4 = attr.b;
						return _Utils_update(
							els,
							{
								k: A2($elm$core$List$cons, attr, els.k)
							});
					default:
						var flag = attr.a;
						var cls = attr.b;
						return _Utils_update(
							els,
							{
								d: A2($elm$core$List$cons, attr, els.d)
							});
				}
			case 0:
				return els;
			case 1:
				var a = attr.a;
				return _Utils_update(
					els,
					{
						s: A2($elm$core$List$cons, attr, els.s)
					});
			case 2:
				return _Utils_update(
					els,
					{
						s: A2($elm$core$List$cons, attr, els.s)
					});
			case 3:
				return _Utils_update(
					els,
					{
						d: A2($elm$core$List$cons, attr, els.d)
					});
			default:
				return _Utils_update(
					els,
					{
						s: A2($elm$core$List$cons, attr, els.s)
					});
		}
	});
var $mdgriffith$elm_ui$Element$Input$redistribute = F3(
	function (isMultiline, stacked, attrs) {
		return function (redist) {
			return {
				E: $elm$core$List$reverse(redist.E),
				k: $elm$core$List$reverse(redist.k),
				s: $elm$core$List$reverse(redist.s),
				d: $elm$core$List$reverse(redist.d),
				bq: $elm$core$List$reverse(redist.bq)
			};
		}(
			A3(
				$elm$core$List$foldl,
				A2($mdgriffith$elm_ui$Element$Input$redistributeOver, isMultiline, stacked),
				{E: _List_Nil, k: _List_Nil, s: _List_Nil, d: _List_Nil, bq: _List_Nil},
				attrs));
	});
var $mdgriffith$elm_ui$Element$Input$renderBox = function (_v0) {
	var top = _v0.aM;
	var right = _v0.aB;
	var bottom = _v0.an;
	var left = _v0.au;
	return $elm$core$String$fromInt(top) + ('px ' + ($elm$core$String$fromInt(right) + ('px ' + ($elm$core$String$fromInt(bottom) + ('px ' + ($elm$core$String$fromInt(left) + 'px'))))));
};
var $mdgriffith$elm_ui$Internal$Model$Transparency = F2(
	function (a, b) {
		return {$: 12, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$transparency = $mdgriffith$elm_ui$Internal$Flag$flag(0);
var $mdgriffith$elm_ui$Element$alpha = function (o) {
	var transparency = function (x) {
		return 1 - x;
	}(
		A2(
			$elm$core$Basics$min,
			1.0,
			A2($elm$core$Basics$max, 0.0, o)));
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$transparency,
		A2(
			$mdgriffith$elm_ui$Internal$Model$Transparency,
			'transparency-' + $mdgriffith$elm_ui$Internal$Model$floatClass(transparency),
			transparency));
};
var $mdgriffith$elm_ui$Element$Input$charcoal = A3($mdgriffith$elm_ui$Element$rgb, 136 / 255, 138 / 255, 133 / 255);
var $mdgriffith$elm_ui$Element$Font$color = function (fontColor) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontColor,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Colored,
			'fc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(fontColor),
			'color',
			fontColor));
};
var $mdgriffith$elm_ui$Element$rgba = $mdgriffith$elm_ui$Internal$Model$Rgba;
var $mdgriffith$elm_ui$Element$Input$renderPlaceholder = F3(
	function (_v0, forPlaceholder, on) {
		var placeholderAttrs = _v0.a;
		var placeholderEl = _v0.b;
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_Utils_ap(
				forPlaceholder,
				_Utils_ap(
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Font$color($mdgriffith$elm_ui$Element$Input$charcoal),
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.fl + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.hA)),
							$mdgriffith$elm_ui$Element$clip,
							$mdgriffith$elm_ui$Element$Border$color(
							A4($mdgriffith$elm_ui$Element$rgba, 0, 0, 0, 0)),
							$mdgriffith$elm_ui$Element$Background$color(
							A4($mdgriffith$elm_ui$Element$rgba, 0, 0, 0, 0)),
							$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
							$mdgriffith$elm_ui$Element$alpha(
							on ? 1 : 0)
						]),
					placeholderAttrs)),
			placeholderEl);
	});
var $mdgriffith$elm_ui$Element$scrollbarY = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$overflow, $mdgriffith$elm_ui$Internal$Style$classes.hI);
var $elm$html$Html$span = _VirtualDom_node('span');
var $elm$html$Html$Attributes$spellcheck = $elm$html$Html$Attributes$boolProperty('spellcheck');
var $mdgriffith$elm_ui$Element$Input$spellcheck = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Attributes$spellcheck);
var $mdgriffith$elm_ui$Internal$Model$Text = function (a) {
	return {$: 2, a: a};
};
var $mdgriffith$elm_ui$Element$text = function (content) {
	return $mdgriffith$elm_ui$Internal$Model$Text(content);
};
var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty('type');
var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty('value');
var $mdgriffith$elm_ui$Element$Input$value = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Attributes$value);
var $mdgriffith$elm_ui$Element$Input$textHelper = F3(
	function (textInput, attrs, textOptions) {
		var withDefaults = _Utils_ap($mdgriffith$elm_ui$Element$Input$defaultTextBoxStyle, attrs);
		var redistributed = A3(
			$mdgriffith$elm_ui$Element$Input$redistribute,
			_Utils_eq(textInput.A, $mdgriffith$elm_ui$Element$Input$TextArea),
			$mdgriffith$elm_ui$Element$Input$isStacked(textOptions.j),
			withDefaults);
		var onlySpacing = function (attr) {
			if ((attr.$ === 4) && (attr.b.$ === 5)) {
				var _v9 = attr.b;
				return true;
			} else {
				return false;
			}
		};
		var heightConstrained = function () {
			var _v7 = textInput.A;
			if (!_v7.$) {
				var inputType = _v7.a;
				return false;
			} else {
				return A2(
					$elm$core$Maybe$withDefault,
					false,
					A2(
						$elm$core$Maybe$map,
						$mdgriffith$elm_ui$Element$Input$isConstrained,
						$elm$core$List$head(
							$elm$core$List$reverse(
								A2($elm$core$List$filterMap, $mdgriffith$elm_ui$Element$Input$getHeight, withDefaults)))));
			}
		}();
		var getPadding = function (attr) {
			if ((attr.$ === 4) && (attr.b.$ === 7)) {
				var cls = attr.a;
				var _v6 = attr.b;
				var pad = _v6.a;
				var t = _v6.b;
				var r = _v6.c;
				var b = _v6.d;
				var l = _v6.e;
				return $elm$core$Maybe$Just(
					{
						an: A2(
							$elm$core$Basics$max,
							0,
							$elm$core$Basics$floor(b - 3)),
						au: A2(
							$elm$core$Basics$max,
							0,
							$elm$core$Basics$floor(l - 3)),
						aB: A2(
							$elm$core$Basics$max,
							0,
							$elm$core$Basics$floor(r - 3)),
						aM: A2(
							$elm$core$Basics$max,
							0,
							$elm$core$Basics$floor(t - 3))
					});
			} else {
				return $elm$core$Maybe$Nothing;
			}
		};
		var parentPadding = A2(
			$elm$core$Maybe$withDefault,
			{an: 0, au: 0, aB: 0, aM: 0},
			$elm$core$List$head(
				$elm$core$List$reverse(
					A2($elm$core$List$filterMap, getPadding, withDefaults))));
		var inputElement = A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			function () {
				var _v3 = textInput.A;
				if (!_v3.$) {
					var inputType = _v3.a;
					return $mdgriffith$elm_ui$Internal$Model$NodeName('input');
				} else {
					return $mdgriffith$elm_ui$Internal$Model$NodeName('textarea');
				}
			}(),
			_Utils_ap(
				function () {
					var _v4 = textInput.A;
					if (!_v4.$) {
						var inputType = _v4.a;
						return _List_fromArray(
							[
								$mdgriffith$elm_ui$Internal$Model$Attr(
								$elm$html$Html$Attributes$type_(inputType)),
								$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.hd)
							]);
					} else {
						return _List_fromArray(
							[
								$mdgriffith$elm_ui$Element$clip,
								$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
								$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.g9),
								$mdgriffith$elm_ui$Element$Input$calcMoveToCompensateForPadding(withDefaults),
								$mdgriffith$elm_ui$Element$paddingEach(parentPadding),
								$mdgriffith$elm_ui$Internal$Model$Attr(
								A2(
									$elm$html$Html$Attributes$style,
									'margin',
									$mdgriffith$elm_ui$Element$Input$renderBox(
										$mdgriffith$elm_ui$Element$Input$negateBox(parentPadding)))),
								$mdgriffith$elm_ui$Internal$Model$Attr(
								A2($elm$html$Html$Attributes$style, 'box-sizing', 'content-box'))
							]);
					}
				}(),
				_Utils_ap(
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Input$value(textOptions.ep),
							$mdgriffith$elm_ui$Internal$Model$Attr(
							$elm$html$Html$Events$onInput(textOptions.hr)),
							$mdgriffith$elm_ui$Element$Input$hiddenLabelAttribute(textOptions.j),
							$mdgriffith$elm_ui$Element$Input$spellcheck(textInput.S),
							A2(
							$elm$core$Maybe$withDefault,
							$mdgriffith$elm_ui$Internal$Model$NoAttribute,
							A2($elm$core$Maybe$map, $mdgriffith$elm_ui$Element$Input$autofill, textInput.M))
						]),
					redistributed.s)),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(_List_Nil));
		var wrappedInput = function () {
			var _v0 = textInput.A;
			if (_v0.$ === 1) {
				return A4(
					$mdgriffith$elm_ui$Internal$Model$element,
					$mdgriffith$elm_ui$Internal$Model$asEl,
					$mdgriffith$elm_ui$Internal$Model$div,
					_Utils_ap(
						(heightConstrained ? $elm$core$List$cons($mdgriffith$elm_ui$Element$scrollbarY) : $elm$core$Basics$identity)(
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
									A2($elm$core$List$any, $mdgriffith$elm_ui$Element$Input$hasFocusStyle, withDefaults) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.eY),
									$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.hc)
								])),
						redistributed.d),
					$mdgriffith$elm_ui$Internal$Model$Unkeyed(
						_List_fromArray(
							[
								A4(
								$mdgriffith$elm_ui$Internal$Model$element,
								$mdgriffith$elm_ui$Internal$Model$asParagraph,
								$mdgriffith$elm_ui$Internal$Model$div,
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
									A2(
										$elm$core$List$cons,
										$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
										A2(
											$elm$core$List$cons,
											$mdgriffith$elm_ui$Element$inFront(inputElement),
											A2(
												$elm$core$List$cons,
												$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.hb),
												redistributed.bq)))),
								$mdgriffith$elm_ui$Internal$Model$Unkeyed(
									function () {
										if (textOptions.ep === '') {
											var _v1 = textOptions.bK;
											if (_v1.$ === 1) {
												return _List_fromArray(
													[
														$mdgriffith$elm_ui$Element$text('\u00A0')
													]);
											} else {
												var place = _v1.a;
												return _List_fromArray(
													[
														A3($mdgriffith$elm_ui$Element$Input$renderPlaceholder, place, _List_Nil, textOptions.ep === '')
													]);
											}
										} else {
											return _List_fromArray(
												[
													$mdgriffith$elm_ui$Internal$Model$unstyled(
													A2(
														$elm$html$Html$span,
														_List_fromArray(
															[
																$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Style$classes.ha)
															]),
														_List_fromArray(
															[
																$elm$html$Html$text(textOptions.ep + '\u00A0')
															])))
												]);
										}
									}()))
							])));
			} else {
				var inputType = _v0.a;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$element,
					$mdgriffith$elm_ui$Internal$Model$asEl,
					$mdgriffith$elm_ui$Internal$Model$div,
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
						A2(
							$elm$core$List$cons,
							A2($elm$core$List$any, $mdgriffith$elm_ui$Element$Input$hasFocusStyle, withDefaults) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.eY),
							$elm$core$List$concat(
								_List_fromArray(
									[
										redistributed.d,
										function () {
										var _v2 = textOptions.bK;
										if (_v2.$ === 1) {
											return _List_Nil;
										} else {
											var place = _v2.a;
											return _List_fromArray(
												[
													$mdgriffith$elm_ui$Element$behindContent(
													A3($mdgriffith$elm_ui$Element$Input$renderPlaceholder, place, redistributed.E, textOptions.ep === ''))
												]);
										}
									}()
									])))),
					$mdgriffith$elm_ui$Internal$Model$Unkeyed(
						_List_fromArray(
							[inputElement])));
			}
		}();
		return A3(
			$mdgriffith$elm_ui$Element$Input$applyLabel,
			A2(
				$elm$core$List$cons,
				A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$cursor, $mdgriffith$elm_ui$Internal$Style$classes.gM),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$Input$isHiddenLabel(textOptions.j) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Element$spacing(5),
					A2($elm$core$List$cons, $mdgriffith$elm_ui$Element$Region$announce, redistributed.k))),
			textOptions.j,
			wrappedInput);
	});
var $mdgriffith$elm_ui$Element$Input$email = $mdgriffith$elm_ui$Element$Input$textHelper(
	{
		M: $elm$core$Maybe$Just('email'),
		S: false,
		A: $mdgriffith$elm_ui$Element$Input$TextInputNode('email')
	});
var $mdgriffith$elm_ui$Element$Input$Label = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Element$Input$OnLeft = 1;
var $mdgriffith$elm_ui$Element$Input$labelLeft = $mdgriffith$elm_ui$Element$Input$Label(1);
var $author$project$Main$onEnter = function (msg) {
	return $mdgriffith$elm_ui$Element$htmlAttribute(
		A2(
			$elm$html$Html$Events$on,
			'keyup',
			A2(
				$elm$json$Json$Decode$andThen,
				function (key) {
					return (key === 'Enter') ? $elm$json$Json$Decode$succeed(msg) : $elm$json$Json$Decode$fail('Not the enter key');
				},
				A2($elm$json$Json$Decode$field, 'key', $elm$json$Json$Decode$string))));
};
var $mdgriffith$elm_ui$Element$Input$Placeholder = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $mdgriffith$elm_ui$Element$Input$placeholder = $mdgriffith$elm_ui$Element$Input$Placeholder;
var $author$project$Main$retreivealRequestView = function (model) {
	return A2(
		$mdgriffith$elm_ui$Element$column,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$spacing(32),
				$mdgriffith$elm_ui$Element$centerX,
				$mdgriffith$elm_ui$Element$centerY
			]),
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Element$Input$email,
				_List_fromArray(
					[
						$author$project$Main$onEnter($author$project$Main$SubmitRetreivalRequest),
						$mdgriffith$elm_ui$Element$padding(8)
					]),
				{
					j: A2(
						$mdgriffith$elm_ui$Element$Input$labelLeft,
						_List_fromArray(
							[$mdgriffith$elm_ui$Element$centerY]),
						$mdgriffith$elm_ui$Element$text('email : ')),
					hr: $author$project$Main$InputRetreivalRequestEmail,
					bK: $elm$core$Maybe$Just(
						A2(
							$mdgriffith$elm_ui$Element$Input$placeholder,
							_List_Nil,
							$mdgriffith$elm_ui$Element$text('email'))),
					ep: model.aA
				}),
				A2(
				$mdgriffith$elm_ui$Element$Input$button,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$padding(0),
						$mdgriffith$elm_ui$Element$centerX
					]),
				{
					j: $mdgriffith$elm_ui$Element$text('retreive my account'),
					aw: $elm$core$Maybe$Just($author$project$Main$SubmitRetreivalRequest)
				}),
				A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$padding(32),
						$mdgriffith$elm_ui$Element$centerX
					]),
				$mdgriffith$elm_ui$Element$html(
					A2(
						$elm$html$Html$a,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$href('/signin')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('You remember your password?')
							]))))
			]));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$Col = 0;
var $rundis$elm_bootstrap$Bootstrap$General$Internal$XS = 0;
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColAlign = F2(
	function (align_, options) {
		var _v0 = align_.fL;
		switch (_v0) {
			case 0:
				return _Utils_update(
					options,
					{
						b4: $elm$core$Maybe$Just(align_)
					});
			case 1:
				return _Utils_update(
					options,
					{
						b2: $elm$core$Maybe$Just(align_)
					});
			case 2:
				return _Utils_update(
					options,
					{
						b1: $elm$core$Maybe$Just(align_)
					});
			case 3:
				return _Utils_update(
					options,
					{
						b0: $elm$core$Maybe$Just(align_)
					});
			default:
				return _Utils_update(
					options,
					{
						b3: $elm$core$Maybe$Just(align_)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColOffset = F2(
	function (offset_, options) {
		var _v0 = offset_.fL;
		switch (_v0) {
			case 0:
				return _Utils_update(
					options,
					{
						cQ: $elm$core$Maybe$Just(offset_)
					});
			case 1:
				return _Utils_update(
					options,
					{
						cN: $elm$core$Maybe$Just(offset_)
					});
			case 2:
				return _Utils_update(
					options,
					{
						cM: $elm$core$Maybe$Just(offset_)
					});
			case 3:
				return _Utils_update(
					options,
					{
						cL: $elm$core$Maybe$Just(offset_)
					});
			default:
				return _Utils_update(
					options,
					{
						cP: $elm$core$Maybe$Just(offset_)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColOrder = F2(
	function (order_, options) {
		var _v0 = order_.fL;
		switch (_v0) {
			case 0:
				return _Utils_update(
					options,
					{
						cZ: $elm$core$Maybe$Just(order_)
					});
			case 1:
				return _Utils_update(
					options,
					{
						cX: $elm$core$Maybe$Just(order_)
					});
			case 2:
				return _Utils_update(
					options,
					{
						cW: $elm$core$Maybe$Just(order_)
					});
			case 3:
				return _Utils_update(
					options,
					{
						cV: $elm$core$Maybe$Just(order_)
					});
			default:
				return _Utils_update(
					options,
					{
						cY: $elm$core$Maybe$Just(order_)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColPull = F2(
	function (pull_, options) {
		var _v0 = pull_.fL;
		switch (_v0) {
			case 0:
				return _Utils_update(
					options,
					{
						c2: $elm$core$Maybe$Just(pull_)
					});
			case 1:
				return _Utils_update(
					options,
					{
						c0: $elm$core$Maybe$Just(pull_)
					});
			case 2:
				return _Utils_update(
					options,
					{
						c$: $elm$core$Maybe$Just(pull_)
					});
			case 3:
				return _Utils_update(
					options,
					{
						c_: $elm$core$Maybe$Just(pull_)
					});
			default:
				return _Utils_update(
					options,
					{
						c1: $elm$core$Maybe$Just(pull_)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColPush = F2(
	function (push_, options) {
		var _v0 = push_.fL;
		switch (_v0) {
			case 0:
				return _Utils_update(
					options,
					{
						c7: $elm$core$Maybe$Just(push_)
					});
			case 1:
				return _Utils_update(
					options,
					{
						c5: $elm$core$Maybe$Just(push_)
					});
			case 2:
				return _Utils_update(
					options,
					{
						c4: $elm$core$Maybe$Just(push_)
					});
			case 3:
				return _Utils_update(
					options,
					{
						c3: $elm$core$Maybe$Just(push_)
					});
			default:
				return _Utils_update(
					options,
					{
						c6: $elm$core$Maybe$Just(push_)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColWidth = F2(
	function (width_, options) {
		var _v0 = width_.fL;
		switch (_v0) {
			case 0:
				return _Utils_update(
					options,
					{
						bY: $elm$core$Maybe$Just(width_)
					});
			case 1:
				return _Utils_update(
					options,
					{
						bW: $elm$core$Maybe$Just(width_)
					});
			case 2:
				return _Utils_update(
					options,
					{
						bV: $elm$core$Maybe$Just(width_)
					});
			case 3:
				return _Utils_update(
					options,
					{
						bU: $elm$core$Maybe$Just(width_)
					});
			default:
				return _Utils_update(
					options,
					{
						bX: $elm$core$Maybe$Just(width_)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColOption = F2(
	function (modifier, options) {
		switch (modifier.$) {
			case 6:
				var attrs = modifier.a;
				return _Utils_update(
					options,
					{
						am: _Utils_ap(options.am, attrs)
					});
			case 0:
				var width_ = modifier.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColWidth, width_, options);
			case 1:
				var offset_ = modifier.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColOffset, offset_, options);
			case 2:
				var pull_ = modifier.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColPull, pull_, options);
			case 3:
				var push_ = modifier.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColPush, push_, options);
			case 4:
				var order_ = modifier.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColOrder, order_, options);
			case 5:
				var align = modifier.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColAlign, align, options);
			default:
				var align = modifier.a;
				return _Utils_update(
					options,
					{
						di: $elm$core$Maybe$Just(align)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$columnCountOption = function (size) {
	switch (size) {
		case 0:
			return $elm$core$Maybe$Nothing;
		case 1:
			return $elm$core$Maybe$Just('1');
		case 2:
			return $elm$core$Maybe$Just('2');
		case 3:
			return $elm$core$Maybe$Just('3');
		case 4:
			return $elm$core$Maybe$Just('4');
		case 5:
			return $elm$core$Maybe$Just('5');
		case 6:
			return $elm$core$Maybe$Just('6');
		case 7:
			return $elm$core$Maybe$Just('7');
		case 8:
			return $elm$core$Maybe$Just('8');
		case 9:
			return $elm$core$Maybe$Just('9');
		case 10:
			return $elm$core$Maybe$Just('10');
		case 11:
			return $elm$core$Maybe$Just('11');
		case 12:
			return $elm$core$Maybe$Just('12');
		default:
			return $elm$core$Maybe$Just('auto');
	}
};
var $rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption = function (size) {
	switch (size) {
		case 0:
			return $elm$core$Maybe$Nothing;
		case 1:
			return $elm$core$Maybe$Just('sm');
		case 2:
			return $elm$core$Maybe$Just('md');
		case 3:
			return $elm$core$Maybe$Just('lg');
		default:
			return $elm$core$Maybe$Just('xl');
	}
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$colWidthClass = function (_v0) {
	var screenSize = _v0.fL;
	var columnCount = _v0.eJ;
	return $elm$html$Html$Attributes$class(
		'col' + (A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$map,
				function (v) {
					return '-' + v;
				},
				$rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption(screenSize))) + A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$map,
				function (v) {
					return '-' + v;
				},
				$rundis$elm_bootstrap$Bootstrap$Grid$Internal$columnCountOption(columnCount)))));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$colWidthsToAttributes = function (widths) {
	var width_ = function (w) {
		return A2($elm$core$Maybe$map, $rundis$elm_bootstrap$Bootstrap$Grid$Internal$colWidthClass, w);
	};
	return A2(
		$elm$core$List$filterMap,
		$elm$core$Basics$identity,
		A2($elm$core$List$map, width_, widths));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$defaultColOptions = {b0: $elm$core$Maybe$Nothing, b1: $elm$core$Maybe$Nothing, b2: $elm$core$Maybe$Nothing, b3: $elm$core$Maybe$Nothing, b4: $elm$core$Maybe$Nothing, am: _List_Nil, cL: $elm$core$Maybe$Nothing, cM: $elm$core$Maybe$Nothing, cN: $elm$core$Maybe$Nothing, cP: $elm$core$Maybe$Nothing, cQ: $elm$core$Maybe$Nothing, cV: $elm$core$Maybe$Nothing, cW: $elm$core$Maybe$Nothing, cX: $elm$core$Maybe$Nothing, cY: $elm$core$Maybe$Nothing, cZ: $elm$core$Maybe$Nothing, c_: $elm$core$Maybe$Nothing, c$: $elm$core$Maybe$Nothing, c0: $elm$core$Maybe$Nothing, c1: $elm$core$Maybe$Nothing, c2: $elm$core$Maybe$Nothing, c3: $elm$core$Maybe$Nothing, c4: $elm$core$Maybe$Nothing, c5: $elm$core$Maybe$Nothing, c6: $elm$core$Maybe$Nothing, c7: $elm$core$Maybe$Nothing, di: $elm$core$Maybe$Nothing, bU: $elm$core$Maybe$Nothing, bV: $elm$core$Maybe$Nothing, bW: $elm$core$Maybe$Nothing, bX: $elm$core$Maybe$Nothing, bY: $elm$core$Maybe$Nothing};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$offsetCountOption = function (size) {
	switch (size) {
		case 0:
			return '0';
		case 1:
			return '1';
		case 2:
			return '2';
		case 3:
			return '3';
		case 4:
			return '4';
		case 5:
			return '5';
		case 6:
			return '6';
		case 7:
			return '7';
		case 8:
			return '8';
		case 9:
			return '9';
		case 10:
			return '10';
		default:
			return '11';
	}
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$screenSizeToPartialString = function (screenSize) {
	var _v0 = $rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption(screenSize);
	if (!_v0.$) {
		var s = _v0.a;
		return '-' + (s + '-');
	} else {
		return '-';
	}
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$offsetClass = function (_v0) {
	var screenSize = _v0.fL;
	var offsetCount = _v0.fn;
	return $elm$html$Html$Attributes$class(
		'offset' + ($rundis$elm_bootstrap$Bootstrap$Grid$Internal$screenSizeToPartialString(screenSize) + $rundis$elm_bootstrap$Bootstrap$Grid$Internal$offsetCountOption(offsetCount)));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$offsetsToAttributes = function (offsets) {
	var offset_ = function (m) {
		return A2($elm$core$Maybe$map, $rundis$elm_bootstrap$Bootstrap$Grid$Internal$offsetClass, m);
	};
	return A2(
		$elm$core$List$filterMap,
		$elm$core$Basics$identity,
		A2($elm$core$List$map, offset_, offsets));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$orderColOption = function (size) {
	switch (size) {
		case 0:
			return 'first';
		case 1:
			return '1';
		case 2:
			return '2';
		case 3:
			return '3';
		case 4:
			return '4';
		case 5:
			return '5';
		case 6:
			return '6';
		case 7:
			return '7';
		case 8:
			return '8';
		case 9:
			return '9';
		case 10:
			return '10';
		case 11:
			return '11';
		case 12:
			return '12';
		default:
			return 'last';
	}
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$orderToAttributes = function (orders) {
	var order_ = function (m) {
		if (!m.$) {
			var screenSize = m.a.fL;
			var moveCount = m.a.a5;
			return $elm$core$Maybe$Just(
				$elm$html$Html$Attributes$class(
					'order' + ($rundis$elm_bootstrap$Bootstrap$Grid$Internal$screenSizeToPartialString(screenSize) + $rundis$elm_bootstrap$Bootstrap$Grid$Internal$orderColOption(moveCount))));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	};
	return A2(
		$elm$core$List$filterMap,
		$elm$core$Basics$identity,
		A2($elm$core$List$map, order_, orders));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$moveCountOption = function (size) {
	switch (size) {
		case 0:
			return '0';
		case 1:
			return '1';
		case 2:
			return '2';
		case 3:
			return '3';
		case 4:
			return '4';
		case 5:
			return '5';
		case 6:
			return '6';
		case 7:
			return '7';
		case 8:
			return '8';
		case 9:
			return '9';
		case 10:
			return '10';
		case 11:
			return '11';
		default:
			return '12';
	}
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$pullsToAttributes = function (pulls) {
	var pull_ = function (m) {
		if (!m.$) {
			var screenSize = m.a.fL;
			var moveCount = m.a.a5;
			return $elm$core$Maybe$Just(
				$elm$html$Html$Attributes$class(
					'pull' + ($rundis$elm_bootstrap$Bootstrap$Grid$Internal$screenSizeToPartialString(screenSize) + $rundis$elm_bootstrap$Bootstrap$Grid$Internal$moveCountOption(moveCount))));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	};
	return A2(
		$elm$core$List$filterMap,
		$elm$core$Basics$identity,
		A2($elm$core$List$map, pull_, pulls));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$pushesToAttributes = function (pushes) {
	var push_ = function (m) {
		if (!m.$) {
			var screenSize = m.a.fL;
			var moveCount = m.a.a5;
			return $elm$core$Maybe$Just(
				$elm$html$Html$Attributes$class(
					'push' + ($rundis$elm_bootstrap$Bootstrap$Grid$Internal$screenSizeToPartialString(screenSize) + $rundis$elm_bootstrap$Bootstrap$Grid$Internal$moveCountOption(moveCount))));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	};
	return A2(
		$elm$core$List$filterMap,
		$elm$core$Basics$identity,
		A2($elm$core$List$map, push_, pushes));
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Text$textAlignDirOption = function (dir) {
	switch (dir) {
		case 1:
			return 'center';
		case 0:
			return 'left';
		default:
			return 'right';
	}
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Text$textAlignClass = function (_v0) {
	var dir = _v0.eP;
	var size = _v0.ej;
	return $elm$html$Html$Attributes$class(
		'text' + (A2(
			$elm$core$Maybe$withDefault,
			'-',
			A2(
				$elm$core$Maybe$map,
				function (s) {
					return '-' + (s + '-');
				},
				$rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption(size))) + $rundis$elm_bootstrap$Bootstrap$Internal$Text$textAlignDirOption(dir)));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$verticalAlignOption = function (align) {
	switch (align) {
		case 0:
			return 'start';
		case 1:
			return 'center';
		default:
			return 'end';
	}
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$vAlignClass = F2(
	function (prefix, _v0) {
		var align = _v0.eA;
		var screenSize = _v0.fL;
		return $elm$html$Html$Attributes$class(
			_Utils_ap(
				prefix,
				_Utils_ap(
					A2(
						$elm$core$Maybe$withDefault,
						'',
						A2(
							$elm$core$Maybe$map,
							function (v) {
								return v + '-';
							},
							$rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption(screenSize))),
					$rundis$elm_bootstrap$Bootstrap$Grid$Internal$verticalAlignOption(align))));
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$vAlignsToAttributes = F2(
	function (prefix, aligns) {
		var align = function (a) {
			return A2(
				$elm$core$Maybe$map,
				$rundis$elm_bootstrap$Bootstrap$Grid$Internal$vAlignClass(prefix),
				a);
		};
		return A2(
			$elm$core$List$filterMap,
			$elm$core$Basics$identity,
			A2($elm$core$List$map, align, aligns));
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$colAttributes = function (modifiers) {
	var options = A3($elm$core$List$foldl, $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColOption, $rundis$elm_bootstrap$Bootstrap$Grid$Internal$defaultColOptions, modifiers);
	var shouldAddDefaultXs = !$elm$core$List$length(
		A2(
			$elm$core$List$filterMap,
			$elm$core$Basics$identity,
			_List_fromArray(
				[options.bY, options.bW, options.bV, options.bU, options.bX])));
	return _Utils_ap(
		$rundis$elm_bootstrap$Bootstrap$Grid$Internal$colWidthsToAttributes(
			_List_fromArray(
				[
					shouldAddDefaultXs ? $elm$core$Maybe$Just(
					A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$Width, 0, 0)) : options.bY,
					options.bW,
					options.bV,
					options.bU,
					options.bX
				])),
		_Utils_ap(
			$rundis$elm_bootstrap$Bootstrap$Grid$Internal$offsetsToAttributes(
				_List_fromArray(
					[options.cQ, options.cN, options.cM, options.cL, options.cP])),
			_Utils_ap(
				$rundis$elm_bootstrap$Bootstrap$Grid$Internal$pullsToAttributes(
					_List_fromArray(
						[options.c2, options.c0, options.c$, options.c_, options.c1])),
				_Utils_ap(
					$rundis$elm_bootstrap$Bootstrap$Grid$Internal$pushesToAttributes(
						_List_fromArray(
							[options.c7, options.c5, options.c4, options.c3, options.c6])),
					_Utils_ap(
						$rundis$elm_bootstrap$Bootstrap$Grid$Internal$orderToAttributes(
							_List_fromArray(
								[options.cZ, options.cX, options.cW, options.cV, options.cY])),
						_Utils_ap(
							A2(
								$rundis$elm_bootstrap$Bootstrap$Grid$Internal$vAlignsToAttributes,
								'align-self-',
								_List_fromArray(
									[options.b4, options.b2, options.b1, options.b0, options.b3])),
							_Utils_ap(
								function () {
									var _v0 = options.di;
									if (!_v0.$) {
										var a = _v0.a;
										return _List_fromArray(
											[
												$rundis$elm_bootstrap$Bootstrap$Internal$Text$textAlignClass(a)
											]);
									} else {
										return _List_Nil;
									}
								}(),
								options.am)))))));
};
var $elm$html$Html$Keyed$node = $elm$virtual_dom$VirtualDom$keyedNode;
var $rundis$elm_bootstrap$Bootstrap$Grid$renderCol = function (column) {
	switch (column.$) {
		case 0:
			var options = column.a.fo;
			var children = column.a.ao;
			return A2(
				$elm$html$Html$div,
				$rundis$elm_bootstrap$Bootstrap$Grid$Internal$colAttributes(options),
				children);
		case 1:
			var e = column.a;
			return e;
		default:
			var options = column.a.fo;
			var children = column.a.ao;
			return A3(
				$elm$html$Html$Keyed$node,
				'div',
				$rundis$elm_bootstrap$Bootstrap$Grid$Internal$colAttributes(options),
				children);
	}
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyRowHAlign = F2(
	function (align, options) {
		var _v0 = align.fL;
		switch (_v0) {
			case 0:
				return _Utils_update(
					options,
					{
						cz: $elm$core$Maybe$Just(align)
					});
			case 1:
				return _Utils_update(
					options,
					{
						cx: $elm$core$Maybe$Just(align)
					});
			case 2:
				return _Utils_update(
					options,
					{
						cw: $elm$core$Maybe$Just(align)
					});
			case 3:
				return _Utils_update(
					options,
					{
						cv: $elm$core$Maybe$Just(align)
					});
			default:
				return _Utils_update(
					options,
					{
						cy: $elm$core$Maybe$Just(align)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyRowVAlign = F2(
	function (align_, options) {
		var _v0 = align_.fL;
		switch (_v0) {
			case 0:
				return _Utils_update(
					options,
					{
						dt: $elm$core$Maybe$Just(align_)
					});
			case 1:
				return _Utils_update(
					options,
					{
						dr: $elm$core$Maybe$Just(align_)
					});
			case 2:
				return _Utils_update(
					options,
					{
						dq: $elm$core$Maybe$Just(align_)
					});
			case 3:
				return _Utils_update(
					options,
					{
						dp: $elm$core$Maybe$Just(align_)
					});
			default:
				return _Utils_update(
					options,
					{
						ds: $elm$core$Maybe$Just(align_)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyRowOption = F2(
	function (modifier, options) {
		switch (modifier.$) {
			case 2:
				var attrs = modifier.a;
				return _Utils_update(
					options,
					{
						am: _Utils_ap(options.am, attrs)
					});
			case 0:
				var align = modifier.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyRowVAlign, align, options);
			default:
				var align = modifier.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyRowHAlign, align, options);
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$defaultRowOptions = {am: _List_Nil, cv: $elm$core$Maybe$Nothing, cw: $elm$core$Maybe$Nothing, cx: $elm$core$Maybe$Nothing, cy: $elm$core$Maybe$Nothing, cz: $elm$core$Maybe$Nothing, dp: $elm$core$Maybe$Nothing, dq: $elm$core$Maybe$Nothing, dr: $elm$core$Maybe$Nothing, ds: $elm$core$Maybe$Nothing, dt: $elm$core$Maybe$Nothing};
var $rundis$elm_bootstrap$Bootstrap$General$Internal$horizontalAlignOption = function (align) {
	switch (align) {
		case 0:
			return 'start';
		case 1:
			return 'center';
		case 2:
			return 'end';
		case 3:
			return 'around';
		default:
			return 'between';
	}
};
var $rundis$elm_bootstrap$Bootstrap$General$Internal$hAlignClass = function (_v0) {
	var align = _v0.eA;
	var screenSize = _v0.fL;
	return $elm$html$Html$Attributes$class(
		'justify-content-' + (A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$map,
				function (v) {
					return v + '-';
				},
				$rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption(screenSize))) + $rundis$elm_bootstrap$Bootstrap$General$Internal$horizontalAlignOption(align)));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$hAlignsToAttributes = function (aligns) {
	var align = function (a) {
		return A2($elm$core$Maybe$map, $rundis$elm_bootstrap$Bootstrap$General$Internal$hAlignClass, a);
	};
	return A2(
		$elm$core$List$filterMap,
		$elm$core$Basics$identity,
		A2($elm$core$List$map, align, aligns));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$rowAttributes = function (modifiers) {
	var options = A3($elm$core$List$foldl, $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyRowOption, $rundis$elm_bootstrap$Bootstrap$Grid$Internal$defaultRowOptions, modifiers);
	return _Utils_ap(
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('row')
			]),
		_Utils_ap(
			A2(
				$rundis$elm_bootstrap$Bootstrap$Grid$Internal$vAlignsToAttributes,
				'align-items-',
				_List_fromArray(
					[options.dt, options.dr, options.dq, options.dp, options.ds])),
			_Utils_ap(
				$rundis$elm_bootstrap$Bootstrap$Grid$Internal$hAlignsToAttributes(
					_List_fromArray(
						[options.cz, options.cx, options.cw, options.cv, options.cy])),
				options.am)));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$row = F2(
	function (options, cols) {
		return A2(
			$elm$html$Html$div,
			$rundis$elm_bootstrap$Bootstrap$Grid$Internal$rowAttributes(options),
			A2($elm$core$List$map, $rundis$elm_bootstrap$Bootstrap$Grid$renderCol, cols));
	});
var $author$project$Main$InputSettingsBiography = function (a) {
	return {$: 34, a: a};
};
var $author$project$Main$InputSettingsBirthDay = function (a) {
	return {$: 36, a: a};
};
var $author$project$Main$InputSettingsBirthMonth = function (a) {
	return {$: 37, a: a};
};
var $author$project$Main$InputSettingsBirthYear = function (a) {
	return {$: 38, a: a};
};
var $author$project$Main$InputSettingsEmail = function (a) {
	return {$: 31, a: a};
};
var $author$project$Main$InputSettingsFirstname = function (a) {
	return {$: 29, a: a};
};
var $author$project$Main$InputSettingsGender = function (a) {
	return {$: 32, a: a};
};
var $author$project$Main$InputSettingsGeoAuth = function (a) {
	return {$: 41, a: a};
};
var $author$project$Main$InputSettingsGeoLatitude = function (a) {
	return {$: 39, a: a};
};
var $author$project$Main$InputSettingsGeoLongitude = function (a) {
	return {$: 40, a: a};
};
var $author$project$Main$InputSettingsLastname = function (a) {
	return {$: 30, a: a};
};
var $author$project$Main$InputSettingsOrientation = function (a) {
	return {$: 33, a: a};
};
var $author$project$Main$InputSettingsPseudo = function (a) {
	return {$: 28, a: a};
};
var $author$project$Main$SubmitSettings = {$: 42};
var $mdgriffith$elm_ui$Internal$Model$Left = 0;
var $mdgriffith$elm_ui$Element$alignLeft = $mdgriffith$elm_ui$Internal$Model$AlignX(0);
var $mdgriffith$elm_ui$Element$Input$onKeyLookup = function (lookup) {
	var decode = function (code) {
		var _v0 = lookup(code);
		if (_v0.$ === 1) {
			return $elm$json$Json$Decode$fail('No key matched');
		} else {
			var msg = _v0.a;
			return $elm$json$Json$Decode$succeed(msg);
		}
	};
	var isKey = A2(
		$elm$json$Json$Decode$andThen,
		decode,
		A2($elm$json$Json$Decode$field, 'key', $elm$json$Json$Decode$string));
	return $mdgriffith$elm_ui$Internal$Model$Attr(
		A2($elm$html$Html$Events$on, 'keyup', isKey));
};
var $mdgriffith$elm_ui$Element$Input$space = ' ';
var $mdgriffith$elm_ui$Element$Input$tabindex = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Attributes$tabindex);
var $mdgriffith$elm_ui$Element$Input$checkbox = F2(
	function (attrs, _v0) {
		var label = _v0.j;
		var icon = _v0.g3;
		var checked = _v0.gE;
		var onChange = _v0.hr;
		var attributes = _Utils_ap(
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Input$isHiddenLabel(label) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Element$spacing(6),
					$mdgriffith$elm_ui$Internal$Model$Attr(
					$elm$html$Html$Events$onClick(
						onChange(!checked))),
					$mdgriffith$elm_ui$Element$Region$announce,
					$mdgriffith$elm_ui$Element$Input$onKeyLookup(
					function (code) {
						return _Utils_eq(code, $mdgriffith$elm_ui$Element$Input$enter) ? $elm$core$Maybe$Just(
							onChange(!checked)) : (_Utils_eq(code, $mdgriffith$elm_ui$Element$Input$space) ? $elm$core$Maybe$Just(
							onChange(!checked)) : $elm$core$Maybe$Nothing);
					}),
					$mdgriffith$elm_ui$Element$Input$tabindex(0),
					$mdgriffith$elm_ui$Element$pointer,
					$mdgriffith$elm_ui$Element$alignLeft,
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
				]),
			attrs);
		return A3(
			$mdgriffith$elm_ui$Element$Input$applyLabel,
			attributes,
			label,
			A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asEl,
				$mdgriffith$elm_ui$Internal$Model$div,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Internal$Model$Attr(
						A2($elm$html$Html$Attributes$attribute, 'role', 'checkbox')),
						$mdgriffith$elm_ui$Internal$Model$Attr(
						A2(
							$elm$html$Html$Attributes$attribute,
							'aria-checked',
							checked ? 'true' : 'false')),
						$mdgriffith$elm_ui$Element$Input$hiddenLabelAttribute(label),
						$mdgriffith$elm_ui$Element$centerY,
						$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink)
					]),
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(
					_List_fromArray(
						[
							icon(checked)
						]))));
	});
var $mdgriffith$elm_ui$Internal$Flag$fontAlignment = $mdgriffith$elm_ui$Internal$Flag$flag(12);
var $mdgriffith$elm_ui$Element$Font$center = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$fontAlignment, $mdgriffith$elm_ui$Internal$Style$classes.hZ);
var $elm$core$Basics$pi = _Basics_pi;
var $elm$core$Basics$degrees = function (angleInDegrees) {
	return (angleInDegrees * $elm$core$Basics$pi) / 180;
};
var $mdgriffith$elm_ui$Internal$Model$Empty = {$: 3};
var $mdgriffith$elm_ui$Element$none = $mdgriffith$elm_ui$Internal$Model$Empty;
var $mdgriffith$elm_ui$Internal$Model$Px = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_ui$Element$px = $mdgriffith$elm_ui$Internal$Model$Px;
var $mdgriffith$elm_ui$Internal$Model$Rotate = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$rotate = $mdgriffith$elm_ui$Internal$Flag$flag(24);
var $mdgriffith$elm_ui$Element$rotate = function (angle) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$TransformComponent,
		$mdgriffith$elm_ui$Internal$Flag$rotate,
		A2(
			$mdgriffith$elm_ui$Internal$Model$Rotate,
			_Utils_Tuple3(0, 0, 1),
			angle));
};
var $mdgriffith$elm_ui$Internal$Model$boxShadowClass = function (shadow) {
	return $elm$core$String$concat(
		_List_fromArray(
			[
				shadow.fa ? 'box-inset' : 'box-',
				$mdgriffith$elm_ui$Internal$Model$floatClass(shadow.d4.a) + 'px',
				$mdgriffith$elm_ui$Internal$Model$floatClass(shadow.d4.b) + 'px',
				$mdgriffith$elm_ui$Internal$Model$floatClass(shadow.dD) + 'px',
				$mdgriffith$elm_ui$Internal$Model$floatClass(shadow.ej) + 'px',
				$mdgriffith$elm_ui$Internal$Model$formatColorClass(shadow.dE)
			]));
};
var $mdgriffith$elm_ui$Internal$Flag$shadows = $mdgriffith$elm_ui$Internal$Flag$flag(19);
var $mdgriffith$elm_ui$Element$Border$shadow = function (almostShade) {
	var shade = {dD: almostShade.dD, dE: almostShade.dE, fa: false, d4: almostShade.d4, ej: almostShade.ej};
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$shadows,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Single,
			$mdgriffith$elm_ui$Internal$Model$boxShadowClass(shade),
			'box-shadow',
			$mdgriffith$elm_ui$Internal$Model$formatBoxShadow(shade)));
};
var $mdgriffith$elm_ui$Element$Font$size = function (i) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontSize,
		$mdgriffith$elm_ui$Internal$Model$FontSize(i));
};
var $mdgriffith$elm_ui$Element$Border$widthXY = F2(
	function (x, y) {
		return A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$borderWidth,
			A5(
				$mdgriffith$elm_ui$Internal$Model$BorderWidth,
				'b-' + ($elm$core$String$fromInt(x) + ('-' + $elm$core$String$fromInt(y))),
				y,
				x,
				y,
				x));
	});
var $mdgriffith$elm_ui$Element$Border$widthEach = function (_v0) {
	var bottom = _v0.an;
	var top = _v0.aM;
	var left = _v0.au;
	var right = _v0.aB;
	return (_Utils_eq(top, bottom) && _Utils_eq(left, right)) ? (_Utils_eq(top, right) ? $mdgriffith$elm_ui$Element$Border$width(top) : A2($mdgriffith$elm_ui$Element$Border$widthXY, left, top)) : A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderWidth,
		A5(
			$mdgriffith$elm_ui$Internal$Model$BorderWidth,
			'b-' + ($elm$core$String$fromInt(top) + ('-' + ($elm$core$String$fromInt(right) + ('-' + ($elm$core$String$fromInt(bottom) + ('-' + $elm$core$String$fromInt(left))))))),
			top,
			right,
			bottom,
			left));
};
var $mdgriffith$elm_ui$Element$Input$defaultCheckbox = function (checked) {
	return A2(
		$mdgriffith$elm_ui$Element$el,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Internal$Model$htmlClass('focusable'),
				$mdgriffith$elm_ui$Element$width(
				$mdgriffith$elm_ui$Element$px(14)),
				$mdgriffith$elm_ui$Element$height(
				$mdgriffith$elm_ui$Element$px(14)),
				$mdgriffith$elm_ui$Element$Font$color($mdgriffith$elm_ui$Element$Input$white),
				$mdgriffith$elm_ui$Element$centerY,
				$mdgriffith$elm_ui$Element$Font$size(9),
				$mdgriffith$elm_ui$Element$Font$center,
				$mdgriffith$elm_ui$Element$Border$rounded(3),
				$mdgriffith$elm_ui$Element$Border$color(
				checked ? A3($mdgriffith$elm_ui$Element$rgb, 59 / 255, 153 / 255, 252 / 255) : A3($mdgriffith$elm_ui$Element$rgb, 211 / 255, 211 / 255, 211 / 255)),
				$mdgriffith$elm_ui$Element$Border$shadow(
				{
					dD: 1,
					dE: checked ? A4($mdgriffith$elm_ui$Element$rgba, 238 / 255, 238 / 255, 238 / 255, 0) : A3($mdgriffith$elm_ui$Element$rgb, 238 / 255, 238 / 255, 238 / 255),
					d4: _Utils_Tuple2(0, 0),
					ej: 1
				}),
				$mdgriffith$elm_ui$Element$Background$color(
				checked ? A3($mdgriffith$elm_ui$Element$rgb, 59 / 255, 153 / 255, 252 / 255) : $mdgriffith$elm_ui$Element$Input$white),
				$mdgriffith$elm_ui$Element$Border$width(
				checked ? 0 : 1)
			]),
		checked ? A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Border$color($mdgriffith$elm_ui$Element$Input$white),
					$mdgriffith$elm_ui$Element$height(
					$mdgriffith$elm_ui$Element$px(6)),
					$mdgriffith$elm_ui$Element$width(
					$mdgriffith$elm_ui$Element$px(9)),
					$mdgriffith$elm_ui$Element$rotate(
					$elm$core$Basics$degrees(-45)),
					$mdgriffith$elm_ui$Element$centerX,
					$mdgriffith$elm_ui$Element$centerY,
					$mdgriffith$elm_ui$Element$moveUp(1),
					$mdgriffith$elm_ui$Element$Border$widthEach(
					{an: 2, au: 2, aB: 0, aM: 0})
				]),
			$mdgriffith$elm_ui$Element$none) : $mdgriffith$elm_ui$Element$none);
};
var $author$project$ZipList$indexedSelectedMap = F2(
	function (func, zipList) {
		if (!zipList.$) {
			return $author$project$ZipList$Empty;
		} else {
			var before = zipList.a;
			var elem = zipList.b;
			var after = zipList.c;
			var index = $elm$core$List$length(before);
			return A3(
				$author$project$ZipList$Zipper,
				A2(
					$elm$core$List$indexedMap,
					F2(
						function (indexBe, elemBe) {
							return A3(func, (index - 1) - indexBe, false, elemBe);
						}),
					before),
				A3(func, index, true, elem),
				A2(
					$elm$core$List$indexedMap,
					F2(
						function (indexAf, elemAf) {
							return A3(func, (index + 1) + indexAf, false, elemAf);
						}),
					after));
		}
	});
var $author$project$Dropdown$onChange = F2(
	function (itemList, toMsg) {
		var goToNewIndexZipList = function (optionValueStr) {
			return A2(
				$elm$core$Maybe$withDefault,
				itemList,
				A2(
					$elm$core$Maybe$map,
					function (newIndex) {
						return A2($author$project$ZipList$goToIndex, newIndex, itemList);
					},
					$elm$core$String$toInt(optionValueStr)));
		};
		return A2(
			$elm$html$Html$Events$on,
			'change',
			A2(
				$elm$json$Json$Decode$map,
				A2($elm$core$Basics$composeL, toMsg, goToNewIndexZipList),
				$elm$html$Html$Events$targetValue));
	});
var $elm$html$Html$select = _VirtualDom_node('select');
var $elm$html$Html$option = _VirtualDom_node('option');
var $elm$html$Html$Attributes$selected = $elm$html$Html$Attributes$boolProperty('selected');
var $author$project$Dropdown$toHtmlOption = F3(
	function (index, isSelected, _v0) {
		var text = _v0.b;
		return A2(
			$elm$html$Html$option,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$value(
					$elm$core$String$fromInt(index)),
					$elm$html$Html$Attributes$selected(isSelected)
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(text)
				]));
	});
var $author$project$ZipList$toList = function (zipList) {
	if (!zipList.$) {
		return _List_Nil;
	} else {
		var before = zipList.a;
		var elem = zipList.b;
		var after = zipList.c;
		return $elm$core$List$concat(
			_List_fromArray(
				[
					$elm$core$List$reverse(before),
					$elm$core$List$singleton(elem),
					after
				]));
	}
};
var $author$project$Dropdown$dropdown = F3(
	function (attributes, itemList, toMsg) {
		return A2(
			$elm$html$Html$select,
			A2(
				$elm$core$List$cons,
				A2($author$project$Dropdown$onChange, itemList, toMsg),
				attributes),
			$author$project$ZipList$toList(
				A2($author$project$ZipList$indexedSelectedMap, $author$project$Dropdown$toHtmlOption, itemList)));
	});
var $mdgriffith$elm_ui$Element$Input$Above = 2;
var $mdgriffith$elm_ui$Element$Input$labelAbove = $mdgriffith$elm_ui$Element$Input$Label(2);
var $mdgriffith$elm_ui$Element$Input$OnRight = 0;
var $mdgriffith$elm_ui$Element$Input$labelRight = $mdgriffith$elm_ui$Element$Input$Label(0);
var $elm$regex$Regex$findAtMost = _Regex_findAtMost;
var $author$project$Form$matches = function (regex) {
	var validRegex = A2(
		$elm$core$Maybe$withDefault,
		$elm$regex$Regex$never,
		$elm$regex$Regex$fromString(regex));
	return A2(
		$elm$core$Basics$composeR,
		A2($elm$regex$Regex$findAtMost, 1, validRegex),
		A2($elm$core$Basics$composeR, $elm$core$List$isEmpty, $elm$core$Basics$not));
};
var $mdgriffith$elm_ui$Element$Input$multiline = F2(
	function (attrs, multi) {
		return A3(
			$mdgriffith$elm_ui$Element$Input$textHelper,
			{M: $elm$core$Maybe$Nothing, S: multi.hQ, A: $mdgriffith$elm_ui$Element$Input$TextArea},
			attrs,
			{j: multi.j, hr: multi.hr, bK: multi.bK, ep: multi.ep});
	});
var $mdgriffith$elm_ui$Element$row = F2(
	function (attrs, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asRow,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.bx + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.ae)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
						attrs))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $mdgriffith$elm_ui$Element$Input$text = $mdgriffith$elm_ui$Element$Input$textHelper(
	{
		M: $elm$core$Maybe$Nothing,
		S: false,
		A: $mdgriffith$elm_ui$Element$Input$TextInputNode('text')
	});
var $mdgriffith$elm_ui$Element$Input$username = $mdgriffith$elm_ui$Element$Input$textHelper(
	{
		M: $elm$core$Maybe$Just('username'),
		S: false,
		A: $mdgriffith$elm_ui$Element$Input$TextInputNode('text')
	});
var $elm$html$Html$li = _VirtualDom_node('li');
var $elm$html$Html$ul = _VirtualDom_node('ul');
var $larribas$elm_multi_input$MultiInput$InputChanged = function (a) {
	return {$: 4, a: a};
};
var $larribas$elm_multi_input$MultiInput$KeyDown = function (a) {
	return {$: 2, a: a};
};
var $larribas$elm_multi_input$MultiInput$TextareaBlurred = function (a) {
	return {$: 1, a: a};
};
var $elm$html$Html$br = _VirtualDom_node('br');
var $elm$html$Html$Events$onBlur = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'blur',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$html$Html$Events$keyCode = A2($elm$json$Json$Decode$field, 'keyCode', $elm$json$Json$Decode$int);
var $larribas$elm_multi_input$MultiInput$onKeyDown = function (toMsg) {
	return A2(
		$elm$html$Html$Events$on,
		'keydown',
		A2($elm$json$Json$Decode$map, toMsg, $elm$html$Html$Events$keyCode));
};
var $elm$html$Html$Attributes$placeholder = $elm$html$Html$Attributes$stringProperty('placeholder');
var $elm$html$Html$pre = _VirtualDom_node('pre');
var $elm$html$Html$Attributes$rows = function (n) {
	return A2(
		_VirtualDom_attribute,
		'rows',
		$elm$core$String$fromInt(n));
};
var $elm$html$Html$textarea = _VirtualDom_node('textarea');
var $larribas$elm_multi_input$MultiInput$viewExpandingTextArea = F3(
	function (conf, customAttributes, state) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('multi-input-expanding-area')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$pre,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$span,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(
									(state.J !== '') ? state.J : conf.bK)
								])),
							A2($elm$html$Html$br, _List_Nil, _List_Nil)
						])),
					A2(
					$elm$html$Html$textarea,
					_Utils_ap(
						_List_fromArray(
							[
								$elm$html$Html$Attributes$value(state.J),
								$elm$html$Html$Attributes$placeholder(conf.bK),
								$elm$html$Html$Attributes$rows(1),
								$elm$html$Html$Attributes$id(state.e8),
								$elm$html$Html$Events$onInput(
								A2($elm$core$Basics$composeL, conf.ib, $larribas$elm_multi_input$MultiInput$InputChanged)),
								$elm$html$Html$Events$onBlur(
								conf.ib(
									$larribas$elm_multi_input$MultiInput$TextareaBlurred(state.J))),
								$larribas$elm_multi_input$MultiInput$onKeyDown(
								A2($elm$core$Basics$composeL, conf.ib, $larribas$elm_multi_input$MultiInput$KeyDown))
							]),
						customAttributes),
					_List_Nil)
				]));
	});
var $larribas$elm_multi_input$MultiInput$RemoveItem = function (a) {
	return {$: 3, a: a};
};
var $elm$html$Html$Attributes$classList = function (classes) {
	return $elm$html$Html$Attributes$class(
		A2(
			$elm$core$String$join,
			' ',
			A2(
				$elm$core$List$map,
				$elm$core$Tuple$first,
				A2($elm$core$List$filter, $elm$core$Tuple$second, classes))));
};
var $elm$html$Html$i = _VirtualDom_node('i');
var $larribas$elm_multi_input$MultiInput$viewItem = F3(
	function (conf, state, item) {
		return A2(
			$elm$html$Html$li,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$classList(
					_List_fromArray(
						[
							_Utils_Tuple2('multi-input-token', true),
							_Utils_Tuple2(
							'multi-input-token-invalid',
							!conf.hf(item))
						]))
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(item),
							A2(
							$elm$html$Html$i,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('multi-input-delete-button'),
									$elm$html$Html$Events$onClick(
									conf.ib(
										$larribas$elm_multi_input$MultiInput$RemoveItem(item)))
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('')
								]))
						]))
				]));
	});
var $larribas$elm_multi_input$MultiInput$view = F4(
	function (conf, customAttributes, items, state) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('multi-input-container')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$ul,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('multi-input-list'),
							$elm$html$Html$Events$onClick(
							conf.ib($larribas$elm_multi_input$MultiInput$FocusElement))
						]),
					_Utils_ap(
						A2(
							$elm$core$List$map,
							A2($larribas$elm_multi_input$MultiInput$viewItem, conf, state),
							items),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$li,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('multi-input-list-item')
									]),
								_List_fromArray(
									[
										A3($larribas$elm_multi_input$MultiInput$viewExpandingTextArea, conf, customAttributes, state)
									]))
							])))
				]));
	});
var $author$project$Main$settingsView = function (model) {
	var _v0 = $author$project$Main$breakAppartGeoInfo(model.x);
	var geoAuth = _v0.a;
	var latitude = _v0.b;
	var longitude = _v0.c;
	return A2(
		$mdgriffith$elm_ui$Element$column,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$spacing(16),
				$mdgriffith$elm_ui$Element$centerX,
				$mdgriffith$elm_ui$Element$Border$shadow(
				{
					dD: 100.0,
					dE: A4($mdgriffith$elm_ui$Element$rgba, 0, 0, 0, 0.2),
					d4: _Utils_Tuple2(0.0, 0.0),
					ej: 0.0
				}),
				$mdgriffith$elm_ui$Element$padding(64)
			]),
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Element$Input$username,
				_List_fromArray(
					[
						$author$project$Main$onEnter($author$project$Main$SubmitSettings),
						$mdgriffith$elm_ui$Element$padding(8)
					]),
				{
					j: A2(
						$mdgriffith$elm_ui$Element$Input$labelLeft,
						_List_fromArray(
							[$mdgriffith$elm_ui$Element$centerY]),
						$mdgriffith$elm_ui$Element$text('pseudo : ')),
					hr: $author$project$Main$InputSettingsPseudo,
					bK: $elm$core$Maybe$Just(
						A2(
							$mdgriffith$elm_ui$Element$Input$placeholder,
							_List_Nil,
							$mdgriffith$elm_ui$Element$text('Your pseudo'))),
					ep: model.bk
				}),
				A2(
				$mdgriffith$elm_ui$Element$Input$text,
				_List_fromArray(
					[
						$author$project$Main$onEnter($author$project$Main$SubmitSettings),
						$mdgriffith$elm_ui$Element$padding(8)
					]),
				{
					j: A2(
						$mdgriffith$elm_ui$Element$Input$labelLeft,
						_List_fromArray(
							[$mdgriffith$elm_ui$Element$centerY]),
						$mdgriffith$elm_ui$Element$text('lastname : ')),
					hr: $author$project$Main$InputSettingsLastname,
					bK: $elm$core$Maybe$Just(
						A2(
							$mdgriffith$elm_ui$Element$Input$placeholder,
							_List_Nil,
							$mdgriffith$elm_ui$Element$text('Your lastname'))),
					ep: model.bi
				}),
				A2(
				$mdgriffith$elm_ui$Element$Input$text,
				_List_fromArray(
					[
						$author$project$Main$onEnter($author$project$Main$SubmitSettings),
						$mdgriffith$elm_ui$Element$padding(8)
					]),
				{
					j: A2(
						$mdgriffith$elm_ui$Element$Input$labelLeft,
						_List_fromArray(
							[$mdgriffith$elm_ui$Element$centerY]),
						$mdgriffith$elm_ui$Element$text('firstname : ')),
					hr: $author$project$Main$InputSettingsFirstname,
					bK: $elm$core$Maybe$Just(
						A2(
							$mdgriffith$elm_ui$Element$Input$placeholder,
							_List_Nil,
							$mdgriffith$elm_ui$Element$text('Your firstname'))),
					ep: model.bg
				}),
				A2(
				$mdgriffith$elm_ui$Element$row,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								$author$project$Main$onEnter($author$project$Main$SubmitSettings),
								$mdgriffith$elm_ui$Element$padding(8)
							]),
						$mdgriffith$elm_ui$Element$html(
							A3($author$project$Dropdown$dropdown, _List_Nil, model.bc, $author$project$Main$InputSettingsBirthDay))),
						A2(
						$mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								$author$project$Main$onEnter($author$project$Main$SubmitSettings),
								$mdgriffith$elm_ui$Element$padding(8)
							]),
						$mdgriffith$elm_ui$Element$html(
							A3($author$project$Dropdown$dropdown, _List_Nil, model.bd, $author$project$Main$InputSettingsBirthMonth))),
						A2(
						$mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								$author$project$Main$onEnter($author$project$Main$SubmitSettings),
								$mdgriffith$elm_ui$Element$padding(8)
							]),
						$mdgriffith$elm_ui$Element$html(
							A3($author$project$Dropdown$dropdown, _List_Nil, model.be, $author$project$Main$InputSettingsBirthYear)))
					])),
				A2(
				$mdgriffith$elm_ui$Element$Input$email,
				_List_fromArray(
					[
						$author$project$Main$onEnter($author$project$Main$SubmitSettings),
						$mdgriffith$elm_ui$Element$padding(8)
					]),
				{
					j: A2(
						$mdgriffith$elm_ui$Element$Input$labelLeft,
						_List_fromArray(
							[$mdgriffith$elm_ui$Element$centerY]),
						$mdgriffith$elm_ui$Element$text('email : ')),
					hr: $author$project$Main$InputSettingsEmail,
					bK: $elm$core$Maybe$Just(
						A2(
							$mdgriffith$elm_ui$Element$Input$placeholder,
							_List_Nil,
							$mdgriffith$elm_ui$Element$text('Your email'))),
					ep: model.bf
				}),
				A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$author$project$Main$onEnter($author$project$Main$SubmitSettings),
						$mdgriffith$elm_ui$Element$padding(8)
					]),
				$mdgriffith$elm_ui$Element$html(
					A3($author$project$Dropdown$dropdown, _List_Nil, model.bh, $author$project$Main$InputSettingsGender))),
				A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$author$project$Main$onEnter($author$project$Main$SubmitSettings),
						$mdgriffith$elm_ui$Element$padding(8)
					]),
				$mdgriffith$elm_ui$Element$html(
					A3($author$project$Dropdown$dropdown, _List_Nil, model.bj, $author$project$Main$InputSettingsOrientation))),
				A2(
				$mdgriffith$elm_ui$Element$Input$multiline,
				_List_fromArray(
					[
						$author$project$Main$onEnter($author$project$Main$SubmitSettings),
						$mdgriffith$elm_ui$Element$padding(8)
					]),
				{
					j: A2(
						$mdgriffith$elm_ui$Element$Input$labelAbove,
						_List_fromArray(
							[$mdgriffith$elm_ui$Element$centerY, $mdgriffith$elm_ui$Element$alignLeft]),
						$mdgriffith$elm_ui$Element$text('biography : ')),
					hr: $author$project$Main$InputSettingsBiography,
					bK: $elm$core$Maybe$Just(
						A2(
							$mdgriffith$elm_ui$Element$Input$placeholder,
							_List_Nil,
							$mdgriffith$elm_ui$Element$text('Your biography'))),
					hQ: true,
					ep: model.ba
				}),
				A2(
				$mdgriffith$elm_ui$Element$el,
				_List_Nil,
				$mdgriffith$elm_ui$Element$html(
					A4(
						$larribas$elm_multi_input$MultiInput$view,
						{
							hf: $author$project$Form$matches('^[a-z0-9]+(?:-[a-z0-9]+)*$'),
							bK: 'tags',
							ib: $author$project$Main$InputSettingsTags
						},
						_List_Nil,
						model.aD,
						model.bl))),
				$mdgriffith$elm_ui$Element$text(
				'Popularity score: ' + $elm$core$String$fromInt(model.df)),
				A2(
				$mdgriffith$elm_ui$Element$Input$checkbox,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$padding(8)
					]),
				{
					gE: geoAuth,
					g3: $mdgriffith$elm_ui$Element$Input$defaultCheckbox,
					j: A2(
						$mdgriffith$elm_ui$Element$Input$labelRight,
						_List_fromArray(
							[$mdgriffith$elm_ui$Element$centerY, $mdgriffith$elm_ui$Element$alignLeft]),
						$mdgriffith$elm_ui$Element$text('authorisation to automaticaly get your geolocation')),
					hr: $author$project$Main$InputSettingsGeoAuth
				}),
				geoAuth ? $mdgriffith$elm_ui$Element$none : A2(
				$mdgriffith$elm_ui$Element$Input$text,
				_List_fromArray(
					[
						$author$project$Main$onEnter($author$project$Main$SubmitSettings),
						$mdgriffith$elm_ui$Element$padding(8)
					]),
				{
					j: A2(
						$mdgriffith$elm_ui$Element$Input$labelLeft,
						_List_fromArray(
							[$mdgriffith$elm_ui$Element$centerY]),
						$mdgriffith$elm_ui$Element$text('latitude : ')),
					hr: $author$project$Main$InputSettingsGeoLatitude,
					bK: $elm$core$Maybe$Just(
						A2(
							$mdgriffith$elm_ui$Element$Input$placeholder,
							_List_Nil,
							$mdgriffith$elm_ui$Element$text('floating point number'))),
					ep: $elm$core$String$fromFloat(latitude)
				}),
				geoAuth ? $mdgriffith$elm_ui$Element$none : A2(
				$mdgriffith$elm_ui$Element$Input$text,
				_List_fromArray(
					[
						$author$project$Main$onEnter($author$project$Main$SubmitSettings),
						$mdgriffith$elm_ui$Element$padding(8)
					]),
				{
					j: A2(
						$mdgriffith$elm_ui$Element$Input$labelLeft,
						_List_fromArray(
							[$mdgriffith$elm_ui$Element$centerY]),
						$mdgriffith$elm_ui$Element$text('longitude : ')),
					hr: $author$project$Main$InputSettingsGeoLongitude,
					bK: $elm$core$Maybe$Just(
						A2(
							$mdgriffith$elm_ui$Element$Input$placeholder,
							_List_Nil,
							$mdgriffith$elm_ui$Element$text('floating point number'))),
					ep: $elm$core$String$fromFloat(longitude)
				}),
				A2(
				$mdgriffith$elm_ui$Element$Input$button,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$padding(0),
						$mdgriffith$elm_ui$Element$centerX
					]),
				{
					j: $mdgriffith$elm_ui$Element$text('update core settings'),
					aw: $elm$core$Maybe$Just($author$project$Main$SubmitSettings)
				})
			]));
};
var $author$project$Main$InputSigninPassword = function (a) {
	return {$: 7, a: a};
};
var $author$project$Main$InputSigninPseudo = function (a) {
	return {$: 6, a: a};
};
var $author$project$Main$SubmitSignin = {$: 8};
var $mdgriffith$elm_ui$Element$Input$currentPassword = F2(
	function (attrs, pass) {
		return A3(
			$mdgriffith$elm_ui$Element$Input$textHelper,
			{
				M: $elm$core$Maybe$Just('current-password'),
				S: false,
				A: $mdgriffith$elm_ui$Element$Input$TextInputNode(
					pass.bm ? 'text' : 'password')
			},
			attrs,
			{j: pass.j, hr: pass.hr, bK: pass.bK, ep: pass.ep});
	});
var $author$project$Main$signinView = function (model) {
	return A2(
		$mdgriffith$elm_ui$Element$column,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$spacing(32),
				$mdgriffith$elm_ui$Element$centerX,
				$mdgriffith$elm_ui$Element$centerY
			]),
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Element$Input$username,
				_List_fromArray(
					[
						$author$project$Main$onEnter($author$project$Main$SubmitSignin),
						$mdgriffith$elm_ui$Element$padding(8)
					]),
				{
					j: A2(
						$mdgriffith$elm_ui$Element$Input$labelLeft,
						_List_fromArray(
							[$mdgriffith$elm_ui$Element$centerY]),
						$mdgriffith$elm_ui$Element$text('pseudo : ')),
					hr: $author$project$Main$InputSigninPseudo,
					bK: $elm$core$Maybe$Just(
						A2(
							$mdgriffith$elm_ui$Element$Input$placeholder,
							_List_Nil,
							$mdgriffith$elm_ui$Element$text('pseudo'))),
					ep: model.aF
				}),
				A2(
				$mdgriffith$elm_ui$Element$Input$currentPassword,
				_List_fromArray(
					[
						$author$project$Main$onEnter($author$project$Main$SubmitSignin),
						$mdgriffith$elm_ui$Element$padding(8)
					]),
				{
					j: A2(
						$mdgriffith$elm_ui$Element$Input$labelLeft,
						_List_fromArray(
							[$mdgriffith$elm_ui$Element$centerY]),
						$mdgriffith$elm_ui$Element$text('password : ')),
					hr: $author$project$Main$InputSigninPassword,
					bK: $elm$core$Maybe$Just(
						A2(
							$mdgriffith$elm_ui$Element$Input$placeholder,
							_List_Nil,
							$mdgriffith$elm_ui$Element$text('password'))),
					bm: false,
					ep: model.aE
				}),
				A2(
				$mdgriffith$elm_ui$Element$Input$button,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$padding(0),
						$mdgriffith$elm_ui$Element$centerX
					]),
				{
					j: $mdgriffith$elm_ui$Element$text('Signin'),
					aw: $elm$core$Maybe$Just($author$project$Main$SubmitSignin)
				}),
				A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$centerX,
						$mdgriffith$elm_ui$Element$centerY,
						$mdgriffith$elm_ui$Element$paddingEach(
						{an: 2, au: 32, aB: 32, aM: 32})
					]),
				$mdgriffith$elm_ui$Element$html(
					A2(
						$elm$html$Html$a,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$href('/retreive')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('You forgot yout password?')
							])))),
				A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$centerX,
						$mdgriffith$elm_ui$Element$centerY,
						$mdgriffith$elm_ui$Element$paddingEach(
						{an: 32, au: 32, aB: 32, aM: 2})
					]),
				$mdgriffith$elm_ui$Element$html(
					A2(
						$elm$html$Html$a,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$href('/signup')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('You don\'t have any account?')
							]))))
			]));
};
var $author$project$Main$InputSignupConfirm = function (a) {
	return {$: 15, a: a};
};
var $author$project$Main$InputSignupEmail = function (a) {
	return {$: 13, a: a};
};
var $author$project$Main$InputSignupFirstname = function (a) {
	return {$: 12, a: a};
};
var $author$project$Main$InputSignupLastname = function (a) {
	return {$: 11, a: a};
};
var $author$project$Main$InputSignupPassword = function (a) {
	return {$: 14, a: a};
};
var $author$project$Main$InputSignupPseudo = function (a) {
	return {$: 10, a: a};
};
var $author$project$Main$SubmitSignup = {$: 16};
var $mdgriffith$elm_ui$Element$Input$newPassword = F2(
	function (attrs, pass) {
		return A3(
			$mdgriffith$elm_ui$Element$Input$textHelper,
			{
				M: $elm$core$Maybe$Just('new-password'),
				S: false,
				A: $mdgriffith$elm_ui$Element$Input$TextInputNode(
					pass.bm ? 'text' : 'password')
			},
			attrs,
			{j: pass.j, hr: pass.hr, bK: pass.bK, ep: pass.ep});
	});
var $author$project$Main$signupView = function (model) {
	return A2(
		$mdgriffith$elm_ui$Element$column,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$spacing(32),
				$mdgriffith$elm_ui$Element$centerX,
				$mdgriffith$elm_ui$Element$centerY
			]),
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Element$Input$username,
				_List_fromArray(
					[
						$author$project$Main$onEnter($author$project$Main$SubmitSignup),
						$mdgriffith$elm_ui$Element$padding(8)
					]),
				{
					j: A2(
						$mdgriffith$elm_ui$Element$Input$labelLeft,
						_List_fromArray(
							[$mdgriffith$elm_ui$Element$centerY]),
						$mdgriffith$elm_ui$Element$text('pseudo : ')),
					hr: $author$project$Main$InputSignupPseudo,
					bK: $elm$core$Maybe$Just(
						A2(
							$mdgriffith$elm_ui$Element$Input$placeholder,
							_List_Nil,
							$mdgriffith$elm_ui$Element$text('pseudo'))),
					ep: model.aL
				}),
				A2(
				$mdgriffith$elm_ui$Element$Input$text,
				_List_fromArray(
					[
						$author$project$Main$onEnter($author$project$Main$SubmitSignup),
						$mdgriffith$elm_ui$Element$padding(8)
					]),
				{
					j: A2(
						$mdgriffith$elm_ui$Element$Input$labelLeft,
						_List_fromArray(
							[$mdgriffith$elm_ui$Element$centerY]),
						$mdgriffith$elm_ui$Element$text('lastname : ')),
					hr: $author$project$Main$InputSignupLastname,
					bK: $elm$core$Maybe$Just(
						A2(
							$mdgriffith$elm_ui$Element$Input$placeholder,
							_List_Nil,
							$mdgriffith$elm_ui$Element$text('lastname'))),
					ep: model.aJ
				}),
				A2(
				$mdgriffith$elm_ui$Element$Input$text,
				_List_fromArray(
					[
						$author$project$Main$onEnter($author$project$Main$SubmitSignup),
						$mdgriffith$elm_ui$Element$padding(8)
					]),
				{
					j: A2(
						$mdgriffith$elm_ui$Element$Input$labelLeft,
						_List_fromArray(
							[$mdgriffith$elm_ui$Element$centerY]),
						$mdgriffith$elm_ui$Element$text('firstname : ')),
					hr: $author$project$Main$InputSignupFirstname,
					bK: $elm$core$Maybe$Just(
						A2(
							$mdgriffith$elm_ui$Element$Input$placeholder,
							_List_Nil,
							$mdgriffith$elm_ui$Element$text('firstname'))),
					ep: model.aI
				}),
				A2(
				$mdgriffith$elm_ui$Element$Input$email,
				_List_fromArray(
					[
						$author$project$Main$onEnter($author$project$Main$SubmitSignup),
						$mdgriffith$elm_ui$Element$padding(8)
					]),
				{
					j: A2(
						$mdgriffith$elm_ui$Element$Input$labelLeft,
						_List_fromArray(
							[$mdgriffith$elm_ui$Element$centerY]),
						$mdgriffith$elm_ui$Element$text('email : ')),
					hr: $author$project$Main$InputSignupEmail,
					bK: $elm$core$Maybe$Just(
						A2(
							$mdgriffith$elm_ui$Element$Input$placeholder,
							_List_Nil,
							$mdgriffith$elm_ui$Element$text('email'))),
					ep: model.aH
				}),
				A2(
				$mdgriffith$elm_ui$Element$Input$newPassword,
				_List_fromArray(
					[
						$author$project$Main$onEnter($author$project$Main$SubmitSignup),
						$mdgriffith$elm_ui$Element$padding(8)
					]),
				{
					j: A2(
						$mdgriffith$elm_ui$Element$Input$labelLeft,
						_List_fromArray(
							[$mdgriffith$elm_ui$Element$centerY]),
						$mdgriffith$elm_ui$Element$text('password : ')),
					hr: $author$project$Main$InputSignupPassword,
					bK: $elm$core$Maybe$Just(
						A2(
							$mdgriffith$elm_ui$Element$Input$placeholder,
							_List_Nil,
							$mdgriffith$elm_ui$Element$text('password'))),
					bm: false,
					ep: model.aK
				}),
				A2(
				$mdgriffith$elm_ui$Element$Input$newPassword,
				_List_fromArray(
					[
						$author$project$Main$onEnter($author$project$Main$SubmitSignup),
						$mdgriffith$elm_ui$Element$padding(8)
					]),
				{
					j: A2(
						$mdgriffith$elm_ui$Element$Input$labelLeft,
						_List_fromArray(
							[$mdgriffith$elm_ui$Element$centerY]),
						$mdgriffith$elm_ui$Element$text('confirm : ')),
					hr: $author$project$Main$InputSignupConfirm,
					bK: $elm$core$Maybe$Just(
						A2(
							$mdgriffith$elm_ui$Element$Input$placeholder,
							_List_Nil,
							$mdgriffith$elm_ui$Element$text('confirm'))),
					bm: false,
					ep: model.aG
				}),
				A2(
				$mdgriffith$elm_ui$Element$Input$button,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$padding(0),
						$mdgriffith$elm_ui$Element$centerX
					]),
				{
					j: $mdgriffith$elm_ui$Element$text('Signup'),
					aw: $elm$core$Maybe$Just($author$project$Main$SubmitSignup)
				}),
				A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$padding(32),
						$mdgriffith$elm_ui$Element$centerX
					]),
				$mdgriffith$elm_ui$Element$html(
					A2(
						$elm$html$Html$a,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$href('/signin')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('You alredy have an account?')
							]))))
			]));
};
var $mdgriffith$elm_ui$Element$spaceEvenly = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$spacing, $mdgriffith$elm_ui$Internal$Style$classes.hO);
var $elm$html$Html$node = $elm$virtual_dom$VirtualDom$node;
var $elm$html$Html$Attributes$rel = _VirtualDom_attribute('rel');
var $rundis$elm_bootstrap$Bootstrap$CDN$stylesheet = A3(
	$elm$html$Html$node,
	'link',
	_List_fromArray(
		[
			$elm$html$Html$Attributes$rel('stylesheet'),
			$elm$html$Html$Attributes$href('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css')
		]),
	_List_Nil);
var $author$project$Alert$view = function (model) {
	var _v0 = model.aa;
	if (!_v0.$) {
		var myAlert = _v0.a;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'background-color', myAlert.dE),
					A2($elm$html$Html$Attributes$style, 'color', 'White')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(myAlert.d_)
				]));
	} else {
		return A2($elm$html$Html$div, _List_Nil, _List_Nil);
	}
};
var $author$project$Form$Submit = {$: 1};
var $elm$html$Html$form = _VirtualDom_node('form');
var $elm$core$Elm$JsArray$foldl = _JsArray_foldl;
var $elm$core$Elm$JsArray$indexedMap = _JsArray_indexedMap;
var $elm$core$Array$indexedMap = F2(
	function (func, _v0) {
		var len = _v0.a;
		var tree = _v0.c;
		var tail = _v0.d;
		var initialBuilder = {
			q: _List_Nil,
			m: 0,
			o: A3(
				$elm$core$Elm$JsArray$indexedMap,
				func,
				$elm$core$Array$tailIndex(len),
				tail)
		};
		var helper = F2(
			function (node, builder) {
				if (!node.$) {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldl, helper, builder, subTree);
				} else {
					var leaf = node.a;
					var offset = builder.m * $elm$core$Array$branchFactor;
					var mappedLeaf = $elm$core$Array$Leaf(
						A3($elm$core$Elm$JsArray$indexedMap, func, offset, leaf));
					return {
						q: A2($elm$core$List$cons, mappedLeaf, builder.q),
						m: builder.m + 1,
						o: builder.o
					};
				}
			});
		return A2(
			$elm$core$Array$builderToArray,
			true,
			A3($elm$core$Elm$JsArray$foldl, helper, initialBuilder, tree));
	});
var $elm$html$Html$Events$alwaysPreventDefault = function (msg) {
	return _Utils_Tuple2(msg, true);
};
var $elm$html$Html$Events$onSubmit = function (msg) {
	return A2(
		$elm$html$Html$Events$preventDefaultOn,
		'submit',
		A2(
			$elm$json$Json$Decode$map,
			$elm$html$Html$Events$alwaysPreventDefault,
			$elm$json$Json$Decode$succeed(msg)));
};
var $elm$html$Html$button = _VirtualDom_node('button');
var $author$project$Form$submitButton = function (submitionType) {
	if (submitionType.$ === 1) {
		return A2($elm$html$Html$div, _List_Nil, _List_Nil);
	} else {
		var buttonText = submitionType.a;
		return A2(
			$elm$html$Html$button,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$type_('submit')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(buttonText)
				]));
	}
};
var $author$project$Form$CheckboxMsg = function (a) {
	return {$: 5, a: a};
};
var $author$project$Form$NumberMsg = function (a) {
	return {$: 6, a: a};
};
var $author$project$Form$PasswordMsg = function (a) {
	return {$: 1, a: a};
};
var $author$project$Form$TextMsg = function (a) {
	return {$: 0, a: a};
};
var $elm$html$Html$Attributes$checked = $elm$html$Html$Attributes$boolProperty('checked');
var $elm$html$Html$Attributes$for = $elm$html$Html$Attributes$stringProperty('htmlFor');
var $elm$html$Html$input = _VirtualDom_node('input');
var $elm$html$Html$label = _VirtualDom_node('label');
var $elm$html$Html$Events$targetChecked = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'checked']),
	$elm$json$Json$Decode$bool);
var $elm$html$Html$Events$onCheck = function (tagger) {
	return A2(
		$elm$html$Html$Events$on,
		'change',
		A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetChecked));
};
var $carwow$elm_slider$DoubleSlider$High = 0;
var $carwow$elm_slider$DoubleSlider$Low = 1;
var $carwow$elm_slider$DoubleSlider$formatCurrentRange = function (_v0) {
	var slider = _v0;
	return slider.p(
		{g0: slider.g.c, hj: slider.i.c, fh: slider.e.fh, fi: slider.e.fi});
};
var $carwow$elm_slider$DoubleSlider$convertValue = F3(
	function (_v0, thumb, value) {
		var slider = _v0;
		if (thumb === 1) {
			return A2($elm$core$Basics$min, value, slider.g.c - (slider.e.fQ * slider.n));
		} else {
			return A2($elm$core$Basics$max, value, slider.i.c + (slider.e.fQ * slider.n));
		}
	});
var $carwow$elm_slider$DoubleSlider$inputDecoder = F2(
	function (_v0, thumb) {
		var slider = _v0;
		return A2(
			$elm$json$Json$Decode$map,
			function (value) {
				return A3(
					$carwow$elm_slider$DoubleSlider$convertValue,
					slider,
					thumb,
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$String$toFloat(value)));
			},
			$elm$html$Html$Events$targetValue);
	});
var $debois$elm_dom$DOM$offsetHeight = A2($elm$json$Json$Decode$field, 'offsetHeight', $elm$json$Json$Decode$float);
var $debois$elm_dom$DOM$offsetWidth = A2($elm$json$Json$Decode$field, 'offsetWidth', $elm$json$Json$Decode$float);
var $elm$json$Json$Decode$map4 = _Json_map4;
var $debois$elm_dom$DOM$offsetLeft = A2($elm$json$Json$Decode$field, 'offsetLeft', $elm$json$Json$Decode$float);
var $debois$elm_dom$DOM$offsetParent = F2(
	function (x, decoder) {
		return $elm$json$Json$Decode$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$json$Json$Decode$field,
					'offsetParent',
					$elm$json$Json$Decode$null(x)),
					A2($elm$json$Json$Decode$field, 'offsetParent', decoder)
				]));
	});
var $debois$elm_dom$DOM$offsetTop = A2($elm$json$Json$Decode$field, 'offsetTop', $elm$json$Json$Decode$float);
var $debois$elm_dom$DOM$scrollLeft = A2($elm$json$Json$Decode$field, 'scrollLeft', $elm$json$Json$Decode$float);
var $debois$elm_dom$DOM$scrollTop = A2($elm$json$Json$Decode$field, 'scrollTop', $elm$json$Json$Decode$float);
var $debois$elm_dom$DOM$position = F2(
	function (x, y) {
		return A2(
			$elm$json$Json$Decode$andThen,
			function (_v0) {
				var x_ = _v0.a;
				var y_ = _v0.b;
				return A2(
					$debois$elm_dom$DOM$offsetParent,
					_Utils_Tuple2(x_, y_),
					A2($debois$elm_dom$DOM$position, x_, y_));
			},
			A5(
				$elm$json$Json$Decode$map4,
				F4(
					function (scrollLeftP, scrollTopP, offsetLeftP, offsetTopP) {
						return _Utils_Tuple2((x + offsetLeftP) - scrollLeftP, (y + offsetTopP) - scrollTopP);
					}),
				$debois$elm_dom$DOM$scrollLeft,
				$debois$elm_dom$DOM$scrollTop,
				$debois$elm_dom$DOM$offsetLeft,
				$debois$elm_dom$DOM$offsetTop));
	});
var $debois$elm_dom$DOM$boundingClientRect = A4(
	$elm$json$Json$Decode$map3,
	F3(
		function (_v0, width, height) {
			var x = _v0.a;
			var y = _v0.b;
			return {e2: height, au: x, aM: y, du: width};
		}),
	A2($debois$elm_dom$DOM$position, 0, 0),
	$debois$elm_dom$DOM$offsetWidth,
	$debois$elm_dom$DOM$offsetHeight);
var $carwow$elm_slider$DoubleSlider$changeMsg = F2(
	function (_v0, thumb) {
		var slider = _v0;
		if (thumb === 1) {
			return slider.i.ce;
		} else {
			return slider.g.ce;
		}
	});
var $carwow$elm_slider$DoubleSlider$snapValue = F2(
	function (value, step) {
		return (value / step) * step;
	});
var $carwow$elm_slider$DoubleSlider$onOutsideRangeClick = function (_v0) {
	var slider = _v0;
	var commonAttributes = slider.e;
	var lowValueAttributes = slider.i;
	var highValueAttributes = slider.g;
	var valueTypeDecoder = A3(
		$elm$json$Json$Decode$map2,
		F2(
			function (rectangle, mouseX) {
				var newValue = A2($carwow$elm_slider$DoubleSlider$snapValue, (commonAttributes.fh / rectangle.du) * mouseX, commonAttributes.fQ);
				var valueType = (_Utils_cmp(newValue, lowValueAttributes.c) < 0) ? 1 : 0;
				return valueType;
			}),
		A2(
			$elm$json$Json$Decode$at,
			_List_fromArray(
				['target']),
			$debois$elm_dom$DOM$boundingClientRect),
		A2(
			$elm$json$Json$Decode$at,
			_List_fromArray(
				['offsetX']),
			$elm$json$Json$Decode$float));
	var valueDecoder = A3(
		$elm$json$Json$Decode$map2,
		F2(
			function (rectangle, mouseX) {
				var newValue = (((commonAttributes.fh - commonAttributes.fi) / rectangle.du) * mouseX) + commonAttributes.fi;
				return newValue;
			}),
		A2(
			$elm$json$Json$Decode$at,
			_List_fromArray(
				['target']),
			$debois$elm_dom$DOM$boundingClientRect),
		A2(
			$elm$json$Json$Decode$at,
			_List_fromArray(
				['offsetX']),
			$elm$json$Json$Decode$float));
	return A3(
		$elm$json$Json$Decode$map2,
		$carwow$elm_slider$DoubleSlider$changeMsg(slider),
		valueTypeDecoder,
		valueDecoder);
};
var $carwow$elm_slider$DoubleSlider$onInsideRangeClick = function (_v0) {
	var slider = _v0;
	var commonAttributes = slider.e;
	var lowValueAttributes = slider.i;
	var highValueAttributes = slider.g;
	var valueTypeDecoder = A3(
		$elm$json$Json$Decode$map2,
		F2(
			function (rectangle, mouseX) {
				var centerThreshold = rectangle.du / 2;
				var valueType = (_Utils_cmp(mouseX, centerThreshold) < 0) ? 1 : 0;
				return valueType;
			}),
		A2(
			$elm$json$Json$Decode$at,
			_List_fromArray(
				['target']),
			$debois$elm_dom$DOM$boundingClientRect),
		A2(
			$elm$json$Json$Decode$at,
			_List_fromArray(
				['offsetX']),
			$elm$json$Json$Decode$float));
	var valueDecoder = A3(
		$elm$json$Json$Decode$map2,
		F2(
			function (rectangle, mouseX) {
				var newValue = A2($carwow$elm_slider$DoubleSlider$snapValue, (((highValueAttributes.c - lowValueAttributes.c) / rectangle.du) * mouseX) + lowValueAttributes.c, commonAttributes.fQ);
				return newValue;
			}),
		A2(
			$elm$json$Json$Decode$at,
			_List_fromArray(
				['target']),
			$debois$elm_dom$DOM$boundingClientRect),
		A2(
			$elm$json$Json$Decode$at,
			_List_fromArray(
				['offsetX']),
			$elm$json$Json$Decode$float));
	return A3(
		$elm$json$Json$Decode$map2,
		$carwow$elm_slider$DoubleSlider$changeMsg(slider),
		valueTypeDecoder,
		valueDecoder);
};
var $carwow$elm_slider$DoubleSlider$progressView = function (_v0) {
	var slider = _v0;
	var commonAttributes = slider.e;
	var lowValueAttributes = slider.i;
	var highValueAttributes = slider.g;
	var progressRatio = 100 / (commonAttributes.fh - commonAttributes.fi);
	var lowValue = lowValueAttributes.c;
	var progressLow = $elm$core$String$fromFloat((lowValue - commonAttributes.fi) * progressRatio) + '%';
	var highValue = highValueAttributes.c;
	var progressHigh = $elm$core$String$fromFloat((commonAttributes.fh - highValue) * progressRatio) + '%';
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('input-range__progress'),
				A2($elm$html$Html$Attributes$style, 'left', progressLow),
				A2($elm$html$Html$Attributes$style, 'right', progressHigh),
				A2(
				$elm$html$Html$Events$on,
				'click',
				$carwow$elm_slider$DoubleSlider$onInsideRangeClick(slider))
			]),
		_List_Nil);
};
var $elm$html$Html$Attributes$max = $elm$html$Html$Attributes$stringProperty('max');
var $elm$html$Html$Attributes$min = $elm$html$Html$Attributes$stringProperty('min');
var $carwow$elm_slider$RangeSlider$onChange = F2(
	function (msg, input) {
		return A2(
			$elm$html$Html$Events$on,
			'change',
			A2($elm$json$Json$Decode$map, msg, input));
	});
var $elm$html$Html$Attributes$step = function (n) {
	return A2($elm$html$Html$Attributes$stringProperty, 'step', n);
};
var $carwow$elm_slider$RangeSlider$sliderInputView = F3(
	function (commonAttributes, valueAttributes, input) {
		return A2(
			$elm$html$Html$input,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$type_('range'),
					$elm$html$Html$Attributes$min(
					$elm$core$String$fromFloat(commonAttributes.fi)),
					$elm$html$Html$Attributes$max(
					$elm$core$String$fromFloat(commonAttributes.fh)),
					$elm$html$Html$Attributes$step(
					$elm$core$String$fromFloat(commonAttributes.fQ)),
					$elm$html$Html$Attributes$value(
					$elm$core$String$fromFloat(valueAttributes.c)),
					$elm$html$Html$Attributes$class('input-range'),
					A2($carwow$elm_slider$RangeSlider$onChange, valueAttributes.ce, input)
				]),
			_List_Nil);
	});
var $carwow$elm_slider$RangeSlider$onClick = function (decoder) {
	return A2($elm$html$Html$Events$on, 'click', decoder);
};
var $carwow$elm_slider$RangeSlider$sliderTrackView = function (decoder) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('input-range__track'),
				$carwow$elm_slider$RangeSlider$onClick(decoder)
			]),
		_List_Nil);
};
var $carwow$elm_slider$DoubleSlider$view = function (_v0) {
	var slider = _v0;
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('input-range-container')
					]),
				_List_fromArray(
					[
						A3(
						$carwow$elm_slider$RangeSlider$sliderInputView,
						slider.e,
						slider.i,
						A2($carwow$elm_slider$DoubleSlider$inputDecoder, slider, 1)),
						A3(
						$carwow$elm_slider$RangeSlider$sliderInputView,
						slider.e,
						slider.g,
						A2($carwow$elm_slider$DoubleSlider$inputDecoder, slider, 0)),
						$carwow$elm_slider$RangeSlider$sliderTrackView(
						$carwow$elm_slider$DoubleSlider$onOutsideRangeClick(slider)),
						$carwow$elm_slider$DoubleSlider$progressView(slider)
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('input-range-labels-container')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('input-range-label')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(
								slider.e.d1(slider.e.fi))
							])),
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('input-range-label input-range-label--current-value')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(
								$carwow$elm_slider$DoubleSlider$formatCurrentRange(slider))
							])),
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('input-range-label')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(
								slider.e.dZ(slider.e.fh))
							]))
					]))
			]));
};
var $carwow$elm_slider$SingleSlider$inputDecoder = A2(
	$elm$json$Json$Decode$map,
	function (value) {
		return A2(
			$elm$core$Maybe$withDefault,
			0,
			$elm$core$String$toFloat(value));
	},
	$elm$html$Html$Events$targetValue);
var $carwow$elm_slider$SingleSlider$closestStep = F2(
	function (value, step) {
		var roundedValue = $elm$core$Basics$round(value);
		var roundedStep = ($elm$core$Basics$round(step) > 0) ? $elm$core$Basics$round(step) : 1;
		var remainder = roundedValue % roundedStep;
		return (_Utils_cmp(remainder, (roundedStep / 2) | 0) > 0) ? ((roundedValue - remainder) + roundedStep) : (roundedValue - remainder);
	});
var $carwow$elm_slider$SingleSlider$onOutsideRangeClick = function (_v0) {
	var slider = _v0;
	var commonAttributes = slider.e;
	var valueAttributes = slider.r;
	var valueDecoder = A3(
		$elm$json$Json$Decode$map2,
		F2(
			function (rectangle, mouseX) {
				var clickedValue = (((commonAttributes.fh - commonAttributes.fi) / rectangle.du) * mouseX) + commonAttributes.fi;
				var newValue = A2($carwow$elm_slider$SingleSlider$closestStep, clickedValue, commonAttributes.fQ);
				return newValue;
			}),
		A2(
			$elm$json$Json$Decode$at,
			_List_fromArray(
				['target']),
			$debois$elm_dom$DOM$boundingClientRect),
		A2(
			$elm$json$Json$Decode$at,
			_List_fromArray(
				['offsetX']),
			$elm$json$Json$Decode$float));
	return A2($elm$json$Json$Decode$map, slider.r.ce, valueDecoder);
};
var $carwow$elm_slider$SingleSlider$onInsideRangeClick = function (_v0) {
	var slider = _v0;
	var commonAttributes = slider.e;
	var valueAttributes = slider.r;
	var valueDecoder = A3(
		$elm$json$Json$Decode$map2,
		F2(
			function (rectangle, mouseX) {
				var adjustedValue = A3($elm$core$Basics$clamp, commonAttributes.fi, commonAttributes.fh, valueAttributes.c);
				var newValue = $elm$core$Basics$round(adjustedValue - ((mouseX / rectangle.du) * (adjustedValue - commonAttributes.fi)));
				var adjustedNewValue = A3($elm$core$Basics$clamp, commonAttributes.fi, commonAttributes.fh, newValue);
				return adjustedNewValue;
			}),
		A2(
			$elm$json$Json$Decode$at,
			_List_fromArray(
				['target']),
			$debois$elm_dom$DOM$boundingClientRect),
		A2(
			$elm$json$Json$Decode$at,
			_List_fromArray(
				['offsetX']),
			$elm$json$Json$Decode$float));
	return A2($elm$json$Json$Decode$map, valueAttributes.ce, valueDecoder);
};
var $carwow$elm_slider$SingleSlider$progressView = function (_v0) {
	var slider = _v0;
	var commonAttributes = slider.e;
	var valueAttributes = slider.r;
	var value = A3($elm$core$Basics$clamp, commonAttributes.fi, commonAttributes.fh, valueAttributes.c);
	var progressRatio = 100 / (commonAttributes.fh - commonAttributes.fi);
	var progressAttributes = _List_fromArray(
		[
			$elm$html$Html$Attributes$class('input-range__progress'),
			A2(
			$elm$html$Html$Attributes$style,
			'left',
			$elm$core$String$fromFloat(0.0) + '%'),
			A2(
			$elm$html$Html$Attributes$style,
			'right',
			$elm$core$String$fromFloat(progressRatio) + '%'),
			$carwow$elm_slider$RangeSlider$onClick(
			$carwow$elm_slider$SingleSlider$onInsideRangeClick(slider))
		]);
	var progress = commonAttributes.fh - (value * progressRatio);
	return A2($elm$html$Html$div, progressAttributes, _List_Nil);
};
var $carwow$elm_slider$SingleSlider$view = function (_v0) {
	var slider = _v0;
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('input-range-container')
					]),
				_List_fromArray(
					[
						A3($carwow$elm_slider$RangeSlider$sliderInputView, slider.e, slider.r, $carwow$elm_slider$SingleSlider$inputDecoder),
						$carwow$elm_slider$RangeSlider$sliderTrackView(
						$carwow$elm_slider$SingleSlider$onOutsideRangeClick(slider)),
						$carwow$elm_slider$SingleSlider$progressView(slider)
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('input-range-labels-container')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('input-range-label')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(
								slider.e.d1(slider.e.fi))
							])),
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('input-range-label input-range-label--current-value')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(
								A2(slider.r.cr, slider.r.c, slider.e.fh))
							])),
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('input-range-label')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(
								slider.e.dZ(slider.e.fh))
							]))
					]))
			]));
};
var $author$project$Form$view_field = F2(
	function (id, myField) {
		switch (myField.$) {
			case 0:
				var model = myField.a;
				return A2(
					$elm$html$Html$input,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$type_('text'),
							$elm$html$Html$Events$onInput(
							A2(
								$elm$core$Basics$composeL,
								$author$project$Form$Input(id),
								$author$project$Form$TextMsg)),
							$elm$html$Html$Attributes$value(model.c)
						]),
					_List_Nil);
			case 1:
				var model = myField.a;
				return A2(
					$elm$html$Html$input,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$type_('password'),
							$elm$html$Html$Events$onInput(
							A2(
								$elm$core$Basics$composeL,
								$author$project$Form$Input(id),
								$author$project$Form$PasswordMsg)),
							$elm$html$Html$Attributes$value(model.c)
						]),
					_List_Nil);
			case 2:
				var model = myField.a;
				return A2(
					$elm$html$Html$map,
					$author$project$Form$Input(id),
					$carwow$elm_slider$DoubleSlider$view(model.c));
			case 3:
				var model = myField.a;
				return A2(
					$elm$html$Html$map,
					$author$project$Form$Input(id),
					$carwow$elm_slider$SingleSlider$view(model.c));
			case 4:
				var model = myField.a;
				return A2(
					$elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$input,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$type_('checkbox'),
									$elm$html$Html$Attributes$id(model.j),
									$elm$html$Html$Events$onCheck(
									A2(
										$elm$core$Basics$composeL,
										$author$project$Form$Input(id),
										$author$project$Form$CheckboxMsg)),
									$elm$html$Html$Attributes$checked(model.c)
								]),
							_List_Nil),
							A2(
							$elm$html$Html$label,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$for(model.j)
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(model.ep)
								]))
						]));
			case 5:
				var model = myField.a;
				return A2(
					$elm$html$Html$input,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$type_('number'),
							$elm$html$Html$Events$onInput(
							A2(
								$elm$core$Basics$composeL,
								A2(
									$elm$core$Basics$composeL,
									A2(
										$elm$core$Basics$composeL,
										$author$project$Form$Input(id),
										$author$project$Form$NumberMsg),
									$elm$core$Maybe$withDefault(0)),
								$elm$core$String$toInt)),
							$elm$html$Html$Attributes$value(
							$elm$core$String$fromInt(model.c))
						]),
					_List_Nil);
			default:
				var label = myField.a.j;
				var items = myField.a.a2;
				var state = myField.a.bo;
				var placeholder = myField.a.bK;
				return A4(
					$larribas$elm_multi_input$MultiInput$view,
					{
						hf: $author$project$Form$matches('^[a-z0-9]+(?:-[a-z0-9]+)*$'),
						bK: placeholder,
						ib: A2(
							$elm$core$Basics$composeL,
							$author$project$Form$Input(id),
							$author$project$Form$MultiInputMsg)
					},
					_List_Nil,
					items,
					state);
		}
	});
var $author$project$Form$view = function (myForm) {
	return A2(
		$elm$html$Html$form,
		_List_fromArray(
			[
				$elm$html$Html$Events$onSubmit($author$project$Form$Submit)
			]),
		A2(
			$elm$core$List$append,
			$elm$core$Array$toList(
				A2($elm$core$Array$indexedMap, $author$project$Form$view_field, myForm.P)),
			$elm$core$List$singleton(
				$author$project$Form$submitButton(myForm.dh))));
};
var $author$project$Main$AccessDiscution = function (a) {
	return {$: 65, a: a};
};
var $elm$html$Html$img = _VirtualDom_node('img');
var $elm$html$Html$Attributes$src = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'src',
		_VirtualDom_noJavaScriptOrHtmlUri(url));
};
var $author$project$Main$viewChat = function (chat) {
	return A2(
		$elm$html$Html$li,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('contact'),
				chat.aO ? A2($elm$html$Html$Attributes$style, 'background-color', '#ae9b61') : A2($elm$html$Html$Attributes$style, 'background-color', '#2C3E50'),
				$elm$html$Html$Events$onClick(
				$author$project$Main$AccessDiscution(chat.e8))
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('wrap')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								_Utils_eq(chat.ag, $author$project$BasicValues$Now) ? $elm$html$Html$Attributes$class('contact-status online') : $elm$html$Html$Attributes$class('contact-status')
							]),
						_List_Nil),
						A2(
						$elm$html$Html$img,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$src(chat.fs)
							]),
						_List_Nil),
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('meta')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$p,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('name')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(chat.fB)
									])),
								A2(
								$elm$html$Html$p,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('preview')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(chat.dY)
									]))
							]))
					]))
			]));
};
var $author$project$Main$viewChats = function (chatList) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$id('sidepanel')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$id('contacts')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$ul,
						_List_Nil,
						A2($elm$core$List$map, $author$project$Main$viewChat, chatList))
					]))
			]));
};
var $author$project$Main$viewMessage = F3(
	function (myProfilePict, hisProfilePict, message) {
		return A2(
			$elm$html$Html$li,
			_List_fromArray(
				[
					message.de ? $elm$html$Html$Attributes$class('sent') : $elm$html$Html$Attributes$class('replies')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$img,
					_List_fromArray(
						[
							message.de ? $elm$html$Html$Attributes$src(hisProfilePict) : $elm$html$Html$Attributes$src(myProfilePict)
						]),
					_List_Nil),
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(message.aW)
						]))
				]));
	});
var $author$project$Main$viewDiscution = F2(
	function (myProfilePict, discution) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('content')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('contact-profile')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$src(discution.fs)
								]),
							_List_Nil),
							A2(
							$elm$html$Html$p,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(discution.fB)
								]))
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('messages')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$ul,
							_List_Nil,
							$elm$core$List$reverse(
								A2(
									$elm$core$List$map,
									A2($author$project$Main$viewMessage, myProfilePict, discution.fs),
									discution.d$)))
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('message-input')
						]),
					_List_Nil),
					A2(
					$elm$html$Html$map,
					$author$project$Main$SendMessageForm,
					$author$project$Form$view(discution.aC))
				]));
	});
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$applyModifier = F2(
	function (option, options) {
		switch (option.$) {
			case 0:
				var align = option.a;
				return _Utils_update(
					options,
					{
						ab: $elm$core$Maybe$Just(align)
					});
			case 1:
				var coloring = option.a;
				return _Utils_update(
					options,
					{
						ac: $elm$core$Maybe$Just(coloring)
					});
			case 2:
				var coloring = option.a;
				return _Utils_update(
					options,
					{
						ak: $elm$core$Maybe$Just(coloring)
					});
			default:
				var attrs = option.a;
				return _Utils_update(
					options,
					{
						am: _Utils_ap(options.am, attrs)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$defaultOptions = {ab: $elm$core$Maybe$Nothing, am: _List_Nil, ac: $elm$core$Maybe$Nothing, ak: $elm$core$Maybe$Nothing};
var $rundis$elm_bootstrap$Bootstrap$Internal$Role$toClass = F2(
	function (prefix, role) {
		return $elm$html$Html$Attributes$class(
			prefix + ('-' + function () {
				switch (role) {
					case 0:
						return 'primary';
					case 1:
						return 'secondary';
					case 2:
						return 'success';
					case 3:
						return 'info';
					case 4:
						return 'warning';
					case 5:
						return 'danger';
					case 6:
						return 'light';
					default:
						return 'dark';
				}
			}()));
	});
var $rundis$elm_bootstrap$Bootstrap$Internal$Text$textColorClass = function (color) {
	if (color.$ === 1) {
		return $elm$html$Html$Attributes$class('text-white');
	} else {
		var role = color.a;
		return A2($rundis$elm_bootstrap$Bootstrap$Internal$Role$toClass, 'text', role);
	}
};
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$cardAttributes = function (modifiers) {
	var options = A3($elm$core$List$foldl, $rundis$elm_bootstrap$Bootstrap$Card$Internal$applyModifier, $rundis$elm_bootstrap$Bootstrap$Card$Internal$defaultOptions, modifiers);
	return _Utils_ap(
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('card')
			]),
		_Utils_ap(
			function () {
				var _v0 = options.ac;
				if (!_v0.$) {
					if (!_v0.a.$) {
						var role = _v0.a.a;
						return _List_fromArray(
							[
								A2($rundis$elm_bootstrap$Bootstrap$Internal$Role$toClass, 'bg', role)
							]);
					} else {
						var role = _v0.a.a;
						return _List_fromArray(
							[
								A2($rundis$elm_bootstrap$Bootstrap$Internal$Role$toClass, 'border', role)
							]);
					}
				} else {
					return _List_Nil;
				}
			}(),
			_Utils_ap(
				function () {
					var _v1 = options.ak;
					if (!_v1.$) {
						var color = _v1.a;
						return _List_fromArray(
							[
								$rundis$elm_bootstrap$Bootstrap$Internal$Text$textColorClass(color)
							]);
					} else {
						return _List_Nil;
					}
				}(),
				_Utils_ap(
					function () {
						var _v2 = options.ab;
						if (!_v2.$) {
							var align = _v2.a;
							return _List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Internal$Text$textAlignClass(align)
								]);
						} else {
							return _List_Nil;
						}
					}(),
					options.am))));
};
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$renderBlocks = function (blocks) {
	return A2(
		$elm$core$List$map,
		function (block_) {
			if (!block_.$) {
				var e = block_.a;
				return e;
			} else {
				var e = block_.a;
				return e;
			}
		},
		blocks);
};
var $rundis$elm_bootstrap$Bootstrap$Card$view = function (_v0) {
	var conf = _v0;
	return A2(
		$elm$html$Html$div,
		$rundis$elm_bootstrap$Bootstrap$Card$Internal$cardAttributes(conf.fo),
		_Utils_ap(
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						A2(
						$elm$core$Maybe$map,
						function (_v1) {
							var e = _v1;
							return e;
						},
						conf.cB),
						A2(
						$elm$core$Maybe$map,
						function (_v2) {
							var e = _v2;
							return e;
						},
						conf.dU)
					])),
			_Utils_ap(
				$rundis$elm_bootstrap$Bootstrap$Card$Internal$renderBlocks(conf.dB),
				A2(
					$elm$core$List$filterMap,
					$elm$core$Basics$identity,
					_List_fromArray(
						[
							A2(
							$elm$core$Maybe$map,
							function (_v3) {
								var e = _v3;
								return e;
							},
							conf.dN),
							A2(
							$elm$core$Maybe$map,
							function (_v4) {
								var e = _v4;
								return e;
							},
							conf.dT)
						])))));
};
var $rundis$elm_bootstrap$Bootstrap$Card$columns = function (cards) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('card-columns')
			]),
		A2($elm$core$List$map, $rundis$elm_bootstrap$Bootstrap$Card$view, cards));
};
var $author$project$Main$FeedNav = function (a) {
	return {$: 53, a: a};
};
var $author$project$Main$viewFeedPageNav = function (lmodel) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		A2(
			$elm$core$List$map,
			function (pageNr) {
				return A2(
					$elm$html$Html$button,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick(
							$author$project$Main$FeedNav(pageNr - 1)),
							_Utils_eq(pageNr - 1, lmodel.cq) ? A2($elm$html$Html$Attributes$style, 'background-color', 'lightblue') : A2($elm$html$Html$Attributes$style, 'background-color', 'white')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							$elm$core$String$fromInt(pageNr))
						]));
			},
			A2($elm$core$List$range, 1, lmodel.eW)));
};
var $author$project$Main$NavToUser = function (a) {
	return {$: 4, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$Attrs = function (a) {
	return {$: 3, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Card$attrs = function (attrs_) {
	return $rundis$elm_bootstrap$Bootstrap$Card$Internal$Attrs(attrs_);
};
var $rundis$elm_bootstrap$Bootstrap$Card$Config = $elm$core$Basics$identity;
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$CardBlock = function (a) {
	return {$: 0, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$applyBlockModifier = F2(
	function (option, options) {
		switch (option.$) {
			case 0:
				var align = option.a;
				return _Utils_update(
					options,
					{
						ab: $elm$core$Maybe$Just(align)
					});
			case 1:
				var role = option.a;
				return _Utils_update(
					options,
					{
						ac: $elm$core$Maybe$Just(role)
					});
			case 2:
				var color = option.a;
				return _Utils_update(
					options,
					{
						ak: $elm$core$Maybe$Just(color)
					});
			default:
				var attrs = option.a;
				return _Utils_update(
					options,
					{
						am: _Utils_ap(options.am, attrs)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$defaultBlockOptions = {ab: $elm$core$Maybe$Nothing, am: _List_Nil, ac: $elm$core$Maybe$Nothing, ak: $elm$core$Maybe$Nothing};
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$blockAttributes = function (modifiers) {
	var options = A3($elm$core$List$foldl, $rundis$elm_bootstrap$Bootstrap$Card$Internal$applyBlockModifier, $rundis$elm_bootstrap$Bootstrap$Card$Internal$defaultBlockOptions, modifiers);
	return _Utils_ap(
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('card-body')
			]),
		_Utils_ap(
			function () {
				var _v0 = options.ab;
				if (!_v0.$) {
					var align = _v0.a;
					return _List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Internal$Text$textAlignClass(align)
						]);
				} else {
					return _List_Nil;
				}
			}(),
			_Utils_ap(
				function () {
					var _v1 = options.ac;
					if (!_v1.$) {
						var role = _v1.a;
						return _List_fromArray(
							[
								A2($rundis$elm_bootstrap$Bootstrap$Internal$Role$toClass, 'bg', role)
							]);
					} else {
						return _List_Nil;
					}
				}(),
				_Utils_ap(
					function () {
						var _v2 = options.ak;
						if (!_v2.$) {
							var color = _v2.a;
							return _List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Internal$Text$textColorClass(color)
								]);
						} else {
							return _List_Nil;
						}
					}(),
					options.am))));
};
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$block = F2(
	function (options, items) {
		return $rundis$elm_bootstrap$Bootstrap$Card$Internal$CardBlock(
			A2(
				$elm$html$Html$div,
				$rundis$elm_bootstrap$Bootstrap$Card$Internal$blockAttributes(options),
				A2(
					$elm$core$List$map,
					function (_v0) {
						var e = _v0;
						return e;
					},
					items)));
	});
var $rundis$elm_bootstrap$Bootstrap$Card$block = F3(
	function (options, items, _v0) {
		var conf = _v0;
		return _Utils_update(
			conf,
			{
				dB: _Utils_ap(
					conf.dB,
					_List_fromArray(
						[
							A2($rundis$elm_bootstrap$Bootstrap$Card$Internal$block, options, items)
						]))
			});
	});
var $rundis$elm_bootstrap$Bootstrap$Card$config = function (options) {
	return {dB: _List_Nil, dN: $elm$core$Maybe$Nothing, cB: $elm$core$Maybe$Nothing, dT: $elm$core$Maybe$Nothing, dU: $elm$core$Maybe$Nothing, fo: options};
};
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$BlockItem = $elm$core$Basics$identity;
var $rundis$elm_bootstrap$Bootstrap$Card$Block$custom = function (element) {
	return element;
};
var $elm$html$Html$h3 = _VirtualDom_node('h3');
var $rundis$elm_bootstrap$Bootstrap$Card$Header = $elm$core$Basics$identity;
var $rundis$elm_bootstrap$Bootstrap$Card$headerPrivate = F4(
	function (elemFn, attributes, children, _v0) {
		var conf = _v0;
		return _Utils_update(
			conf,
			{
				cB: $elm$core$Maybe$Just(
					A2(
						elemFn,
						A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$class('card-header'),
							attributes),
						children))
			});
	});
var $rundis$elm_bootstrap$Bootstrap$Card$header = $rundis$elm_bootstrap$Bootstrap$Card$headerPrivate($elm$html$Html$div);
var $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mt2 = $elm$html$Html$Attributes$class('mt-2');
var $rundis$elm_bootstrap$Bootstrap$Card$Block$text = F2(
	function (attributes, children) {
		return A2(
			$elm$html$Html$p,
			_Utils_ap(
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('card-text')
					]),
				attributes),
			children);
	});
var $author$project$Main$Like = function (a) {
	return {$: 55, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$Attrs = function (a) {
	return {$: 4, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Button$attrs = function (attrs_) {
	return $rundis$elm_bootstrap$Bootstrap$Internal$Button$Attrs(attrs_);
};
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (!maybeValue.$) {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$applyModifier = F2(
	function (modifier, options) {
		switch (modifier.$) {
			case 0:
				var size = modifier.a;
				return _Utils_update(
					options,
					{
						ej: $elm$core$Maybe$Just(size)
					});
			case 1:
				var coloring = modifier.a;
				return _Utils_update(
					options,
					{
						ac: $elm$core$Maybe$Just(coloring)
					});
			case 2:
				return _Utils_update(
					options,
					{b9: true});
			case 3:
				var val = modifier.a;
				return _Utils_update(
					options,
					{co: val});
			default:
				var attrs = modifier.a;
				return _Utils_update(
					options,
					{
						am: _Utils_ap(options.am, attrs)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$defaultOptions = {am: _List_Nil, b9: false, ac: $elm$core$Maybe$Nothing, co: false, ej: $elm$core$Maybe$Nothing};
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$roleClass = function (role) {
	switch (role) {
		case 0:
			return 'primary';
		case 1:
			return 'secondary';
		case 2:
			return 'success';
		case 3:
			return 'info';
		case 4:
			return 'warning';
		case 5:
			return 'danger';
		case 6:
			return 'dark';
		case 7:
			return 'light';
		default:
			return 'link';
	}
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$buttonAttributes = function (modifiers) {
	var options = A3($elm$core$List$foldl, $rundis$elm_bootstrap$Bootstrap$Internal$Button$applyModifier, $rundis$elm_bootstrap$Bootstrap$Internal$Button$defaultOptions, modifiers);
	return _Utils_ap(
		_List_fromArray(
			[
				$elm$html$Html$Attributes$classList(
				_List_fromArray(
					[
						_Utils_Tuple2('btn', true),
						_Utils_Tuple2('btn-block', options.b9),
						_Utils_Tuple2('disabled', options.co)
					])),
				$elm$html$Html$Attributes$disabled(options.co)
			]),
		_Utils_ap(
			function () {
				var _v0 = A2($elm$core$Maybe$andThen, $rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption, options.ej);
				if (!_v0.$) {
					var s = _v0.a;
					return _List_fromArray(
						[
							$elm$html$Html$Attributes$class('btn-' + s)
						]);
				} else {
					return _List_Nil;
				}
			}(),
			_Utils_ap(
				function () {
					var _v1 = options.ac;
					if (!_v1.$) {
						if (!_v1.a.$) {
							var role = _v1.a.a;
							return _List_fromArray(
								[
									$elm$html$Html$Attributes$class(
									'btn-' + $rundis$elm_bootstrap$Bootstrap$Internal$Button$roleClass(role))
								]);
						} else {
							var role = _v1.a.a;
							return _List_fromArray(
								[
									$elm$html$Html$Attributes$class(
									'btn-outline-' + $rundis$elm_bootstrap$Bootstrap$Internal$Button$roleClass(role))
								]);
						}
					} else {
						return _List_Nil;
					}
				}(),
				options.am)));
};
var $rundis$elm_bootstrap$Bootstrap$Button$button = F2(
	function (options, children) {
		return A2(
			$elm$html$Html$button,
			$rundis$elm_bootstrap$Bootstrap$Internal$Button$buttonAttributes(options),
			children);
	});
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$Coloring = function (a) {
	return {$: 1, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$Primary = 0;
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$Roled = function (a) {
	return {$: 0, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Button$primary = $rundis$elm_bootstrap$Bootstrap$Internal$Button$Coloring(
	$rundis$elm_bootstrap$Bootstrap$Internal$Button$Roled(0));
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$Secondary = 1;
var $rundis$elm_bootstrap$Bootstrap$Button$secondary = $rundis$elm_bootstrap$Bootstrap$Internal$Button$Coloring(
	$rundis$elm_bootstrap$Bootstrap$Internal$Button$Roled(1));
var $author$project$Main$viewLikeButton = F2(
	function (id, isLiked) {
		return A2(
			$rundis$elm_bootstrap$Bootstrap$Button$button,
			_List_fromArray(
				[
					isLiked ? $rundis$elm_bootstrap$Bootstrap$Button$primary : $rundis$elm_bootstrap$Bootstrap$Button$secondary,
					$rundis$elm_bootstrap$Bootstrap$Button$attrs(
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick(
							$author$project$Main$Like(id))
						]))
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('like')
				]));
	});
var $author$project$Main$viewProfile = function (profile) {
	return A3(
		$rundis$elm_bootstrap$Bootstrap$Card$block,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text(
						'TAGS: ' + $author$project$MyList$sumStringList(
							A2($elm$core$List$intersperse, ' ', profile.fT)))
					])),
				$rundis$elm_bootstrap$Bootstrap$Card$Block$custom(
				A2($author$project$Main$viewLikeButton, profile.e8, profile.ff))
			]),
		A3(
			$rundis$elm_bootstrap$Bootstrap$Card$header,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('text-center')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$img,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$src(profile.fs),
							A2($elm$html$Html$Attributes$style, 'max-width', '200px')
						]),
					_List_Nil),
					A2(
					$elm$html$Html$h3,
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mt2,
							$elm$html$Html$Events$onClick(
							$author$project$Main$NavToUser(profile.e8))
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(profile.fB)
						]))
				]),
			$rundis$elm_bootstrap$Bootstrap$Card$config(
				_List_fromArray(
					[
						$rundis$elm_bootstrap$Bootstrap$Card$attrs(
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'width', '240px')
							]))
					]))));
};
var $author$project$Main$viewFeed = function (lmodel) {
	return $elm$core$List$isEmpty(lmodel.eV) ? $elm$html$Html$text('Loading content...') : A2(
		$elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				$rundis$elm_bootstrap$Bootstrap$Card$columns(
				A2($elm$core$List$map, $author$project$Main$viewProfile, lmodel.eV)),
				$author$project$Main$viewFeedPageNav(lmodel)
			]));
};
var $author$project$Main$viewFooter = A2(
	$elm$html$Html$div,
	_List_fromArray(
		[
			$elm$html$Html$Attributes$class('footer')
		]),
	_List_fromArray(
		[
			$elm$html$Html$text('© reelbour and staeter 2020')
		]));
var $author$project$MyList$countWhereLoop = F2(
	function (count, boolList) {
		countWhereLoop:
		while (true) {
			if (!boolList.b) {
				return count;
			} else {
				var head = boolList.a;
				var queue = boolList.b;
				if (head) {
					var $temp$count = count + 1,
						$temp$boolList = queue;
					count = $temp$count;
					boolList = $temp$boolList;
					continue countWhereLoop;
				} else {
					var $temp$count = count,
						$temp$boolList = queue;
					count = $temp$count;
					boolList = $temp$boolList;
					continue countWhereLoop;
				}
			}
		}
	});
var $author$project$MyList$countWhere = F2(
	function (condition, list) {
		return A2(
			$author$project$MyList$countWhereLoop,
			0,
			A2($elm$core$List$map, condition, list));
	});
var $author$project$Main$viewHeader = F2(
	function (route, lmodel) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('header')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('header-left')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$href('/')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('HYPERTUBE')
								]))
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('header-right')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$href('/'),
									_Utils_eq(route, $author$project$Main$Home) ? $elm$html$Html$Attributes$class('active') : $elm$html$Html$Attributes$class('')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('home')
								])),
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$href('/chat'),
									_Utils_eq(route, $author$project$Main$Chats) ? $elm$html$Html$Attributes$class('active') : $elm$html$Html$Attributes$class('')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									'chat (' + ($elm$core$String$fromInt(
										A2(
											$author$project$MyList$countWhere,
											function ($) {
												return $.aO;
											},
											lmodel.bv)) + ')'))
								])),
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$href('/notifs'),
									_Utils_eq(route, $author$project$Main$Notifs) ? $elm$html$Html$Attributes$class('active') : $elm$html$Html$Attributes$class('')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									'notifs (' + ($elm$core$String$fromInt(lmodel.dm) + ')'))
								])),
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$href('/settings'),
									_Utils_eq(route, $author$project$Main$Settings) ? $elm$html$Html$Attributes$class('active') : $elm$html$Html$Attributes$class('')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('settings')
								])),
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$href('/signout'),
									A2($elm$html$Html$Attributes$style, 'color', 'DarkRed')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('signout')
								]))
						]))
				]));
	});
var $author$project$Main$viewNotif = function (notif) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				(!notif.aO) ? A2($elm$html$Html$Attributes$style, 'background-color', 'LightBlue') : A2($elm$html$Html$Attributes$style, 'background-color', 'White')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(notif.aW),
				A2($elm$html$Html$br, _List_Nil, _List_Nil),
				$elm$html$Html$text(notif.by)
			]));
};
var $author$project$Main$viewNotifs = function (notifs) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		A2($elm$core$List$map, $author$project$Main$viewNotif, notifs));
};
var $author$project$Main$RemovePicture = {$: 45};
var $author$project$Main$SelectImage = function (a) {
	return {$: 44, a: a};
};
var $author$project$Main$SelectReplacementPicture = {$: 46};
var $elm$html$Html$Attributes$name = $elm$html$Html$Attributes$stringProperty('name');
var $author$project$Main$viewGaleryElem = F4(
	function (toMsg, index, checked, _v0) {
		var pict = _v0.b;
		return _List_fromArray(
			[
				A2(
				$elm$html$Html$input,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$id(
						'c' + $elm$core$String$fromInt(index + 1)),
						$elm$html$Html$Attributes$class('c'),
						$elm$html$Html$Attributes$type_('radio'),
						$elm$html$Html$Attributes$name('ts'),
						$elm$html$Html$Attributes$checked(checked),
						$elm$html$Html$Events$onClick(
						toMsg(index))
					]),
				_List_Nil),
				A2(
				$elm$html$Html$label,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('t'),
						$elm$html$Html$Attributes$for(
						'c' + $elm$core$String$fromInt(index + 1)),
						A2(
						$elm$html$Html$Attributes$attribute,
						'style',
						checked ? '--w: 100%; --l: 0' : ('--w: 20%; --l: ' + ($elm$core$String$fromInt(20 * index) + '%')))
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$img,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$src(pict)
							]),
						_List_Nil)
					]))
			]);
	});
var $author$project$Main$viewGalery = F2(
	function (toMsg, pictures) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('w')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('ts')
						]),
					$elm$core$List$concat(
						$author$project$ZipList$toList(
							A2(
								$author$project$ZipList$indexedSelectedMap,
								$author$project$Main$viewGaleryElem(
									function (index) {
										return toMsg(
											A2($author$project$ZipList$goToIndex, index, pictures));
									}),
								pictures))))
				]));
	});
var $author$project$Main$viewPictUpdate = function (model) {
	return A2(
		$mdgriffith$elm_ui$Element$column,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$spacing(32),
				$mdgriffith$elm_ui$Element$centerX,
				$mdgriffith$elm_ui$Element$Border$shadow(
				{
					dD: 100.0,
					dE: A4($mdgriffith$elm_ui$Element$rgba, 0, 0, 0, 0.2),
					d4: _Utils_Tuple2(0.0, 0.0),
					ej: 0.0
				}),
				A2($mdgriffith$elm_ui$Element$paddingXY, 16, 64)
			]),
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[$mdgriffith$elm_ui$Element$centerX]),
				$mdgriffith$elm_ui$Element$html(
					A2(
						$elm$core$Maybe$withDefault,
						A2($elm$html$Html$div, _List_Nil, _List_Nil),
						A2(
							$elm$core$Maybe$map,
							function (p) {
								return A2(
									$elm$html$Html$div,
									_List_Nil,
									_List_fromArray(
										[
											A2($author$project$Main$viewGalery, $author$project$Main$SelectImage, p)
										]));
							},
							model.w)))),
				A2(
				$mdgriffith$elm_ui$Element$Input$button,
				_List_fromArray(
					[$mdgriffith$elm_ui$Element$centerX]),
				{
					j: $mdgriffith$elm_ui$Element$text('remove selected image'),
					aw: $elm$core$Maybe$Just($author$project$Main$RemovePicture)
				}),
				A2(
				$mdgriffith$elm_ui$Element$Input$button,
				_List_fromArray(
					[$mdgriffith$elm_ui$Element$centerX]),
				{
					j: $mdgriffith$elm_ui$Element$text('replace selected image'),
					aw: $elm$core$Maybe$Just($author$project$Main$SelectReplacementPicture)
				})
			]));
};
var $author$project$Main$InputPwUpdateConfirm = function (a) {
	return {$: 22, a: a};
};
var $author$project$Main$InputPwUpdateNew = function (a) {
	return {$: 21, a: a};
};
var $author$project$Main$InputPwUpdateOld = function (a) {
	return {$: 20, a: a};
};
var $author$project$Main$SubmitPwUpdate = {$: 23};
var $author$project$Main$viewPwUpdate = function (model) {
	return A2(
		$mdgriffith$elm_ui$Element$column,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$spacing(16),
				$mdgriffith$elm_ui$Element$centerX,
				$mdgriffith$elm_ui$Element$Border$shadow(
				{
					dD: 100.0,
					dE: A4($mdgriffith$elm_ui$Element$rgba, 0, 0, 0, 0.2),
					d4: _Utils_Tuple2(0.0, 0.0),
					ej: 0.0
				}),
				$mdgriffith$elm_ui$Element$padding(64)
			]),
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Element$Input$currentPassword,
				_List_fromArray(
					[
						$author$project$Main$onEnter($author$project$Main$SubmitPwUpdate),
						$mdgriffith$elm_ui$Element$padding(8)
					]),
				{
					j: A2(
						$mdgriffith$elm_ui$Element$Input$labelLeft,
						_List_fromArray(
							[$mdgriffith$elm_ui$Element$centerY]),
						$mdgriffith$elm_ui$Element$text('old : ')),
					hr: $author$project$Main$InputPwUpdateOld,
					bK: $elm$core$Maybe$Just(
						A2(
							$mdgriffith$elm_ui$Element$Input$placeholder,
							_List_Nil,
							$mdgriffith$elm_ui$Element$text('current password'))),
					bm: false,
					ep: model.bO
				}),
				A2(
				$mdgriffith$elm_ui$Element$Input$newPassword,
				_List_fromArray(
					[
						$author$project$Main$onEnter($author$project$Main$SubmitPwUpdate),
						$mdgriffith$elm_ui$Element$padding(8)
					]),
				{
					j: A2(
						$mdgriffith$elm_ui$Element$Input$labelLeft,
						_List_fromArray(
							[$mdgriffith$elm_ui$Element$centerY]),
						$mdgriffith$elm_ui$Element$text('new : ')),
					hr: $author$project$Main$InputPwUpdateNew,
					bK: $elm$core$Maybe$Just(
						A2(
							$mdgriffith$elm_ui$Element$Input$placeholder,
							_List_Nil,
							$mdgriffith$elm_ui$Element$text('new password'))),
					bm: false,
					ep: model.bN
				}),
				A2(
				$mdgriffith$elm_ui$Element$Input$newPassword,
				_List_fromArray(
					[
						$author$project$Main$onEnter($author$project$Main$SubmitPwUpdate),
						$mdgriffith$elm_ui$Element$padding(8)
					]),
				{
					j: A2(
						$mdgriffith$elm_ui$Element$Input$labelLeft,
						_List_fromArray(
							[$mdgriffith$elm_ui$Element$centerY]),
						$mdgriffith$elm_ui$Element$text('confirm : ')),
					hr: $author$project$Main$InputPwUpdateConfirm,
					bK: $elm$core$Maybe$Just(
						A2(
							$mdgriffith$elm_ui$Element$Input$placeholder,
							_List_Nil,
							$mdgriffith$elm_ui$Element$text('confirm new password'))),
					bm: false,
					ep: model.bM
				}),
				A2(
				$mdgriffith$elm_ui$Element$Input$button,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$padding(0),
						$mdgriffith$elm_ui$Element$centerX
					]),
				{
					j: $mdgriffith$elm_ui$Element$text('update password'),
					aw: $elm$core$Maybe$Just($author$project$Main$SubmitPwUpdate)
				})
			]));
};
var $author$project$Main$Block = function (a) {
	return {$: 57, a: a};
};
var $author$project$Main$InputUserDetailsSelectImage = function (a) {
	return {$: 49, a: a};
};
var $author$project$Main$Report = function (a) {
	return {$: 59, a: a};
};
var $elm$html$Html$h4 = _VirtualDom_node('h4');
var $rundis$elm_bootstrap$Bootstrap$Card$Block$title = F3(
	function (elemFn, attributes, children) {
		return A2(
			elemFn,
			A2(
				$elm$core$List$cons,
				$elm$html$Html$Attributes$class('card-title'),
				attributes),
			children);
	});
var $rundis$elm_bootstrap$Bootstrap$Card$Block$titleH4 = $rundis$elm_bootstrap$Bootstrap$Card$Block$title($elm$html$Html$h4);
var $elm$html$Html$h6 = _VirtualDom_node('h6');
var $rundis$elm_bootstrap$Bootstrap$Card$Block$titleH6 = $rundis$elm_bootstrap$Bootstrap$Card$Block$title($elm$html$Html$h6);
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$Danger = 5;
var $rundis$elm_bootstrap$Bootstrap$Button$danger = $rundis$elm_bootstrap$Bootstrap$Internal$Button$Coloring(
	$rundis$elm_bootstrap$Bootstrap$Internal$Button$Roled(5));
var $author$project$Main$viewAngryButton = F2(
	function (name, msg) {
		return A2(
			$rundis$elm_bootstrap$Bootstrap$Button$button,
			_List_fromArray(
				[
					$rundis$elm_bootstrap$Bootstrap$Button$danger,
					$rundis$elm_bootstrap$Bootstrap$Button$attrs(
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick(msg)
						]))
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(name)
				]));
	});
var $rundis$elm_bootstrap$Bootstrap$Carousel$Config = $elm$core$Basics$identity;
var $rundis$elm_bootstrap$Bootstrap$Carousel$config = F2(
	function (toMsg, attributes) {
		return {am: attributes, dF: false, dW: false, dg: _List_Nil, er: toMsg};
	});
var $rundis$elm_bootstrap$Bootstrap$Carousel$SlideInternal$Config = $elm$core$Basics$identity;
var $rundis$elm_bootstrap$Bootstrap$Carousel$Slide$config = F2(
	function (attributes, content) {
		return {am: attributes, eF: $elm$core$Maybe$Nothing, aW: content};
	});
var $rundis$elm_bootstrap$Bootstrap$Carousel$SlideInternal$Custom = function (a) {
	return {$: 1, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Carousel$Slide$customContent = function (html) {
	return $rundis$elm_bootstrap$Bootstrap$Carousel$SlideInternal$Custom(
		{g2: html});
};
var $rundis$elm_bootstrap$Bootstrap$Carousel$slides = F2(
	function (newSlides, _v0) {
		var settings = _v0;
		return _Utils_update(
			settings,
			{dg: newSlides});
	});
var $rundis$elm_bootstrap$Bootstrap$Carousel$EndTransition = function (a) {
	return {$: 4, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Carousel$Hovered = 0;
var $rundis$elm_bootstrap$Bootstrap$Carousel$SetHover = function (a) {
	return {$: 5, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Carousel$Next = {$: 0};
var $rundis$elm_bootstrap$Bootstrap$Carousel$StartTransition = function (a) {
	return {$: 2, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Carousel$controlNext = A2(
	$elm$html$Html$button,
	_List_fromArray(
		[
			$elm$html$Html$Attributes$class('btn btn-link carousel-control-next'),
			A2($elm$html$Html$Attributes$attribute, 'role', 'button'),
			$elm$html$Html$Events$onClick(
			$rundis$elm_bootstrap$Bootstrap$Carousel$StartTransition($rundis$elm_bootstrap$Bootstrap$Carousel$Next))
		]),
	_List_fromArray(
		[
			A2(
			$elm$html$Html$span,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('carousel-control-next-icon'),
					A2($elm$html$Html$Attributes$attribute, 'aria-hidden', 'true')
				]),
			_List_Nil),
			A2(
			$elm$html$Html$span,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('sr-only')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('Next')
				]))
		]));
var $rundis$elm_bootstrap$Bootstrap$Carousel$Prev = {$: 1};
var $rundis$elm_bootstrap$Bootstrap$Carousel$controlPrev = A2(
	$elm$html$Html$button,
	_List_fromArray(
		[
			$elm$html$Html$Attributes$class('btn btn-link carousel-control-prev'),
			$elm$html$Html$Events$onClick(
			$rundis$elm_bootstrap$Bootstrap$Carousel$StartTransition($rundis$elm_bootstrap$Bootstrap$Carousel$Prev))
		]),
	_List_fromArray(
		[
			A2(
			$elm$html$Html$span,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('carousel-control-prev-icon'),
					A2($elm$html$Html$Attributes$attribute, 'aria-hidden', 'true')
				]),
			_List_Nil),
			A2(
			$elm$html$Html$span,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('sr-only')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('Previous')
				]))
		]));
var $rundis$elm_bootstrap$Bootstrap$Carousel$dirtyHack = function (size) {
	return A3(
		$elm$html$Html$Keyed$node,
		'div',
		_List_Nil,
		_List_fromArray(
			[
				_Utils_Tuple2(
				'dirtyHack',
				A2(
					$elm$html$Html$img,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$Events$on,
							'load',
							$elm$json$Json$Decode$succeed(
								$rundis$elm_bootstrap$Bootstrap$Carousel$EndTransition(size))),
							$elm$html$Html$Attributes$src('https://package.elm-lang.org/assets/favicon.ico'),
							A2($elm$html$Html$Attributes$style, 'display', 'none')
						]),
					_List_Nil))
			]));
};
var $rundis$elm_bootstrap$Bootstrap$Carousel$Number = function (a) {
	return {$: 2, a: a};
};
var $elm$html$Html$ol = _VirtualDom_node('ol');
var $rundis$elm_bootstrap$Bootstrap$Carousel$indicators = F2(
	function (size, activeIndex) {
		var item = function (n) {
			return A2(
				$elm$html$Html$li,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$classList(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'active',
								_Utils_eq(n, activeIndex))
							])),
						$elm$html$Html$Events$onClick(
						$rundis$elm_bootstrap$Bootstrap$Carousel$StartTransition(
							$rundis$elm_bootstrap$Bootstrap$Carousel$Number(n)))
					]),
				_List_Nil);
		};
		var items = A2(
			$elm$core$List$map,
			item,
			A2($elm$core$List$range, 0, size - 1));
		return A2(
			$elm$html$Html$ol,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('carousel-indicators')
				]),
			items);
	});
var $elm$html$Html$Events$onMouseEnter = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseenter',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$html$Html$Events$onMouseLeave = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseleave',
		$elm$json$Json$Decode$succeed(msg));
};
var $rundis$elm_bootstrap$Bootstrap$Carousel$SlideInternal$addAttributes = F2(
	function (newAttributes, _v0) {
		var settings = _v0;
		return _Utils_update(
			settings,
			{
				am: _Utils_ap(settings.am, newAttributes)
			});
	});
var $rundis$elm_bootstrap$Bootstrap$Carousel$transitionClassNames = F2(
	function (currentIndex, transition) {
		var base = 'carousel-item';
		var leftNext = {cn: base + '-left', cU: base + '-next'};
		var rightPrev = {cn: base + '-right', cU: base + '-prev'};
		switch (transition.$) {
			case 0:
				return leftNext;
			case 2:
				var n = transition.a;
				return (_Utils_cmp(n, currentIndex) > 0) ? leftNext : rightPrev;
			default:
				return rightPrev;
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Carousel$transitionClasses = F4(
	function (index, currentIndex, newIndex, tstage) {
		if (_Utils_eq(index, currentIndex)) {
			switch (tstage.$) {
				case 2:
					return _List_fromArray(
						[
							_Utils_Tuple2('active', true)
						]);
				case 0:
					var transition = tstage.a;
					return _List_fromArray(
						[
							_Utils_Tuple2('active', true)
						]);
				default:
					var transition = tstage.a;
					var _v1 = A2($rundis$elm_bootstrap$Bootstrap$Carousel$transitionClassNames, currentIndex, transition);
					var directionalClassName = _v1.cn;
					return _List_fromArray(
						[
							_Utils_Tuple2('active', true),
							_Utils_Tuple2(directionalClassName, true)
						]);
			}
		} else {
			if (_Utils_eq(index, newIndex)) {
				switch (tstage.$) {
					case 2:
						return _List_Nil;
					case 0:
						var transition = tstage.a;
						return _List_fromArray(
							[
								_Utils_Tuple2(
								function ($) {
									return $.cU;
								}(
									A2($rundis$elm_bootstrap$Bootstrap$Carousel$transitionClassNames, currentIndex, transition)),
								true)
							]);
					default:
						var transition = tstage.a;
						var _v3 = A2($rundis$elm_bootstrap$Bootstrap$Carousel$transitionClassNames, currentIndex, transition);
						var directionalClassName = _v3.cn;
						var orderClassName = _v3.cU;
						return _List_fromArray(
							[
								_Utils_Tuple2(directionalClassName, true),
								_Utils_Tuple2(orderClassName, true)
							]);
				}
			} else {
				return _List_Nil;
			}
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Carousel$SlideInternal$view = function (_v0) {
	var attributes = _v0.am;
	var content = _v0.aW;
	var caption = _v0.eF;
	var captionHtml = function () {
		if (caption.$ === 1) {
			return $elm$html$Html$text('');
		} else {
			var rec = caption.a;
			return A2(
				$elm$html$Html$div,
				_Utils_ap(
					rec.am,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('carousel-caption d-none d-md-block')
						])),
				rec.ao);
		}
	}();
	return A2(
		$elm$html$Html$div,
		_Utils_ap(
			attributes,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('carousel-item')
				])),
		function () {
			if (!content.$) {
				var rec = content.a;
				return _List_fromArray(
					[
						A2(
						$elm$html$Html$img,
						_Utils_ap(
							rec.am,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('d-block img-fluid'),
									$elm$html$Html$Attributes$src(rec.b)
								])),
						_List_Nil),
						captionHtml
					]);
			} else {
				var html = content.a.g2;
				return _List_fromArray(
					[html, captionHtml]);
			}
		}());
};
var $rundis$elm_bootstrap$Bootstrap$Carousel$viewSlide = F3(
	function (model, index, slide) {
		var tstage = model.a;
		var currentIndex = model.b.ap;
		var size = model.b.ej;
		var newIndex = A3($rundis$elm_bootstrap$Bootstrap$Carousel$nextIndex, tstage, currentIndex, size);
		return $rundis$elm_bootstrap$Bootstrap$Carousel$SlideInternal$view(
			A2(
				$rundis$elm_bootstrap$Bootstrap$Carousel$SlideInternal$addAttributes,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$classList(
						A4($rundis$elm_bootstrap$Bootstrap$Carousel$transitionClasses, index, currentIndex, newIndex, tstage))
					]),
				slide));
	});
var $rundis$elm_bootstrap$Bootstrap$Carousel$view = F2(
	function (model, _v0) {
		var tstage = model.a;
		var hovering = model.b.bB;
		var currentIndex = model.b.ap;
		var wrap = model.b.ik;
		var settings = _v0;
		var slidesHtml = A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('carousel-inner'),
					A2($elm$html$Html$Attributes$attribute, 'role', 'listbox')
				]),
			A2(
				$elm$core$List$indexedMap,
				$rundis$elm_bootstrap$Bootstrap$Carousel$viewSlide(model),
				settings.dg));
		var size = $elm$core$List$length(settings.dg);
		var indicatorsHtml = settings.dW ? A2(
			$rundis$elm_bootstrap$Bootstrap$Carousel$indicators,
			size,
			A3($rundis$elm_bootstrap$Bootstrap$Carousel$nextIndex, tstage, currentIndex, size)) : $elm$html$Html$text('');
		var defaultCarouselAttributes = _Utils_ap(
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('carousel slide'),
					A2(
					$elm$html$Html$Events$on,
					'transitionend',
					$elm$json$Json$Decode$succeed(
						settings.er(
							$rundis$elm_bootstrap$Bootstrap$Carousel$EndTransition(size))))
				]),
			(hovering !== 2) ? _List_fromArray(
				[
					$elm$html$Html$Events$onMouseEnter(
					settings.er(
						$rundis$elm_bootstrap$Bootstrap$Carousel$SetHover(0))),
					$elm$html$Html$Events$onMouseLeave(
					settings.er(
						$rundis$elm_bootstrap$Bootstrap$Carousel$SetHover(1)))
				]) : _List_Nil);
		var controlsHtml = settings.dF ? ((wrap || ((!(!currentIndex)) && (!_Utils_eq(currentIndex, size - 1)))) ? _List_fromArray(
			[$rundis$elm_bootstrap$Bootstrap$Carousel$controlPrev, $rundis$elm_bootstrap$Bootstrap$Carousel$controlNext]) : ((!currentIndex) ? _List_fromArray(
			[$rundis$elm_bootstrap$Bootstrap$Carousel$controlNext]) : _List_fromArray(
			[$rundis$elm_bootstrap$Bootstrap$Carousel$controlPrev]))) : _List_Nil;
		return A2(
			$elm$html$Html$div,
			_Utils_ap(settings.am, defaultCarouselAttributes),
			A2(
				$elm$core$List$cons,
				slidesHtml,
				A2(
					$elm$core$List$map,
					$elm$html$Html$map(settings.er),
					_Utils_ap(
						_List_fromArray(
							[
								$rundis$elm_bootstrap$Bootstrap$Carousel$dirtyHack(size),
								indicatorsHtml
							]),
						controlsHtml))));
	});
var $rundis$elm_bootstrap$Bootstrap$Carousel$withControls = function (_v0) {
	var settings = _v0;
	return _Utils_update(
		settings,
		{dF: true});
};
var $rundis$elm_bootstrap$Bootstrap$Carousel$withIndicators = function (_v0) {
	var settings = _v0;
	return _Utils_update(
		settings,
		{dW: true});
};
var $author$project$Main$viewCarousel = F3(
	function (imgList, state, toMsg) {
		return A2(
			$rundis$elm_bootstrap$Bootstrap$Carousel$view,
			state,
			A2(
				$rundis$elm_bootstrap$Bootstrap$Carousel$slides,
				A2(
					$elm$core$List$map,
					function (img) {
						return A2(
							$rundis$elm_bootstrap$Bootstrap$Carousel$Slide$config,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'background-image', 'url(\"' + (img + '\")')),
									A2($elm$html$Html$Attributes$style, 'background-size', 'cover'),
									A2($elm$html$Html$Attributes$style, 'background-position', '50% 50%'),
									A2($elm$html$Html$Attributes$style, 'background-repeat', 'no-repeat'),
									A2($elm$html$Html$Attributes$style, 'width', '45em'),
									A2($elm$html$Html$Attributes$style, 'height', '45em')
								]),
							$rundis$elm_bootstrap$Bootstrap$Carousel$Slide$customContent(
								A2($elm$html$Html$div, _List_Nil, _List_Nil)));
					},
					imgList),
				$rundis$elm_bootstrap$Bootstrap$Carousel$withIndicators(
					$rundis$elm_bootstrap$Bootstrap$Carousel$withControls(
						A2(
							$rundis$elm_bootstrap$Bootstrap$Carousel$config,
							toMsg,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '45em'),
									A2($elm$html$Html$Attributes$style, 'height', '45em')
								]))))));
	});
var $author$project$Main$viewUserDetails = function (ud) {
	return $rundis$elm_bootstrap$Bootstrap$Card$view(
		A3(
			$rundis$elm_bootstrap$Bootstrap$Card$block,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Card$Block$titleH4,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(ud.aY + (' ' + ud.a3))
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Card$Block$titleH6,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(ud.W)
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Card$Block$titleH6,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(
							$author$project$Main$orientationToString(ud.a7) + (' ' + $author$project$Main$genderToString(ud.a_)))
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(ud.aV)
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(
							function () {
								var _v0 = ud.ag;
								if (!_v0.$) {
									return 'Is logged in';
								} else {
									var date = _v0.a;
									return 'Last log : ' + date;
								}
							}())
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(
							'Popularity score: ' + $elm$core$String$fromInt(ud.a8))
						])),
					$rundis$elm_bootstrap$Bootstrap$Card$Block$custom(
					A2($author$project$Main$viewLikeButton, ud.e8, ud.ff)),
					$rundis$elm_bootstrap$Bootstrap$Card$Block$custom(
					A2(
						$author$project$Main$viewAngryButton,
						'block',
						$author$project$Main$Block(ud.e8))),
					$rundis$elm_bootstrap$Bootstrap$Card$Block$custom(
					A2(
						$author$project$Main$viewAngryButton,
						'reprt',
						$author$project$Main$Report(ud.e8)))
				]),
			A3(
				$rundis$elm_bootstrap$Bootstrap$Card$header,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('text-center')
					]),
				_List_fromArray(
					[
						A3($author$project$Main$viewCarousel, ud.w, ud.bu, $author$project$Main$InputUserDetailsSelectImage),
						A2(
						$elm$html$Html$h3,
						_List_fromArray(
							[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mt2]),
						_List_fromArray(
							[
								$elm$html$Html$text(ud.fB)
							]))
					]),
				$rundis$elm_bootstrap$Bootstrap$Card$config(
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$attrs(
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '47em')
								]))
						])))));
};
var $author$project$Main$welcomeView = A2(
	$mdgriffith$elm_ui$Element$column,
	_List_fromArray(
		[
			$mdgriffith$elm_ui$Element$spacing(32),
			$mdgriffith$elm_ui$Element$centerX,
			$mdgriffith$elm_ui$Element$centerY
		]),
	_List_fromArray(
		[
			$mdgriffith$elm_ui$Element$text('Welcome to Matcha. The best site too meet your future love!'),
			A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$centerX,
					$mdgriffith$elm_ui$Element$centerY,
					$mdgriffith$elm_ui$Element$paddingEach(
					{an: 2, au: 32, aB: 32, aM: 32})
				]),
			$mdgriffith$elm_ui$Element$html(
				A2(
					$elm$html$Html$a,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href('/signin')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('Signin')
						])))),
			A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$centerX,
					$mdgriffith$elm_ui$Element$centerY,
					$mdgriffith$elm_ui$Element$paddingEach(
					{an: 32, au: 32, aB: 32, aM: 2})
				]),
			$mdgriffith$elm_ui$Element$html(
				A2(
					$elm$html$Html$a,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href('/signup')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('Signup')
						]))))
		]));
var $mdgriffith$elm_ui$Internal$Model$Padding = F5(
	function (a, b, c, d, e) {
		return {$: 0, a: a, b: b, c: c, d: d, e: e};
	});
var $mdgriffith$elm_ui$Internal$Model$Spaced = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$extractSpacingAndPadding = function (attrs) {
	return A3(
		$elm$core$List$foldr,
		F2(
			function (attr, _v0) {
				var pad = _v0.a;
				var spacing = _v0.b;
				return _Utils_Tuple2(
					function () {
						if (!pad.$) {
							var x = pad.a;
							return pad;
						} else {
							if ((attr.$ === 4) && (attr.b.$ === 7)) {
								var _v3 = attr.b;
								var name = _v3.a;
								var t = _v3.b;
								var r = _v3.c;
								var b = _v3.d;
								var l = _v3.e;
								return $elm$core$Maybe$Just(
									A5($mdgriffith$elm_ui$Internal$Model$Padding, name, t, r, b, l));
							} else {
								return $elm$core$Maybe$Nothing;
							}
						}
					}(),
					function () {
						if (!spacing.$) {
							var x = spacing.a;
							return spacing;
						} else {
							if ((attr.$ === 4) && (attr.b.$ === 5)) {
								var _v6 = attr.b;
								var name = _v6.a;
								var x = _v6.b;
								var y = _v6.c;
								return $elm$core$Maybe$Just(
									A3($mdgriffith$elm_ui$Internal$Model$Spaced, name, x, y));
							} else {
								return $elm$core$Maybe$Nothing;
							}
						}
					}());
			}),
		_Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing),
		attrs);
};
var $mdgriffith$elm_ui$Element$wrappedRow = F2(
	function (attrs, children) {
		var _v0 = $mdgriffith$elm_ui$Internal$Model$extractSpacingAndPadding(attrs);
		var padded = _v0.a;
		var spaced = _v0.b;
		if (spaced.$ === 1) {
			return A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asRow,
				$mdgriffith$elm_ui$Internal$Model$div,
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.bx + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.ae + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.ew)))),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
							attrs))),
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
		} else {
			var _v2 = spaced.a;
			var spaceName = _v2.a;
			var x = _v2.b;
			var y = _v2.c;
			var newPadding = function () {
				if (!padded.$) {
					var _v5 = padded.a;
					var name = _v5.a;
					var t = _v5.b;
					var r = _v5.c;
					var b = _v5.d;
					var l = _v5.e;
					return ((_Utils_cmp(r, (x / 2) | 0) > -1) && (_Utils_cmp(b, (y / 2) | 0) > -1)) ? $elm$core$Maybe$Just(
						$mdgriffith$elm_ui$Element$paddingEach(
							{an: b - ((y / 2) | 0), au: l - ((x / 2) | 0), aB: r - ((x / 2) | 0), aM: t - ((y / 2) | 0)})) : $elm$core$Maybe$Nothing;
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}();
			if (!newPadding.$) {
				var pad = newPadding.a;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$element,
					$mdgriffith$elm_ui$Internal$Model$asRow,
					$mdgriffith$elm_ui$Internal$Model$div,
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.bx + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.ae + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.ew)))),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
								_Utils_ap(
									attrs,
									_List_fromArray(
										[pad]))))),
					$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
			} else {
				var halfY = -(y / 2);
				var halfX = -(x / 2);
				return A4(
					$mdgriffith$elm_ui$Internal$Model$element,
					$mdgriffith$elm_ui$Internal$Model$asEl,
					$mdgriffith$elm_ui$Internal$Model$div,
					attrs,
					$mdgriffith$elm_ui$Internal$Model$Unkeyed(
						_List_fromArray(
							[
								A4(
								$mdgriffith$elm_ui$Internal$Model$element,
								$mdgriffith$elm_ui$Internal$Model$asRow,
								$mdgriffith$elm_ui$Internal$Model$div,
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.bx + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.ae + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.ew)))),
									A2(
										$elm$core$List$cons,
										$mdgriffith$elm_ui$Internal$Model$Attr(
											A2(
												$elm$html$Html$Attributes$style,
												'margin',
												$elm$core$String$fromFloat(halfY) + ('px' + (' ' + ($elm$core$String$fromFloat(halfX) + 'px'))))),
										A2(
											$elm$core$List$cons,
											$mdgriffith$elm_ui$Internal$Model$Attr(
												A2(
													$elm$html$Html$Attributes$style,
													'width',
													'calc(100% + ' + ($elm$core$String$fromInt(x) + 'px)'))),
											A2(
												$elm$core$List$cons,
												$mdgriffith$elm_ui$Internal$Model$Attr(
													A2(
														$elm$html$Html$Attributes$style,
														'height',
														'calc(100% + ' + ($elm$core$String$fromInt(y) + 'px)'))),
												A2(
													$elm$core$List$cons,
													A2(
														$mdgriffith$elm_ui$Internal$Model$StyleClass,
														$mdgriffith$elm_ui$Internal$Flag$spacing,
														A3($mdgriffith$elm_ui$Internal$Model$SpacingStyle, spaceName, x, y)),
													_List_Nil))))),
								$mdgriffith$elm_ui$Internal$Model$Unkeyed(children))
							])));
			}
		}
	});
var $author$project$Main$view = function (model) {
	var _v0 = _Utils_Tuple2(model.a, model.l);
	if (_v0.a.$ === 1) {
		switch (_v0.b.$) {
			case 1:
				var amodel = _v0.a.a;
				var _v1 = _v0.b;
				return {
					eE: _List_fromArray(
						[
							$author$project$Alert$view(model),
							A2(
							$mdgriffith$elm_ui$Element$layout,
							_List_Nil,
							$author$project$Main$signinView(amodel)),
							$author$project$Main$viewFooter
						]),
					C: 'matcha - signin'
				};
			case 2:
				var amodel = _v0.a.a;
				var _v2 = _v0.b;
				return {
					eE: _List_fromArray(
						[
							$author$project$Alert$view(model),
							A2(
							$mdgriffith$elm_ui$Element$layout,
							_List_Nil,
							$author$project$Main$signupView(amodel)),
							$author$project$Main$viewFooter
						]),
					C: 'matcha - signup'
				};
			case 0:
				var _v3 = _v0.b;
				return {
					eE: _List_fromArray(
						[
							A2($mdgriffith$elm_ui$Element$layout, _List_Nil, $author$project$Main$welcomeView),
							$author$project$Main$viewFooter
						]),
					C: 'matcha - home'
				};
			case 6:
				var amodel = _v0.a.a;
				var _v4 = _v0.b;
				return {
					eE: _List_fromArray(
						[
							$author$project$Alert$view(model),
							A2(
							$mdgriffith$elm_ui$Element$layout,
							_List_Nil,
							$author$project$Main$retreivealRequestView(amodel)),
							$author$project$Main$viewFooter
						]),
					C: 'matcha - retreive password'
				};
			case 7:
				var amodel = _v0.a.a;
				var _v5 = _v0.b;
				var a = _v5.a;
				var b = _v5.b;
				return {
					eE: _List_fromArray(
						[
							$author$project$Alert$view(model),
							A2(
							$elm$core$Maybe$withDefault,
							A2($elm$html$Html$div, _List_Nil, _List_Nil),
							A2(
								$elm$core$Maybe$map,
								A2(
									$elm$core$Basics$composeR,
									$author$project$Form$view,
									$elm$html$Html$map($author$project$Main$AccountRetrievalForm)),
								amodel.V)),
							$author$project$Main$viewFooter
						]),
					C: 'matcha - retreive password'
				};
			case 8:
				var amodel = _v0.a.a;
				var _v6 = _v0.b;
				var a = _v6.a;
				var b = _v6.b;
				return {
					eE: _List_fromArray(
						[
							$author$project$Alert$view(model),
							A2(
							$elm$core$Maybe$withDefault,
							A2($elm$html$Html$div, _List_Nil, _List_Nil),
							A2(
								$elm$core$Maybe$map,
								A2(
									$elm$core$Basics$composeR,
									$author$project$Form$view,
									$elm$html$Html$map($author$project$Main$AccountConfirmationForm)),
								amodel.U)),
							$author$project$Main$viewFooter
						]),
					C: 'matcha - retreive password'
				};
			default:
				return {
					eE: $elm$core$List$singleton(
						A2(
							$mdgriffith$elm_ui$Element$layout,
							_List_Nil,
							A2(
								$mdgriffith$elm_ui$Element$column,
								_List_fromArray(
									[$mdgriffith$elm_ui$Element$centerX, $mdgriffith$elm_ui$Element$centerY]),
								_List_fromArray(
									[
										A2(
										$mdgriffith$elm_ui$Element$el,
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$padding(5),
												$mdgriffith$elm_ui$Element$centerX
											]),
										$mdgriffith$elm_ui$Element$text('You seem lost')),
										A2(
										$mdgriffith$elm_ui$Element$el,
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$padding(5),
												$mdgriffith$elm_ui$Element$centerX
											]),
										$mdgriffith$elm_ui$Element$html(
											A2(
												$elm$html$Html$a,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$href('/signin')
													]),
												_List_fromArray(
													[
														$elm$html$Html$text('go to signin')
													]))))
									])))),
					C: 'matcha - 404 page not found'
				};
		}
	} else {
		switch (_v0.b.$) {
			case 0:
				var lmodel = _v0.a.a;
				var _v7 = _v0.b;
				return {
					eE: _List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$CDN$stylesheet,
							A2($author$project$Main$viewHeader, model.l, lmodel),
							$author$project$Alert$view(model),
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$container,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									$rundis$elm_bootstrap$Bootstrap$Grid$row,
									_List_Nil,
									_List_fromArray(
										[
											A2(
											$rundis$elm_bootstrap$Bootstrap$Grid$col,
											_List_fromArray(
												[$rundis$elm_bootstrap$Bootstrap$Grid$Col$lg3]),
											_List_fromArray(
												[
													A2(
													$elm$core$Maybe$withDefault,
													$elm$html$Html$text('Loading...'),
													A2(
														$elm$core$Maybe$map,
														$elm$html$Html$map($author$project$Main$FiltersForm),
														A2($elm$core$Maybe$map, $author$project$Form$view, lmodel.gU)))
												])),
											A2(
											$rundis$elm_bootstrap$Bootstrap$Grid$col,
											_List_fromArray(
												[$rundis$elm_bootstrap$Bootstrap$Grid$Col$lg9]),
											_List_fromArray(
												[
													$author$project$Main$viewFeed(lmodel)
												]))
										]))
								])),
							$author$project$Main$viewFooter
						]),
					C: 'matcha - home'
				};
			case 3:
				var lmodel = _v0.a.a;
				var id = _v0.b.a;
				return {
					eE: $elm$core$List$concat(
						_List_fromArray(
							[
								_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$CDN$stylesheet,
									A2($author$project$Main$viewHeader, model.l, lmodel),
									$author$project$Main$viewFooter
								]),
								function () {
								var _v8 = lmodel.T;
								switch (_v8.$) {
									case 3:
										var ud = _v8.a;
										return _List_fromArray(
											[
												$author$project$Alert$view(model),
												A2(
												$mdgriffith$elm_ui$Element$layout,
												_List_fromArray(
													[
														$mdgriffith$elm_ui$Element$centerX,
														$mdgriffith$elm_ui$Element$centerY,
														$mdgriffith$elm_ui$Element$padding(64),
														$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
														$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink)
													]),
												$mdgriffith$elm_ui$Element$html(
													$author$project$Main$viewUserDetails(ud)))
											]);
									case 2:
										var err = _v8.a;
										return $elm$core$List$singleton(
											$author$project$Alert$view(
												A2(
													A2(
														$elm$core$Basics$composeL,
														A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
														$author$project$Alert$invalidImputAlert),
													'error: ' + err,
													model)));
									case 0:
										return $elm$core$List$singleton(
											$author$project$Alert$view(
												A2(
													A2(
														$elm$core$Basics$composeL,
														A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
														$author$project$Alert$invalidImputAlert),
													'Requesting our server. Please reload the page if it takes too long.',
													model)));
									default:
										return $elm$core$List$singleton(
											$author$project$Alert$view(
												A2(
													A2(
														$elm$core$Basics$composeL,
														A2($elm$core$Basics$composeL, $author$project$Alert$put, $elm$core$Maybe$Just),
														$author$project$Alert$alert('DarkBlue')),
													'Loading...',
													model)));
								}
							}()
							])),
					C: 'matcha - ' + function () {
						var _v9 = lmodel.T;
						switch (_v9.$) {
							case 3:
								var ud = _v9.a;
								return ud.fB;
							case 2:
								var err = _v9.a;
								return 'error: ' + err;
							case 0:
								return 'Requesting...';
							default:
								return 'Loading...';
						}
					}()
				};
			case 4:
				var lmodel = _v0.a.a;
				var _v10 = _v0.b;
				return {
					eE: _List_fromArray(
						[
							A2($author$project$Main$viewHeader, model.l, lmodel),
							$author$project$Alert$view(model),
							$author$project$Main$viewNotifs(lmodel.cK),
							$author$project$Main$viewFooter
						]),
					C: 'matcha - notifications'
				};
			case 5:
				var lmodel = _v0.a.a;
				var _v11 = _v0.b;
				return {
					eE: _List_fromArray(
						[
							A2($author$project$Main$viewHeader, model.l, lmodel),
							$author$project$Alert$view(model),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$id('frame'),
									A2($elm$html$Html$Attributes$style, 'display', 'flex'),
									A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
									A2($elm$html$Html$Attributes$style, 'justify-content', 'center'),
									A2($elm$html$Html$Attributes$style, 'min-height', '100vh'),
									A2($elm$html$Html$Attributes$style, 'font-size', '1em'),
									A2($elm$html$Html$Attributes$style, 'letter-spacing', '0.1px'),
									A2($elm$html$Html$Attributes$style, 'color', '#32465a'),
									A2($elm$html$Html$Attributes$style, 'text-rendering', 'optimizeLegibility'),
									A2($elm$html$Html$Attributes$style, 'text-shadow', '1px 1px 1px rgba(0, 0, 0, 0.004)'),
									A2($elm$html$Html$Attributes$style, '-webkit-font-smoothing', 'antialiased')
								]),
							_List_fromArray(
								[
									$author$project$Main$viewChats(lmodel.bv),
									A2(
									$elm$core$Maybe$withDefault,
									$elm$html$Html$text('No discution selected.'),
									A2(
										$elm$core$Maybe$map,
										$author$project$Main$viewDiscution(lmodel.fs),
										lmodel.O))
								])),
							$author$project$Main$viewFooter
						]),
					C: 'matcha - notifications'
				};
			case 9:
				var lmodel = _v0.a.a;
				var _v12 = _v0.b;
				return {
					eE: _List_fromArray(
						[
							A2($author$project$Main$viewHeader, model.l, lmodel),
							$author$project$Alert$view(model),
							A2(
							$mdgriffith$elm_ui$Element$layout,
							_List_Nil,
							A2(
								$mdgriffith$elm_ui$Element$wrappedRow,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$spaceEvenly,
										$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
										$mdgriffith$elm_ui$Element$padding(64)
									]),
								_List_fromArray(
									[
										A2(
										$mdgriffith$elm_ui$Element$el,
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$paddingEach(
												{an: 128, au: 32, aB: 32, aM: 0}),
												$mdgriffith$elm_ui$Element$width(
												A2($mdgriffith$elm_ui$Element$minimum, 512, $mdgriffith$elm_ui$Element$fill))
											]),
										$author$project$Main$viewPictUpdate(lmodel)),
										A2(
										$mdgriffith$elm_ui$Element$el,
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$paddingEach(
												{an: 128, au: 32, aB: 32, aM: 0}),
												$mdgriffith$elm_ui$Element$width(
												A2($mdgriffith$elm_ui$Element$minimum, 512, $mdgriffith$elm_ui$Element$fill))
											]),
										$author$project$Main$settingsView(lmodel)),
										A2(
										$mdgriffith$elm_ui$Element$el,
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$paddingEach(
												{an: 128, au: 32, aB: 32, aM: 0}),
												$mdgriffith$elm_ui$Element$width(
												A2($mdgriffith$elm_ui$Element$minimum, 512, $mdgriffith$elm_ui$Element$fill))
											]),
										$author$project$Main$viewPwUpdate(lmodel))
									]))),
							$author$project$Main$viewFooter
						]),
					C: 'matcha - notifications'
				};
			default:
				return {
					eE: $elm$core$List$singleton(
						A2(
							$mdgriffith$elm_ui$Element$layout,
							_List_Nil,
							A2(
								$mdgriffith$elm_ui$Element$column,
								_List_fromArray(
									[$mdgriffith$elm_ui$Element$centerX, $mdgriffith$elm_ui$Element$centerY]),
								_List_fromArray(
									[
										A2(
										$mdgriffith$elm_ui$Element$el,
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$padding(5),
												$mdgriffith$elm_ui$Element$centerX
											]),
										$mdgriffith$elm_ui$Element$text('You seem lost')),
										A2(
										$mdgriffith$elm_ui$Element$el,
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$padding(5),
												$mdgriffith$elm_ui$Element$centerX
											]),
										$mdgriffith$elm_ui$Element$html(
											A2(
												$elm$html$Html$a,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$href('/')
													]),
												_List_fromArray(
													[
														$elm$html$Html$text('go back home')
													]))))
									])))),
					C: 'matcha - 404 page not found'
				};
		}
	}
};
var $author$project$Main$main = $elm$browser$Browser$application(
	{g8: $author$project$Main$init, hw: $author$project$Main$onUrlChange, hx: $author$project$Main$onUrlRequest, hX: $author$project$Main$subscriptions, $8: $author$project$Main$update, ih: $author$project$Main$view});
_Platform_export({'Main':{'init':$author$project$Main$main(
	$elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
				A2(
				$elm$json$Json$Decode$map,
				$elm$core$Maybe$Just,
				A2(
					$elm$json$Json$Decode$andThen,
					function (pseudo) {
						return A2(
							$elm$json$Json$Decode$andThen,
							function (picture) {
								return $elm$json$Json$Decode$succeed(
									{fs: picture, fB: pseudo});
							},
							A2($elm$json$Json$Decode$field, 'picture', $elm$json$Json$Decode$string));
					},
					A2($elm$json$Json$Decode$field, 'pseudo', $elm$json$Json$Decode$string)))
			])))(0)}});}(this));