/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
PR.registerLangHandler(PR.createSimpleLexer([],[[PR.PR_COMMENT,/^[ \t\u000c]*[#!][^\r\n]*/],['lang-properties.value',/[ \t\u000c]*(?:[^ \t\u000c\r\n=:\\]|\\u[0-9a-f]{4,4}|\\(?:\r\n|\r|\n)[ \t\u000c]*|\\[\s\S])+[ \t\u000c]*([ \t\u000c=:](?:[^\r\n\\]|\\u[0-9a-f]{4,4}|\\\r\n|\\[\s\S])*)/i],[PR.PR_KEYWORD,/(?:[^ \t\u000c\r\n=:\\]|\\u[0-9a-f]{4,4}|\\(?:\r\n|\r|\n)[ \t\u000c]*|\\[\s\S])+/i],[PR.PR_PLAIN,/[ \t\u000c\r\n]/]]),['properties']);PR.registerLangHandler(PR.createSimpleLexer([],[[PR.PR_PUNCTUATION,/^[ \t\u000c=:][ \t\u000c]*/],[PR.PR_STRING,/[^ \t\u000c][\s\S]*/]]),['properties.value']);
