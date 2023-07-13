const questions = ["찍신의 달인", "무엇이든 이루어져라", "원하는 대학교로", "우리 회식 언제해?????"];

function selectAnswer(answerIndex) {
  const resultElement = document.getElementById("result");
  resultElement.textContent = `당신은 ${answerIndex + 1}번을 선택함: ${questions[answerIndex]}`;
}
