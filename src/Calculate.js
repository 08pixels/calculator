const EMPTY_EXPR = '';
const ERROR_MSG = 'Error';

function errorMessage() {
  return ERROR_MSG;
}

function isShowingErrorMessage(expr) {
  return expr === errorMessage();
}

function clearScreen() {
  return EMPTY_EXPR;
}

function evaluateExpr(expr) {
  let answer = clearScreen();

  if (expr) {
    try {
      expr = expr.replace(/x/gi, '*');
      expr = expr.replace(/\^/gi, '**');

      answer = eval(expr);
    } catch {
      answer = ERROR_MSG;
    }
  }

  return answer;
}

function eraseLast(expr) {
  if (expr.length === 0) {
    return clearScreen();
  }

  if (isShowingErrorMessage(expr)) {
    return clearScreen();
  }

  return expr.substr(0, expr.length - 1);
}

function addToExpr(expr, value) {
  if (isShowingErrorMessage(expr)) {
    expr = clearScreen();
  }

  /* do not allow a sequence of the same operator */
  switch (value) {
    case '^':
    case '/':
    case 'x':
    case '-':
    case '+':
      if (value === expr[expr.length - 1]) {
        return expr;
      }
      break;
    default:
      return expr + value;
  }
}

export default function calculate(expr, value) {
  switch (value) {
    case 'C':
      return clearScreen();
    case '=':
      return evaluateExpr(expr);
    case 'del':
      return eraseLast(expr);
    default:
      return addToExpr(expr, value);
  }
}
