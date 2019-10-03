import { clear } from "sisteransi";

const EMPTY_EXPR = '';
const ERROR_MSG = 'Error';

function isShowingErrorMessage(expr) {
  return expr === 'Error';
}

function clearScreen() {
  return EMPTY_EXPR;
}

function evaluateExpr(expr) {
  let answer = EMPTY_EXPR;

  if (expr) {
    try {
      answer = eval(expr.replace(/x/gi, '*'));
    } catch {
      answer = ERROR_MSG;
    }
  }

  return answer;
}

function eraseLast(expr) {
  if (expr.length !== 0) {
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

  return expr + value;
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
