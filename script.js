
  function updateTable(subject, gradeValues) {
    const sum = gradeValues.reduce((acc, curr) => acc + curr, 0);
    const average = sum / gradeValues.length;

    for (let i = 0; i < gradeValues.length; i++) {
      const cell = document.getElementById(`${subject}nota${i + 1}`);
      if (cell) {
        cell.innerText = gradeValues[i];
      }
    }

    const averageCell = document.getElementById(`${subject}promedio`);
    if (averageCell) {
      averageCell.innerText = average.toFixed(2);
    }
  }

  function promptGrades(event) {
    const button = event.currentTarget;
    let subject = '';

    if (button.hasAttribute('data-html')) {
      subject = 'html';
    } else if (button.hasAttribute('data-css')) {
      subject = 'css';
    } else if (button.hasAttribute('data-js')) {
      subject = 'js';
    }

    const grade1 = parseFloat(prompt("Primera nota:"));
    const grade2 = parseFloat(prompt("Segunda nota:"));
    const grade3 = parseFloat(prompt("Tercera nota:"));

    if (isNaN(grade1) || isNaN(grade2) || isNaN(grade3)) {
      alert("Ingresa un número válido.");
      return;
    }

    const gradeValues = [grade1, grade2, grade3];
    updateTable(subject, gradeValues);
  }

  const buttons = document.querySelectorAll('[data-html], [data-css], [data-js]');
  buttons.forEach(button => button.addEventListener('click', promptGrades));

