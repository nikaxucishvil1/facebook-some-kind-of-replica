export function loginFoo() {
  const loginBtn = document.querySelector("#loginBtn");
  const loginInputs = document.querySelectorAll(".inputs");
  const spans = document.querySelectorAll("#invalidInputSpan");

  loginBtn.addEventListener("click", () => {
    loginInputs.forEach((input, index) => {
      if (input.value === "") {
        spans[index].style.display = "block";
      } else {
        spans[index].style.display = "none";
      }

      input.addEventListener("focus", () => {
        spans[index].style.display = "none";
      });
    });
  });
}

export function disableFoo() {
  const registerBtn = document.querySelector("#createAccBtn");
  const loginBox = document.querySelector("#main");
  const loginBtn = document.querySelector("#loginBtn");
  const forgotBtn = document.querySelector("#forgot");
  const pageBtn = document.querySelector("#page");
  const loginInputs = document.querySelectorAll(".inputs");

  registerBtn.addEventListener("click", () => {
    loginBox.style.filter = "blur(2px)";
    loginBtn.disabled = true;
    forgotBtn.href = "javascript:void(0)";
    forgotBtn.style.pointerEvents = "none";
    pageBtn.href = "javascript:void(0)";
    pageBtn.style.pointerEvents = "none";
    loginInputs.forEach((input) => {
      input.disabled = true;
    });
  });
}

export function registerFoo() {
  const registerBtn = document.querySelector("#createAccBtn");
  const registerBox = document.querySelector("#register");
  const inputs = document.querySelectorAll(".inputsValid");
  const signupBtn = document.querySelector("#SignUpRegBtn");
  const spans = document.querySelectorAll("#regSpan");
  const leaveReg = document.querySelector("#RegDelBtn");

  registerBtn.addEventListener("click", () => {
    registerBox.style.display = "flex";
  });
  signupBtn.addEventListener("click", () => {
    inputs.forEach((input, index) => {
      if (input.value === "") {
        spans[index].style.display = "block";
      } else {
        spans[index].style.display = "none";
      }

      input.addEventListener("focus", () => {
        spans[index].style.display = "none";
      });
      input.addEventListener("focus", () => {
        spans[index].style.display = "none";
      });
    });
  });

  leaveReg.addEventListener("click", () => {
    const registerBtn = document.querySelector("#createAccBtn");
    const loginBox = document.querySelector("#main");
    const loginBtn = document.querySelector("#loginBtn");
    const forgotBtn = document.querySelector("#forgot");
    const pageBtn = document.querySelector("#page");
    const loginInputs = document.querySelectorAll(".inputs");

    registerBox.style.display = "none";
    loginBox.style.filter = "blur(0px)";
    loginBtn.disabled = false;
    forgotBtn.href = "youtube.com";
    forgotBtn.style.pointerEvents = "auto";
    pageBtn.href = "youtube.com";
    pageBtn.style.pointerEvents = "auto";
    loginInputs.forEach((input) => {
      input.disabled = false;
    });
  });
}
export function createAccFoo() {
  let userData = [];
  const signupBtn = document.querySelector("#SignUpRegBtn");

  signupBtn.addEventListener("click", () => {
    const inputs = document.querySelectorAll(".inputsValid");

    const inputValues = Array.from(inputs).map((input) => input.value); // es chatgpt m chamiswora

    const [firstName, lastName, emailOrMobile, password, age] = inputValues; // esec damimata

    if (
      firstName !== "" &&
      lastName !== "" &&
      emailOrMobile !== "" &&
      password !== "" &&
      age !== ""
    ) {
      userData.push({
        firstName: firstName,
        lastName: lastName,
        loginInfo: emailOrMobile,
        password: password,
        age: age,
      });
    } else {
      console.error("something went wrong");
    }
    localStorage.setItem("data", JSON.stringify(userData));
  });


  loginCheckAcc();
}

function loginCheckAcc() {
  const loginInputs = document.querySelectorAll(".inputs");
  const loginBtn = document.querySelector("#loginBtn");
  const accNotFoundSpan = document.querySelector("#notFoundSpan");

  loginBtn.addEventListener("click", () => {
    const loginInputsValues = Array.from(loginInputs).map(
      (input) => input.value
    );
    const [emailOrMobile, password] = loginInputsValues;
    const datas = JSON.parse(localStorage.getItem("data")); // esec chatgpt

    datas.forEach((data) => {
      if (emailOrMobile === data.loginInfo && password === data.password) {
        accNotFoundSpan.style.display = "none";
        console.log("hello");
      } else if (emailOrMobile === "" || password === "") {
        loginFoo();
      } else {
        accNotFoundSpan.style.display = "block";
      }
    });
  });
}
