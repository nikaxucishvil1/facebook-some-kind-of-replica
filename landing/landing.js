
const post = [];
function getName() {
  const span = document.querySelector("#GetName");

  const Data = localStorage.getItem("data");
  const result = JSON.parse(Data);
  const UserName = result[0].firstName + " " + result[0].lastName;

  span.textContent = UserName;
}
getName();

function poster() {
  const mainInput = document.querySelector("#input");
  const postDiv = document.querySelector("#post");
  const postDiv2 = document.querySelector("#postBack")
  const postInputs = document.getElementById("postInput");

  postInputs.addEventListener("focus", () => {
    mainInput.disabled = true;
    postDiv.style.display = "flex";
   
    postDiv2.style.display = 'flex'
    postDiv2.style.position = 'absolute'
  });
}
poster();

function addPost() {
 
  const postContent = document.querySelector("#textArea");
  const mainInput = document.querySelector("#input");
  const postDiv = document.querySelector("#post");
  const postBtn = document.querySelector("#postBtn");

  postBtn.addEventListener("click", () => {
    if (postContent.value === "") {
      alert("can not post nothing");
    } else {
      const date = new Date().getDate();
      const Data = localStorage.getItem("data");
      const resultData = JSON.parse(Data);
      const UserName = resultData[0].firstName + " " + resultData[0].lastName;
      const result = {
        value: postContent.value,
        name: UserName,
        date: date,
      };
      post.push(result);
      const backPostInfo = JSON.stringify(post);
      localStorage.setItem("posts", backPostInfo);
      const postDiv = document.querySelector("#post");
      postDiv.style.display = "none";
      postContent.value = ``
      getPost();
    }
  });
  const backBtn = document.querySelector("#GobackPostBtn");
  backBtn.addEventListener("click", () => {
    mainInput.disabled = false;
    postDiv.style.display = "none";
  });
}
addPost();

function mobileAddpost() {
  const mainInput = document.querySelector("#input");
  const postDiv = document.querySelector("#post");
  const input = document.querySelector("#postInputMobile");
  input.addEventListener("focus",() => {
    mainInput.disabled = true;
    postDiv.style.display = "flex";
  })
}
mobileAddpost()
function getPost() {
  const postData = JSON.parse(localStorage.getItem("posts"));
  const div = document.querySelector("#postsDiv");

  div.innerHTML = ``;

  postData.forEach((item, index) => {
    const createDiv = document.createElement("div");

    createDiv.innerHTML = `
    <div id="Postmain">
        <div id="footerPostDiv">
            <div id="leftContentFooter">
                <div id="imgDiv">
                    <img id="poto" src="https://facebook-ochre-ten.vercel.app/img-mobile/user.jpg" alt="">
                </div>
                <div id="infoDiv">
                    <span>${item.name}</span>
                    <span>${item.Date}</span>
                </div>
            </div>
            <div id="rightContentFooter">
                <button id="delBtn" data-index="${index}">XX</button>
            </div>
        </div>
        <div id="postContent">
            <span id="spanContent" style="font-size: 30px;">${item.value}</span>
        </div>
        <div id="postBtnDiv">
            <button id="postBtn"><i class="fa-regular fa-thumbs-up"></i></button>
            <button id="postBtn"><i class="fa-regular fa-comment"></i></button>
            <button id="postBtn"><i class="fa-solid fa-share"></i></button>
        </div>
    </div>
    `;
    
    div.appendChild(createDiv);
  });
}

