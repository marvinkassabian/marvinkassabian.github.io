"use strict";
var Engine;
(function (Engine) {
    var VirtualKey;
    (function (_VirtualKey) {
        (function (VirtualKey) {
            /** Cancel key. */
            VirtualKey[VirtualKey["VK_CANCEL"] = 3] = "VK_CANCEL";
            /** Help key. */
            VirtualKey[VirtualKey["VK_HELP"] = 6] = "VK_HELP";
            /** Backspace key. */
            VirtualKey[VirtualKey["VK_BACK_SPACE"] = 8] = "VK_BACK_SPACE";
            /** Tab key. */
            VirtualKey[VirtualKey["VK_TAB"] = 9] = "VK_TAB";
            /** 5 key on Numpad when NumLock is unlocked. Or on Mac, clear key which is positioned at NumLock key. */
            VirtualKey[VirtualKey["VK_CLEAR"] = 12] = "VK_CLEAR";
            /** Return/enter key on the main keyboard. */
            VirtualKey[VirtualKey["VK_RETURN"] = 13] = "VK_RETURN";
            /** Reserved, but not used. */
            VirtualKey[VirtualKey["VK_ENTER"] = 14] = "VK_ENTER";
            /** Shift key. */
            VirtualKey[VirtualKey["VK_SHIFT"] = 16] = "VK_SHIFT";
            /** Control key. */
            VirtualKey[VirtualKey["VK_CONTROL"] = 17] = "VK_CONTROL";
            /** Alt (Option on Mac) key. */
            VirtualKey[VirtualKey["VK_ALT"] = 18] = "VK_ALT";
            /** Pause key. */
            VirtualKey[VirtualKey["VK_PAUSE"] = 19] = "VK_PAUSE";
            /** Caps lock. */
            VirtualKey[VirtualKey["VK_CAPS_LOCK"] = 20] = "VK_CAPS_LOCK";
            /** Escape key. */
            VirtualKey[VirtualKey["VK_ESCAPE"] = 27] = "VK_ESCAPE";
            /** Space bar. */
            VirtualKey[VirtualKey["VK_SPACE"] = 32] = "VK_SPACE";
            /** Page Up key. */
            VirtualKey[VirtualKey["VK_PAGE_UP"] = 33] = "VK_PAGE_UP";
            /** Page Down key. */
            VirtualKey[VirtualKey["VK_PAGE_DOWN"] = 34] = "VK_PAGE_DOWN";
            /** End key. */
            VirtualKey[VirtualKey["VK_END"] = 35] = "VK_END";
            /** Home key. */
            VirtualKey[VirtualKey["VK_HOME"] = 36] = "VK_HOME";
            /** Left arrow. */
            VirtualKey[VirtualKey["VK_LEFT"] = 37] = "VK_LEFT";
            /** Up arrow. */
            VirtualKey[VirtualKey["VK_UP"] = 38] = "VK_UP";
            /** Right arrow. */
            VirtualKey[VirtualKey["VK_RIGHT"] = 39] = "VK_RIGHT";
            /** Down arrow. */
            VirtualKey[VirtualKey["VK_DOWN"] = 40] = "VK_DOWN";
            /** Print Screen key. */
            VirtualKey[VirtualKey["VK_PRINTSCREEN"] = 44] = "VK_PRINTSCREEN";
            /** Ins(ert) key. */
            VirtualKey[VirtualKey["VK_INSERT"] = 45] = "VK_INSERT";
            /** Del(ete) key. */
            VirtualKey[VirtualKey["VK_DELETE"] = 46] = "VK_DELETE";
            /***/
            VirtualKey[VirtualKey["VK_0"] = 48] = "VK_0";
            /***/
            VirtualKey[VirtualKey["VK_1"] = 49] = "VK_1";
            /***/
            VirtualKey[VirtualKey["VK_2"] = 50] = "VK_2";
            /***/
            VirtualKey[VirtualKey["VK_3"] = 51] = "VK_3";
            /***/
            VirtualKey[VirtualKey["VK_4"] = 52] = "VK_4";
            /***/
            VirtualKey[VirtualKey["VK_5"] = 53] = "VK_5";
            /***/
            VirtualKey[VirtualKey["VK_6"] = 54] = "VK_6";
            /***/
            VirtualKey[VirtualKey["VK_7"] = 55] = "VK_7";
            /***/
            VirtualKey[VirtualKey["VK_8"] = 56] = "VK_8";
            /***/
            VirtualKey[VirtualKey["VK_9"] = 57] = "VK_9";
            /** Colon (:) key. Requires Gecko 15.0 */
            VirtualKey[VirtualKey["VK_COLON"] = 58] = "VK_COLON";
            /** Semicolon (;) key. */
            VirtualKey[VirtualKey["VK_SEMICOLON"] = 59] = "VK_SEMICOLON";
            /** Less-than (<) key. Requires Gecko 15.0 */
            VirtualKey[VirtualKey["VK_LESS_THAN"] = 60] = "VK_LESS_THAN";
            /** Equals (=) key. */
            VirtualKey[VirtualKey["VK_EQUALS"] = 61] = "VK_EQUALS";
            /** Greater-than (>) key. Requires Gecko 15.0 */
            VirtualKey[VirtualKey["VK_GREATER_THAN"] = 62] = "VK_GREATER_THAN";
            /** Question mark (?) key. Requires Gecko 15.0 */
            VirtualKey[VirtualKey["VK_QUESTION_MARK"] = 63] = "VK_QUESTION_MARK";
            /** Atmark (@) key. Requires Gecko 15.0 */
            VirtualKey[VirtualKey["VK_AT"] = 64] = "VK_AT";
            /***/
            VirtualKey[VirtualKey["VK_A"] = 65] = "VK_A";
            /***/
            VirtualKey[VirtualKey["VK_B"] = 66] = "VK_B";
            /***/
            VirtualKey[VirtualKey["VK_C"] = 67] = "VK_C";
            /***/
            VirtualKey[VirtualKey["VK_D"] = 68] = "VK_D";
            /***/
            VirtualKey[VirtualKey["VK_E"] = 69] = "VK_E";
            /***/
            VirtualKey[VirtualKey["VK_F"] = 70] = "VK_F";
            /***/
            VirtualKey[VirtualKey["VK_G"] = 71] = "VK_G";
            /***/
            VirtualKey[VirtualKey["VK_H"] = 72] = "VK_H";
            /***/
            VirtualKey[VirtualKey["VK_I"] = 73] = "VK_I";
            /***/
            VirtualKey[VirtualKey["VK_J"] = 74] = "VK_J";
            /***/
            VirtualKey[VirtualKey["VK_K"] = 75] = "VK_K";
            /***/
            VirtualKey[VirtualKey["VK_L"] = 76] = "VK_L";
            /***/
            VirtualKey[VirtualKey["VK_M"] = 77] = "VK_M";
            /***/
            VirtualKey[VirtualKey["VK_N"] = 78] = "VK_N";
            /***/
            VirtualKey[VirtualKey["VK_O"] = 79] = "VK_O";
            /***/
            VirtualKey[VirtualKey["VK_P"] = 80] = "VK_P";
            /***/
            VirtualKey[VirtualKey["VK_Q"] = 81] = "VK_Q";
            /***/
            VirtualKey[VirtualKey["VK_R"] = 82] = "VK_R";
            /***/
            VirtualKey[VirtualKey["VK_S"] = 83] = "VK_S";
            /***/
            VirtualKey[VirtualKey["VK_T"] = 84] = "VK_T";
            /***/
            VirtualKey[VirtualKey["VK_U"] = 85] = "VK_U";
            /***/
            VirtualKey[VirtualKey["VK_V"] = 86] = "VK_V";
            /***/
            VirtualKey[VirtualKey["VK_W"] = 87] = "VK_W";
            /***/
            VirtualKey[VirtualKey["VK_X"] = 88] = "VK_X";
            /***/
            VirtualKey[VirtualKey["VK_Y"] = 89] = "VK_Y";
            /***/
            VirtualKey[VirtualKey["VK_Z"] = 90] = "VK_Z";
            /***/
            VirtualKey[VirtualKey["VK_CONTEXT_MENU"] = 93] = "VK_CONTEXT_MENU";
            /** 0 on the numeric keypad. */
            VirtualKey[VirtualKey["VK_NUMPAD0"] = 96] = "VK_NUMPAD0";
            /** 1 on the numeric keypad. */
            VirtualKey[VirtualKey["VK_NUMPAD1"] = 97] = "VK_NUMPAD1";
            /** 2 on the numeric keypad. */
            VirtualKey[VirtualKey["VK_NUMPAD2"] = 98] = "VK_NUMPAD2";
            /** 3 on the numeric keypad. */
            VirtualKey[VirtualKey["VK_NUMPAD3"] = 99] = "VK_NUMPAD3";
            /** 4 on the numeric keypad. */
            VirtualKey[VirtualKey["VK_NUMPAD4"] = 100] = "VK_NUMPAD4";
            /** 5 on the numeric keypad. */
            VirtualKey[VirtualKey["VK_NUMPAD5"] = 101] = "VK_NUMPAD5";
            /** 6 on the numeric keypad. */
            VirtualKey[VirtualKey["VK_NUMPAD6"] = 102] = "VK_NUMPAD6";
            /** 7 on the numeric keypad. */
            VirtualKey[VirtualKey["VK_NUMPAD7"] = 103] = "VK_NUMPAD7";
            /** 8 on the numeric keypad. */
            VirtualKey[VirtualKey["VK_NUMPAD8"] = 104] = "VK_NUMPAD8";
            /** 9 on the numeric keypad. */
            VirtualKey[VirtualKey["VK_NUMPAD9"] = 105] = "VK_NUMPAD9";
            /** * on the numeric keypad. */
            VirtualKey[VirtualKey["VK_MULTIPLY"] = 106] = "VK_MULTIPLY";
            /** + on the numeric keypad. */
            VirtualKey[VirtualKey["VK_ADD"] = 107] = "VK_ADD";
            /***/
            VirtualKey[VirtualKey["VK_SEPARATOR"] = 108] = "VK_SEPARATOR";
            /** - on the numeric keypad. */
            VirtualKey[VirtualKey["VK_SUBTRACT"] = 109] = "VK_SUBTRACT";
            /** Decimal point on the numeric keypad. */
            VirtualKey[VirtualKey["VK_DECIMAL"] = 110] = "VK_DECIMAL";
            /** / on the numeric keypad. */
            VirtualKey[VirtualKey["VK_DIVIDE"] = 111] = "VK_DIVIDE";
            /** F1 key. */
            VirtualKey[VirtualKey["VK_F1"] = 112] = "VK_F1";
            /** F2 key. */
            VirtualKey[VirtualKey["VK_F2"] = 113] = "VK_F2";
            /** F3 key. */
            VirtualKey[VirtualKey["VK_F3"] = 114] = "VK_F3";
            /** F4 key. */
            VirtualKey[VirtualKey["VK_F4"] = 115] = "VK_F4";
            /** F5 key. */
            VirtualKey[VirtualKey["VK_F5"] = 116] = "VK_F5";
            /** F6 key. */
            VirtualKey[VirtualKey["VK_F6"] = 117] = "VK_F6";
            /** F7 key. */
            VirtualKey[VirtualKey["VK_F7"] = 118] = "VK_F7";
            /** F8 key. */
            VirtualKey[VirtualKey["VK_F8"] = 119] = "VK_F8";
            /** F9 key. */
            VirtualKey[VirtualKey["VK_F9"] = 120] = "VK_F9";
            /** F10 key. */
            VirtualKey[VirtualKey["VK_F10"] = 121] = "VK_F10";
            /** F11 key. */
            VirtualKey[VirtualKey["VK_F11"] = 122] = "VK_F11";
            /** F12 key. */
            VirtualKey[VirtualKey["VK_F12"] = 123] = "VK_F12";
            /** F13 key. */
            VirtualKey[VirtualKey["VK_F13"] = 124] = "VK_F13";
            /** F14 key. */
            VirtualKey[VirtualKey["VK_F14"] = 125] = "VK_F14";
            /** F15 key. */
            VirtualKey[VirtualKey["VK_F15"] = 126] = "VK_F15";
            /** F16 key. */
            VirtualKey[VirtualKey["VK_F16"] = 127] = "VK_F16";
            /** F17 key. */
            VirtualKey[VirtualKey["VK_F17"] = 128] = "VK_F17";
            /** F18 key. */
            VirtualKey[VirtualKey["VK_F18"] = 129] = "VK_F18";
            /** F19 key. */
            VirtualKey[VirtualKey["VK_F19"] = 130] = "VK_F19";
            /** F20 key. */
            VirtualKey[VirtualKey["VK_F20"] = 131] = "VK_F20";
            /** F21 key. */
            VirtualKey[VirtualKey["VK_F21"] = 132] = "VK_F21";
            /** F22 key. */
            VirtualKey[VirtualKey["VK_F22"] = 133] = "VK_F22";
            /** F23 key. */
            VirtualKey[VirtualKey["VK_F23"] = 134] = "VK_F23";
            /** F24 key. */
            VirtualKey[VirtualKey["VK_F24"] = 135] = "VK_F24";
            /** Num Lock key. */
            VirtualKey[VirtualKey["VK_NUM_LOCK"] = 144] = "VK_NUM_LOCK";
            /** Scroll Lock key. */
            VirtualKey[VirtualKey["VK_SCROLL_LOCK"] = 145] = "VK_SCROLL_LOCK";
            /** Circumflex (^) key. Requires Gecko 15.0 */
            VirtualKey[VirtualKey["VK_CIRCUMFLEX"] = 160] = "VK_CIRCUMFLEX";
            /** Exclamation (!) key. Requires Gecko 15.0 */
            VirtualKey[VirtualKey["VK_EXCLAMATION"] = 161] = "VK_EXCLAMATION";
            /** Double quote () key. Requires Gecko 15.0 */
            VirtualKey[VirtualKey["VK_DOUBLE_QUOTE"] = 162] = "VK_DOUBLE_QUOTE";
            /** Hash (#) key. Requires Gecko 15.0 */
            VirtualKey[VirtualKey["VK_HASH"] = 163] = "VK_HASH";
            /** Dollar sign ($) key. Requires Gecko 15.0 */
            VirtualKey[VirtualKey["VK_DOLLAR"] = 164] = "VK_DOLLAR";
            /** Percent (%) key. Requires Gecko 15.0 */
            VirtualKey[VirtualKey["VK_PERCENT"] = 165] = "VK_PERCENT";
            /** Ampersand (&) key. Requires Gecko 15.0 */
            VirtualKey[VirtualKey["VK_AMPERSAND"] = 166] = "VK_AMPERSAND";
            /** Underscore (_) key. Requires Gecko 15.0 */
            VirtualKey[VirtualKey["VK_UNDERSCORE"] = 167] = "VK_UNDERSCORE";
            /** Open parenthesis (() key. Requires Gecko 15.0 */
            VirtualKey[VirtualKey["VK_OPEN_PAREN"] = 168] = "VK_OPEN_PAREN";
            /** Close parenthesis ()) key. Requires Gecko 15.0 */
            VirtualKey[VirtualKey["VK_CLOSE_PAREN"] = 169] = "VK_CLOSE_PAREN";
            /* Asterisk (*) key. Requires Gecko 15.0 */
            VirtualKey[VirtualKey["VK_ASTERISK"] = 170] = "VK_ASTERISK";
            /** Plus (+) key. Requires Gecko 15.0 */
            VirtualKey[VirtualKey["VK_PLUS"] = 171] = "VK_PLUS";
            /** Pipe (|) key. Requires Gecko 15.0 */
            VirtualKey[VirtualKey["VK_PIPE"] = 172] = "VK_PIPE";
            /** Hyphen-US/docs/Minus (-) key. Requires Gecko 15.0 */
            VirtualKey[VirtualKey["VK_HYPHEN_MINUS"] = 173] = "VK_HYPHEN_MINUS";
            /** Open curly bracket ({) key. Requires Gecko 15.0 */
            VirtualKey[VirtualKey["VK_OPEN_CURLY_BRACKET"] = 174] = "VK_OPEN_CURLY_BRACKET";
            /** Close curly bracket (}) key. Requires Gecko 15.0 */
            VirtualKey[VirtualKey["VK_CLOSE_CURLY_BRACKET"] = 175] = "VK_CLOSE_CURLY_BRACKET";
            /** Tilde (~) key. Requires Gecko 15.0 */
            VirtualKey[VirtualKey["VK_TILDE"] = 176] = "VK_TILDE";
            /** Comma (,) key. */
            VirtualKey[VirtualKey["VK_COMMA"] = 188] = "VK_COMMA";
            /** Period (.) key. */
            VirtualKey[VirtualKey["VK_PERIOD"] = 190] = "VK_PERIOD";
            /** Slash (/) key. */
            VirtualKey[VirtualKey["VK_SLASH"] = 191] = "VK_SLASH";
            /** Back tick (`) key. */
            VirtualKey[VirtualKey["VK_BACK_QUOTE"] = 192] = "VK_BACK_QUOTE";
            /** Open square bracket ([) key. */
            VirtualKey[VirtualKey["VK_OPEN_BRACKET"] = 219] = "VK_OPEN_BRACKET";
            /** Back slash (\) key. */
            VirtualKey[VirtualKey["VK_BACK_SLASH"] = 220] = "VK_BACK_SLASH";
            /** Close square bracket (]) key. */
            VirtualKey[VirtualKey["VK_CLOSE_BRACKET"] = 221] = "VK_CLOSE_BRACKET";
            /** Quote (''') key. */
            VirtualKey[VirtualKey["VK_QUOTE"] = 222] = "VK_QUOTE";
            /** Meta key on Linux, Command key on Mac. */
            VirtualKey[VirtualKey["VK_META"] = 224] = "VK_META";
            /** AltGr key on Linux. Requires Gecko 15.0 */
            VirtualKey[VirtualKey["VK_ALTGR"] = 225] = "VK_ALTGR";
            /** Windows logo key on Windows. Or Super or Hyper key on Linux.
            Requires Gecko 15.0 */
            VirtualKey[VirtualKey["VK_WIN"] = 91] = "VK_WIN";
            /** Linux support for this keycode was added in Gecko 4.0. */
            VirtualKey[VirtualKey["VK_KANA"] = 21] = "VK_KANA";
            /** Linux support for this keycode was added in Gecko 4.0. */
            VirtualKey[VirtualKey["VK_HANGUL"] = 21] = "VK_HANGUL";
            /** è‹±æ•° key on Japanese Mac keyboard. Requires Gecko 15.0 */
            VirtualKey[VirtualKey["VK_EISU"] = 22] = "VK_EISU";
            /** Linux support for this keycode was added in Gecko 4.0. */
            VirtualKey[VirtualKey["VK_JUNJA"] = 23] = "VK_JUNJA";
            /** Linux support for this keycode was added in Gecko 4.0. */
            VirtualKey[VirtualKey["VK_FINAL"] = 24] = "VK_FINAL";
            /** Linux support for this keycode was added in Gecko 4.0. */
            VirtualKey[VirtualKey["VK_HANJA"] = 25] = "VK_HANJA";
            /** Linux support for this keycode was added in Gecko 4.0. */
            VirtualKey[VirtualKey["VK_KANJI"] = 25] = "VK_KANJI";
            /** Linux support for this keycode was added in Gecko 4.0. */
            VirtualKey[VirtualKey["VK_CONVERT"] = 28] = "VK_CONVERT";
            /** Linux support for this keycode was added in Gecko 4.0. */
            VirtualKey[VirtualKey["VK_NONCONVERT"] = 29] = "VK_NONCONVERT";
            /** Linux support for this keycode was added in Gecko 4.0. */
            VirtualKey[VirtualKey["VK_ACCEPT"] = 30] = "VK_ACCEPT";
            /** Linux support for this keycode was added in Gecko 4.0. */
            VirtualKey[VirtualKey["VK_MODECHANGE"] = 31] = "VK_MODECHANGE";
            /** Linux support for this keycode was added in Gecko 4.0. */
            VirtualKey[VirtualKey["VK_SELECT"] = 41] = "VK_SELECT";
            /** Linux support for this keycode was added in Gecko 4.0. */
            VirtualKey[VirtualKey["VK_PRINT"] = 42] = "VK_PRINT";
            /** Linux support for this keycode was added in Gecko 4.0. */
            VirtualKey[VirtualKey["VK_EXECUTE"] = 43] = "VK_EXECUTE";
            /** Linux support for this keycode was added in Gecko 4.0.	 */
            VirtualKey[VirtualKey["VK_SLEEP"] = 95] = "VK_SLEEP";
        })(_VirtualKey.VirtualKey || (_VirtualKey.VirtualKey = {}));
        var VirtualKey = _VirtualKey.VirtualKey;
    })(VirtualKey = Engine.VirtualKey || (Engine.VirtualKey = {}));
})(Engine || (Engine = {}));
