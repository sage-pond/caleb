const codeContainer = document.getElementById('welcome-container');

  const statements = ["WELCOME TO SAGEPOND", "SAGEPOND AI-UG"];

  let statementIndex = 0;

  let charIndex = 0;



  function typeWriter() {

    if (statementIndex < statements.length) {

      const currentStatement = statements[statementIndex];

      

      if (charIndex < currentStatement.length) {

        codeContainer.innerHTML += currentStatement.charAt(charIndex);

        charIndex++;

        setTimeout(typeWriter, 50); // Adjust the delay for the desired typing speed

      } else {

        setTimeout(eraseText, 10000); // Delay before erasing the text

      }

    }

  }



  function eraseText() {

    const currentStatement = statements[statementIndex];

    

    if (charIndex >= 0) {

      codeContainer.innerHTML = currentStatement.substring(0, charIndex);

      charIndex--;

      setTimeout(eraseText, 30); // Adjust the delay for the desired erasing speed

    } else {

      statementIndex++;

      charIndex = 0;

      setTimeout(typeWriter, 500); // Delay before typing the next statement

    }

  }

  typeWriter();

  loop(typeWriter);
