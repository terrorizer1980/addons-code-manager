(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1872:function(module,exports){module.exports=function(hljs){var commentMode=hljs.COMMENT(/\(\*/,/\*\)/);return{illegal:/\S/,contains:[commentMode,{className:"attribute",begin:/^[ ]*[a-zA-Z][a-zA-Z-]*([\s-]+[a-zA-Z][a-zA-Z]*)*/},{begin:/=/,end:/;/,contains:[commentMode,{className:"meta",begin:/\?.*\?/},hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE]}]}}}}]);