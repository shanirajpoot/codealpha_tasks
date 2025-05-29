function calculateAge() {
        const dobInput = document.getElementById("dob").value;
        if (!dobInput) {
          alert("Please select your date of birth.");
          return;
        }

        const dob = new Date(dobInput);
        const today = new Date();

        let years = today.getFullYear() - dob.getFullYear();
        let months = today.getMonth() - dob.getMonth();
        let days = today.getDate() - dob.getDate();

        if (days < 0) {
          months -= 1;
          days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }

        if (months < 0) {
          years -= 1;
          months += 12;
        }

        document.getElementById(
          "result"
        ).innerText = `You are ${years} years, ${months} months, and ${days} days old.`;
      }