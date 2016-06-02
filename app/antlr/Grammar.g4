grammar Grammar;

functionDef
    : ROUTINE_KW ID RECEIVES_KW PAR_L TYPE_NUM ID PAR_R RETURNS_KW TYPE_NUM CURLY_BRACE_L CURLY_BRACE_R;

PAR_L : '(';
PAR_R : ')';

CURLY_BRACE_L : '{';
CURLY_BRACE_R : '}';

TYPE_NUM: 'número';

RECEIVES_KW : 'recebe';
RETURNS_KW : 'retorna';
ROUTINE_KW : 'rotina';


LETTER : ('a' .. 'z')
       | ('A' .. 'Z');

ID : LETTER LETTER*;

WHITESPACE : (' ' | '\t' | '\n')+ -> skip;

